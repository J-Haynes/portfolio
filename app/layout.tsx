import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

// One family; its width axis sets the name extra-wide and the body at normal width.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const description = "Jack Haynes, software developer in Melbourne, Australia. Recent projects.";

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
  themeColor: "#1c1f22",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
