import type { ReactNode } from "react";
import { Container } from "@/components/container";

const services: Array<{ title: string; body: string; icon: ReactNode }> = [
  {
    title: "Roofline Lighting",
    body: "Clean installation along gutters, eaves and rooflines.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 18 12 6l8 12" />
    ),
  },
  {
    title: "Porch & Entry Décor",
    body: "Garland, wreaths, pumpkins, lights and seasonal accents around your front entrance.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 20V9.5A2 2 0 0 1 8 7.5h8a2 2 0 0 1 2 2V20M4 20h16M12 7.5V4" />
    ),
  },
  {
    title: "Trees & Shrubs",
    body: "Lights and decorations for landscaping, small trees and bushes.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 20V10M7 14l5-8 5 8M5 18l7-8 7 8" />,
  },
  {
    title: "Walkways & Driveways",
    body: "Lighting and décor to create a welcoming path to your home.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 16c2-4 4-4 6 0s4 4 6 0 4-4 4 0" />,
  },
  {
    title: "Yard Decorations",
    body: "Installation of Halloween figures, Christmas displays and other outdoor decorations you already own.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M8 8h8M7 12h10M8 16h8" />,
  },
  {
    title: "Holiday Takedown",
    body: "Optional removal after Halloween or in January, so you don't have to climb the ladder again.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M9 7v11m6-11v11M8 18h8" />,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl text-balance sm:text-5xl">
            Make the Front of the House Feel Like the Season
          </h2>
          <span className="mx-auto mt-5 block h-px w-12 bg-gold-deep" />
          <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">
            Whether you need help getting a few boxes of decorations out of the garage or want
            the whole front of your home glowing, we can help.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-3xl border border-line bg-paper p-6 shadow-sm sm:p-7"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-evergreen text-gold">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  {service.icon}
                </svg>
              </span>
              <h3 className="mt-5 font-serif text-2xl">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{service.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-3xl border border-line bg-paper px-6 py-6 text-center sm:px-8">
          <p className="font-serif text-2xl">Have boxes of decorations already?</p>
          <p className="mt-2 text-lg text-muted">We can use what you own.</p>
        </div>
      </Container>
    </section>
  );
}
