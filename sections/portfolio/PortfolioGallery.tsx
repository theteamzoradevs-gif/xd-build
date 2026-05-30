"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ProjectCategory } from "@/lib/projects";
import { PROJECT_PLACEHOLDERS, PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import styles from "./PortfolioGallery.module.css";

const FILTERS: ProjectCategory[] = ["All", "MEP", "BIM", "VDC"];

export function PortfolioGallery() {
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const visible = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <div>
      <div className={styles.filters} role="tablist" aria-label="Filter projects">
        {FILTERS.map((f) => {
          const selected = f === filter;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={selected}
              className={styles.pill}
              data-active={selected ? "true" : "false"}
              onClick={() => setFilter(f)}
            >
              {f === "All" ? "All projects" : f}
            </button>
          );
        })}
      </div>
      <div className={styles.grid}>
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}

        {/* Extra image-only cards */}
        {(
          [
            "Bethany Care Hillhurst -Senior care facility.png",
            "Calgary Zoo – Polar Bear Holding.webp",
            "CSF-École La Vallee Pemberton.jpg",
            "Driftpile Health Centre.png",
            "NEW Wainwright Elementary School.jpg",
            "Rangeview High School.jpg",
            "Telus Sky renovations.webp",
            "University of Yukon Polaris project.jpg",
            "Vera M. Welsh Elementary School.jpg",
          ] as string[]
        ).map((name) => (
          <article key={name} className={styles.imageCard}>
            <div className={styles.imageMedia}>
              <Image
                src={`/images/portfolio_images/${name}`}
                alt={name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className={styles.imageOnlyImg}
              />
            </div>
          </article>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className={styles.empty}>No projects in this filter yet.</p>
      ) : null}

      {filter === "All" && PROJECT_PLACEHOLDERS.length > 0 ? (
        <div className={styles.comingSoon}>
          <h2 className={styles.comingSoonTitle}>More projects</h2>
          <p className={styles.comingSoonLead}>
            Additional case studies (projects 7–15) are in progress — details to be
            supplied.
          </p>
          <ul className={styles.placeholderList}>
            {PROJECT_PLACEHOLDERS.map((p) => (
              <li key={p.id} className={styles.placeholderItem}>
                <span className={styles.placeholderTitle}>{p.title}</span>
                <span className={styles.placeholderMeta}>Details to be supplied</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
