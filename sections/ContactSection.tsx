"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { profileData } from "@/lib/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}
Email: ${senderEmail}

Message:
${message}`
    );
    window.location.href = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="h-4 w-4" />;
      case "linkedin":
        return <Linkedin className="h-4 w-4" />;
      case "twitter":
        return <Twitter className="h-4 w-4" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Connect"
          title="Initiate Transmission"
          subtitle="Available for full-stack MERN engineering roles and software development collaborations."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-5 space-y-4"
          >
            <Card enableTilt={false}>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Direct Channels
              </h3>

              <div className="mt-5 space-y-4 text-sm">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-cyanNeon transition"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyanNeon/10 text-cyanNeon">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>{profileData.contact.email}</span>
                </a>

                <a
                  href={`tel:${profileData.contact.phone}`}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-cyanNeon transition"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyanNeon/10 text-cyanNeon">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>{profileData.contact.phone}</span>
                </a>

                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyanNeon/10 text-cyanNeon">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>{profileData.contact.location}</span>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 dark:border-white/10 pt-5">
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Social Profiles
                </span>
                <div className="flex flex-wrap gap-2">
                  {profileData.socials.map((soc) => (
                    <a
                      key={soc.platform}
                      href={soc.href}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-cyanNeon/50 hover:text-cyanNeon transition"
                    >
                      {getSocialIcon(soc.platform)}
                      <span>{soc.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-7"
          >
            <Card enableTilt={false}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-obsidian/80 px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:border-cyanNeon focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-obsidian/80 px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:border-cyanNeon focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-obsidian/80 px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:border-cyanNeon focus:outline-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  <Send className="h-4 w-4" />
                  <span>Send via Email Client</span>
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
