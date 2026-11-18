"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <span className="inline-block rounded-full border border-cyanNeon/30 bg-cyanNeon/10 px-3.5 py-1 font-display text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyanNeon">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
