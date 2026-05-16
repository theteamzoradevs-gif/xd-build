import { Section } from "@/components/ui/Section";
import { COMPANY_INTRO } from "@/lib/home";
import styles from "./CompanyIntro.module.css";

export function CompanyIntro() {
  return (
    <Section className={styles.section} aria-labelledby="company-intro-title">
      <p className="pageKicker">Company intro</p>
      <h2 id="company-intro-title" className={styles.title}>
        Your digital delivery partner
      </h2>
      <div className={styles.copy}>
        {COMPANY_INTRO.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
