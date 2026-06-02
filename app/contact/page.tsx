import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { RoutePortfolioShowcase } from "@/sections/portfolio/RoutePortfolioShowcase";
import { CtaBand } from "@/sections/home/CtaBand";
import { WORK_WITH_US_CTA } from "@/lib/workWithUsCta";
import { siteConfig } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with XD Build about coordination, BIM, MEP, or VDC, we respond within one business day.",
};

const mapEmbedSrc =
  "https://maps.google.com/maps?q=35+Bartlett+Crescent+SE%2C+Calgary%2C+AB+T3S+0P6&t=m&z=17&output=embed";

export default function ContactPage() {
  return (
    <>
      <Section tight aria-labelledby="contact-title">
        <h1 id="contact-title" className="pageTitle">
          Let's build something deliberate together
        </h1>
        <p className="pageLead">
          Tell us where your model and field story disagree, we'll propose the
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
              <div>
                <p className={styles.label}>LinkedIn</p>
                <Link
                  className={styles.linkStrong}
                  href={siteConfig.linkedInCompany}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="LinkedIn Profile"
                  style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    width="26" 
                    height="26"
                  >
                    {/* white background layer */}
                    <rect x="0" y="0" width="24" height="24" fill="#ffffff" rx="4" />
                    {/* LinkedIn 'in' letters in blue */}
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#0a66c2" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className={styles.quickActions}>
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

      <CtaBand dark {...WORK_WITH_US_CTA} />
    </>
  );
}