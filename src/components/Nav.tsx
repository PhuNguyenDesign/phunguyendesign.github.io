"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm"
        style={{ height: "var(--nav-height)" }}
      >
        <nav
          className="flex h-full items-center justify-between mx-auto"
          style={{ paddingLeft: "var(--page-pad-x)", paddingRight: "var(--page-pad-x)", maxWidth: "var(--max-w)" }}
        >
          <Link href="/" aria-label="Phu Nguyen — Home" className="hover:opacity-60 transition-opacity">
            <svg width="32" height="38" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 33.1127H9.14833V30.0672H6.09105V11.7705L21.3422 33.1127H27.445V30.0672H24.3877V20.0487H21.3422V27.4568L6.09105 6.10281H0V9.14834H3.04552V30.0672H0V33.1127Z" fill="currentColor"/>
              <path d="M21.3422 13.5108V9.14834H18.2966V6.10281H27.445V9.14834H24.3877V13.5108H21.3422Z" fill="currentColor"/>
              <path d="M15.2394 36.1465V27.5743L12.1938 23.3177V36.1465H9.14832V39.2155H18.2966V36.1465H15.2394Z" fill="currentColor"/>
              <path d="M9.14832 0V3.05728H12.1938V11.6294L15.2394 15.9096V3.05728H30.4905V15.2511H16.9914V18.2967H33.5478V0H9.14832Z" fill="currentColor"/>
            </svg>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center gap-[5px] w-8 h-8 hover:opacity-60 transition-opacity"
          >
            <span
              className="block w-6 h-px bg-foreground transition-all duration-300"
              style={{
                transform: open ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-6 h-px bg-foreground transition-all duration-300"
              style={{
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-px bg-foreground transition-all duration-300"
              style={{
                transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className="fixed inset-0 z-40 bg-background flex flex-col justify-center transition-all duration-500"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <nav
          className="mx-auto w-full"
          style={{ paddingLeft: "var(--page-pad-x)", paddingRight: "var(--page-pad-x)", maxWidth: "var(--max-w)" }}
        >
          <ul className="flex flex-col gap-6 items-center text-center">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:opacity-50 transition-opacity"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 7rem)",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
