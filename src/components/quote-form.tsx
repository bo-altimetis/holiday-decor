"use client";

import { submitQuoteAction } from "@/app/actions/quote";
import { getSmsHref } from "@/config/business";
import { Container } from "@/components/container";
import type { QuoteFormState } from "@/lib/quote";
import { useActionState, useEffect, useRef, useState, type ChangeEvent } from "react";

const timeframes = [
  "As soon as possible",
  "Early November",
  "Mid-November",
  "The week of Thanksgiving",
  "Early December",
  "I am flexible",
];

const ownership = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "some", label: "Some" },
];

const fieldClass =
  "min-h-12 w-full rounded-xl border border-line bg-white px-4 text-base text-ink outline-none";

export function QuoteForm() {
  const [state, formAction, pending] = useActionState<QuoteFormState | null, FormData>(
    submitQuoteAction,
    null,
  );
  const [fields, setFields] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    details: "",
    ownsDecorations: "",
    timeframe: "",
  });
  const [fileName, setFileName] = useState("");
  const alertRef = useRef<HTMLDivElement>(null);

  function update(
    key: keyof typeof fields,
  ) {
    return (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      const value = event.target.value;
      setFields((current) => ({ ...current, [key]: value }));
    };
  }

  useEffect(() => {
    if (state?.message) alertRef.current?.focus();
  }, [state]);

  return (
    <section id="quote-form" className="bg-cream py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="font-serif text-4xl text-balance sm:text-5xl">Request a Quote</h2>
            <span className="mx-auto mt-5 block h-px w-12 bg-gold-deep" />
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Prefer not to text? Send the details here. A photo of the front of your house makes
              the estimate much easier.
            </p>
          </div>

          {state?.ok ? (
            <div
              ref={alertRef}
              tabIndex={-1}
              role="status"
              className="mt-10 rounded-3xl border border-line bg-paper px-6 py-8 text-center shadow-sm"
            >
              <p className="font-serif text-3xl">Request received</p>
              <p className="mt-3 leading-relaxed text-muted">{state.message}</p>
            </div>
          ) : (
            <form action={formAction} className="relative mt-10 space-y-5 overflow-hidden rounded-3xl border border-line bg-paper p-5 shadow-sm sm:p-8">
              {state?.message ? (
                <div
                  ref={alertRef}
                  tabIndex={-1}
                  role="alert"
                  className="rounded-2xl border border-burgundy/30 bg-[#f8ecec] px-4 py-3 text-sm leading-relaxed text-burgundy"
                >
                  {state.message}
                </div>
              ) : null}

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">Name</span>
                  <input className={fieldClass} name="name" autoComplete="name" required maxLength={80} value={fields.name} onChange={update("name")} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">Phone</span>
                  <input className={fieldClass} name="phone" type="tel" autoComplete="tel" inputMode="tel" required maxLength={30} value={fields.phone} onChange={update("phone")} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">Email</span>
                  <input className={fieldClass} name="email" type="email" autoComplete="email" required maxLength={120} value={fields.email} onChange={update("email")} />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">City</span>
                  <input className={fieldClass} name="city" autoComplete="address-level2" required maxLength={80} value={fields.city} onChange={update("city")} />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold">What would you like decorated?</span>
                <textarea
                  className={`${fieldClass} min-h-32 py-3`}
                  name="details"
                  required
                  maxLength={2000}
                  rows={5}
                  value={fields.details}
                  onChange={update("details")}
                />
              </label>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold">Do you already own decorations?</legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {ownership.map((option) => (
                    <label
                      key={option.value}
                      className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-line bg-white px-4"
                    >
                      <input
                        type="radio"
                        name="ownsDecorations"
                        value={option.value}
                        required
                        checked={fields.ownsDecorations === option.value}
                        onChange={update("ownsDecorations")}
                        className="h-4 w-4 accent-evergreen"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Preferred installation timeframe</span>
                <select className={fieldClass} name="timeframe" required value={fields.timeframe} onChange={update("timeframe")}>
                  <option value="" disabled>
                    Select a timeframe
                  </option>
                  {timeframes.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Optional photo upload</span>
                <input
                  className="block w-full text-base file:mr-4 file:min-h-12 file:rounded-full file:border-0 file:bg-evergreen file:px-5 file:font-semibold file:text-cream"
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
                />
                <span className="mt-2 block text-sm text-muted">
                  {fileName || "A photo of the front of the house is helpful. 5 MB maximum."}
                </span>
              </label>

              <div hidden>
                <label>
                  Company
                  <input name="company" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <button
                type="submit"
                disabled={pending}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold tracking-wide text-evergreen-deep hover:bg-gold-bright disabled:opacity-60"
              >
                {pending ? "Sending..." : "REQUEST MY QUOTE"}
              </button>
              <p className="text-center text-sm leading-relaxed text-muted">
                We use this only to reply about your project. You can also{" "}
                <a href={getSmsHref()} className="font-semibold text-evergreen underline">
                  text a photo
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
