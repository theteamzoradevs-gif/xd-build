import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FEATURED_PROJECT_SLUGS } from "@/lib/home";
import { getFeaturedProjects } from "@/lib/projects";
import styles from "./FeaturedPortfolio.module.css";

const featured = getFeaturedProjects(FEATURED_PROJECT_SLUGS);

export function FeaturedPortfolio() {
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
        <Button href="/portfolio" variant="secondary">
          View all projects
        </Button>
      </div>
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
              {p.budget ? <p className={styles.budget}>Budget: {p.budget}</p> : null}
              <p className={styles.outcome}>{p.outcome}</p>
            </div>
          </Link>
        ))}
      </div>
      <Button className={styles.viewmorebtn} href="/portfolio" variant="secondary">
          View More
        </Button>
    </Section>
  );
}
