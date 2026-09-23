import Link from "next/link";
import type { Project } from "@/lib/projects";
import Reveal from "@/components/Reveal";

// Project tile used on the home and work pages: image with a slow hover zoom, then title, category, and year.
export default function ProjectCard({
  project,
  wide = false,
  delay = 0,
  headingLevel = "h3",
}: {
  project: Project;
  wide?: boolean;
  delay?: number;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Reveal delay={delay} className={wide ? "md:col-span-2" : ""}>
      <Link href={`/work/${project.id}`} className="group block">
        <div
          className="w-full overflow-hidden mb-5 relative"
          style={{
            aspectRatio: wide ? "21/9" : "4/3",
            backgroundColor: project.placeholderBg,
            backgroundImage: project.cover ? `url('${project.cover}')` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
            {project.thumbnail ? (
              <img src={project.thumbnail} alt={project.title} width={1600} height={1200} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            ) : project.logo ? (
              <div className="flex items-center justify-center w-full h-full p-8">
                <img src={project.logo} alt={project.title} width={201} height={109} loading="lazy" decoding="async" style={{ maxWidth: "80%", maxHeight: "80%", width: project.cover ? "42%" : "auto", height: "auto", filter: project.cover ? "brightness(0) invert(1)" : undefined }} />
              </div>
            ) : (
              <div className="flex items-end p-6 w-full h-full">
                <span
                  className="text-foreground/30"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontFamily: "var(--font-display)", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  {project.title}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-baseline justify-between gap-4">
          <div>
            <Heading
              className="text-foreground mb-1 transition-opacity group-hover:opacity-70"
              style={{ fontSize: "1.25rem", fontFamily: "var(--font-display)", fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              {project.title}
            </Heading>
            <p className="text-muted-foreground" style={{ fontSize: "0.875rem" }}>
              {project.category}
            </p>
          </div>
          <span className="text-muted-foreground shrink-0" style={{ fontSize: "0.8125rem" }}>
            {project.year}
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
