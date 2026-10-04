import { Container } from "@/components/container";
import { getProjectImages } from "@/lib/media";
import Image from "next/image";

const tones = [
  "from-[#1d3a33] to-[#101c18]",
  "from-[#244038] to-[#13221d]",
  "from-[#1a332c] to-[#0e1a16]",
  "from-[#2a4038] to-[#14211c]",
  "from-[#20382f] to-[#101916]",
  "from-[#18342c] to-[#121c19]",
];

export function Projects() {
  const projects = getProjectImages();
  const hasPhotos = projects.some((project) => project.src);

  return (
    <section id="inspiration" className="bg-cream py-16 sm:py-24" aria-labelledby="inspiration-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="inspiration-heading" className="font-serif text-4xl text-balance sm:text-5xl">
            Holiday Inspiration
          </h2>
          <span className="mx-auto mt-5 block h-px w-12 bg-gold-deep" />
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {hasPhotos
              ? "Halloween porches and Christmas lights on real houses. Text a photo of yours and we will match the look to your home."
              : "Project photos coming this season."}
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.slot}>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
                {project.src ? (
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: project.position }}
                  />
                ) : (
                  <div
                    className={`flex h-full flex-col items-center justify-center bg-gradient-to-br ${tones[index]} px-6 text-center text-cream`}
                  >
                    <span className="mb-4 flex gap-2" aria-hidden="true">
                      {Array.from({ length: 5 }, (_, dot) => (
                        <span key={dot} className="h-2 w-2 rounded-full bg-[#fff6e4] shadow-[0_0_10px_#fff1cf]" />
                      ))}
                    </span>
                    <figcaption className="font-serif text-2xl">Photo {project.slot}</figcaption>
                    <p className="mt-1 text-sm text-gold-soft">Coming this season</p>
                  </div>
                )}
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
