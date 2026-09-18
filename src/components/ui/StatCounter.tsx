'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCounterProps {
  /** final value, e.g. 5000 */
  value: number;
  /** rendered after the number, e.g. "+" or "%" */
  suffix?: string;
  prefix?: string;
  className?: string;
  /** animation duration in milliseconds */
  duration?: number;
}

/**
 * Counts up from 0 to `value` when scrolled into view.
 * Uses requestAnimationFrame — no Framer Motion animate() calls
 * so there are no SSR / minification issues in Next.js 15.
 */
export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  className,
  duration = 2000,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let rafId: number;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}
