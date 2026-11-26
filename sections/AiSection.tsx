"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { profileData } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { FadeUp } from "@/components/Reveal";

type Line = { kind: "cmd" | "out" | "ok"; text: string };

// An illustrative agent session, typed out when the terminal scrolls into view.
const SCRIPT: Line[] = [
  { kind: "cmd", text: 'claude "add a JWT guard to the rides module, with tests"' },
  { kind: "out", text: "Reading rides.controller.ts, auth.guard.ts" },
  { kind: "out", text: "Editing 3 files   +84 −12" },
  { kind: "out", text: "Running vitest … 24 passed" },
  { kind: "ok", text: "Diff ready. Reviewed by a human before merge." },
];

function Terminal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLine(SCRIPT.length);
      return;
    }

    const current = SCRIPT[line];
    let timer: number;
    if (!current) {
      // finished — hold, then replay
      timer = window.setTimeout(() => {
        setLine(0);
        setChars(0);
      }, 4500);
    } else if (current.kind === "cmd" && chars < current.text.length) {
      timer = window.setTimeout(() => setChars((c) => c + 1), 22 + Math.random() * 38);
    } else {
      timer = window.setTimeout(
        () => {
          setLine((l) => l + 1);
          setChars(0);
        },
        current.kind === "cmd" ? 520 : 680,
      );
    }
    return () => window.clearTimeout(timer);
  }, [inView, line, chars]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d100b] font-mono text-[0.8125rem] leading-relaxed text-[#edeae0] shadow-2xl shadow-black/30"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6e40]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d4ff3e]" />
        <span className="ml-3 text-xs text-white/40">~/projects/taxi-booking</span>
      </div>

      <div className="min-h-[15.5rem] space-y-2.5 p-5 sm:p-6">
        {SCRIPT.map((entry, i) => {
          if (i > line) return null;
          const isCurrent = i === line;
          if (entry.kind === "cmd") {
            return (
              <p key={i} className="break-words">
                <span className="text-[#d4ff3e]">❯ </span>
                {isCurrent ? entry.text.slice(0, chars) : entry.text}
                {isCurrent && (
                  <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-[#d4ff3e]" />
                )}
              </p>
            );
          }
          if (isCurrent) return null;
          return entry.kind === "ok" ? (
            <p key={i} className="text-[#d4ff3e]">
              ✓ {entry.text}
            </p>
          ) : (
            <p key={i} className="text-white/55">
              <span className="text-[#ff6e40]">●</span> {entry.text}
            </p>
          );
        })}
        {line >= SCRIPT.length && (
          <p>
            <span className="text-[#d4ff3e]">❯ </span>
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-[#d4ff3e]" />
          </p>
        )}
      </div>
    </div>
  );
}

export function AiSection() {
  return (
    <section id="ai" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          eyebrow="AI Toolkit"
          title="AI-augmented"
          accent="engineering."
          subtitle="The assistants I pair with every day — and the rules I keep so the code stays mine."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <FadeUp className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Terminal />
              <ul className="mt-5 space-y-px overflow-hidden rounded-3xl border border-line/10">
                {profileData.aiPrinciples.map((rule, i) => (
                  <li key={rule.title} className="flex gap-5 bg-panel/70 p-5 backdrop-blur-sm">
                    <span className="label pt-1 text-glow">0{i + 1}</span>
                    <div>
                      <h4 className="font-display text-base font-semibold tracking-tight">
                        {rule.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{rule.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {profileData.aiTools.map((tool, i) => (
              <FadeUp key={tool.name} delay={(i % 2) * 0.1} className="h-full">
                <SpotlightCard className="group flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line/15 font-display text-xl font-bold tracking-tighter transition-all duration-500 ease-expo group-hover:-rotate-6 group-hover:border-volt group-hover:bg-volt group-hover:text-onvolt">
                      {tool.mark}
                    </span>
                    <span className="label text-[0.625rem] text-muted">{tool.kind}</span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.03em]">
                    {tool.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{tool.usage}</p>
                </SpotlightCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
