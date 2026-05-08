import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { RoutePortfolioShowcase } from "@/sections/portfolio/RoutePortfolioShowcase";
import { siteConfig } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with XD Build about coordination, BIM, MEP, or VDC, we respond within one business day.",
};

const mapEmbedSrc =
  "https://maps.google.com/maps?q=7015%20Macleod%20Trail%20SW%20%23400%2C%20Calgary%2C%20AB%20T2H%202K6&t=m&z=17&output=embed";

export default function ContactPage() {
  return (
    <>
      <Section tight aria-labelledby="contact-title">
        <h1 id="contact-title" className="pageTitle">
          Let&apos;s build something deliberate together
        </h1>
        <p className="pageLead">
          Tell us where your model and field story disagree, we&apos;ll propose the
          fastest path back to certainty.
        </p>
      </Section>

      <Section tight aria-label="Contact methods and enquiry form">
        <div className={styles.grid}>
          <aside className={styles.aside}>
            <p className={styles.trustBadge}>
              We respond within <strong>24 hours</strong> on business days.
            </p>
            <div className={styles.blocks}>
              <div>
                <p className={styles.label}>Email us</p>
                <Link className={styles.linkStrong} href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </Link>
              </div>
              <div>
                <p className={styles.label}>Call</p>
                <Link className={styles.linkStrong} href={`tel:${siteConfig.phoneE164}`}>
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
              <div>
                <p className={styles.label}>Visit</p>
                <p className={styles.address}>
                  {siteConfig.addressLines[0]}
                  <br />
                  {siteConfig.addressLines[1]}
                </p>
              </div>
            </div>
            <div className={styles.quickActions}>
              <Link className={styles.actionBtn} href={`tel:${siteConfig.phoneE164}`}>
                <span aria-hidden className={styles.actionIconSvg}>
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path
                      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Call now
              </Link>
              <Link className={styles.actionBtn} href={`mailto:${siteConfig.email}`}>
                <span aria-hidden className={styles.actionIconSvg}>
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path
                      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Send Email
              </Link>
            </div>
            <div className={styles.mapWrap}>
              <iframe
                title="XD Build Calgary office map"
                src={mapEmbedSrc}
                className={styles.mapFrame}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
          <div>
            <Suspense fallback={<p className={styles.loading}>Loading form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Section>

      <RoutePortfolioShowcase routeKey="contact" />
    </>
  );
}
