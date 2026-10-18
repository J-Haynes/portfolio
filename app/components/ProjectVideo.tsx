"use client";

import { useEffect, useRef } from "react";

const LOW_DENSITY = "(max-resolution: 1.5dppx)";

/** `src` is the clip's path without an extension, with a half-size `-sm` copy beside it. */
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

  // The poster's URL carries a hash of its contents, so a re-recorded clip (and its new first
  // frame) gets a new URL instead of browsers resuming stale byte ranges of the old file.
  const version = poster.match(/\.([\w-]+)\.\w+$/)?.[1] ?? "";
  const query = version && `?v=${version}`;

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
      {/* Standard-density screens get the half-size clips. Browsers shrink video with a cheap filter
          that turns small text jagged past about 2x, and the full-size clips shrink nearly 3x there. */}
      <source src={`${src}-sm.webm${query}`} type="video/webm" media={LOW_DENSITY} />
      <source src={`${src}-sm.mp4${query}`} type="video/mp4" media={LOW_DENSITY} />
      {/* Smaller WebM where supported, MP4 everywhere else. */}
      <source src={`${src}.webm${query}`} type="video/webm" />
      <source src={`${src}.mp4${query}`} type="video/mp4" />
    </video>
  );
}
