"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState<"visible" | "fadeout" | "done">("visible");

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fadeout"), 1800);
    const doneTimer = setTimeout(() => setPhase("done"), 2600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        opacity: phase === "fadeout" ? 0 : 1,
        transition: phase === "fadeout" ? "opacity 0.8s ease" : "none",
      }}
    >
      <svg width="120" height="141" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 33.1127H9.14833V30.0672H6.09105V11.7705L21.3422 33.1127H27.445V30.0672H24.3877V20.0487H21.3422V27.4568L6.09105 6.10281H0V9.14834H3.04552V30.0672H0V33.1127Z" fill="white"/>
        <path d="M21.3422 13.5108V9.14834H18.2966V6.10281H27.445V9.14834H24.3877V13.5108H21.3422Z" fill="white"/>
        <path d="M15.2394 36.1465V27.5743L12.1938 23.3177V36.1465H9.14832V39.2155H18.2966V36.1465H15.2394Z" fill="white"/>
        <path d="M9.14832 0V3.05728H12.1938V11.6294L15.2394 15.9096V3.05728H30.4905V15.2511H16.9914V18.2967H33.5478V0H9.14832Z" fill="white"/>
      </svg>

      <p
        style={{
          color: "white",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.75rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        Phu Nguyen
      </p>
    </div>
  );
}
