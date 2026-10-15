import type { StaticImageData } from "next/image";

import clubplusplus from "@/public/projects/clubplusplus.png";
import fixture from "@/public/projects/fixture.png";
import supercarsTiming from "@/public/projects/SupercarsTiming.png"
import pvptools from "@/public/projects/pvptools.jpg"


export type Project = {
  name: string;
  summary: string;
  stack: string[];
  /** Tint behind the screenshot, taken from the project's own colours. */
  accent: string;
  code: string;
  site?: string;
  /**
   * Screenshots from a phone get a phone frame, the rest a browser window. With a `video` (a path
   * under public/ without the extension, with .webm and .mp4 files there), the clip plays in its
   * place and the screenshot is its first frame.
   */
  image?: { src: StaticImageData; alt: string; frame: "phone" | "desktop"; video?: string };
};

export const projects: Project[] = [
  {
    name: "Supercars Timing",
    summary:
      "Live timing for Supercars and F1 races. Follow every car's position, lap times and the gaps between them as they happen, with a live 3D map showing where each car is on the track.",
    stack: ["C#", "ASP.NET Core", "React", "TypeScript"],
    accent: "#e2231a",
    code: "https://github.com/J-Haynes/supercars-timing",
    image: {
      src: supercarsTiming,
      alt: "The Supercars Timing app",
      frame: "desktop"
    }
  },
  {
    name: "Club++",
    summary:
      "A mobile first PWA for a private supermarket loyalty card. Generates a barcode on your phone without asking for any personal details, explains what loyalty schemes really do with your data.",
    stack: ["Next.js", "TypeScript"],
    accent: "#fbbf24",
    code: "https://github.com/J-Haynes/clubplusplus",
    site: "https://clubplusplus.nz",
    image: {
      src: clubplusplus,
      video: "/projects/clubplusplus",
      alt: "The Club++ app on a phone, showing a yellow loyalty card with a barcode and a Generate New Card button",
      frame: "phone",
    },
  },
  {
    name: "RuneLite PG Tools",
    summary:
      "A pvp focussed fork of the popular Old School Runescape client 'Runelite'. Features a Discord integration, and several other tools to help players follow their leader's call, stay alive, and win the fight!",
    stack: ["Java", "RuneLite"],
    accent: "#c8a165",
    code: "https://github.com/J-Haynes/Runelite-pgtools",
    image: {
      src: pvptools,
      alt: "The pvptools Runelite Fork",
      frame: "desktop"
    }
  },
  {
    name: "Fixture",
    summary:
      "Every upcoming match for my favourite sports in one place, from Supercars and Formula 1 to Super Rugby, with results once the games are over.",
    stack: ["Next.js", "TypeScript"],
    accent: "#10b981",
    code: "https://github.com/J-Haynes/fixture",
    site: "https://sportsapp-five.vercel.app",
    image: {
      src: fixture,
      video: "/projects/fixture",
      alt: "The Fixture app on a phone, scrolling through upcoming Super Rugby, NRL, Supercars and Formula 1 fixtures",
      frame: "phone",
    },
  },
];
