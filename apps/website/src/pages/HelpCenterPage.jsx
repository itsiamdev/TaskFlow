import ResourcePageLayout from "../components/ResourcePageLayout.jsx";

const questions = [
  {
    question: "What is TaskFlow?",
    answer:
      "TaskFlow is a visual concept for a productivity workspace. This website demonstrates how task planning, project categories, and progress summaries could look in a finished product.",
  },
  {
    question: "How do I create an account or save my tasks?",
    answer:
      "You can’t do that in this demo. It has no sign-up flow, task database, or save feature, so information entered or shown on the page is not managed as a personal task list.",
  },
  {
    question: "Are the Android and iOS apps available?",
    answer:
      "Not yet. The Google Play and App Store options are previews only and are marked as coming soon. There are no mobile app downloads available from this website.",
  },
  {
    question: "Can I view the website on my phone?",
    answer:
      "Yes. The website layout adapts to phone, tablet, and desktop screens. This responsive website is separate from the planned mobile apps.",
  },
  {
    question: "What do the priority and progress indicators mean?",
    answer:
      "They are illustrative parts of the interface mockup. They do not reflect real tasks, account activity, or measured personal progress.",
  },
  {
    question: "Where can I report a question?",
    answer:
      "For this concept demo, you can use the contact email shown in the footer. The address is a placeholder and should be replaced by the site operator before launch.",
  },
];

export default function HelpCenterPage() {
  return (
    <ResourcePageLayout
      kicker="TASKFLOW / HELP CENTER"
      title="How can we help?"
      description="Answers to common questions about the TaskFlow concept and what you can do with this demo."
    >
      <section className="resource-faq" aria-label="Frequently asked questions">
        {questions.map(({ question, answer }, index) => (
          <details key={question} open={index === 0}>
            <summary>
              {question}
              <span aria-hidden="true"></span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
      <section className="resource-contact">
        <div>
          <span className="section-kicker">STILL HAVE A QUESTION?</span>
          <h2>We’re happy to hear from you.</h2>
          <p>
            This demo has no support desk, but you can reach the site contact
            below.
          </p>
        </div>
        <a className="button button-primary" href="mailto:hello@taskflow.example">
          Contact TaskFlow <span aria-hidden="true">↗</span>
        </a>
      </section>
    </ResourcePageLayout>
  );
}
