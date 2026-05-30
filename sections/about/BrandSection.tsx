import { Section } from "@/components/ui/Section";
import { BRAND_INTRO, BRAND_PILLARS } from "@/lib/brand";
import styles from "./BrandSection.module.css";

export function BrandSection() {
  return (
    <Section className={styles.section} aria-labelledby="brand-title">
      <p className={styles.kicker}>Brand</p>
      <p className={styles.intro}>{BRAND_INTRO}</p>
      <h2 id="brand-title" className={styles.visuallyHidden}>
        Our brand
      </h2>
      <div className={styles.grid}>
        {BRAND_PILLARS.map((pillar) => (
          <article key={pillar.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{pillar.title}</h3>
            <p className={styles.cardBody}>{pillar.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
