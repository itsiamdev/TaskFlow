import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const repositoryUrl = "https://github.com/itsiamdev/taskflow";

export default function DeveloperPage() {
  return (
    <>
      <Header />
      <main id="top" className="resource-page developer-page">
        <div className="container resource-container">
          <a className="text-link resource-back-link" href="/#top">
            <span aria-hidden="true">←</span> Back to TaskFlow
          </a>

          <header className="resource-heading">
            <span className="section-kicker">TASKFLOW / DEVELOPER</span>
            <h1>Meet the developer.</h1>
            <p>
              TaskFlow is created and developed by <strong>itsiamdev</strong>,
              a project focused on making everyday planning feel simpler.
            </p>
          </header>

          <section className="developer-profile" aria-labelledby="developer-name">
            <img className="developer-avatar" src="/developer-photo.png" alt="itsiamdev" />
            <div className="developer-profile-copy">
              <span className="developer-eyebrow">CREATOR &amp; DEVELOPER</span>
              <h2 id="developer-name">itsiamdev</h2>
              <p>
                Building TaskFlow, a mobile productivity app for organizing
                tasks, building habits, and tracking focused work. The project
                uses Expo, React Native, TypeScript, and SQLite to bring its
                core planning tools together.
              </p>
              <a
                className="developer-inline-link"
                href="https://github.com/itsiamdev"
                target="_blank"
                rel="noreferrer"
              >
                GitHub profile <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>

          <section className="developer-project" aria-labelledby="developer-project-title">
            <div>
              <span className="section-kicker">OPEN SOURCE PROJECT</span>
              <h2 id="developer-project-title">Help shape TaskFlow.</h2>
              <p>
                Explore the source code, follow development, or contribute
                ideas and improvements through the project repository.
              </p>
            </div>
            <div className="developer-actions">
              <a
                className="button button-primary developer-action-button"
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub repository <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
