import type { StaticImageData } from "next/image";

import clubplusplus from "@/public/projects/clubplusplus.png";
import fixture from "@/public/projects/fixture.png";
import livetiming from "@/public/projects/livetiming.png";
import pvptools from "@/public/projects/pvptools.png";

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  /** Tint behind the screenshot, taken from the project's own colours. */
  accent: string;
  code: string;
  url?: string;
  urlstring?: string;
  /**
   * Screenshots from a phone get a phone frame, the rest a browser window. With a `video` (a path
   * under public/ without the extension, with .webm and .mp4 files there plus half-size -sm.webm
   * and -sm.mp4 copies for standard-density screens), the clip plays in its place and the
   * screenshot is its first frame.
   */
  image?: { src: StaticImageData; alt: string; frame: "phone" | "desktop"; video?: string };
};

export const projects: Project[] = [
  {
    name: "Supercars Timing",
    summary:
      "Live timing for Supercars and F1 races. Follow every car's position, lap times, and the gaps between them as they happen. A live 3D map shows where each car is on the track, with insights such as pit windows and battle packs.",
    stack: ["C#", "ASP.NET Core", "React", "TypeScript"],
    accent: "#e2231a",
    code: "https://github.com/J-Haynes/supercars-timing",
    url: "https://timing.jackhaynes.nz",
    urlstring: "timing.jackhaynes.nz",
    image: {
      src: livetiming,
      video: "/projects/livetiming",
      alt: "The Supercars Timing app replaying the first lap of the 2026 Bathurst 1000, with the timing tower and a 3D map of Mount Panorama",
      frame: "desktop",
    },
  },
  {
    name: "Club++",
    summary:
      "A private supermarket loyalty card, built for mobile and installable as a PWA. Generates a barcode on your phone without asking for any personal details, explains what loyalty schemes really do with your data.",
    stack: ["Next.js", "TypeScript"],
    accent: "#fbbf24",
    code: "https://github.com/J-Haynes/clubplusplus",
    url: "https://clubplusplus.nz",
    urlstring: "clubplusplus.nz",
    image: {
      src: clubplusplus,
      video: "/projects/clubplusplus",
      alt: "The Club++ app on a phone, showing a yellow loyalty card with a barcode and a Generate New Card button",
      frame: "phone",
    },
  },
  {
    name: "RuneLite PvP Tools",
    summary:
      "A PvP-focused fork of RuneLite, the popular Old School RuneScape client. Features Discord integration, and several other tools to help players follow their leader's call, stay alive, and win the fight!",
    stack: ["Java", "RuneLite"],
    accent: "#c8a165",
    code: "https://github.com/J-Haynes/Runelite-pgtools",
    image: {
      src: pvptools,
      video: "/projects/pvptools",
      alt: "The RuneLite PvP Tools client during a large clan fight in Old School RuneScape",
      frame: "desktop",
    },
  },
  {
    name: "Fixture",
    summary:
      "Upcoming fixtures and results for my favourite sports in one place. A simple, mobile-first PWA sports app without social/advertising/gambling noise.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    accent: "#10b981",
    code: "https://github.com/J-Haynes/fixture",
    url: "https://fixture.nz",
    urlstring: "fixture.nz",
    image: {
      src: fixture,
      video: "/projects/fixture",
      alt: "The Fixture app on a phone, scrolling through upcoming fixtures and recent results, opening the league menu, and showing the Premier League, A-League and Champions League tables",
      frame: "phone",
    },
  },
];
