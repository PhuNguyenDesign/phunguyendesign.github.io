import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section
        className="flex flex-col justify-end pb-24 mx-auto"
        style={{
          minHeight: "100svh",
          paddingTop: "var(--nav-height)",
          paddingLeft: "var(--page-pad-x)",
          paddingRight: "var(--page-pad-x)",
          maxWidth: "var(--max-w)",
        }}
      >
        <div className="mb-12">
          <p
            className="text-muted-foreground mb-10"
            style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            Product Designer — San Diego
          </p>

          <h1
            className="text-foreground mb-8 leading-[0.95] tracking-tight"
            style={{
              fontSize: "clamp(3rem, 8vw, 8rem)",
              maxWidth: "18ch",
              fontFamily: "var(--font-display)",
            }}
          >
            <span className="font-instrument-serif italic">Translating</span>{" "}
            complexity into clarity.
          </h1>

          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "1rem", maxWidth: "52ch", fontFamily: "var(--font-text)" }}
          >
            UX strategy, interaction design, visual design, and design systems —
            building digital products at{" "}
            <a
              href="https://schema.education"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors"
            >
              Schema
            </a>{" "}
            for clients including Factor AE, Open edX, and ClearDemand.
          </p>
        </div>

        <div
          className="flex items-center gap-2 text-muted-foreground"
          style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
        >
          <span>Selected Work</span>
          <span>↓</span>
        </div>
      </section>

      {/* Selected Work */}
      <section
        className="pb-32 mx-auto"
        style={{
          paddingLeft: "var(--page-pad-x)",
          paddingRight: "var(--page-pad-x)",
          maxWidth: "var(--max-w)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {featured.map((project, i) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className={`group block ${i === 2 ? "md:col-span-2" : ""}`}
            >
              <div
                className="w-full overflow-hidden mb-4 transition-opacity duration-300 group-hover:opacity-90 relative"
                style={{
                  aspectRatio: i === 2 ? "21/9" : "4/3",
                  backgroundColor: project.placeholderBg,
                }}
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
                        fontSize: "clamp(3rem, 8vw, 6rem)",
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
                <span
                  className="text-muted-foreground shrink-0 ml-4"
                  style={{ fontSize: "0.75rem" }}
                >
                  {project.year}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/work"
            className="text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground pb-px"
            style={{ fontSize: "0.8125rem", letterSpacing: "0.04em" }}
          >
            View all work
          </Link>
        </div>
      </section>
    </>
  );
}
