import { Section } from "@/components/ui/Section";
import { WHY_US_PILLARS } from "@/lib/home";
import styles from "./WhyUs.module.css";

export function WhyUs() {
  return (
    <Section
      id="why-us"
      className={styles.section}
      aria-labelledby="why-us-title"
    >
      <div className={styles.inner}>
        <p className={styles.kicker}>Why us?</p>
        <h2 id="why-us-title" className={styles.title}>
          Built for complex construction delivery
        </h2>
        <div className={styles.grid}>
          {WHY_US_PILLARS.map((pillar) => (
            <article key={pillar.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardBody}>{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
