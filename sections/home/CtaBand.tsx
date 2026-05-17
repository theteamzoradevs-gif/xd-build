import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import styles from "./CtaBand.module.css";

type Props = {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
};

export function CtaBand({
  title,
  subtitle,
  primaryLabel = "View full portfolio",
  primaryHref = "/portfolio",
  secondaryLabel,
  secondaryHref,
  dark,
}: Props) {
  const showSecondary =
    Boolean(secondaryLabel) && Boolean(secondaryHref);

  return (
    <Section tight className={dark ? styles.dark : styles.light}>
      <div className={styles.inner}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.actions}>
          <Button href={primaryHref} variant="primary">
            {primaryLabel}
          </Button>
          {showSecondary ? (
            <Button
              href={secondaryHref!}
              variant="secondary"
              className={dark ? styles.secondaryOnDark : undefined}
            >
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
