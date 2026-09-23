import type { Metadata } from "next";
import PageHeader, { PageSectionTitle } from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

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

// Set to "/resume.pdf" once the file is added to public/. Until then the download link is hidden.
const RESUME_PDF = "";

const facts = [
  { label: "Contact", value: <a href="mailto:phunguyendesign@gmail.com" className="underline underline-offset-4 hover:text-muted-foreground transition-colors">phunguyendesign@gmail.com</a> },
  { label: "Based in", value: "San Diego, CA" },
  { label: "Experience", value: "3 years" },
];

export default function ResumePage() {
  return (
    <div
      className="mx-auto"
      style={{
        paddingTop: "var(--nav-height)",
        paddingLeft: "var(--page-pad-x)",
        paddingRight: "var(--page-pad-x)",
        paddingBottom: "clamp(6rem, 10vw, 9rem)",
        maxWidth: "var(--max-w)",
      }}
    >
      <PageHeader
        label="Resume"
        aside={
          RESUME_PDF && <a
            href={RESUME_PDF}
            className="text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-px shrink-0"
            style={{ fontSize: "0.875rem" }}
          >
            Download PDF ↓
          </a>
        }
      >
        Phu Nguyen
      </PageHeader>

      <div className="grid grid-cols-1 gap-12 border-t border-border lg:grid-cols-12 lg:gap-8" style={{ paddingTop: "40px" }}>
        <div className="lg:col-span-8 space-y-20">
          <Reveal>
            <section>
              <div style={{ marginBottom: "32px" }}>
                <PageSectionTitle>Experience</PageSectionTitle>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-6">
                <p className="text-muted-foreground sm:col-span-3" style={{ fontSize: "0.875rem", fontVariantNumeric: "tabular-nums" }}>
                  2024 - Present
                </p>
                <div className="sm:col-span-9">
                  <p className="text-foreground" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, letterSpacing: "-0.01em", marginBottom: "4px" }}>
                    Product Designer
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: "0.875rem", marginBottom: "12px" }}>
                    Schema
                  </p>
                  <p className="text-muted-foreground" style={{ fontSize: "0.9375rem", lineHeight: 1.7, maxWidth: "58ch" }}>
                    Led end-to-end product design across multiple client engagements. Responsibilities include UX strategy, interaction design, visual design, and design system development for Factor AE, Open edX, and ClearDemand.
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <div style={{ marginBottom: "28px" }}>
                <PageSectionTitle>Skills</PageSectionTitle>
              </div>
              <ul className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <li key={skill} className="text-foreground border border-border" style={{ fontSize: "0.9375rem", padding: "8px 14px" }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        <dl className="lg:col-span-4 lg:col-start-9">
          {facts.map(({ label, value }) => (
            <div key={label} className="grid grid-cols-[96px_1fr] gap-4 border-b border-border py-4 first:pt-0">
              <dt className="text-muted-foreground" style={{ fontSize: "0.8125rem" }}>{label}</dt>
              <dd className="text-foreground break-words" style={{ fontSize: "0.9375rem" }}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
