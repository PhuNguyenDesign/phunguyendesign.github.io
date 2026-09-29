import type { Metadata } from "next";
import { Body, CardGrid, CaseStudyHeader, CaseStudyPage, Figure, ImageSlot, Section, Spacer, Statement } from "@/components/CaseStudy";
import FloatIn from "@/components/FloatIn";
import LoopVideo from "@/components/LoopVideo";
import ParallaxCollage, { type CollagePiece } from "@/components/ParallaxCollage";
import MarqueeColumns, { type MarqueeCard } from "@/components/MarqueeColumns";

export const metadata: Metadata = {
  title: "Mobile Work — Schema — Phu Nguyen",
};

// Draft copy verified against Notion (Visual Course Progress OEM-6-2, Mobile Figma Support
// FY26 SOW-12-2, mobile weeklies, 1:1s) and Google Drive meeting transcripts (Aug 2024 – Nov 2025).
// ImageSlot frames are placeholders until visuals are exported.

const meta = [
  { label: "Role", value: "Product Designer" },
  { label: "Client", value: "Open edX (Axim Collaborative)" },
  { label: "Timeframe", value: "2024 - 2026" },
  { label: "Tools", value: "Figma, Confluence, Notion" },
];

const progressWork = [
  { tag: "Course home", name: "Mini Progress Widgets", body: "Compact progress on the course home, with states for completed, in progress, upcoming, and not yet started." },
  { tag: "Next action", name: "CTA Cards", body: "Cards that send learners to the assignment, video, or grade they need next, with variants like due soon, past due, continue watching, and all caught up. I dropped an expand/collapse version to avoid cognitive overload." },
  { tag: "Video", name: "Video Progress Cards", body: "Building on the team’s course content cards, I explored thumbnail orientation, border treatments, completion icons, and duration labels so learners can see where they left off." },
  { tag: "Modes", name: "Progress That Fits the Goal", body: "Completion, weighted grade, assignments, and video progress, so the view can follow what a learner is actually trying to achieve." },
];

// Progress card designs, light and dark. All cards are 1308px wide at 2x.
const card = (file: string, alt: string, height: number): MarqueeCard => ({ src: `/schema/mobile/${file}`, alt, width: 1308, height });

const progressCards: MarqueeCard[][] = [
  [
    card("completion-25-light.png", "Course completion card at 25%, light theme", 1496),
    card("assignments-past-due-dark.png", "Assignments card with a past-due assignment, dark theme", 1440),
    card("videos-next-light.webp", "Videos card with the next video to watch, light theme", 1752),
    card("grades-dark.png", "Grades card with weighted grade and category breakdown, dark theme", 1856),
    card("assignments-caught-up-light.png", "Assignments card showing all 19 completed, light theme", 1440),
    card("completion-50-dark.png", "Course completion card at 50% with section progress, dark theme", 1496),
    card("videos-caught-up-light.png", "Videos card showing all 18 watched, light theme", 1440),
  ],
  [
    card("videos-continue-dark.webp", "Videos card with a continue-watching video, dark theme", 1752),
    card("grades-light.png", "Grades card with weighted grade and category breakdown, light theme", 1856),
    card("completion-25-dark.png", "Course completion card at 25%, dark theme", 1496),
    card("assignments-past-due-light.png", "Assignments card with a past-due assignment, light theme", 1440),
    card("videos-caught-up-dark.png", "Videos card showing all 18 watched, dark theme", 1440),
    card("videos-continue-light.webp", "Videos card with a continue-watching video, light theme", 1752),
    card("videos-next-dark.webp", "Videos card with the next video to watch, dark theme", 1752),
  ],
];

// Clean screens and components from the v2.5 community Figma file, layered for the intro collage.
const c = (file: string, alt: string, width: number, height: number, x: number, y: number, w: number, speed: number, radius = 9): CollagePiece =>
  ({ src: `/schema/mobile/${file}`, alt, width, height, x, y, w, speed, radius });

