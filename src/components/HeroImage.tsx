import type { ReactNode } from "react";

// The hero photo. The water ripples are drawn over the whole hero by HeroRipple.
export default function HeroImage({ src, children, fill }: { src: string; children?: ReactNode; /** Fill the parent box instead of a fixed 88vh band */ fill?: boolean }) {
  return (
    <div className={`relative w-full ${fill ? "h-full" : ""}`}>
      <img src={src} alt="" width={1125} height={751} fetchPriority="high" decoding="async" className="w-full block" style={{ objectFit: "cover", height: fill ? "100%" : "88vh", objectPosition: fill ? "80% 40%" : "72% center" }} />
      {children}
    </div>
  );
}
