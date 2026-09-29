import type { Metadata } from "next";
import Link from "next/link";
import { Body, CardGrid, CaseStudyHeader, CaseStudyPage, Figure, Section, Spacer, Statement, Tile, faint } from "@/components/CaseStudy";
import FloatIn from "@/components/FloatIn";

export const metadata: Metadata = {
  title: "Agentic Design — Schema — Phu Nguyen",
};

// Draft copy verified against GitHub (cleardemand-design-system, schema-website #119),
// Notion 1:1s and ClearDemand meetings (Apr–Jul 2026), and Drive notes (Jul 2026).

const meta = [
  { label: "Role", value: "Product Designer" },
  { label: "Projects", value: "ClearDemand, Schema website, this portfolio" },
  { label: "Timeframe", value: "Apr - Sep 2026" },
  { label: "Tools", value: "Claude Code, Codex, GitHub, Figma" },
];

const learning = [
  { tag: "April", name: "The Command Line", body: "I set up Claude Code in the terminal and worked through Anthropic’s courses on AI agents alongside Git fundamentals." },
  { tag: "May", name: "My First Pull Request", body: "I cleaned up a tangled local setup, opened my first design-system PR, and learned to commit, branch, and review." },
  { tag: "June - July", name: "Working at Speed", body: "With the repo’s agent instructions in place, most blockers were solved in minutes, either by Claude or by a teammate." },
];

const process = [
  { name: "Frame the Intent", body: "Start from a sketch, a reference, or a quick tweak in the browser inspector, not a blank prompt." },
  { name: "Prompt Within the Rules", body: "The repo’s agent instructions carry the system’s conventions, so each prompt only has to describe the design." },
  { name: "Jump in When It Drifts", body: "The agent handles most of the build. When spacing, states, or tokens go off-system, I step in and correct it." },
  { name: "Hand It to Review", body: "Every change lands as a pull request with a live preview and a note on the design decisions reviewers should check." },
];

// Excerpts from my own pull request descriptions (cleardemand-design-system #203 and #115),
// trimmed for length. The client's assistant name is replaced with "the assistant".
const prExcerpts = [
  {
    number: "#203",
    title: "Add ChatBubble Molecule",
    meta: "Merged Jul 8, 2026 · +332 −0 · 6 files",
    heading: "For Reviewers",
    lines: [
      "`suggestions` is intentionally a flat `string[]`. The callback stays dumb; conversation state belongs in the future assistant molecule.",
      "Tail corner is `0px`; bubble radius is `--cd-radius-xl` (12px), matching dialog corners.",
      "`role=\"log\"` + `aria-live=\"polite\"` go on the parent message list, not on individual bubbles.",
    ],
  },
  {
    number: "#115",
    title: "Add AgenticSearchBar molecule",
    meta: "Merged Jun 5, 2026 · +310 −1 · 6 files",
    heading: "Tokens",
    lines: [
      "13 new component tokens (`--agenticsearch-*`), all mapped to semantic tokens.",
      "No primitive `--cd-*` references in TSX.",
      "Accessibility: role=combobox, aria-haspopup=listbox, aria-expanded. No aria-live region yet, noted in the showcase.",
    ],
  },
];

