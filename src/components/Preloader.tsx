"use client";

import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

// Teal intro: the NP mark above the name, with a 0–100 counter at the bottom. At 100 a small window
// opens between the mark and the name, then grows until it fills the screen and the page is underneath.
// As it starts to grow it drops a splash into the hero water (HeroRipple listens for "hero:splash").

const TEAL = "#0F6B6D";
const PAPER = "#FAFAF8";
const GAP = 28; // px between the window and the mark / name
const MIN_COUNT_MS = 1400; // the counter never finishes faster than this
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Preloader() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"count" | "open" | "done">("count");
  const [count, setCount] = useState(0);

  // Window size in px; 0 x 0 until the counter finishes
  const w = useMotionValue(0);
  const h = useMotionValue(0);
  const vw = useMotionValue(0);
  const vh = useMotionValue(0);
  const textOpacity = useMotionValue(1);

  // A paper-colored sheet with a rectangular hole cut out of the middle
  const clip = useTransform(() => {
    const cx = vw.get() / 2, cy = vh.get() / 2;
    const x1 = cx - w.get() / 2, x2 = cx + w.get() / 2, y1 = cy - h.get() / 2, y2 = cy + h.get() / 2;
    return `polygon(evenodd, 0 0, 100% 0, 100% 100%, 0 100%, 0 0, ${x1}px ${y1}px, ${x2}px ${y1}px, ${x2}px ${y2}px, ${x1}px ${y2}px, ${x1}px ${y1}px)`;
  });
  const markY = useTransform(() => -(h.get() / 2 + GAP));
  const nameY = useTransform(() => h.get() / 2 + GAP);

  useEffect(() => {
    const size = () => { vw.set(window.innerWidth); vh.set(window.innerHeight); };
    size();
    window.addEventListener("resize", size);
    return () => window.removeEventListener("resize", size);
  }, [vw, vh]);

  // Count up, then wait for the page to finish loading before landing on 100
  useEffect(() => {
    if (reduce) {
      const t = setTimeout(() => setPhase("done"), 900);
      return () => clearTimeout(t);
    }
    let loaded = document.readyState === "complete";
    const onLoad = () => { loaded = true; };
    window.addEventListener("load", onLoad);
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / MIN_COUNT_MS);
      // Ease out, and hold at 90 until the page has loaded
      const target = Math.round((1 - Math.pow(1 - t, 3)) * (loaded ? 100 : 90));
      setCount((c) => Math.max(c, target));
      if (t >= 1 && loaded) { setCount(100); setPhase("open"); return; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("load", onLoad); };
  }, [reduce]);

  // Open the small window, hold a beat, then grow it to the full screen
  useEffect(() => {
    if (phase !== "open") return;
    let cancelled = false;
    const run = async () => {
      const smallW = Math.min(window.innerWidth * 0.28, 380);
      await Promise.all([
        animate(w, smallW, { duration: 0.6, ease: EASE }),
        animate(h, smallW * 0.6, { duration: 0.6, ease: EASE }),
      ]);
      await new Promise((r) => setTimeout(r, 220));
      if (cancelled) return;
      window.dispatchEvent(new Event("hero:splash"));
      animate(textOpacity, 0, { duration: 0.35, ease: "easeOut" });
      await Promise.all([
        animate(w, window.innerWidth + 4, { duration: 1.05, ease: EASE }),
        animate(h, window.innerHeight + 4, { duration: 1.05, ease: EASE }),
      ]);
      if (!cancelled) setPhase("done");
    };
    run();
    return () => { cancelled = true; };
  }, [phase, w, h, textOpacity]);

  if (phase === "done") return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[9998]"
      style={{ backgroundColor: TEAL, clipPath: reduce ? undefined : clip, pointerEvents: phase === "open" ? "none" : "auto" }}
      animate={reduce ? { opacity: [1, 1, 0] } : undefined}
      transition={reduce ? { duration: 0.9, times: [0, 0.6, 1] } : undefined}
    >
      <motion.div className="absolute left-1/2 top-1/2" style={{ y: markY, opacity: textOpacity }}>
        <div className="-translate-x-1/2 -translate-y-full">
        <motion.svg
          width="72"
          height="85"
          viewBox="0 0 34 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <path d="M0 33.1127H9.14833V30.0672H6.09105V11.7705L21.3422 33.1127H27.445V30.0672H24.3877V20.0487H21.3422V27.4568L6.09105 6.10281H0V9.14834H3.04552V30.0672H0V33.1127Z" fill={PAPER} />
          <path d="M21.3422 13.5108V9.14834H18.2966V6.10281H27.445V9.14834H24.3877V13.5108H21.3422Z" fill={PAPER} />
          <path d="M15.2394 36.1465V27.5743L12.1938 23.3177V36.1465H9.14832V39.2155H18.2966V36.1465H15.2394Z" fill={PAPER} />
          <path d="M9.14832 0V3.05728H12.1938V11.6294L15.2394 15.9096V3.05728H30.4905V15.2511H16.9914V18.2967H33.5478V0H9.14832Z" fill={PAPER} />
        </motion.svg>
        </div>
      </motion.div>

      <motion.div className="absolute left-1/2 top-1/2" style={{ y: nameY, opacity: textOpacity }}>
        <div className="-translate-x-1/2 overflow-hidden">
        <motion.p
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ color: PAPER, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)", letterSpacing: "0.2em", textTransform: "uppercase", margin: 0, whiteSpace: "nowrap" }}
        >
          Phu Nguyen
        </motion.p>
        </div>
      </motion.div>

      <motion.p
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ opacity: phase === "open" ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        style={{ color: PAPER, fontSize: "0.75rem", letterSpacing: "0.18em", fontVariantNumeric: "tabular-nums", margin: 0 }}
      >
        {count}
      </motion.p>
    </motion.div>
  );
}
