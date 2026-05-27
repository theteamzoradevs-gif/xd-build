import { Award, Banknote, Crown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import styles from "./WhyOutsource.module.css";

const ITEMS = [
  {
    title: "Expertise",
<<<<<<< HEAD
    body: "Experienced specialists handle the coordination work with fewer errors and faster turnaround.",
=======
>>>>>>> a23b02491cd3a51a0982677aa750229bd2541b66
    icon: Award,
  },
  {
    title: "Focus on Core-business",
<<<<<<< HEAD
    body: "Your internal team stays on core delivery while external experts manage the technical load.",
=======
>>>>>>> a23b02491cd3a51a0982677aa750229bd2541b66
    icon: Crown,
  },
  {
    title: "Cost-Effectiveness",
<<<<<<< HEAD
    body: "You avoid fixed overhead and still get high-quality output when the workload increases.",
=======
>>>>>>> a23b02491cd3a51a0982677aa750229bd2541b66
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
<<<<<<< HEAD
          <p className={styles.kicker}>Outsourcing benefits</p>
          <h2 id="why-outsource-title" className={styles.title}>
            Why to out-source?
          </h2>
          <p className={styles.lead}>
            Short answer: you save time, reduce overhead, and get specialist support
            exactly when the project needs it.
          </p>
        </div>
        <ul className={styles.list}>
          {ITEMS.map(({ title, body, icon: Icon }) => (
=======
          <h2 id="why-outsource-title" className={styles.title}>
            Why to out-source?
          </h2>
        </div>
        <ul className={styles.list}>
          {ITEMS.map(({ title, icon: Icon }) => (
>>>>>>> a23b02491cd3a51a0982677aa750229bd2541b66
            <li key={title} className={styles.card}>
              <span className={styles.iconWrap} aria-hidden>
                <Icon className={styles.icon} strokeWidth={1.75} />
              </span>
<<<<<<< HEAD
              <div className={styles.cardCopy}>
                <p className={styles.cardTitle}>{title}</p>
                <p className={styles.cardBody}>{body}</p>
              </div>
=======
              <p className={styles.cardTitle}>{title}</p>
>>>>>>> a23b02491cd3a51a0982677aa750229bd2541b66
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.midRule} aria-hidden />
    </Section>
  );
}
