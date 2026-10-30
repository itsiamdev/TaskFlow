export default function Footer() {
  return (
        <footer className="site-footer">
          <div className="container footer-main">
            <div className="footer-brand-col"><a className="brand" href="/#top"><span className="brand-mark"><span></span><span></span><span></span></span><span>taskflow</span></a><p>A simpler way to organize your day and make meaningful progress.</p><div className="social-links" aria-label="Social media"><a href="/#top" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 10h3v9H5zm5 0h2.9v1.2h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.5V19h-3v-4.3c0-1 0-2.3-1.5-2.3s-1.8 1.1-1.8 2.2V19h-3v-9Z"/></svg></a><a href="/#top" aria-label="X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z"/></svg></a><a href="/#top" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle className="instagram-flash" cx="17.7" cy="6.8" r="1"/></svg></a></div></div>
            <div className="footer-column"><strong>Product</strong><a href="/#features">Features</a><a href="/#how-it-works">How it works</a><a href="/#faq">FAQ</a></div>
            <div className="footer-column"><strong>Company</strong><a href="/#top">About</a><a href="mailto:hello@taskflow.example">Contact</a></div>
            <div className="footer-column"><strong>Resources</strong><a href="/#faq">Help center</a><a href="/#product">Documentation</a></div>
            <div className="footer-column"><strong>Legal</strong><a href="/privacy-policy">Privacy policy</a><a href="/terms-of-service">Terms of service</a></div>
          </div>
          <div className="container footer-bottom"><span>© 2026 TaskFlow. A concept demo.</span><span>Designed for a clearer day <b>✳</b></span></div>
        </footer>
  );
}
