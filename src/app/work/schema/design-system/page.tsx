import type { Metadata } from "next";
import { Body, CardGrid, CaseStudyHeader, CaseStudyPage, ImageSlot, Section, Showcase, Spacer, Statement, Stats, Tile, faint, muted, rule } from "@/components/CaseStudy";
import ParallaxCollage, { type CollagePiece } from "@/components/ParallaxCollage";

export const metadata: Metadata = {
  title: "Design System Work — Schema — Phu Nguyen",
};

// Draft copy sourced from ~/Desktop/tcc/contexts/schema-portfolio/, verified against
// Notion meeting notes and the cleardemand-design-system GitHub history.

const meta = [
  { label: "Role", value: "Product Designer" },
  { label: "Projects", value: "Retail analytics platform, Open edX Paragon, A&E project tool, Spending Spotlight" },
  { label: "Timeframe", value: "Dec 2025 - Aug 2026" },
  { label: "Tools", value: "Figma, Claude Code, React + shadcn/ui, GitHub" },
];

const workflow = [
  { name: "Sketch the Intent", body: "Paper sketches, low-fidelity frames, or a quick tweak in the browser inspector to find the right spacing." },
  { name: "Prompt with Constraints", body: "Describe the component in Claude Code against the system’s rules, using semantic and component tokens instead of raw values." },
  { name: "Document as I Go", body: "Every component ships with a showcase entry covering its variants, states, and where it’s meant to be used." },
  { name: "Review Like Design", body: "Each pull request goes through design and engineering review before it becomes part of the system." },
];

const components = [
  { name: "MultiSelect", body: "Searchable multi-select with Select All and Clear, plus four trigger variants for filter bars, forms, sidebars, and tag-style chips. Selected items rise to the top when it’s reopened." },
  { name: "ChatBubble", body: "User and assistant message bubbles with delivery-state icons, a typing indicator, and suggested follow-up chips, all styled through their own component tokens." },
  { name: "AgenticSearchBar", body: "A search input with an AI affordance and a popover of suggested follow-up questions, reused in the assistant chat, home alerts, and the top bar." },
  { name: "StatusPill & SectionHeader", body: "Small, heavily reused patterns that keep status language and section hierarchy consistent across modules." },
];

const atoms = ["Label", "Breadcrumb", "RadioGroup", "GridRadioSelector", "Combobox", "ToggleGroup", "UserAvatar", "Badge (solid)", "Sheet", "Tabs", "ActivityItem", "SearchBar", "BubbleChart"];

const modules = [
  { tag: "Pricing", name: "Price Review", body: "A dense price review table, a slide-over detail panel with rule and competitor tabs, and an active-insights panel showing the most and least impactful changes." },
  { tag: "Markdown", name: "Event Detail", body: "An event detail layout with independent scroll zones, sales-velocity and inventory-projection charts, and stage controls for each markdown step." },
  { tag: "Performance", name: "Performance Summary", body: "KPI grids, CPI-vs-performance bubble charts, a price-compliance view, and grouped project cards, with the shared filter bar placed across the module." },
];

// Mockup boards for the Across Schema cards: palette, type, and components from each Figma file.
// Factor AE pieces were checked for logos and brand text before export.
const b = (file: string, alt: string, width: number, height: number, x: number, y: number, w: number, speed: number, radius = 2): CollagePiece =>
  ({ src: `/schema/design-system/boards/${file}`, alt, width, height, x, y, w, speed, radius });

