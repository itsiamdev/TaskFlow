export default function Header() {
  return (
      <header className="site-header">
          <nav className="nav container" aria-label="Main navigation">
            <a className="brand" href="/#top" aria-label="TaskFlow home">
              <span className="brand-mark"><span></span><span></span><span></span></span>
              <span>taskflow</span>
            </a>
            <div className="nav-links">
              <a href="/#features">Features</a>
              <a href="/#how-it-works">How it works</a>
              <a href="/#benefits">Benefits</a>
              <a href="/#faq">FAQ</a>
            </div>
            <div className="nav-actions">
              <a className="blog-link" href="/blog">Blog</a>
              <a className="button button-small button-primary" href="/get-started">Get started <span aria-hidden="true">↗</span></a>
            </div>
          </nav>
        </header>
  );
}
