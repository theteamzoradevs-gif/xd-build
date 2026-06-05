"use client";

import type { LegacyRef } from "react";
import { Button } from "@/components/ui/Button";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { PORTFOLIO_QUALITY_LINE } from "@/lib/portfolioCopy";
import { siteConfig } from "@/lib/site";
import styles from "./QualityLineBanner.module.css";

export function QualityLineBanner() {
  const [ref, visible] = useInViewOnce<HTMLElement>();

  return (
    <aside
      ref={ref as LegacyRef<HTMLElement>}
      className={styles.banner}
      aria-labelledby="quality-line-heading"
    >
      <div
        className={`${styles.inner} ${visible ? styles.innerInView : ""}`}
      >
        <span className={styles.accent} aria-hidden />
        <div className={styles.copy}>
          <span className={styles.badge}>Standard we hold</span>
          <h2 id="quality-line-heading" className={styles.title}>
            Quality you can trust on every handoff
          </h2>
          <p className={styles.lead}>{PORTFOLIO_QUALITY_LINE}</p>
        </div>
        <div className={styles.actions}>
          <Button
            href={`tel:${siteConfig.phoneE164}`}
            variant="primary"
            className={styles.cta}
          >
            Book a call
          </Button>
          <Button href="/contact" variant="secondary" className={styles.ctaSecondary}>
            Contact us
          </Button>
        </div>
      </div>
    </aside>
  );
}
