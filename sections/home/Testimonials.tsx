"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import styles from "./Testimonials.module.css";

const ITEMS = [
  {
    quote:
      "They turned a messy model into something our subs could actually build from, RFIs dropped the next week.",
    name: "Operations lead",
    role: "National GC · mission critical",
  },
  {
    quote:
      "Owners finally saw the story in one place. We got sign-off without another round of pretty slides.",
    name: "Project director",
    role: "Developer · mixed-use",
  },
  {
    quote:
      "Fast, direct, and weirdly pleasant to work with. The field team trusted the sheets.",
    name: "MEP manager",
    role: "Healthcare campus",
  },
] as const;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = ITEMS[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % ITEMS.length);
    }, 4300);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <Section
      className={styles.section}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.header}>
        <h2 id="testimonials-title" className={styles.title}>
          Teams that like clean handoffs
        </h2>
        <p className={styles.lead}>
          Short words from people who care about install week more than renderings.
        </p>
      </div>

      <div className={styles.carousel}>
        <p className={styles.quoteMark} aria-hidden>
          “
        </p>
        <p className={styles.quote}>{active.quote}</p>
        <p className={styles.author}>{active.name}</p>
        <p className={styles.role}>{active.role}</p>

        <div className={styles.dots} aria-label="Testimonial navigation">
          {ITEMS.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              className={styles.dot}
              data-active={idx === index ? "true" : "false"}
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setIndex(idx)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
