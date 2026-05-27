import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
<<<<<<< HEAD
    <Section denseTop className={styles.section} aria-labelledby="final-cta-title">
=======
    <Section className={styles.section} aria-labelledby="final-cta-title">
>>>>>>> a23b02491cd3a51a0982677aa750229bd2541b66
      <div className={styles.inner}>
        <h2 id="final-cta-title" className={styles.title}>
          Start your project with a clear build plan
        </h2>
        <p className={styles.lead}>
          Tell us what you are building, where you are stuck, and what “done”
          looks like. We will map the fastest path to a coordinated model your
          field team can trust.
        </p>
        <div className={styles.actions}>
          <Button href="/contact" variant="primary">
            Get Consultation
          </Button>
          <Button href="/portfolio" variant="secondary" className={styles.outline}>
            Browse projects
          </Button>
        </div>
      </div>
    </Section>
  );
}
