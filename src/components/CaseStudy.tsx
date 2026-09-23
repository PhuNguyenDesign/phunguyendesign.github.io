import Link from "next/link";
import Reveal from "@/components/Reveal";

// Shared building blocks for the dark Schema case-study pages.
// Sharp corners throughout; one neutral palette on an off-black base.

export const ink = "#f2f2ef";
export const muted = "rgba(242,242,239,0.62)";
export const faint = "rgba(242,242,239,0.42)";
export const rule = "1px solid rgba(242,242,239,0.14)";
const base = "#0a0a0a";

export function CaseStudyPage({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: base, color: ink, fontFamily: "var(--font-text)" }}>
      {children}
    </div>
  );
}

export function CaseStudyHeader({
  title,
  summary,
  meta,
  back = { href: "/work/schema", label: "Schema" },
}: {
  title: string;
  summary: string;
  meta: { label: string; value: string }[];
  back?: { href: string; label: string };
}) {
  return (
    <section style={{ padding: "0 var(--page-pad-x)" }}>
      <div className="mx-auto max-w-[1200px]" style={{ paddingTop: "calc(var(--nav-height) + 64px)", paddingBottom: "96px" }}>
        <Link
          href={back.href}
          className="inline-block transition-opacity hover:opacity-100"
          style={{ fontSize: "0.8125rem", color: faint, textDecoration: "none", letterSpacing: "0.02em", marginBottom: "56px" }}
        >
          ← {back.label}
        </Link>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.035em", marginBottom: "28px", textWrap: "balance" }}>
              {title}
            </h1>
            <p style={{ fontSize: "clamp(1.125rem, 1.8vw, 1.375rem)", lineHeight: 1.5, color: muted, maxWidth: "44ch" }}>
              {summary}
            </p>
          </div>
          <dl className="lg:col-span-4 lg:pt-3">
            {meta.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[96px_1fr] gap-4 py-4" style={{ borderTop: rule }}>
                <dt style={{ fontSize: "0.8125rem", color: faint }}>{label}</dt>
                <dd style={{ fontSize: "0.9375rem", lineHeight: 1.5 }}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

// "rail": title pinned in a left column while the content scrolls (text-led sections).
// "stack": title on top, content at full width (image- and grid-led sections).
export function Section({
  title,
  children,
  layout = "rail",
  last,
}: {
  title: string;
  children: React.ReactNode;
  layout?: "rail" | "stack";
  last?: boolean;
}) {
  const heading = (
    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.025em", textWrap: "balance" }}>
      {title}
    </h2>
  );
  return (
    <section style={{ padding: `0 var(--page-pad-x) ${last ? "144px" : "0"}` }}>
      <Reveal className="mx-auto max-w-[1200px] py-16 md:py-24" >
        <div style={{ borderTop: rule, paddingTop: "40px" }}>
          {layout === "rail" ? (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <div className="lg:sticky" style={{ top: "calc(var(--nav-height) + 32px)" }}>{heading}</div>
              </div>
              <div className="lg:col-span-8">{children}</div>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: "40px", maxWidth: "40ch" }}>{heading}</div>
              {children}
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}

export function Body({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return (
    <p style={{ fontSize: "clamp(1.0625rem, 1.3vw, 1.1875rem)", lineHeight: 1.7, color: muted, maxWidth: "62ch", marginBottom: last ? 0 : "22px" }}>
      {children}
    </p>
  );
}

// Placeholder frame until real visuals are exported. The label says what belongs here.
export function ImageSlot({ label, ratio = "16/9" }: { label: string; ratio?: string }) {
  return (
    <figure
      role="img"
      aria-label={`Image placeholder: ${label}`}
      style={{
        aspectRatio: ratio,
        backgroundColor: "#141414",
        backgroundImage: "linear-gradient(135deg, rgba(242,242,239,0.035), rgba(242,242,239,0))",
        border: "1px solid rgba(242,242,239,0.08)",
        display: "flex",
        alignItems: "flex-end",
        padding: "20px",
        margin: 0,
      }}
    >
      <figcaption style={{ fontSize: "0.8125rem", color: faint, lineHeight: 1.5, maxWidth: "40ch" }}>{label}</figcaption>
    </figure>
  );
}

// A real image or video with an optional caption underneath.
// Videos are silent walkthroughs, so their caption doubles as the text description.
export function Figure({
  src,
  alt,
  caption,
  ratio,
  video,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  video?: boolean;
  width?: number;
  height?: number;
}) {
  const media: React.CSSProperties = { width: "100%", display: "block", aspectRatio: ratio, objectFit: ratio ? "cover" : undefined, backgroundColor: "#141414" };
  return (
    <figure style={{ margin: 0 }}>
      {video ? (
        <video src={src} controls preload="metadata" playsInline aria-label={alt} style={media} />
      ) : (
        <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" style={{ ...media, height: "auto", aspectRatio: ratio ?? (width && height ? `${width}/${height}` : undefined) }} />
      )}
      {caption && <figcaption style={{ fontSize: "0.8125rem", color: faint, marginTop: "12px" }}>{caption}</figcaption>}
    </figure>
  );
}

// Two images side by side at the same size, so the pair ends on one clean edge.
export function ImagePair({ labels }: { labels: [string, string] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <ImageSlot label={labels[0]} ratio="4/3" />
      <ImageSlot label={labels[1]} ratio="4/3" />
    </div>
  );
}

// Two-column grid on desktop; an odd final item spans both columns so no cell is left empty.
export function CardGrid({ items }: { items: { name: string; body: string; tag?: string }[]; min?: number }) {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 md:[&>*:last-child:nth-child(odd)]:col-span-2">
      {items.map(({ name, body, tag }) => (
        <div key={name} style={{ borderTop: rule, paddingTop: "20px" }}>
          {tag && <p style={{ fontSize: "0.8125rem", color: faint, marginBottom: "10px" }}>{tag}</p>}
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, letterSpacing: "-0.01em", marginBottom: "10px" }}>{name}</p>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted, maxWidth: "52ch" }}>{body}</p>
        </div>
      ))}
    </div>
  );
}

// A single large sentence that carries a section's main idea.
export function Statement({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ padding: "0 var(--page-pad-x)" }}>
      <Reveal className="mx-auto max-w-[1200px] py-20 md:py-28">
        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 3.25rem)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.025em", maxWidth: "22ch" }}>
          {children}
        </p>
      </Reveal>
    </section>
  );
}

export function Spacer({ size = 48 }: { size?: number }) {
  return <div style={{ height: `${size}px` }} />;
}
