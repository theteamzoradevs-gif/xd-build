"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Fragment,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";
import { Section } from "@/components/ui/Section";
import { TESTIMONIALS, TRUST_STATS } from "@/lib/testimonials";
import styles from "./Testimonials.module.css";

function quoteWithHighlights(
  quote: string,
  highlights: readonly string[] | undefined,
): ReactNode {
  if (!highlights?.length) return quote;

  const phrases = [...highlights].sort((a, b) => b.length - a.length);
  let nodes: ReactNode[] = [quote];

  phrases.forEach((phrase, pi) => {
    const next: ReactNode[] = [];
    nodes.forEach((node, ni) => {
      if (typeof node !== "string") {
        next.push(node);
        return;
      }
      if (!node.includes(phrase)) {
        next.push(node);
        return;
      }
      const parts = node.split(phrase);
      parts.forEach((part, i) => {
        if (part) next.push(part);
        if (i < parts.length - 1) {
          next.push(
            <span key={`h-${phrase}-${pi}-${ni}-${i}`} className={styles.quoteAccent}>
              {phrase}
            </span>,
          );
        }
      });
    });
    nodes = next;
  });

  return (
    <>
      {nodes.map((n, i) => (
        <Fragment key={i}>{n}</Fragment>
      ))}
    </>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const labelId = useId();
  const active = TESTIMONIALS[index];

  useEffect(() => {
    if (pause) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [pause]);

  const onPick = useCallback((i: number) => setIndex(i), []);

  return (
    <Section className={styles.section} aria-labelledby={labelId}>
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
        <p className={styles.eyebrow}>Trusted by industry leaders</p>
        <h2 id={labelId} className={styles.title}>
          Social proof from teams who ship in the field
        </h2>
        <p className={styles.sublead}>
          Builders, trades, and owners who measure us on outcomes — not slide decks.
        </p>

        <div
          className={styles.logoRail}
          role="tablist"
          aria-label="Select client testimonial"
        >
          {TESTIMONIALS.map((t, idx) => {
            const selected = idx === index;
            return (
              <motion.button
                key={t.company}
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
                  {t.logoSrc ? (
                    <Image
                      src={t.logoSrc}
                      alt=""
                      width={140}
                      height={36}
                      className={styles.logoImg}
                      data-active={selected ? "true" : "false"}
                    />
                  ) : (
                    <span className={styles.logoFallback}>{t.company}</span>
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
                key={active.company + index}
                className={styles.cardMotion}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className={styles.blockquote}>
                  <p className={styles.quoteText}>
                    {quoteWithHighlights(active.quote, active.quoteHighlights)}
                  </p>
                </blockquote>
                <footer className={styles.attribution}>
                  <p className={styles.author}>{active.name}</p>
                  <p className={styles.company}>{active.company}</p>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.stats} aria-label="Trust metrics">
          {TRUST_STATS.map((s, i) => (
            <Fragment key={s.label}>
              {i > 0 ? <span className={styles.statSep} aria-hidden /> : null}
              <div className={styles.stat}>
                <p className={styles.statValue}>{s.value}</p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      </div>
    </Section>
  );
}
