"use server";

import { submitQuoteForm, type QuoteFormState } from "@/lib/quote";

export async function submitQuoteAction(
  _previous: QuoteFormState | null,
  formData: FormData,
): Promise<QuoteFormState> {
  return submitQuoteForm(formData);
}
