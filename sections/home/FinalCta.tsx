import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <Section className={styles.section} aria-labelledby="final-cta-title">
      <div className={styles.inner}>
        <h2 id="final-cta-title" className={styles.title}>
          Start your project with a clear build plan
        </h2>
        <p className={styles.lead}>
          Tell us what you are building, where you are stuck, and what "done" looks like. We will map the fastest path to a coordinated model your field team can trust.
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
