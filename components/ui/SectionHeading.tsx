"use client";

import { motion } from "framer-motion";
import { RevealWords } from "@/components/Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  /** Closing words of the title, set in italic serif. */
  accent?: string;
  subtitle?: string;
}

export function SectionHeading({ index, eyebrow, title, accent, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14 sm:mb-20">
      <div className="label flex items-center gap-4 text-muted">
        <span className="text-glow">({index})</span>
        <span>{eyebrow}</span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-px flex-1 origin-left bg-line/15"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
        <h2 className="font-display text-[clamp(2.25rem,6.2vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.035em] lg:col-span-8">
          <RevealWords text={title} />
          {accent && (
            <>
              {" "}
              <RevealWords
                text={accent}
                delay={0.18}
                wordClassName="font-serif font-normal italic tracking-[-0.01em] text-glow pr-[0.08em]"
              />
            </>
          )}
        </h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-sm text-sm leading-relaxed text-muted lg:col-span-4 lg:justify-self-end lg:pb-2"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
