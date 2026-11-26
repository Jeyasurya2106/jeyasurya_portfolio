"use client";

import { GraduationCap, Award } from "lucide-react";
import { profileData } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/Reveal";

export function EducationSection() {
  const rows = [
    ...profileData.education.map((edu) => ({
      kind: "Education",
      icon: GraduationCap,
      title: edu.degree,
      place: edu.institution,
      when: edu.period,
    })),
    ...profileData.certifications.map((cert) => ({
      kind: "Certification",
      icon: Award,
      title: cert.title,
      place: cert.issuer,
      when: cert.year,
    })),
  ];

  return (
    <section id="education" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="07"
          eyebrow="Credentials"
          title="Education &"
          accent="certification."
        />

        <div className="border-b border-line/15">
          {rows.map((row, i) => (
            <FadeUp key={row.title} delay={i * 0.08}>
              <div className="group grid grid-cols-1 items-center gap-3 border-t border-line/15 py-8 transition-[padding] duration-500 ease-expo hover:px-4 md:grid-cols-12 md:gap-8">
                <span className="label flex items-center gap-3 text-muted md:col-span-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line/15 text-fg transition-colors duration-500 group-hover:border-volt group-hover:bg-volt group-hover:text-onvolt">
                    <row.icon className="h-4 w-4" />
                  </span>
                  {row.kind}
                </span>
                <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em] md:col-span-5">
                  {row.title}
                </h3>
                <p className="font-serif text-xl italic text-muted md:col-span-3">{row.place}</p>
                <span className="label text-glow md:col-span-1 md:text-right">{row.when}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
