// Columns of cards that scroll forever, alternating direction: up, down, up, down.
// Each column's cards are rendered twice so the loop has no visible seam.
// Pauses on hover and stands still for reduced motion (see .marquee in globals.css).

export type MarqueeCard = { src: string; alt: string; width?: number; height?: number; ratio?: string };

export default function MarqueeColumns({
  columns,
  height = "min(90vh, 900px)",
  aspectRatio,
  duration = 40,
}: {
  columns: MarqueeCard[][];
  height?: string;
  /** Size the box by shape instead of height, e.g. "4/3" to match a neighboring image. */
  aspectRatio?: string;
  /** Seconds for one full loop; each column varies slightly so they don't move in lockstep. */
  duration?: number;
}) {
  return (
    <div
      className={`marquee grid gap-4 ${columns.length > 2 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2"}`}
      style={aspectRatio ? { aspectRatio } : { height }}
    >
      {columns.map((cards, i) => (
        <div key={i} className={`marquee-col${i >= 2 ? " hidden md:block" : ""}`} data-dir={i % 2 === 0 ? "up" : "down"}>
          <div className="marquee-track" style={{ animationDuration: `${duration + i * 4}s` }}>
            {[...cards, ...cards].map((card, j) => (
              <img
                key={j}
                src={card.src}
                alt={j < cards.length ? card.alt : ""}
                aria-hidden={j >= cards.length || undefined}
                width={card.width}
                height={card.height}
                className="marquee-card"
                style={{ aspectRatio: card.ratio, objectFit: card.ratio ? "cover" : undefined }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
