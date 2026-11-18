"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { profileData } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Builds"
          title="Featured Projects"
          subtitle="Full-stack enterprise platforms built with React, Node.js, TypeScript, and modern databases."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {profileData.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <Card className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyanNeon/10 border border-cyanNeon/30 text-cyan-700 dark:text-cyanNeon">
                      <Layers className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.responsibilities.map((item, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purpleElectric" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 dark:border-white/10 pt-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="cyan">
                      {tech}
                    </Badge>
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
