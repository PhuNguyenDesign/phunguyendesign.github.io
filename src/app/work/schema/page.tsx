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
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: "65ch", marginBottom: "64px" }}>
            I&apos;m a product designer at Schema, where I&apos;ve worked across multiple product initiatives for clients including Open edX, Factor AE, and ClearDemand. My work spans UX strategy, interaction design, visual design, design systems, and product thinking — from reworking complex user flows and shaping mobile experiences to building reusable UI patterns and translating design intent into production-ready systems.
          </p>

          {/* Sub-project cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {[
              { href: "/work/schema/mobile", label: "Mobile Work", category: "Product Design · Mobile", image: "/schema/mobile.svg" },
              { href: "/work/schema/agentic-design", label: "Agentic Design", category: "Product Design · AI", image: "/schema/agentic.svg" },
              { href: "/work/schema/design-system", label: "Design System Work", category: "Design Systems", image: "/schema/designsystem.svg" },
            ].map(({ href, label, category, image }) => (
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
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", flexShrink: 0, marginLeft: "16px" }}>2025</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
