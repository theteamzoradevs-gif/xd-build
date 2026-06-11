import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import styles from "@/sections/portfolio/RoutePortfolioShowcase.module.css";

export function ClarityCtaBanner() {
  return (
    <div className={styles.topCtaWrap}>
      <div className={styles.topCtaCard}>
        <h2 className={styles.cardHeading}>Achieve on-site clarity from day one</h2>
        <p className={styles.cardSubtext}>
          XD Build, your Calgary-based Digital Delivery Partner, specializes in
          precise BIM and VDC solutions to bridge the gap between office
          designs and field execution.
        </p>
        <div className={styles.cardActions}>
          <Button href={siteConfig.bookingsUrl} variant="primary">
            Get Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
