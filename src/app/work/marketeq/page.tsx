import type { Metadata } from "next";
import Link from "next/link";
import { Body, CardGrid, CaseStudyHeader, CaseStudyPage, Figure, Section, Spacer, faint, muted, rule } from "@/components/CaseStudy";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Marketeq — Phu Nguyen",
};

const meta = [
  { label: "Role", value: "UX Research, UX Design, User Flows, Competitive Analysis, Wireframing, Interaction Design, Prototyping, Information Architecture" },
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
          Marketeq Digital is the newest headless CMS to enter the market as the first truly customizable platform.
          It prides itself on providing a custom code-free integration tool that allows users to build fully customizable
          API integrations, extensions, and websites without the need of a programmer.
        </Body>
        <Body last>
          As a UX researcher and Design Intern, I worked closely with the Senior Designer and CEO to define goals and
          create new concepts that would greatly impact our product in a new and refreshing way. I created userflows,
          wireframes, and prototypes, delved into interaction design, and created prototypes to ultimately develop
          the foundation of our admin panel.
        </Body>
      </Section>

      <Section title="Challenges and Goal" layout="stack">
        <CardGrid
          items={[
            { name: "Challenges", body: "Marketeq needed a powerful yet intuitive admin panel that content editors could use without technical knowledge. The existing system was fragmented, with no consistent design language and poor discoverability of features. Editors struggled to manage content, preview changes, and publish across multiple channels efficiently." },
            { name: "Goal", body: "Design a scalable admin panel system that reduces the time editors spend on routine tasks, surfaces the right controls at the right time, and introduces a consistent component library that the engineering team can build on long-term." },
          ]}
        />
      </Section>

      <Section title="Defining the Process" layout="stack">
        <Body last>
          Collaborating with the CEO, we methodically split the process into four pivotal phases, recognizing the significance of each step.
          Given the expansiveness of the sprint, this strategic breakdown allowed me to narrow and compartmentalize each phase,
          channeling focused attention onto one task at a time.
        </Body>
        <Spacer />
        <div style={{ background: "linear-gradient(120deg, #4A3FCC 0%, #6B5FD8 35%, #9B8FC8 65%, #C0A8CC 100%)", padding: "clamp(16px, 4vw, 48px)" }}>
          <img src="/marketeq/defining-the-process.png" alt="Defining the Process" width={2500} height={739} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </Section>

      <Section title="Discovery">
        <Body>
          In the discovery phase, I compiled a comprehensive list of digital products to gain insights into what constitutes a robust headless CMS. The categorization involved three key groups:
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
          After identifying and classifying 10 examples in each category, I initiated a card sort and developed user flows. This process significantly enhanced my understanding of the functionalities and scope each digital product presented.
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
              I went ahead and annotated each screen in-depth. Doing so allowed me to dissect the entire digital product filtering out what works and what doesn’t work.
            </p>
            <Figure src="/marketeq/Annotations-1.png" width={2500} height={1428} alt="In-depth annotations" />
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, marginBottom: "12px" }}>Feature Lists</h3>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted, marginBottom: "16px" }}>
              Leveraging my compiled research, I categorized features into three distinct groups: Must-haves, Nice-to-haves, and Will-not-haves. This framework played a pivotal role in shaping my design decisions, as directed by my Senior Designer.
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
          I wireframed iteratively and being able to bounce back with my senior designer, I was able to hone down on features that will best suit the product. I would wireframe each feature separately and focus on each microfeature within. Once finalized I would add this to the end screen.
        </Body>
        <Spacer />
        <Figure src="/marketeq/concepting.jpg" width={2500} height={3924} alt="Concepting" />
      </Section>

      <Section title="Synthesis" layout="stack">
        <Body>
          From the three screenshot categories, I conducted a heuristic evaluation to understand how each platform organizes content, emphasizing usability. I also identified superior functions in other platforms. Recognizing patterns in headless CMS functionality, I drew inspiration from out-of-category and best-in-class examples, integrating features to enhance the overall user experience.
        </Body>
        <Body last>
          With the research and guiding force of my mentor, I established to create 4 main features to produce a functioning admin panel while taking a look into each feature’s microfeatures to create a cohesive product.
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
          After completing all the prior phases and creating the research and wireframes, I began moving toward Final High Fidelity designs. Being able to establish a strong foundation transitioning into this phase happened seamlessly and the outcome was the final product of the Admin Panel. Of course, during this process, I would meet up with my senior designer to ensure industry-standard designs.
        </Body>
      </Section>

      <Section title="Content Management">
        <Body>
          Once I established a functional version of content managing I began to create the features that was established prior. We wanted to create a product that eliminated the necessity of a editing version where users can go in at anytime to either edit the content or add data sets to the model.
        </Body>
        <Body last>
          My approach was to take each Headless CMS platform and take it through a heuristic evaluation gaining the best aspects of each. While doing so I used other inspiration from other platforms to enhance the system.
        </Body>
        <Spacer />
        <Figure src="/marketeq/liveview_video.mp4" alt="Content management walkthrough" caption="Walkthrough: editing content fields, rearranging sections, and managing columns in the admin panel." video />
      </Section>

      <Section title="Content Management: Components" layout="stack">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted, marginBottom: "28px" }}>
              These pieces are critical components of content management. After doing extensive research listing microfeatures that would help create a better experience, I began to create these components that would provide flexibility.
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
          I had to make separate components of the admin panel as tools to make the entirety of the panel interactive. By focusing on each platform and grabbing what was functional and experience-enhancing, I was able to produce these sidebars. This sidebar enables the user to interact with the document.
        </Body>
        <Spacer />
        <Figure src="/marketeq/sidebar_video.mp4" alt="Sidebar walkthrough" caption="Walkthrough: using the sidebar to set status, invite users, add tags and categories, and view versions." video />
      </Section>

      <Section title="Sidebar: Components" layout="stack">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted, marginBottom: "28px" }}>
              After making a feature list, I was able to cement the most important features. I went ahead and created userflows and dissected each feature to create an interactive experience. Looking through, I was able to distinguish what makes an optimal sidebar.
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
          Gaining inspiration from other CMS’s and collaboration with my senior designer, I created a live-view mode. With this, the users are able to see the results of their work in real-time. This would give the users the ease of managing their content with a reference.
        </Body>
        <Spacer />
        <Figure src="/marketeq/emptystate_video.mp4" alt="Live-view mode walkthrough" caption="Walkthrough: editing content in live-view mode and seeing changes on the page in real time." video />
      </Section>

      <Section title="Live-View Mode: Components" layout="stack">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted, marginBottom: "16px" }}>
              To remove any form of repetitiveness and optimize the use of space, I consolidated the 2 sidebars while in live-view mode. This would reduce clutter and provide a workable digital environment.
            </p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: muted, marginBottom: "28px" }}>
              Users are able to edit content within the sidebar and bounce back between other tabs within.
            </p>
            <p style={{ fontSize: "0.875rem", fontWeight: 500, marginBottom: "4px" }}>Popup field bar</p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: faint, marginBottom: "16px" }}>Due to the lack of digital work space, clicking on add field will prompt a popup window so users can use it accordingly.</p>
            <p style={{ fontSize: "0.875rem", fontWeight: 500, marginBottom: "4px" }}>Single Column View</p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: faint }}>Columns will be condensed into single columns while in live-view mode.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            <Figure src="/marketeq/Empty-statessss-2.png" width={1244} height={1864} alt="Empty states" from="left" />
            <Figure src="/marketeq/FINAL-SECTION.png" width={1188} height={2052} alt="Final section" from="right" delay={0.08} />
          </div>
        </div>
      </Section>

      <Section title="Top Navigation Bar">
        <Body last>
          After researching other platforms’ navigation bars, I compiled a list of features that would work well with our current product. I categorized each feature into the usual must-haves, nice-to-haves, and will-not-haves. Upon multiple ideations, I was able to solidify my design decision with the help of my senior designer.
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
            { name: "Back Every Decision with Research", body: "Forms of research must back up all decisions. If you are designing solely based on assumption only, you have no basis of foundation. Don’t try to reinvent the wheel. When setting the design base, set a solid foundation that is user-friendly then it is deemed appropriate to add bells and whistles." },
            { name: "Look Outside the Category", body: "Don’t dismiss other platforms just because they don’t fall within the same category. Being able to understand how the product differs from a headless CMS and a regular CMS gives space for innovation. I was able to gain inspiration from out-of-category platforms which gave our product a better user-experience." },
            { name: "One Step at a Time", body: "It’s easy to feel overwhelmed especially when your sprint is extensive but I learned that organizing your goals and features one step at a time helps narrow down the focus letting me notice the fine details of each work that goes into each component. Once establishing the each step I was able to knock out each step one by one." },
          ]}
        />
      </Section>

      <Section title="Looking Ahead" layout="stack" last>
        <CardGrid
          items={[
            { name: "Future Opportunities", body: "If my internship hadn’t ended, I would have dove deeper into the nice-to-have feature list to fully create a better interactive experience. The foundation of the design was created and is structurally sound but as a designer I was always looking for opportunities to enhance the product. Another realm I would like to explore would be seeing the user react with the admin panel and look at the impact the new designs had." },
            { name: "Conclusion", body: "This project has given Marketeq a strong starting point for building an awesome content management system for projects. Combining thorough research, best practices, and industry-standard features allowed me to develop a content management page that truly stands out and exceeds industry norms. It’s a cutting-edge solution that boosts Marketeqs competitiveness and offers users a seamless experience for new users moving from other headless CMS platforms." },
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
