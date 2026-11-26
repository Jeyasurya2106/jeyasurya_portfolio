"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Send } from "lucide-react";
import { profileData } from "@/lib/profile";
import { Button } from "@/components/ui/Button";
import { FadeUp, RevealWords } from "@/components/Reveal";

const fieldClass =
  "peer w-full border-0 border-b border-line/20 bg-transparent px-0 pb-3 pt-6 text-base text-fg placeholder-transparent transition-colors duration-300 focus:border-glow focus:outline-none focus:ring-0";
const floatingLabel =
  "label pointer-events-none absolute left-0 top-0 text-muted transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:text-[0.6875rem] peer-focus:uppercase peer-focus:tracking-[0.16em] peer-focus:text-glow";

export function ContactSection() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const { email, phone, location } = profileData.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="label flex items-center gap-4 text-muted">
          <span className="text-glow">(08)</span>
          <span>Contact</span>
          <span className="h-px flex-1 bg-line/15" />
        </div>

        <h2 className="mt-10 font-display text-[clamp(3rem,11.5vw,10.5rem)] font-bold leading-[0.88] tracking-[-0.055em]">
          <RevealWords text="Let's build" className="block" />
          <span className="block">
            <RevealWords text="something" delay={0.12} />{" "}
            <RevealWords
              text="great."
              delay={0.24}
              wordClassName="font-serif font-normal italic tracking-[-0.02em] text-glow pr-[0.08em]"
            />
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <FadeUp className="lg:col-span-6">
            <p className="max-w-md text-base leading-relaxed text-muted">
              Available for full-stack MERN engineering roles and software development
              collaborations. The fastest way to reach me is email.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}`}
                data-cursor="Email"
                className="group relative font-display text-[clamp(1.25rem,3vw,2.25rem)] font-semibold tracking-[-0.03em]"
              >
                {email}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-right scale-x-0 bg-glow transition-transform duration-500 ease-expo group-hover:origin-left group-hover:scale-x-100" />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="flex h-10 items-center gap-2 rounded-full border border-line/15 px-4 text-muted transition-colors hover:border-glow/60 hover:text-glow"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "done" : "copy"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="label flex items-center gap-2 text-[0.625rem]"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? "Copied" : "Copy"}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-line/10 pt-8">
              <div>
                <dt className="label text-muted">Phone</dt>
                <dd className="mt-2 text-sm font-medium">
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-glow">
                    {phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-muted">Location</dt>
                <dd className="mt-2 text-sm font-medium">{location}, India</dd>
              </div>
            </dl>

            <ul className="mt-8 flex flex-wrap gap-2">
              {profileData.socials
                .filter((soc) => soc.platform !== "email")
                .map((soc) => (
                  <li key={soc.platform}>
                    <a
                      href={soc.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 rounded-full border border-line/15 py-2.5 pl-5 pr-4 text-sm font-medium transition-colors duration-300 hover:border-volt hover:bg-volt hover:text-onvolt"
                    >
                      {soc.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:rotate-45" />
                    </a>
                  </li>
                ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="space-y-7 rounded-[2rem] border border-line/10 bg-panel/70 p-7 backdrop-blur-sm sm:p-10"
            >
              <p className="label text-muted">Or write it here</p>

              <div className="relative">
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={fieldClass}
                />
                <label htmlFor="contact-name" className={floatingLabel}>
                  Your name
                </label>
              </div>

              <div className="relative">
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="Your email"
                  className={fieldClass}
                />
                <label htmlFor="contact-email" className={floatingLabel}>
                  Your email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the project"
                  className={`${fieldClass} resize-none`}
                />
                <label htmlFor="contact-message" className={floatingLabel}>
                  Tell me about the project
                </label>
              </div>

              <Button type="submit" variant="primary" className="w-full">
                <span>Send via email client</span>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