const paragonBoard: CollagePiece[] = [
  b("pg-palette.jpg", "Paragon brand and core color scales", 2200, 2150, 2, 6, 30, 0.2, 1),
  b("pg-type.jpg", "Paragon display type scale in bold and regular", 1440, 620, 34, 4, 34, 0.35, 1),
  b("pg-card.png", "Paragon card component", 816, 1082, 70, 8, 20, 0.5),
  b("pg-alert.png", "Paragon success alert", 1446, 390, 33, 40, 34, 0.8),
  b("pg-toast.png", "Paragon toast with an action", 576, 202, 60, 58, 18, 1.1, 3),
  b("pg-search.png", "Paragon search field", 1056, 88, 5, 66, 30, 1.2),
  b("pg-button.png", "Paragon primary button", 237, 132, 87, 72, 8, 1.4, 8),
  b("pg-badge.png", "Paragon success badge", 156, 75, 8, 78, 5, 1.3, 10),
  b("pg-progress.png", "Paragon progress bar", 800, 32, 36, 76, 22, 1.0, 20),
];

const factorBoard: CollagePiece[] = [
  b("fae-palette.jpg", "A&E tool color system: main and secondary swatches", 2572, 1930, 3, 5, 44, 0.2, 1),
  b("fae-type.jpg", "A&E tool heading type scale", 1574, 520, 50, 4, 46, 0.35, 1),
  b("fae-toast.png", "A&E tool toast notification", 742, 256, 54, 26, 36, 0.8),
  b("fae-table.png", "A&E tool data table with row actions", 2514, 496, 18, 54, 72, 0.6, 1),
  b("fae-button.png", "A&E tool primary button", 372, 144, 8, 82, 11, 1.3, 6),
  b("fae-pill.png", "A&E tool status pill", 243, 96, 26, 84, 8, 1.4, 20),
  b("fae-chip.png", "A&E tool chip", 309, 72, 42, 85, 10, 1.2, 20),
  b("fae-progress.png", "A&E tool progress bar", 808, 48, 60, 87, 24, 1.0, 10),
];

const spotlightBoard: CollagePiece[] = [
  b("ss-palette.jpg", "Spending Spotlight color tokens: brand, rating, semantic, and action colors", 1278, 960, 3, 4, 40, 0.2, 1),
  b("ss-type.jpg", "Spending Spotlight type scale", 1278, 560, 3, 50, 40, 0.3, 1),
  b("ss-card-red.png", "Company card with a red rating", 720, 746, 46, 6, 25, 0.6, 3),
  b("ss-card-green.png", "Company card with a green rating", 720, 702, 73, 14, 24, 0.8, 3),
  b("ss-modal.png", "Onboarding modal, step one", 960, 1040, 48, 46, 26, 1.0, 3),
  b("ss-donut.png", "Spending impact donut chart", 560, 480, 76, 52, 20, 1.2, 3),
  b("ss-stat.png", "Monthly impact stat card", 324, 226, 24, 76, 12, 1.4, 6),
  b("ss-badge-green.png", "Green rating badge", 432, 84, 5, 80, 12, 1.3, 20),
  b("ss-badge-red.png", "Red rating badge", 384, 84, 5, 88, 10.5, 1.1, 20),
];

// Cover collage: pieces from all four systems (ClearDemand, Paragon, Factor AE, Spending Spotlight).
// ClearDemand pieces come from the prototype's synthetic fixtures; client logos and names are kept out.
const cd = (file: string, alt: string, width: number, height: number, x: number, y: number, w: number, speed: number, radius = 1.5): CollagePiece =>
  ({ src: `/schema/design-system/${file}`, alt, width, height, x, y, w, speed, radius });
const bd = (file: string, alt: string, width: number, height: number, x: number, y: number, w: number, speed: number, radius = 1.5): CollagePiece =>
  cd(`boards/${file}`, alt, width, height, x, y, w, speed, radius);

