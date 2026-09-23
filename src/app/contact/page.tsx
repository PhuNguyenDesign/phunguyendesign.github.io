import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — Phu Nguyen",
};

// Add each profile URL to show it. Links without a URL stay hidden instead of going nowhere.
const LINKS = [
  { label: "LinkedIn", href: "" },
  { label: "Read.cv", href: "" },
  { label: "Dribbble", href: "" },
].filter((link) => link.href);

export default function ContactPage() {
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
      <PageHeader label="Contact">Let’s work together.</PageHeader>

      <Reveal>
        <div className="grid grid-cols-1 gap-12 border-t border-border lg:grid-cols-12 lg:gap-8" style={{ paddingTop: "40px" }}>
          <div className="lg:col-span-7">
            <p className="text-muted-foreground" style={{ fontSize: "1.0625rem", lineHeight: 1.7, maxWidth: "46ch", marginBottom: "32px" }}>
              I’m open to new opportunities, collaborations, and conversations. Reach out and let’s talk about what you’re building.
            </p>
            <a
              href="mailto:phunguyendesign@gmail.com"
              className="text-foreground hover:text-muted-foreground transition-colors underline underline-offset-[6px] decoration-border hover:decoration-muted-foreground break-words"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.375rem, 3vw, 2.25rem)", fontWeight: 500, letterSpacing: "-0.02em" }}
            >
              phunguyendesign@gmail.com
            </a>
          </div>

          {LINKS.length > 0 && (
          <nav aria-label="Elsewhere" className="lg:col-span-4 lg:col-start-9">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center justify-between text-foreground hover:text-muted-foreground transition-colors border-b border-border py-4 first:pt-0"
                style={{ fontSize: "1rem" }}
              >
                <span>{label}</span>
                <span className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
              </a>
            ))}
          </nav>
          )}
        </div>
      </Reveal>
    </div>
  );
}
