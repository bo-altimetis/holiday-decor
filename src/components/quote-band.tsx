import { SmsLink, TelLink } from "@/components/buttons";
import { Container } from "@/components/container";

export function QuoteBand() {
  return (
    <section id="quote" className="dark-section relative overflow-hidden bg-evergreen-deep py-20 text-cream sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,180,131,0.2),transparent_58%)]" />
      <Container className="relative max-w-3xl text-center">
        <h2 className="font-serif text-4xl text-balance sm:text-5xl lg:text-6xl">
          Want Your House Ready for the Holidays?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/85 text-pretty">
          Getting a quote takes about a minute. Take a photo of your house, text it to us, and
          tell us what you&apos;d like decorated.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <SmsLink className="w-full sm:w-auto">TEXT US A PHOTO</SmsLink>
          <TelLink className="w-full text-cream sm:w-auto">CALL US</TelLink>
        </div>
      </Container>
    </section>
  );
}
