"use client";

import React from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

/** Panel with a soft light that tracks the pointer (see `.spotlight` in globals.css). */
export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onPointerMove={onMove}
      className={`spotlight relative overflow-hidden rounded-3xl border border-line/10 bg-panel/70 backdrop-blur-sm transition-colors duration-500 hover:border-glow/40 ${className}`}
    >
      {children}
    </div>
  );
}
