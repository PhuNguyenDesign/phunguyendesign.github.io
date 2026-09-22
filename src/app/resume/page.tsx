import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Phu Nguyen",
};

const SKILLS = [
  "UX Strategy",
  "Interaction Design",
  "Visual Design",
  "Design Systems",
  "Product Thinking",
  "Prototyping",
  "Figma",
  "User Research",
  "Design Tokens",
];

export default function ResumePage() {
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
      <header className="py-20 border-b border-border mb-16 flex items-end justify-between gap-8 flex-wrap">
        <div>
          <p
            className="text-muted-foreground mb-4"
            style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            Resume
          </p>
          <h1
            className="leading-tight tracking-tight text-foreground"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}
          >
            Phu Nguyen
          </h1>
        </div>
        <a
          href="/resume.pdf"
          className="text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-px shrink-0"
          style={{ fontSize: "0.8125rem" }}
        >
          Download PDF ↓
        </a>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Main content */}
        <div className="md:col-span-3 space-y-16">
          {/* Experience */}
          <section>
            <p
              className="text-muted-foreground mb-10"
              style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Experience
            </p>
            <div className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                <p className="text-muted-foreground" style={{ fontSize: "0.8125rem" }}>
                  2023 — Present
                </p>
                <div className="sm:col-span-3">
                  <p
                    className="text-foreground mb-1"
                    style={{ fontSize: "0.9375rem", fontFamily: "var(--font-display)" }}
                  >
                    Product Designer
                  </p>
                  <p className="text-muted-foreground mb-3" style={{ fontSize: "0.8125rem" }}>
                    Schema
                  </p>
                  <p
                    className="text-muted-foreground leading-relaxed"
                    style={{ fontSize: "0.875rem", fontFamily: "var(--font-text)" }}
                  >
                    Led end-to-end product design across multiple client engagements. Responsibilities include UX strategy, interaction design, visual design, and design system development for Factor AE, Open edX, and ClearDemand.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <p
              className="text-muted-foreground mb-8"
              style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Skills
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8">
              {SKILLS.map((skill) => (
                <p
                  key={skill}
                  className="text-muted-foreground border-b border-border py-3"
                  style={{ fontSize: "0.875rem" }}
                >
                  {skill}
                </p>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
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
          <div>
            <p
              className="text-muted-foreground mb-2"
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
              Experience
            </p>
            <p className="text-foreground" style={{ fontSize: "0.875rem" }}>
              3 years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
