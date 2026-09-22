import Link from "next/link";

// Shared building blocks for the dark Schema case-study pages.

export const muted = "rgba(255,255,255,0.6)";
export const faint = "rgba(255,255,255,0.4)";
export const rule = "1px solid rgba(255,255,255,0.2)";

export function CaseStudyPage({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "var(--font-text)" }}>
      {children}
    </div>
  );
}

export function CaseStudyHeader({
  title,
  summary,
  meta,
}: {
  title: string;
  summary: string;
  meta: { label: string; value: string }[];
}) {
  return (
    <section style={{ padding: "80px var(--page-pad-x) 64px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", paddingTop: "var(--nav-height)" }}>
        <Link href="/work/schema" style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", letterSpacing: "0.04em", display: "inline-block", marginBottom: "48px" }}>
          ← Schema
        </Link>
        <hr style={{ border: "none", borderTop: rule, marginBottom: "48px" }} />
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "24px" }}>
          {title}
        </h1>
        <p style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", lineHeight: 1.5, color: muted, maxWidth: "50ch", marginBottom: "64px" }}>
          {summary}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px" }}>
          {meta.map(({ label, value }) => (
            <div key={label}>
              <p style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase", color: faint, marginBottom: "8px" }}>{label}</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Section({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <section style={{ padding: last ? "64px var(--page-pad-x) 120px" : "64px var(--page-pad-x)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <hr style={{ border: "none", borderTop: rule, marginBottom: "48px" }} />
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "32px" }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export function Body({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return (
    <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", lineHeight: 1.75, color: muted, maxWidth: "68ch", marginBottom: last ? 0 : "20px" }}>
      {children}
    </p>
  );
}

export function ImageSlot({ label, ratio = "16/9" }: { label: string; ratio?: string }) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        backgroundColor: "#1a1a1a",
        border: "1px dashed rgba(255,255,255,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "0.8125rem", color: faint, letterSpacing: "0.04em" }}>{label}</p>
    </div>
  );
}

export function ImagePair({ labels }: { labels: [string, string] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
      <ImageSlot label={labels[0]} ratio="4/3" />
      <ImageSlot label={labels[1]} ratio="4/3" />
    </div>
  );
}

export function CardGrid({ items, min = 240 }: { items: { name: string; body: string; tag?: string }[]; min?: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap: "24px" }}>
      {items.map(({ name, body, tag }) => (
        <div key={name} style={{ borderTop: rule, paddingTop: "20px" }}>
          {tag && <p style={{ fontSize: "0.75rem", color: faint, marginBottom: "8px" }}>{tag}</p>}
          <p style={{ fontSize: "1.125rem", fontFamily: "var(--font-display)", marginBottom: "12px" }}>{name}</p>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted }}>{body}</p>
        </div>
      ))}
    </div>
  );
}

export function Spacer({ size = 48 }: { size?: number }) {
  return <div style={{ height: `${size}px` }} />;
}
