import Image from "next/image";
import type { GalleryPhoto } from "@/types/gallery";
import styles from "./GalleryPhotoGrid.module.css";

type CardsProps = {
  photos: GalleryPhoto[];
};

/** Card markup only , parent supplies the grid container. */
export function GalleryPhotoCards({ photos }: CardsProps) {
  return (
    <>
      {photos.map((photo) => (
        <article key={photo.id} className={styles.card} role="listitem">
          <div className={styles.media}>
            <Image
              src={photo.imageSrc}
              alt={photo.imageAlt?.trim() || photo.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className={styles.img}
            />
          </div>
          <p className={styles.caption}>{photo.title}</p>
        </article>
      ))}
    </>
  );
}

type GridProps = {
  photos: GalleryPhoto[];
};

export function GalleryPhotoGrid({ photos }: GridProps) {
  if (photos.length === 0) return null;

  return (
    <div className={styles.grid} role="list">
      <GalleryPhotoCards photos={photos} />
    </div>
  );
}
