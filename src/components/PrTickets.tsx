import { prs } from "@/lib/prs";

// Merged PRs as GitHub-style cards in columns that scroll only while the parent `.group` is hovered or focused.
// Columns alternate direction; each column renders twice so the loop has no seam.
function Ticket({ n, title, merged, add, del }: (typeof prs)[number]) {
  return (
    <div className="mb-3 bg-white" style={{ boxShadow: "0 0 0 1px rgba(56,56,59,0.14)", padding: "12px 14px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }}>
      <div className="flex items-start gap-2">
        {/* merged icon */}
        <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" style={{ flex: "0 0 auto", marginTop: "2px" }}>
          <path fill="#8250df" d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z" />
        </svg>
        <p style={{ fontSize: "13px", fontWeight: 600, lineHeight: 1.35, color: "#1f2328" }}>{title}</p>
      </div>
      <p style={{ fontSize: "11.5px", color: "#59636e", marginTop: "6px", paddingLeft: "24px" }}>
        #{n} · merged {merged} · <span style={{ color: "#1a7f37" }}>+{add}</span> <span style={{ color: "#d1242f" }}>−{del}</span>
      </p>
    </div>
  );
}

export default function PrTickets({ columns = 3 }: { columns?: number }) {
  const cols = Array.from({ length: columns }, (_, c) => prs.filter((_, i) => i % columns === c));
  return (
    <div
      className="relative grid h-full gap-3 overflow-hidden"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, maskImage: "linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)" }}
      aria-label={`${prs.length} merged pull requests`}
    >
      {cols.map((col, c) => (
        <div key={c} className="overflow-hidden">
          <div className="pr-track" data-dir={c % 2 ? "down" : "up"} style={{ animationDuration: `${34 + c * 6}s` }}>
            {[...col, ...col].map((p, i) => (
              <div key={i} aria-hidden={i >= col.length || undefined}>
                <Ticket {...p} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
