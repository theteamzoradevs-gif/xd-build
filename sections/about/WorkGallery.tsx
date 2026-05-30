import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { WORK_GALLERY_PLACEHOLDERS } from "@/lib/about";
import styles from "./WorkGallery.module.css";

export function WorkGallery() {
  return (
    <Section className={styles.section} aria-labelledby="work-gallery-title">
      <p className="pageKicker">On site &amp; in the model</p>
      <h2 id="work-gallery-title" className={styles.title}>
        Work photos
      </h2>
      <p className={styles.lead}>
        A glimpse of coordination, scanning, and delivery across our projects.
      </p>
      <div className={styles.grid}>
        {WORK_GALLERY_PLACEHOLDERS.map((item) => (
          <div key={item.src} className={styles.cell}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 600px) 100vw, 33vw"
              className={styles.img}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
