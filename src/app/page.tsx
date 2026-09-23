import Link from "next/link";
import { projects } from "@/lib/projects";
import HeroImage from "@/components/HeroImage";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Full-bleed hero */}
      <div style={{ paddingTop: "var(--nav-height)" }}>
        <HeroImage src="/homepicture.jpg">
          {/* Light → dark gradient so text stays legible */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.62) 100%)",
            }}
          />
          {/* Text: max-width centered with page gutter */}
          <div className="absolute inset-0 flex flex-col">
            <div
              className="flex flex-col justify-between flex-1"
              style={{
                maxWidth: "var(--max-w)",
                width: "100%",
                margin: "0 auto",
                padding: "clamp(20px, 3vw, 48px) var(--page-pad-x)",
              }}
            >
              <p
                style={{
                  fontSize: "0.6875rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(250,250,248,0.85)",
                  textShadow: "0 1px 12px rgba(0,0,0,0.6)",
                }}
              >
                Product Designer, San Diego
              </p>
              <h1
                className="text-foreground leading-[0.95] tracking-tight"
                style={{
                  fontSize: "clamp(3rem, 8vw, 8rem)",
                  fontFamily: "var(--font-display)",
                }}
              >
                <span className="font-instrument-serif italic">Translating</span>{" "}
                complexity into clarity.
              </h1>
            </div>
          </div>
        </HeroImage>
      </div>

      {/* Intro */}
      <section
        className="mx-auto"
        style={{
          padding: "clamp(4rem, 8vw, 7rem) var(--page-pad-x) clamp(3rem, 6vw, 5rem)",
          maxWidth: "var(--max-w)",
        }}
      >
        <Reveal>
          <p
            className="text-foreground"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.375rem, 2.4vw, 2rem)",
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: "-0.015em",
              maxWidth: "36ch",
            }}
          >
            UX strategy, interaction design, visual design, and design systems at{" "}
            <a
              href="https://schema.education"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Schema
            </a>
            , for clients including Open edX, ClearDemand, and Factor AE.
          </p>
        </Reveal>
      </section>

      {/* Selected Work */}
      <section
        className="mx-auto"
        style={{
          padding: "0 var(--page-pad-x) clamp(6rem, 10vw, 9rem)",
          maxWidth: "var(--max-w)",
        }}
      >
        <h2
          className="text-foreground"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
            fontWeight: 600,
            letterSpacing: "-0.025em",
            lineHeight: 1.08,
            paddingTop: "32px",
            borderTop: "1px solid rgba(250,250,248,0.14)",
            marginBottom: "40px",
          }}
        >
          Selected Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} wide={i === 2} delay={(i % 2) * 0.08} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link href="/work" className="btn-teal">
            View All Work
          </Link>
        </div>
      </section>
    </>
  );
}
