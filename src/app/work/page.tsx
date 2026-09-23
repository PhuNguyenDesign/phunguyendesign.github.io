import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work — Phu Nguyen",
};

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
    </div>
  );
}
