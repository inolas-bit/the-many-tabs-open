"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playTabClickSound, toggleSound, isSoundEnabled } from "@/lib/sound-effects";
import { Volume2, VolumeX, Menu, X, Plus, Sparkles, Terminal } from "lucide-react";

interface TabItem {
  id: string;
  name: string;
  type: string;
  badge?: string;
  color: string;
}

const TABS: TabItem[] = [
  { id: "home", name: "Home.exe", type: "EXE", color: "bg-acid-lime" },
  { id: "about", name: "About_Me.txt", type: "TXT", color: "bg-white" },
  { id: "creative-lab", name: "Creative_Lab.fig", type: "FIG", color: "bg-hot-pink" },
  { id: "analytical-brain", name: "Analytical_Brain.sql", type: "SQL", color: "bg-electric-blue" },
  { id: "beyond-the-screen", name: "Beyond_Screen.mp4", type: "MP4", color: "bg-orange-pop" },
  { id: "contact", name: "Contact.sh", type: "SH", color: "bg-acid-lime" },
];

const RANDOM_TABS = [
  "Idea #43: AI Odissi Mudra & Taal Generator",
  "Idea #44: Fraud Detection in Coffee Budgets",
  "Idea #45: 3AM Maximalist CSS Manifesto",
  "Idea #46: GDG Campus Hackathon Playlist",
  "Idea #47: Visual Storytelling via SQL",
  "Idea #48: Why I need 32GB RAM for my brain",
];

export function Navbar() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [tabNotification, setTabNotification] = useState<string | null>(null);
  const [extraTabCount, setExtraTabCount] = useState<number>(42);

  useEffect(() => {
    setSoundOn(isSoundEnabled());

    const handleScroll = () => {
      const sections = TABS.map((t) => t.id);
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (tabId: string) => {
    playTabClickSound();
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    const el = document.getElementById(tabId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToggleSound = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playTabClickSound();
  };

  const handleAddRandomTab = () => {
    playTabClickSound();
    const randomPick = RANDOM_TABS[Math.floor(Math.random() * RANDOM_TABS.length)];
    setTabNotification(randomPick);
    setExtraTabCount((prev) => prev + 1);
    setTimeout(() => {
      setTabNotification(null);
    }, 3200);
  };

  return (
    <>
      {/* Sticky Browser Frame */}
      <header className="sticky top-0 z-50 w-full bg-warm-white/95 backdrop-blur-md border-b-2 border-scrap-black">
        {/* Top OS Window Control Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-scrap-black text-warm-white text-xs border-b border-scrap-black font-mono">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-3 h-3 rounded-full bg-[#FF5F56] border border-black/40" />
            <span className="inline-block w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/40" />
            <span className="inline-block w-3 h-3 rounded-full bg-[#27C93F] border border-black/40" />
            <span className="ml-2 font-bold tracking-wider text-[11px] text-acid-lime hidden sm:inline">
              SALONI_OS::BRAIN_BROWSER.app
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <span className="hidden md:inline text-neutral-300">
              STATUS: <span className="text-acid-lime font-bold">100% UNFILTERED THOUGHTS</span>
            </span>
            <span className="bg-orange-pop text-white px-2 py-0.5 rounded-sm font-bold text-[10px]">
              RAM 98%
            </span>
            <button
              onClick={handleToggleSound}
              aria-label={soundOn ? "Mute audio" : "Enable audio"}
              className="flex items-center gap-1 text-warm-white hover:text-acid-lime transition-colors"
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5 text-acid-lime" /> : <VolumeX className="w-3.5 h-3.5 text-neutral-400" />}
              <span className="hidden sm:inline text-[10px] uppercase">{soundOn ? "SFX: ON" : "SFX: OFF"}</span>
            </button>
          </div>
        </div>

        {/* Browser Tabs Bar */}
        <div className="flex items-center justify-between px-2 pt-2 bg-[#E9E4D8] overflow-x-auto no-scrollbar">
          <nav className="flex items-end space-x-1.5 min-w-max" aria-label="Main Navigation">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`group relative flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold transition-all select-none rounded-t-md scrap-border border-b-0 ${
                    isActive
                      ? "bg-warm-white text-scrap-black -mb-[2px] pb-2.5 z-10 scrap-shadow-sm font-black"
                      : "bg-[#DCD6C8] text-neutral-700 hover:bg-[#D3CCBC]"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? tab.color : "bg-neutral-400"
                    }`}
                  />
                  <span>{tab.name}</span>
                  {isActive && (
                    <span className="ml-1 text-[9px] bg-scrap-black text-warm-white px-1 rounded">
                      ACTIVE
                    </span>
                  )}
                </button>
              );
            })}

            {/* Quick Add Tab easter egg */}
            <button
              onClick={handleAddRandomTab}
              title="Spawn another idea tab"
              className="flex items-center gap-1 px-2.5 py-2 text-xs font-mono font-bold bg-[#D3CCBC] hover:bg-acid-lime text-scrap-black transition-colors rounded-t-md scrap-border border-b-0 -mb-[2px]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden md:inline">TAB ({extraTabCount}+)</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center pb-2 pl-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-1.5 bg-scrap-black text-warm-white rounded scrap-border scrap-shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Address & Breadcrumb Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-warm-white border-t border-scrap-black font-mono text-xs">
          <div className="flex items-center space-x-2 flex-1 overflow-hidden">
            <span className="bg-acid-lime text-scrap-black px-1.5 py-0.5 text-[10px] font-black uppercase scrap-border">
              HTTPS://
            </span>
            <div className="truncate text-neutral-800 font-semibold text-[11px] sm:text-xs">
              brain://saloni-singh.dev/<span className="text-orange-pop font-bold">{activeTab}</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-[11px] text-neutral-600">
            <Terminal className="w-3 h-3 text-electric-blue" />
            <span>PORTFOLIO_STATE: HYPERACTIVE</span>
          </div>
        </div>

        {/* Random tab popup notification */}
        <AnimatePresence>
          {tabNotification && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute left-1/2 -translate-x-1/2 top-24 z-50 bg-acid-lime scrap-border scrap-shadow-lg px-4 py-2 font-mono text-xs font-bold text-scrap-black flex items-center gap-2 max-w-sm"
            >
              <Sparkles className="w-4 h-4 text-orange-pop shrink-0" />
              <span>{tabNotification}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[96px] z-40 bg-warm-white scrap-border border-t-0 p-5 scrap-shadow-xl md:hidden"
          >
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">
              /// SWITCH ACTIVE TAB ///
            </div>
            <div className="flex flex-col space-y-2">
              {TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center justify-between p-3 scrap-border text-left font-mono font-bold text-sm ${
                    activeTab === tab.id
                      ? `${tab.color} text-scrap-black scrap-shadow`
                      : "bg-white hover:bg-neutral-100"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs opacity-60">0{idx + 1}.</span>
                    <span>{tab.name}</span>
                  </span>
                  <span className="text-xs bg-scrap-black text-warm-white px-2 py-0.5 rounded">
                    OPEN
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-scrap-black/20 flex justify-between items-center text-xs font-mono">
              <span className="text-neutral-600">Saloni Singh Portfolio</span>
              <button
                onClick={handleToggleSound}
                className="flex items-center gap-1 font-bold bg-neutral-200 px-3 py-1.5 scrap-border rounded"
              >
                {soundOn ? <Volume2 className="w-4 h-4 text-orange-pop" /> : <VolumeX className="w-4 h-4" />}
                <span>{soundOn ? "MUTE SFX" : "ENABLE SFX"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
