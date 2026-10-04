/**
 * Site-wide business settings.
 *
 * Replace PHONE_NUMBER_HERE and EMAIL_HERE before sharing the site.
 * Phone may include formatting, for example (503) 555-0199.
 * Links are built from `phone`, so it only needs to be changed here.
 */

export const business = {
  businessName: "Holiday Imaginarium",
  tagline: "You enjoy the holidays. We'll handle the ladder.",
  phone: "PHONE_NUMBER_HERE",
  email: "EMAIL_HERE",
  regionName: "Oregon's Willamette Valley",
  serviceAreas: [
    "Amity",
    "McMinnville",
    "Newberg",
    "Dundee",
    "Dayton",
    "Yamhill",
    "Beaverton",
  ],
  socialLinks: {
    facebook: "",
    instagram: "",
  },
} as const;

export const startingPrices = {
  holidayHelp: 250,
  classic: 450,
  festive: 750,
  custom: 1200,
} as const;

export const smsMessage =
  "Hi! I'd like a quote for holiday decorating. Here's a photo of my house:";

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Digits (and a leading +) for tel: and sms: links. Placeholders stay as written. */
export function dialablePhone(phone: string = business.phone) {
  const trimmed = phone.trim();
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length < 7) return trimmed;
  return `${trimmed.startsWith("+") ? "+" : ""}${digits}`;
}

export function getTelHref() {
  return `tel:${dialablePhone()}`;
}

/**
 * Opens the phone's text app with a short note already written.
 * `?&body=` works on current iPhones and Android phones.
 */
export function getSmsHref() {
  return `sms:${dialablePhone()}?&body=${encodeURIComponent(smsMessage)}`;
}

export function getMailtoHref() {
  return business.email.includes("@") ? `mailto:${business.email}` : undefined;
}

export function hasRealPhone() {
  return business.phone.replace(/\D/g, "").length >= 7;
}

export function hasRealEmail() {
  return business.email.includes("@");
}
