"use client";

import { ArrowUpRight } from "lucide-react";
import { profileData } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/Reveal";

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          eyebrow="What I do"
          title="From first pixel"
          accent="to final query."
          subtitle="Five things I do well, and usually do together on the same product."
        />

        <ul className="border-b border-line/15">
          {profileData.services.map((service, i) => (
            <li key={service.title}>
              <FadeUp
                delay={i * 0.06}
                amount={0.4}
                className="group relative overflow-hidden border-t border-line/15"
              >
                {/* volt panel that rises on hover */}
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-volt transition-transform duration-500 ease-expo group-hover:scale-y-100"
                />
                <div className="relative grid grid-cols-1 gap-4 px-1 py-8 transition-[padding,color] duration-500 ease-expo group-hover:px-5 group-hover:text-onvolt md:grid-cols-12 md:items-center md:gap-8 md:py-10">
                  <span className="label text-muted transition-colors duration-500 group-hover:text-onvolt/70 md:col-span-1">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-[clamp(1.75rem,3.6vw,3rem)] font-semibold leading-none tracking-[-0.035em] md:col-span-5">
                    {service.title}
                  </h3>
                  <div className="md:col-span-5">
                    <p className="text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-onvolt/80">
                      {service.description}
                    </p>
                    <p className="label mt-3 text-[0.625rem] text-muted transition-colors duration-500 group-hover:text-onvolt/70">
                      {service.tags.join("  /  ")}
                    </p>
                  </div>
                  <ArrowUpRight className="hidden h-7 w-7 -translate-x-3 justify-self-end opacity-0 transition-all duration-500 ease-expo group-hover:translate-x-0 group-hover:opacity-100 md:col-span-1 md:block" />
                </div>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
