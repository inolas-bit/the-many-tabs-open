"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { playTabClickSound } from "@/lib/sound-effects";
import { Tape } from "./Tape";

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  tags: string[];
  color: "lime" | "pink" | "orange" | "blue";
  highlights: string[];
  techStack: string[];
  methodology: string;
  codeSnippet?: string;
  metricLabel?: string;
  metricValue?: string;
  deliverables?: string[];
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const headerColors = {
    lime: "bg-acid-lime text-scrap-black",
    pink: "bg-hot-pink text-white",
    orange: "bg-orange-pop text-white",
    blue: "bg-electric-blue text-white",
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playTabClickSound();
            onClose();
          }}
          className="fixed inset-0 bg-scrap-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-warm-white scrap-border-3 scrap-shadow-xl z-10 max-h-[90vh] flex flex-col my-auto overflow-hidden"
        >
          {/* Top Tape */}
          <div className="absolute -top-3 left-12 z-20">
            <Tape color="yellow" width="w-32" angle={-2} />
          </div>

          {/* Modal OS Header */}
          <div
            className={`flex items-center justify-between px-4 py-3 border-b-2 border-scrap-black ${
              headerColors[project.color]
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs uppercase px-2 py-0.5 bg-scrap-black text-warm-white font-bold rounded">
                {project.category}
              </span>
              <span className="font-mono text-xs font-black uppercase tracking-wider hidden sm:inline">
                FILE_VIEWER://{project.id}.dossier
              </span>
            </div>

            <button
              onClick={() => {
                playTabClickSound();
                onClose();
              }}
              className="p-1 bg-scrap-black text-warm-white hover:bg-neutral-800 scrap-border rounded transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs bg-black/10 px-2 py-0.5 rounded font-bold">
                  PROJECT SPECIFICATION
                </span>
                {project.metricValue && (
                  <span className="font-mono text-xs bg-acid-lime text-scrap-black font-extrabold px-2 py-0.5 scrap-border">
                    {project.metricLabel}: {project.metricValue}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-scrap-black tracking-tight leading-tight">
                {project.title}
              </h2>
              <p className="text-base text-neutral-700 font-medium mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Overview Card */}
            <div className="p-4 bg-white scrap-border scrap-shadow-sm rounded-none">
              <h3 className="font-mono text-xs font-black uppercase text-neutral-500 mb-2 tracking-wider">
                Executive Overview
              </h3>
              <p className="text-sm leading-relaxed text-neutral-800">
                {project.summary}
              </p>
            </div>

            {/* Methodology & Architecture */}
            <div className="p-4 bg-[#FAF6EE] scrap-border border-dashed">
              <h3 className="font-mono text-xs font-black uppercase text-orange-pop flex items-center gap-1.5 mb-2 tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Approach & Methodology
              </h3>
              <p className="text-sm leading-relaxed text-neutral-800">
                {project.methodology}
              </p>
            </div>

            {/* Key Deliverables & Highlights */}
            <div>
              <h3 className="font-mono text-xs font-black uppercase text-scrap-black mb-3 tracking-wider">
                Key Insights & Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 bg-white scrap-border text-xs text-neutral-800 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-electric-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippet / SQL / Terminal Preview if available */}
            {project.codeSnippet && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-neutral-600 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5" /> Code & Query Architecture
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500">
                    SNIPPET_PREVIEW
                  </span>
                </div>
                <div className="bg-scrap-black text-acid-lime p-4 font-mono text-xs rounded-none scrap-border overflow-x-auto">
                  <pre>
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div>
              <h3 className="font-mono text-xs font-black uppercase text-neutral-500 mb-2 tracking-wider">
                Toolkit & Environment
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-white scrap-border font-mono text-xs font-bold text-scrap-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3 bg-[#EAE5D9] border-t-2 border-scrap-black flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-600">
              Saloni Singh • The Many Tabs Open in My Head
            </span>
            <button
              onClick={() => {
                playTabClickSound();
                onClose();
              }}
              className="px-4 py-1.5 bg-scrap-black text-warm-white font-bold hover:bg-neutral-800 scrap-border scrap-shadow-sm transition-all"
            >
              CLOSE TAB [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
