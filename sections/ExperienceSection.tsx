"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { profileData } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/Reveal";

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="experience" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="05"
          eyebrow="Experience"
          title="Where I've"
          accent="shipped."
          subtitle="Production roles delivering responsive applications and scalable APIs."
        />

        <div ref={timelineRef} className="relative">
          {/* rail + the line that draws itself as you scroll */}
          <div aria-hidden className="absolute bottom-0 left-[5px] top-0 w-px bg-line/10 lg:left-[33.333%]" />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute bottom-0 left-[5px] top-0 w-px origin-top bg-glow lg:left-[33.333%]"
          />

          <div className="space-y-16 sm:space-y-24">
            {profileData.experience.map((exp, idx) => (
              <article
                key={`${exp.company}-${exp.period}`}
                className="relative grid grid-cols-1 gap-6 pl-9 lg:grid-cols-3 lg:gap-0 lg:pl-0"
              >
                <motion.span
                  aria-hidden
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  className="absolute left-0 top-2 flex h-[11px] w-[11px] items-center justify-center rounded-full bg-glow ring-4 ring-bg lg:left-[33.333%] lg:-translate-x-[5px]"
                />

                <FadeUp className="lg:pr-12">
                  <div className="lg:sticky lg:top-28">
                    <Badge variant={idx === 0 ? "volt" : "outline"}>{exp.period}</Badge>
                    <p className="mt-4 font-serif text-3xl italic leading-tight">{exp.company}</p>
                    {idx === 0 && (
                      <p className="label mt-3 flex items-center gap-2 text-muted">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-glow" />
                        Current role
                      </p>
                    )}
                  </div>
                </FadeUp>

                <FadeUp delay={0.1} className="lg:col-span-2 lg:pl-14">
                  <h3 className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-none tracking-[-0.035em]">
                    {exp.role}
                  </h3>

                  <ul className="mt-7">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="group flex gap-5 border-t border-line/10 py-4 text-sm leading-relaxed text-muted transition-colors duration-300 hover:text-fg"
                      >
                        <span className="label pt-0.5 text-glow/70 transition-colors group-hover:text-glow">
                          {String(bIdx + 1).padStart(2, "0")}
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  )}
                </FadeUp>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
