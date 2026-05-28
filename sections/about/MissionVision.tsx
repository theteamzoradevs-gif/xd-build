import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { MISSION, VISION } from "@/lib/about";
import styles from "./MissionVision.module.css";

export function MissionVision() {
  return (
    <Section className={styles.wrap} aria-labelledby="mission-vision-heading">
      <h2 id="mission-vision-heading" className="sr-only">
        Mission and vision
      </h2>
      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.cardLight}`}>
          <div className={styles.texture} aria-hidden />
          <span className={`${styles.corner} ${styles.cornerTlLight}`} aria-hidden />
          <span className={`${styles.corner} ${styles.cornerBrLight}`} aria-hidden />
          <div className={`${styles.blob} ${styles.blobLight}`} aria-hidden />
          <span className={`${styles.accentTop} ${styles.accentTopLight}`} aria-hidden />

          <div className={styles.content}>
            <div className={styles.iconOrbit}>
              <div className={`${styles.iconCircle} ${styles.iconCircleLight}`}>
                <Image
                  src="/images/mission.png"
                  alt=""
                  width={32}
                  height={32}
                  className={styles.iconImg}
                />
              </div>
            </div>
            <p className={`${styles.label} ${styles.labelLight}`}>Mission</p>
            <p className={`${styles.body} ${styles.bodyLight}`}>{MISSION}</p>
          </div>
        </article>

        <article className={`${styles.card} ${styles.cardLight}`}>
          <div className={styles.texture} aria-hidden />
          <span className={`${styles.corner} ${styles.cornerTlLight}`} aria-hidden />
          <span className={`${styles.corner} ${styles.cornerBrLight}`} aria-hidden />
          <div className={`${styles.blob} ${styles.blobLight}`} aria-hidden />
          <span className={`${styles.accentTop} ${styles.accentTopLight}`} aria-hidden />

          <div className={styles.content}>
            <div className={styles.iconOrbit}>
              <div className={`${styles.iconCircle} ${styles.iconCircleLight}`}>
                <Image
                  src="/images/vision.png"
                  alt=""
                  width={32}
                  height={32}
                  className={styles.iconImg}
                />
              </div>
            </div>
            <p className={`${styles.label} ${styles.labelLight}`}>Vision</p>
            <p className={`${styles.body} ${styles.bodyLight}`}>{VISION}</p>
          </div>
        </article>
      </div>
    </Section>
  );
}
