"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Heart, Terminal, Sparkles } from "lucide-react";
import { playTabClickSound } from "@/lib/sound-effects";
import { Sticker } from "./Sticker";

export function Footer() {
  const [timeString, setTimeString] = useState<string>("");
  const [currentYear, setCurrentYear] = useState<number>(2024);

  useEffect(() => {
    const now = new Date();
    setCurrentYear(now.getFullYear());
    const updateTime = () => {
      const current = new Date();
      setTimeString(
        current.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playTabClickSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-scrap-black text-warm-white border-t-2 border-scrap-black py-12 px-4 sm:px-6 lg:px-8 font-mono select-none">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Editorial Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-acid-lime text-xs font-black uppercase mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>END OF ACTIVE BUFFER // THE MANY TABS OPEN IN MY HEAD</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
              SALONI SINGH
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              BCA Graduate • Creative Thinker • Classical Dancer • Data & Visual Storyteller.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Sticker
              variant="barcode"
              text="SYS-HALT"
              subtext="PORTFOLIO-2024"
              rotate={2}
            />
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-acid-lime text-scrap-black font-mono font-black text-xs uppercase scrap-border hover:bg-white transition-all flex items-center gap-2"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Middle Navigation & Information Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
          <div>
            <span className="font-black text-neutral-400 uppercase tracking-wider block mb-2">
              SECTIONS
            </span>
            <ul className="space-y-1.5 text-neutral-300">
              <li>
                <a href="#home" className="hover:text-acid-lime transition-colors">
                  00. Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-acid-lime transition-colors">
                  01. About Me
                </a>
              </li>
              <li>
                <a href="#creative-lab" className="hover:text-hot-pink transition-colors">
                  02. Creative Lab
                </a>
              </li>
              <li>
                <a href="#analytical-brain" className="hover:text-electric-blue transition-colors">
                  03. Analytical Brain
                </a>
              </li>
              <li>
                <a href="#beyond-the-screen" className="hover:text-orange-pop transition-colors">
                  04. Beyond The Screen
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-acid-lime transition-colors">
                  05. Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-black text-neutral-400 uppercase tracking-wider block mb-2">
              CHANNELS
            </span>
            <ul className="space-y-1.5 text-neutral-300">
              <li>
                <a
                  href="https://www.linkedin.com/in/saloni-singh1329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-electric-blue transition-colors"
                >
                  LinkedIn Profile ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/inolas-bit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-acid-lime transition-colors"
                >
                  GitHub Workspace ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:Salonisinghoffical2026@gmail.com"
                  className="hover:text-orange-pop transition-colors"
                >
                  Direct Email ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-black text-neutral-400 uppercase tracking-wider block mb-2">
              BUILD STACK
            </span>
            <ul className="space-y-1 text-neutral-400 text-[11px]">
              <li>Next.js (App Router)</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>Web Audio Synthesizer</li>
            </ul>
          </div>

          <div>
            <span className="font-black text-neutral-400 uppercase tracking-wider block mb-2">
              SYSTEM STATUS
            </span>
            <div className="space-y-1 text-neutral-300 text-[11px]">
              <div>
                LOCAL TIME: <span className="text-acid-lime font-bold">{timeString || "SYNCING..."}</span>
              </div>
              <div>
                CPU: <span className="text-orange-pop font-bold">NORMAL</span>
              </div>
              <div>
                MEMORY: <span className="text-hot-pink font-bold">128 TABS ACTIVE</span>
              </div>
              <div className="text-neutral-400 pt-1">
                STATUS: READY FOR CHALLENGES
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Micro Copyright */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500">
          <div>
            &copy; {currentYear} Saloni Singh. All rights reserved. &ldquo;The Many Tabs Open in My Head&rdquo;
          </div>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>Crafted with maximalist curiosity & rhythm</span>
            <Sparkles className="w-3 h-3 text-acid-lime" />
          </div>
        </div>
      </div>
    </footer>
  );
}
