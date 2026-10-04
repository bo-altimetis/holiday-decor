import { formatPrice, startingPrices } from "@/config/business";
import { Container } from "@/components/container";

const faqs = [
  {
    question: "Do I need to provide my own lights?",
    answer:
      "No. We can install decorations you already own, and we can also discuss materials for a new Halloween or Christmas display when preparing your quote.",
  },
  {
    question: "Can you install decorations I already own?",
    answer:
      "Absolutely. This is one of the easiest ways to get professional help without replacing decorations you already love.",
  },
  {
    question: "How much does holiday decorating cost?",
    answer: `Smaller decorating projects generally start around ${formatPrice(startingPrices.holidayHelp)}. Front-of-house installations generally start around ${formatPrice(startingPrices.classic)}, while larger displays commonly start around ${formatPrice(startingPrices.festive)}–${formatPrice(startingPrices.custom)}+. Every property is different, so send us a photo for a personalized estimate.`,
  },
  {
    question: "Do you take the decorations down?",
    answer:
      "Yes. Halloween removal and January Christmas takedown can be added to your project.",
  },
  {
    question: "Do you decorate for Hanukkah?",
    answer:
      "In a simple way. If you have a menorah or window lights, we can place them. Send a photo and tell us what you already own.",
  },
  {
    question: "How do I get an estimate?",
    answer:
      "The easiest way is to text us a photo of your home and briefly describe what you'd like decorated. We'll follow up with any questions needed to prepare an estimate.",
  },
  {
    question: "When should I schedule?",
    answer:
      "Halloween dates fill through September and early October. Christmas dates are limited as Thanksgiving approaches. Booking earlier gives you the best selection of dates.",
  },
  {
    question: "Can you decorate tall or complicated roofs?",
    answer:
      "Send us photos of the property. Roof height, pitch and access will be reviewed before confirming the project.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-cream py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl sm:text-5xl">FAQ</h2>
          <span className="mx-auto mt-5 block h-px w-12 bg-gold-deep" />
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-line rounded-3xl border border-line bg-paper">
          {faqs.map((item) => (
            <details key={item.question} className="group px-5 py-1 sm:px-7">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-semibold leading-snug">{item.question}</h3>
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-xl leading-none text-gold-deep transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 pr-12 leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
