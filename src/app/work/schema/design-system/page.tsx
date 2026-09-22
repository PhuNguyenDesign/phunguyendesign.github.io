import type { Metadata } from "next";
import { Body, CardGrid, CaseStudyHeader, CaseStudyPage, ImagePair, ImageSlot, Section, Spacer, faint, muted, rule } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Design System Work — Schema — Phu Nguyen",
};

// Draft copy sourced from ~/Desktop/tcc/contexts/schema-portfolio/, verified against
// Notion meeting notes and the cleardemand-design-system GitHub history.
// ImageSlot frames are placeholders until cleared visuals are exported.

const meta = [
  { label: "Role", value: "Product Designer" },
  { label: "Projects", value: "ClearDemand, Open edX Paragon, Factor AE, Spending Spotlight" },
  { label: "Timeframe", value: "Dec 2025 – Aug 2026" },
  { label: "Tools", value: "Figma, Claude Code, React + shadcn/ui, GitHub" },
];

const workflow = [
  { tag: "01", name: "Sketch the intent", body: "Paper sketches, low-fidelity frames, or a quick tweak in the browser inspector to find the right spacing." },
  { tag: "02", name: "Prompt with constraints", body: "Describe the component in Claude Code against the system's rules, using semantic and component tokens instead of raw values." },
  { tag: "03", name: "Document as I go", body: "Every component ships with a showcase entry covering its variants, states, and where it's meant to be used." },
  { tag: "04", name: "Review like design", body: "Each pull request goes through design and engineering review before it becomes part of the system." },
];

const components = [
  { name: "MultiSelect", body: "Searchable multi-select with Select All and Clear, plus four trigger variants for filter bars, forms, sidebars, and tag-style chips. Selected items rise to the top when it's reopened." },
  { name: "ChatBubble", body: "User and assistant message bubbles with delivery-state icons, a typing indicator, and suggested follow-up chips, all styled through their own component tokens." },
  { name: "AgenticSearchBar", body: "A search input with an AI affordance and a popover of suggested follow-up questions, reused in the assistant chat, home alerts, and the top bar." },
  { name: "StatusPill & SectionHeader", body: "Small, heavily reused patterns that keep status language and section hierarchy consistent across modules." },
];

const atoms = ["Label", "Breadcrumb", "RadioGroup", "GridRadioSelector", "Combobox", "ToggleGroup", "UserAvatar", "Badge (solid)", "Sheet", "Tabs", "ActivityItem", "SearchBar", "BubbleChart"];

const modules = [
  { tag: "Pricing", name: "Price review", body: "A dense price review table, a slide-over detail panel with rule and competitor tabs, and an active-insights panel showing the most and least impactful changes." },
  { tag: "Markdown", name: "Event detail", body: "An event detail layout with independent scroll zones, sales-velocity and inventory-projection charts, and stage controls for each markdown step." },
  { tag: "Performance", name: "Performance summary", body: "KPI grids, CPI-vs-performance bubble charts, a price-compliance view, and grouped project cards, with the shared filter bar placed across the module." },
];

