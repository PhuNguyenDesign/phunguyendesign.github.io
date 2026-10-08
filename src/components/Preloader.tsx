"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import { HERO_NAME_STYLE, HERO_NAME_TEXT } from "@/lib/heroName";

// Black intro with a teal mark and name, after Il Capo's: the NP mark above the name, with a 0–100 counter at the bottom.
// At 100 a small window opens between them, then grows to fill the screen. As it grows the mark
// flies into the nav logo's spot and the name scales into the hero headline's spot, then both
// hand off to the real ones. The window opening drops a splash into the hero water.
//
// The mark and name are drawn twice in lockstep: a teal copy clipped to the black sheet, and a copy
// clipped to the window that uses the hero headline's difference blend, so whatever part sits over
// the page reads black on paper and inverted over the photo at every moment of the flight.

const SHEET = "#000000";
const TEAL = "#0F6B6D";
const PAPER = "#FAFAF8";
const GAP = 28; // px between the window and the mark / name
const LOGO_W = 120; // preloader mark width; its height follows the 34 x 40 viewBox
const LOGO_H = (LOGO_W * 40) / 34;
const MIN_COUNT_MS = 1400; // the counter never finishes faster than this
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function Preloader() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"count" | "open" | "done">("count");
  const [count, setCount] = useState(0);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const nameRefB = useRef<HTMLParagraphElement>(null);

  const vw = useMotionValue(0), vh = useMotionValue(0);
  // Window size in px; 0 x 0 until the counter finishes
  const w = useMotionValue(0), h = useMotionValue(0);
  // 0 = intro layout, 1 = landed on the nav logo and the hero headline
  const fly = useMotionValue(0);
  // Natural size of the name copy, and where the mark and name land
  const nw = useMotionValue(1), nh = useMotionValue(1);
  const logoTo = { x: useMotionValue(0), y: useMotionValue(0), s: useMotionValue(1) };
  const nameTo = { x: useMotionValue(0), y: useMotionValue(0), hasTarget: useMotionValue(0) };
  const nameOpacity = useMotionValue(1);
  const logoOpacity = useMotionValue(1);

  // A black sheet with a rectangular hole cut out of the middle
  const clip = useTransform(() => {
    const cx = vw.get() / 2, cy = vh.get() / 2;
    const x1 = cx - w.get() / 2, x2 = cx + w.get() / 2, y1 = cy - h.get() / 2, y2 = cy + h.get() / 2;
    return `polygon(evenodd, 0 0, 100% 0, 100% 100%, 0 100%, 0 0, ${x1}px ${y1}px, ${x2}px ${y1}px, ${x2}px ${y2}px, ${x1}px ${y2}px, ${x1}px ${y1}px)`;
  });
  // Just the window
  const windowClip = useTransform(() => {
    const sideX = Math.max(0, (vw.get() - w.get()) / 2), sideY = Math.max(0, (vh.get() - h.get()) / 2);
    return `inset(${sideY}px ${sideX}px ${sideY}px ${sideX}px)`;
  });

  // Mark: centered above the window, then flies to the nav logo
  const logoX = useTransform(() => lerp(vw.get() / 2 - LOGO_W / 2, logoTo.x.get(), fly.get()));
  const logoY = useTransform(() => lerp(vh.get() / 2 - h.get() / 2 - GAP - LOGO_H, logoTo.y.get(), fly.get()));
  const logoS = useTransform(() => lerp(1, logoTo.s.get(), fly.get()));

  // Name: shown small under the window at first (it is set at the headline's full size and scaled down)
  const introScale = useTransform(() => Math.min(vw.get() * 0.34, 440) / nw.get());
  const nameS = useTransform(() => (nameTo.hasTarget.get() ? lerp(introScale.get(), 1, fly.get()) : introScale.get() * lerp(1, 1.6, fly.get())));
  const nameX = useTransform(() => {
    const introX = vw.get() / 2 - (nw.get() * introScale.get()) / 2;
    return nameTo.hasTarget.get() ? lerp(introX, nameTo.x.get(), fly.get()) : vw.get() / 2 - (nw.get() * nameS.get()) / 2;
  });
  const nameY = useTransform(() => {
    const introY = vh.get() / 2 + h.get() / 2 + GAP;
    return nameTo.hasTarget.get() ? lerp(introY, nameTo.y.get(), fly.get()) : introY;
  });

  // Match the headline's size so scaling lands exactly on it
  const measure = () => {
    const el = nameRef.current;
    if (!el) return;
    const headline = document.querySelector<HTMLElement>("[data-hero-name]");
    el.style.fontSize = headline ? getComputedStyle(headline).fontSize : "12vw";
    if (nameRefB.current) nameRefB.current.style.fontSize = el.style.fontSize;
    nw.set(el.offsetWidth || 1);
    nh.set(el.offsetHeight || 1);
  };

  useEffect(() => {
    const size = () => { vw.set(window.innerWidth); vh.set(window.innerHeight); measure(); };
    size();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", size);
    return () => window.removeEventListener("resize", size);
    // measure only reads refs and stable motion values
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hide the page's own copy of the name while this one flies in
  useEffect(() => {
    if (reduce) return;
    document.documentElement.dataset.intro = "on";
    return () => { delete document.documentElement.dataset.intro; };
  }, [reduce]);

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

  // Open the small window, hold a beat, then grow it while the mark and name fly home
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

      measure();
      const navLogo = document.querySelector<SVGElement>("[data-nav-logo]")?.getBoundingClientRect();
      if (navLogo) { logoTo.x.set(navLogo.left); logoTo.y.set(navLogo.top); logoTo.s.set(navLogo.width / LOGO_W); }
      else { logoTo.x.set(vw.get() / 2 - LOGO_W / 2); logoTo.y.set(-LOGO_H); }
      const headline = document.querySelector<HTMLElement>("[data-hero-name]")?.getBoundingClientRect();
      if (headline && headline.width) { nameTo.x.set(headline.left); nameTo.y.set(headline.top); nameTo.hasTarget.set(1); }

      window.dispatchEvent(new Event("hero:splash"));
      await Promise.all([
        animate(w, window.innerWidth + 4, { duration: 1.15, ease: EASE }),
        animate(h, window.innerHeight + 4, { duration: 1.15, ease: EASE }),
        animate(fly, 1, { duration: 1.15, ease: EASE }),
        headline ? Promise.resolve() : animate(nameOpacity, 0, { duration: 0.6, ease: "easeOut" }),
        navLogo ? Promise.resolve() : animate(logoOpacity, 0, { duration: 0.6, ease: "easeOut" }),
      ]);
      if (cancelled) return;

      // Hand off to the real logo and headline in the same frame. No crossfade: both copies use a
      // difference blend, so overlapping them would cancel each other out to gray.
      delete document.documentElement.dataset.intro;
      window.dispatchEvent(new Event("intro:done"));
      setPhase("done");
    };
    run();
    return () => { cancelled = true; };
    // motion values are stable; this runs once when the counter finishes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (phase === "done") return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-[9998]"
        style={{ backgroundColor: SHEET, clipPath: reduce ? undefined : clip, pointerEvents: phase === "open" ? "none" : "auto" }}
        animate={reduce ? { opacity: [1, 1, 0] } : undefined}
        transition={reduce ? { duration: 0.9, times: [0, 0.6, 1] } : undefined}
      >
        <motion.p
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ opacity: phase === "open" ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{ color: PAPER, fontSize: "0.75rem", letterSpacing: "0.18em", fontVariantNumeric: "tabular-nums", margin: 0 }}
        >
          {count}
        </motion.p>
      </motion.div>

      {!reduce && (
        <>
          {/* Teal copy over the black */}
          <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9998]" style={{ clipPath: clip }}>
            <Flyer x={logoX} y={logoY} scale={logoS} opacity={logoOpacity}><Mark color={TEAL} /></Flyer>
            <Flyer x={nameX} y={nameY} scale={nameS} opacity={nameOpacity}><Name textRef={nameRef} color={TEAL} /></Flyer>
          </motion.div>
          {/* Inverting copy inside the window, blended as one group against the page */}
          <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9998]" style={{ clipPath: windowClip, mixBlendMode: "difference" }}>
            <Flyer x={logoX} y={logoY} scale={logoS} opacity={logoOpacity}><Mark color={PAPER} /></Flyer>
            <Flyer x={nameX} y={nameY} scale={nameS} opacity={nameOpacity}><Name textRef={nameRefB} color={PAPER} /></Flyer>
          </motion.div>
        </>
      )}
    </>
  );
}

