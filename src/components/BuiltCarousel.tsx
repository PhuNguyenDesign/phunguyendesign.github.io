import type { Built } from "@/lib/built";

// Two rows of shipped components drifting horizontally forever, in opposite directions.
// Each row renders twice so the loop has no seam; pauses on hover, still for reduced motion (.hmarquee in globals.css).
export default function BuiltCarousel({ items }: { items: Built[] }) {
  const half = Math.ceil(items.length / 2);
  const rows = [items.slice(0, half), items.slice(half)];
  return (
    <div className="flex flex-col gap-4 overflow-hidden" style={{ paddingBottom: "40px" }}>
      {rows.map((row, r) => (
        <div key={r} className="hmarquee" data-dir={r ? "right" : "left"}>
          <div className="hmarquee-track" style={{ animationDuration: `${70 + r * 12}s` }}>
            {[...row, ...row].map((b, i) => (
              <figure key={i} className="m-0 shrink-0" style={{ width: "clamp(260px, 30vw, 440px)", marginRight: "16px", backgroundColor: "#fff", boxShadow: "0 0 0 1px rgba(56,56,59,0.14)" }}>
                <figcaption style={{ fontSize: "0.75rem", fontWeight: 500, color: "rgba(56,56,59,0.72)", padding: "12px 14px 0" }}>#{b.pr} · {b.name}</figcaption>
                <div className="flex items-center justify-center" style={{ aspectRatio: "4/3", padding: "14px" }}>
                  <img src={b.src} alt={i < row.length ? b.alt : ""} aria-hidden={i >= row.length || undefined} width={b.w} height={b.h} style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }} />
                </div>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
