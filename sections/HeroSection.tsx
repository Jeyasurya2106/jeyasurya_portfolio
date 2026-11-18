"use client";

import { motion } from "framer-motion";
import { Download, ArrowDownRight, MapPin, Sparkles } from "lucide-react";
import { profileData } from "@/lib/profile";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyanNeon/30 bg-cyanNeon/10 px-4 py-1.5 text-xs font-medium text-cyan-700 dark:text-cyanNeon"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{profileData.role}</span>
            <span className="text-slate-400">•</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {profileData.contact.location}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            {profileData.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
          >
            {profileData.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects" variant="primary">
              <span>View Work</span>
              <ArrowDownRight className="h-4 w-4" />
            </Button>

            <Button href="/resume.pdf" download="Jeya_Surya_M_Resume.pdf" variant="secondary">
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative flex h-72 w-72 sm:h-80 sm:w-80 items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-cyanNeon/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-5 rounded-full border border-purpleElectric/50"
            />
            <div className="relative z-10 flex h-48 w-48 flex-col items-center justify-center rounded-3xl border border-white/15 bg-gradient-to-br from-surface/90 to-obsidian/90 p-6 text-center shadow-[0_0_50px_rgba(0,240,255,0.2)] backdrop-blur-xl">
              <span className="font-display text-xs uppercase tracking-[0.25em] text-cyanNeon">
                STACK CORE
              </span>
              <span className="mt-2 font-display text-2xl font-bold text-white">
                MERN
              </span>
              <span className="mt-1 text-xs text-slate-400">
                MongoDB • Express • React • Node
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
