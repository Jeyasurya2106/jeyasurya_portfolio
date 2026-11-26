"use client";

import { motion } from "framer-motion";
import { profileData } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { FadeUp } from "@/components/Reveal";

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="The stack I"
          accent="reach for."
          subtitle="Frameworks, runtimes, databases, testing, cloud and DevOps tools I use in production."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {profileData.skills.map((group, groupIdx) => (
            <FadeUp key={group.category} delay={groupIdx * 0.1} className="h-full">
              <SpotlightCard className="h-full p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.03em]">
                    {group.category}
                  </h3>
                  <span className="label shrink-0 pt-1.5 text-glow">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-8 space-y-5">
                  {group.items.map((skill, idx) => (
                    <li key={skill.name}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="label text-muted">{skill.proficiency}</span>
                      </div>
                      <div className="mt-2.5 h-px w-full bg-line/10">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: skill.proficiency / 100 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.2 + idx * 0.07,
                            duration: 1.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="h-[2px] w-full origin-left -translate-y-px bg-glow"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
