import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getFeaturedProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { HeroFeaturedCarousel } from "@/sections/home/HeroFeaturedCarousel";
import type { HomeHero } from "@/types/home";
import styles from "./Hero.module.css";

const FALLBACK_VIDEO = "/videos/xdHeroVideo.mp4";
const FALLBACK_POSTER = "/images/hero-poster.jpg";
const FALLBACK_TRUST_BADGE = "120+";

type Props = {
  hero: HomeHero;
};

export async function HomeHero({ hero }: Props) {
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
      console.error("[HomeHero]", error);
    }
  }

  const videoSrc = hero.videoSrc?.trim() || FALLBACK_VIDEO;
  const videoPoster = hero.videoPoster?.trim();
  const poster =
    videoPoster ||
    (videoSrc === FALLBACK_VIDEO ? FALLBACK_POSTER : undefined);
  const trustBadgeValue = hero.trustBadgeValue?.trim() || FALLBACK_TRUST_BADGE;

  return (
    <Section bleed className={styles.wrap} aria-labelledby="home-hero-title">
      <video
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        {...(poster ? { poster } : {})}
        aria-hidden
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={styles.videoTint} aria-hidden />
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Build with clarity from day one</p>
          <h1 id="home-hero-title" className={styles.title}>
            Construction delivery that stays clear when <br />
            projects get complex.
          </h1>
          <p className={styles.lead}>
            XD Build helps owners and contractors align on what will be built,
            before steel, duct, and conduit ever hit the field. Simple language.
            Decisive coordination. Outcomes you can stand behind.
          </p>
          <div className={styles.badges}>
            <span className={styles.trustChip}>
              <span className="sr-only">
                Trusted across {trustBadgeValue} engagements
              </span>
              <span className={styles.trustChipLive} aria-hidden>
                Trusted across{" "}
                <AnimatedCounter value={trustBadgeValue} accessibilityHidden />{" "}
                engagements
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
