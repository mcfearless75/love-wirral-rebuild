"use client";

import { useEffect, useState } from "react";

// DEMO VALUE — set to the real August 2026 copy deadline before go-live
const DEADLINE = new Date("2026-07-20T17:00:00+01:00");

function diff() {
  const ms = Math.max(0, DEADLINE.getTime() - Date.now());
  return {
    d: Math.floor(ms / 86400000),
    h: Math.floor(ms / 3600000) % 24,
    m: Math.floor(ms / 60000) % 60,
    s: Math.floor(ms / 1000) % 60,
  };
}

export default function Countdown() {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const cells: [number | string, string][] = t
    ? [
        [t.d, "days"],
        [t.h, "hrs"],
        [t.m, "min"],
        [t.s, "sec"],
      ]
    : [
        ["–", "days"],
        ["–", "hrs"],
        ["–", "min"],
        ["–", "sec"],
      ];

  return (
    <div className="flex items-center gap-3" role="timer" aria-label="Time until the copy deadline">
      {cells.map(([v, l]) => (
        <div key={l} className="text-center">
          <div className="font-[family-name:var(--font-mono)] text-2xl md:text-3xl font-medium tabular-nums text-white leading-none">
            {typeof v === "number" ? String(v).padStart(2, "0") : v}
          </div>
          <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-white/60 mt-1.5">
            {l}
          </div>
        </div>
      ))}
    </div>
  );
}
