"use client";

import React from "react";

interface MarqueeTickerProps {
  text?: string[];
  direction?: "left" | "right";
  bg?: string;
  textColor?: string;
  borderColor?: string;
  className?: string;
}

export function MarqueeTicker({
  text = [
    "SORRY MY BRAIN HAS TOO MANY TABS OPEN",
    "BCA GRADUATE",
    "KATHAK & CLASSICAL DANCE",
    "DATA ANALYTICS & ML",
    "CREATIVE STRATEGIST",
    "GDG ON CAMPUS",
    "128 TABS ACTIVE",
    "VISUAL STORYTELLER",
  ],
  bg = "bg-acid-lime",
  textColor = "text-scrap-black",
  className = "",
}: MarqueeTickerProps) {
  const repeated = [...text, ...text, ...text, ...text];

  return (
    <div
      className={`w-full overflow-hidden whitespace-nowrap scrap-border py-2.5 ${bg} ${textColor} select-none ${className}`}
    >
      <div className="inline-flex animate-[marquee_22s_linear_infinite] items-center space-x-6 font-mono font-black text-sm uppercase tracking-widest">
        {repeated.map((item, index) => (
          <span key={index} className="inline-flex items-center gap-4">
            <span>{item}</span>
            <span className="text-orange-pop">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
