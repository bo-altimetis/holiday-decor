import { SmsLink } from "@/components/buttons";
import { Container } from "@/components/container";

const steps = [
  {
    number: "1",
    title: "Send a Photo",
    body: "Text us a photo of the front of your house.",
  },
  {
    number: "2",
    title: "Tell Us Your Idea",
    body: "Tell us what you already own and what you'd like decorated.",
  },
  {
    number: "3",
    title: "Get Your Quote",
    body: "We'll review the project and provide a straightforward estimate.",
  },
  {
    number: "4",
    title: "Enjoy the Season",
    body: "We install the display so you can enjoy it without spending your weekend on a ladder.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="dark-section bg-evergreen py-16 text-cream sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl text-balance sm:text-5xl">
            Holiday Decorating Made Easy
          </h2>
          <span className="mx-auto mt-5 block h-px w-12 bg-gold" />
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="rounded-3xl border border-white/10 bg-evergreen-deep/50 p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold font-serif text-xl text-evergreen-deep">
                {step.number}
              </span>
              <h3 className="mt-5 font-serif text-2xl uppercase tracking-wide">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-cream/80">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <SmsLink className="w-full sm:w-auto">TEXT YOUR HOUSE PHOTO</SmsLink>
        </div>
      </Container>
    </section>
  );
}
