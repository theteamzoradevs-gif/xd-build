"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import { Section } from "@/components/ui/Section";
import type { HomeTestimonial, HomeTestimonialsSection } from "@/types/home";
import styles from "./Testimonials.module.css";

type Props = {
  section: HomeTestimonialsSection;
  testimonials: HomeTestimonial[];
};

function quoteWithHighlights(quote: string): ReactNode {
  return quote;
}

export function Testimonials({ section, testimonials }: Props) {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const labelId = useId();

  const count = testimonials.length;
  const active = testimonials[index];

  useEffect(() => {
    if (pause || count <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [pause, count]);

  const onPick = useCallback((i: number) => setIndex(i), []);

  if (!active || count === 0) return null;

  return (
    <Section denseTop denseBottom className={styles.section} aria-labelledby={labelId}>
      <div
        className={styles.wrap}
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <div className={styles.aura} aria-hidden>
          <span className={styles.blob} />
          <span className={`${styles.blob} ${styles.blobSecondary}`} />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>{section.eyebrow}</p>
          <h2 id={labelId} className={styles.title}>
            {section.title}
          </h2>
          <p className={styles.sublead}>{section.subtitle}</p>

          <div
            className={styles.logoRail}
            role="tablist"
            aria-label="Select client testimonial"
          >
            {testimonials.map((t, idx) => {
              const selected = idx === index;
              const logoAlt = t.logoAlt?.trim() || t.authorCompany;
              return (
                <motion.button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={styles.logoPill}
                  data-active={selected ? "true" : "false"}
                  onClick={() => onPick(idx)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                >
                  <span className={styles.logoGlow} aria-hidden />
                  <span className={styles.logoFrame}>
                    {t.logoSrc?.trim() ? (
                      <Image
                        src={t.logoSrc}
                        alt={logoAlt}
                        width={140}
                        height={36}
                        className={styles.logoImg}
                        data-active={selected ? "true" : "false"}
                      />
                    ) : (
                      <span className={styles.logoFallback}>
                        {t.authorCompany}
                      </span>
                    )}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className={styles.cardShell}>
            <span className={styles.decoQuote} aria-hidden>
              &ldquo;
            </span>
            <div className={styles.card}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id + index}
                  className={styles.cardMotion}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className={styles.blockquote}>
                    <p className={styles.quoteText}>
                      {active.quote?.trim()
                        ? quoteWithHighlights(active.quote)
                        : "—"}
                    </p>
                  </blockquote>
                  <footer className={styles.attribution}>
                    <p className={styles.author}>{active.authorName}</p>
                    <p className={styles.company}>{active.authorCompany}</p>
                  </footer>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionBridge} aria-hidden>
        <span className={styles.bridgeGlow} />
        <span className={styles.bridgeLine} />
      </div>
    </Section>
  );
}
