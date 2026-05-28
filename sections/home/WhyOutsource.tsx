import { Award, Crown, CreditCard } from "lucide-react";
import styles from "./WhyOutsource.module.css";

const ITEMS = [
  {
    title: "Expertise",
    body: "Experienced specialists handle the coordination work with fewer errors and faster turnaround.",
    icon: Award,
  },
  {
    title: "Focus on Core-business",
    body: "Your internal team stays on core delivery while external experts manage the technical load.",
    icon: Crown,
  },
  {
    title: "Cost-Effectiveness",
    body: "You avoid fixed overhead and still get high-quality output when the workload increases.",
    icon: CreditCard,
  },
] as const;

export function WhyOutsource() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.kicker}>Outsourcing benefits</p>
        <h2 className={styles.title}>Why to out-source?</h2>
        <p className={styles.lead}>
          Short answer: you save time, reduce overhead, and get<br />
          specialist support exactly when the project needs it.
        </p>

        <ul className={styles.grid}>
          {ITEMS.map(({ title, body, icon: Icon }) => (
            <li key={title} className={styles.card}>
              <span className={styles.iconWrap} aria-hidden>
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <div className={styles.copy}>
                <p className={styles.cardTitle}>{title}</p>
                <p className={styles.cardBody}>{body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.rule} aria-hidden />
      </div>
    </section>
  );
}