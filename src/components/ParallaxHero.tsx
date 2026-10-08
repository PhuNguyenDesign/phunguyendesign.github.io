"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

// Pins the hero while the page scrolls over it. The hero drifts up at a quarter of the scroll
// speed and dims a little, so the next section reads as sliding in on top of it.
// Pair it with a following wrapper that has a solid background and a higher z-index.
export default function ParallaxHero({ children }: { children: ReactNode }) {
  const still = useReducedMotion() ?? false;
  const { scrollY } = useScroll();
  // Measured in px against a nominal viewport; the clamp keeps it from drifting forever on tall pages
  const y = useTransform(scrollY, [0, 1000], [0, -250], { clamp: true });
  const dim = useTransform(scrollY, [0, 900], [0, 0.35], { clamp: true });

  return (
    <div className="sticky top-0 z-0 overflow-hidden" style={{ height: "100dvh" }}>
      <motion.div className="h-full" style={{ y: still ? 0 : y }}>
        {children}
      </motion.div>
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 bg-black" style={{ opacity: still ? 0 : dim }} />
    </div>
  );
}
