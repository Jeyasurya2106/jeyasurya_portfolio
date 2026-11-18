import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "purple" | "neutral";
}

export function Badge({ children, variant = "cyan" }: BadgeProps) {
  const styles = {
    cyan: "border-cyanNeon/30 bg-cyanNeon/10 text-cyan-700 dark:text-cyanNeon",
    purple: "border-purpleElectric/30 bg-purpleElectric/10 text-purple-700 dark:text-purple-300",
    neutral: "border-slate-300 dark:border-white/15 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-transform hover:scale-105 ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
