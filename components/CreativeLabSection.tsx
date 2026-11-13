"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sticker } from "./Sticker";
import { Tape } from "./Tape";
import { ProjectModal, ProjectDetail } from "./ProjectModal";
import { playTabClickSound, playPopSound } from "@/lib/sound-effects";
import { Sparkles, Palette, Layers, Eye, Compass, Megaphone, Lightbulb } from "lucide-react";

const CREATIVE_PROJECTS: ProjectDetail[] = [
  {
    id: "campaign-concepts",
    title: "Chromatic Overload: Gen-Z Campaign",
    category: "Campaign Concepts",
    tagline: "Experiential multi-channel brand launch breaking minimalist fatigue.",
    summary:
      "A conceptual campaign strategy born from the backlash against sterile corporate minimalism. Chromatic Overload reclaims high-saturation acid colors, tactile physical stickers, and fragmented collage storytelling across print and social formats.",
    tags: ["Experiential Campaign", "Brand Narrative", "Visual Strategy", "Collage"],
    color: "pink",
    highlights: [
      "Cross-platform campaign architecture designed for Gen-Z creative audiences",
      "Tactile sticker-pack marketing with interactive AR social filters",
      "Editorial moodboards featuring 90s zine layouts and rave flyer aesthetic",
      "Full copy deck including headlines, manifestos, and social hooks",
    ],
    techStack: ["Canva", "Graphic Design", "Storytelling", "Creative Strategy", "Communication"],
    methodology:
      "Formulated audience persona archetypes, mapped touchpoints from street-level posters to digital interactions, and created a maximalist design system that balances visual loudness with legible hierarchy.",
    deliverables: ["Visual Identity System", "Campaign Manifesto", "Billboard & Social Mockups", "Sticker Pack Collateral"],
    metricLabel: "Campaign Reach Target",
    metricValue: "Multi-Touchpoint Gen-Z Focus",
  },
  {
    id: "brand-storytelling",
    title: "Heritage in Motion: Odissi x Kinetic Identity",
    category: "Brand Storytelling",
    tagline: "Bridging the timeless sculpturesque grace of classical Odissi with contemporary brand systems.",
    summary:
      "An artistic exploration of how the sculptural geometry of Odissi — the distinct Chauka and Tribhanga postures, fluid torso deflections, and expressive storytelling (Abhinaya) — can serve as the foundational visual grid for modern cultural brands.",
    tags: ["Brand Identity", "Cultural Storytelling", "Odissi Aesthetics", "Visual Design"],
    color: "lime",
    highlights: [
      "Deconstructed Tribhanga (tri-bent posture) geometry into modern asymmetrical layouts",
      "Visual translations of classical Hasta Mudras (hand gestures) into clean icon systems",
      "Bespoke brand narrative and storytelling positioning classical heritage as contemporary design",
      "Editorial lookbook created with Canva, Figma, and typography systems",
    ],
    techStack: ["Canva", "Visual Research", "Graphic Design", "Storytelling"],
    methodology:
      "Documented classical movements, mapped spatial transitions to graphic vector coordinates, and authored a cultural brand monograph explaining the philosophical link between rhythm, communication, and visual resonance.",
    deliverables: ["Brand Monograph", "Iconography System", "Visual Identity System", "Editorial Lookbook"],
    metricLabel: "Artistic Horizon",
    metricValue: "Odissi to Contemporary",
  },
  {
    id: "graphic-design",
    title: "The Kinetic Typo Zine: Issue 01",
    category: "Graphic Design",
    tagline: "A brutalist print publication exploring typography pushed beyond legibility.",
    summary:
      "A limited-edition editorial zine layout created as an antidote to cookie-cutter design templates. Features dense type arrangements, distressed textures, barcode stamps, and oversized headlines inspired by Japanese poster design and Swiss punk typography.",
    tags: ["Editorial Design", "Experimental Type", "Zine Layout", "Print Design"],
    color: "orange",
    highlights: [
      "24-page editorial publication featuring custom typographic treatments",
      "Exploration of negative space, asymmetric columns, and extreme hierarchy",
      "Custom textured scan overlays and brutalist drop-shadow visual stamps",
      "Handmade paper collage elements digitized for high-resolution print",
    ],
    techStack: ["InDesign", "Photoshop", "Typography Systems", "Print Production"],
    methodology:
      "Conducted typography stress tests across various weights, experimented with intentional clipping, ink bleed emulation, and developed an expressive grid system for dense textual layouts.",
    deliverables: ["Complete 24-page Zine", "Print Ready Spread PDFs", "Poster Series", "Type Specimen Sheet"],
    metricLabel: "Page Density",
    metricValue: "24 Custom Editorial Spreads",
  },
  {
    id: "creative-brainstorming",
    title: "Prompt-to-Product Studio Framework",
    category: "Creative Brainstorming",
    tagline: "A systematic ideation framework uniting generative AI with human intuition.",
    summary:
      "Designed a workshop toolkit and card-deck system that helps cross-functional teams brainstorm innovative digital products and narrative campaigns. Bridges wild lateral thinking with structured feasibility filtering.",
    tags: ["Ideation Framework", "Workshop Design", "Lateral Thinking", "Generative Tools"],
    color: "blue",
    highlights: [
      "Card-based ideation prompt system with 52 lateral challenge cards",
      "Methodology for combining disparate domains (e.g. classical music + fintech data)",
      "Tested with university hackathon teams to accelerate MVP ideation from 3 hours to 45 mins",
      "Visual canvas template for mapping user emotion alongside technical architecture",
    ],
    techStack: ["Miro", "Workshop Facilitation", "Design Thinking", "Prompt Architecture"],
    methodology:
      "Synthesized Edward de Bono’s lateral thinking concepts with modern agile sprint mechanics, testing prompt iterations across student developer groups during GDG hackathon sessions.",
    deliverables: ["52-Card Physical Deck Design", "Digital Canvas Template", "Facilitator Playbook"],
    metricLabel: "Ideation Speedup",
    metricValue: "3x Faster MVP Formulation",
  },
  {
    id: "visual-experiments",
    title: "Synesthesia Canvas: Sound to Spectrum",
    category: "Visual Experiments",
    tagline: "Interactive algorithmic exploration translating percussion frequencies into generative pigments.",
    summary:
      "A visual experiment researching cross-modal sensory perception: how the distinct acoustic strikes of the Tabla (Dha, Dhin, Ta, Na) correspond to distinct spectral wavelengths, generating evolving dynamic compositions.",
    tags: ["Creative Coding", "Synesthesia", "Generative Art", "Color Science"],
    color: "lime",
    highlights: [
      "Harmonic frequency mapping model linking audio resonance with HSL color coordinates",
      "Generative visual outputs that animate dynamically to percussion tempo changes",
      "Scrapbook gallery of generated color tapestries and geometric waveform art",
      "Bespoke color palette generator derived from Indian musical ragas and taals",
    ],
    techStack: ["HTML5 Canvas", "Web Audio API", "Color Theory", "Visual Research"],
    methodology:
      "Sampled classical tabla syllables, analyzed their frequency envelopes with Fast Fourier Transforms (FFT), and rendered corresponding saturated neon particles on an interactive web canvas.",
    deliverables: ["Interactive Web Canvas Prototype", "Acoustic-to-Color Mappings", "Visual Palette Catalog"],
    metricLabel: "Acoustic Inputs",
    metricValue: "16-Beat Taal Harmonic Map",
  },
];

