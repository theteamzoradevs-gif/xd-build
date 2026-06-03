import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import styles from "./ServiceSection.module.css";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  summary?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
};

export function ServiceSection({
  id,
  eyebrow,
  title,
  problem,
  solution,
  outcome,
  summary,
  imageSrc,
  imageAlt,
  imagePosition = "left",
}: Props) {
  const isLeft = imagePosition === "left";

  return (
    <Section denseTop id={id} aria-labelledby={`${id}-heading`}>
      <div className={isLeft ? styles.row : `${styles.row} ${styles.rowReverse}`}>
        <div className={styles.media}>
          <div className={styles.imageWrap}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.copy}>
          <p className={styles.kicker}>{eyebrow}</p>
          <h2 id={`${id}-heading`} className={styles.title}>
            {title}
          </h2>
          {summary ? (
            <p className={styles.summary}>{summary}</p>
          ) : (
            <div className={styles.blocks}>
              <div>
                <h3 className={styles.blockLabel}>Problem</h3>
                <p className={styles.blockText}>{problem}</p>
              </div>
              <div>
                <h3 className={styles.blockLabel}>Solution</h3>
                <p className={styles.blockText}>{solution}</p>
              </div>
              <div>
                <h3 className={styles.blockLabel}>Outcome</h3>
                <p className={styles.blockText}>{outcome}</p>
              </div>
            </div>
          )}
          <Button href="/contact" variant="primary">
            Get Consultation on this scope
          </Button>
        </div>
      </div>
    </Section>
  );
}
