"use client";

import { useCallback, useRef, useState } from "react";

type Side = { src: string; alt: string; width: number; height: number; label: string; caption: string };

// Before/after comparison with a draggable divider. The before image sits on top and is clipped to the
// left of the handle. The heading and caption follow whichever side shows more.
// Keyboard: the handle is a slider (arrow keys, Home/End).
export default function BeforeAfter({ before, after, ratio = "4 / 3", surface = "#E9E9E9" }: { before: Side; after: Side; ratio?: string; surface?: string }) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const showing = pos >= 50 ? before : after;
  const img = (s: Side, top: boolean) => (
    <img
      src={s.src}
      alt={s.alt}
      width={s.width}
      height={s.height}
      loading="lazy"
      decoding="async"
      draggable={false}
      className="absolute inset-0 h-full w-full select-none"
      style={{ objectFit: "contain", clipPath: top ? `inset(0 ${100 - pos}% 0 0)` : undefined }}
    />
  );

  return (
    <figure className="m-0">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <p aria-live="polite" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, letterSpacing: "-0.02em" }}>
          {showing.label}
        </p>
        <p style={{ fontSize: "0.8125rem", color: "rgba(56,56,59,0.72)" }}>Drag to compare</p>
      </div>

      <div
        ref={box}
        data-cursor="drag"
        className="relative touch-none select-none overflow-hidden"
        style={{ aspectRatio: ratio, backgroundColor: surface, cursor: "ew-resize" }}
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          moveTo(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        {img(after, false)}
        {/* Opaque backing so the after image never shows around a shorter before image */}
        <div className="absolute inset-0" style={{ backgroundColor: surface, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {img(before, false)}
        </div>

        {/* corner tags */}
        <span className="absolute left-3 top-3 bg-black px-2 py-1 text-[#FAFAF8]" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", opacity: pos > 8 ? 1 : 0, transition: "opacity 200ms" }}>
          {before.label}
        </span>
        <span className="absolute right-3 top-3 bg-[#0F6B6D] px-2 py-1 text-[#FAFAF8]" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", opacity: pos < 92 ? 1 : 0, transition: "opacity 200ms" }}>
          {after.label}
        </span>

        {/* divider and handle */}
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%`, width: "2px", marginLeft: "-1px", backgroundColor: "#000" }} />
        <div
          role="slider"
          tabIndex={0}
          aria-label="Compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% before`}
          onKeyDown={(e) => {
            const step = e.shiftKey ? 10 : 2;
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
            else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
            else if (e.key === "Home") setPos(0);
            else if (e.key === "End") setPos(100);
            else return;
            e.preventDefault();
          }}
          className="absolute top-1/2 flex items-center justify-center bg-black text-[#FAFAF8] outline-none focus-visible:ring-2 focus-visible:ring-[#0F6B6D] focus-visible:ring-offset-2"
          style={{ left: `${pos}%`, width: "44px", height: "44px", transform: "translate(-50%, -50%)", fontSize: "0.875rem", letterSpacing: "0.05em" }}
        >
          <span aria-hidden>‹ ›</span>
        </div>
      </div>

      <figcaption aria-live="polite" style={{ fontSize: "0.8125rem", color: "rgba(56,56,59,0.72)", marginTop: "12px", maxWidth: "80ch" }}>
        {showing.caption}
      </figcaption>
    </figure>
  );
}
