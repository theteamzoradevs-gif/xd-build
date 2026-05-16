import { Section } from "@/components/ui/Section";
import { BRAND_INTRO, BRAND_PILLARS } from "@/lib/brand";
import styles from "./BrandFocus.module.css";

export function BrandFocus() {
  return (
    <Section className={styles.section} aria-labelledby="brand-focus-title">
      <div className={styles.layout}>
        <p className={styles.brandWord} id="brand-focus-title">
          Brand
        </p>
        <div className={styles.content}>
          <p className={styles.intro}>{BRAND_INTRO}</p>
          <ul className={styles.pillars}>
            {BRAND_PILLARS.map((pillar) => (
              <li key={pillar.title} className={styles.pillar}>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarBody}>{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
