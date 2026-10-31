import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export const articles = [
  {
    slug: "a-calmer-week-starts-with-a-simple-plan",
    category: "PLANNING",
    date: "October 30, 2026",
    dateTime: "2026-10-30",
    title: "A calmer week starts with a simple plan",
    excerpt:
      "A little preparation can make Monday feel less overwhelming. Start by giving your priorities room to breathe.",
    sections: [
      {
        heading: "Start with a reset, not a perfect schedule",
        paragraphs: [
          "A busy week can feel overwhelming before it even begins, especially when every unfinished task is competing for attention. Instead of trying to plan every hour, take a few minutes to get those thoughts out of your head. Write down the meetings, errands, projects, and small reminders you already know about. Seeing them together makes it easier to separate what needs attention from what is simply taking up mental space.",
          "This first list is a collection point, not a promise to do everything. You can add details or reorganize it later. The goal is to create a calm starting place and stop relying on memory to carry the whole week.",
        ],
      },
      {
        heading: "Choose a few priorities that matter",
        paragraphs: [
          "Look over your list and choose a small number of outcomes that would make the week feel worthwhile. A priority is more useful when it describes a result, such as sending a proposal or preparing for an appointment, rather than a vague intention like being more productive. Check for genuine deadlines, and consider which tasks will make other work easier once they are finished.",
          "You do not need to decide every step in advance. If a priority feels too large, write down the next action you can take. A clear first step makes it easier to begin without turning your plan into a rigid sequence.",
        ],
      },
      {
        heading: "Leave space for real life",
        paragraphs: [
          "A plan with no breathing room is fragile. Meetings run long, new requests appear, and some days simply have less energy than expected. Leave open blocks between commitments and avoid filling every available moment with focused work. That space gives you somewhere to move a task when the day changes, rather than making one surprise feel like a failed week.",
          "At the end of each day, take a brief look at what changed and adjust the next step. Move unfinished work deliberately instead of carrying it forward as a source of guilt. A helpful weekly plan is a guide you can return to, not a test you have to pass.",
        ],
      },
    ],
    takeaways: [
      "Write down everything competing for your attention.",
      "Choose a few priorities that would make the week feel meaningful.",
      "Leave room in your plan for breaks and unexpected work.",
    ],
    accent: "lavender",
  },
  {
    slug: "how-to-choose-your-next-task",
    category: "FOCUS",
    date: "October 23, 2026",
    dateTime: "2026-10-23",
    title: "How to choose your next task",
    excerpt:
      "When everything feels urgent, a quick check-in can help you decide what deserves your attention first.",
    sections: [
      {
        heading: "Separate urgency from importance",
        paragraphs: [
          "When your task list feels loud, it is easy to treat every item as equally urgent. Pause and check what actually has a deadline, who is waiting on you, and what would happen if the task moved to tomorrow. This quick reality check can reveal that some things only feel urgent because they are visible or easy to worry about.",
          "Next, consider which task would make the biggest helpful difference. It might be the work that unblocks someone else, prevents a last-minute rush, or moves an important project forward. You do not need a complicated scoring system; one honest question is often enough to identify a sensible next step.",
        ],
      },
      {
        heading: "Match the task to your available energy",
        paragraphs: [
          "The best choice also depends on the time and attention you have right now. A task that needs uninterrupted concentration may not fit into a short gap between meetings. On a low-energy afternoon, a simple administrative task could be a more realistic use of your time than trying to solve a difficult problem.",
          "Keep a few kinds of tasks in mind: work that needs deep focus, quick actions that take only a few minutes, and routine tasks that are easier to do when your energy is lower. Choosing from the right group helps you make progress without expecting every moment to be equally productive.",
        ],
      },
      {
        heading: "Make the first step small enough to start",
        paragraphs: [
          "If you still cannot choose, look for the smallest useful action. Open the document, outline three points, send the clarifying question, or spend ten minutes gathering what you need. A small action reduces the effort of getting started and often makes the rest of the task clearer.",
          "Once you begin, check in again rather than automatically pushing through. You may discover that the task is simpler than expected, or that a different priority needs your attention. Choosing your next task is a repeated decision, not a commitment to follow one plan regardless of what changes.",
        ],
      },
    ],
    takeaways: [
      "Check for real deadlines before treating every task as urgent.",
      "Match your next task to the time and energy you have right now.",
      "When in doubt, start with one small, finishable step.",
    ],
    accent: "peach",
  },
  {
    slug: "small-routines-that-make-progress-visible",
    category: "HABITS",
    date: "October 16, 2026",
    dateTime: "2026-10-16",
    title: "Small routines that make progress visible",
    excerpt:
      "You do not need a perfect system to notice the steps you are already taking.",
    sections: [
      {
        heading: "Make progress easier to notice",
        paragraphs: [
          "It is surprisingly easy to finish a full day and remember only what is still undone. A short routine can help balance that picture. Before you close your laptop or switch to evening plans, write down one thing you completed. It does not have to be a major milestone: a useful conversation, a first draft, or a small household task all count.",
          "This is not about keeping score or making every day look impressive. It is a way to leave yourself a clearer record of the effort that can otherwise disappear into the next busy day. Over time, those notes can help you recognize patterns in what supports your progress.",
        ],
      },
      {
        heading: "Keep the routine small and repeatable",
        paragraphs: [
          "A routine works best when it fits the day you actually have. Try a two-minute check-in rather than building an elaborate journaling system that needs perfect conditions. You might note what moved forward, what needs attention next, and anything you want to remember in the morning. If writing feels like too much, a short voice note or a simple checklist can serve the same purpose.",
          "Choose a reliable cue, such as finishing your last work session or making a cup of tea. Attaching a small habit to something you already do can make it easier to remember. If you skip a day, simply return to it the next time; there is no need to catch up or start over.",
        ],
      },
      {
        heading: "Use reflection to make tomorrow gentler",
        paragraphs: [
          "End by choosing one task to carry into tomorrow. Write down its next action, not just a broad project name. “Review the first page” is easier to pick up than “work on the report.” If something is waiting on another person or cannot move yet, note that too so you do not have to keep reconsidering it.",
          "A useful reflection should leave you with more clarity, not another list of expectations. Let it show you what happened and where to begin next. Small routines become valuable through repetition, and a flexible version you can keep returning to is more useful than a perfect one you abandon.",
        ],
      },
    ],
    takeaways: [
      "Keep your daily check-in short and easy to repeat.",
      "Notice one thing you finished, even if it was a small step.",
      "Choose one task to carry forward instead of rebuilding your whole plan.",
    ],
    accent: "green",
  },
];

