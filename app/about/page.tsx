import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { AboutTeam } from "@/sections/about/AboutTeam";
import { MissionVision } from "@/sections/about/MissionVision";
import { FinalCta } from "@/sections/home/FinalCta";
import { RoutePortfolioShowcase } from "@/sections/portfolio/RoutePortfolioShowcase";
import {
  COMPANY_OVERVIEW,
  WORK_GALLERY_PLACEHOLDERS,
} from "@/lib/about";
import { COMPANY_INTRO_REST } from "@/lib/home";
import { getFeaturedProjects } from "@/lib/projects";
import { HeroFeaturedCarousel } from "@/sections/home/HeroFeaturedCarousel";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "XD Build is a Calgary-based digital delivery partner for BIM, VDC, and MEP coordination across the construction lifecycle.",
};

export default async function AboutPage() {
  let carouselProjects: {
    slug: string;
    title: string;
    heroSrc: string;
    heroAlt: string;
    outcome: string;
  }[] = [];

  try {
    const featured = await getFeaturedProjects();
    carouselProjects = featured.map((p) => ({
      slug: p.slug,
      title: p.title,
      heroSrc: p.heroSrc,
      heroAlt: p.heroAlt,
      outcome: p.outcome,
    }));
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[AboutPage]", error);
    }
  }

  return (
    <>
      <Section className={styles.hero} aria-labelledby="about-hero-title">
        <div className={styles.heroInner}>
          <p className={`${styles.heroKicker} pageKicker`}>About XD Build</p>
          <h1 id="about-hero-title" className="pageTitle">
            Company overview
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

            <div>
              <HeroFeaturedCarousel projects={carouselProjects} />
            </div>
          </div>
        </div>
      </Section>

      <MissionVision />

      <AboutTeam />

      


      

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
