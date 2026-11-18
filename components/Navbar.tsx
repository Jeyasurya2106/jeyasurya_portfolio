"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/lib/profile";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const item of navItems) {
        const el = document.querySelector(item.href) as HTMLElement | null;
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-40 px-4">
      <nav className="mx-auto max-w-5xl rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/75 dark:bg-surface/75 backdrop-blur-xl px-5 py-3 shadow-lg shadow-black/10 dark:shadow-cyanNeon/5">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-display text-lg font-bold tracking-wider text-slate-900 dark:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyanNeon to-purpleElectric text-obsidian">
              <Terminal className="h-4 w-4" />
            </span>
            <span>Jeya</span>
            <span className="text-cyan-700 dark:text-cyanNeon">Surya</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group relative py-1 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cyanNeon drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]"
                      : "text-slate-600 dark:text-slate-300 hover:text-cyanNeon"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyanNeon to-purpleElectric transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            {mounted && (
              <button
                type="button"
                aria-label="Toggle color theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-cyanNeon hover:border-cyanNeon/50 transition"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}

            <button
              type="button"
              aria-label="Toggle Menu"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-slate-200"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 dark:border-white/10 pt-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-cyanNeon/10 hover:text-cyanNeon"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
