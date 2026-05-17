import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FEATURED_PROJECT_SLUGS } from "@/lib/home";
import { getFeaturedProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { HeroFeaturedCarousel } from "@/sections/home/HeroFeaturedCarousel";
import styles from "./Hero.module.css";

const featured = getFeaturedProjects(FEATURED_PROJECT_SLUGS);

export function HomeHero() {
  const carouselProjects = featured.map((p) => ({
    slug: p.slug,
    title: p.title,
    heroSrc: p.heroSrc,
    heroAlt: p.heroAlt,
    outcome: p.outcome,
  }));

  return (
    <Section bleed className={styles.wrap} aria-labelledby="home-hero-title">
      <video
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1541888946425-d81bb940b71e?q=80&w=1800&auto=format&fit=crop"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-construction-site-at-sunset-1579/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.videoTint} aria-hidden />
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Build with clarity from day one</p>
          <h1 id="home-hero-title" className={styles.title}>
            Construction delivery that stays clear when projects get complex.
          </h1>
          <p className={styles.lead}>
            XD Build helps owners and contractors align on what will be built,
            before steel, duct, and conduit ever hit the field. Simple language.
            Decisive coordination. Outcomes you can stand behind.
          </p>
          <div className={styles.badges}>
            <span className={styles.trustChip}>
              <span className="sr-only">Trusted across 120+ engagements</span>
              <span className={styles.trustChipLive} aria-hidden>
                Trusted across{" "}
                <AnimatedCounter value="120+" accessibilityHidden /> engagements
              </span>
            </span>
          </div>
          <div className={styles.actions}>
            <Button href="/contact" variant="primary">
              Get Consultation
            </Button>
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="secondary"
              className={styles.actionEmail}
            >
              Email us
              <span className={styles.emailIcon} aria-hidden>
                <svg viewBox="0 0 24 24" width={18} height={18} focusable="false">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
        <HeroFeaturedCarousel projects={carouselProjects} />
      </div>
    </Section>
  );
}
