"use client";

import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

const defaultOptions: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -6% 0px",
};

export function useInViewOnce<T extends Element = HTMLElement>(
  options?: IntersectionObserverInit,
): readonly [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  const optsRef = useRef(options);
  optsRef.current = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setVisible(true);
    };

    const merged: IntersectionObserverInit = {
      ...defaultOptions,
      ...optsRef.current,
    };

    const io = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) finish();
    }, merged);

    io.observe(el);

    let raf0 = 0;
    let raf1 = 0;
    raf0 = requestAnimationFrame(() => {
      raf1 = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) finish();
      });
    });

    return () => {
      cancelAnimationFrame(raf0);
      cancelAnimationFrame(raf1);
      io.disconnect();
    };
  }, [visible]);

  return [ref, visible] as const;
}
