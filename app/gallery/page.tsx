import type { Metadata } from "next";
import { GalleryPhotoGrid } from "@/components/gallery/GalleryPhotoGrid";
import { Section } from "@/components/ui/Section";
import { getGalleryPhotosSafe } from "@/lib/api/gallery";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Project photography from XD Build — field coordination, scanning, and delivery across Canada.",
};

export default async function GalleryPage() {
  const photos = await getGalleryPhotosSafe();

  return (
    <Section aria-labelledby="gallery-title">
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
