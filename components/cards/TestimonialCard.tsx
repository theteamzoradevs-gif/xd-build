import styles from "./TestimonialCard.module.css";

export type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialProps) {
  return (
    <figure className={styles.card}>
      <blockquote className={styles.quote}>
        <p>{quote}</p>
      </blockquote>
      <figcaption className={styles.meta}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
      </figcaption>
    </figure>
  );
}
