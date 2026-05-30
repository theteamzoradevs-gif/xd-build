import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { getProjects } from "@/lib/projects";
import styles from "./page.module.css";

export default async function GalleryPage() {
  let projects: Awaited<ReturnType<typeof getProjects>> = [];

  try {
    projects = await getProjects();
  } catch (error) {
    console.error("[GalleryPage]", error);
  }

  return (
    <Section aria-labelledby="gallery-title">
      <div className={styles.header}>
        <h1 id="gallery-title" className={styles.title}>
          Project Gallery
        </h1>
        <p className={styles.lead}>
          A visual preview of our featured and recent projects.
        </p>
      </div>

      <ul className={styles.grid}>
        {projects.map((p) => (
          <li key={p.slug} className={styles.card}>
            <Link href={`/portfolio/${p.slug}`} className={styles.link}>
              <div className={styles.media}>
                <Image
                  src={p.heroSrc}
                  alt={p.heroAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.img}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
