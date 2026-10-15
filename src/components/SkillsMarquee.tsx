// Two editorial rows of skills scrolling in opposite directions, with a teal diamond between items.
// Hovering a row pauses it (shared .hmarquee CSS) and the word under the pointer turns teal.
// Each row's items are doubled so the -50% loop is seamless; the copy is hidden from screen readers.

const ROWS: { items: string[]; dir: "left" | "right"; serif: boolean; duration: number }[] = [
  { items: ["Product Design", "Interaction Design", "Design Systems", "Visual Design"], dir: "left", serif: false, duration: 38 },
  { items: ["Prototyping", "AI Interfaces", "Research"], dir: "right", serif: true, duration: 44 },
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
    <section aria-label="Skills" className="select-none" style={{ padding: "clamp(2.5rem, 5vw, 4.5rem) 0 0", borderBottom: "1px solid rgba(56,56,59,0.16)" }}>
      <p className="sr-only">{all.join(", ")}</p>
      <div aria-hidden className="flex flex-col" style={{ gap: "clamp(0.25rem, 1vw, 0.75rem)", paddingBottom: "clamp(2.5rem, 5vw, 4.5rem)" }}>
        {ROWS.map((row, r) => (
          <div key={r} className="hmarquee" data-dir={row.dir}>
            <div className="hmarquee-track items-center" style={{ animationDuration: `${row.duration}s` }}>
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center">
                  {/* Repeated within each half so short rows still overflow wide screens */}
                  {[...row.items, ...row.items].map((item, i) => (
                    <span key={`${copy}-${i}`} className="flex items-center" style={{ fontSize: "clamp(2.5rem, 7.5vw, 7rem)" }}>
                      <span
                        className={`whitespace-nowrap text-black transition-colors duration-200 hover:text-[#0F6B6D] ${row.serif ? "font-instrument-serif italic" : ""}`}
                        style={{
                          fontFamily: row.serif ? undefined : "var(--font-display)",
                          fontWeight: row.serif ? 400 : 600,
                          letterSpacing: row.serif ? "-0.02em" : "-0.045em",
                          lineHeight: 1.05,
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
