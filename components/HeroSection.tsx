"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sticker } from "./Sticker";
import { Tape } from "./Tape";
import { playTabClickSound, playPopSound } from "@/lib/sound-effects";
import { ArrowDownRight, Layers, Sparkles, Terminal, Activity, Zap, Compass } from "lucide-react";

const HERO_TABS = [
  {
    id: "tab1",
    title: "Odissi_Rhythm.wav",
    category: "Classical Rhythm",
    status: "Tribhanga & Chauka",
    tag: "Odissi Dance",
    color: "bg-hot-pink text-white",
  },
  {
    id: "tab2",
    title: "Stock_Volatility.py",
    category: "Time Series",
    status: "99.2% Convergence",
    tag: "Analytics",
    color: "bg-electric-blue text-white",
  },
  {
    id: "tab3",
    title: "GDG_Lead_Log.txt",
    category: "Community",
    status: "Campus Workshop Active",
    tag: "Leadership",
    color: "bg-orange-pop text-white",
  },
  {
    id: "tab4",
    title: "Visual_Storytelling.fig",
    category: "Brand Narrative",
    status: "Graphic Design & Canva",
    tag: "Creative Lab",
    color: "bg-acid-lime text-scrap-black",
  },
];

export function HeroSection() {
  const [activeHeroTab, setActiveHeroTab] = useState(0);

  const scrollTo = (id: string) => {
    playTabClickSound();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-warm-white bg-grid-pattern overflow-hidden border-b-2 border-scrap-black"
    >
      {/* Decorative Washi Tapes */}
      <div className="absolute top-4 left-6 hidden sm:block pointer-events-none">
        <Tape color="lime" angle={-8} width="w-36" />
      </div>
      <div className="absolute top-12 right-10 hidden sm:block pointer-events-none">
        <Tape color="pink" angle={6} width="w-40" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Top Meta Bar / Dossier Stamp */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 font-mono text-xs pb-3 border-b border-scrap-black/30">
          <div className="flex items-center gap-2">
            <span className="inline-block px-2 py-0.5 bg-scrap-black text-acid-lime font-bold scrap-shadow-sm">
              VOL. 2024//BRAIN_DUMP
            </span>
            <span className="text-neutral-600 hidden sm:inline">
              DOSSIER OWNER: <strong className="text-scrap-black font-extrabold">SALONI SINGH</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] bg-white px-2 py-0.5 scrap-border font-bold">
              PORTFOLIO EDITION: MAXIMALIST EDITORIAL
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] animate-pulse" />
          </div>
        </div>

        {/* Main Headline Editorial Container with Primary Profile Polaroid */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Headline & Bio (7 cols) */}
            <div className="lg:col-span-7 relative">
              {/* Subtitle Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white scrap-border scrap-shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-orange-pop" />
                <span className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wide text-neutral-800">
                  Too many ideas. Not enough tabs.
                </span>
              </motion.div>

              {/* Gigantic Punchy Editorial Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-scrap-black uppercase tracking-tight leading-[0.92] select-none">
                  SORRY, MY BRAIN
                  <br />
                  <span className="inline-block bg-acid-lime scrap-border px-2 sm:px-4 py-1 scrap-shadow my-1 transform -rotate-1">
                    HAS TOO MANY
                  </span>
                  <br />
                  <span className="inline-block relative">
                    <span className="relative z-10 text-white [-webkit-text-stroke:2px_#151515] sm:[-webkit-text-stroke:3px_#151515] bg-hot-pink px-2 sm:px-3 scrap-border scrap-shadow-sm">
                      TABS OPEN.
                    </span>
                    <span className="absolute -bottom-2 sm:-bottom-3 right-0 font-mono text-xs sm:text-sm font-bold text-electric-blue uppercase bg-white scrap-border px-1.5 hidden sm:inline">
                      (DO NOT CLOSE THEM!)
                    </span>
                  </span>
                </h1>
              </motion.div>

              {/* Sub-headline & Bio Synopsis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-6 sm:mt-8 max-w-xl"
              >
                <p className="text-base sm:text-lg font-bold text-neutral-800 leading-snug">
                  I’m <span className="bg-acid-lime px-1.5 py-0.5 text-scrap-black font-black underline decoration-2">Saloni Singh</span> — 
                  a BCA graduate, technology enthusiast, creative thinker, classical dancer, and visual storyteller 
                  navigating data, brand experiences, and cultural expression with relentless curiosity.
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-4 font-mono text-xs">
                  <span className="bg-white px-2.5 py-1 scrap-border font-bold text-scrap-black">
                    📍 DELHI / NCR
                  </span>
                  <span className="bg-white px-2.5 py-1 scrap-border font-bold text-scrap-black">
                    🎓 BCA GRADUATE
                  </span>
                  <span className="bg-white px-2.5 py-1 scrap-border font-bold text-scrap-black">
                    💃 ODISSI PRACTITIONER
                  </span>
                  <span className="bg-white px-2.5 py-1 scrap-border font-bold text-scrap-black">
                    📊 DATA ARCHITECTURE
                  </span>
                </div>
              </motion.div>

              {/* Action CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap items-center gap-3 mt-6 sm:mt-8"
              >
                <button
                  onClick={() => scrollTo("about")}
                  className="px-5 py-3 bg-acid-lime text-scrap-black scrap-border-3 scrap-shadow font-black font-mono text-xs sm:text-sm uppercase tracking-wider hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2"
                >
                  <span>INSPECT ABOUT ME</span>
                  <ArrowDownRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollTo("analytical-brain")}
                  className="px-5 py-3 bg-electric-blue text-white scrap-border-3 scrap-shadow font-black font-mono text-xs sm:text-sm uppercase tracking-wider hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2"
                >
                  <span>ANALYTICAL BRAIN</span>
                  <Zap className="w-4 h-4 text-acid-lime" />
                </button>

                <button
                  onClick={() => scrollTo("creative-lab")}
                  className="px-5 py-3 bg-hot-pink text-white scrap-border-3 scrap-shadow font-black font-mono text-xs sm:text-sm uppercase tracking-wider hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2"
                >
                  <span>CREATIVE LAB</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Right Column: Primary Profile Photograph Polaroid (5 cols) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
              {/* Starburst Sticker - Prominent & Clearly Visible */}
              <div className="absolute -top-7 -right-2 sm:-right-4 z-30 pointer-events-auto">
                <Sticker
                  variant="starburst"
                  text="100% UNHINGED"
                  subtext="CREATIVITY"
                  rotate={6}
                />
              </div>

              {/* Pink Tab badge on corner */}
              <div className="absolute -bottom-4 -left-3 z-30">
                <Sticker
                  variant="pink"
                  text="⚡ 128 TABS OPEN"
                  rotate={-4}
                />
              </div>

              {/* Polaroid Frame Container */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                initial={{ rotate: 2 }}
                className="w-full max-w-sm bg-white p-4 scrap-border-3 scrap-shadow-xl relative transition-transform"
              >
                {/* Washi Tape on top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <Tape color="yellow" width="w-32" angle={-2} />
                </div>

                {/* Primary Profile Image Frame */}
                <div className="relative w-full aspect-[4/4.8] bg-neutral-900 scrap-border overflow-hidden">
                  <img
                    src="/images/saloni_profile.jpeg"
                    alt="Saloni Singh — Primary Profile Photograph"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 z-10">
                    <span className="bg-acid-lime text-scrap-black px-2 py-0.5 font-mono text-[10px] font-black uppercase scrap-border">
                      ORIGINAL PROFILE
                    </span>
                  </div>
                </div>

                {/* Polaroid Bottom Caption */}
                <div className="pt-3 pb-1 font-mono">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-black text-scrap-black uppercase tracking-tight">
                      Saloni Singh
                    </span>
                    <span className="text-[10px] bg-neutral-100 px-1.5 py-0.5 scrap-border font-bold text-neutral-600">
                      REC: 2024
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-600 font-bold mt-1">
                    BCA Graduate • Odissi Practitioner • Creative Thinker
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Interactive "Open Brain Tabs" OS Component */}
        <div className="mt-12 relative">
          <div className="absolute -top-3 right-6 z-20">
            <Tape color="yellow" width="w-28" angle={3} />
          </div>

          <div className="bg-white scrap-border-3 scrap-shadow-lg overflow-hidden">
            {/* Window title bar */}
            <div className="bg-scrap-black px-4 py-2.5 flex items-center justify-between text-warm-white font-mono text-xs">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="font-bold text-acid-lime ml-2 text-[11px]">
                  ACTIVE_BRAIN_MONITOR.EXE — [CPU: 99.8% OVERCLOCK]
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-neutral-300">
                <span className="hidden sm:inline">SWAP: 16GB / 16GB USED</span>
                <span className="bg-hot-pink text-white px-2 py-0.5 font-black text-[10px] scrap-border">
                  HOT MEMORY
                </span>
              </div>
            </div>

            {/* Simulated browser tabs header */}
            <div className="bg-[#EBE6DA] p-2 flex items-center gap-1.5 overflow-x-auto border-b-2 border-scrap-black">
              {HERO_TABS.map((tab, idx) => {
                const isActive = activeHeroTab === idx;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      playTabClickSound();
                      setActiveHeroTab(idx);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 text-xs font-mono font-bold scrap-border transition-all ${
                      isActive
                        ? "bg-white text-scrap-black scrap-shadow-sm -translate-y-0.5"
                        : "bg-[#DFD9CB] text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-orange-pop" : "bg-neutral-400"
                      }`}
                    />
                    <span className="whitespace-nowrap">{tab.title}</span>
                    <span className="text-[9px] px-1 bg-black/10 rounded">
                      {tab.tag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Panel Content */}
            <div className="p-6 bg-warm-white bg-dot-pattern">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="px-2 py-0.5 bg-scrap-black text-warm-white font-bold">
                      TAB 0{activeHeroTab + 1}
                    </span>
                    <span className="text-orange-pop font-black uppercase">
                      ● STATUS: {HERO_TABS[activeHeroTab].status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-scrap-black">
                    {HERO_TABS[activeHeroTab].title}
                  </h3>

                  <p className="text-sm text-neutral-700 leading-relaxed font-medium">
                    {activeHeroTab === 0 &&
                      "Connecting the sculpturesque geometry, Chauka and Tribhanga postures of Classical Odissi with computational thinking, communication, and visual storytelling."}
                    {activeHeroTab === 1 &&
                      "Algorithmic analysis of Google (Alphabet) stock movements using moving averages, volatility metrics, and time-series modeling to detect inflection points."}
                    {activeHeroTab === 2 &&
                      "Organizing campus tech hackathons, facilitating Google Developer Groups workshops, mentoring juniors, and steering placement drives."}
                    {activeHeroTab === 3 &&
                      "Designing high-impact editorial graphics, Canva assets, experimental layouts, and brand storytelling experiences."}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Sticker
                      variant="barcode"
                      text="TAB-MEMORY"
                      subtext="SYNCED"
                      rotate={-1}
                    />
                    <Sticker
                      variant="lime"
                      text="VERIFIED DUAL-BRAIN"
                      rotate={1}
                    />
                  </div>
                </div>

                {/* Right Tab Widget / Brain Status Box */}
                <div className="bg-white scrap-border p-4 scrap-shadow">
                  <div className="font-mono text-xs font-black uppercase text-neutral-500 mb-3 flex items-center justify-between">
                    <span>BRAIN TELEMETRY</span>
                    <Activity className="w-3.5 h-3.5 text-orange-pop" />
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between pb-1 border-b border-black/10">
                      <span className="text-neutral-600">Analytical Hemisphere:</span>
                      <strong className="text-electric-blue">Python / SQL / ML</strong>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-black/10">
                      <span className="text-neutral-600">Creative Hemisphere:</span>
                      <strong className="text-hot-pink">Odissi / Storytelling / Canva</strong>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-black/10">
                      <span className="text-neutral-600">Leadership Thread:</span>
                      <strong className="text-orange-pop">GDG / Placements</strong>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-neutral-600">Active Tab Cache:</span>
                      <strong className="text-acid-lime bg-scrap-black px-1.5 py-0.5">
                        INFINITE
                      </strong>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      playPopSound();
                      setActiveHeroTab((prev) => (prev + 1) % HERO_TABS.length);
                    }}
                    className="w-full mt-4 py-2 bg-neutral-100 hover:bg-acid-lime scrap-border font-mono text-xs font-extrabold uppercase transition-colors"
                  >
                    NEXT TAB &gt;&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
