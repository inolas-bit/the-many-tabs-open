"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Sticker } from "./Sticker";
import { Tape } from "./Tape";
import { playTabClickSound, playPopSound } from "@/lib/sound-effects";
import {
  Mail,
  Send,
  Check,
  Copy,
  Terminal,
  ExternalLink,
  Sparkles,
} from "lucide-react";

function LinkedInIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tabTitle: "",
    message: "",
  });

  const emailAddress = "Salonisinghoffical2026@gmail.com";

  const handleCopyEmail = () => {
    playPopSound();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTabClickSound();

    // Trigger confetti explosion
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D7FF00", "#FF5A36", "#3457FF", "#FF4D9D", "#151515"],
      });
    } catch {
      // safe fallback if confetti fails
    }

    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-warm-white bg-grid-pattern border-b-2 border-scrap-black overflow-hidden"
    >
      {/* Decorative Washi Tapes */}
      <div className="absolute top-8 right-12 hidden md:block">
        <Tape color="lime" angle={6} width="w-40" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-electric-blue">
              <span>TAB [05]</span>
              <span>//</span>
              <span>SEND A PACKET TO MY INBOX</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-scrap-black uppercase tracking-tight">
              GET IN TOUCH
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-600 uppercase tracking-widest mt-1">
              HAVE AN IDEA? WANT TO COLLABORATE? OR JUST WANT TO TALK TECH, DANCE & DATA?
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Sticker
              variant="starburst"
              text="OPEN TO WORK"
              subtext="LET'S TALK"
              rotate={-6}
            />
          </div>
        </div>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Social Links & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/saloni-singh1329/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.01 }}
              onClick={playTabClickSound}
              className="block p-5 bg-white scrap-border-3 scrap-shadow hover:bg-[#F8F9FF] transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-electric-blue text-white scrap-border">
                  <LinkedInIcon className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-neutral-100 scrap-border text-neutral-700 flex items-center gap-1 group-hover:bg-electric-blue group-hover:text-white transition-colors">
                  <span>CONNECT</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
              <h3 className="text-xl font-black text-scrap-black group-hover:text-electric-blue transition-colors">
                LinkedIn Profile
              </h3>
              <p className="font-mono text-xs text-neutral-600 mt-1">
                linkedin.com/in/saloni-singh1329
              </p>
              <div className="mt-3 pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Professional Network</span>
                <span className="text-electric-blue font-bold">VIEW RESUME & POSTS →</span>
              </div>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              href="https://github.com/inolas-bit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.01 }}
              onClick={playTabClickSound}
              className="block p-5 bg-white scrap-border-3 scrap-shadow hover:bg-[#FFFDF8] transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-scrap-black text-acid-lime scrap-border">
                  <GitHubIcon className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-black px-2 py-0.5 bg-neutral-100 scrap-border text-neutral-700 flex items-center gap-1 group-hover:bg-scrap-black group-hover:text-acid-lime transition-colors">
                  <span>REPOSITORIES</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
              <h3 className="text-xl font-black text-scrap-black group-hover:text-orange-pop transition-colors">
                GitHub Repositories
              </h3>
              <p className="font-mono text-xs text-neutral-600 mt-1">
                github.com/inolas-bit
              </p>
              <div className="mt-3 pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Open Source Code</span>
                <span className="text-scrap-black font-bold">EXPLORE COMMITS →</span>
              </div>
            </motion.a>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-5 bg-acid-lime scrap-border-3 scrap-shadow relative">
              <Tape color="pink" angle={-3} width="w-24" className="absolute -top-3 right-6 z-20" />
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 bg-scrap-black text-acid-lime scrap-border">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-white text-scrap-black scrap-border">
                  DIRECT TRANSMISSION
                </span>
              </div>

              <h3 className="text-xl font-black text-scrap-black">
                Email Dispatch
              </h3>
              <p className="font-mono text-xs text-neutral-800 font-semibold mt-1 break-all">
                {emailAddress}
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 bg-scrap-black text-warm-white font-mono text-xs font-bold scrap-border hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-acid-lime" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "COPIED TO CLIPBOARD!" : "COPY EMAIL"}</span>
                </button>

                <a
                  href={`mailto:${emailAddress}?subject=Opening%20a%20New%20Tab%20with%20Saloni`}
                  className="py-2 px-3 bg-white text-scrap-black font-mono text-xs font-bold scrap-border hover:bg-neutral-100 transition-colors flex items-center justify-center"
                >
                  OPEN CLIENT
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: "Send a Tab to My Brain" Interactive Postcard (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white scrap-border-3 scrap-shadow-xl p-6 sm:p-8 relative">
              <Tape
                color="yellow"
                angle={2}
                width="w-36"
                className="absolute -top-3 left-10 z-20"
              />

              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-scrap-black mb-6 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-hot-pink" />
                  <span className="font-black text-scrap-black">
                    SEND_TAB_TO_BRAIN.EXE
                  </span>
                </div>
                <span className="text-neutral-500 hidden sm:inline">
                  PROTOCOL: HUMAN_TO_HUMAN
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center bg-acid-lime scrap-border space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-scrap-black text-acid-lime flex items-center justify-center scrap-border">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-scrap-black uppercase">
                    TAB SUCCESSFULLY SPAWNED!
                  </h3>
                  <p className="text-sm font-mono text-neutral-800 font-bold max-w-md mx-auto">
                    Thank you, {formData.name || "friend"}! Your message has been pinned to the top of Saloni’s mental browser tab stack.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", tabTitle: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 bg-scrap-black text-warm-white font-mono text-xs font-bold scrap-border hover:bg-neutral-800 transition-colors"
                  >
                    SEND ANOTHER TAB
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs font-black uppercase text-scrap-black mb-1">
                      Your Name / Handle: *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F0] scrap-border font-mono text-xs sm:text-sm text-scrap-black focus:outline-none focus:bg-white focus:ring-2 focus:ring-acid-lime"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-black uppercase text-scrap-black mb-1">
                      Your Email Address: *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F0] scrap-border font-mono text-xs sm:text-sm text-scrap-black focus:outline-none focus:bg-white focus:ring-2 focus:ring-acid-lime"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-black uppercase text-scrap-black mb-1">
                      Tab Subject / Topic:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Collaboration on Data Analytics & Storytelling"
                      value={formData.tabTitle}
                      onChange={(e) => setFormData({ ...formData, tabTitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F0] scrap-border font-mono text-xs sm:text-sm text-scrap-black focus:outline-none focus:bg-white focus:ring-2 focus:ring-acid-lime"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-black uppercase text-scrap-black mb-1">
                      Your Message / Brainwave: *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your idea, opportunity, or say hi..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F0] scrap-border font-mono text-xs sm:text-sm text-scrap-black focus:outline-none focus:bg-white focus:ring-2 focus:ring-acid-lime resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-hot-pink hover:bg-[#f5358f] text-white font-mono font-black text-sm uppercase tracking-wider scrap-border scrap-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>LAUNCH TAB TO SALONI&apos;S BRAIN</span>
                  </button>

                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 pt-2 border-t border-neutral-200">
                    <span>* GUARANTEED NO SPAM</span>
                    <span>RESPONSE TIME: RAPID</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
