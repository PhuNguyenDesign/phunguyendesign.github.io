import type { Metadata } from "next";
import Link from "next/link";
import { Body, CardGrid, CaseStudyHeader, CaseStudyPage, Figure, Section, Spacer, faint, muted, rule } from "@/components/CaseStudy";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Marketeq — Phu Nguyen",
};

const meta = [
  { label: "Role", value: "UX Designer" },
  { label: "Scope", value: "Competitive analysis, card sorting, user flows, wireframes, interaction design, prototyping" },
  { label: "Company", value: "Marketeq Digital" },
  { label: "Tools", value: "Figma, Figjam" },
  { label: "Timeframe", value: "May 2023 - September 2023" },
];

const featureLists = [
  { title: "Must Haves:", color: "#87CEEB", items: ["Content editor", "Preview link", "Add sections", "reorder sections", "sidebar panel info", "Accordion style expand/collapse", "Version history", "Invite Users", "Drag and drop", "Live view mode", "Form view mode"] },
  { title: "Nice to have", color: "#90EE90", items: ["Sidebar content editing", "preview feature hovering over component", "History of activity", "Unlimited section nesting", "CTA for adding fields", "Search bar"] },
  { title: "Will Not have:", color: "#D8B4FE", items: ["Building data sets", "SEO summary details", "Scheduling", "Editing version"] },
];

const synthesis = [
  { title: "Live View Mode", items: ["Adaptability", "Digital Workspace", "Realtime editing"] },
  { title: "Content Management", items: ["Adding Fields", "Resizing Fields", "Column Management", "Drag-n-drop Feature", "Interactive Features", "Bulk Actions"] },
  { title: "Sidebar Panel", items: ["Status", "Users", "Tags", "Categories", "Versions"] },
  { title: "Topbar Navigation", items: ["Preview", "Publish", "More Options", "Last Saved", "Status"] },
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item) => (
        <li key={item} style={{ fontSize: "0.9375rem", color: muted, lineHeight: 1.5 }}>{item}</li>
      ))}
    </ul>
  );
}

