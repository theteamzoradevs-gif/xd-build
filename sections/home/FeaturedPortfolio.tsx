import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import styles from "./FeaturedPortfolio.module.css";

const FEATURED = [
  {
    slug: "rockyview-general-hospital-icu-renovation",
    title: "Rockyview General Hospital ICU Renovation",
    outcome: "Critical-care renovation sequencing clarified early, reducing field confusion.",
    categories: ["BIM", "MEP"],
    heroSrc:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2000&auto=format&fit=crop",
    heroAlt: "Hospital ICU renovation coordination",
  },
  {
    slug: "hospital-chilled-water-upgrade",
    title: "Hospital Chilled Water Upgrade",
    outcome: "Plant-room upgrades coordinated with minimal disruption to operations.",
    categories: ["MEP", "VDC"],
    heroSrc:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000&auto=format&fit=crop",
    heroAlt: "Hospital infrastructure chilled water systems",
  },
  {
    slug: "data-center-mechanical-room-upgrade",
    title: "Data Center Mechanical Room Upgrade",
    outcome: "Mechanical room routing optimized for uptime and maintainability.",
    categories: ["MEP", "BIM"],
    heroSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
    heroAlt: "Data center mechanical coordination",
  },
  {
    slug: "uofc-veterinary-learning-expansion",
    title: "UofC Veterinary Learning Expansion",
    outcome: "Academic expansion package aligned teams on sequence and serviceability.",
    categories: ["BIM", "VDC"],
    heroSrc:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop",
    heroAlt: "University veterinary facility expansion",
  },
  {
    slug: "rgh-chilled-water-system-upgrade",
    title: "RGH Chilled Water System Upgrade",
    outcome: "System upgrade executed with cleaner shutdown planning and fewer reworks.",
    categories: ["MEP", "VDC"],
    heroSrc:
      "https://images.unsplash.com/photo-1581093196277-9f608bb3fdbb?q=80&w=2000&auto=format&fit=crop",
    heroAlt: "Chilled water system upgrade engineering",
  },
  {
    slug: "camrose-provincial-building-renovation",
    title: "Camrose Provincial Building Renovation",
    outcome: "Renovation coordination protected legacy constraints and improved handoff quality.",
    categories: ["BIM", "MEP"],
    heroSrc:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
    heroAlt: "Provincial building renovation project",
  },
] as const;

export function FeaturedPortfolio() {
  return (
    <Section
      className={styles.section}
      aria-labelledby="featured-portfolio-title"
    >
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Proof, not promises</p>
          <h2 id="featured-portfolio-title" className={styles.title}>
            Portfolio first: work you can feel in the field
          </h2>
          <p className={styles.lead}>
            Selected projects from our legacy portfolio, rewritten for fast proof and enquiry-focused browsing.
          </p>
        </div>
        <Button href="/portfolio" variant="secondary">
          View all projects
        </Button>
      </div>
      <div className={styles.grid}>
        {FEATURED.map((p) => (
          <Link
            key={p.slug}
            href="/portfolio"
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
              <p className={styles.outcome}>{p.outcome}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
