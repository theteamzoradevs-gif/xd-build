"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/lib/projects";
import { PROJECT_PLACEHOLDERS } from "@/lib/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import styles from "./PortfolioGallery.module.css";

const FILTERS: ProjectCategory[] = ["All", "MEP", "BIM", "VDC"];

type Props = {
  projects: Project[];
};

export function PortfolioGallery({ projects }: Props) {
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter, projects]);

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
