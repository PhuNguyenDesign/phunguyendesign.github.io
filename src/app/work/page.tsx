import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Phu Nguyen",
};

export default function WorkPage() {
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
          Selected Work
        </p>
        <h1
          className="leading-tight tracking-tight text-foreground"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}
        >
          Product design projects
          <br />
          <span className="font-instrument-serif italic">across industries.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((project) => (
          <Link key={project.id} href={`/work/${project.id}`} className="group block">
            <div
              className="w-full overflow-hidden mb-4 transition-opacity duration-300 group-hover:opacity-90"
              style={{ aspectRatio: "4/3", backgroundColor: project.placeholderBg }}
            >
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-end p-6 w-full h-full">
                  <span
                    className="text-foreground/30"
                    style={{
                      fontSize: "clamp(2.5rem, 6vw, 5rem)",
                      fontFamily: "var(--font-display)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {project.title}
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h2
                  className="text-foreground mb-1"
                  style={{ fontSize: "0.9375rem", fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h2>
                <p className="text-muted-foreground" style={{ fontSize: "0.8125rem" }}>
                  {project.category}
                </p>
              </div>
              <span className="text-muted-foreground shrink-0 ml-4" style={{ fontSize: "0.75rem" }}>
                {project.year}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
