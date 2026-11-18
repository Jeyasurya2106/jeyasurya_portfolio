"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { profileData } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          subtitle="Production engineering roles delivering responsive applications and scalable APIs."
        />

        <div className="relative border-l-2 border-cyanNeon/30 pl-6 sm:pl-10 space-y-10 ml-3">
          {profileData.experience.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative"
            >
              <span className="absolute -left-[35px] sm:-left-[51px] top-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-cyanNeon bg-obsidian shadow-[0_0_12px_rgba(0,240,255,0.8)]">
                <span className="h-2 w-2 rounded-full bg-cyanNeon" />
              </span>

              <Card>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-700 dark:text-cyanNeon font-semibold text-sm">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <Badge variant="purple">{exp.period}</Badge>
                </div>

                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanNeon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-200 dark:border-white/10 pt-3">
                    {exp.techStack.map((tech) => (
                      <Badge key={tech} variant="cyan">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
