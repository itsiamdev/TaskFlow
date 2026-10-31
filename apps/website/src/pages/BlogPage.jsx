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
    body:
      "Set aside a few minutes to collect the tasks already on your mind. Choose a small number of priorities for the week, then leave some open space for the unexpected. A useful plan is not a packed schedule; it is a clear place to begin and permission to adjust as the week unfolds.",
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
    body:
      "Look at the time and energy you have, not just the length of your list. Ask which task will make the biggest helpful difference, and whether anything has a real deadline. If the answer is still unclear, pick a small task you can finish and use that momentum to move forward.",
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
    body:
      "Try ending the day by noting one thing you completed and one thing you want to carry into tomorrow. Keep the routine short enough to repeat on busy days. Over time, these small check-ins can make progress easier to see without turning reflection into another demanding task.",
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
                <p>{selectedArticle.body}</p>
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
