"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sticker } from "./Sticker";
import { Tape } from "./Tape";
import { playTabClickSound, playPopSound } from "@/lib/sound-effects";
import { Users, Award, Briefcase, Heart, Flame, Calendar, MapPin, Sparkles, Camera } from "lucide-react";

interface LifePillar {
  id: string;
  category: string;
  title: string;
  role: string;
  tagline: string;
  description: string;
  highlights: string[];
  color: "orange" | "pink" | "blue" | "lime";
  stamp: string;
  badge: string;
  badgeType: string;
  image: string;
  caption: string;
  objectPosition: string;
  aspectClass: string;
}

const PILLARS: LifePillar[] = [
  {
    id: "gdg",
    category: "Developer Community",
    title: "GDG on Campus Leadership",
    role: "Community Lead & Organizer",
    tagline: "Cultivating grassroots student developer culture and hands-on technical workshops.",
    description:
      "As a core leader in Google Developer Groups (GDG) on Campus, I organized technical bootcamps, speaker sessions, and coding meetups. Empowered students to explore cloud technologies, web development, and open-source contributions through collaborative learning.",
    highlights: [
      "Organized university-wide speaker sessions and hands-on technical workshops",
      "Mentored junior students navigating their initial software development journeys",
      "Collaborated with industry professionals and student developer ambassadors",
      "Fostered an inclusive community space where curiosity outranks experience",
    ],
    color: "blue",
    stamp: "GDG CERTIFIED",
    badge: "EVENT BADGE #01",
    badgeType: "TECH COMMUNITY",
    image: "/images/gdg.jpg",
    caption: "Google Developer Groups • Community workshops & technical sessions",
    objectPosition: "object-center",
    aspectClass: "aspect-[16/10] max-h-[420px]",
  },
  {
    id: "spc",
    category: "Institutional Leadership",
    title: "Student Placement Coordinator",
    role: "Student Placement Coordinator (SPC)",
    tagline: "The operational bridge between recruiting corporate partners and 200+ graduating students.",
    description:
      "Selected as student coordinator for campus placement operations. Managed end-to-end recruitment drives, handled executive liaison with HR representatives, scheduled multi-round interview pipelines, and supported batchmates through stressful career transitions.",
    highlights: [
      "Coordinated corporate recruitment drives, technical tests, and executive interview schedules",
      "Served as primary point of contact for corporate HR teams visiting campus",
      "Maintained confidential candidate records, eligibility databases, and placement trackers",
      "Mentored peers with mock interviews, resume structuring, and soft-skill prep",
    ],
    color: "lime",
    stamp: "PLACEMENT CORE",
    badge: "OFFICIAL COORDINATOR",
    badgeType: "OPERATIONS",
    image: "/images/spc.jpg",
    caption: "Student Placement Coordinator • Coordinating corporate recruitment drives",
    objectPosition: "object-center",
    aspectClass: "aspect-[4/3] max-h-[440px]",
  },
  {
    id: "hackathons",
    category: "Competitive Prototyping",
    title: "Hackathons & Innovation",
    role: "Team Lead & Product Strategist",
    tagline: "Turning chaotic coffee-fueled brainstorms into functional, deployable MVPs under 24-hour clocks.",
    description:
      "Hackathons taught me that speed and clarity triumph over perfection. Serving as team lead across multiple collegiate hackathons, I specialized in rapid product scoping, user problem validation, UI prototyping, and delivering crisp pitches to jury panels.",
    highlights: [
      "Led cross-functional teams combining frontend coders, backend developers, and designers",
      "Mastered high-pressure sprint decision-making: ruthlessly prioritizing MVP features",
      "Delivered live demo pitches that articulated both technical depth and business impact",
      "Formulated creative concepts combining data pipelines with real-world accessibility",
    ],
    color: "orange",
    stamp: "SPRINT FINISHER",
    badge: "HACKATHON PASS",
    badgeType: "RAPID MVP",
    image: "/images/hackathon.jpg",
    caption: "Hackathons & Innovation • Rapid MVP prototyping and pitch presentations",
    objectPosition: "object-[center_78%]",
    aspectClass: "aspect-[4/4.5] sm:aspect-[3/3.6] max-h-[480px]",
  },
  {
    id: "sports",
    category: "Athletics & Leadership",
    title: "House Captain & Sports Leadership",
    role: "House Captain & Team Lead",
    tagline: "High-stakes team synchronization, athletic resilience, and leading by example under pressure.",
    description:
      "Serving as House Captain taught me athletic endurance, strategic sportsmanship, and how to rally teams through both victories and tough challenges. Sports discipline translates directly into my work ethic: stamina for long projects, fast tactical pivots, and collaborative trust.",
    highlights: [
      "Elected House Captain: led athletics contingents, strategy meetings, and intramural tournaments",
      "Fostered high team morale, disciplined practice regimens, and sportsmanship across events",
      "Cultivated fast decision-making and physical stamina under high-pressure competitive matches",
      "Applied athletic leadership principles to collaborative software hackathons and student groups",
    ],
    color: "lime",
    stamp: "HOUSE CAPTAIN",
    badge: "ATHLETIC PASS #05",
    badgeType: "SPORTS LEADERSHIP",
    image: "/images/sports.jpg",
    caption: "House Captain • Sports leadership, athletic discipline & team spirit",
    objectPosition: "object-[center_55%]",
    aspectClass: "aspect-[4/4.5] sm:aspect-[3/3.8] max-h-[480px]",
  },
  {
    id: "dance",
    category: "Performing Arts & Discipline",
    title: "Classical Odissi Dance & Culture",
    role: "Odissi Practitioner & Cultural Lead",
    tagline: "Sculpturesque Tribhanga postures, rhythmic Mardala beats, and the expressive grammar of traditional mudras.",
    description:
      "Training in classical Odissi instilled a profound sense of discipline, stage presence, and aesthetic sensitivity. Rooted in ancient temple sculpture traditions, Odissi unites Chauka (the square stance of strength) and Tribhanga (the lyrical tri-bent posture). Beyond the stage, I directed cultural festival performances, choreographed expressive pieces, and showed how classical arts cultivate patience, mental endurance, and empathy.",
    highlights: [
      "Rigorous discipline in Chauka and Tribhanga geometries and Mardala rhythm cycles",
      "Choreographed university cultural performances uniting traditional mudras and contemporary narrative",
      "Cultivated stage poise, expressive communication (Abhinaya), and emotional connection",
      "Synthesized the sculptural grace of movement with my approach to graphic design and layouts",
    ],
    color: "pink",
    stamp: "ODISSI DISCIPLINE",
    badge: "STAGE ARTIST",
    badgeType: "PERFORMING ARTS",
    image: "/images/dance.png",
    caption: "Classical Odissi • Sculptural grace, Tribhanga, and rhythmic discipline",
    objectPosition: "object-center",
    aspectClass: "aspect-[4/4.8] sm:aspect-[3/3.8] max-h-[480px]",
  },
  {
    id: "community",
    category: "Grassroots Empowerment",
    title: "Community Building & Mentorship",
    role: "Peer Mentor & Culture Catalyst",
    tagline: "Creating empathetic learning environments where every curious mind finds their voice.",
    description:
      "True community is built in the margins — through late-night debugging sessions, encouraging a nervous junior to speak up at a meetup, or organizing study circles. I prioritize building sustainable circles of mutual growth where everyone teaches and everyone learns.",
    highlights: [
      "Founded informal peer-learning circles for data structures and algorithmic thinking",
      "Organized creative tech brainstorming circles exploring the future of media and AI",
      "Actively championed gender diversity in technical clubs and leadership roles",
      "Built bridges between creative arts students and technical engineering students",
    ],
    color: "orange",
    stamp: "PEER MENTOR",
    badge: "COMMUNITY CATALYST",
    badgeType: "IMPACT",
    image: "/images/general_photo.jpg",
    caption: "Community Building • Collaborative mentorship and student circles",
    objectPosition: "object-[center_38%]",
    aspectClass: "aspect-[4/3] max-h-[420px]",
  },
];

