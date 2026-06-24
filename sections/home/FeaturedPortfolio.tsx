import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import {
  getFeaturedProjects,
  isDetailPageEnabled,
  type Project,
} from "@/lib/projects";
import styles from "./FeaturedPortfolio.module.css";

type Props = {
  projects?: Project[];
};

export async function FeaturedPortfolio({ projects: prefetched }: Props) {
  let featured: Project[] = prefetched ?? [];
  if (!prefetched) {
    try {
      featured = await getFeaturedProjects();
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("[FeaturedPortfolio]", error);
      }
    }
  }

  return (
    <Section
      denseTop
      denseBottom
      className={styles.section}
      aria-labelledby="featured-portfolio-title"
    >
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Portfolio preview</p>
          <h2 id="featured-portfolio-title" className={styles.title}>
            Projects
          </h2>
        </div>
        
        {/* Navbar ke primary CTA jaisa sync variant */}
        <Button href="/portfolio" variant="primary" className={styles.headerCta}>
          View all projects
        </Button>
      </div>

      {featured.length > 0 ? (
        <div className={styles.grid}>
          {featured.map((p) => {
            const clickable = isDetailPageEnabled(p);
            const cardContent = (
              <>
                <div className={styles.media}>
                  <Image
                    src={p.heroSrc}
                    alt={p.heroAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className={styles.img}
                  />
                </div>
                <div className={styles.body}>
                  {p.categories.length > 0 ? (
                    <div className={styles.tags}>
                      {p.categories.map((c) => (
                        <span key={c} className={styles.tag}>
                          {c}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.outcome}>{p.outcome}</p>
                </div>
              </>
            );

            return clickable ? (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className={styles.card}
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={p.slug}
                className={`${styles.card} ${styles.cardStatic}`}
                aria-label={`${p.title} — detail page not available`}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      ) : null}
    </Section>
  );
}