const coverCollage: CollagePiece[] = [
  // back: screens and palettes
  cd("performance-summary.jpg", "Performance Summary module", 2880, 1800, 2, 4, 40, 0.25, 0.8),
  cd("price-review-panel.jpg", "Price Review module with the detail panel open", 2880, 1800, 58, 2, 40, 0.4, 0.8),
  bd("pg-palette.jpg", "Paragon brand and core color scales", 2200, 2150, 43, 5, 14, 0.3, 1),
  bd("ss-palette.jpg", "Spending Spotlight color tokens", 1278, 960, 2, 38, 24, 0.7, 1),
  bd("fae-palette.jpg", "A&E tool color system", 2572, 1930, 74, 34, 24, 0.8, 1),
  // middle: type and data
  bd("pg-type.jpg", "Paragon display type scale", 1440, 620, 28, 30, 22, 0.6, 1),
  bd("fae-table.png", "A&E tool data table", 2514, 496, 30, 52, 40, 0.55, 1),
  cd("collage/categorical.jpg", "Categorical chart color tokens", 1808, 590, 4, 64, 26, 0.8),
  bd("ss-type.jpg", "Spending Spotlight type scale", 1278, 560, 70, 60, 26, 0.65, 1),
  // front: components
  bd("ss-card-red.png", "Spending Spotlight company card", 720, 746, 52, 20, 16, 1.3, 3),
  cd("chatbubble.jpg", "ChatBubble conversation", 1740, 1478, 30, 66, 20, 1.1),
  bd("pg-card.png", "Paragon card component", 816, 1082, 88, 12, 11, 1.5),
  bd("ss-donut.png", "Spending Spotlight impact donut chart", 560, 480, 52, 70, 14, 1.4, 3),
  bd("fae-toast.png", "A&E tool toast notification", 742, 256, 60, 44, 18, 1.7),
  bd("pg-toast.png", "Paragon toast with an action", 576, 202, 10, 28, 14, 1.8, 3),
  cd("collage/button.jpg", "Button variants", 1150, 238, 67, 84, 22, 1.6, 2),
  bd("ss-stat.png", "Spending Spotlight monthly impact stat card", 324, 226, 88, 74, 10, 2.0, 6),
  bd("fae-pill.png", "A&E tool status pill", 243, 96, 3, 86, 7, 2.2, 20),
  bd("pg-button.png", "Paragon primary button", 237, 132, 43, 90, 6, 2.1, 8),
  bd("ss-badge-green.png", "Spending Spotlight green rating badge", 432, 84, 13, 90, 12, 1.9, 20),
  cd("collage/alert.jpg", "Alert variants", 1220, 492, 4, 12, 20, 1.2),
];

const otherWork = [
  {
    client: "Open edX · Paragon",
    title: "Shared Design Collateral",
    board: { pieces: paragonBoard, aspect: "1200 / 440", bg: "#38383B" },
    body: "Part of the team that moved Open edX’s shared Figma libraries into one community-maintained instance. I remapped Paragon’s old color styles to variables, matching the live site exactly. I also migrated components into the new file, flagged React components missing from Figma, reported an accessibility issue upstream, and co-presented the project at the Open edX Conference.",
  },
  {
    client: "A&E project-management tool",
    title: "Figma System for A&E Software",
    board: { pieces: factorBoard, aspect: "1200 / 820", bg: "#0F6B6D" },
    body: "Contributed early foundation components and navigation explorations to a Figma design system for an architecture and engineering project-management tool. A senior designer led it. Their feedback on this project taught me to cut unnecessary variants and layers from a component system.",
  },
  {
    client: "Spending Spotlight",
    title: "Visual Language & Card System",
    board: { pieces: spotlightBoard, aspect: "1200 / 820", bg: "#A8A6A1" },
    body: "As the designer on an early-stage product, I explored three color palettes. The one we chose separates brand from action colors, keeps semantic rating colors, and adds chart colors. I also set a clean sans-serif type scale, and standardized the card system with a type taxonomy, content toggles, fixed padding, and line caps.",
  },
];

