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
          background: "linear-gradient(135deg, #4A5568 0%, #6B7280 40%, #374151 100%)",
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

      {/* Coming Soon */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "120px var(--page-pad-x)", textAlign: "center" }}>
        <p style={{ fontSize: "0.9375rem", color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "24px" }}>
          Case Study
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "24px" }}>
          Coming soon
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", maxWidth: "50ch", margin: "0 auto 48px" }}>
          This case study is currently being written. Check back soon.
        </p>
        <Link
          href="/work"
          style={{ fontSize: "0.8125rem", color: "#1a1a1a", letterSpacing: "0.04em", borderBottom: "1px solid #1a1a1a", paddingBottom: "2px" }}
        >
          ← Back to work
        </Link>
      </section>

    </div>
  );
}
