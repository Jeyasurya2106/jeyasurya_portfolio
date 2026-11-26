import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "outline" | "volt" | "ember";
}

export function Badge({ children, variant = "outline" }: BadgeProps) {
  const styles = {
    outline: "border-line/15 text-muted hover:border-glow/60 hover:text-glow",
    volt: "border-glow/40 bg-glow/10 text-glow",
    ember: "border-ember/40 bg-ember/10 text-ember",
  };

  return (
    <span
      className={`label inline-flex items-center rounded-full border px-3 py-1.5 text-[0.625rem] transition-colors duration-300 ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
