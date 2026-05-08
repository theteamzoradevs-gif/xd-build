import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Section } from "@/components/ui/Section";
import styles from "./RoutePortfolioShowcase.module.css";

type RouteKey = "services" | "why-us" | "about" | "contact";

const CONFIG: Record<
  RouteKey,
  {
    title: string;
    lead: string;
    relatedLabel: string;
    otherLabel: string;
    categories: Array<"BIM" | "MEP" | "VDC">;
  }
> = {
  services: {
    title: "Projects related to this service context",
    lead: "Examples closest to what teams usually ask for on the Services page.",
    relatedLabel: "Related projects",
    otherLabel: "Other projects to explore",
    categories: ["BIM", "MEP", "VDC"],
  },
  "why-us": {
    title: "Proof projects behind our approach",
    lead: "Route-aware picks that show reliability, repeatability, and field-ready outcomes.",
    relatedLabel: "Related projects",
    otherLabel: "Other projects to explore",
    categories: ["BIM", "VDC"],
  },
  about: {
    title: "Projects that reflect our team DNA",
    lead: "Evidence from portfolios where coordination discipline mattered most.",
    relatedLabel: "Related projects",
    otherLabel: "Other projects to explore",
    categories: ["BIM", "MEP"],
  },
  contact: {
    title: "Quick proof before you enquire",
    lead: "A few closely related projects, plus additional work if you want broader context.",
    relatedLabel: "Related projects",
    otherLabel: "Other projects to explore",
    categories: ["MEP", "VDC"],
  },
};

type Props = {
  routeKey: RouteKey;
};

export function RoutePortfolioShowcase({ routeKey }: Props) {
  const config = CONFIG[routeKey];
  const related = PROJECTS.filter((project) =>
    project.categories.some((category) => config.categories.includes(category))
  ).slice(0, 3);
  const other = PROJECTS.filter((project) => !related.includes(project)).slice(0, 3);

  return (
    <Section tight className={styles.wrap} aria-labelledby={`${routeKey}-related-projects`}>
      <div className={styles.layout}>
        <div className={styles.main}>
          <p className="pageKicker">Portfolio spotlight</p>
          <h2 id={`${routeKey}-related-projects`} className={styles.title}>
            {config.title}
          </h2>
          <p className={styles.lead}>{config.lead}</p>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>{config.relatedLabel}</h3>
            <div className={styles.grid}>
              {related.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>{config.otherLabel}</h3>
            <div className={styles.grid}>
              {other.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </div>

        <aside className={styles.stickyRail}>
          <div className={styles.stickyCard}>
            <p className={styles.stickyEyebrow}>Portfolio rail</p>
            <h3 className={styles.stickyTitle}>Explore the full project library</h3>
            <p className={styles.stickyText}>
              Filter by BIM, MEP, and VDC, then open project stories with outcomes.
            </p>
            <Link href="/portfolio" className={styles.stickyCta}>
              View full portfolio
            </Link>
          </div>
        </aside>
      </div>
    </Section>
  );
}
