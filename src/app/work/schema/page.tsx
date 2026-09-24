import type { Metadata } from "next";
import Link from "next/link";
import { Body, CaseStudyPage, Section, faint, muted } from "@/components/CaseStudy";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Schema — Phu Nguyen",
};

const subProjects = [
  { href: "/work/schema/mobile", label: "Mobile Work", category: "Product Design · Mobile", year: "2024 - 2026", image: "/schema/mobile.svg", blurb: "Visual course progress, and the shared design file behind the Open edX app." },
  { href: "/work/schema/agentic-design", label: "Agentic Design", category: "Product Design · AI", year: "2026", image: "/schema/agentic.svg", blurb: "Designing through AI agents, and designing the AI interfaces themselves." },
  { href: "/work/schema/design-system", label: "Design System Work", category: "Design Systems", year: "2025 - 2026", image: "/schema/designsystem.svg", blurb: "Components and modules for ClearDemand, plus Paragon, Factor AE, and more." },
];

export default function SchemaPage() {
  return (
    <CaseStudyPage>
      {/* Hero band */}
      <section
        style={{
          backgroundImage: "url('/schema/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "calc(var(--nav-height) + 96px) var(--page-pad-x) 96px",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <Link href="/work" style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.75)", textDecoration: "none", display: "inline-block", marginBottom: "48px" }}>
            ← Work
          </Link>
          <h1 style={{ color: "#fafaf8", fontFamily: "var(--font-display)", fontSize: "clamp(2.75rem, 7vw, 6rem)", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.035em", marginBottom: "16px" }}>
            Schema Education
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}>
            Product Design
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

      <section style={{ padding: "0 var(--page-pad-x) 144px" }}>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
          {subProjects.map(({ href, label, category, year, image, blurb }, i) => (
            <Reveal key={href} delay={i === 0 ? 0 : (i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
              <Link href={href} className="group block" style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  className="w-full overflow-hidden mb-5"
                  style={{ aspectRatio: i === 0 ? "21/9" : "4/3", backgroundColor: "#141414", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <img
                    src={image}
                    alt=""
                    width={24}
                    height={24}
                    loading="lazy"
                    className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    style={{ width: i === 0 ? "28%" : "48%", height: "auto", objectFit: "contain" }}
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="transition-opacity group-hover:opacity-70" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, letterSpacing: "-0.01em" }}>
                    {label}
                  </p>
                  <span style={{ fontSize: "0.8125rem", color: faint, flexShrink: 0 }}>{year}</span>
                </div>
                <p style={{ fontSize: "0.875rem", color: faint, marginTop: "4px" }}>{category}</p>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: muted, marginTop: "12px", maxWidth: "52ch" }}>{blurb}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </CaseStudyPage>
  );
}
