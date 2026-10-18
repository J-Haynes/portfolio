import type { Metadata, Viewport } from "next";
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

const description = "Jack Haynes, Melbourne, Australia. Recent projects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jackhaynes.dev"),
  title: "Jack Haynes",
  description,
  openGraph: {
    title: "Jack Haynes",
    description,
    url: "/",
    siteName: "Jack Haynes",
    locale: "en_AU",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0b0a09",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
