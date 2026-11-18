"use client";

import React, { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean | string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  href,
  download,
  children,
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const triggerRipple = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3 font-display text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyanNeon/60";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyanNeon to-purpleElectric text-obsidian shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_32px_rgba(0,240,255,0.65)] hover:-translate-y-0.5",
    secondary:
      "border border-cyanNeon/40 bg-white/70 dark:bg-white/5 text-slate-900 dark:text-white backdrop-blur-md hover:border-cyanNeon hover:bg-cyanNeon/10 hover:shadow-[0_0_24px_rgba(0,240,255,0.25)] hover:-translate-y-0.5",
  };

  const shimmer = (
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
  );

  const rippleElements = ripples.map((r) => (
    <span
      key={r.id}
      style={{ left: r.x, top: r.y }}
      className="pointer-events-none absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 animate-ripple"
    />
  ));

  if (href) {
    return (
      <a
        href={href}
        download={download}
        onClick={(e) => {
          triggerRipple(e);
        }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {shimmer}
        {rippleElements}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button
      onClick={(e) => {
        triggerRipple(e);
        onClick?.(e);
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {shimmer}
      {rippleElements}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
