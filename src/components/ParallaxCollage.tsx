"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

// A layered collage of screens and components that drift past each other as you scroll.
// Each piece moves at its own speed, so the layers separate like depth.
// Positions and widths are percentages of the stage, so the layout scales with the page.

export type CollagePiece = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Left edge, % of stage width */
  x: number;
  /** Top edge, % of stage height */
  y: number;
  /** Width, % of stage width */
  w: number;
  /** How far it drifts; bigger feels closer */
  speed: number;
  /** Corner radius as a % of the piece's own width */
  radius?: number;
  z?: number;
};

const DRIFT = 320; // px of travel per unit of speed across the section's full scroll

function Piece({ piece, progress, still }: { piece: CollagePiece; progress: MotionValue<number>; still: boolean }) {
  const y = useTransform(progress, [0, 1], [piece.speed * DRIFT, -piece.speed * DRIFT]);
  return (
    <motion.img
      src={piece.src}
      alt={piece.alt}
      width={piece.width}
      height={piece.height}
      loading="lazy"
      className="absolute block"
      style={{
        left: `${piece.x}%`,
        top: `${piece.y}%`,
        width: `${piece.w}%`,
        height: "auto",
        zIndex: piece.z ?? Math.round(piece.speed * 10),
        borderRadius: `${piece.radius ?? 0}% / ${((piece.radius ?? 0) * piece.width) / piece.height}%`,
        boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.35)",
        y: still ? 0 : y,
      }}
    />
  );
}

export default function ParallaxCollage({ pieces, aspectRatio = "1200 / 1150" }: { pieces: CollagePiece[]; aspectRatio?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const still = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[1200px]" style={{ aspectRatio }}>
      {pieces.map((p) => (
        <Piece key={p.src} piece={p} progress={scrollYProgress} still={still} />
      ))}
    </div>
  );
}