const collage: CollagePiece[] = [
  c("collage/learn-home-light.png", "Learn home, light theme", 750, 1624, 2, 10, 21, 0.3),
  c("collage/course-scrolled-dark.png", "Course home scrolled, dark theme", 750, 2113, 26, 2, 23, 0.7),
  c("collage/grades-light.png", "Course home with grade status, light theme", 750, 2120, 53, 12, 21, 0.45),
  c("collage/search-dark.png", "Course search results, dark theme", 750, 1624, 78, 4, 20, 0.85),
  c("collage/completed-dark.png", "Course completed state, dark theme", 750, 1624, 10, 50, 19, 1.0),
  c("collage/offline-dark.png", "No internet connection state, dark theme", 750, 1624, 66, 50, 19, 0.6),
  c("completion-50-dark.png", "Course completion card at 50%", 1308, 1496, 46, 30, 15, 2.0, 3),
  c("collage/search-field.png", "Search field component", 538, 96, 70, 40, 22, 1.8, 2),
  c("collage/button.png", "Filled button component", 261, 126, 5, 42, 9, 2.2, 8),
  c("collage/dialog-light.png", "Due dates shifted dialog component", 652, 340, 37, 60, 23, 1.6, 3),
  c("assignments-caught-up-light.png", "Assignments caught-up card", 1308, 1440, 84, 70, 14, 1.7, 3),
  c("collage/bottom-nav-dark.png", "App-level bottom navigation, dark theme", 750, 172, 38, 88, 30, 1.4, 3),
];

// Mockup boards for the notifications and offline work, built from the v2.5 community Figma file.
const notificationsBoard: CollagePiece[] = [
  c("notifications/inbox-light.jpg", "Notification inbox for active courses, light theme", 750, 1624, 5, 9, 21, 0.25),
  c("notifications/settings-light.jpg", "Notification settings by category, with mobile, web, and email tabs", 750, 2162, 29, 4, 20, 0.5),
  c("notifications/inbox-dark.jpg", "Notification inbox for active courses, dark theme", 750, 1648, 53, 13, 21, 0.35),
  c("notifications/course-inbox-light.jpg", "Inbox filtered to a single course", 750, 1624, 77, 6, 19, 0.6),
  c("parts/notif-row-announcement.jpg", "Announcement notification row", 750, 231, 1, 60, 29, 1.1, 2),
  c("parts/channel-toggles.jpg", "Date notification toggles per channel", 660, 675, 38, 50, 19, 1.3, 3),
  c("parts/notif-row-reminder.jpg", "Course ending reminder notification row", 750, 179, 64, 66, 29, 1.5, 2),
];

