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
    subtitle: string;
    lead: string;
    relatedLabel: string;
    categories: Array<"BIM" | "MEP" | "VDC">;
  }
> = {
  services: {
    title: "Projects related to this service context",
    subtitle: "DISCOVER OUR IMPACTFUL CASE STUDIES",
    lead: "Examples closest to what teams usually ask for on the Services page.",
    relatedLabel: "Related projects",
    categories: ["BIM", "MEP", "VDC"],
  },
  "why-us": {
    title: "Proof projects behind our approach",
    subtitle: "EXPLORE OUR FIELD-PROVEN CASE STUDIES",
    lead: "Route-aware picks that show reliability, repeatability, and field-ready outcomes.",
    relatedLabel: "Related projects",
    categories: ["BIM", "VDC"],
  },
  about: {
    title: "Projects that reflect our team DNA",
    subtitle: "SEE THE WORK THAT SHAPED OUR TEAM",
    lead: "Evidence from portfolios where coordination discipline mattered most.",
    relatedLabel: "Related projects",
    categories: ["BIM", "MEP"],
  },
  contact: {
    title: "Quick proof before you enquire",
    subtitle: "A FEW PROJECTS TO SET THE CONTEXT",
    lead: "A few closely related projects, plus additional work if you want broader context.",
    relatedLabel: "Related projects",
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

  return (
    <>
      <div className={styles.topCtaWrap}>
        <Link href="/contact" className={styles.topCta}>
          Discuss your scope with XD Build
        </Link>
      </div>
      <Section tight className={styles.wrap} aria-labelledby={`${routeKey}-related-projects`}>
        <div className={styles.layout}>
          <div className={styles.main}>
          <p className="pageKicker">Portfolio spotlight</p>
            <h2 id={`${routeKey}-related-projects`} className={styles.title}>
              {config.title}
            </h2>
            <p className={styles.subtitle}>{config.subtitle}</p>
            <p className={styles.lead}>{config.lead}</p>

            <div className={styles.block}>
              <h3 className={styles.blockTitle}>{config.relatedLabel}</h3>
              <div className={styles.grid}>
                {related.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
