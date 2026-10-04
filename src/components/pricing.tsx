import { formatPrice, startingPrices } from "@/config/business";
import { QuoteLink } from "@/components/buttons";
import { Container } from "@/components/container";
import { cx } from "@/lib/cx";

const packages = [
  {
    name: "Classic",
    price: startingPrices.classic,
    description: "Best for a simple, polished front-of-house display.",
    includes: [
      "Front roofline or gutter lighting",
      "Front entry decorating",
      "Basic timer setup",
      "Installation of customer-owned decorations",
    ],
    popular: false,
  },
  {
    name: "Festive",
    price: startingPrices.festive,
    description: "Roofline, front entry, shrubs or small trees, and walkway accents.",
    includes: [
      "Roofline lighting",
      "Front entry",
      "Shrubs or small trees",
      "Walkway accents",
      "Timer setup",
      "Installation of customer-owned decorations",
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: startingPrices.custom,
    description: "For larger homes or more elaborate displays.",
    includes: [
      "Multiple rooflines",
      "Extensive landscaping",
      "Large trees",
      "Yard displays",
      "Custom layouts",
      "Larger properties",
    ],
    popular: false,
  },
];

const helpExamples = [
  "Halloween porch decorating",
  "Wreath and garland installation",
  "Small lighting projects",
  "Yard decorations",
  "Hanukkah window lights",
  "Helping install decorations you already own",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream-deep py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl text-balance sm:text-5xl">Simple Starting Prices</h2>
          <span className="mx-auto mt-5 block h-px w-12 bg-gold-deep" />
        </div>

        <ul className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <li
              key={item.name}
              className={cx(
                "flex flex-col rounded-3xl border bg-paper p-6 shadow-sm sm:p-8",
                item.popular
                  ? "border-gold shadow-md ring-2 ring-gold lg:-translate-y-3"
                  : "border-line",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-3xl">{item.name}</h3>
                {item.popular ? (
                  <span className="rounded-full bg-burgundy px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream">
                    Most Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-gold-deep">
                Starting at
              </p>
              <p className="mt-1 font-serif text-5xl">{formatPrice(item.price)}</p>
              <p className="mt-4 leading-relaxed text-muted">{item.description}</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                {item.name === "Custom" ? "Includes possibilities such as" : "Includes"}
              </p>
              <ul className="mt-3 flex-1 space-y-2.5">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-1 text-gold-deep">
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4 10 4 4 8-8" />
                      </svg>
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <QuoteLink variant="evergreen" className="mt-8 w-full">
                Request a Quote
              </QuoteLink>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-3xl border border-line bg-paper p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-deep">
                Need a little help?
              </p>
              <h3 className="mt-2 font-serif text-3xl">Holiday Help</h3>
              <p className="mt-2 text-muted">
                Starting at {formatPrice(startingPrices.holidayHelp)}
              </p>
              <p className="mt-3 max-w-xl leading-relaxed">
                For smaller jobs using your existing decorations.
              </p>
            </div>
            <QuoteLink variant="evergreen" className="w-full lg:w-auto">
              Request a Quote
            </QuoteLink>
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {helpExamples.map((example) => (
              <li key={example} className="flex gap-3 leading-relaxed">
                <span aria-hidden="true" className="text-gold-deep">
                  •
                </span>
                {example}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-3 text-center text-base leading-relaxed text-muted">
          <p>
            Prices shown are starting estimates. Final pricing depends on the size of the home,
            roof access, amount of décor, installation complexity and materials required.
          </p>
          <p>
            If we supply lights or specialty materials, those will be included in the individual
            quote. The same starting ranges cover Halloween displays and Christmas lighting.
            Hanukkah window lights are usually part of a smaller visit.
          </p>
        </div>
      </Container>
    </section>
  );
}
