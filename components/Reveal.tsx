"use client";

import React from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

interface RevealWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  /** When set, drives the animation instead of scroll-into-view. */
  show?: boolean;
}

/** Each word slides up out of its own mask. */
export function RevealWords({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.06,
  show,
}: RevealWordsProps) {
  const words = text.split(" ");
  const controlled = show !== undefined;

  return (
    <motion.span
      aria-label={text}
      initial="hidden"
      {...(controlled
        ? { animate: show ? "visible" : "hidden" }
        : { whileInView: "visible", viewport: { once: true, amount: 0.4 } })}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      className={className}
    >
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          className="-mb-[0.18em] inline-block overflow-hidden pb-[0.18em] align-bottom"
        >
          <motion.span
            variants={{
              hidden: { y: "115%" },
              visible: { y: 0, transition: { duration: 0.9, ease: EASE } },
            }}
            className={`inline-block will-change-transform ${wordClassName}`}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  amount?: number;
}

/** Soft rise + fade when the block scrolls into view. */
export function FadeUp({ children, delay = 0, className = "", amount = 0.25 }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
