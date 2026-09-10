import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Phu Nguyen",
};

const LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "Read.cv", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function ContactPage() {
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
          Contact
        </p>
        <h1
          className="leading-tight tracking-tight text-foreground"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}
        >
          Let's work together.
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16" style={{ maxWidth: "860px" }}>
        <div>
          <p
            className="text-muted-foreground leading-relaxed mb-8"
            style={{ fontSize: "1rem", fontFamily: "var(--font-text)" }}
          >
            I'm open to new opportunities, collaborations, and conversations. Reach out and let's talk about what you're building.
          </p>
          <a
            href="mailto:phu.nguyen@schema.education"
            className="text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-muted-foreground"
            style={{ fontSize: "1.25rem", fontFamily: "var(--font-display)" }}
          >
            phu.nguyen@schema.education
          </a>
        </div>

        <div>
          <p
            className="text-muted-foreground mb-4"
            style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            Links
          </p>
          <div>
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center justify-between text-foreground hover:text-muted-foreground transition-colors border-b border-border py-3 group"
                style={{ fontSize: "0.875rem" }}
              >
                <span>{label}</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
