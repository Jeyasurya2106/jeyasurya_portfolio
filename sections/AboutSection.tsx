"use client";

import { motion } from "framer-motion";
import { profileData } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Profile"
          title="Engineering Scalable Web Systems"
          subtitle="Focused on clean component-based architecture, high-performance interfaces, and full-stack reliability."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Card className="h-full flex flex-col justify-center">
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
                {profileData.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-6 border-t border-slate-200 dark:border-white/10 pt-5 text-sm">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Location
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {profileData.contact.location}
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Email
                  </span>
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="font-semibold text-cyan-700 dark:text-cyanNeon hover:underline"
                  >
                    {profileData.contact.email}
                  </a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Phone
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {profileData.contact.phone}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {profileData.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
              >
                <Card className="flex h-full flex-col items-center justify-center text-center py-8">
                  <span className="font-display text-3xl font-extrabold bg-gradient-to-r from-cyanNeon to-purpleElectric bg-clip-text text-transparent sm:text-4xl">
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <span className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
