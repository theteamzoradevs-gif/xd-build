"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import type { Project } from "@/lib/projects";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact }: Props) {
  const span =
    project.gridSize === "large"
      ? styles.spanWide
      : project.gridSize === "tall"
        ? styles.spanTall
        : styles.spanNormal;

  return (
    <article className={cn(styles.card, span, compact && styles.compact)}>
      <Link href={`/portfolio/${project.slug}`} className={styles.mediaLink}>
        <div className={styles.media}>
          <Image
            src={project.heroSrc}
            alt={project.heroAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className={styles.img}
          />
          <span className={styles.visuallyHidden}>{project.title}</span>
        </div>
      </Link>
      <div className={styles.body}>
        <div className={styles.tags}>
          {project.categories.map((c) => (
            <span key={c} className={styles.tag}>
              {c}
            </span>
          ))}
        </div>
        <h3 className={styles.title}>
          <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className={styles.meta}>{project.location}</p>
        <p className={styles.outcome}>{project.outcome}</p>
      </div>
    </article>
  );
}
