import { fetchJson } from "@/lib/api/fetch-json";
import type { Project } from "@/lib/projects";
import type { GalleryPhoto } from "@/types/gallery";

type GalleryResponse = { photos?: GalleryPhoto[] };

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  const data = await fetchJson<GalleryResponse>(
    "/api/gallery?status=published",
  );
  if (!data.photos) {
    throw new Error("Gallery API returned no photos payload");
  }
  return [...data.photos].sort((a, b) => a.sortOrder - b.sortOrder);
}

/** On failure log and return an empty grid (does not break the page). */
export async function getGalleryPhotosSafe(): Promise<GalleryPhoto[]> {
  try {
    return await getGalleryPhotos();
  } catch (error) {
    console.error("[getGalleryPhotos]", error);
    return [];
  }
}

function projectHeroAsGalleryPhoto(project: Project, index: number): GalleryPhoto {
  return {
    id: `project-${project.slug}`,
    title: project.title,
    imageSrc: project.heroSrc,
    imageAlt: project.heroAlt,
    sortOrder: 10_000 + index,
  };
}

/** CMS gallery photos plus published portfolio heroes (deduped by image URL). */
export function mergeGalleryWithPortfolio(
  gallery: GalleryPhoto[],
  projects: Project[],
): GalleryPhoto[] {
  const seen = new Set(gallery.map((p) => p.imageSrc));
  const fromPortfolio = projects
    .filter((p) => p.heroSrc.trim() && !seen.has(p.heroSrc))
    .map(projectHeroAsGalleryPhoto);
  return [...gallery, ...fromPortfolio].sort(
    (a, b) => a.sortOrder - b.sortOrder,
  );
}

/** Photos for /gallery: admin gallery uploads + portfolio hero images. */
export async function getGalleryPagePhotos(
  projects: Project[],
): Promise<GalleryPhoto[]> {
  const gallery = await getGalleryPhotosSafe();
  return mergeGalleryWithPortfolio(gallery, projects);
}
