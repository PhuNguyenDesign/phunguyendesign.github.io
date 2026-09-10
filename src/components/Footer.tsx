import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border mx-auto"
      style={{
        paddingLeft: "var(--page-pad-x)",
        paddingRight: "var(--page-pad-x)",
        maxWidth: "var(--max-w)",
      }}
    >
      <div className="flex items-center justify-between py-8 flex-wrap gap-4">
        <p className="text-muted-foreground" style={{ fontSize: "0.75rem" }}>
          © {year} Phu Nguyen
        </p>
        <nav className="flex items-center gap-6">
          {[
            { href: "/work", label: "Work" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontSize: "0.75rem" }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
