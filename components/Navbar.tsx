"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { profileData } from "@/lib/profile";
import { useIntroDone } from "@/components/Intro";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "AI Toolkit", href: "#ai" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const introDone = useIntroDone();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { scrollY } = useScroll();

  // hide when scrolling down, return when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 240);
  });

  useEffect(() => {
    setMounted(true);
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={introDone ? { y: hidden && !open ? -90 : 0, opacity: 1 } : { y: -90, opacity: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <a
            href="#top"
            aria-label={`${profileData.name} — back to top`}
            className="group flex h-11 items-center gap-2.5 rounded-full border border-line/10 bg-panel/70 pl-1.5 pr-4 backdrop-blur-xl"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-volt font-display text-xs font-extrabold tracking-tighter text-onvolt transition-transform duration-700 ease-expo group-hover:rotate-[360deg]">
              JS
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
              Jeya Surya<span className="text-glow">.</span>
            </span>
          </a>

          <div className="hidden h-11 items-center rounded-full border border-line/10 bg-panel/70 px-1.5 backdrop-blur-xl lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-[0.8125rem] font-medium transition-colors duration-300 ${
                    isActive ? "text-onvolt" : "text-muted hover:text-fg"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-volt"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle color theme"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line/10 bg-panel/70 text-fg backdrop-blur-xl transition-colors hover:border-glow/60 hover:text-glow"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mounted && (
                  <motion.span
                    key={isDark ? "sun" : "moon"}
                    initial={{ rotate: -90, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              className="hidden h-11 items-center gap-1.5 rounded-full bg-fg px-5 font-display text-sm font-semibold text-bg transition-colors duration-300 hover:bg-volt hover:text-onvolt sm:flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line/10 bg-panel/70 backdrop-blur-xl lg:hidden"
            >
              <span
                className={`absolute h-px w-4 bg-fg transition-transform duration-500 ease-expo ${
                  open ? "rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`absolute h-px w-4 bg-fg transition-transform duration-500 ease-expo ${
                  open ? "-rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 2.75rem) 2.4rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.75rem) 2.4rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.75rem) 2.4rem)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-volt px-6 pb-8 pt-28 text-onvolt lg:hidden"
          >
            <ul className="space-y-1">
              {navItems.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 + i * 0.06, ease: EASE }}
                    className="flex items-baseline gap-4 py-1 font-display text-[clamp(2.25rem,11vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em]"
                  >
                    <span className="label text-onvolt/60">0{i + 1}</span>
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-end justify-between gap-4 border-t border-onvolt/20 pt-5"
            >
              <a href={`mailto:${profileData.contact.email}`} className="font-serif text-xl italic">
                {profileData.contact.email}
              </a>
              <div className="label flex gap-4">
                {profileData.socials
                  .filter((s) => s.platform !== "email")
                  .map((s) => (
                    <a key={s.platform} href={s.href} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
