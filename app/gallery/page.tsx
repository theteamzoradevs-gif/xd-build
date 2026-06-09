import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryPhotoGrid } from "@/components/gallery/GalleryPhotoGrid";
import { Section } from "@/components/ui/Section";
import { getGalleryPagePhotos } from "@/lib/api/gallery";
import { isGalleryEnabled } from "@/lib/features/gallery";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Project photography from XD Build — field coordination, scanning, and delivery across Canada.",
};

export const revalidate = 60;

export default async function GalleryPage() {
  if (!isGalleryEnabled()) {
    notFound();
  }

  const photos = await getGalleryPagePhotos();

  return (
    <Section denseTop denseBottom aria-labelledby="gallery-title">
      <div className={styles.header}>
        <h1 id="gallery-title" className={styles.title}>
          Project Gallery
        </h1>
        <p className={styles.lead}>
          A visual preview of our work — photos and titles from the field and the
          model.
        </p>
      </div>

      {photos.length > 0 ? (
        <GalleryPhotoGrid photos={photos} />
      ) : (
        <p className={styles.lead}>Gallery photos will appear here soon.</p>
      )}
    </Section>
  );
}
