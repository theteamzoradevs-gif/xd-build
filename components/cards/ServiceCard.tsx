import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ServiceCard.module.css";

export type ServiceCardProps = {
  title: string;
  benefit: string;
  bullets: readonly string[];
  href: string;
  icon?: ReactNode;
};

export function ServiceCard({
  title,
  benefit,
  bullets,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.icon} aria-hidden>
        {icon ?? <span className={styles.iconFallback}>◆</span>}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.benefit}>{benefit}</p>
      <ul className={styles.list}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <Link href={href} className={styles.link}>
        Learn more
      </Link>
    </article>
  );
}
