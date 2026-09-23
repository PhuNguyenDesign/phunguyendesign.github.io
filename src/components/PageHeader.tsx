// Top-of-page header for the Work, About, Resume, and Contact pages.
// One small label above a large display title, with an optional aside on the right.
export default function PageHeader({
  label,
  children,
  aside,
}: {
  label: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <header
      className="flex flex-wrap items-end justify-between gap-8"
      style={{ paddingTop: "clamp(4rem, 8vw, 7rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)" }}
    >
      <div>
        <p
          className="text-muted-foreground mb-5"
          style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          {label}
        </p>
        <h1
          className="text-foreground"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 600,
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            maxWidth: "18ch",
            textWrap: "balance",
          }}
        >
          {children}
        </h1>
      </div>
      {aside}
    </header>
  );
}

// Section heading used below the page header, matching the case-study headings.
export function PageSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-foreground"
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
        fontWeight: 600,
        lineHeight: 1.08,
        letterSpacing: "-0.025em",
        textWrap: "balance",
      }}
    >
      {children}
    </h2>
  );
}
