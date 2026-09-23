"use client";

import { motion, useReducedMotion } from "framer-motion";

export type FloatFrom = "left" | "right" | "up";

const start: Record<FloatFrom, { x?: number; y?: number; scale?: number }> = {
  left: { x: -56 },
  right: { x: 56 },
  up: { y: 40, scale: 0.96 },
};

// Drifts an image toward its resting place as it enters the viewport.
// Pairs come in from their outer edges, so they meet in the middle.
export default function FloatIn({ children, from = "up", delay = 0 }: { children: React.ReactNode; from?: FloatFrom; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, ...start[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