const CATEGORIES = [
  "All",
  "Campaign Concepts",
  "Brand Storytelling",
  "Graphic Design",
  "Creative Brainstorming",
  "Visual Experiments",
];

export function CreativeLabSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? CREATIVE_PROJECTS
      : CREATIVE_PROJECTS.filter((p) => p.category === activeCategory);

  const handleCardClick = (project: ProjectDetail) => {
    playTabClickSound();
    setSelectedProject(project);
  };

  return (
    <section
      id="creative-lab"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-warm-white bg-grid-pattern border-b-2 border-scrap-black overflow-hidden"
    >
      {/* Decorative Washi Tape */}
      <div className="absolute top-6 right-12 hidden md:block">
        <Tape color="pink" angle={-5} width="w-36" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-hot-pink">
              <span>TAB [02]</span>
              <span>//</span>
              <span>EXPERIMENTAL WORKSHOP</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-scrap-black uppercase tracking-tight">
              CREATIVE LAB
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-600 uppercase tracking-widest mt-1">
              CAMPAIGN CONCEPTS • BRAND STORYTELLING • GRAPHIC DESIGN • CREATIVE BRAINSTORMING • VISUAL EXPERIMENTS
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Sticker
              variant="black"
              text="EXPERIMENTAL ONLY"
              subtext="UNRESTRICTED"
              rotate={2}
            />
          </div>
        </div>

        {/* Filter Bar with Scrapbook Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-scrap-black/20">
          <span className="font-mono text-xs font-black uppercase text-neutral-500 mr-2">
            FILTER EXPERIMENTS:
          </span>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playPopSound();
                  setActiveCategory(cat);
                }}
                className={`px-3 py-1.5 scrap-border font-mono text-xs font-bold transition-all ${
                  isActive
                    ? "bg-hot-pink text-white scrap-shadow-sm -translate-y-0.5"
                    : "bg-white text-scrap-black hover:bg-neutral-100"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const rotations = [-1.5, 1.2, -0.8, 1.6, -1.2];
            const rot = rotations[idx % rotations.length];

            const borderColors = {
              pink: "border-hot-pink",
              lime: "border-acid-lime",
              orange: "border-orange-pop",
              blue: "border-electric-blue",
            };

            const tapeColors: ("yellow" | "pink" | "blue" | "lime")[] = [
              "yellow",
              "pink",
              "lime",
              "blue",
              "yellow",
            ];

            return (
              <motion.div
                key={project.id}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => handleCardClick(project)}
                className="group cursor-pointer bg-white scrap-border-3 scrap-shadow-lg p-5 flex flex-col justify-between relative transition-all"
                style={{ transform: `rotate(${rot}deg)` }}
              >
                {/* Washi Tape on card corner */}
                <div className="absolute -top-3 left-6 z-20">
                  <Tape
                    color={tapeColors[idx % tapeColors.length]}
                    width="w-24"
                    angle={-2}
                  />
                </div>

                <div>
                  {/* Category Stamp */}
                  <div className="flex items-center justify-between mb-3 pt-1">
                    <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-neutral-100 scrap-border text-neutral-800">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-500 font-bold">
                      ENTRY #{idx + 1}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-scrap-black group-hover:text-hot-pink transition-colors leading-tight mb-2">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs text-neutral-700 font-medium leading-relaxed mb-4">
                    {project.tagline}
                  </p>

                  {/* Visual Snippet / Collage element placeholder */}
                  <div className="w-full h-36 bg-[#F8F5EE] scrap-border p-3 flex flex-col justify-between mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

                    <div className="flex justify-between items-center text-[10px] font-mono text-neutral-600 z-10">
                      <span>DOC_TYPE: {project.tags[0]}</span>
                      <span className="bg-acid-lime px-1.5 py-0.5 text-scrap-black font-extrabold scrap-border-sm">
                        {project.color.toUpperCase()}
                      </span>
                    </div>

                    <div className="z-10 my-auto text-center px-2">
                      <div className="inline-block p-2 rounded-full bg-white scrap-border mb-1 shadow-sm">
                        <Sparkles className="w-5 h-5 text-hot-pink" />
                      </div>
                      <p className="text-[11px] font-bold text-scrap-black line-clamp-2">
                        {project.highlights[0]}
                      </p>
                    </div>

                    <div className="z-10 flex justify-between items-center text-[9px] font-mono text-neutral-500 pt-1 border-t border-black/10">
                      <span>KEY: {project.techStack.slice(0, 2).join(" • ")}</span>
                      <span>CLICK TO INSPECT</span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="pt-3 border-t border-scrap-black/20 flex items-center justify-between font-mono text-xs">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] bg-neutral-100 px-1.5 py-0.5 rounded font-semibold text-neutral-700"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <span className="font-bold text-hot-pink flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>OPEN</span>
                    <span>→</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Creative Lab Philosophy Quote */}
        <div className="mt-16 p-6 bg-acid-lime scrap-border-3 scrap-shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs font-black uppercase text-scrap-black bg-white px-2 py-0.5 scrap-border inline-block">
              THE CREATIVE MANIFESTO
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-scrap-black">
              &ldquo;Creativity is not chaotic randomness. It is the ability to connect two things that have never met before.&rdquo;
            </h3>
          </div>
          <Sticker
            variant="pink"
            text="EXPLORE MORE"
            subtext="LAB"
            rotate={-2}
            onClick={() => {
              const el = document.getElementById("analytical-brain");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>

      {/* Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