const otherWork = [
  {
    client: "Open edX · Paragon",
    title: "Shared Design Collateral",
    body: "Part of the team that moved Open edX's shared Figma libraries into one community-maintained instance. I remapped Paragon's old color styles to variables, matching the live site exactly. I also migrated components into the new file, flagged React components missing from Figma, reported an accessibility issue upstream, and co-presented the project at the Open edX Conference.",
  },
  {
    client: "Factor AE",
    title: "Figma system for A&E software",
    body: "Contributed early foundation components and navigation explorations to a Figma design system for an architecture and engineering project-management tool. A senior designer led it. Their feedback on this project taught me to cut unnecessary variants and layers from a component system.",
  },
  {
    client: "Spending Spotlight",
    title: "Visual language & card system",
    body: "As the designer on an early-stage product, I explored three color palettes. The one we chose separates brand from action colors, keeps semantic rating colors, and adds chart colors. I also paired an editorial serif with a sans-serif, and standardized the card system with a type taxonomy, content toggles, fixed padding, and line caps.",
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

      <Section title="01 – ClearDemand">
        <Body>
          ClearDemand is a retail pricing and promotions analytics platform. Its modules had been built by different
          teams at different times, so filters, tables, and layouts behaved differently from screen to screen. In 2026,
          a three-person Schema team spent twelve weeks building a design system and an interactive prototype on
          shadcn/ui and React.
        </Body>
        <Body last>
          Our technical lead set up the repository, the token architecture, and the prototyping workflow. Our senior
          designer built the data table and filter bar. I designed and built components and product modules inside
          that system, working in code through AI-assisted design-to-code workflows instead of handing off Figma files.
        </Body>
        <Spacer />
        <ImageSlot label="Hero: a module I built, running on the design system (synthetic data)" />
      </Section>

      <Section title="Designing by prompting">
        <Body last>
          This was a new way of working for me. Instead of drawing a component and handing it off, I described it to
          Claude Code and shaped it until it matched the design intent. Early on, I learned to stop pointing at raw
          color values and to build on the system&apos;s semantic tokens, so components stay easy to retheme later.
        </Body>
        <Spacer />
        <CardGrid items={workflow} min={220} />
      </Section>

      <Section title="Components I designed">
        <Body last>
          Over the engagement I contributed about twenty atoms and molecules to the library. Many of them are the small
          pieces analysts touch constantly: selection controls, status, search, and the building blocks of the
          AI assistant experience.
        </Body>
        <Spacer />
        <CardGrid items={components} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "40px 0 48px" }}>
          {atoms.map((name) => (
            <span key={name} style={{ fontSize: "0.8125rem", color: muted, border: rule, borderRadius: "999px", padding: "6px 14px" }}>
              {name}
            </span>
          ))}
        </div>
        <ImagePair labels={["MultiSelect: the four trigger variants", "ChatBubble and AgenticSearchBar in the assistant chat"]} />
      </Section>

      <Section title="From paper sketch to AI chat components">
        <Body>
          ClearDemand wanted its assistant to feel built into the product, not bolted on as a separate chatbot. I
          designed the conversation pieces for it: user and assistant bubbles, message states, agentic indicators, and
          follow-up prompt chips. I started from paper sketches and low-fidelity concepts, then used them to steer
          Claude as it built each component.
        </Body>
        <Body last>
          Because every color and radius runs through the chat&apos;s own component tokens, the pieces could be restyled
          for the new brand without touching their structure. They later became the building blocks of a sales demo
          that showed off agentic workflows across the product.
        </Body>
        <Spacer />
        <ImageSlot label="Sketch → prototype: the chat components side by side" />
      </Section>

      <Section title="Modules I built out">
        <Body last>
          Once the library was in place, I took on three of the prototype&apos;s product modules. I composed each one
          from the system&apos;s components, recreated the key workflows from the legacy product, and filled in the gaps
          with new, reusable pieces.
        </Body>
        <Spacer />
        <CardGrid items={modules} />
        <Spacer />
        <ImagePair labels={["Pricing: review table with detail panel open", "Performance: summary with bubble charts"]} />
      </Section>

      <Section title="Quality and outcome">
        <Body>
          Building in code made accessibility issues easier to catch. I flagged that the warning badge&apos;s color
          pairing failed WCAG AA contrast, and fixed focus-ring alignment on inputs and search.
        </Body>
        <Body last>
          By the end, the team had delivered a system of about 55 components on a three-layer token architecture,
          nine prototyped product modules, and a workflow ClearDemand&apos;s product managers now use to build
          prototypes on their own. I contributed 20 merged pull requests to that effort.
        </Body>
      </Section>

      <Section title="02 – Across Schema">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          {otherWork.map(({ client, title, body }) => (
            <div key={title}>
              <ImageSlot label={`${title} visual`} ratio="4/3" />
              <p style={{ fontSize: "0.8125rem", color: faint, marginTop: "20px", marginBottom: "4px" }}>{client}</p>
              <p style={{ fontSize: "1.125rem", fontFamily: "var(--font-display)", marginBottom: "12px" }}>{title}</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted }}>{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What I took away" last>
        <CardGrid
          min={260}
          items={[
            { name: "Tokens are a design decision", body: "Choosing a semantic token over a raw color is what lets a component survive a rebrand. I learned to make that call on every component." },
            { name: "Prompting is still designing", body: "The quality came from clear intent, like sketches, constraints, and states, not from the tool. Vague prompts produced vague components." },
            { name: "Small pieces carry a system", body: "Selection controls, status pills, and headers don't look impressive, but their consistency is what makes dense screens feel coherent." },
          ]}
        />
      </Section>
    </CaseStudyPage>
  );
}
