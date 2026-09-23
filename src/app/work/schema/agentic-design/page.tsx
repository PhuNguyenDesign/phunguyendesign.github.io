import type { Metadata } from "next";
import Link from "next/link";
import { Body, CardGrid, CaseStudyHeader, CaseStudyPage, ImagePair, ImageSlot, Section, Spacer, Statement } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Agentic Design — Schema — Phu Nguyen",
};

// Draft copy verified against GitHub (cleardemand-design-system, schema-website #119),
// Notion 1:1s and ClearDemand meetings (Apr–Jul 2026), and Drive notes (Jul 2026).
// ImageSlot frames are placeholders until visuals are exported.

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
          Over three months I opened 28 pull requests this way. Most of them were generated with Claude Code and then
          shaped by hand.
        </Body>
        <Spacer />
        <CardGrid items={process} />
        <Spacer />
        <ImageSlot label="A pull request: prompt, preview, and design notes for reviewers" />
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
        <ImagePair labels={["Paper sketch of the chat components", "The built ChatBubble and AgenticSearchBar"]} />
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
        <ImageSlot label="Schema Insights article: confetti strip filling as you scroll" />
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
        <Link href="/work/schema/design-system" className="underline-offset-4 hover:underline" style={{ fontSize: "0.9375rem", color: "#f2f2ef" }}>
          See the components and modules in Design System Work →
        </Link>
      </Section>
    </CaseStudyPage>
  );
}
