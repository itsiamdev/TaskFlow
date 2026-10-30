import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function LegalLayout({ title, children }) {
  return (
    <>
      <Header />
      <main id="top" className="legal-page">
        <div className="container legal-container">
          <a className="text-link legal-back-link" href="/#top">
            <span aria-hidden="true">←</span> Back to TaskFlow
          </a>
          <span className="section-kicker">TASKFLOW / LEGAL</span>
          <h1>{title}</h1>
          <p className="legal-updated">Last updated: October 30, 2026</p>
          {children}
          <p className="legal-notice">
            TaskFlow is a concept demo. This page is for general information and
            is not legal advice; update it to reflect your actual service before
            launch.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
