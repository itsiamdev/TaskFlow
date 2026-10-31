import ResourcePageLayout from "../components/ResourcePageLayout.jsx";

const sections = [
  {
    id: "workspace",
    title: "Workspace overview",
    paragraphs: [
      "The dashboard preview brings a daily task list, project labels, and progress summaries together in one view.",
      "All names, task counts, dates, and progress values shown in the interface are sample content for the visual concept.",
    ],
  },
  {
    id: "tasks",
    title: "Tasks and priorities",
    paragraphs: [
      "The mockup illustrates task rows with completion checkboxes, due times, project categories, and high, medium, or low priority labels.",
      "These controls are visual examples only. The demo does not create, edit, complete, or store real tasks.",
    ],
  },
  {
    id: "projects",
    title: "Projects and categories",
    paragraphs: [
      "Sample categories such as Personal, Work, and Learning show one way tasks could be grouped in a future product.",
      "Project names and labels are not connected to accounts or persistent data.",
    ],
  },
  {
    id: "progress",
    title: "Planning and progress",
    paragraphs: [
      "Calendar cards, weekly charts, streaks, and completion indicators are illustrative dashboard components.",
      "They do not calculate progress from user activity or represent real performance data.",
    ],
  },
  {
    id: "platforms",
    title: "Access and platforms",
    paragraphs: [
      "The web option opens the responsive website demo. The Android and iOS store buttons are placeholders because no mobile app listings are available yet.",
      "This website does not currently offer user accounts, cloud sync, or offline task management.",
    ],
  },
];

export default function DocumentationPage() {
  return (
    <ResourcePageLayout
      kicker="TASKFLOW / DOCUMENTATION"
      title="A guide to the workspace."
      description="Learn what the dashboard previews and how its example sections are intended to fit together."
    >
      <div className="documentation-layout">
        <nav className="documentation-nav" aria-label="Documentation sections">
          <strong>ON THIS PAGE</strong>
          {sections.map(({ id, title }) => (
            <a key={id} href={`#${id}`}>
              {title}
            </a>
          ))}
        </nav>
        <div className="documentation-content">
          {sections.map(({ id, title, paragraphs }, index) => (
            <section id={id} key={id} className="documentation-section">
              <span className="documentation-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{title}</h2>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </ResourcePageLayout>
  );
}
