"use client";

import { useMemo, useState } from "react";
import type { ProjectCategory } from "@/lib/projects";
import { PROJECTS } from "@/lib/projects";
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
      </div>
      {visible.length === 0 ? (
        <p className={styles.empty}>No projects in this filter yet.</p>
      ) : null}
    </div>
  );
}
