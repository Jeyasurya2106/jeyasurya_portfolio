"use client";

import React from "react";
import { Magnetic } from "@/components/Magnetic";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean | string;
  magnetic?: boolean;
  children: React.ReactNode;
}

/**
 * Pill button. On hover a disc of the opposite colour rises from below
 * and the label swaps colour with it.
 */
export function Button({
  variant = "primary",
  href,
  download,
  magnetic = true,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-4 font-display text-sm font-semibold tracking-tight transition-colors duration-500";

  const variants = {
    primary: "bg-volt text-onvolt hover:text-bg",
    secondary: "border border-line/20 text-fg hover:border-volt hover:text-onvolt",
  };

  const fill = variant === "primary" ? "bg-fg" : "bg-volt";

  const inner = (
    <>
      <span
        aria-hidden
        className={`absolute inset-x-0 bottom-0 h-[220%] translate-y-full rounded-[50%] transition-transform duration-700 ease-expo group-hover:translate-y-1/4 ${fill}`}
      />
      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
    </>
  );

  const cls = `${base} ${variants[variant]} ${className}`;

  const el = href ? (
    <a href={href} download={download} className={cls}>
      {inner}
    </a>
  ) : (
    <button className={cls} {...props}>
      {inner}
    </button>
  );

  if (!magnetic) return el;
  return (
    <Magnetic strength={0.25} className={className.includes("w-full") ? "w-full" : ""}>
      {el}
    </Magnetic>
  );
}