function Mark({ color }: { color: string }) {
  return (
    <motion.svg
      width={LOGO_W}
      height={LOGO_H}
      viewBox="0 0 34 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ color, display: "block" }}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <path d="M0 33.1127H9.14833V30.0672H6.09105V11.7705L21.3422 33.1127H27.445V30.0672H24.3877V20.0487H21.3422V27.4568L6.09105 6.10281H0V9.14834H3.04552V30.0672H0V33.1127Z" fill="currentColor" />
      <path d="M21.3422 13.5108V9.14834H18.2966V6.10281H27.445V9.14834H24.3877V13.5108H21.3422Z" fill="currentColor" />
      <path d="M15.2394 36.1465V27.5743L12.1938 23.3177V36.1465H9.14832V39.2155H18.2966V36.1465H15.2394Z" fill="currentColor" />
      <path d="M9.14832 0V3.05728H12.1938V11.6294L15.2394 15.9096V3.05728H30.4905V15.2511H16.9914V18.2967H33.5478V0H9.14832Z" fill="currentColor" />
    </motion.svg>
  );
}

function Name({ textRef, color }: { textRef: React.RefObject<HTMLParagraphElement | null>; color: string }) {
  return (
    <div className="overflow-hidden">
      <motion.p
        ref={textRef}
        aria-hidden="true"
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{ ...HERO_NAME_STYLE, color, margin: 0, width: "max-content", fontSize: "12vw" }}
      >
        {HERO_NAME_TEXT}
      </motion.p>
    </div>
  );
}

// A layer positioned by translate and scale from its top-left corner, inside a full-screen clip
function Flyer({ x, y, scale, opacity, children }: { x: MotionValue<number>; y: MotionValue<number>; scale: MotionValue<number>; opacity: MotionValue<number>; children: React.ReactNode }) {
  return (
    <motion.div className="absolute left-0 top-0" style={{ x, y, scale, opacity, transformOrigin: "0 0" }}>
      {children}
    </motion.div>
  );
}
