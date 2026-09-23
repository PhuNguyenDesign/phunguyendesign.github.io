import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work — Phu Nguyen",
};

// Schema sub-case-studies live under /work/schema/*, outside the projects list,
// because the [slug] route generates a page for every entry in projects.ts.
const schemaStudies = [
  { href: "/work/schema/mobile", title: "Mobile Work", body: "Visual course progress and the shared Figma file behind the Open\u00a0edX app." },
  { href: "/work/schema/agentic-design", title: "Agentic Design", body: "Designing through AI agents, and designing the interfaces an AI assistant lives in." },
  { href: "/work/schema/design-system", title: "Design System Work", body: "Components and product modules built in code for ClearDemand, plus Figma systems." },
];

export default function WorkPage() {
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
      <PageHeader label="Selected Work">
        Product design projects{" "}
        <span className="font-instrument-serif italic" style={{ fontWeight: 400 }}>across industries.</span>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14 pt-10 border-t border-border">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={(i % 2) * 0.08} headingLevel="h2" />
        ))}
      </div>

      <section className="border-t border-border" style={{ marginTop: "clamp(4rem, 8vw, 6rem)", paddingTop: "32px" }}>
        <h2 className="text-muted-foreground" style={{ fontSize: "0.8125rem", marginBottom: "8px" }}>From Schema</h2>
        <ul>
          {schemaStudies.map(({ href, title, body }) => (
            <li key={href} className="border-b border-border">
              <Link href={href} className="group grid grid-cols-1 gap-1 py-6 md:grid-cols-12 md:gap-6 md:items-baseline">
                <span className="text-foreground md:col-span-4 transition-colors group-hover:text-muted-foreground" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, letterSpacing: "-0.01em" }}>
                  {title}
                </span>
                <span className="text-muted-foreground md:col-span-7" style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>{body}</span>
                <span aria-hidden className="hidden md:block md:col-span-1 md:text-right text-muted-foreground transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
