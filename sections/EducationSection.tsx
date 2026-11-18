"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { profileData } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function EducationSection() {
  return (
    <section id="education" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Education & Certifications"
          subtitle="Academic background and verified technical credentials."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {profileData.education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.45 }}
            >
              <Card className="h-full">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyanNeon/10 border border-cyanNeon/30 text-cyan-700 dark:text-cyanNeon">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <Badge variant="cyan">{edu.period}</Badge>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {edu.institution}
                </p>
              </Card>
            </motion.div>
          ))}

          {profileData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.15 + idx * 0.1, duration: 0.45 }}
            >
              <Card className="h-full">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purpleElectric/10 border border-purpleElectric/30 text-purple-600 dark:text-purple-300">
                    <Award className="h-5 w-5" />
                  </span>
                  <Badge variant="purple">{cert.year}</Badge>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {cert.issuer}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
