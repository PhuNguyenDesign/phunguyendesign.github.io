import type { Metadata } from "next";
import { Body, CardGrid, CaseStudyHeader, CaseStudyPage, ImagePair, ImageSlot, Section, Spacer, Statement } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Mobile Work — Schema — Phu Nguyen",
};

// Draft copy verified against Notion (Visual Course Progress OEM-6-2, Mobile Figma Support
// FY26 SOW-12-2, mobile weeklies, 1:1s) and Google Drive meeting transcripts (Aug 2024 – Nov 2025).
// ImageSlot frames are placeholders until visuals are exported.

const meta = [
  { label: "Role", value: "Product Designer" },
  { label: "Client", value: "Open edX (Axim Collaborative)" },
  { label: "Timeframe", value: "2024 - 2026" },
  { label: "Tools", value: "Figma, Confluence, Notion" },
];

const progressWork = [
  { tag: "Course home", name: "Mini Progress Widgets", body: "Compact progress on the course home, with states for completed, in progress, upcoming, and not yet started." },
  { tag: "Next action", name: "CTA Cards", body: "Cards that send learners to the assignment, video, or grade they need next, with variants like due soon, past due, continue watching, and all caught up. I dropped an expand/collapse version to avoid cognitive overload." },
  { tag: "Video", name: "Video Progress Cards", body: "Building on the team’s course content cards, I explored thumbnail orientation, border treatments, completion icons, and duration labels so learners can see where they left off." },
  { tag: "Modes", name: "Progress That Fits the Goal", body: "Completion, weighted grade, assignments, and video progress, so the view can follow what a learner is actually trying to achieve." },
];

const fileWork = [
  { tag: "Current vs. proposed", name: "Level Pages Show What Ships", body: "Each level page (app, course, account) documents only the screens in the live app. Proposals moved to their own project pages." },
  { tag: "Validation", name: "Checked Against Real Builds", body: "I reviewed the current app builds and updated Figma to match, including a course level that now reflects the new content view." },
  { tag: "Structure", name: "Templates, Components, Color", body: "A shared project template, a unified set of shared components, and named color variables in place of loose hex values." },
  { tag: "Versioning", name: "Versioned Releases", body: "I created v2.5 of the file and archived v2.4, which made room for bigger cleanup without losing the design history." },
];

const ecosystem = [
  { tag: "Notifications", name: "A Model Before a Layout", body: "I explored per-course notification settings, header styles, categories with counts, and the difference between unseen and unread. Then I documented the notification types and flows in Confluence." },
  { tag: "Offline", name: "Offline Status and Sync", body: "I explored offline status indicators, pending-sync and outdated-content messages, and download icons for learners studying without a connection." },
  { tag: "Educators", name: "Mobile Visibility in Studio", body: "I prepared concepts to show educators how much of their course works on mobile, such as support indicators on content blocks and a mobile-readiness checklist." },
  { tag: "Navigation", name: "Beyond Next and Previous", body: "I researched continuous-scroll patterns from webtoon apps and bento-style layouts, to rethink how learners move through a sequence of course content." },
];

export default function SchemaMobilePage() {
  return (
    <CaseStudyPage>
      <CaseStudyHeader
        title="Mobile Work"
        summary="Designing the native Open edX learning experience, and keeping the design source of truth behind it trustworthy."
        meta={meta}
      />

      <Section title="The Open edX Mobile App">
        <Body>
          The Open edX mobile app is open source. Learners use it on iOS and Android, and several organizations build it
          together. Schema supports its roadmap through contributions funded by Axim, the nonprofit behind Open edX.
          Development partners implement the designs.
        </Body>
        <Body last>
          My work there grew in three directions: designing parts of the learning experience itself, keeping the shared
          design file accurate for everyone building the app, and working through the product models around it, like
          notifications.
        </Body>
      </Section>

      <Section title="Visual Course Progress" layout="stack">
        <Body>
          On the web, Open edX has a dedicated progress page. On mobile, progress was a thin bar and an &ldquo;8 of 20
          assignments&rdquo; count. The project set out to bring richer progress into the native app and to use it to
          point learners toward what to do next.
        </Body>
        <Body last>
          I was a key design contributor on a Schema team of four from late 2024 into early 2025. I took the progress
          designs into high fidelity in light and dark themes, designed the states for zero, partial, and complete
          progress, and designed the cards that connect progress to action. I raised the open questions along the way,
          like whether a CTA should open a single assignment or the assignments view. Then I shared the work with a
          teammate at the community mobile design meeting.
        </Body>
        <Spacer />
        <ImageSlot label="Hero: course home with progress widget and CTA cards" />
        <Spacer />
        <CardGrid items={progressWork} />
        <Spacer />
        <ImagePair labels={["Progress states: completed, in progress, upcoming, zero", "Video cards with partial-watch progress"]} />
      </Section>

      <Statement>A progress bar is only useful if it helps learners decide what to do next.</Statement>

      <Section title="Keeping the Design File Trustworthy">
        <Body last>
          All contributors share one community Figma file, but it had drifted from the app. Shipped screens sat next to
          abandoned proposals, and staging builds, released builds, and partner implementations didn’t always match.
          From mid-2025 through mid-2026 I owned Schema’s mobile Figma support project, and I spent about 60 hours
          making the file an accurate picture of the app again.
        </Body>
        <Spacer />
        <CardGrid items={fileWork} />
        <Spacer />
        <ImagePair labels={["Before: a level page mixing live and proposed screens", "After: current screens only, proposals moved to projects"]} />
      </Section>

      <Section title="Designing the System Around the Screens" layout="stack">
        <Body last>
          Some of my most useful mobile work was about the product model more than any single screen. The questions were
          what a notification belongs to, what an educator needs to know, and how a learner moves through content.
        </Body>
        <Spacer />
        <CardGrid items={ecosystem} />
        <Spacer />
        <ImagePair labels={["Notification settings and read-state explorations", "Offline status and sync messaging"]} />
      </Section>

      <Section title="Helping Run a Distributed Design Practice">
        <Body last>
          In early 2026 I co-led Schema’s part of the community mobile design meetings, where designers from several
          Open edX providers review contributions to the app. I planned agendas, triaged the file’s project pages
          (what to merge into the main screens, what to archive, what to move to its own file), and kept the cleanup work
          visible to the community it was for.
        </Body>
      </Section>

      <Section title="What I Took Away" last>
        <CardGrid
          items={[
            { name: "A File Is a Product", body: "A shared design file has users too, and it only works if they can trust that it matches the app." },
            { name: "Concept Before Pixels", body: "With notifications, I learned to settle the model (nesting, actions, read state) before generating UI variations." },
          ]}
        />
      </Section>
    </CaseStudyPage>
  );
}