export default function SchemaDesignSystemPage() {
  return (
    <CaseStudyPage>
      <CaseStudyHeader
        title="Design System Work"
        summary="Designing components and product screens directly in code with AI, and building the Figma systems behind them."
        meta={meta}
      />

      {/* Cover: tokens, components, and screens drift at different speeds as you scroll */}
      <section
        aria-label="Tokens, components, and screens from four design systems I worked on"
        className="overflow-hidden"
        style={{
          padding: "clamp(24px, 4vw, 64px) var(--page-pad-x) clamp(64px, 8vw, 120px)",
          background:
            "linear-gradient(180deg, #FAFAF8 0%, #DFE0E1 30%, #DFE0E1 70%, #FAFAF8 100%)",
        }}
      >
        <ParallaxCollage pieces={coverCollage} aspectRatio="1200 / 920" drift={170} />
      </section>

      <Section title="A Retail Analytics Platform">
        <Body>
          The client is a retail pricing and promotions analytics platform. Its modules had been built by different
          teams at different times, so filters, tables, and layouts behaved differently from screen to screen. In 2026,
          a three-person Schema team spent twelve weeks building a design system and an interactive prototype on
          shadcn/ui and React.
        </Body>
        <Body last>
          Our technical lead set up the repository, the token architecture, and the prototyping workflow. Our senior
          designer built the data table and filter bar. I designed and built components and product modules inside
          that system, working in code through AI-assisted design-to-code workflows instead of handing off Figma files.
        </Body>
        <Spacer size={56} />
        {/* Team outcomes, plus my own PR count; all from the Quality and Outcome section */}
        <Stats
          items={[
            { value: "12", label: "Weeks, three-person team" },
            { value: "~55", label: "Components in the system" },
            { value: "9", label: "Prototyped product modules" },
            { value: "20", label: "Pull requests I merged" },
          ]}
        />
      </Section>

      <Section title="Designing by Prompting">
        <Body last>
          This was a new way of working for me. Instead of drawing a component and handing it off, I described it to
          Claude Code and shaped it until it matched the design intent. Early on, I learned to stop pointing at raw
          color values and to build on the system’s semantic tokens, so components stay easy to retheme later.
        </Body>
        <Spacer />
        <CardGrid items={workflow} />
      </Section>

      <Section title="Components I Designed" layout="stack">
        <Body last>
          Over the engagement I contributed about twenty atoms and molecules to the library. Many of them are the small
          pieces analysts touch constantly: selection controls, status, search, and the building blocks of the
          AI assistant experience.
        </Body>
        <Spacer />
        <CardGrid items={components} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "40px 0 48px" }}>
          {atoms.map((name) => (
            <span key={name} style={{ fontSize: "0.8125rem", color: muted, border: rule, padding: "6px 12px" }}>
              {name}
            </span>
          ))}
        </div>
        {/* Bento: each component on its own tile, as it appears in the system's showcase */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-5 md:row-span-2">
            <Tile label="MultiSelect" src="/schema/design-system/multiselect.jpg" width={1740} height={1832} from="left"
              alt="MultiSelect variants: empty, preselected, grouped, field composition with an error state, hug, field, and tag-chip triggers, and disabled" />
          </div>
          <div className="md:col-span-7">
            <Tile label="ChatBubble" src="/schema/design-system/chatbubble.jpg" width={1740} height={1478} from="right" delay={0.06}
              alt="ChatBubble conversation with sent, sending, and failed messages, a chart reply, a typing indicator, and follow-up chips" />
          </div>
          <div className="md:col-span-7">
            <Tile label="AgenticSearchBar" src="/schema/design-system/agentic-search.jpg" width={1772} height={648} from="right" delay={0.12}
              alt="AgenticSearchBar idle, and focused with its popover of suggested questions" />
          </div>
        </div>
      </Section>

      <Section title="From Paper Sketch to AI Chat Components">
        <Body>
          The client wanted its assistant to feel built into the product, not bolted on as a separate chatbot. I
          designed the conversation pieces for it: user and assistant bubbles, message states, agentic indicators, and
          follow-up prompt chips. I started from paper sketches and low-fidelity concepts, then used them to steer
          Claude as it built each component.
        </Body>
        <Body last>
          Because every color and radius runs through the chat’s own component tokens, the pieces could be restyled
          for the new brand without touching their structure. They later became the building blocks of a sales demo
          that showed off agentic workflows across the product.
        </Body>
        <Spacer />
        <ImageSlot label="Sketch → prototype: the chat components side by side" />
      </Section>

      <Statement>Prompting is still designing. The quality comes from clear intent, not from the tool.</Statement>

      <Section title="Modules I Built Out" layout="stack">
        <Body last>
          Once the library was in place, I took on three of the prototype’s product modules. I composed each one
          from the system’s components, recreated the key workflows from the legacy product, and filled in the gaps
          with new, reusable pieces.
        </Body>
        <Spacer />
        <CardGrid items={modules} />
        <Spacer />
        <div className="flex flex-col gap-10">
          <Showcase
            src="/schema/design-system/performance-summary.jpg"
            alt="Performance Summary module: a filter bar, a grid of KPI cards for revenue, profit, units, margin, promo lift, and CPI, and trend charts comparing this year to last"
            width={2880}
            height={1800}
            caption="Performance Summary: KPI grid and trend charts. All data is synthetic."
            bare
          />
          <Showcase
            src="/schema/design-system/price-review-panel.jpg"
            alt="Price Review module: a price table with the detail panel open, showing rule cards marked fulfilled and impactful for the selected price family"
            width={2880}
            height={1800}
            caption="Pricing: the review table with the detail panel open."
            from="left"
            bare
          />
          <Tile label="Performance · CPI vs. performance by subcategory" src="/schema/design-system/performance-bubbles.jpg" width={2304} height={906} surface="#ffffff" contain={false} from="right"
            alt="Two bubble charts plotting performance against CPI by subcategory, with quadrants for well positioned, outperforming, reprice opportunity, and at risk" />
        </div>
      </Section>

      <Section title="Quality and Outcome">
        <Body>
          Building in code made accessibility issues easier to catch. I flagged that the warning badge’s color
          pairing failed WCAG AA contrast, and fixed focus-ring alignment on inputs and search.
        </Body>
        <Body last>
          By the end, the team had delivered a system of about 55 components on a three-layer token architecture,
          nine prototyped product modules, and a workflow the client’s product managers now use to build
          prototypes on their own. I contributed 20 merged pull requests to that effort.
        </Body>
      </Section>

      <Section title="Across Schema" layout="stack">
        <div className="flex flex-col" style={{ gap: "clamp(72px, 10vw, 128px)" }}>
          {otherWork.map(({ client, title, body, board }, i) => (
            <article key={title}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8" style={{ marginBottom: "32px" }}>
                <div className="md:col-span-5">
                  <p style={{ fontSize: "0.8125rem", color: faint, marginBottom: "8px", fontVariantNumeric: "tabular-nums" }}>0{i + 1} · {client}</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.6vw, 2rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1, textWrap: "balance" }}>{title}</h3>
                </div>
                <p className="md:col-span-7" style={{ fontSize: "1rem", lineHeight: 1.7, color: muted, maxWidth: "60ch", textWrap: "pretty" }}>{body}</p>
              </div>
              {/* Board breaks out of the text column, up to 1440px, so the pieces read at a large size */}
              <div className="relative left-1/2 w-[min(calc(100vw-32px),1440px)] -translate-x-1/2 overflow-hidden" style={{ background: board.bg, padding: "clamp(12px, 2vw, 28px)" }}>
                <ParallaxCollage pieces={board.pieces} aspectRatio={board.aspect} drift={16} fill />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="What I Took Away" last>
        <CardGrid
          items={[
            { name: "Tokens Are a Design Decision", body: "Choosing a semantic token over a raw color is what lets a component survive a rebrand. I learned to make that call on every component." },
            { name: "Small Pieces Carry a System", body: "Selection controls, status pills, and headers don’t look impressive, but their consistency is what makes dense screens feel coherent." },
          ]}
        />
      </Section>
    </CaseStudyPage>
  );
}
