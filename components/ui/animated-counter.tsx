"use client";

import { useEffect, useMemo, useRef, useState, type LegacyRef } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { parseMetricValue } from "@/lib/parseMetricValue";
import { cn } from "@/utils/cn";

export const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

function formatRunning(n: number, decimals: number): string {
  if (decimals <= 0) return Math.round(n).toString();
  return n.toFixed(decimals);
}

export type AnimatedCounterProps = {
  /** Original display string for parsing and assistive text (e.g. "500+", "98%"). */
  value: string;
  className?: string;
  /** Override parsed numeric end. */
  end?: number;
  /** Override parsed prefix. */
  prefix?: string;
  /** Override parsed suffix. */
  suffix?: string;
  /** Override inferred decimal places. */
  decimals?: number;
  /** Animation length in milliseconds. */
  duration?: number;
  /** Easing on normalized time in [0, 1]. */
  easing?: (t: number) => number;
  /** When true, no sr-only span; parent must expose the full phrase to assistive tech. */
  accessibilityHidden?: boolean;
};

export function AnimatedCounter({
  value,
  className,
  end: endOverride,
  prefix: prefixOverride,
  suffix: suffixOverride,
  decimals: decimalsOverride,
  duration = 850,
  easing = easeOutCubic,
  accessibilityHidden = false,
}: AnimatedCounterProps) {
  const parsed = useMemo(() => parseMetricValue(value), [value]);
  const end = endOverride ?? parsed.end;
  const prefix = prefixOverride ?? parsed.prefix;
  const suffix = suffixOverride ?? parsed.suffix;
  const decimals = decimalsOverride ?? parsed.decimals;

  const [containerRef, inView] = useInViewOnce<HTMLSpanElement>();
  const reduceMotion = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion || end === 0) {
      setDisplay(end);
      return;
    }

    let cancelled = false;
    const from = 0;
    const start = performance.now();

    const tick = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - start) / duration);
      const eased = easing(t);
      const v = from + (end - from) * eased;
      setDisplay(v);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(end);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, end, duration, easing, reduceMotion]);

  const shown = formatRunning(display, decimals);

  return (
    <span ref={containerRef as LegacyRef<HTMLSpanElement>} className="inline-flex min-w-0 items-baseline">
      {!accessibilityHidden ? (
        <span className="sr-only">{value.trim() || `${prefix}${shown}${suffix}`}</span>
      ) : null}
      <span
        aria-hidden={accessibilityHidden ? undefined : true}
        className={cn(className)}
        style={{ fontVariantNumeric: "tabular-nums" }}
        suppressHydrationWarning
      >
        {prefix}
        {shown}
        {suffix}
      </span>
    </span>
  );
}
