import { business } from "@/config/business";

export type QuoteCode = "not_configured" | "validation" | "sent" | "upstream";

export type QuoteFormState = {
  ok: boolean;
  message: string;
  code: QuoteCode;
};

const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

const notConfiguredMessage =
  "This form is not connected to an inbox yet, so the request was not sent. Please text us a photo of your house, or call, and we'll take it from there.";

const upstreamMessage =
  "We could not send the form just now. Please text or call and we'll help you from there.";

const sentMessage =
  "Thanks. We received your request and will follow up. If you have not already, text a photo of the front of your house so the quote is accurate.";

type QuoteFields = {
  name: string;
  phone: string;
  email: string;
  city: string;
  details: string;
  ownsDecorations: string;
  timeframe: string;
  photo: File | null;
};

function textField(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, max);
}

function multilineField(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.replace(/\r\n/g, "\n").trim().slice(0, max);
}

function photoField(formData: FormData): File | null {
  const value = formData.get("photo");
  if (!(value instanceof File) || value.size === 0) return null;
  return value;
}

function validate(fields: QuoteFields): string | null {
  if (fields.name.length < 2) return "Please enter your name.";
  if (fields.phone.replace(/\D/g, "").length < 7) {
    return "Please enter a phone number we can reach you at.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return "Please enter a valid email address.";
  }
  if (fields.city.length < 2) return "Please enter your city.";
  if (fields.details.length < 3) {
    return "Tell us a little about what you'd like decorated.";
  }
  if (!["yes", "no", "some"].includes(fields.ownsDecorations)) {
    return "Let us know if you already own decorations.";
  }
  if (!fields.timeframe) return "Please choose a preferred timeframe.";
  if (fields.photo && !fields.photo.type.startsWith("image/")) {
    return "Please choose an image file for the photo.";
  }
  if (fields.photo && fields.photo.size > MAX_PHOTO_BYTES) {
    return "Please choose a photo smaller than 5 MB.";
  }
  return null;
}

function ownershipLabel(value: string) {
  if (value === "yes") return "Yes";
  if (value === "no") return "No";
  if (value === "some") return "Some";
  return value;
}

function messageBody(fields: QuoteFields) {
  return [
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email}`,
    `City: ${fields.city}`,
    `Already owns decorations: ${ownershipLabel(fields.ownsDecorations)}`,
    `Preferred timeframe: ${fields.timeframe}`,
    "",
    "What they would like decorated:",
    fields.details,
    "",
    fields.photo
      ? `Photo attached: ${fields.photo.name || "house-photo"} (${Math.ceil(fields.photo.size / 1024)} KB)`
      : "No photo attached.",
  ].join("\n");
}

function backendName() {
  return process.env.QUOTE_BACKEND?.trim().toLowerCase() ?? "";
}

function missingConfig(message: string): QuoteFormState {
  console.error(`[quote] ${message}`);
  return { ok: false, code: "not_configured", message: notConfiguredMessage };
}

async function fileToBase64(file: File) {
  const bytes = Buffer.from(await file.arrayBuffer());
  return bytes.toString("base64");
}

async function sendFormspree(fields: QuoteFields): Promise<QuoteFormState> {
  const idOrUrl = process.env.FORMSPREE_FORM_ID?.trim();
  if (!idOrUrl) {
    return missingConfig("QUOTE_BACKEND=formspree but FORMSPREE_FORM_ID is empty.");
  }

  const endpoint = idOrUrl.startsWith("https://")
    ? idOrUrl
    : `https://formspree.io/f/${idOrUrl}`;

  const body = new FormData();
  body.set("name", fields.name);
  body.set("phone", fields.phone);
  body.set("email", fields.email);
  body.set("city", fields.city);
  body.set("ownsDecorations", ownershipLabel(fields.ownsDecorations));
  body.set("timeframe", fields.timeframe);
  body.set("details", fields.details);
  body.set("_subject", `Holiday lighting quote from ${fields.name}`);
  body.set("_replyto", fields.email);
  if (fields.photo) body.set("photo", fields.photo, fields.photo.name || "house-photo");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { Accept: "application/json" },
    body,
  });

  if (!response.ok) {
    console.error("[quote] Formspree error", response.status, await response.text());
    return { ok: false, code: "upstream", message: upstreamMessage };
  }

  return { ok: true, code: "sent", message: sentMessage };
}

