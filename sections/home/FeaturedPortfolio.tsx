import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getFeaturedProjects, type Project } from "@/lib/projects";
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
      className={styles.section}
      aria-labelledby="featured-portfolio-title"
    >
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Portfolio preview</p>
          <h2 id="featured-portfolio-title" className={styles.title}>
            Featured projects
          </h2>
          <p className={styles.lead}>
            Three flagship engagements — from academic expansion and cultural renewal to
            hospital infrastructure — showcasing how we coordinate scanning, BIM, and
            fabrication-ready delivery.
          </p>
        </div>
        
        {/* Navbar ke primary CTA jaisa sync variant */}
        <Button href="/portfolio" variant="primary" className={styles.headerCta}>
          View all projects
        </Button>
      </div>

      {featured.length > 0 ? (
        <div className={styles.grid}>
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className={styles.card}
            >
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
                <div className={styles.tags}>
                  {p.categories.map((c) => (
                    <span key={c} className={styles.tag}>
                      {c}
                    </span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                {p.budget ? (
                  <p className={styles.budget}>Budget: {p.budget}</p>
                ) : null}
                <p className={styles.outcome}>{p.outcome}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : null}

      {/* Bulletproof Horizontal Centering Container */}
      <div className={styles.viewMoreContainer}>
        <Button href="/portfolio" variant="primary" className={styles.viewMoreBtn}>
          View More
        </Button>
      </div>
    </Section>
  );
}