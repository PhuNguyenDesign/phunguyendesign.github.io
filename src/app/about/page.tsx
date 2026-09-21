import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Phu Nguyen",
};

export default function AboutPage() {
  return (
    <div
      className="pb-32 mx-auto"
      style={{
        paddingTop: "var(--nav-height)",
        paddingLeft: "var(--page-pad-x)",
        paddingRight: "var(--page-pad-x)",
        maxWidth: "var(--max-w)",
      }}
    >
      <header className="py-20 border-b border-border mb-16">
        <p
          className="text-muted-foreground mb-4"
          style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          About
        </p>
        <h1
          className="leading-tight tracking-tight text-foreground"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontFamily: "var(--font-display)", maxWidth: "20ch" }}
        >
          Designer. Translator.{" "}
          <span className="font-instrument-serif italic">Maker.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Bio */}
        <div className="md:col-span-2 space-y-5">
          <p
            className="text-foreground leading-relaxed"
            style={{ fontSize: "1.125rem", fontFamily: "var(--font-text)" }}
          >
            I&apos;ve always been a visual communicator.
          </p>
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "1rem", fontFamily: "var(--font-text)" }}
          >
            Long before I became a product designer, I learned to understand and communicate through more than words. Growing up signing with my Deaf mom taught me to communicate with my eyes. Speaking Vietnamese taught me to translate between languages and perspectives. Visual art and hip-hop taught me how movement, composition, and expression can communicate what words sometimes can&apos;t.
          </p>
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "1rem", fontFamily: "var(--font-text)" }}
          >
            Those experiences shaped the way I see design today.
          </p>
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "1rem", fontFamily: "var(--font-text)" }}
          >
            I&apos;m Phu Nguyen, a product designer with three years of professional experience across UX strategy, interaction design, visual design, and design systems. At Schema, I&apos;ve worked with clients including Factor AE, Open edX, and ClearDemand, translating complex product and user needs into clear, intuitive digital experiences across enterprise software, education technology, and retail platforms.
          </p>
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "1rem", fontFamily: "var(--font-text)" }}
          >
            My practice sits at the intersection of strong visual craft and disciplined product thinking. I care about how systems work, but also how they feel — through typography, hierarchy, motion, interaction, and the small decisions that shape a person&apos;s experience.
          </p>
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "1rem", fontFamily: "var(--font-text)" }}
          >
            Product design may be my profession, but design, communication, and understanding people have been part of how I navigate the world for much longer.
          </p>
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "1rem", fontFamily: "var(--font-text)" }}
          >
            At heart, I&apos;m a translator — turning complexity into clarity, needs into decisions, and ideas into experiences people can see, understand, and use.
          </p>
        </div>

        {/* Sidebar */}
        <div>
          {/* Photo placeholder */}
          <img
            src="/phu-32.jpg"
            alt="Phu Nguyen"
            className="w-full mb-8"
            style={{ aspectRatio: "3/4", objectFit: "cover", display: "block" }}
          />

          <div className="space-y-6">
            <div>
              <p
                className="text-muted-foreground mb-1"
                style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                Currently
              </p>
              <p className="text-foreground" style={{ fontSize: "0.875rem" }}>
                Product Designer at Schema
              </p>
            </div>
            <div>
              <p
                className="text-muted-foreground mb-1"
                style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                Based in
              </p>
              <p className="text-foreground" style={{ fontSize: "0.875rem" }}>
                San Diego, CA
              </p>
            </div>
            <div>
              <p
                className="text-muted-foreground mb-2"
                style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                Contact
              </p>
              <a
                href="mailto:phu.nguyen@schema.education"
                className="text-foreground hover:text-muted-foreground transition-colors underline underline-offset-2"
                style={{ fontSize: "0.875rem" }}
              >
                phu.nguyen@schema.education
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 pt-16 border-t border-border">
        <div>
          <h2
            className="text-foreground font-bold"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "var(--font-display)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Experience
          </h2>
        </div>
        <div className="md:col-span-2 flex flex-col gap-12">
          {[
            {
              company: "Schema Education",
              role: "Product Designer",
              description: "Designed and shipped product experiences across edtech, enterprise, and platform work, partnering cross-functionally on UX strategy, interaction design, visual design, and design systems.",
            },
            {
              company: "Marketeq Digital",
              role: "UX Research / Design",
              description: "Researched and designed enterprise SaaS experiences, focusing on usability, information architecture, admin workflows, and competitive product analysis.",
            },
            {
              company: "Prazenta LLC",
              role: "Graphic / Presentation Design",
              description: "Created branded presentations, templates, and visual communication systems for client-facing business content across PowerPoint and Adobe tools.",
            },
          ].map(({ company, role, description }) => (
            <div key={company}>
              <p className="text-foreground font-bold mb-1" style={{ fontSize: "1rem" }}>
                {company} <span className="font-normal text-muted-foreground">| {role}</span>
              </p>
              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "0.9375rem", fontFamily: "var(--font-text)" }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 pt-16 border-t border-border">
        <div>
          <h2
            className="text-foreground font-bold"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "var(--font-display)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Education
          </h2>
        </div>
        <div className="md:col-span-2 flex flex-col gap-8">
          {[
            { degree: "UI/UX Design Certification", school: "San Diego State University", dates: "January 2022 – October 2022" },
            { degree: "BA of Design and Applied Arts", school: "California State University Dominguez Hills", dates: "August 2018 – May 2020" },
            { degree: "Associates of Psychology", school: "Grossmont Community College", dates: "August 2015 – May 2018" },
          ].map(({ degree, school, dates }) => (
            <div key={degree} className="grid grid-cols-3 gap-8 items-baseline">
              <p className="text-foreground font-bold" style={{ fontSize: "0.9375rem" }}>{degree}</p>
              <p className="text-muted-foreground" style={{ fontSize: "0.9375rem" }}>{school}</p>
              <p className="text-foreground font-bold text-right" style={{ fontSize: "0.9375rem" }}>{dates}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
