import { Button } from "@/components/ui/Button";
import { PORTFOLIO_QUALITY_LINE } from "@/lib/portfolioCopy";
import styles from "./QualityLineBanner.module.css";

export function QualityLineBanner() {
  return (
    <aside className={styles.banner} aria-labelledby="quality-line-heading">
      <div className={styles.inner}>
        <p id="quality-line-heading" className={styles.quote}>
          {PORTFOLIO_QUALITY_LINE}
        </p>
        <Button href="/contact" variant="primary" className={styles.cta}>
          Book a call
        </Button>
      </div>
    </aside>
  );
}
