"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/sections/home/Hero.module.css";

type Props = {
  videoSrc: string;
  poster?: string;
};

/** Defers loading the hero MP4 until the section is near the viewport. */
export function HeroBackgroundVideo({ videoSrc, poster }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !videoSrc) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setSrc(videoSrc);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [videoSrc]);

  useEffect(() => {
    const el = videoRef.current;
    if (!src || !el) return;
    el.load();
    void el.play().catch(() => {});
  }, [src]);

  if (!videoSrc) {
    return poster ? (
      // eslint-disable-next-line @next/next/no-img-element -- static poster fallback when CMS video missing
      <img src={poster} alt="" className={styles.bgVideo} aria-hidden />
    ) : null;
  }

  return (
    <video
      ref={videoRef}
      className={styles.bgVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden
    >
      {src ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
