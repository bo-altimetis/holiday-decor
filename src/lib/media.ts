import fs from "node:fs";
import path from "node:path";

const extensions = ["jpg", "jpeg", "webp", "png", "avif"] as const;

/**
 * Returns a public URL when a file exists for the given path without an
 * extension, for example "hero" or "projects/project-1".
 * Checks jpg first, then jpeg, webp, png, and avif.
 */
export function findPublicImage(basePath: string) {
  for (const extension of extensions) {
    const relative = `${basePath}.${extension}`;
    const absolute = path.join(process.cwd(), "public", relative);
    if (fs.existsSync(absolute)) return `/${relative}`;
  }
  return null;
}

export function getHeroImage() {
  return findPublicImage("hero");
}

const projectMeta = [
  {
    slot: 1,
    alt: "A front porch at night lined with glowing jack-o'-lanterns, mums, and a wreath on the door",
    position: "center",
  },
  {
    slot: 2,
    alt: "A snowy house at night with warm white lights along the porch and a tall evergreen wrapped in lights",
    position: "center",
  },
  {
    slot: 3,
    alt: "A white house porch decorated for Halloween with hanging ghosts, pumpkins, and paper lanterns",
    position: "center",
  },
  {
    slot: 4,
    alt: "A brick house covered in warm white Christmas lights, with lit trees and snowflake lights in the windows",
    position: "center 68%",
  },
  {
    slot: 5,
    alt: "A cottage entry at night with string lights on the roofline, shrubs, and a garland along the fence",
    position: "center",
  },
  {
    slot: 6,
    alt: "Warm white lights tracing the peaks of two white houses against a night sky",
    position: "center 28%",
  },
] as const;

export function getProjectImages() {
  return projectMeta.map((project) => ({
    ...project,
    src: findPublicImage(`projects/project-${project.slot}`),
  }));
}
