import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FinalCta } from "@/sections/home/FinalCta";
import { RoutePortfolioShowcase } from "@/sections/portfolio/RoutePortfolioShowcase";
import {
  COMPANY_OVERVIEW,
  FOUNDER,
  MISSION,
  VISION,
  WORK_GALLERY_PLACEHOLDERS,
} from "@/lib/about";
import styles from "./about.module.css";

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
            Company overview
          </h1>
          <div className={styles.overview}>
            {COMPANY_OVERVIEW.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={`${styles.blockText} ${styles.leadQuiet}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section aria-labelledby="mission-vision">
        <h2 id="mission-vision" className="sr-only">
          Mission and vision
        </h2>
        <div className={styles.missionVision}>
          <article className={styles.mvCard}>
            <p className="pageKicker">Mission</p>
            <p className={styles.mvBody}>{MISSION}</p>
          </article>
          <article className={styles.mvCard}>
            <p className="pageKicker">Vision</p>
            <p className={styles.mvBody}>{VISION}</p>
          </article>
        </div>
      </Section>

      <Section aria-labelledby="founder-title">
        <div className={styles.founder}>
          <div className={styles.founderMedia}>
            <Image
              src={FOUNDER.photo}
              alt={`${FOUNDER.name}, ${FOUNDER.title}`}
              width={480}
              height={600}
              className={styles.founderPhoto}
              sizes="(max-width: 900px) 100vw, 420px"
              priority
            />
          </div>
          <div>
            <p className="pageKicker">Founder</p>
            <h2 id="founder-title" className={styles.founderName}>
              {FOUNDER.name}
            </h2>
            <p className={styles.founderCred}>
              {FOUNDER.title}&nbsp;&nbsp;|&nbsp;&nbsp;{FOUNDER.credentials}
            </p>
            <p className={styles.blockText}>{FOUNDER.interimBio}</p>
            <p className={styles.bioNote}>{FOUNDER.bioPlaceholder}</p>
            <Link
              className={styles.linkedIn}
              href={FOUNDER.linkedIn}
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn profile
            </Link>
          </div>
        </div>
      </Section>

      <Section aria-labelledby="gallery-title">
        <div className={styles.galleryHeader}>
          <p className="pageKicker">Work photos</p>
          <h2 id="gallery-title" className={styles.sectionTitle}>
            Project gallery
          </h2>
          <p className={styles.galleryLead}>
            A snapshot of coordination, scanning, and delivery in the field — swap in
            project photography as it becomes available.
          </p>
        </div>
        <div className={styles.galleryGrid}>
          {WORK_GALLERY_PLACEHOLDERS.map((item) => (
            <div key={item.src} className={styles.galleryCell}>
              <Image
                src={item.src}
                alt={item.alt}
                width={640}
                height={480}
                className={styles.galleryImg}
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="about-cta">
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
            <Button href="/portfolio" variant="primary">
              View portfolio
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </Section>

      <RoutePortfolioShowcase routeKey="about" />

      <FinalCta />
    </>
  );
}
