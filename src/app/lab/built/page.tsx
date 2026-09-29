import type { Metadata } from "next";
import { Tile, faint } from "@/components/CaseStudy";
import { built } from "@/lib/built";
import BuiltCarousel from "@/components/BuiltCarousel";

// Private comparison of four ways to show the shipped components. Not linked anywhere.
export const metadata: Metadata = { title: "Lab: Built Components — Phu Nguyen", robots: { index: false, follow: false } };

function Label({ n, title, note }: { n: string; title: string; note: string }) {
  return (
    <div className="mx-auto max-w-[1200px] px-[var(--page-pad-x)]" style={{ paddingTop: "120px", paddingBottom: "40px" }}>
      <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: faint }}>Option {n}</p>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05, marginTop: "8px" }}>{title}</h2>
      <p style={{ fontSize: "1rem", color: "#38383B", marginTop: "10px", maxWidth: "60ch" }}>{note}</p>
    </div>
  );
}

// 1. Current bento grid
function Grid() {
  return (
    <div className="mx-auto max-w-[1200px] px-[var(--page-pad-x)]">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-12">
        {built.map((b) => (
          <div key={b.name} className={b.span}>
            <Tile label={`#${b.pr} · ${b.name}`} src={b.src} width={b.w} height={b.h} alt={b.alt} ratio={b.ratio} />
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. Isometric: the set tilted into a plane that runs off both edges of the page
function Isometric() {
  const cards = [...built, ...built];
  return (
    <div className="relative overflow-hidden" style={{ height: "clamp(560px, 70vw, 980px)", backgroundColor: "#DFE0E1" }}>
      <div
        className="absolute left-1/2 top-1/2 grid grid-cols-6 gap-6"
        style={{ width: "2600px", transform: "translate(-50%, -50%) rotateX(56deg) rotateZ(-38deg)", transformStyle: "preserve-3d" }}
      >
        {cards.map((b, i) => (
          <figure key={i} className="m-0 bg-white" style={{ boxShadow: "-18px 22px 0 rgba(56,56,59,0.14)" }}>
            <figcaption style={{ fontSize: "0.75rem", fontWeight: 500, color: "rgba(56,56,59,0.72)", padding: "10px 12px 0" }}>#{b.pr} · {b.name}</figcaption>
            <img src={b.src} alt={i < built.length ? b.alt : ""} width={b.w} height={b.h} loading="lazy" style={{ display: "block", width: "100%", height: "auto", padding: "12px" }} />
          </figure>
        ))}
      </div>
    </div>
  );
}

// 3. One printed sheet: every component on a single page with crop marks and a title block
function Sheet() {
  const mark = (pos: React.CSSProperties) => <span aria-hidden className="absolute" style={{ width: "22px", height: "22px", ...pos }} />;
  return (
    <div style={{ backgroundColor: "#A8A6A1", padding: "clamp(40px, 7vw, 110px) var(--page-pad-x)" }}>
      <div className="relative mx-auto max-w-[1100px]" style={{ backgroundColor: "#FAFAF8", boxShadow: "0 30px 60px rgba(56,56,59,0.35), 0 2px 6px rgba(56,56,59,0.2)", padding: "clamp(28px, 4vw, 56px)", transform: "rotate(-1deg)" }}>
        {mark({ top: "12px", left: "12px", borderTop: "1px solid #000", borderLeft: "1px solid #000" })}
        {mark({ top: "12px", right: "12px", borderTop: "1px solid #000", borderRight: "1px solid #000" })}
        {mark({ bottom: "12px", left: "12px", borderBottom: "1px solid #000", borderLeft: "1px solid #000" })}
        {mark({ bottom: "12px", right: "12px", borderBottom: "1px solid #000", borderRight: "1px solid #000" })}
        <div className="flex items-end justify-between" style={{ borderBottom: "1px solid #000", paddingBottom: "14px", marginBottom: "24px" }}>
          <div>
            <p style={{ fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>ClearDemand design system</p>
            <p className="font-instrument-serif" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1, marginTop: "6px" }}>Components I shipped</p>
          </div>
          <p style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: "0.6875rem", color: "#38383B", textAlign: "right" }}>{built.length} pieces · 2026<br />Phu Nguyen</p>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-4">
          {built.map((b) => (
            <figure key={b.name} className="m-0">
              <div className="flex items-center justify-center" style={{ aspectRatio: "4/3", backgroundColor: "#fff", boxShadow: "0 0 0 1px rgba(56,56,59,0.14)", padding: "10px" }}>
                <img src={b.src} alt={b.alt} width={b.w} height={b.h} loading="lazy" style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }} />
              </div>
              <figcaption style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: "0.6875rem", marginTop: "8px" }}>#{b.pr} · {b.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

// 4. Two rows scrolling horizontally forever, in opposite directions
function Carousel() {
  return <BuiltCarousel items={built} />;
}

export default function BuiltLab() {
  return (
    <div style={{ paddingTop: "var(--nav-height)", paddingBottom: "160px" }}>
      <Label n="1" title="Bento grid" note="What's on the page now: every component in its own labeled tile." />
      <Grid />
      <Label n="2" title="Isometric, off the edge" note="The whole set tilted onto one plane that runs past the edges of the page." />
      <Isometric />
      <Label n="3" title="One printed sheet" note="Everything grouped on a single sheet with a title block and crop marks, laid on a warm gray surface." />
      <Sheet />
      <Label n="4" title="Continuous carousel" note="Two rows drifting horizontally in opposite directions, forever. Pauses on hover." />
      <Carousel />
    </div>
  );
}