async function sendResend(fields: QuoteFields): Promise<QuoteFormState> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.QUOTE_FROM_EMAIL?.trim();
  const to = process.env.QUOTE_TO_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    return missingConfig(
      "QUOTE_BACKEND=resend requires RESEND_API_KEY, QUOTE_FROM_EMAIL, and QUOTE_TO_EMAIL.",
    );
  }

  const payload: Record<string, unknown> = {
    from,
    to: [to],
    reply_to: fields.email,
    subject: `Holiday lighting quote from ${fields.name}`,
    text: messageBody(fields),
  };

  if (fields.photo) {
    payload.attachments = [
      {
        filename: fields.photo.name || "house-photo.jpg",
        content: await fileToBase64(fields.photo),
      },
    ];
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.error("[quote] Resend error", response.status, await response.text());
    return { ok: false, code: "upstream", message: upstreamMessage };
  }

  return { ok: true, code: "sent", message: sentMessage };
}

async function sendWebhook(fields: QuoteFields): Promise<QuoteFormState> {
  const url = process.env.QUOTE_WEBHOOK_URL?.trim();
  if (!url) {
    return missingConfig("QUOTE_BACKEND=webhook but QUOTE_WEBHOOK_URL is empty.");
  }

  const secret = process.env.QUOTE_WEBHOOK_SECRET?.trim();
  const payload: Record<string, unknown> = {
    name: fields.name,
    phone: fields.phone,
    email: fields.email,
    city: fields.city,
    ownsDecorations: fields.ownsDecorations,
    timeframe: fields.timeframe,
    details: fields.details,
    business: business.businessName,
    photo: fields.photo
      ? {
          filename: fields.photo.name || "house-photo.jpg",
          contentType: fields.photo.type,
          data: await fileToBase64(fields.photo),
        }
      : null,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(secret ? { Authorization: `Bearer ${secret}` } : {}),
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.error("[quote] Webhook error", response.status, await response.text());
    return { ok: false, code: "upstream", message: upstreamMessage };
  }

  return { ok: true, code: "sent", message: sentMessage };
}

/**
 * Validates a quote form and delivers it when QUOTE_BACKEND is configured.
 * With no backend, this returns an error and does not report success.
 */
export async function submitQuoteForm(formData: FormData): Promise<QuoteFormState> {
  if (textField(formData, "company", 200)) {
    return { ok: true, code: "sent", message: sentMessage };
  }

  const fields: QuoteFields = {
    name: textField(formData, "name", 80),
    phone: textField(formData, "phone", 30),
    email: textField(formData, "email", 120),
    city: textField(formData, "city", 80),
    details: multilineField(formData, "details", 2000),
    ownsDecorations: textField(formData, "ownsDecorations", 10).toLowerCase(),
    timeframe: textField(formData, "timeframe", 80),
    photo: photoField(formData),
  };

  const validationMessage = validate(fields);
  if (validationMessage) {
    return { ok: false, code: "validation", message: validationMessage };
  }

  try {
    switch (backendName()) {
      case "":
      case "none":
      case "unset":
        return missingConfig(
          "QUOTE_BACKEND is not set. The quote form is intentionally offline until a backend is configured.",
        );
      case "formspree":
        return await sendFormspree(fields);
      case "resend":
        return await sendResend(fields);
      case "webhook":
        return await sendWebhook(fields);
      default:
        return missingConfig(
          `Unknown QUOTE_BACKEND "${backendName()}". Use formspree, resend, or webhook.`,
        );
    }
  } catch (error) {
    console.error("[quote] Delivery failed", error);
    return { ok: false, code: "upstream", message: upstreamMessage };
  }
}
