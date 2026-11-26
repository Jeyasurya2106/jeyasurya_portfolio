"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { profileData } from "@/lib/profile";
import { Magnetic } from "@/components/Magnetic";

const footerNav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "AI Toolkit", href: "#ai" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function FooterSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const { email, phone, location } = profileData.contact;

  return (
    <footer ref={ref} className="overflow-hidden border-t border-line/10 px-4 pt-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12">
          {/* brand */}
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-volt font-display text-sm font-extrabold tracking-tighter text-onvolt">
                JS
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                Jeya Surya M<span className="text-glow">.</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {profileData.role} crafting fast, reliable web applications from {location}, India.
            </p>
            <span className="label mt-6 inline-flex items-center gap-2.5 rounded-full border border-line/10 px-4 py-2 text-muted">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-glow" />
              Available for work
            </span>
          </div>

          {/* navigate */}
          <nav aria-label="Footer" className="md:col-span-2">
            <p className="label text-muted">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-glow">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* connect */}
          <div className="md:col-span-2">
            <p className="label text-muted">Connect</p>
            <ul className="mt-5 space-y-3 text-sm">
              {profileData.socials
                .filter((soc) => soc.platform !== "email")
                .map((soc) => (
                  <li key={soc.platform}>
                    <a
                      href={soc.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 transition-colors hover:text-glow"
                    >
                      {soc.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-expo group-hover:rotate-45" />
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* contact */}
          <div className="col-span-2 md:col-span-3">
            <p className="label text-muted">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`mailto:${email}`} className="transition-colors hover:text-glow">
                  {email}
                </a>
              </li>
              <li>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="transition-colors hover:text-glow">
                  {phone}
                </a>
              </li>
              <li className="text-muted">{location}, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-line/10 pt-6 sm:flex-row sm:items-center">
          <p className="label text-muted">
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>

          <Magnetic>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              data-cursor="Top"
              className="label flex items-center gap-3 text-muted transition-colors hover:text-fg"
            >
              Back to top
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-volt text-onvolt transition-transform duration-500 ease-expo hover:-translate-y-1">
                <ArrowUp className="h-4 w-4" />
              </span>
            </button>
          </Magnetic>
        </div>
      </div>

      {/* oversized wordmark that slides into place as the page ends */}
      <motion.p
        aria-hidden
        style={{ y }}
        className="pointer-events-none mt-6 select-none whitespace-nowrap bg-gradient-to-b from-fg from-30% to-fg/25 bg-clip-text pb-[0.1em] text-center font-display text-[16vw] font-semibold leading-[0.85] tracking-[-0.06em] text-transparent"
      >
        Jeya Surya
      </motion.p>
    </footer>
  );
}
