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
            I'm Phu Nguyen, a product designer based in San Francisco with three years of professional experience in UX strategy, interaction design, visual design, and design systems.
          </p>
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "1rem", fontFamily: "var(--font-text)" }}
          >
            I work at Schema, where I partner with clients to translate complex product and user needs into clear, intuitive digital experiences. My work spans enterprise software, education technology, and retail platforms — across clients including Factor AE, Open edX, and ClearDemand.
          </p>
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "1rem", fontFamily: "var(--font-text)" }}
          >
            My design practice lives at the intersection of strong visual craft and disciplined product thinking. I care about the details — typography, hierarchy, motion, and how each decision shapes how someone feels using a product.
          </p>
        </div>

        {/* Sidebar */}
        <div>
          {/* Photo placeholder */}
          <div
            className="w-full bg-muted mb-8 flex items-center justify-center"
            style={{ aspectRatio: "3/4" }}
          >
            <span
              className="text-muted-foreground"
              style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
            >
              Add photo
            </span>
          </div>

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
                San Francisco, CA
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
    </div>
  );
}
