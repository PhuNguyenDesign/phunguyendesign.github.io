"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm"
      style={{ height: "var(--nav-height)" }}
    >
      <nav
        className="flex h-full items-center justify-between mx-auto"
        style={{ paddingLeft: "var(--page-pad-x)", paddingRight: "var(--page-pad-x)", maxWidth: "var(--max-w)" }}
      >
        <Link
          href="/"
          className="font-instrument-serif italic text-[1.125rem] tracking-tight text-foreground hover:text-muted-foreground transition-colors"
          aria-label="Phu Nguyen — Home"
        >
          PN
        </Link>

        <ul className="flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-[0.8125rem] tracking-wide transition-colors ${
                  pathname.startsWith(href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
