"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { profileData } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/Counter";
import { FadeUp } from "@/components/Reveal";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.26em] inline-block">
      {children}
    </motion.span>
  );
}

/** The statement lights up word by word as it travels up the viewport. */
function ScrollStatement({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className="font-display text-[clamp(1.75rem,3.9vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.03em]"
    >
      {words.map((word, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </p>
  );
}

export function AboutSection() {
  const current = profileData.experience[0];
  const facts = [
    { label: "Based in", value: `${profileData.contact.location}, India` },
    { label: "Currently", value: `${current.role} · ${current.company}` },
    { label: "Email", value: profileData.contact.email, href: `mailto:${profileData.contact.email}` },
    { label: "Phone", value: profileData.contact.phone, href: `tel:${profileData.contact.phone.replace(/\s/g, "")}` },
  ];

  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Engineering web systems"
          accent="that scale."
          subtitle="Clean component-based architecture, high-performance interfaces and full-stack reliability."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ScrollStatement text={profileData.statement} />
          </div>

          <FadeUp className="lg:col-span-5">
            <p className="text-base leading-relaxed text-muted">{profileData.summary}</p>

            <dl className="mt-8">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-6 border-t border-line/10 py-3.5 last:border-b"
                >
                  <dt className="label shrink-0 text-muted">{fact.label}</dt>
                  <dd className="text-right text-sm font-medium">
                    {fact.href ? (
                      <a href={fact.href} className="transition-colors hover:text-glow">
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {profileData.stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.08} className="border-t border-line/15 pt-5">
              <span className="block font-display text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.05em]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="label mt-3 block text-muted">{stat.label}</span>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
