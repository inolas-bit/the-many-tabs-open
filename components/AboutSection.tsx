"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sticker } from "./Sticker";
import { Tape } from "./Tape";
import { playTabClickSound, playPopSound } from "@/lib/sound-effects";
import {
  GraduationCap,
  Sparkles,
  Cpu,
  Palette,
  Heart,
  FileText,
  Bookmark,
  Check,
  Award,
} from "lucide-react";

const ABOUT_TABS = [
  {
    id: "identity",
    title: "01 // THE DOSSIER",
    heading: "BCA Graduate & Creative Technologist",
    desc: "Graduating with a Bachelor of Computer Applications (BCA), I discovered that computational logic and creative storytelling are not separate disciplines — they are two sides of the same mind. I explore how code, data, and design synthesize into experiences that make people pause and think.",
    bullets: [
      "Rigorous grounding in algorithms, databases, and software fundamentals",
      "Obsessed with turning chaotic datasets into clean, actionable intelligence",
      "Passionate about humane technology and intuitive user interfaces",
      "Strong blend of academic computer science with practical hands-on projects",
    ],
  },
  {
    id: "odissi",
    title: "02 // THE DANCER'S MIND",
    heading: "Classical Odissi: Sculpturesque Precision & Grace",
    desc: "Classical Odissi is an exacting framework of geometry, spiritual storytelling, and rhythmic mathematics. Training in Odissi taught me the discipline of Chauka (square stance of strength) and Tribhanga (three-bend posture of lyrical grace), split-second synchronization, and expressive emotional depth (Abhinaya).",
    bullets: [
      "Tribhanga & Chauka postures instilling structural balance and aesthetic poise",
      "Rhythmic Mardala time-cycles translated into structured computational logic",
      "Expressive mudras, communication, and visual storytelling applied to design",
      "Deep practice in stage performance, composure, and emotional resonance",
    ],
  },
  {
    id: "storytelling",
    title: "03 // VISUAL STORYTELLER",
    heading: "Editorial Design, Graphic Design & Storytelling",
    desc: "I believe spreadsheets without story are inert, and designs without substance are hollow. As a visual storyteller skilled in Canva, graphic design, and brand communication, I build scrapbooks, brand campaigns, and editorial zines that challenge the sterile conventions of modern web design.",
    bullets: [
      "Storytelling frameworks making complex statistical conclusions instantly legible",
      "Graphic design & Canva mastery for rapid campaign mockups and visual collateral",
      "Persuasive verbal and written communication bridging technical and creative teams",
      "Unconventional maximalist aesthetic with purposeful structure",
    ],
  },
];

const SKILL_STICKERS = [
  { name: "Odissi Classical Dance", category: "art", color: "bg-hot-pink text-white" },
  { name: "Storytelling", category: "creative", color: "bg-acid-lime text-scrap-black" },
  { name: "Graphic Design", category: "design", color: "bg-orange-pop text-white" },
  { name: "Communication", category: "soft", color: "bg-electric-blue text-white" },
  { name: "Canva", category: "tool", color: "bg-hot-pink text-white" },
  { name: "Python", category: "code", color: "bg-electric-blue text-white" },
  { name: "SQL & Relational DBs", category: "data", color: "bg-scrap-black text-acid-lime" },
  { name: "Pandas & NumPy", category: "data", color: "bg-orange-pop text-white" },
  { name: "Machine Learning (Scikit)", category: "ml", color: "bg-acid-lime text-scrap-black" },
  { name: "Data Visualization", category: "analytics", color: "bg-white text-scrap-black" },
  { name: "Brand Storytelling", category: "creative", color: "bg-acid-lime text-scrap-black" },
  { name: "Public Speaking & GDG", category: "community", color: "bg-orange-pop text-white" },
  { name: "Editorial Layouts", category: "design", color: "bg-white text-scrap-black" },
  { name: "Placement Operations", category: "leadership", color: "bg-scrap-black text-white" },
];

