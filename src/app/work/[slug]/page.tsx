import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return { title: `${project.title} — Phu Nguyen` };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

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
      {/* Header */}
      <header className="py-20 border-b border-border mb-16">
        <Link
          href="/work"
          className="text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block"
          style={{ fontSize: "0.8125rem" }}
        >
          ← Work
        </Link>
        <p
          className="text-muted-foreground mb-4"
          style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          {project.category} · {project.year}
        </p>
        <h1
          className="leading-tight tracking-tight text-foreground"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            maxWidth: "20ch",
            fontFamily: "var(--font-display)",
          }}
        >
          {project.title}
        </h1>
      </header>

      {/* Hero image placeholder */}
      <div
        className="w-full bg-muted mb-16 flex items-center justify-center"
        style={{ aspectRatio: "16/9" }}
      >
        <span
          className="text-muted-foreground"
          style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
        >
          Add hero image
        </span>
      </div>

      {/* Overview + metadata */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
        <div className="md:col-span-2">
          <p
            className="text-muted-foreground mb-4"
            style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            Overview
          </p>
          <p
            className="text-foreground leading-relaxed mb-4"
            style={{ fontSize: "1.125rem", fontFamily: "var(--font-text)" }}
          >
            {project.description}
          </p>
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "1rem", fontFamily: "var(--font-text)" }}
          >
            Add your full case study here: describe the problem, your process, key decisions, and outcomes.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <p
              className="text-muted-foreground mb-2"
              style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Role
            </p>
            <p className="text-foreground" style={{ fontSize: "0.875rem" }}>
              {project.role}
            </p>
          </div>
          <div>
            <p
              className="text-muted-foreground mb-2"
              style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Year
            </p>
            <p className="text-foreground" style={{ fontSize: "0.875rem" }}>
              {project.year}
            </p>
          </div>
          {project.client && (
            <div>
              <p
                className="text-muted-foreground mb-2"
                style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                Client
              </p>
              <p className="text-foreground" style={{ fontSize: "0.875rem" }}>
                {project.client}
              </p>
            </div>
          )}
          <div>
            <p
              className="text-muted-foreground mb-3"
              style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Disciplines
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-muted-foreground border border-border px-2 py-1"
                  style={{ fontSize: "0.75rem" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case study body placeholder */}
      <div className="border-t border-border pt-16 max-w-[65ch]">
        <p
          className="text-muted-foreground leading-relaxed"
          style={{ fontSize: "0.875rem", fontFamily: "var(--font-text)" }}
        >
          Add your case study sections here: problem framing, research, design process, final solution, and results.
        </p>
      </div>
    </div>
  );
}
