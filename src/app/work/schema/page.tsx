import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schema — Phu Nguyen",
};

export default function SchemaPage() {
  return (
    <div style={{ backgroundColor: "#fff", color: "#1a1a1a", fontFamily: "var(--font-text)" }}>

      {/* Hero */}
      <section
        style={{
          backgroundImage: "url('/schema/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "calc(var(--nav-height) + 80px)",
          paddingBottom: "80px",
          textAlign: "center",
        }}
      >
        <div style={{ paddingLeft: "var(--page-pad-x)", paddingRight: "var(--page-pad-x)" }}>
          <h1 style={{ color: "#fff", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "16px" }}>
            Schema Education
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 400 }}>
            Product Design
          </p>
        </div>
      </section>

      {/* Overview */}
      <section style={{ backgroundColor: "#000", color: "#fff", padding: "80px var(--page-pad-x)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.2)", marginBottom: "48px" }} />
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "32px" }}>
            01 – Overview
          </h2>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: "65ch", marginBottom: "20px" }}>
            I&apos;ve been a product designer at Schema, a design and product agency, since April 2024. My client work spans
            Open edX, ClearDemand, and Factor AE, from the native Open edX mobile learning experience to component libraries
            for data-heavy B2B products.
          </p>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: "65ch", marginBottom: "64px" }}>
            Most of my work sits where design meets systems. I design the states and patterns a product is built from, keep
            shared design files trustworthy for the teams that rely on them, and, more recently, design directly in code
            with AI agents.
          </p>

          {/* Sub-project cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              { href: "/work/schema/mobile", label: "Mobile Work", category: "Product Design · Mobile", year: "2024 – 2026", image: "/schema/mobile.svg", blurb: "Visual course progress, and the shared design file behind the Open edX app." },
              { href: "/work/schema/agentic-design", label: "Agentic Design", category: "Product Design · AI", year: "2026", image: "/schema/agentic.svg", blurb: "Designing through AI agents, and designing the AI interfaces themselves." },
              { href: "/work/schema/design-system", label: "Design System Work", category: "Design Systems", year: "2025 – 2026", image: "/schema/designsystem.svg", blurb: "Components and modules for ClearDemand, plus Paragon, Factor AE, and more." },
            ].map(({ href, label, category, year, image, blurb }) => (
              <Link key={href} href={href} className="group block" style={{ textDecoration: "none", color: "#fff" }}>
                <div
                  className="w-full overflow-hidden mb-4 transition-opacity duration-300 group-hover:opacity-80"
                  style={{ aspectRatio: "4/3", backgroundColor: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  {image && (
                    <img src={image} alt="" style={{ width: "60%", objectFit: "contain" }} />
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontSize: "0.9375rem", fontFamily: "var(--font-display)", marginBottom: "4px" }}>{label}</p>
                    <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>{category}</p>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", flexShrink: 0, marginLeft: "16px" }}>{year}</span>
                </div>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "rgba(255,255,255,0.6)", marginTop: "12px" }}>{blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
