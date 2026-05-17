import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Section } from "@/components/ui/Section";
import styles from "./Metrics.module.css";

const STATS = [
  { value: "500+", label: "Projects coordinated" },
  { value: "12M+", label: "Sq. ft. modeled & reviewed" },
  { value: "98%", label: "Clients who’d recommend us" },
  { value: "15+", label: "Years blended field + digital expertise" },
] as const;

export function HomeMetrics() {
  return (
    <Section
      tight
      className={styles.section}
      aria-labelledby="metrics-heading"
    >
      <h2 id="metrics-heading" className="sr-only">
        Highlights
      </h2>
      <div className={styles.bar}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.item}>
            <p className={styles.value}>
              <AnimatedCounter value={s.value} />
            </p>
            <p className={styles.label}>{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
