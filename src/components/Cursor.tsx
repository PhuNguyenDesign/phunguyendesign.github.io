"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type Mode = "idle" | "media" | "link" | "drag";

const INTERACTIVE = "a, button, [role='button'], summary, label, select";
const DRAGGABLE = "[role='slider'], [data-cursor='drag']";
const MEDIA = "img, video, picture";

// Size of the ring in each mode, in px
const SIZE: Record<Mode, number> = { idle: 14, media: 56, link: 84, drag: 84 };

// A circular cursor that replaces the system pointer on mouse and trackpad devices.
// Over images it grows into an inverting overlay; over links and buttons it says "View".
// Touch devices keep their default behavior, and text fields keep the text caret.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("idle");
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const reduce = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const spring = reduce ? { stiffness: 2000, damping: 100 } : { stiffness: 700, damping: 45, mass: 0.4 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(fine.matches);
    update();
    fine.addEventListener("change", update);
    return () => fine.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor");

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = e.target as Element | null;
      if (!el?.closest) return;
      if (el.closest(DRAGGABLE)) setMode("drag");
      else if (el.closest(INTERACTIVE)) setMode("link");
      else if (el.closest(MEDIA)) setMode("media");
      else setMode("idle");
    };
    const leave = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const labelled = mode === "link" || mode === "drag";
  const size = SIZE[mode] * (pressed ? 0.85 : 1);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        // Inverting overlay when idle or over media; a solid label disc over links
        mixBlendMode: labelled ? "normal" : "difference",
      }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        backgroundColor: labelled ? "#38383B" : "#FAFAF8",
      }}
      transition={{ duration: reduce ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.span
        animate={{ opacity: labelled ? 1 : 0, scale: labelled ? 1 : 0.6 }}
        transition={{ duration: reduce ? 0 : 0.2 }}
        style={{ color: "#FAFAF8", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}
      >
        {mode === "drag" ? "Drag" : "View"}
      </motion.span>
    </motion.div>
  );
}
