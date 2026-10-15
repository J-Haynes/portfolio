"use client";

import { useEffect, useRef } from "react";

/** `src` is the clip's path without an extension. */
type Props = { src: string; poster: string; width: number; height: number; label: string };

/** A silent looping clip that plays only while on screen, and not at all for reduced motion. */
export default function ProjectVideo({ src, poster, width, height, label }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Starts loading a little before it scrolls into view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      poster={poster}
      width={width}
      height={height}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
    >
      {/* Smaller WebM where supported, MP4 everywhere else. */}
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
    </video>
  );
}
