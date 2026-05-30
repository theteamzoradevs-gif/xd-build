import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Section } from "@/components/ui/Section";
import type { HomeStat } from "@/types/home";
import styles from "./TrustMetrics.module.css";

type Props = {
  stats: HomeStat[];
};

export function TrustMetrics({ stats }: Props) {
  if (stats.length === 0) return null;

  return (
    <Section className={styles.section} aria-label="Impact metrics">
      <div className={styles.grid}>
        {stats.map((stat) => (
          <div
            key={`${stat.sortOrder}-${stat.label}`}
            className={styles.cell}
          >
            <p className={styles.value}>
              <AnimatedCounter value={stat.value} />
            </p>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