const offlineBoard: CollagePiece[] = [
  c("offline/downloads-status-a.jpg", "Downloads with a learning-offline status and per-course download states", 750, 2244, 5, 7, 21, 0.3),
  c("offline/stale-content.jpg", "Course content with sync status on each section", 750, 2044, 29, 13, 21, 0.55),
  c("offline/download-icons.jpg", "Course home showing download icons in context", 750, 2390, 53, 5, 21, 0.4),
  c("offline/downloads-manage.jpg", "Managing course downloads", 750, 2760, 77, 10, 19, 0.65),
  c("parts/offline-pill.jpg", "Learning offline status pill", 618, 54, 34, 4, 26, 1.5, 4),
  c("parts/course-not-offline.jpg", "Course card marked not available offline", 668, 394, 6, 60, 22, 1.0, 3),
  c("parts/course-partial-download.jpg", "Course card with a partial download", 668, 464, 60, 56, 24, 1.25, 3),
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
        summary="Designing the native Open edX learning experience, and keeping the design source of truth behind it trustworthy."
        meta={meta}
      />

      {/* Full-bleed backdrop; overflow is clipped so pieces slide in and out at the edges */}
      <section
        aria-label="Screens and components from the Open edX mobile app"
        className="overflow-hidden"
        style={{
          padding: "clamp(120px, 16vw, 240px) var(--page-pad-x)",
          background:
            "linear-gradient(180deg, #FAFAF8 0%, #DFE0E1 30%, #DFE0E1 70%, #FAFAF8 100%)",
        }}
      >
        <ParallaxCollage pieces={collage} aspectRatio="1200 / 1060" />
      </section>

      <Section title="The Open edX Mobile App">
        <Body>
          The Open edX mobile app is open source. Learners use it on iOS and Android, and several organizations build it
          together. Schema supports its roadmap through contributions funded by Axim, the nonprofit behind Open edX.
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
          On the web, Open edX has a dedicated progress page. On mobile, progress was a thin bar and an &ldquo;8 of 20
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
        {/* Course home, light and dark, from the v2.5 community Figma file (Component Archive) */}
        <div className="flex items-start justify-center gap-[5%]">
          <FloatIn from="left">
            <img
              src="/schema/mobile/course-home-light.png"
              alt="Course home in the light theme: continue button, course completion card at 25%, and the progress carousel"
              width={750}
              height={1922}
              loading="lazy"
              className="block w-[42vw] max-w-[340px] md:w-[28vw]"
              style={{ height: "auto", borderRadius: "28px", boxShadow: "0 24px 48px rgba(56,56,59,0.2)" }}
            />
          </FloatIn>
          <FloatIn from="right" delay={0.08}>
            <img
              src="/schema/mobile/course-home-dark.png"
              alt="Course home in the dark theme: continue button, course completion card at 25%, and the progress carousel"
              width={750}
              height={1932}
              loading="lazy"
              className="block w-[42vw] max-w-[340px] md:w-[28vw]"
              style={{ height: "auto", borderRadius: "28px", boxShadow: "0 24px 48px rgba(56,56,59,0.2)", marginTop: "clamp(40px, 8vw, 120px)" }}
            />
          </FloatIn>
        </div>
        <Spacer />
        <CardGrid items={progressWork} />
        <Spacer size={112} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FloatIn from="left">
            <MarqueeColumns columns={progressCards} aspectRatio="4/5" duration={70} />
          </FloatIn>
          <FloatIn from="right" delay={0.08}>
            {/* No frame: the video is cropped to the phone and its corners are rounded to the phone's shape */}
            <div className="flex items-center justify-center" style={{ aspectRatio: "4/5" }}>
              <LoopVideo
                src="/schema/mobile/visual-progress.mp4"
                poster="/schema/mobile/visual-progress-poster.jpg"
                label="Course home walkthrough, clicking through the carousel of progress cards"
                width={362}
                height={758}
                radius="20% / 9.5%"
              />
            </div>
          </FloatIn>
        </div>
      </Section>

      <Statement>A progress bar is only useful if it helps learners decide what to do next.</Statement>

      <Section title="Keeping the Design File Trustworthy" layout="stack">
        <Body last>
          All contributors share one community Figma file, but it had drifted from the app. Shipped screens sat next to
          abandoned proposals, and staging builds, released builds, and partner implementations didn’t always match.
          From mid-2025 through mid-2026 I owned Schema’s mobile Figma support project, and I spent about 60 hours
          making the file an accurate picture of the app again.
        </Body>
        <Spacer />
        <CardGrid items={fileWork} />
        <Spacer />
        {/* Before and after, full width so the difference reads at a glance.
            Before: v2.3 Course Level page from the archived community file, author credit covered.
            After: v2.5 Account Level page, recreated at its real canvas layout. */}
        <div className="flex flex-col" style={{ gap: "clamp(48px, 7vw, 96px)" }}>
          {[
            {
              tag: "Before",
              src: "/schema/mobile/level-page-before.jpg",
              width: 3362,
              height: 1308,
              alt: "The old Course Level page in Figma: the current Course Dates screens sit beside presentation boards of proposed calendar and schedule CTAs, including pages marked under construction",
              caption: "The Course Level page mixed live screens with proposals, so it was hard to tell what actually shipped.",
              from: "left" as const,
            },
            {
              tag: "After",
              src: "/schema/mobile/level-page-after.jpg",
              width: 3626,
              height: 3218,
              alt: "The reorganized Account Level page in Figma: color-coded columns for base components, screen components, current app screens, and current workflows, each group in a labeled, versioned frame",
              caption: "The Account Level page today: base components, screen components, current app screens, and workflows, each in its own labeled, versioned frame.",
              from: "right" as const,
            },
          ].map(({ tag, ...img }) => (
            <div key={tag}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "16px" }}>{tag}</p>
              <Figure {...img} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Designing the System Around the Screens" layout="stack">
        <Body last>
          Some of my most useful mobile work was about the product model more than any single screen. The questions were
          what a notification belongs to, what an educator needs to know, and how a learner moves through content.
        </Body>
        <Spacer />
        <CardGrid items={ecosystem} />
        <Spacer />
        <div className="flex flex-col gap-6">
          {[
            { label: "Notifications: inbox, settings, and read states", pieces: notificationsBoard, bg: "#0F6B6D" },
            { label: "Offline: status, sync, and download states", pieces: offlineBoard, bg: "#38383B" },
          ].map(({ label, pieces, bg }) => (
            <figure key={label} className="m-0">
              <div className="relative overflow-hidden" style={{ background: bg, padding: "clamp(24px, 5vw, 64px) clamp(12px, 3vw, 40px) 0" }}>
                <ParallaxCollage pieces={pieces} aspectRatio="1200 / 820" drift={90} />
              </div>
              <figcaption style={{ fontSize: "0.8125rem", color: "rgba(56,56,59,0.72)", marginTop: "12px" }}>{label}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section title="Helping Run a Distributed Design Practice">
        <Body last>
          In early 2026 I co-led Schema’s part of the community mobile design meetings, where designers from several
          Open edX providers review contributions to the app. I planned agendas, triaged the file’s project pages
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
