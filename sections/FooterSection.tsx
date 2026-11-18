"use client";

import { ArrowUp } from "lucide-react";
import { profileData } from "@/lib/profile";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white/60 dark:bg-obsidian/80 backdrop-blur-md px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 rounded-xl border border-cyanNeon/30 bg-cyanNeon/10 px-4 py-2 text-xs font-semibold text-cyan-700 dark:text-cyanNeon hover:bg-cyanNeon/20 transition"
        >
          <span>Back to Top</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
}
