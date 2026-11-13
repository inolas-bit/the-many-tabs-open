import React from "react";
import { Navbar } from "@/components/Navbar";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CreativeLabSection } from "@/components/CreativeLabSection";
import { AnalyticalBrainSection } from "@/components/AnalyticalBrainSection";
import { BeyondTheScreenSection } from "@/components/BeyondTheScreenSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white flex flex-col w-full overflow-x-hidden selection:bg-acid-lime selection:text-scrap-black">
      {/* Top Browser Navigation Bar */}
      <Navbar />

      {/* Top High-Voltage Ticker */}
      <MarqueeTicker
        bg="bg-acid-lime"
        textColor="text-scrap-black"
        text={[
          "SORRY, MY BRAIN HAS TOO MANY TABS OPEN",
          "SALONI SINGH",
          "BCA GRADUATE",
          "ODISSI CLASSICAL DANCE",
          "STORYTELLING & COMMUNICATION",
          "GRAPHIC DESIGN & CANVA",
          "DATA ANALYTICS & ML",
          "GDG ON CAMPUS LEAD",
          "VISUAL STORYTELLER",
        ]}
      />

      {/* Opening Screen / Hero Section */}
      <HeroSection />

      {/* Section 1: About Me */}
      <AboutSection />

      {/* Interstitial Ticker Ribbon: Creative Mode */}
      <MarqueeTicker
        bg="bg-hot-pink"
        textColor="text-white"
        text={[
          "CREATIVE LAB",
          "CAMPAIGN CONCEPTS",
          "BRAND STORYTELLING",
          "GRAPHIC DESIGN",
          "CREATIVE BRAINSTORMING",
          "VISUAL EXPERIMENTS",
          "TACTILE SCRAPBOOK DESIGN",
        ]}
      />

      {/* Section 2: Creative Lab */}
      <CreativeLabSection />

      {/* Interstitial Ticker Ribbon: Forensic Analytics */}
      <MarqueeTicker
        bg="bg-orange-pop"
        textColor="text-white"
        text={[
          "FORENSIC ANALYTICS",
          "GOOGLE STOCK VOLATILITY",
          "FRAUD DETECTION & ML",
          "NETFLIX NLP SENTIMENT",
          "GOOGLE PLAY INTELLIGENCE",
          "INVESTOR INTELLIGENCE DASHBOARD",
          "NO FAKE STATS",
        ]}
      />

      {/* Section 3: My Analytical Brain */}
      <AnalyticalBrainSection />

      {/* Interstitial Ticker Ribbon: Beyond The Screen */}
      <MarqueeTicker
        bg="bg-electric-blue"
        textColor="text-white"
        text={[
          "BEYOND THE SCREEN",
          "GDG ON CAMPUS",
          "HACKATHONS & SPRINTS",
          "PLACEMENT COORDINATION",
          "CLASSICAL DANCE & CULTURE",
          "COMMUNITY BUILDING",
        ]}
      />

      {/* Section 4: Beyond The Screen */}
      <BeyondTheScreenSection />

      {/* Section 5: Contact */}
      <ContactSection />

      {/* Maximalist Editorial Scrapbook Footer */}
      <Footer />
    </main>
  );
}