// Render `code` spans inside a line.
function Code({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/).map((part, i) =>
        part.startsWith("`") ? (
          <code key={i} style={{ backgroundColor: "rgba(15,107,109,0.1)", color: "#0F6B6D", padding: "1px 5px" }}>{part.slice(1, -1)}</code>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// Components from my merged PRs on cleardemand-design-system (verified with gh), largest first.
const d = "/schema/design-system", a = "/schema/agentic/built";
const built = [
  { pr: 203, name: "ChatBubble", src: `${d}/chatbubble.jpg`, w: 1740, h: 1478, ratio: "4/3", span: "md:col-span-6 md:row-span-2", alt: "ChatBubble conversation with message states, a chart reply, and follow-up chips" },
  { pr: 224, name: "MultiSelect", src: `${d}/multiselect.jpg`, w: 1740, h: 1832, ratio: "4/3", span: "md:col-span-6 md:row-span-2", alt: "MultiSelect trigger variants and states" },
  { pr: 115, name: "AgenticSearchBar", src: `${d}/agentic-search.jpg`, w: 1772, h: 648, ratio: "16/7", span: "md:col-span-8", alt: "AgenticSearchBar idle and with its suggestion popover" },
  { pr: 8, name: "UserAvatar", src: `${a}/useravatar.jpg`, w: 362, h: 150, ratio: "16/7", span: "md:col-span-4", alt: "UserAvatar sizes" },
  { pr: 145, name: "GridRadioSelector", src: `${a}/grid-radio-selector.jpg`, w: 1092, h: 928, ratio: "1/1", span: "md:col-span-4", alt: "GridRadioSelector with icons, disabled item, and three columns" },
  { pr: 146, name: "RadioGroup", src: `${a}/radio-group.jpg`, w: 826, h: 900, ratio: "1/1", span: "md:col-span-4", alt: "RadioGroup vertical, horizontal, and fieldset variants" },
  { pr: 202, name: "Label", src: `${a}/label.jpg`, w: 576, h: 768, ratio: "1/1", span: "md:col-span-4", alt: "Label with required, optional, error, and disabled fields" },
  { pr: 147, name: "Combobox", src: `${d}/collage/combobox.jpg`, w: 1740, h: 688, ratio: "16/7", span: "md:col-span-6", alt: "Combobox single and multi select" },
  { pr: 8, name: "ActivityItem", src: `${a}/activityitem.jpg`, w: 1740, h: 650, ratio: "16/7", span: "md:col-span-6", alt: "ActivityItem with and without avatars" },
  { pr: 189, name: "StatusPill", src: `${a}/statuspill.jpg`, w: 974, h: 524, ratio: "16/9", span: "md:col-span-4", alt: "StatusPill text, dot, icon, and custom label variants" },
  { pr: 214, name: "SectionHeader", src: `${a}/sectionheader.jpg`, w: 1740, h: 438, ratio: "16/9", span: "md:col-span-4", alt: "SectionHeader with description and actions" },
  { pr: 168, name: "ToggleGroup", src: `${d}/collage/togglegroup.jpg`, w: 636, h: 504, ratio: "16/9", span: "md:col-span-4", alt: "ToggleGroup variants" },
  { pr: 257, name: "AlertsRail · solid badge cards", src: `${a}/alertsrail.jpg`, w: 1740, h: 296, ratio: "21/6", span: "md:col-span-8", alt: "AlertsRail cards with solid severity badges" },
  { pr: 119, name: "Breadcrumb", src: `${d}/collage/breadcrumb.jpg`, w: 616, h: 280, ratio: "21/9", span: "md:col-span-4", alt: "Breadcrumb" },
];

const aiUi = [
  { tag: "ChatBubble", name: "The Conversation Itself", body: "User and assistant bubbles with sending, sent, and error states, a typing indicator, and suggested follow-up chips. All of it is styled through the chat’s own component tokens." },
  { tag: "AgenticSearchBar", name: "An Entry Point for the Assistant", body: "A search field with an AI affordance and a popover of suggested questions, pulled out of the top bar so it can be reused in chat and home alerts." },
];

export default function SchemaAgenticPage() {
  return (
    <CaseStudyPage>
      <CaseStudyHeader
        title="Agentic Design"
        summary="Learning to design through AI agents, from prompting production-ready components to designing the interfaces an AI assistant lives in."
        meta={meta}
      />

      <Section title="Starting from Zero">
        <Body>
          In early 2026, the way our team worked changed quickly. Prototypes built in code with Claude were starting to
          beat what we could make in Figma, and I was honestly unsure where a designer fit in. My manager’s view was
          that designers would soon direct teams of AI agents, which meant getting fluent with tools I had never
          touched.
        </Body>
        <Body last>
          So I treated it as a skill to build, not a threat. I started with the terminal, Git, and Claude Code, and used
          a real client project as the place to learn.
        </Body>
        <Spacer />
        <CardGrid items={learning} />
      </Section>

      <Section title="Designing by Prompting" layout="stack">
        <Body>
          On ClearDemand, our technical lead set up a repository where the design system’s rules lived in
          instruction files that AI agents follow by default. Inside that setup, I designed about twenty components and
          three product modules by describing them to Claude Code, then reviewing and correcting what it built.
        </Body>
        <Body last>
          Over two months I opened 27 pull requests this way. Most of them were generated with Claude Code and then
          shaped by hand.
        </Body>
        <Spacer />
        <CardGrid items={process} />
        <Spacer />
        {/* Real PR text, set as a document rather than a screenshot of GitHub */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {prExcerpts.map((pr, i) => (
            <FloatIn key={pr.number} from={i ? "right" : "left"} delay={i * 0.06}>
              <article className="h-full" style={{ backgroundColor: "#FFFFFF", boxShadow: "0 0 0 1px rgba(56,56,59,0.14)", padding: "clamp(20px, 3vw, 36px)", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
                <p style={{ fontSize: "0.75rem", color: faint, letterSpacing: "0.04em" }}>{pr.number} · {pr.meta}</p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 600, letterSpacing: "-0.015em", margin: "10px 0 22px" }}>{pr.title}</p>
                <p style={{ fontSize: "0.8125rem", fontWeight: 600, marginBottom: "12px" }}>## {pr.heading}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {pr.lines.map((line) => (
                    <li key={line} style={{ fontSize: "0.8125rem", lineHeight: 1.65, color: "#38383B", paddingLeft: "16px", textIndent: "-16px" }}>
                      – <Code text={line} />
                    </li>
                  ))}
                </ul>
              </article>
            </FloatIn>
          ))}
        </div>
        <p style={{ fontSize: "0.8125rem", color: faint, marginTop: "12px" }}>Excerpts from my pull request descriptions, trimmed for length.</p>
      </Section>

      <Section title="The Lesson That Stuck: Say What You Mean">
        <Body>
          On my first component, I told Claude to use specific raw colors by name. It did exactly that, and quietly
          worked around the system’s semantic tokens. Nothing looked wrong, but the component would have broken the
          next time the brand changed.
        </Body>
        <Body last>
          After a review with our technical lead, I switched to prompting for component-level tokens built on semantic
          ones. By my AgenticSearchBar pull request a few weeks later, the component had its own token set and no raw
          color references at all.
        </Body>
      </Section>

      <Statement>Agents do what you say, so the design judgment has to be in the prompt.</Statement>

      <Section title="Designing for AI, with AI" layout="stack">
        <Body last>
          ClearDemand wanted an assistant that felt built into the product. From the specs and references our lead
          provided, I designed and built its conversation components, starting from paper sketches and low-fidelity
          concepts that I used to steer Claude.
        </Body>
        <Spacer />
        <CardGrid items={aiUi} />
        <Spacer />
        {/* Everything I shipped to the system, from my merged pull requests. Captured from the prototype's showcase. */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-12">
          {built.map((b, i) => (
            <div key={b.name} className={b.span}>
              <Tile label={`#${b.pr} · ${b.name}`} src={b.src} width={b.w} height={b.h} alt={b.alt} ratio={b.ratio} delay={(i % 3) * 0.05} />
            </div>
          ))}
        </div>
        <p style={{ fontSize: "0.8125rem", color: faint, marginTop: "12px" }}>
          Components from my merged pull requests, captured from the design system’s showcase with synthetic data.
        </p>
      </Section>

      <Section title="Beyond One Project">
        <Body>
          On Schema’s own website, my manager suggested that long articles show reading progress with color instead
          of motion. I built it with Claude Code: a strip of confetti tiles that starts gray and fills with color as you
          read, kept in sync across the page and behind a toggle so the team could compare it with the old version.
        </Body>
        <Body last>
          I also built this portfolio the same way, working with Claude Code from the first commit.
        </Body>
        <Spacer />
        <div className="flex flex-col gap-10">
          <Figure
            src="/schema/agentic/insights-article.jpg"
            alt="A Schema Insights article halfway through: the confetti strip under the sticky header is colored on the left half and gray on the right"
            width={2880}
            height={1800}
            caption="An Insights article, halfway through. The strip under the sticky header tracks reading progress."
            from="left"
          />
          <Figure
            src="/schema/agentic/confetti-progress.jpg"
            alt="The confetti strip at three points: all gray at the top of the article, half colored halfway through, fully colored at the end"
            width={2850}
            height={800}
            caption="The same strip at the start, middle, and end of an article."
            from="right"
          />
        </div>
      </Section>

      <Section title="What Didn’t Work">
        <Body last>
          Not every experiment paid off. Early on, our team tried having Codex pull reusable components out of the old
          prototype’s codebase in one pass. It kept reaching for large, page-level patterns before the small pieces
          existed. That’s why we built the atoms and molecules first, one guided prompt at a time.
        </Body>
      </Section>

      <Section title="What I Took Away" last>
        <CardGrid
          items={[
            { name: "Agents Amplify Intent", body: "Clear sketches, constraints, and states produce good components. A vague prompt produces a vague component, just faster." },
            { name: "Put the Rules Where the Agent Reads Them", body: "The system worked because its conventions lived in the repo, not in anyone’s head." },
            { name: "Design Is Knowing When to Step In", body: "“Claude Code does it pretty well, but then that’s when I jump in.” The value is in the corrections." },
          ]}
        />
        <Spacer />
        <Link href="/work/schema/design-system" className="underline-offset-4 hover:underline" style={{ fontSize: "0.9375rem", color: "#000000" }}>
          See the components and modules in Design System Work →
        </Link>
      </Section>
    </CaseStudyPage>
  );
}
