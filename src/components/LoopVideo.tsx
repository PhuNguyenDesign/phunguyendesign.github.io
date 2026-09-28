"use client";

import { useReducedMotion } from "framer-motion";

// A silent video that loops like a GIF, at a fraction of a GIF's file size.
// With reduced motion on, it stays on the poster frame and shows controls instead.
export default function LoopVideo({ src, poster, label, width, height, radius }: { src: string; poster: string; label: string; width: number; height: number; radius?: string }) {
  const reduce = useReducedMotion();
  return (
    <video
      key={reduce ? "still" : "loop"}
      src={src}
      poster={poster}
      width={width}
      height={height}
      aria-label={label}
      autoPlay={!reduce}
      controls={!!reduce}
      loop
      muted
      playsInline
      preload="metadata"
      style={{ display: "block", height: "100%", width: "auto", maxWidth: "100%", objectFit: "contain", borderRadius: radius }}
    />
  );
}
