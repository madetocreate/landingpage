"use client";

import { useEffect, useState } from "react";

type AnimatedStatProps = {
  value: string;
  durationMs?: number;
};

type SplitValue = {
  prefix: string;
  numeric: number | null;
  suffix: string;
};

function splitValue(raw: string): SplitValue {
  const match = raw.match(/-?\d[\d.,]*/);
  if (!match || match.index === undefined) {
    return { prefix: "", numeric: null, suffix: raw };
  }

  const numericString = match[0].replace(/\./g, "").replace(",", ".");
  const numeric = Number.parseFloat(numericString);

  const start = match.index;
  const end = start + match[0].length;
  const prefix = raw.slice(0, start);
  const suffix = raw.slice(end);

  if (Number.isNaN(numeric)) {
    return { prefix: "", numeric: null, suffix: raw };
  }

  return { prefix, numeric, suffix };
}

export default function AnimatedStat({ value, durationMs = 1000 }: AnimatedStatProps) {
  const { prefix, numeric, suffix } = splitValue(value);
  const [display, setDisplay] = useState(() => {
    if (numeric == null) {
      return value;
    }
    return `${prefix}${numeric.toLocaleString("de-DE")}${suffix}`;
  });

  useEffect(() => {
    if (numeric == null) {
      setDisplay(value);
      return;
    }

    const start = 0;
    const end = numeric;
    const startTime = performance.now();
    let frame: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / durationMs);
      const current = start + (end - start) * t;

      const formatted = current.toLocaleString("de-DE", {
        maximumFractionDigits: 0,
      });

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (t < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [value, numeric, prefix, suffix, durationMs]);

  return <span>{display}</span>;
}
