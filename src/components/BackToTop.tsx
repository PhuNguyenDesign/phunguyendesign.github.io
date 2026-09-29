"use client";

import { useEffect, useState } from "react";

// Appears in the bottom-right corner on long pages once you've scrolled past the first screen and a half.
// Short pages never show it.
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => {
      const long = document.documentElement.scrollHeight > window.innerHeight * 2.5;
      setShow(long && window.scrollY > window.innerHeight * 1.5);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("main")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className="fixed z-40 flex items-center gap-2 bg-black text-[#FAFAF8] transition-[opacity,transform,background-color] duration-300 hover:bg-[#0F6B6D] focus-visible:bg-[#0F6B6D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:translate-y-px motion-reduce:transition-none"
      style={{
        right: "clamp(16px, 3vw, 32px)",
        bottom: "clamp(16px, 3vw, 32px)",
        padding: "12px 16px",
        fontSize: "0.75rem",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(12px)",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <span aria-hidden>↑</span>
      <span className="hidden sm:inline">Back to top</span>
    </button>
  );
}
