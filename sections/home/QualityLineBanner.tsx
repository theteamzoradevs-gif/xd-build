"use client";

import type { LegacyRef } from "react";
import { Button } from "@/components/ui/Button";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { PORTFOLIO_QUALITY_LINE } from "@/lib/portfolioCopy";
import styles from "./QualityLineBanner.module.css";

export function QualityLineBanner() {
  const [ref, visible] = useInViewOnce<HTMLElement>();

  return (
    <aside
      ref={ref as LegacyRef<HTMLElement>}
      className={styles.banner}
      aria-labelledby="quality-line-heading"
    >
<<<<<<< HEAD
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
=======
      <div className={styles.texture} aria-hidden />
      <div
        className={`${styles.inner} ${visible ? styles.innerInView : ""}`}
      >
        <span className={styles.spine} aria-hidden />
        <div className={styles.copy}>
          <p className={styles.kicker}>Standard we hold</p>
          <p id="quality-line-heading" className={styles.quote}>
            {PORTFOLIO_QUALITY_LINE}
          </p>
>>>>>>> a23b02491cd3a51a0982677aa750229bd2541b66
        </div>
        <Button href="/contact" variant="primary" className={styles.cta}>
          Book a call
        </Button>
      </div>
    </aside>
  );
}
