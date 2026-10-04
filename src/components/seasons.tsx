import { Container } from "@/components/container";

const seasons = [
  {
    name: "Halloween",
    eyebrow: "October",
    body: "Porches, pathways and yard displays. Warm lights, a few well-placed pieces, and a front walk that feels ready for the evening.",
    accent: "text-[#8a5a32]",
  },
  {
    name: "Christmas",
    eyebrow: "December",
    body: "Warm-white rooflines, entry garland, trees and shrubs. From a simple gutter line to the whole front of the house.",
    accent: "text-gold-deep",
  },
];

export function Seasons() {
  return (
    <section id="seasons" className="bg-paper py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl text-balance sm:text-5xl">Halloween and Christmas</h2>
          <span className="mx-auto mt-5 block h-px w-12 bg-gold-deep" />
          <p className="mt-5 text-lg leading-relaxed text-muted text-pretty">
            Those are the two seasons we plan and install most. Tell us which one you want, or
            book both.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {seasons.map((season) => (
            <li key={season.name} className="rounded-3xl border border-line bg-cream p-6 sm:p-8">
              <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${season.accent}`}>
                {season.eyebrow}
              </p>
              <h3 className="mt-3 font-serif text-3xl">{season.name}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">{season.body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-5 rounded-3xl border border-line bg-cream px-6 py-5 text-lg leading-relaxed text-muted shadow-[inset_4px_0_0_#4d6d8c] sm:px-8">
          <span className="font-semibold text-ink">Hanukkah, too. </span>
          If you have a menorah or window lights, we can place them with the rest of the display.
          A small, careful addition.
        </p>
      </Container>
    </section>
  );
}
