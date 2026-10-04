import { business } from "@/config/business";
import { SmsLink } from "@/components/buttons";
import { Container } from "@/components/container";

export function ServiceArea() {
  return (
    <section id="service-area" className="dark-section bg-evergreen-mid py-16 text-cream sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl text-balance sm:text-5xl">
            Serving the Willamette Valley
          </h2>
          <span className="mx-auto mt-5 block h-px w-12 bg-gold" />
          <p className="mt-5 text-lg text-cream/85">Serving homeowners in and around:</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {business.serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-white/15 bg-evergreen-deep/40 px-4 py-2 text-base font-semibold"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-cream/80">And surrounding communities.</p>
          <p className="mt-8 text-lg">Not sure if you&apos;re in the service area? Send us a text.</p>
          <SmsLink className="mt-6 w-full sm:w-auto">Text a Photo</SmsLink>
        </div>
      </Container>
    </section>
  );
}
