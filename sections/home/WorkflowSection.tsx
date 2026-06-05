import { Section } from "@/components/ui/Section";
import {
  WORKFLOW_NARRATIVE_LEFT,
  WORKFLOW_NARRATIVE_RIGHT,
  WORKFLOW_QUOTE,
  WORKFLOW_STAGES,
} from "@/lib/workflow";
import styles from "./WorkflowSection.module.css";

export function WorkflowSection() {
  return (
    <Section
      denseTop
      denseBottom
      className={styles.section}
      aria-labelledby="workflow-title"
    >
      <div className={styles.top}>
        <h2 id="workflow-title" className={styles.pageTitle}>
          Work flow
        </h2>
        <p className={styles.quote}>{WORKFLOW_QUOTE}</p>
      </div>

      <div className={styles.stages}>
        {WORKFLOW_STAGES.map((stage) => (
          <div
            key={stage.id}
            className={styles.stage}
            data-variant={stage.variant}
          >
            <div className={styles.chevron}>
              <span className={styles.chevronLabel}>{stage.label}</span>
            </div>
            <ul className={styles.bullets}>
              {stage.bullets.map((b) => (
                <li key={b.slice(0, 24)}>{b}</li>
              ))}
            </ul>
            <p className={styles.tags}>{stage.tags}</p>
          </div>
        ))}
      </div>

      <div className={styles.narrative}>
        <div className={styles.narrCol}>
          {WORKFLOW_NARRATIVE_LEFT.map((p) => (
            <p key={p.slice(0, 40)} className={styles.narrP}>
              {p}
            </p>
          ))}
        </div>
        <div className={styles.narrCol}>
          {WORKFLOW_NARRATIVE_RIGHT.map((p) => (
            <p key={p.slice(0, 40)} className={styles.narrP}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
