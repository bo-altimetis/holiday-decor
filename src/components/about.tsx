import { business } from "@/config/business";
import { Container } from "@/components/container";

export function About() {
  return (
    <section id="about" className="border-t border-line bg-cream py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <h2 className="font-serif text-4xl text-balance sm:text-5xl">
              Local Service. Personal Attention.
            </h2>
            <span className="mt-5 block h-px w-12 bg-gold-deep" />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                This isn&apos;t a giant holiday lighting franchise. When you contact us, you&apos;re
                talking directly with the person who will help plan and install your decorations.
              </p>
              <p>
                We keep the process straightforward, communicate clearly and treat your home with
                care.
              </p>
            </div>
          </div>
          <blockquote className="rounded-3xl border border-line bg-paper px-7 py-8 shadow-sm sm:px-9 sm:py-10">
            <p className="font-serif text-3xl leading-snug text-balance sm:text-4xl">
              {business.tagline}
            </p>
            <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-gold-deep">
              {business.businessName} · {business.regionName}
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
