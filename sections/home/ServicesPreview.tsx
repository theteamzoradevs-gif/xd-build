 "use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Section } from "@/components/ui/Section";
import styles from "./ServicesPreview.module.css";

const ICON_SIZE = 18;

function ModelIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h10" stroke="#0E172A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MepIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h4l2-4 3 8 2-4h3"
        stroke="#0E172A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrefabIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="5" width="7" height="6" rx="1" stroke="#0E172A" strokeWidth="1.8" />
      <rect x="13" y="5" width="7" height="6" rx="1" stroke="#0E172A" strokeWidth="1.8" />
      <rect x="8.5" y="13" width="7" height="6" rx="1" stroke="#0E172A" strokeWidth="1.8" />
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 4H4v4M16 4h4v4M8 20H4v-4M16 20h4v-4" stroke="#0E172A" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" stroke="#0E172A" strokeWidth="1.8" />
    </svg>
  );
}

function VrIcon() {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="8" width="18" height="8" rx="3" stroke="#0E172A" strokeWidth="1.8" />
      <circle cx="9" cy="12" r="1.4" fill="#0E172A" />
      <circle cx="15" cy="12" r="1.4" fill="#0E172A" />
    </svg>
  );
}

const SERVICES = [
  {
    title: "BIM Management and Advisory",
    benefit: "Coordination frameworks that keep decisions traceable and teams aligned.",
    bullets: ["Model governance", "Issue ownership rituals"],
    href: "/services#bim",
    icon: <ModelIcon />,
  },
  {
    title: "MEP BIM Modeling",
    benefit: "Mechanical, electrical, and plumbing models built for install reality.",
    bullets: ["Clash-tested systems", "Field-legible outputs"],
    href: "/services#mep",
    icon: <MepIcon />,
  },
  {
    title: "Prefabrication Design",
    benefit: "Prefab-ready packages that reduce ambiguity before material hits site.",
    bullets: ["Fabrication intent", "Repeatable assemblies"],
    href: "/services#vdc",
    icon: <PrefabIcon />,
  },
  {
    title: "Laser Scanning",
    benefit: "Reality capture for existing conditions and high-confidence retrofit planning.",
    bullets: ["Scan-to-model", "As-built verification"],
    href: "/services",
    icon: <ScanIcon />,
  },
  {
    title: "Virtual and Augmented Reality",
    benefit: "Immersive walkthroughs that align owners, field, and leadership quickly.",
    bullets: ["Design intent reviews", "Stakeholder sign-off support"],
    href: "/services",
    icon: <VrIcon />,
  },
] as const;

const PAGE_SIZE = 3;

export function ServicesPreview() {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(SERVICES.length / PAGE_SIZE);
  const pages = useMemo(() => {
    const chunks: Array<Array<(typeof SERVICES)[number]>> = [];
    for (let i = 0; i < SERVICES.length; i += PAGE_SIZE) {
      chunks.push(SERVICES.slice(i, i + PAGE_SIZE));
    }
    return chunks;
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPage((prev) => (prev + 1) % pageCount);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [pageCount]);

  return (
    <Section className={styles.section} aria-labelledby="services-preview-title">
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Services</p>
          <h2 id="services-preview-title" className={styles.title}>
            What we do
          </h2>
          <p className={styles.lead}>
            Five focused service lines, built for faster decisions and cleaner handoffs.
          </p>
        </div>
        <a className={styles.explore} href="/services">
          Explore services
          <Image src="/icons/right-arrow.svg" alt="" width={12} height={12} aria-hidden />
        </a>
      </div>

      <div className={styles.slider}>
        <div className={styles.track} style={{ transform: `translateX(-${page * 100}%)` }}>
          {pages.map((chunk, idx) => (
            <div className={styles.slide} key={`slide-${idx}`}>
              <div className={styles.grid}>
                {chunk.map((s) => (
                  <ServiceCard key={s.title} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots} aria-label="Service pages">
        {Array.from({ length: pageCount }).map((_, idx) => (
          <button
            key={`dot-${idx}`}
            type="button"
            className={styles.dot}
            data-active={idx === page ? "true" : "false"}
            aria-label={`Go to service page ${idx + 1}`}
            onClick={() => setPage(idx)}
          />
        ))}
      </div>
    </Section>
  );
}
