import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { AboutTeam } from "@/sections/about/AboutTeam";
import { MissionVision } from "@/sections/about/MissionVision";
import { FinalCta } from "@/sections/home/FinalCta";
import { COMPANY_OVERVIEW } from "@/lib/about";
import { COMPANY_INTRO_REST } from "@/lib/home";
import styles from "./about.module.css";

const ABOUT_FEATURE_IMAGE = "/images/construction/5.png";

export const metadata: Metadata = {
  title: "About",
  description:
    "XD Build is a Calgary-based digital delivery partner for BIM, VDC, and MEP coordination across the construction lifecycle.",
};

export default function AboutPage() {
  return (
    <>
      <Section className={styles.hero} aria-labelledby="about-hero-title">
        <div className={styles.heroInner}>
          <p className={`${styles.heroKicker} pageKicker`}>About XD Build</p>
          <h1 id="about-hero-title" className="pageTitle">
            Company Overview
          </h1>
          <div className={styles.twoCol}>
            <div className={styles.overview}>
              {COMPANY_OVERVIEW.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className={`${styles.blockText} ${styles.leadQuiet}`}>
                  {paragraph}
                </p>
              ))}
              <p className={`${styles.blockText} ${styles.leadQuiet}`}>{COMPANY_INTRO_REST}</p>
            </div>

            <div className={styles.featureCol}>
              <div className={styles.featureImage}>
                <Image
                  src={ABOUT_FEATURE_IMAGE}
                  alt="Modern commercial building exterior at street level"
                  width={640}
                  height={800}
                  priority
                  className={styles.featureImg}
                  style={{ height: "100%", width: "auto", maxWidth: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <MissionVision />

      <AboutTeam />

      


      

      <Section denseTop aria-labelledby="about-cta">
        <div className={styles.splitCta}>
          <div>
            <p className="pageKicker">Next step</p>
            <h2 id="about-cta" className={styles.sectionTitle}>
              Ready to align office and field?
            </h2>
            <p className={styles.sectionLeadPlain}>
              Tell us about your next milestone — we’ll map coordination risk and a
              practical delivery plan.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Button href="/contact" variant="primary">
              Contact us
            </Button>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