export default function MarketeqPage() {
  return (
    <CaseStudyPage>
      <CaseStudyHeader
        title="Marketeq Digital: Admin Panel"
        summary="UX Research and Design"
        meta={meta}
        back={{ href: "/work", label: "Work" }}
      />

      {/* Hero visual on the Marketeq brand gradient */}
      <section style={{ padding: "0 var(--page-pad-x)" }}>
        <Reveal className="mx-auto max-w-[1200px]">
          <div
            className="flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #6B5BDE 0%, #8B6FE8 40%, #5B8FDE 100%)", padding: "clamp(32px, 6vw, 80px) clamp(16px, 4vw, 64px)" }}
          >
            <img src="/marketeq/Sidebar-collapsible.jpg" alt="Sidebar collapsible" width={2500} height={1589} fetchPriority="high" style={{ width: "46%", height: "auto", display: "block", boxShadow: "0 24px 64px rgba(20,16,60,0.45)", position: "relative", zIndex: 1, marginRight: "-6%", marginTop: "4%" }} />
            <img src="/marketeq/live-view-mode.jpg" alt="Live view mode" width={2500} height={1582} fetchPriority="high" style={{ width: "46%", height: "auto", display: "block", boxShadow: "0 24px 64px rgba(20,16,60,0.45)", position: "relative", zIndex: 2 }} />
          </div>
        </Reveal>
      </section>

      <Section title="Project Overview">
        <Body>
          Marketeq Digital is a headless CMS built around customization. Its promise is that people can build API
          integrations, extensions, and websites without needing a programmer.
        </Body>
        <Body last>
          As a UX designer, I worked with the senior designer and the CEO to design the foundation of
          the admin panel, the place where editors manage all of that content. I did the research, user flows,
          wireframes, and prototypes, and carried it through to high-fidelity screens.
        </Body>
      </Section>

      <Section title="Challenges and Goal" layout="stack">
        <CardGrid
          items={[
            { name: "Challenge", body: "A headless CMS is only as good as its admin panel. Marketeq needed one that content editors could use without technical knowledge: managing content, previewing changes, and publishing without getting lost." },
            { name: "Goal", body: "Design an admin panel that keeps routine tasks quick, shows the right controls at the right time, and is built from components the team could keep building on." },
          ]}
        />
      </Section>

      <Section title="Defining the Process" layout="stack">
        <Body last>
          The sprint was big, so the CEO and I split it into four phases. That let me focus on one thing at a time
          instead of trying to solve everything at once.
        </Body>
        <Spacer />
        <div style={{ background: "linear-gradient(120deg, #4A3FCC 0%, #6B5FD8 35%, #9B8FC8 65%, #C0A8CC 100%)", padding: "clamp(16px, 4vw, 48px)" }}>
          <img src="/marketeq/defining-the-process.png" alt="Defining the Process" width={2500} height={739} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </Section>

      <Section title="Discovery">
        <Body>
          I started by collecting products to learn what makes a good headless CMS, sorted into three groups:
        </Body>
        <dl style={{ marginBottom: "40px" }}>
          {[
            ["Competition:", "Headless CMS’s"],
            ["Best-in-Class:", "Website builders"],
            ["Out-of-Category:", "Non-related but with inspirational aspects"],
          ].map(([term, desc]) => (
            <div key={term} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[160px_1fr] sm:gap-4" style={{ borderTop: rule }}>
              <dt style={{ fontSize: "0.9375rem", fontWeight: 500 }}>{term}</dt>
              <dd style={{ fontSize: "0.9375rem", color: muted }}>{desc}</dd>
            </div>
          ))}
        </dl>
        <Figure src="/marketeq/Research-screenshots.png" width={2500} height={1410} alt="Market research" caption="Market research" />
      </Section>

      <Section title="Analysis" layout="stack">
        <Body last>
          With 10 examples in each group, I ran a card sort and mapped user flows. It gave me a clear picture of what each product does and how far its features reach.
        </Body>
        <Spacer />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Figure src="/marketeq/Card-sorting.png" width={2500} height={3660} alt="Card sorting" caption="Card sorting" from="left" />
          <Figure src="/marketeq/userflows.png" width={2500} height={3302} alt="User flows" caption="User flows" from="right" delay={0.08} />
        </div>
      </Section>

      <Section title="Annotations and Feature Lists" layout="stack">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, marginBottom: "12px" }}>In-Depth Annotations</h3>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted, marginBottom: "32px" }}>
              I annotated every screen in detail, taking each product apart to see what works and what doesn’t.
            </p>
            <Figure src="/marketeq/Annotations-1.png" width={2500} height={1428} alt="In-depth annotations" />
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, marginBottom: "12px" }}>Feature Lists</h3>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted, marginBottom: "16px" }}>
              From the research, I sorted features into must-haves, nice-to-haves, and will-not-haves. My senior designer had me use this list to guide every design decision after it.
            </p>
            <div className="flex flex-col gap-1" style={{ marginBottom: "32px" }}>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted }}><strong style={{ color: "#f2f2ef", fontWeight: 500 }}>Must-have:</strong> Essential features for basic functionality.</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted }}><strong style={{ color: "#f2f2ef", fontWeight: 500 }}>Nice-to-have:</strong> Enhancements that contribute to an improved user experience.</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted }}><strong style={{ color: "#f2f2ef", fontWeight: 500 }}>Will-not-have:</strong> Features deemed confusing, harmful, or detrimental to the user experience.</p>
            </div>
            {/* Research sticky notes, kept in their original colors */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {featureLists.map(({ title, color, items }) => (
                <div key={title} style={{ backgroundColor: color, padding: "16px 18px" }}>
                  <p style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "8px", color: "#1a1a1a" }}>{title}</p>
                  <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "2px" }}>
                    {items.map((item) => (
                      <li key={item} style={{ fontSize: "0.8125rem", fontWeight: 700, lineHeight: 1.5, color: "#1a1a1a" }}>{item}</li>
                    ))}
                  </ul>
                  <p style={{ fontSize: "0.6875rem", color: "#444", marginTop: "12px" }}>Phu Nguyen</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Concepts and Iterations">
        <Body last>
          I wireframed one feature at a time, down to its smallest interactions, and went back and forth with my senior designer to narrow in on what suited the product. Once a feature was settled, I added it to the full screen.
        </Body>
        <Spacer />
        <Figure src="/marketeq/concepting.jpg" width={2500} height={3924} alt="Concepting" />
      </Section>

      <Section title="Synthesis" layout="stack">
        <Body>
          Across all three groups, I ran a heuristic evaluation of how each platform organizes content, and noted where some did things better than others. The patterns came from headless CMSs, but a lot of the best ideas came from best-in-class and out-of-category products.
        </Body>
        <Body last>
          With my mentor’s guidance, I landed on four main features for a working admin panel, and worked through the smaller interactions inside each one so they fit together.
        </Body>
        <Spacer />
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {synthesis.map(({ title, items }) => (
            <div key={title} style={{ borderTop: rule, paddingTop: "20px" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", fontWeight: 500, marginBottom: "16px" }}>{title}</p>
              <List items={items} />
            </div>
          ))}
        </div>
      </Section>

      {/* Full-bleed product markup */}
      <Reveal>
        <img src="/marketeq/marketeq_markup.jpg" alt="Marketeq markup" width={2500} height={1563} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
      </Reveal>

      <Section title="Outcome">
        <Body last>
          With the research and wireframes done, I moved into high-fidelity designs. Because the foundation was solid, this part went smoothly. I checked in with my senior designer throughout to keep the work up to standard.
        </Body>
      </Section>

      <Section title="Content Management">
        <Body>
          Once the basic content management worked, I built out the features from the list. We wanted editors to be able to jump in at any time to edit content or add data to the model, without a separate editing version.
        </Body>
        <Body last>
          I took the best parts of each headless CMS from the heuristic evaluation, and pulled in ideas from other kinds of platforms too.
        </Body>
        <Spacer />
        <Figure src="/marketeq/liveview_video.mp4" alt="Content management walkthrough" caption="Walkthrough: editing content fields, rearranging sections, and managing columns in the admin panel." video />
      </Section>

      <Section title="Content Management: Components" layout="stack">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted, marginBottom: "28px" }}>
              These are the core pieces of content management. I listed the small interactions that would make editing easier, then designed components flexible enough to handle them.
            </p>
            <List items={["Active states", "Moving between rows and columns", "Quick/Bulk Actions", "Drag and Drop", "Hover States"]} />
          </div>
          <div className="lg:col-span-8">
            <Figure src="/marketeq/sectioncomponent.png" width={2500} height={1798} alt="Content management components" />
          </div>
        </div>
      </Section>

      <Section title="Sidebar">
        <Body last>
          The sidebar is where editors work with a document’s details. I looked at how other platforms handle it, kept what actually helped, and designed it as its own set of components.
        </Body>
        <Spacer />
        <Figure src="/marketeq/sidebar_video.mp4" alt="Sidebar walkthrough" caption="Walkthrough: using the sidebar to set status, invite users, add tags and categories, and view versions." video />
      </Section>

      <Section title="Sidebar: Components" layout="stack">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted, marginBottom: "28px" }}>
              The feature list told me what mattered most. I mapped a user flow for each feature and broke it down until I knew what a good sidebar needed.
            </p>
            <List items={["Badges", "Autofill", "Publish Status", "Invite Users", "Create Tags", "Add Categories", "View Versions"]} />
          </div>
          <div className="lg:col-span-8">
            <Figure src="/marketeq/sidebar-components.png" width={2500} height={1798} alt="Sidebar components" />
          </div>
        </div>
      </Section>

      <Section title="Live-View Mode">
        <Body last>
          Inspired by other CMSs, and working with my senior designer, I designed a live-view mode so editors can see their changes on the page in real time while they work.
        </Body>
        <Spacer />
        <Figure src="/marketeq/emptystate_video.mp4" alt="Live-view mode walkthrough" caption="Walkthrough: editing content in live-view mode and seeing changes on the page in real time." video />
      </Section>

      <Section title="Live-View Mode: Components" layout="stack">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted, marginBottom: "16px" }}>
              In live-view mode, I merged the two sidebars into one to save space and cut down on clutter.
            </p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted, marginBottom: "28px" }}>
              Editors can change content right in the sidebar and switch between its tabs.
            </p>
            <p style={{ fontSize: "0.875rem", fontWeight: 500, marginBottom: "4px" }}>Popup field bar</p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: faint, marginBottom: "16px" }}>Space is tight in live view, so adding a field opens a popup instead.</p>
            <p style={{ fontSize: "0.875rem", fontWeight: 500, marginBottom: "4px" }}>Single Column View</p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: faint }}>Columns collapse into a single column in live view.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            <Figure src="/marketeq/Empty-statessss-2.png" width={1244} height={1864} alt="Empty states" from="left" />
            <Figure src="/marketeq/FINAL-SECTION.png" width={1188} height={2052} alt="Final section" from="right" delay={0.08} />
          </div>
        </div>
      </Section>

      <Section title="Top Navigation Bar">
        <Body last>
          I studied other platforms’ navigation bars and sorted their features into must-haves, nice-to-haves, and will-not-haves. After a few rounds, my senior designer and I settled on the final design.
        </Body>
        <Spacer />
        <Figure src="/marketeq/topbar.png" width={2500} height={175} alt="Top navigation bar" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3" style={{ marginTop: "16px" }}>
          <Figure src="/marketeq/preview-drop-down.png" width={792} height={588} alt="Preview dropdown" from="left" />
          <Figure src="/marketeq/publish-drop-down.png" width={792} height={564} alt="Publish dropdown" delay={0.08} />
          <Figure src="/marketeq/option-button.png" width={792} height={1228} alt="More options" from="right" delay={0.16} />
        </div>
      </Section>

      <Section title="Takeaways" layout="stack">
        <CardGrid
          items={[
            { name: "Back Every Decision with Research", body: "Design based only on assumptions has nothing to stand on. Don’t reinvent the wheel: get a solid, easy-to-use foundation in place first, then add the extras." },
            { name: "Look Outside the Category", body: "Some of my best ideas came from products that had nothing to do with CMSs. Understanding how a headless CMS differs from a regular one is where the room for new ideas is." },
            { name: "One Step at a Time", body: "A big sprint is easy to get overwhelmed by. Breaking it into steps let me notice the small details in each component, then knock them out one by one." },
          ]}
        />
      </Section>

      <Section title="Looking Ahead" layout="stack" last>
        <CardGrid
          items={[
            { name: "Future Opportunities", body: "With more time on the project, I would have worked through the nice-to-have list. The foundation was solid, but there was more to make better. I also would have loved to watch real editors use the panel and see what the new designs changed for them." },
            { name: "Where It Landed", body: "The project gave Marketeq a strong starting point for its admin panel, grounded in research and familiar patterns, so editors coming from other headless CMSs would feel at home." },
          ]}
        />
        <Spacer />
        <Link href="/work" className="underline-offset-4 hover:underline" style={{ fontSize: "0.9375rem", color: faint }}>
          ← Back to Work
        </Link>
      </Section>
    </CaseStudyPage>
  );
}
