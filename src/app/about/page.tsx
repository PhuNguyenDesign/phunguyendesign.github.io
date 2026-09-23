import type { Metadata } from "next";
import PageHeader, { PageSectionTitle } from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Phu Nguyen",
};

const bio = [
  "Long before I became a product designer, I learned to understand and communicate through more than words. Growing up signing with my Deaf mom taught me to communicate with my eyes. Speaking Vietnamese taught me to translate between languages and perspectives. Visual art and hip-hop taught me how movement, composition, and expression can communicate what words sometimes can’t.",
  "Those experiences shaped the way I see design today.",
  "I’m Phu Nguyen, a product designer with three years of professional experience across UX strategy, interaction design, visual design, and design systems. At Schema, I’ve worked with clients including Factor AE, Open edX, and ClearDemand, translating complex product and user needs into clear, intuitive digital experiences across enterprise software, education technology, and retail platforms.",
  "My practice sits at the intersection of strong visual craft and disciplined product thinking. I care about how systems work, but also how they feel: through typography, hierarchy, motion, interaction, and the small decisions that shape a person’s experience.",
  "Product design may be my profession, but design, communication, and understanding people have been part of how I navigate the world for much longer.",
  "At heart, I’m a translator, turning complexity into clarity, needs into decisions, and ideas into experiences people can see, understand, and use.",
];

const facts = [
  { label: "Currently", value: "Product Designer at Schema" },
  { label: "Based in", value: "San Diego, CA" },
];

const experience = [
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
];

const education = [
  { degree: "UI/UX Design Certification", school: "San Diego State University", dates: "January 2022 - October 2022" },
  { degree: "BA of Design and Applied Arts", school: "California State University Dominguez Hills", dates: "August 2018 - May 2020" },
  { degree: "Associates of Psychology", school: "Grossmont Community College", dates: "August 2015 - May 2018" },
];

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 gap-8 border-t border-border lg:grid-cols-12" style={{ paddingTop: "40px", marginTop: "clamp(4rem, 8vw, 6rem)" }}>
        <div className="lg:col-span-4">
          <PageSectionTitle>{title}</PageSectionTitle>
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </Reveal>
  );
}

export default function AboutPage() {
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
      <PageHeader label="About">
        Designer. Translator.{" "}
        <span className="font-instrument-serif italic" style={{ fontWeight: 400 }}>Maker.</span>
      </PageHeader>

      <div className="grid grid-cols-1 gap-12 border-t border-border lg:grid-cols-12 lg:gap-8" style={{ paddingTop: "40px" }}>
        {/* Bio */}
        <div className="lg:col-span-7">
          <p
            className="text-foreground"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "32px" }}
          >
            I’ve always been a visual communicator.
          </p>
          <div className="space-y-5" style={{ maxWidth: "62ch" }}>
            {bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-muted-foreground" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
                {paragraph}
              </p>
            ))}
          </div>
          <a href="mailto:phunguyendesign@gmail.com" className="btn-teal" style={{ marginTop: "40px" }}>
            Get in Contact!
          </a>
        </div>

        {/* Portrait and facts */}
        <div className="lg:col-span-4 lg:col-start-9">
          <img
            src="/phu-32.jpg"
            alt="Phu Nguyen"
            width={2500}
            height={1667}
            className="w-full"
            style={{ aspectRatio: "3/4", objectFit: "cover", display: "block", marginBottom: "24px" }}
          />
          <dl>
            {facts.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[96px_1fr] gap-4 border-t border-border py-4">
                <dt className="text-muted-foreground" style={{ fontSize: "0.8125rem" }}>{label}</dt>
                <dd className="text-foreground" style={{ fontSize: "0.9375rem" }}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Row title="Experience">
        <div className="flex flex-col gap-10">
          {experience.map(({ company, role, description }) => (
            <div key={company}>
              <p className="text-foreground" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, letterSpacing: "-0.01em", marginBottom: "4px" }}>
                {company}
              </p>
              <p className="text-muted-foreground" style={{ fontSize: "0.875rem", marginBottom: "12px" }}>{role}</p>
              <p className="text-muted-foreground" style={{ fontSize: "0.9375rem", lineHeight: 1.7, maxWidth: "58ch" }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </Row>

      <Row title="Education">
        <div>
          {education.map(({ degree, school, dates }) => (
            <div key={degree} className="grid grid-cols-1 gap-1 border-t border-border py-5 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-6">
              <p className="text-foreground md:col-span-5" style={{ fontSize: "0.9375rem", fontWeight: 500 }}>{degree}</p>
              <p className="text-muted-foreground md:col-span-4" style={{ fontSize: "0.9375rem" }}>{school}</p>
              <p className="text-muted-foreground md:col-span-3 md:text-right" style={{ fontSize: "0.875rem", fontVariantNumeric: "tabular-nums" }}>{dates}</p>
            </div>
          ))}
        </div>
      </Row>
    </div>
  );
}
