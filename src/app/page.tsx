import Link from "next/link";
import { projects } from "@/lib/projects";
import HeroImage from "@/components/HeroImage";
import HeroRipple from "@/components/HeroRipple";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";

// Flip to true once real photos replace the placeholders below.
const SHOW_MOMENTS = false;

// A narrow strip of personal work between professional sections. Placeholders until the photos are added.
const moments = [
  { label: "Painting, detail", ratio: "3/4" },
  { label: "Pacific Beach, morning surf", ratio: "4/3" },
  { label: "Sketchbook page", ratio: "1/1" },
  { label: "Type study", ratio: "3/4" },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Poster hero: the headline runs full width; the portrait is cropped hard and bleeds off the right edge.
          Text over the photo inverts via mix-blend-mode so it stays readable on both paper and image. */}
      <section className="relative overflow-hidden" style={{ minHeight: "100dvh", paddingTop: "var(--nav-height)" }}>
        <div data-hero-photo className="absolute right-0 top-0 h-full w-full md:w-[58vw]">
          <HeroImage src="/homepicture.jpg" fill />
        </div>
        {/* Water over the paper, the photo, and the headline together */}
        <HeroRipple src="/homepicture.jpg" objectPosition="80% 40%" />
        <div
          className="relative mx-auto flex flex-col justify-end pointer-events-none"
          style={{ minHeight: "calc(100dvh - var(--nav-height))", maxWidth: "var(--max-w)", padding: "0 var(--page-pad-x) clamp(32px, 6vw, 72px)" }}
        >
          <p data-hero-text style={{ fontSize: "0.75rem", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "clamp(16px, 3vw, 32px)", color: "#FAFAF8", mixBlendMode: "difference" }}>
            Product Designer, San Diego
          </p>
          <h1
            data-hero-text
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 13.5vw, 15rem)",
              fontWeight: 600,
              lineHeight: 0.86,
              letterSpacing: "-0.055em",
              color: "#FAFAF8",
              mixBlendMode: "difference",
            }}
          >
            <span className="font-instrument-serif italic" style={{ fontWeight: 400, letterSpacing: "-0.03em" }}>Translating</span>
            <br />
            complexity
            <br />
            into clarity.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto" style={{ padding: "clamp(5rem, 10vw, 9rem) var(--page-pad-x) clamp(3rem, 6vw, 5rem)", maxWidth: "var(--max-w)" }}>
        <Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <p className="md:col-span-2" style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A8A6A1" }}>
              01 · About
            </p>
            <p
              className="md:col-span-9"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)", fontWeight: 500, lineHeight: 1.22, letterSpacing: "-0.02em", maxWidth: "34ch" }}
            >
              I design products at{" "}
              <a href="https://schema.education" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 hover:text-[#0F6B6D] transition-colors">
                Schema
              </a>{" "}
              for clients like Open&nbsp;edX, ClearDemand, and Factor AE, working across research, interaction design,
              and design systems. Lately, I’ve been using AI-assisted workflows to bring more of my designs into code. I
              tend to start on paper, then refine through interaction, structure, and visual craft until the experience
              feels right.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Selected work: broken grid, irregular proportions, the second project offset down */}
      <section className="mx-auto" style={{ padding: "clamp(2rem, 5vw, 4rem) var(--page-pad-x) 0", maxWidth: "var(--max-w)" }}>
        <div className="flex items-baseline justify-between" style={{ borderTop: "1px solid rgba(56,56,59,0.16)", paddingTop: "20px", marginBottom: "clamp(40px, 6vw, 72px)" }}>
          <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500 }}>02 · Selected Work</h2>
          <Link href="/work" className="text-[#0F6B6D] hover:underline underline-offset-4" style={{ fontSize: "0.875rem" }}>View all work →</Link>
        </div>
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-12 md:gap-x-8">
          {featured[0] && <ProjectCard project={featured[0]} ratio="16/11" className="md:col-span-7 md:-ml-[4vw]" />}
          {featured[1] && <ProjectCard project={featured[1]} ratio="4/5" delay={0.08} className="md:col-span-4 md:col-start-9 md:mt-48" />}
          {featured.slice(2).map((p, i) => (
            <ProjectCard key={p.id} project={p} ratio="21/9" delay={i * 0.08} className="md:col-span-10 md:col-start-2" />
          ))}
        </div>
      </section>

      {/* Editorial interruption */}
      <section className="mx-auto" style={{ padding: "clamp(6rem, 12vw, 11rem) var(--page-pad-x)", maxWidth: "var(--max-w)" }}>
        <Reveal>
          <p className="font-instrument-serif" style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            Same eye.
            <br />
            <span className="italic" style={{ paddingLeft: "clamp(2rem, 12vw, 12rem)" }}>Different mediums.</span>
          </p>
        </Reveal>
      </section>

      {/* Moments of me: narrow, irregular strip between work and the footer. Hidden until the photos are added. */}
      {SHOW_MOMENTS && (
      <section aria-label="Outside of work" style={{ padding: "0 0 clamp(6rem, 10vw, 9rem)" }}>
        <div className="flex items-end gap-3 overflow-x-auto px-[var(--page-pad-x)] md:gap-4" style={{ scrollbarWidth: "none" }}>
          {moments.map(({ label, ratio }, i) => (
            <figure
              key={label}
              className="m-0 shrink-0"
              style={{ width: `clamp(160px, ${[18, 26, 16, 14][i]}vw, 420px)`, marginBottom: i % 2 ? "clamp(24px, 4vw, 56px)" : 0 }}
            >
              <div
                role="img"
                aria-label={`Placeholder: ${label}`}
                style={{ aspectRatio: ratio, backgroundColor: i % 2 ? "#A8A6A1" : "#DFE0E1" }}
              />
              <figcaption className="font-instrument-serif italic" style={{ fontSize: "1rem", color: "#38383B", marginTop: "10px" }}>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      )}
    </>
  );
}
