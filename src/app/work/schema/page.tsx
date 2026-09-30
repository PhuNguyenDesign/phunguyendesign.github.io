import type { Metadata } from "next";
import Link from "next/link";
import { Body, CaseStudyPage, Section, faint, muted } from "@/components/CaseStudy";
import Reveal from "@/components/Reveal";
import PrTickets from "@/components/PrTickets";

export const metadata: Metadata = {
  title: "Schema — Phu Nguyen",
};

const subProjects = [
  { href: "/work/schema/mobile", label: "Mobile Work", category: "Product Design · Mobile", year: "2024 - 2026", image: "/schema/mobile.svg", preview: "/schema/mobile/collage-still.jpg", blurb: "Visual course progress, and the shared design file behind the Open edX app." },
  { href: "/work/schema/agentic-design", label: "Agentic Design", category: "Product Design · AI", year: "2026", image: "/schema/agentic.svg", blurb: "Designing through AI agents, and designing the AI interfaces themselves." },
  { href: "/work/schema/design-system", label: "Design System Work", category: "Design Systems", year: "2025 - 2026", image: "/schema/designsystem.svg", preview: "/schema/design-system/collage-still.jpg", blurb: "Components and modules for a retail analytics platform, plus Paragon and more." },
];

const [mobile, agentic, system] = subProjects;

// A tall still that pans from top to bottom on hover or focus, like scrolling the page.
function Pan({ src, ratio }: { src: string; ratio: string }) {
  return (
    <div
      aria-hidden
      className="w-full bg-top transition-[background-position] duration-[6000ms] ease-in-out group-hover:bg-bottom group-focus-visible:bg-bottom motion-reduce:transition-none motion-reduce:group-hover:bg-top"
      style={{ aspectRatio: ratio, backgroundColor: "#DFE0E1", backgroundImage: `url('${src}')`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat" }}
    />
  );
}

export default function SchemaPage() {
  return (
    <CaseStudyPage>
      {/* Hero band in palette teal */}
      <section style={{ backgroundColor: "#0F6B6D", padding: "calc(var(--nav-height) + 96px) var(--page-pad-x) 96px" }}>
        <div className="mx-auto max-w-[1200px]">
          <Link href="/work" style={{ fontSize: "0.8125rem", color: "rgba(250,250,248,0.75)", textDecoration: "none", display: "inline-block", marginBottom: "48px" }}>
            ← Work
          </Link>
          <h1 style={{ color: "#FAFAF8", fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 9vw, 8rem)", fontWeight: 600, lineHeight: 0.92, letterSpacing: "-0.045em", marginBottom: "20px" }}>
            Schema Education
          </h1>
          <p className="font-instrument-serif italic" style={{ color: "rgba(250,250,248,0.9)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            Product design, 2024 to now.
          </p>
        </div>
      </section>

      <Section title="Overview">
        <Body>
          I’ve been a product designer at Schema, a design and product agency, since April 2024. My client work spans
          Open edX, ClearDemand, and Factor AE, from the native Open edX mobile learning experience to component libraries
          for data-heavy B2B products.
        </Body>
        <Body last>
          My work covers a lot of ground: product thinking and client conversations, interaction design, design systems,
          keeping shared design files people can trust, and more recently designing directly in code with AI agents.
          Whatever the project, I bring a visual eye to it, with type, color, and hierarchy that make dense screens feel
          coherent.
        </Body>
      </Section>

      {/* Three projects, three treatments: a full-bleed panorama, a type-led row, and an offset tall preview */}
      <section style={{ padding: "0 var(--page-pad-x) 160px" }}>
        <div className="mx-auto flex max-w-[1200px] flex-col" style={{ gap: "clamp(96px, 12vw, 160px)" }}>
          {/* 01 Mobile: panorama that breaks out of the column */}
          <Reveal>
            <Link href={mobile.href} className="group block" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="relative left-1/2 w-[min(calc(100vw-32px),1440px)] -translate-x-1/2">
                <Pan src={mobile.preview!} ratio="21/8" />
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
                <p className="md:col-span-2" style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: faint }}>01</p>
                <div className="md:col-span-6">
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1 }} className="transition-colors group-hover:text-[#0F6B6D]">{mobile.label}</p>
                  <p style={{ fontSize: "0.875rem", color: faint, marginTop: "8px" }}>{mobile.category} · {mobile.year}</p>
                </div>
                <p className="font-instrument-serif md:col-span-4" style={{ fontSize: "1.375rem", lineHeight: 1.3, color: muted }}>{mobile.blurb}</p>
              </div>
            </Link>
          </Reveal>

          {/* 02 Agentic: type-led, the serif does the work; small artifact on warm gray */}
          <Reveal>
            <Link href={agentic.href} className="group grid grid-cols-1 items-end gap-8 md:grid-cols-12" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="md:col-span-7">
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: faint, marginBottom: "20px" }}>02 · {agentic.category} · {agentic.year}</p>
                <p className="font-instrument-serif transition-colors group-hover:text-[#0F6B6D]" style={{ fontSize: "clamp(2.75rem, 6.5vw, 6rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                  <span className="italic">{agentic.label}.</span>
                </p>
                <p style={{ fontSize: "1rem", lineHeight: 1.6, color: muted, marginTop: "20px", maxWidth: "44ch" }}>{agentic.blurb}</p>
              </div>
              {/* My merged PRs as tickets; they scroll only while this card is hovered */}
              <div className="md:col-span-4 md:col-start-9" style={{ aspectRatio: "4/5", backgroundColor: "#A8A6A1", padding: "0 14px" }}>
                <PrTickets columns={2} />
              </div>
            </Link>
          </Reveal>

          {/* 03 Design System: tall preview offset right, text anchored low on the left */}
          <Reveal>
            <Link href={system.href} className="group grid grid-cols-1 items-end gap-8 md:grid-cols-12" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="order-2 md:order-1 md:col-span-4">
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: faint, marginBottom: "16px" }}>03</p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1 }} className="transition-colors group-hover:text-[#0F6B6D]">{system.label}</p>
                <p style={{ fontSize: "0.875rem", color: faint, marginTop: "8px" }}>{system.category} · {system.year}</p>
                <p style={{ fontSize: "1rem", lineHeight: 1.6, color: muted, marginTop: "16px", maxWidth: "40ch" }}>{system.blurb}</p>
              </div>
              <div className="order-1 md:order-2 md:col-span-8 md:-mr-[4vw]">
                <Pan src={system.preview!} ratio="5/4" />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </CaseStudyPage>
  );
}
