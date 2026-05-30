import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import styles from "./Section.module.css";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  bleed?: boolean;
  tight?: boolean;
  denseBottom?: boolean;
  denseTop?: boolean;
  "aria-labelledby"?: string;
};

export function Section({
  id,
  children,
  className,
  bleed,
  tight,
  denseBottom,
  denseTop,
  "aria-labelledby": labelledBy,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        styles.section,
        tight && styles.tight,
        denseBottom && styles.denseBottom,
        denseTop && styles.denseTop,
        className,
      )}
    >
      <div className={cn(styles.inner, bleed && styles.innerBleed)}>{children}</div>
    </section>
  );
}
