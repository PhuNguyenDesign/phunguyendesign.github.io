import Link from "next/link";
import Reveal from "@/components/Reveal";
import FloatIn, { type FloatFrom } from "@/components/FloatIn";

// Shared building blocks for the dark Schema case-study pages.
// Sharp corners throughout; one neutral palette on an off-black base.

export const ink = "#f2f2ef";
export const muted = "rgba(242,242,239,0.62)";
export const faint = "rgba(242,242,239,0.42)";
export const rule = "1px solid rgba(242,242,239,0.14)";
const base = "#0a0a0a";

export function CaseStudyPage({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: base, color: ink, fontFamily: "var(--font-text)", overflowX: "clip" }}>
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
export function ImageSlot({ label, ratio = "16/9", from = "up", delay }: { label: string; ratio?: string; from?: FloatFrom; delay?: number }) {
  return (
    <FloatIn from={from} delay={delay}>
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
    </FloatIn>
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
  from = "up",
  delay,
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  video?: boolean;
  width?: number;
  height?: number;
  from?: FloatFrom;
  delay?: number;
}) {
  const media: React.CSSProperties = { width: "100%", display: "block", aspectRatio: ratio, objectFit: ratio ? "cover" : undefined, backgroundColor: "#141414" };
  return (
    <FloatIn from={from} delay={delay}>
      <figure style={{ margin: 0 }}>
        {video ? (
          <video src={src} controls preload="metadata" playsInline aria-label={alt} style={media} />
        ) : (
          <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" style={{ ...media, height: "auto", aspectRatio: ratio ?? (width && height ? `${width}/${height}` : undefined) }} />
        )}
        {caption && <figcaption style={{ fontSize: "0.8125rem", color: faint, marginTop: "12px" }}>{caption}</figcaption>}
      </figure>
    </FloatIn>
  );
}

// Two images side by side at the same size, so the pair ends on one clean edge.
export function ImagePair({ labels }: { labels: [string, string] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <ImageSlot label={labels[0]} ratio="4/3" from="left" />
      <ImageSlot label={labels[1]} ratio="4/3" from="right" delay={0.08} />
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

// Fine grain laid over tinted panels so large gradients don't feel flat.
const grain =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

// A tinted stage with grain. Light product screens sit on it instead of floating on black.
export function Stage({ children, tint = "#18233a", glow = "rgba(84,110,255,0.22)", pad = "clamp(20px, 5vw, 72px)" }: { children: React.ReactNode; tint?: string; glow?: string; pad?: string }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        borderRadius: "clamp(10px, 1.4vw, 18px)",
        padding: pad,
        backgroundColor: tint,
        backgroundImage: `${grain}, radial-gradient(ellipse 75% 65% at 50% 0%, ${glow}, transparent 70%)`,
      }}
    >
      {children}
    </div>
  );
}

// Browser chrome around a product screenshot, with a shadow tinted to the stage.
export function BrowserFrame({ src, alt, width, height, shadow = "rgba(4,10,30,0.55)" }: { src: string; alt: string; width: number; height: number; shadow?: string }) {
  return (
    <div style={{ borderRadius: "10px", overflow: "hidden", backgroundColor: "#fff", boxShadow: `0 40px 90px -20px ${shadow}, 0 0 0 1px rgba(255,255,255,0.06)` }}>
      <div className="flex items-center gap-1.5" style={{ height: "clamp(22px, 2.4vw, 32px)", padding: "0 12px", backgroundColor: "#eceef1", borderBottom: "1px solid #dfe2e6" }}>
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <span key={c} aria-hidden style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: c }} />
        ))}
      </div>
      <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto" }} />
    </div>
  );
}

// A framed screen on a stage, with a caption underneath.
export function Showcase({ caption, from = "up", tint, glow, ...frame }: { src: string; alt: string; width: number; height: number; caption?: string; from?: FloatFrom; tint?: string; glow?: string }) {
  return (
    <FloatIn from={from}>
      <figure style={{ margin: 0 }}>
        <Stage tint={tint} glow={glow}>
          <BrowserFrame {...frame} />
        </Stage>
        {caption && <figcaption style={{ fontSize: "0.8125rem", color: faint, marginTop: "12px" }}>{caption}</figcaption>}
      </figure>
    </FloatIn>
  );
}

// Key numbers in one row. Values are set in tabular figures so they line up.
export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: rule, borderBottom: rule }}>
      {items.map(({ value, label }, i) => (
        <div key={label} className={`flex flex-col-reverse py-7 ${i % 2 ? "pl-6" : ""} md:pl-6 md:first:pl-0 ${i > 0 ? "md:border-l" : ""}`} style={{ borderColor: "rgba(242,242,239,0.14)" }}>
          <dt style={{ fontSize: "0.8125rem", color: faint, marginTop: "6px" }}>{label}</dt>
          <dd style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1, fontVariantNumeric: "tabular-nums", margin: 0 }}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

// A labeled tile holding one component or style on a light surface.
export function Tile({ label, src, alt, width, height, surface = "#f6f6f7", ratio, contain = true, className, from = "up", delay }: { label: string; src: string; alt: string; width: number; height: number; surface?: string; ratio?: string; contain?: boolean; className?: string; from?: FloatFrom; delay?: number }) {
  return (
    <FloatIn from={from} delay={delay}>
      <figure className={`m-0 flex h-full flex-col ${className ?? ""}`} style={{ backgroundColor: surface, borderRadius: "clamp(8px, 1vw, 14px)", overflow: "hidden" }}>
        <figcaption style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.02em", color: "rgba(20,24,32,0.55)", padding: "14px 18px 0" }}>{label}</figcaption>
        <div className="flex flex-1 items-center justify-center" style={{ padding: "clamp(14px, 2.4vw, 32px)", aspectRatio: ratio }}>
          <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" style={{ display: "block", maxWidth: "100%", maxHeight: "100%", width: contain ? "auto" : "100%", height: "auto", objectFit: "contain" }} />
        </div>
      </figure>
    </FloatIn>
  );
}
