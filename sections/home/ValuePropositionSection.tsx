import Image from "next/image";
import { Section } from "@/components/ui/Section";
import {
  VALUE_PROPOSITION_QUOTE,
  VALUE_PROPOSITION_ROWS,
} from "@/lib/valueProposition";
import styles from "./ValuePropositionSection.module.css";

export function ValuePropositionSection() {
  return (
    <Section
      denseBottom
      className={styles.section}
      aria-labelledby="value-prop-title"
    >
      <div className={styles.headerRow}>
        <p className={styles.kickerAccent} aria-hidden />
        <div>
          <h2 id="value-prop-title" className={styles.title}>
            Value proposition
          </h2>
          <p className={styles.quote}>{VALUE_PROPOSITION_QUOTE}</p>
        </div>
      </div>
      <ul className={styles.list}>
        {VALUE_PROPOSITION_ROWS.map((row) => (
          <li key={row.title} className={styles.row}>
            <div className={styles.thumb}>
              <Image
                src={row.imageSrc}
                alt={row.imageAlt}
                width={200}
                height={140}
                className={styles.thumbImg}
              />
            </div>
            <div className={styles.body}>
              <h3 className={styles.rowTitle}>{row.title}</h3>
              <p className={styles.rowBody}>{row.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
