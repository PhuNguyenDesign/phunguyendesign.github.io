// Two editorial rows of skills scrolling in opposite directions, with a teal diamond between items.
// Hovering a row pauses it (shared .hmarquee CSS) and the word under the pointer turns teal.
// Each row's items are doubled so the -50% loop is seamless; the copy is hidden from screen readers.

// Both rows travel at the same speed. Type scales with the viewport, so the ratio of the rows'
// widths holds at every size; durations come from measuring them (top row is ~1.7x the bottom).
// Update both if the items change.
const ROWS: { items: string[]; dir: "left" | "right"; duration: number }[] = [
  { items: ["Product Design", "Interaction Design", "Design Systems", "Visual Design"], dir: "left", duration: 59.8 },
  { items: ["Prototyping", "AI Interfaces", "Research"], dir: "right", duration: 35.2 },
];

function Diamond() {
  return (
    <svg aria-hidden width="0.42em" height="0.42em" viewBox="0 0 10 10" className="shrink-0" style={{ margin: "0 0.55em" }}>
      <path d="M5 0 10 5 5 10 0 5Z" fill="#0F6B6D" />
    </svg>
  );
}

export default function SkillsMarquee() {
  const all = Array.from(new Set(ROWS.flatMap((r) => r.items)));
  return (
    <section aria-label="Skills" className="select-none" style={{ padding: "clamp(1rem, 2vw, 1.5rem) 0 0" }}>
      <p className="sr-only">{all.join(", ")}</p>
      <div aria-hidden className="flex flex-col" style={{ gap: "clamp(0.1rem, 0.4vw, 0.35rem)", paddingBottom: "clamp(1rem, 2vw, 1.5rem)" }}>
        {ROWS.map((row, r) => (
          <div key={r} className="hmarquee" data-dir={row.dir}>
            <div className="hmarquee-track items-center" style={{ animationDuration: `${row.duration}s` }}>
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center">
                  {/* Repeated within each half so short rows still overflow wide screens */}
                  {[...row.items, ...row.items].map((item, i) => (
                    <span key={`${copy}-${i}`} className="flex items-center" style={{ fontSize: "clamp(1.75rem, 3.6vw, 3.5rem)" }}>
                      <span
                        className="whitespace-nowrap text-black transition-colors duration-200 hover:text-[#0F6B6D]"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 600,
                          letterSpacing: "-0.03em",
                          lineHeight: 1.05,
                          textTransform: "uppercase",
                        }}
                      >
                        {item}
                      </span>
                      <Diamond />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
