import { cache } from "react";
import { fetchJson } from "@/lib/api/fetch-json";
import type { GalleryPhoto } from "@/types/gallery";

type GalleryResponse = { photos?: GalleryPhoto[] };

export const getGalleryPhotos = cache(async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  const data = await fetchJson<GalleryResponse>(
    "/api/gallery?status=published",
  );
  if (!data.photos) {
    throw new Error("Gallery API returned no photos payload");
  }
  return [...data.photos].sort((a, b) => a.sortOrder - b.sortOrder);
});

/** On failure log and return an empty grid (does not break the page). */
export async function getGalleryPhotosSafe(): Promise<GalleryPhoto[]> {
  try {
    return await getGalleryPhotos();
  } catch (error) {
    console.error("[getGalleryPhotos]", error);
    return [];
  }
}
