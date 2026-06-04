"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Button } from "@/components/ui/Button";
import styles from "./HeroFeaturedCarousel.module.css";

export type HeroCarouselProject = {
  slug: string;
  title: string;
  heroSrc: string;
  heroAlt: string;
  outcome: string;
};

type Props = {
  projects: readonly HeroCarouselProject[];
  className?: string;
};

const INTERVAL_MS = 3000;

export function HeroFeaturedCarousel({ projects, className }: Props) {
  const [index, setIndex] = useState(0);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (projects.length <= 1 || reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % projects.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [projects.length, reduceMotion]);

  const active = projects[index] ?? projects[0];
  if (!active) return null;

  return (
    <div className={`${styles.root} ${className ?? ""}`.trim()}>
      <div className={styles.card} aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.slug}
            className={styles.slide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/portfolio/${active.slug}`} className={styles.mediaLink}>
              <div className={styles.media}>
                <Image
                  src={active.heroSrc}
                  alt={active.heroAlt}
                  fill
                  sizes="(max-width: 900px) 90vw, 300px"
                  className={styles.img}
                  priority={index === 0}
                />
              </div>
            </Link>
            <div className={styles.body}>
              <h3 className={styles.cardTitle}>
                <Link href={`/portfolio/${active.slug}`}>{active.title}</Link>
              </h3>
              <p className={styles.outcome}>{active.outcome}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {projects.length > 1 ? (
          <div className={styles.dots} aria-hidden>
            {projects.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                className={styles.dot}
                data-active={i === index ? "true" : "false"}
                aria-label={`Show project ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className={styles.ctaRow}>
        <Button
          href={`/portfolio/${active.slug}`}
          variant="primary"
          className={styles.btnViewProject}
        >
          View Project
        </Button>
        <Button href="/portfolio" variant="secondary" className={styles.btnAllProjects}>
          View All Projects
        </Button>
      </div>
    </div>
  );
}
