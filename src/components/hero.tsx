import { business } from "@/config/business";
import { QuoteLink, SmsLink } from "@/components/buttons";
import { Container } from "@/components/container";
import { HouseScene } from "@/components/house-scene";
import { getHeroImage } from "@/lib/media";
import Image from "next/image";

const trustPoints = [
  "Locally Owned",
  "Personal Service",
  "Halloween & Christmas",
  "Seasonal Takedown",
];

export function Hero() {
  const heroImage = getHeroImage();

  return (
    <section id="top" className="dark-section relative overflow-hidden bg-evergreen-deep text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,180,131,0.16),transparent_52%)]" />
      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-soft">
              {business.tagline}
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-4xl leading-[1.12] text-balance sm:text-5xl lg:text-[3.4rem]">
              Outdoor Holiday Decorating Without the Hassle
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85 text-pretty">
              Skip the ladders, tangled lights and cold weekends. Holiday Imaginarium installs outdoor
              displays for homes throughout the local area — Halloween porches, Christmas rooflines,
              and a simple Hanukkah window when you want one.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuoteLink className="w-full sm:w-auto">GET A FREE QUOTE</QuoteLink>
              <SmsLink variant="outline" className="w-full text-cream sm:w-auto">
                TEXT A PHOTO OF YOUR HOUSE
              </SmsLink>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/75">
              Already own your decorations? Perfect — we can install what you have.
            </p>
          </div>

          <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            {heroImage ? (
              <Image
                src={heroImage}
                alt="A house at night outlined in warm white Christmas lights, with lit shrubs and garland along the porch"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            ) : (
              <HouseScene />
            )}
          </figure>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-3 text-center text-sm font-semibold text-gold-soft sm:mt-16 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-3 sm:gap-y-2">
          {trustPoints.map((point, index) => (
            <li key={point} className="flex items-center justify-center gap-3">
              {index > 0 ? (
                <span aria-hidden="true" className="hidden text-gold sm:inline">
                  •
                </span>
              ) : null}
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
