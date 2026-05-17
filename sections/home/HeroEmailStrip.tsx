import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";
import styles from "./HeroEmailStrip.module.css";

export function HeroEmailStrip() {
  return (
    <Section tight className={styles.section} aria-label="Email XD Build">
      <div className={styles.inner}>
        <p className={styles.label}>Prefer email?</p>
        <Link className={styles.emailBtn} href={`mailto:${siteConfig.email}`}>
          <span className={styles.icon} aria-hidden>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
            </svg>
          </span>
          {siteConfig.email}
        </Link>
      </div>
    </Section>
  );
}
