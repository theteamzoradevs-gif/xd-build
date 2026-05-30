import { Section } from "@/components/ui/Section";
import styles from "./TrustStrip.module.css";

const ITEMS = [
  {
    title: "One coordinated model",
    body: "Decisions land in a single place, so changes do not get lost between teams.",
  },
  {
    title: "Field-first clarity",
    body: "Deliverables are written for people wearing hard hats, not just screens.",
  },
  {
    title: "Measurable handoffs",
    body: "You get traceable issues, clean packages, and owners who understand the plan.",
  },
] as const;

export function TrustStrip() {
  return (
    <Section className={styles.section} aria-labelledby="trust-strip-title">
      <div className={styles.header}>
        <h2 id="trust-strip-title" className={styles.title}>
          Why teams bring us in early
        </h2>
        <p className={styles.lead}>
          We do not win on buzzwords. We win when install looks like the model,
          and your schedule stops apologizing.
        </p>
      </div>
      <div className={styles.grid}>
        {ITEMS.map((item) => (
          <article key={item.title} className={styles.item}>
            <span className={styles.icon} aria-hidden>◆</span>
            <div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemBody}>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