export function getBlogArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

export default function BlogPage() {
  const path = window.location.pathname.replace(/\/+$/, "");
  const slug = path.startsWith("/blog/") ? path.slice("/blog/".length) : "";
  const selectedArticle = getBlogArticleBySlug(slug);

  if (slug && !selectedArticle) {
    return (
      <>
        <Header />
        <main id="top" className="blog-page">
          <div className="container blog-container">
            <a className="text-link blog-back-link" href="/blog">
              <span aria-hidden="true">←</span> Back to the blog
            </a>
            <header className="blog-heading">
              <span className="section-kicker">ARTICLE NOT FOUND</span>
              <h1>That story isn't here.</h1>
              <p>It may have moved. Browse the latest ideas from TaskFlow.</p>
            </header>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (selectedArticle) {
    return (
      <>
        <Header />
        <main id="top" className="blog-page">
          <div className="container blog-container">
            <a className="text-link blog-back-link" href="/blog">
              <span aria-hidden="true">←</span> All articles
            </a>
            <article className={`blog-article blog-card-${selectedArticle.accent}`}>
              <header className="blog-article-header">
                <span className="section-kicker">{selectedArticle.category}</span>
                <h1>{selectedArticle.title}</h1>
                <p className="blog-article-excerpt">{selectedArticle.excerpt}</p>
                <time dateTime={selectedArticle.dateTime}>{selectedArticle.date}</time>
              </header>
              <div className="blog-article-body">
                {selectedArticle.sections.map((section) => (
                  <section className="blog-article-section" key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
                <aside className="blog-article-takeaways">
                  <h2>A few ideas to try</h2>
                  <ul>
                    {selectedArticle.takeaways.map((takeaway) => (
                      <li key={takeaway}>{takeaway}</li>
                    ))}
                  </ul>
                </aside>
                <a className="text-link" href="/blog">
                  <span aria-hidden="true">←</span> Explore more articles
                </a>
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main id="top" className="blog-page">
        <div className="container blog-container">
          <a className="text-link blog-back-link" href="/#top">
            <span aria-hidden="true">←</span> Back to TaskFlow
          </a>
          <header className="blog-heading">
            <span className="section-kicker">IDEAS FOR A CLEARER DAY</span>
            <h1>
              <span> Blog</span>
            </h1>
            <p>
              Notes on planning, focus, and making steady progress in everyday
              life.
            </p>
          </header>

          <section className="blog-grid" aria-label="TaskFlow articles">
            {articles.map((article, index) => (
              <article
                className={`blog-card blog-card-${article.accent}`}
                key={article.title}
              >
                <div className="blog-card-art" aria-hidden="true">
                  <span className="blog-art-orbit"></span>
                  <span className="blog-art-card">
                    <i>{index === 0 ? "01" : index === 1 ? "02" : "03"}</i>
                    <b>{index === 0 ? "Make a plan" : index === 1 ? "One thing" : "Keep going"}</b>
                    <small>Small steps add up.</small>
                  </span>
                  <span className="blog-art-spark">✳</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span>{article.category}</span>
                    <time dateTime={article.dateTime}>{article.date}</time>
                  </div>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                  <a className="blog-read-more" href={`/blog/${article.slug}`}>
                    Read article <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </section>
          <p className="blog-note">
            The TaskFlow Blog is part of a concept demo. Articles are
            introductory sample content.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
