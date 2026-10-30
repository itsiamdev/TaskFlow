import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function ResourcePageLayout({ kicker, title, description, children }) {
  return (
    <>
      <Header />
      <main id="top" className="resource-page">
        <div className="container resource-container">
          <a className="text-link resource-back-link" href="/#top">
            <span aria-hidden="true">←</span> Back to TaskFlow
          </a>
          <header className="resource-heading">
            <span className="section-kicker">{kicker}</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </header>
          {children}
          <aside className="resource-demo-note">
            TaskFlow is currently a frontend concept. These guides describe the
            demo and illustrate how a future product could work; features such
            as accounts and saved tasks are not active.
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
