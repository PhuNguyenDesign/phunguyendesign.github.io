import type { CSSProperties } from "react";

// Type for the hero name, shared by the headline and the preloader's copy of it so the
// preloader can scale its copy straight into the headline's place.
export const HERO_NAME_TEXT = "Phu Nguyen";

export const HERO_NAME_STYLE: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  lineHeight: 0.82,
  letterSpacing: "-0.045em",
  // Tight tracking swallows the word space, so open it back up
  wordSpacing: "0.14em",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};
