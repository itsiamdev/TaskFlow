export default function StepsSection() {
  return (
          <section className="steps-section section-pad" id="how-it-works">
            <div className="container">
              <div className="section-heading centered"><span className="section-kicker">SIMPLE BY DESIGN</span><h2>Getting organized shouldn’t<br />be <span>complicated.</span></h2><p>Three small steps. A much clearer day.</p></div>
              <div className="steps-grid">
                <article className="step-card"><div className="step-top"><span className="step-number">01</span><span className="step-icon">＋</span></div><h3>Capture</h3><p>Add everything you need to remember. Get it out of your head and into one place.</p><div className="step-line"><span></span></div></article>
                <article className="step-card"><div className="step-top"><span className="step-number">02</span><span className="step-icon">⌁</span></div><h3>Prioritize</h3><p>Decide what deserves your attention first and give your day a little structure.</p><div className="step-line"><span></span></div></article>
                <article className="step-card"><div className="step-top"><span className="step-number">03</span><span className="step-icon">↗</span></div><h3>Accomplish</h3><p>Work through your list, notice your progress, and build a habit that lasts.</p><div className="step-line"><span></span></div></article>
              </div>
            </div>
          </section>
  );
}
