"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Button } from "@/components/ui/Button";
import styles from "./HeroFeaturedCarousel.module.css";

export type HeroCarouselItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
};

/** @deprecated Use HeroCarouselItem */
export type HeroCarouselProject = HeroCarouselItem & { slug: string; outcome: string; heroSrc: string; heroAlt: string };

type Props = {
  items: readonly HeroCarouselItem[];
  className?: string;
  mode?: "portfolio" | "services";
  /** Stretch carousel to match a sibling text column (e.g. About page). */
  alignColumn?: boolean;
};

const INTERVAL_MS = 3000;

export function HeroFeaturedCarousel({
  items,
  className,
  mode = "portfolio",
  alignColumn = false,
}: Props) {
  const [index, setIndex] = useState(0);
  const reduceMotion = usePrefersReducedMotion();
  const isServices = mode === "services";

  useEffect(() => {
    if (items.length <= 1 || reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [items.length, reduceMotion]);

  const active = items[index] ?? items[0];
  if (!active) return null;

  const itemHref = active.href ?? (isServices ? undefined : `/portfolio/${active.id}`);

  return (
    <div
      className={`${styles.root} ${alignColumn ? styles.rootAlignColumn : ""} ${className ?? ""}`.trim()}
    >
      <div className={styles.card} aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            className={styles.slide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {itemHref && !isServices ? (
              <Link href={itemHref} className={styles.mediaLink}>
                <div className={styles.media}>
                  <Image
                    src={active.imageSrc}
                    alt={active.imageAlt}
                    fill
                    sizes="(max-width: 900px) 90vw, 300px"
                    className={styles.img}
                    priority={index === 0}
                  />
                </div>
              </Link>
            ) : (
              <div className={styles.media}>
                <Image
                  src={active.imageSrc}
                  alt={active.imageAlt}
                  fill
                  sizes="(max-width: 900px) 90vw, 300px"
                  className={styles.img}
                  priority={index === 0}
                />
              </div>
            )}
            <div className={styles.body}>
              <h3 className={styles.cardTitle}>
                {itemHref && !isServices ? (
                  <Link href={itemHref}>{active.title}</Link>
                ) : (
                  active.title
                )}
              </h3>
              <p className={styles.outcome}>{active.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {items.length > 1 ? (
          <div className={styles.dots} aria-hidden>
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={styles.dot}
                data-active={i === index ? "true" : "false"}
                aria-label={`Show ${isServices ? "service" : "project"} ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        ) : null}
      </div>

      {isServices ? (
        <div className={`${styles.ctaRow} ${styles.ctaRowSingle}`}>
          <Button href="/services" variant="secondary" className={styles.btnAllProjects}>
            View All Services
          </Button>
        </div>
      ) : (
        <div className={styles.ctaRow}>
          <Button
            href={itemHref ?? "/portfolio"}
            variant="primary"
            className={styles.btnViewProject}
          >
            View Project
          </Button>
          <Button href="/portfolio" variant="secondary" className={styles.btnAllProjects}>
            View All Projects
          </Button>
        </div>
      )}
    </div>
  );
}
