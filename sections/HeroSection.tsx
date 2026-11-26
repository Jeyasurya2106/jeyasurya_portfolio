"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowDownRight, Download } from "lucide-react";
import { profileData } from "@/lib/profile";
import { Button } from "@/components/ui/Button";
import { useIntroDone } from "@/components/Intro";

const EASE = [0.16, 1, 0.3, 1] as const;

/** One line of the name: letters rise out of a shared mask, one after another. */
function NameLine({
  text,
  show,
  delay,
  className,
}: {
  text: string;
  show: boolean;
  delay: number;
  className: string;
}) {
  return (
    <span aria-hidden className={`block overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", rotate: 6 }}
          animate={show ? { y: 0, rotate: 0 } : { y: "110%", rotate: 6 }}
          transition={{ duration: 1.1, delay: delay + i * 0.045, ease: EASE }}
          className="inline-block origin-bottom-left will-change-transform"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date());
    setTime(format());
    const id = window.setInterval(() => setTime(format()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time || "--:--:--"} IST</span>;
}

function RotatingFocus() {
  const [index, setIndex] = useState(0);
  const words = profileData.focus;

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => window.clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-flex h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="inline-block whitespace-nowrap font-serif italic text-glow"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function HeroSection() {
  const ready = useIntroDone();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col px-4 pb-6 pt-28 sm:px-6 sm:pt-32"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between gap-10">
        <motion.div
          {...rise(0.1)}
          className="label flex flex-wrap items-center justify-between gap-3 text-muted"
        >
          <span className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-glow opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-glow" />
            </span>
            Open to new opportunities
          </span>
          <span>
            {profileData.contact.location}, IN — <LocalTime />
          </span>
        </motion.div>

        <motion.h1
          aria-label={profileData.name}
          style={{ y: nameY, scale: nameScale, opacity: fade }}
          className="origin-left select-none"
        >
          <NameLine
            text="Jeya Surya"
            show={ready}
            delay={0.05}
            className="pb-[0.04em] font-display text-[clamp(2.75rem,min(9vw,17vh),8.25rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
          />
          <span className="flex items-end justify-between gap-8">
            <NameLine
              text="MERN Developer"
              show={ready}
              delay={0.3}
              className="pb-[0.04em] font-display text-[clamp(2.75rem,min(9vw,17vh),8.25rem)] font-semibold leading-[0.95] tracking-[-0.055em] whitespace-nowrap text-fg/25"
            />
            <motion.span
              {...rise(0.75)}
              className="label mb-[0.9em] hidden max-w-[12rem] shrink-0 text-right leading-relaxed text-muted lg:block"
            >
              <span className="text-glow">●</span> 2.6+ yrs building React & Node products
            </motion.span>
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 items-end gap-8 border-t border-line/10 pt-6 md:grid-cols-12">
          <motion.p
            {...rise(0.85)}
            className="font-display text-xl font-medium leading-snug tracking-tight sm:text-2xl md:col-span-4"
          >
            {profileData.role} building <br className="hidden sm:block" />
            <RotatingFocus />
          </motion.p>

          <motion.p
            {...rise(0.95)}
            className="max-w-sm text-sm leading-relaxed text-muted md:col-span-4"
          >
            {profileData.tagline}
          </motion.p>

          <motion.div
            {...rise(1.05)}
            className="flex flex-wrap items-center gap-3 md:col-span-4 md:justify-end"
          >
            <Button href="#projects" variant="primary">
              <span>View work</span>
              <ArrowDownRight className="h-4 w-4" />
            </Button>
            <Button
              href="/Jeyasurya_fullstack_resume.pdf"
              download="Jeya_Surya_M_Resume.pdf"
              variant="secondary"
            >
              <Download className="h-4 w-4" />
              <span>Résumé</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* spinning "scroll" seal */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        data-cursor="Scroll"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 1, delay: 1.1, ease: EASE }}
        className="absolute right-[7%] top-[19%] hidden h-28 w-28 items-center justify-center lg:flex xl:h-36 xl:w-36"
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
          <defs>
            <path id="seal" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text className="fill-fg font-mono text-[8.2px] uppercase tracking-[0.22em]">
            <textPath href="#seal" textLength="232">React · Node · TypeScript · MERN ·</textPath>
          </text>
        </svg>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-volt text-onvolt">
          <ArrowDown className="h-4 w-4" />
        </span>
      </motion.a>
    </section>
  );
}
