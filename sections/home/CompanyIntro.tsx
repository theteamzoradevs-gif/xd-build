import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { COMPANY_INTRO_LEAD } from "@/lib/home";
import styles from "./CompanyIntro.module.css";







export function CompanyIntro() {
  return (
    <Section
      denseTop
      denseBottom
      className={styles.section}
      aria-labelledby="company-intro-title"
    >
      <p className="pageKicker">Company intro</p>
      <h2 id="company-intro-title" className={styles.title}>
        Your digital delivery partner
      </h2>
      <div className={styles.copy}>
        <p className={styles.paragraph}>{COMPANY_INTRO_LEAD}</p>
        <Link href="/about" className={styles.readMore}>
          Read more
          <span className={styles.arrow} aria-hidden>
            →
          </span>
        </Link>
      </div>
    </Section>
  );
}