export function AboutSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section
      id="about"
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-warm-white bg-dot-pattern border-b-2 border-scrap-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header with Tape & Stamp */}
        <div className="relative mb-12">
          <div className="inline-block relative">
            <Tape color="pink" angle={-4} width="w-32" className="-top-3 -left-4" />
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-orange-pop">
              <span>TAB [01]</span>
              <span>//</span>
              <span>CONFIDENTIAL DOSSIER</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-scrap-black uppercase tracking-tight">
              ABOUT SALONI SINGH
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-neutral-600 uppercase tracking-widest mt-1">
            BCA GRADUATE • TECH ENTHUSIAST • CREATIVE THINKER • CLASSICAL DANCER • VISUAL STORYTELLER
          </p>
        </div>

        {/* Scrapbook Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Polaroid & ID Badge Dossier (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Polaroid Card */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.01 }}
              initial={{ rotate: -2 }}
              className="bg-white p-4 scrap-border-3 scrap-shadow-lg relative transition-all"
            >
              <Tape color="yellow" angle={4} width="w-28" className="absolute -top-3 right-8 z-20" />

              {/* Polaroid Photo Frame with Original Photograph (GENERAL_PHOTO.jpg) */}
              <div className="w-full aspect-[3/3.8] bg-neutral-900 scrap-border relative overflow-hidden group">
                <img
                  src="/images/general_photo.jpg"
                  alt="Saloni Singh — Dossier Photograph"
                  className="w-full h-full object-cover object-[center_38%] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-2.5 left-2.5 z-10 font-mono text-[11px]">
                  <span className="bg-acid-lime text-scrap-black px-2 py-0.5 font-black uppercase scrap-border">
                    ID CARD #2024
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-2 left-2 right-2 z-10 bg-scrap-black/90 backdrop-blur-xs p-2 scrap-border flex justify-between items-center text-[10px] font-mono text-warm-white">
                  <span>DISCIPLINE: ODISSI</span>
                  <span className="text-acid-lime font-bold">SALONI SINGH</span>
                </div>
              </div>

              {/* Polaroid Handwritten Caption */}
              <div className="pt-4 pb-1 text-center font-mono">
                <p className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  &ldquo;Logic gives structure. Art gives purpose.&rdquo;
                </p>
                <div className="mt-2 flex justify-center items-center gap-3 text-[10px] text-neutral-500">
                  <span>CLASS OF 2024</span>
                  <span>•</span>
                  <span>ODISSI PRACTITIONER</span>
                  <span>•</span>
                  <span>TECH CODER</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Sticky Note */}
            <div className="bg-[#FFF48F] p-4 scrap-border scrap-shadow transform rotate-1 relative">
              <Tape color="white" angle={-2} width="w-20" className="absolute -top-2 left-4" />
              <div className="flex items-center gap-1.5 font-mono text-xs font-black text-neutral-800 mb-2">
                <Bookmark className="w-3.5 h-3.5 text-orange-pop" />
                <span>NOTE TO RECRUITER / VISITOR:</span>
              </div>
              <p className="text-xs leading-relaxed text-neutral-800 font-medium">
                I do not fit into a single box. If you give me a messy dataset, I will extract patterns. If you give me a blank canvas, I will design a story. If you put me on stage, I dance with mathematical rhythm.
              </p>
            </div>
          </div>

          {/* Right Column: Tabbed Dossier & Skills Matrix (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Notebook Window */}
            <div className="bg-white scrap-border-3 scrap-shadow-lg">
              {/* Folder Tabs Navigation */}
              <div className="bg-[#E7E2D6] px-3 pt-2.5 flex items-center gap-1.5 overflow-x-auto border-b-2 border-scrap-black">
                {ABOUT_TABS.map((tab, idx) => {
                  const isActive = selectedTab === idx;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        playTabClickSound();
                        setSelectedTab(idx);
                      }}
                      className={`px-3 py-2 text-xs font-mono font-bold scrap-border border-b-0 rounded-t transition-all ${
                        isActive
                          ? "bg-white text-scrap-black -mb-[2px] pb-2.5 font-black scrap-shadow-sm"
                          : "bg-[#D8D2C2] text-neutral-600 hover:bg-[#CDC6B5]"
                      }`}
                    >
                      {tab.title}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Notebook Page */}
              <div className="p-6 bg-white bg-grid-pattern min-h-[300px]">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                  <span className="px-2 py-0.5 bg-acid-lime text-scrap-black font-black scrap-border">
                    PAGE {selectedTab + 1} OF 3
                  </span>
                  <span className="text-neutral-500 font-bold uppercase">
                    ARCHIVE RECORD: #SS-BCA-0{selectedTab + 1}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-scrap-black mt-2 mb-3">
                  {ABOUT_TABS[selectedTab].heading}
                </h3>

                <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-medium mb-6">
                  {ABOUT_TABS[selectedTab].desc}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 pt-2 border-t-2 border-dashed border-neutral-300">
                  <span className="font-mono text-xs font-black uppercase text-neutral-500 tracking-wider block mb-2">
                    CORE FACETS:
                  </span>
                  {ABOUT_TABS[selectedTab].bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 font-semibold">
                      <span className="w-4 h-4 rounded-full bg-acid-lime scrap-border flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-black text-scrap-black">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticker Skills Board */}
            <div className="bg-warm-white scrap-border p-5 scrap-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-black uppercase tracking-wider text-neutral-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-orange-pop" />
                  SKILL STICKER COLLECTION (CLICK TO TAP)
                </span>
                <span className="font-mono text-[10px] text-neutral-500">
                  {SKILL_STICKERS.length} STICKERS
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {SKILL_STICKERS.map((skill, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.06, rotate: (idx % 4) - 2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={playPopSound}
                    className={`px-3 py-1.5 scrap-border font-mono text-xs font-bold scrap-shadow-sm transition-all ${skill.color}`}
                  >
                    <span>{skill.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
