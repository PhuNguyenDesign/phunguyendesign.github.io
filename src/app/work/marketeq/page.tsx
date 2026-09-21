import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketeq — Phu Nguyen",
};

export default function MarketeqPage() {
  return (
    <div style={{ backgroundColor: "#fff", color: "#1a1a1a", fontFamily: "var(--font-text)" }}>

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #6B5BDE 0%, #8B6FE8 40%, #5B8FDE 100%)",
          paddingTop: "calc(var(--nav-height) + 80px)",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ paddingLeft: "var(--page-pad-x)", paddingRight: "var(--page-pad-x)", marginBottom: "56px" }}>
          <h1 style={{ color: "#fff", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "16px" }}>
            Marketeq Digital: Admin Panel
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 400 }}>
            UX Research and Design
          </p>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "var(--page-pad-x)",
          paddingRight: "var(--page-pad-x)",
          paddingBottom: "80px",
          position: "relative",
        }}>
          <img
            src="/marketeq/Sidebar-collapsible.jpg"
            alt="Sidebar collapsible"
            style={{
              width: "44%",
              display: "block",
              borderRadius: "8px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
              position: "relative",
              zIndex: 1,
              marginRight: "-48px",
              marginTop: "32px",
            }}
          />
          <img
            src="/marketeq/live-view-mode.jpg"
            alt="Live view mode"
            style={{
              width: "44%",
              display: "block",
              borderRadius: "8px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
              position: "relative",
              zIndex: 2,
            }}
          />
        </div>
      </section>

      {/* Project Overview */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px var(--page-pad-x)" }}>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, marginBottom: "32px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Project Overview</h2>

        <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.7, color: "#1a1a1a", maxWidth: "75ch", marginBottom: "24px" }}>
          Marketeq Digital is the newest headless CMS to enter the market as the first truly customizable platform.
          It prides itself on providing a custom code-free integration tool that allows users to build fully customizable
          API integrations, extensions, and websites without the need of a programmer.
        </p>
        <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.7, color: "#1a1a1a", maxWidth: "75ch", marginBottom: "80px" }}>
          As a UX researcher and Design Intern, I worked closely with the Senior Designer and CEO to define goals and
          create new concepts that would greatly impact our product in a new and refreshing way. I created userflows,
          wireframes, and prototypes, delved into interaction design, and created prototypes to ultimately develop
          the foundation of our admin panel.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "48px" }}>
          <div>
            <p style={{ fontWeight: 700, marginBottom: "8px" }}>My Role:</p>
            <p style={{ lineHeight: 1.8, color: "#444" }}>
              UX Research<br />UX Designer<br />User Flows<br />Competitive Analysis<br />
              Wireframing<br />Interaction Design<br />Prototyping<br />Information Architecture
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div>
              <p style={{ fontWeight: 700, marginBottom: "8px" }}>Company:</p>
              <p style={{ lineHeight: 1.8, color: "#444" }}>Marketeq Digital</p>
            </div>
            <div>
              <p style={{ fontWeight: 700, marginBottom: "8px" }}>Tools:</p>
              <p style={{ lineHeight: 1.8, color: "#444" }}>Figma<br />Figjam</p>
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 700, marginBottom: "8px" }}>Timeframe:</p>
            <p style={{ lineHeight: 1.8, color: "#444" }}>May 2023 – September 2023</p>
          </div>
        </div>
      </section>

      {/* Challenges + Goal */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 var(--page-pad-x) 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }}>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px" }}>Challenges</h2>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "#444" }}>
              Marketeq needed a powerful yet intuitive admin panel that content editors could use without technical knowledge.
              The existing system was fragmented, with no consistent design language and poor discoverability of features.
              Editors struggled to manage content, preview changes, and publish across multiple channels efficiently.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px" }}>Goal</h2>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "#444" }}>
              Design a scalable admin panel system that reduces the time editors spend on routine tasks,
              surfaces the right controls at the right time, and introduces a consistent component library
              that the engineering team can build on long-term.
            </p>
          </div>
        </div>
      </section>

      {/* Defining the Process */}
      <section
        style={{
          background: "linear-gradient(120deg, #4A3FCC 0%, #6B5FD8 35%, #9B8FC8 65%, #C0A8CC 100%)",
          padding: "80px var(--page-pad-x)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, fontStyle: "italic", color: "#fff", marginBottom: "20px", lineHeight: 1.2 }}>
            Defining the Process
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", maxWidth: "72ch", marginBottom: "56px" }}>
            Collaborating with the CEO, we methodically split the process into four pivotal phases, recognizing the significance of each step.
            Given the expansiveness of the sprint, this strategic breakdown allowed me to narrow and compartmentalize each phase,
            channeling focused attention onto one task at a time.
          </p>

          <img src="/marketeq/defining-the-process.png" alt="Defining the Process" style={{ width: "100%", display: "block" }} />
        </div>
      </section>

      {/* Discovery */}
      <section style={{ backgroundColor: "#3A3632", padding: "80px var(--page-pad-x)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "120px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 400, fontStyle: "italic", marginBottom: "24px", lineHeight: 1.1, color: "#fff" }}>Discovery</h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>
              In the discovery phase, I compiled a comprehensive list of digital products to gain insights into what constitutes a robust headless CMS. The categorization involved three key groups:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}><strong style={{ color: "#fff" }}>Competition:</strong> Headless CMS&apos;s</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}><strong style={{ color: "#fff" }}>Best-in-Class:</strong> Website builders</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}><strong style={{ color: "#fff" }}>Out-of-Category:</strong> Non-related but with inspirational aspects</p>
            </div>
          </div>
          <div>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>Market Research</p>
            <img src="/marketeq/Research-screenshots.png" alt="Market research" style={{ width: "130%", borderRadius: "4px", display: "block" }} />
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section style={{ backgroundColor: "#3A3632", padding: "80px var(--page-pad-x)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "120px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 400, fontStyle: "italic", marginBottom: "24px", lineHeight: 1.1, color: "#fff" }}>Analysis</h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)" }}>
              After identifying and classifying 10 examples in each category, I initiated a card sort and developed user flows. This process significantly enhanced my understanding of the functionalities and scope each digital product presented.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>Card Sorting</p>
              <img src="/marketeq/Card-sorting.png" alt="Card sorting" style={{ width: "100%", borderRadius: "4px", display: "block" }} />
            </div>
            <div>
              <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>User Flows</p>
              <img src="/marketeq/userflows.png" alt="User flows" style={{ width: "100%", borderRadius: "4px", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Analysis subsections */}
      <section style={{ backgroundColor: "#3A3632", padding: "80px var(--page-pad-x)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 400, fontStyle: "italic", marginBottom: "16px", lineHeight: 1.2, color: "#fff" }}>In-depth annotations</h3>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>
              I went ahead and annotated each screen in-depth. Doing so allowed me to dissect the entire digital product filtering out what works and what doesn&apos;t work.
            </p>
            <img src="/marketeq/Annotations-1.png" alt="In-depth annotations" style={{ width: "100%", borderRadius: "4px", display: "block" }} />
          </div>
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 400, fontStyle: "italic", marginBottom: "16px", lineHeight: 1.2, color: "#fff" }}>Feature Lists</h3>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "8px" }}>
              Leveraging my compiled research, I categorized features into three distinct groups: Must-haves, Nice-to-haves, and Will-not-haves. This framework played a pivotal role in shaping my design decisions, as directed by my Senior Designer.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "32px" }}>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}><strong style={{ color: "#fff" }}>Must-have:</strong> Essential features for basic functionality.</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}><strong style={{ color: "#fff" }}>Nice-to-have:</strong> Enhancements that contribute to an improved user experience.</p>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}><strong style={{ color: "#fff" }}>Will-not-have:</strong> Features deemed confusing, harmful, or detrimental to the user experience.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", alignItems: "start" }}>
              {/* Must Haves */}
              <div style={{ backgroundColor: "#87CEEB", borderRadius: "4px", padding: "16px 18px" }}>
                <p style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "8px", color: "#1a1a1a" }}>Must Haves:</p>
                <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "2px" }}>
                  {["Content editor","Preview link","Add sections","reorder sections","sidebar panel info","Accordion style expand/collapse","Version history","Invite Users","Drag and drop","Live view mode","Form view mode"].map(i => (
                    <li key={i} style={{ fontSize: "0.8125rem", fontWeight: 700, lineHeight: 1.5, color: "#1a1a1a" }}>{i}</li>
                  ))}
                </ul>
                <p style={{ fontSize: "0.6875rem", color: "#555", marginTop: "12px" }}>Phu Nguyen</p>
              </div>
              {/* Nice to have */}
              <div style={{ backgroundColor: "#90EE90", borderRadius: "4px", padding: "16px 18px" }}>
                <p style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "8px", color: "#1a1a1a" }}>Nice to have</p>
                <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "2px" }}>
                  {["Sidebar content editing","preview feature hovering over component","History of activity","Unlimited section nesting","CTA for adding fields","Search bar"].map(i => (
                    <li key={i} style={{ fontSize: "0.8125rem", fontWeight: 700, lineHeight: 1.5, color: "#1a1a1a" }}>{i}</li>
                  ))}
                </ul>
                <p style={{ fontSize: "0.6875rem", color: "#555", marginTop: "12px" }}>Phu Nguyen</p>
              </div>
              {/* Will Not have */}
              <div style={{ backgroundColor: "#D8B4FE", borderRadius: "4px", padding: "16px 18px" }}>
                <p style={{ fontWeight: 700, fontSize: "0.875rem", marginBottom: "8px", color: "#1a1a1a" }}>Will Not have:</p>
                <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "2px" }}>
                  {["Building data sets","SEO summary details","Scheduling","Editing version"].map(i => (
                    <li key={i} style={{ fontSize: "0.8125rem", fontWeight: 700, lineHeight: 1.5, color: "#1a1a1a" }}>{i}</li>
                  ))}
                </ul>
                <p style={{ fontSize: "0.6875rem", color: "#555", marginTop: "12px" }}>Phu Nguyen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concepts and Iterations */}
      <section style={{ backgroundColor: "#3A3632", padding: "80px var(--page-pad-x)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "80px", alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 400, fontStyle: "italic", marginBottom: "32px", lineHeight: 1.1, color: "#fff" }}>Concepts and iterations</h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)" }}>
              I wireframed iteratively and being able to bounce back with my senior designer, I was able to hone down on features that will best suit the product. I would wireframe each feature separately and focus on each microfeature within. Once finalized I would add this to the end screen.
            </p>
          </div>
          <img src="/marketeq/concepting.jpg" alt="Concepting" style={{ width: "100%", display: "block", borderRadius: "4px" }} />
        </div>
      </section>

      {/* Synthesis */}
      <section style={{ backgroundColor: "#f2f2f2", padding: "80px var(--page-pad-x)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, marginBottom: "32px", lineHeight: 1.15, letterSpacing: "-0.01em" }}>Synthesis</h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", maxWidth: "80ch", marginBottom: "20px" }}>
          From the three screenshot categories, I conducted a heuristic evaluation to understand how each platform organizes content, emphasizing usability. I also identified superior functions in other platforms. Recognizing patterns in headless CMS functionality, I drew inspiration from out-of-category and best-in-class examples, integrating features to enhance the overall user experience.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#444", maxWidth: "80ch", marginBottom: "64px" }}>
          With the research and guiding force of my mentor, I established to create 4 main features to produce a functioning admin panel while taking a look into each feature&apos;s microfeatures to create a cohesive product.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", alignItems: "start" }}>
          {[
            { title: "Live View Mode", items: ["Adaptability", "Digital Workspace", "Realtime editing"] },
            { title: "Content Management", items: ["Adding Fields", "Resizing Fields", "Column Management", "Drag-n-drop Feature", "Interactive Features", "Bulk Actions"] },
            { title: "Sidebar Panel", items: ["Status", "Users", "Tags", "Categories", "Versions"] },
            { title: "Topbar Navigation", items: ["Preview", "Publish", "More Options", "Last Saved", "Status"] },
          ].map(({ title, items }) => (
            <div key={title}>
              <p style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "20px" }}>{title}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {items.map(item => (
                  <li key={item} style={{ fontSize: "0.9375rem", color: "#444", lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: "8px" }}>
                    <span style={{ color: "#999", flexShrink: 0 }}>·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Marketeq markup full-bleed */}
      <section style={{ padding: 0 }}>
        <img src="/marketeq/marketeq_markup.jpg" alt="Marketeq markup" style={{ width: "100%", display: "block" }} />
      </section>

      {/* Outcome */}
      <section style={{
        backgroundImage: "url('/marketeq/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "160px var(--page-pad-x)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, fontStyle: "italic", color: "#fff", marginBottom: "32px", lineHeight: 1.2 }}>Outcome</h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.9)" }}>
            After completing all the prior phases and creating the research and wireframes, I began moving toward Final High Fidelity designs. Being able to establish a strong foundation transitioning into this phase happened seamlessly and the outcome was the final product of the Admin Panel. Of course, during this process, I would meet up with my senior designer to ensure industry-standard designs.
          </p>
        </div>
      </section>

      {/* Content Management */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px var(--page-pad-x)" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "32px" }}>Content Management</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
              Once I established a functional version of content managing I began to create the features that was established prior. We wanted to create a product that eliminated the necessity of a editing version where users can go in at anytime to either edit the content or add data sets to the model.
            </p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "#444" }}>
              My approach was to take each Headless CMS platform and take it through a heuristic evaluation gaining the best aspects of each. While doing so I used other inspiration from other platforms to enhance the system.
            </p>
          </div>
          <video
            src="/marketeq/liveview_video.mp4"
            controls
            style={{ width: "100%", display: "block", borderRadius: "8px", backgroundColor: "#000" }}
          />
        </div>
      </section>

      {/* Content Management Components */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px var(--page-pad-x)" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "32px" }}>Content Management:<br />Components</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "120px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "#444", marginBottom: "32px" }}>
              These pieces are critical components of content management. After doing extensive research listing microfeatures that would help create a better experience, I began to create these components that would provide flexibility.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {["Active states", "Moving between rows and columns", "Quick/Bulk Actions", "Drag and Drop", "Hover States"].map(item => (
                <li key={item} style={{ fontSize: "0.9375rem", color: "#444", lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ color: "#999", flexShrink: 0 }}>·</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <img src="/marketeq/sectioncomponent.png" alt="Content management components" style={{ width: "100%", display: "block", borderRadius: "8px" }} />
        </div>
      </section>


      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 var(--page-pad-x)" }}>
        <hr style={{ border: "none", borderTop: "1px solid #E5E5E5" }} />
      </div>

      {/* Sidebar */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px var(--page-pad-x)" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "32px" }}>Sidebar</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
              I had to make separate components of the admin panel as tools to make the entirety of the panel interactive. By focusing on each platform and grabbing what was functional and experience-enhancing, I was able to produce these sidebars. This sidebar enables the user to interact with the document.
            </p>
          </div>
          <video
            src="/marketeq/sidebar_video.mp4"
            controls
            style={{ width: "100%", display: "block", borderRadius: "8px", backgroundColor: "#000" }}
          />
        </div>
      </section>

      {/* Sidebar Components */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px var(--page-pad-x)" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "32px" }}>Sidebar:<br />Components</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "120px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "#444", marginBottom: "32px" }}>
              After making a feature list, I was able to cement the most important features. I went ahead and created userflows and dissected each feature to create an interactive experience. Looking through, I was able to distinguish what makes an optimal sidebar.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {["Badges", "Autofill", "Publish Status", "Invite Users", "Create Tags", "Add Categories", "View Versions"].map(item => (
                <li key={item} style={{ fontSize: "0.9375rem", color: "#444", lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span style={{ color: "#999", flexShrink: 0 }}>·</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <img src="/marketeq/sidebar-components.png" alt="Sidebar components" style={{ width: "100%", display: "block", borderRadius: "8px" }} />
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 var(--page-pad-x)" }}>
        <hr style={{ border: "none", borderTop: "1px solid #E5E5E5" }} />
      </div>

      {/* Live-View Mode */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px var(--page-pad-x)" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "32px" }}>Live-View Mode</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "#444" }}>
              Gaining inspiration from other CMS&apos;s and collaboration with my senior designer, I created a live-view mode. With this, the users are able to see the results of their work in real-time. This would give the users the ease of managing their content with a reference.
            </p>
          </div>
          <video
            src="/marketeq/emptystate_video.mp4"
            controls
            style={{ width: "100%", display: "block", borderRadius: "8px", backgroundColor: "#000" }}
          />
        </div>
      </section>

      {/* Live-View Mode Components */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px var(--page-pad-x)" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "32px" }}>Live-View Mode:<br />Components</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "120px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
              To remove any form of repetitiveness and optimize the use of space, I consolidated the 2 sidebars while in live-view mode. This would reduce clutter and provide a workable digital environment.
            </p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
              Users are able to edit content within the sidebar and bounce back between other tabs within.
            </p>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#444", marginBottom: "4px" }}>Popup field bar</p>
            <p style={{ fontSize: "0.75rem", lineHeight: 1.7, color: "#888", marginBottom: "16px" }}>Due to the lack of digital work space, clicking on add field will prompt a popup window so users can use it accordingly.</p>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#444", marginBottom: "4px" }}>Single Column View</p>
            <p style={{ fontSize: "0.75rem", lineHeight: 1.7, color: "#888" }}>Columns will be condensed into single columns while in live-view mode.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <img src="/marketeq/Empty-statessss-2.png" alt="Empty states" style={{ width: "100%", display: "block", borderRadius: "8px" }} />
            <img src="/marketeq/FINAL-SECTION.png" alt="Final section" style={{ width: "100%", display: "block", borderRadius: "8px" }} />
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 var(--page-pad-x)" }}>
        <hr style={{ border: "none", borderTop: "1px solid #E5E5E5" }} />
      </div>

      {/* Top Navigation Bar */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px var(--page-pad-x)" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "32px" }}>Top navigation bar</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "#444" }}>
              After researching other platforms&apos; navigation bars, I compiled a list of features that would work well with our current product. I categorized each feature into the usual must-haves, nice-to-haves, and will-not-haves. Upon multiple ideations, I was able to solidify my design decision with the help of my senior designer.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <img src="/marketeq/topbar.png" alt="Top navigation bar" style={{ width: "100%", display: "block", borderRadius: "8px" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", alignItems: "start" }}>
              <img src="/marketeq/preview-drop-down.png" alt="Preview dropdown" style={{ width: "100%", display: "block", borderRadius: "8px" }} />
              <img src="/marketeq/publish-drop-down.png" alt="Publish dropdown" style={{ width: "100%", display: "block", borderRadius: "8px" }} />
              <img src="/marketeq/option-button.png" alt="More options" style={{ width: "100%", display: "block", borderRadius: "8px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Takeaways + Future Opportunities + Conclusion */}
      <section style={{
        backgroundImage: "url('/marketeq/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "120px var(--page-pad-x)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Takeaways */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "48px", marginBottom: "120px", textAlign: "left" }}>
            {[
              {
                title: "Takeaway: 1",
                body: "Forms of research must back up all decisions. If you are designing solely based on assumption only, you have no basis of foundation. Don't try to reinvent the wheel. When setting the design base, set a solid foundation that is user-friendly then it is deemed appropriate to add bells and whistles.",
              },
              {
                title: "Takeaway: 2",
                body: "Don't dismiss other platforms just because they don't fall within the same category. Being able to understand how the product differs from a headless CMS and a regular CMS gives space for innovation. I was able to gain inspiration from out-of-category platforms which gave our product a better user-experience.",
              },
              {
                title: "Takeaway: 3",
                body: "It's easy to feel overwhelmed especially when your sprint is extensive but I learned that organizing your goals and features one step at a time helps narrow down the focus letting me notice the fine details of each work that goes into each component. Once establishing the each step I was able to knock out each step one by one.",
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 400, fontStyle: "italic", color: "#fff", marginBottom: "24px", lineHeight: 1.2 }}>{title}</h3>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Future Opportunities + Conclusion */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
            <div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, fontStyle: "italic", color: "#fff", marginBottom: "24px", lineHeight: 1.2 }}>Future opportunities</h2>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>
                If my internship hadn&apos;t ended, I would have dove deeper into the nice-to-have feature list to fully create a better interactive experience. The foundation of the design was created and is structurally sound but as a designer I was always looking for opportunities to enhance the product. Another realm I would like to explore would be seeing the user react with the admin panel and look at the impact the new designs had.
              </p>
            </div>
            <div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, fontStyle: "italic", color: "#fff", marginBottom: "24px", lineHeight: 1.2 }}>Conclusion</h2>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "rgba(255,255,255,0.8)" }}>
                This project has given Marketeq a strong starting point for building an awesome content management system for projects. Combining thorough research, best practices, and industry-standard features allowed me to develop a content management page that truly stands out and exceeds industry norms. It&apos;s a cutting-edge solution that boosts Marketeqs competitiveness and offers users a seamless experience for new users moving from other headless CMS platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px var(--page-pad-x)", borderTop: "1px solid #E5E5E5" }}>
        <Link
          href="/work"
          style={{ color: "#888", fontSize: "0.8125rem", textDecoration: "none" }}
        >
          ← Back to Work
        </Link>
      </section>

    </div>
  );
}
