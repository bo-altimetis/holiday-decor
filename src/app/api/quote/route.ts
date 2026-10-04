import { NextResponse } from "next/server";
import { submitQuoteForm } from "@/lib/quote";

export async function POST(request: Request) {
  const formData = await request.formData();
  const result = await submitQuoteForm(formData);
  const status = result.ok
    ? 200
    : result.code === "validation"
      ? 400
      : result.code === "not_configured"
        ? 503
        : 502;

  return NextResponse.json(result, { status });
}