export function BeyondTheScreenSection() {
  const [activePillar, setActivePillar] = useState<string>("gdg");

  const current = PILLARS.find((p) => p.id === activePillar) || PILLARS[0];

  return (
    <section
      id="beyond-the-screen"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-warm-white bg-grid-pattern border-b-2 border-scrap-black overflow-hidden"
    >
      {/* Decorative Washi Tape */}
      <div className="absolute top-6 left-12 hidden md:block">
        <Tape color="blue" angle={-6} width="w-36" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-orange-pop">
              <span>TAB [04]</span>
              <span>//</span>
              <span>LIFE OUTSIDE THE TERMINAL</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-scrap-black uppercase tracking-tight">
              BEYOND THE SCREEN
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-600 uppercase tracking-widest mt-1">
              GDG ON CAMPUS • SPC COORDINATION • HACKATHONS • HOUSE CAPTAIN • ODISSI DANCE • COMMUNITY
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Sticker
              variant="orange"
              text="100% REAL EXPERIENCES"
              rotate={2}
            />
          </div>
        </div>

        {/* Pinboard / Corkboard Collage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Event Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-mono text-xs font-black uppercase text-neutral-500 tracking-wider block mb-2">
              SELECT AN EXPERIENCE BADGE:
            </span>

            {PILLARS.map((pillar) => {
              const isActive = pillar.id === activePillar;

              const badgeColors = {
                blue: "bg-electric-blue text-white",
                orange: "bg-orange-pop text-white",
                lime: "bg-acid-lime text-scrap-black",
                pink: "bg-hot-pink text-white",
              };

              return (
                <motion.button
                  key={pillar.id}
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    playTabClickSound();
                    setActivePillar(pillar.id);
                  }}
                  className={`w-full text-left p-3.5 scrap-border transition-all flex items-center justify-between relative ${
                    isActive
                      ? "bg-white scrap-shadow-lg -translate-x-1"
                      : "bg-[#F3EFE6] hover:bg-white"
                  }`}
                >
                  {/* Left indicator bar */}
                  {isActive && (
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-2 ${
                        pillar.color === "lime"
                          ? "bg-acid-lime"
                          : pillar.color === "pink"
                          ? "bg-hot-pink"
                          : pillar.color === "orange"
                          ? "bg-orange-pop"
                          : "bg-electric-blue"
                      }`}
                    />
                  )}

                  <div className="flex items-center gap-3 pl-2">
                    {/* Mini photo thumbnail */}
                    <div className="w-12 h-12 rounded-none scrap-border overflow-hidden shrink-0 bg-neutral-900">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className={`w-full h-full object-cover ${pillar.objectPosition || "object-center"}`}
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-mono text-[9px] uppercase px-1.5 py-0.2 bg-neutral-200 text-neutral-800 font-bold">
                          {pillar.badgeType}
                        </span>
                      </div>
                      <div className="font-black text-sm sm:text-base text-scrap-black leading-tight">
                        {pillar.title}
                      </div>
                      <div className="font-mono text-[11px] text-neutral-600">
                        {pillar.role}
                      </div>
                    </div>
                  </div>

                  <div className="text-right pl-2 shrink-0">
                    <span
                      className={`font-mono text-[10px] font-black px-2 py-1 scrap-border ${
                        isActive ? badgeColors[pillar.color] : "bg-white text-neutral-700"
                      }`}
                    >
                      {isActive ? "VIEWING" : "OPEN"}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Detailed Scrapbook Bulletin Record with Photograph (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white scrap-border-3 scrap-shadow-xl p-6 sm:p-8 relative">
              <Tape
                color="yellow"
                angle={2}
                width="w-32"
                className="absolute -top-3 right-12 z-20"
              />

              {/* Dossier Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-scrap-black mb-5">
                <div>
                  <span className="font-mono text-xs uppercase px-2 py-0.5 bg-scrap-black text-acid-lime font-black">
                    LEADERSHIP ARCHIVE
                  </span>
                  <div className="font-mono text-xs text-neutral-500 mt-1">
                    RECORD ID: #EXP-2024-{current.id.toUpperCase()}
                  </div>
                </div>

                <div className="font-mono text-xs px-2.5 py-1 bg-[#FAF6EE] scrap-border font-bold text-neutral-800">
                  {current.stamp}
                </div>
              </div>

              {/* Title & Role */}
              <div className="mb-4">
                <span className="font-mono text-xs font-bold text-orange-pop uppercase">
                  {current.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-scrap-black tracking-tight mt-1">
                  {current.title}
                </h3>
                <div className="inline-block mt-2 px-3 py-1 bg-neutral-100 scrap-border font-mono text-xs font-bold text-neutral-800">
                  ROLE: {current.role}
                </div>
              </div>

              {/* Tagline */}
              <div className="p-3.5 bg-[#FAF7F0] scrap-border border-dashed mb-5">
                <p className="font-mono text-xs sm:text-sm font-bold text-neutral-800 leading-relaxed">
                  &ldquo;{current.tagline}&rdquo;
                </p>
              </div>

              {/* Authentic Polaroid Photograph Frame */}
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-6 bg-white p-3 sm:p-4 scrap-border-3 scrap-shadow-md relative"
              >
                <Tape
                  color={current.color === "pink" ? "pink" : current.color === "blue" ? "blue" : "lime"}
                  angle={-2}
                  width="w-28"
                  className="absolute -top-3 left-6 z-20"
                />

                <div className={`relative overflow-hidden bg-neutral-900 scrap-border w-full ${current.aspectClass || "aspect-[16/10]"}`}>
                  <img
                    src={current.image}
                    alt={current.title}
                    className={`w-full h-full object-cover ${current.objectPosition || "object-center"} hover:scale-[1.02] transition-transform duration-500`}
                  />
                </div>

                <div className="pt-3 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
                  <span className="font-bold text-neutral-800 flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-orange-pop shrink-0" />
                    <span>{current.caption}</span>
                  </span>
                  <span className="text-[10px] bg-neutral-100 px-2 py-0.5 scrap-border font-bold text-neutral-600 self-start sm:self-auto shrink-0">
                    DOCUMENTED
                  </span>
                </div>
              </motion.div>

              {/* Narrative Story */}
              <div className="space-y-4 mb-6">
                <h4 className="font-mono text-xs font-black uppercase text-neutral-500 tracking-wider">
                  The Story & Impact
                </h4>
                <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-medium">
                  {current.description}
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="pt-4 border-t-2 border-neutral-200">
                <h4 className="font-mono text-xs font-black uppercase text-neutral-500 tracking-wider mb-3">
                  Key Accomplishments & Learnings
                </h4>
                <div className="space-y-2">
                  {current.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2 bg-neutral-50 scrap-border text-xs sm:text-sm text-neutral-800 font-semibold"
                    >
                      <Sparkles className="w-4 h-4 text-orange-pop shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Stamp Bar */}
              <div className="mt-8 pt-4 border-t border-scrap-black/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className="text-neutral-500">
                  VERIFIED BY SALONI SINGH • ALL EXPERIENCES AUTHENTIC
                </span>
                <Sticker
                  variant="barcode"
                  text={current.id.toUpperCase()}
                  subtext="ACTIVE"
                  rotate={-1}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scrapbook Photographic Gallery Grid */}
        <div className="mt-16 pt-10 border-t-2 border-dashed border-scrap-black/30">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-xs font-black uppercase px-2 py-0.5 bg-scrap-black text-acid-lime scrap-border">
                PHOTO ARCHIVE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-scrap-black uppercase tracking-tight mt-1">
                Visual Scrapbook Gallery
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-500 hidden sm:inline">
              CLICK ANY POLAROID TO SWITCH DOSSIER
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PILLARS.slice(0, 5).map((p, idx) => {
              const rots = [-2, 1.5, -1, 2, -1.5];
              return (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -6, rotate: 0, scale: 1.03 }}
                  onClick={() => {
                    playTabClickSound();
                    setActivePillar(p.id);
                  }}
                  className="bg-white p-2.5 scrap-border-3 scrap-shadow cursor-pointer transition-all flex flex-col justify-between"
                  style={{ transform: `rotate(${rots[idx % rots.length]}deg)` }}
                >
                  <div className="w-full aspect-[4/4.5] bg-neutral-900 scrap-border overflow-hidden mb-2">
                    <img
                      src={p.image}
                      alt={p.title}
                      className={`w-full h-full object-cover ${p.objectPosition || "object-center"} hover:scale-105 transition-transform`}
                    />
                  </div>
                  <div className="font-mono text-center">
                    <span className="font-black text-[11px] text-scrap-black block leading-tight truncate">
                      {p.title}
                    </span>
                    <span className="text-[9px] text-orange-pop font-bold uppercase block mt-0.5">
                      {p.stamp}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
