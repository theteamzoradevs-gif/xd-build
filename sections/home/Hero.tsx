import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import styles from "./Hero.module.css";

export function HomeHero() {
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
            <Button href="/portfolio" variant="primary">
              View full portfolio
            </Button>
            <Button href="/contact" variant="secondary" className={styles.heroSecondary}>
              Get Consultation
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
