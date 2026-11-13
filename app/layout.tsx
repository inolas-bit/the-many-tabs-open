import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saloni Singh — The Many Tabs Open in My Head",
  description:
    "Maximalist editorial scrapbook portfolio of Saloni Singh — BCA graduate, tech enthusiast, creative thinker, classical dancer, and visual storyteller.",
  keywords: [
    "Saloni Singh",
    "Portfolio",
    "The Many Tabs Open in My Head",
    "Data Analytics",
    "Creative Direction",
    "Odissi",
    "Storytelling",
    "Graphic Design",
    "Canva",
    "Communication",
    "BCA Graduate",
    "Google Stock Analytics",
    "Fraud Detection",
    "GDG on Campus"
  ],
  authors: [{ name: "Saloni Singh" }],
  openGraph: {
    title: "Saloni Singh — The Many Tabs Open in My Head",
    description: "Sorry, my brain has too many tabs open. Too many ideas. Not enough tabs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-warm-white text-scrap-black antialiased selection:bg-acid-lime selection:text-scrap-black">
        {children}
      </body>
    </html>
  );
}
