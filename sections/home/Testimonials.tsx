"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useCallback, useEffect, useId, useState } from "react";
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

function authorInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
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
    <Section band className={styles.section} aria-labelledby={labelId}>
      <div
        className={styles.wrap}
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <div className={styles.content}>
          <div className={styles.headerBlock}>
            <p className={styles.eyebrow}>{section.eyebrow}</p>
            <h2 id={labelId} className={styles.title}>
              {section.title}
            </h2>
            <p className={styles.sublead}>{section.subtitle}</p>
          </div>

          <div className={styles.stage}>
            <div className={styles.cardShell}>
              <div className={styles.card}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active.id + index}
                    className={styles.cardMotion}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={styles.cardLogo}>
                      {active.logoSrc?.trim() ? (
                        <Image
                          src={active.logoSrc}
                          alt={active.logoAlt?.trim() || active.authorCompany}
                          width={160}
                          height={40}
                          className={styles.cardLogoImg}
                        />
                      ) : (
                        <span className={styles.cardLogoFallback}>
                          {active.authorCompany}
                        </span>
                      )}
                    </div>
                    <blockquote className={styles.blockquote}>
                      <p
                        className={styles.quoteText}
                        title={active.quote?.trim() || undefined}
                      >
                        {active.quote?.trim()
                          ? quoteWithHighlights(active.quote)
                          : ","}
                      </p>
                    </blockquote>
                    <footer className={styles.attribution}>
                      <span className={styles.avatar} aria-hidden>
                        {authorInitials(active.authorName)}
                      </span>
                      <div className={styles.authorMeta}>
                        <p className={styles.author}>{active.authorName}</p>
                        <p className={styles.company}>{active.authorCompany}</p>
                      </div>
                    </footer>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {count > 1 ? (
              <div
                className={styles.progress}
                role="tablist"
                aria-label="Testimonial progress"
              >
                {testimonials.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={idx === index}
                    aria-label={`Show testimonial ${idx + 1}`}
                    className={styles.progressDot}
                    data-active={idx === index ? "true" : "false"}
                    onClick={() => onPick(idx)}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
