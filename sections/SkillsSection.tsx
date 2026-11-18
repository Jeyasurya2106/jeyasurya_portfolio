"use client";

import { motion } from "framer-motion";
import { profileData } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical Arsenal"
          subtitle="Full-stack technologies, frameworks, databases, and testing suites."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {profileData.skills.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: groupIdx * 0.12, duration: 0.5 }}
            >
              <Card className="h-full">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-3">
                  {group.category}
                </h3>

                <div className="mt-5 space-y-4">
                  {group.items.map((skill, idx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs font-medium mb-1.5">
                        <span className="text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-cyan-700 dark:text-cyanNeon">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.15 + idx * 0.06,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-cyanNeon to-purpleElectric shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
