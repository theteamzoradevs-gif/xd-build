import { cache } from "react";
import { fetchJson } from "@/lib/api/fetch-json";
import { isGalleryEnabled } from "@/lib/features/gallery";
import { getProjectsSafe } from "@/lib/projects";
import type { GalleryPhoto } from "@/types/gallery";

type GalleryResponse = { photos?: GalleryPhoto[] };

function sortGalleryPhotos(photos: GalleryPhoto[]): GalleryPhoto[] {
  return [...photos].sort((a, b) => a.sortOrder - b.sortOrder);
}

function withImageSrc(photos: GalleryPhoto[]): GalleryPhoto[] {
  return photos.filter((photo) => photo.imageSrc.trim().length > 0);
}

export const getGalleryPhotos = cache(async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  if (!isGalleryEnabled()) return [];

  const data = await fetchJson<GalleryResponse>(
    "/api/gallery?status=published",
  );
  if (!data.photos) {
    throw new Error("Gallery API returned no photos payload");
  }
  return sortGalleryPhotos(withImageSrc(data.photos));
});

/** On failure log and return an empty grid (does not break the page). */
export async function getGalleryPhotosSafe(): Promise<GalleryPhoto[]> {
  if (!isGalleryEnabled()) return [];

  try {
    return await getGalleryPhotos();
  } catch (error) {
    console.error("[getGalleryPhotos]", error);
    return [];
  }
}

/**
 * CMS header-gallery photos plus published portfolio hero images for `/gallery`.
 * Portfolio entries use ids `portfolio-{slug}` and sort after CMS photos.
 */
export async function getGalleryPagePhotos(): Promise<GalleryPhoto[]> {
  if (!isGalleryEnabled()) return [];

  const [cmsPhotos, projects] = await Promise.all([
    getGalleryPhotosSafe(),
    getProjectsSafe(),
  ]);

  const seenSrc = new Set(
    cmsPhotos.map((photo) => photo.imageSrc.trim()).filter(Boolean),
  );

  const portfolioPhotos: GalleryPhoto[] = projects
    .map((project, index) => {
      const imageSrc = project.heroSrc.trim();
      if (!imageSrc || seenSrc.has(imageSrc)) return null;

      seenSrc.add(imageSrc);
      return {
        id: `portfolio-${project.slug}`,
        title: project.title,
        imageSrc,
        imageAlt: project.heroAlt?.trim() || project.title,
        sortOrder: 1000 + index,
      };
    })
    .filter((photo): photo is GalleryPhoto => photo !== null);

  return sortGalleryPhotos([...cmsPhotos, ...portfolioPhotos]);
}
