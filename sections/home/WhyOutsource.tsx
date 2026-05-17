import { Award, Banknote, Crown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import styles from "./WhyOutsource.module.css";

const ITEMS = [
  {
    title: "Expertise",
    icon: Award,
  },
  {
    title: "Focus on Core-business",
    icon: Crown,
  },
  {
    title: "Cost-Effectiveness",
    icon: Banknote,
  },
] as const;

export function WhyOutsource() {
  return (
    <Section
      denseBottom
      className={styles.section}
      aria-labelledby="why-outsource-title"
    >
      <div className={styles.grid}>
        <div className={styles.headingCol}>
          <h2 id="why-outsource-title" className={styles.title}>
            Why to out-source?
          </h2>
        </div>
        <ul className={styles.list}>
          {ITEMS.map(({ title, icon: Icon }) => (
            <li key={title} className={styles.card}>
              <span className={styles.iconWrap} aria-hidden>
                <Icon className={styles.icon} strokeWidth={1.75} />
              </span>
              <p className={styles.cardTitle}>{title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.midRule} aria-hidden />
    </Section>
  );
}
