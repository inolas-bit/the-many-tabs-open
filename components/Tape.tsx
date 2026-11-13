"use client";

import React from "react";

interface TapeProps {
  color?: "white" | "yellow" | "pink" | "blue" | "lime";
  className?: string;
  angle?: number;
  width?: string;
}

export function Tape({
  color = "yellow",
  className = "",
  angle = -3,
  width = "w-28",
}: TapeProps) {
  const colorStyles = {
    white: "bg-white/80 border-black/20 text-scrap-black",
    yellow: "bg-[#FDFFA6]/85 border-black/20 text-scrap-black",
    pink: "bg-[#FFB6D9]/85 border-black/20 text-scrap-black",
    blue: "bg-[#B4D0FF]/85 border-black/20 text-scrap-black",
    lime: "bg-[#D7FF00]/85 border-black/20 text-scrap-black",
  };

  return (
    <div
      style={{ transform: `rotate(${angle}deg)` }}
      className={`h-6 ${width} ${colorStyles[color]} washi-tape flex items-center justify-center font-mono text-[9px] tracking-widest uppercase select-none pointer-events-none z-20 ${className}`}
    >
      <span className="opacity-50">/// TAPE ///</span>
    </div>
  );
}
