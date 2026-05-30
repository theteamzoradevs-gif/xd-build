import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Section } from "@/components/ui/Section";
import { HOME_IMPACT_METRICS } from "@/lib/homeMetrics";
import styles from "./TrustMetrics.module.css";

export function TrustMetrics() {
  return (
    <Section className={styles.section} aria-label="Impact metrics">
      <div className={styles.grid}>
        {HOME_IMPACT_METRICS.map((m) => (
          <div key={m.label} className={styles.cell}>
            <p className={styles.value}>
              <AnimatedCounter value={m.value} />
            </p>
            <p className={styles.label}>{m.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
