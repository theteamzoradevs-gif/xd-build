import Image from "next/image";
import { HeroBackgroundVideo } from "@/components/home/HeroBackgroundVideo";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import {
  cloudinaryVideoPosterUrl,
  isCloudinaryUrl,
  optimizeCloudinaryVideoUrl,
} from "@/lib/cloudinary";
import { siteConfig } from "@/lib/site";
import type { HomeHero } from "@/types/home";
import styles from "./Hero.module.css";

const FALLBACK_POSTER = "/images/hero-poster.jpg";
const HERO_FEATURE_IMAGE = "/images/construction/5.png";

type Props = {
  hero: HomeHero;
};

export async function HomeHero({ hero }: Props) {
  const rawVideo = hero.videoSrc?.trim() ?? "";
  const videoSrc = rawVideo
    ? isCloudinaryUrl(rawVideo)
      ? optimizeCloudinaryVideoUrl(rawVideo)
      : rawVideo
    : "";
  const videoPoster = hero.videoPoster?.trim();
  const poster =
    videoPoster ||
    (videoSrc ? cloudinaryVideoPosterUrl(videoSrc) : "") ||
    FALLBACK_POSTER;

  return (
    <Section bleed className={styles.wrap} aria-labelledby="home-hero-title">
      <HeroBackgroundVideo videoSrc={videoSrc} poster={poster} />
      <div className={styles.videoTint} aria-hidden />
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.kicker}>The BIM partner behind MEP trades</p>
          <h1 id="home-hero-title" className={styles.title}>
            Construction delivery that stays clear when <br />
            projects get complex.
          </h1>
          <p className={styles.lead}>
            XD Build helps contractors align on what will be built,
            before pipe, duct, and conduit ever hit the field. Simple language.
            Decisive coordination. Outcomes you can stand behind.
          </p>
          <div className={styles.badges}>
            <span className={styles.trustChip}>Built for MEP trade contractors</span>
          </div>
          <div className={styles.actions}>
            <Button href={siteConfig.bookingsUrl} variant="primary">
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
        <div className={styles.featureImage}>
          <Image
            src={HERO_FEATURE_IMAGE}
            alt="Modern architectural building exterior"
            width={300}
            height={257}
            priority
            className={styles.featureImg}
          />
        </div>
      </div>
    </Section>
  );
}
