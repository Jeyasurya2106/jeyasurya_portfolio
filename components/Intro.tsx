"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

const IntroContext = createContext(false);

/** True once the preloader curtain has started lifting. */
export const useIntroDone = () => useContext(IntroContext);

const SESSION_KEY = "js-intro-seen";

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage unavailable — just play the intro */
    }

    if (reduced || seen) {
      setInstant(true);
      setDone(true);
      return;
    }

    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out so the counter rushes then settles
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else window.setTimeout(() => setDone(true), 220);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = done ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [done]);

  return (
    <IntroContext.Provider value={done}>
      <AnimatePresence>
        {!done && (
          <motion.div
            key="preloader"
            data-preloader
            exit={instant ? { opacity: 0, transition: { duration: 0 } } : { y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-volt p-6 text-onvolt sm:p-10"
          >
            <div className="label flex items-center justify-between">
              <span>Jeya Surya M</span>
              <span>Portfolio — 2026</span>
            </div>

            <div className="flex items-end justify-between gap-6">
              <p className="max-w-[14rem] font-serif text-2xl italic leading-tight sm:text-3xl">
                Building the web, one clean component at a time.
              </p>
              <span
                aria-hidden
                className="font-display text-[26vw] font-extrabold leading-[0.8] tracking-tighter tabular-nums sm:text-[18vw]"
              >
                {String(count).padStart(3, "0")}
              </span>
            </div>

            <div className="h-px w-full bg-onvolt/20">
              <div
                className="h-full origin-left bg-onvolt"
                style={{ transform: `scaleX(${count / 100})` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* honour the OS "reduce motion" setting for every animation below */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </IntroContext.Provider>
  );
}
