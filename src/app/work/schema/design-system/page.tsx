import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design System Work — Schema — Phu Nguyen",
};

export default function SchemaDesignSystemPage() {
  return (
    <div style={{ backgroundColor: "#fff", color: "#1a1a1a", fontFamily: "var(--font-text)" }}>
      <section style={{ backgroundColor: "#000", color: "#fff", padding: "80px var(--page-pad-x)", minHeight: "100svh" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", paddingTop: "var(--nav-height)" }}>
          <Link href="/work/schema" style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", letterSpacing: "0.04em", display: "inline-block", marginBottom: "48px" }}>
            ← Schema
          </Link>
          <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.2)", marginBottom: "48px" }} />
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Design System Work
          </h1>
        </div>
      </section>
    </div>
  );
}
