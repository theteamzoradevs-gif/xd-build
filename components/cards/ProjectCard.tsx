"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { isDetailPageEnabled, type Project } from "@/lib/projects";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact }: Props) {
  const clickable = isDetailPageEnabled(project);
  const detailHref = `/portfolio/${project.slug}`;
  const span =
    project.gridSize === "large"
      ? styles.spanWide
      : project.gridSize === "tall"
        ? styles.spanTall
        : styles.spanNormal;

  const media = (
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
  );

  const title = clickable ? (
    <Link href={detailHref}>{project.title}</Link>
  ) : (
    project.title
  );

  return (
    <article
      className={cn(styles.card, span, compact && styles.compact, !clickable && styles.cardStatic)}
      aria-label={clickable ? undefined : `${project.title} — detail page not available`}
    >
      {clickable ? (
        <Link href={detailHref} className={styles.mediaLink}>
          {media}
        </Link>
      ) : (
        <div className={styles.mediaStatic}>{media}</div>
      )}
      <div className={styles.body}>
        <div className={styles.tags}>
          {project.categories.map((c) => (
            <span key={c} className={styles.tag}>
              {c}
            </span>
          ))}
        </div>
        <h3 className={styles.title}>{title}</h3>
        {project.budget ? (
          <p className={styles.budget}>Budget: {project.budget}</p>
        ) : null}
        <p className={styles.outcome}>{project.outcome}</p>
      </div>
    </article>
  );
}
