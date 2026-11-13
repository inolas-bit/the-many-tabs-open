"use client";

import React from "react";
import { motion } from "framer-motion";
import { playPopSound } from "@/lib/sound-effects";

interface StickerProps {
  text?: string;
  variant?: "lime" | "pink" | "orange" | "blue" | "black" | "white" | "starburst" | "barcode";
  rotate?: number;
  className?: string;
  subtext?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export function Sticker({
  text = "TAB #01",
  variant = "lime",
  rotate = 2,
  className = "",
  subtext,
  onClick,
  icon,
}: StickerProps) {
  const handleClick = () => {
    playPopSound();
    if (onClick) onClick();
  };

  if (variant === "starburst") {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: rotate + 6 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        style={{ transform: `rotate(${rotate}deg)` }}
        className={`relative inline-flex items-center justify-center cursor-pointer select-none drop-shadow-lg ${className}`}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-28 h-28 sm:w-32 sm:h-32 fill-acid-lime stroke-scrap-black stroke-[3.5] filter drop-shadow-[3px_3px_0px_#151515]"
        >
          <polygon points="60,2 73,26 100,16 96,44 118,58 100,74 104,102 77,94 62,118 47,94 20,102 24,74 6,58 28,44 24,16 51,26" />
          <circle cx="60" cy="60" r="34" className="fill-white stroke-scrap-black stroke-[2.5]" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <span className="font-black text-xs sm:text-sm leading-none text-scrap-black tracking-tight uppercase">
            {text}
          </span>
          {subtext && (
            <span className="font-mono text-[9px] sm:text-[10px] text-orange-pop font-black uppercase mt-1">
              {subtext}
            </span>
          )}
        </div>
      </motion.div>
    );
  }

  if (variant === "barcode") {
    return (
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        onClick={handleClick}
        style={{ transform: `rotate(${rotate}deg)` }}
        className={`inline-flex flex-col bg-white scrap-border p-2 scrap-shadow-sm cursor-pointer select-none ${className}`}
      >
        <div className="h-8 w-28 barcode-lines" />
        <div className="flex justify-between items-center mt-1 font-mono text-[9px] font-bold text-scrap-black">
          <span>{text}</span>
          <span>{subtext || "SS-2024"}</span>
        </div>
      </motion.div>
    );
  }

  const bgStyles = {
    lime: "bg-acid-lime text-scrap-black scrap-shadow-sm hover:bg-[#c9f000]",
    pink: "bg-hot-pink text-white scrap-shadow-sm hover:bg-[#f73890]",
    orange: "bg-orange-pop text-white scrap-shadow-sm hover:bg-[#e84926]",
    blue: "bg-electric-blue text-white scrap-shadow-sm hover:bg-[#2043e0]",
    black: "bg-scrap-black text-acid-lime scrap-shadow-lime hover:bg-[#222]",
    white: "bg-white text-scrap-black scrap-shadow-sm hover:bg-neutral-50",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: rotate - 3, y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={handleClick}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 scrap-border font-bold text-xs uppercase tracking-wider cursor-pointer select-none transition-transform ${bgStyles[variant]} ${className}`}
    >
      {icon && <span className="text-sm">{icon}</span>}
      <span className="font-extrabold">{text}</span>
      {subtext && (
        <span className="font-mono text-[10px] opacity-80 border-l border-current pl-1 ml-1">
          {subtext}
        </span>
      )}
    </motion.div>
  );
}
