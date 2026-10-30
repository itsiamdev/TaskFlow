export default function BenefitsSection() {
  return (
          <section className="benefits-section section-pad" id="benefits">
            <div className="container benefits-grid">
              <div className="benefits-visual">
                <div className="benefit-note note-top"><span>✦</span><div><strong>Focus found</strong><small>One thing at a time.</small></div></div>
                <div className="focus-card"><div className="focus-card-top"><span>YOUR DAILY FOCUS</span><span className="focus-menu">···</span></div><div className="focus-date">MONDAY <span>26 OCT</span></div><h3>Make room for<br />your best work.</h3><p>Small, intentional steps make a meaningful difference.</p><div className="focus-divider"></div><div className="focus-task"><span className="focus-check">✓</span><div><strong>Choose your top priority</strong><small>Start with what matters most</small></div></div><div className="focus-task"><span className="focus-check empty"></span><div><strong>Give it your full attention</strong><small>One task, no extra noise</small></div></div><div className="focus-progress"><span>DAILY FOCUS</span><strong>2 of 3</strong><div><i></i></div></div></div>
                <div className="benefit-note note-bottom"><span>↗</span><div><strong>Progress over perfection</strong><small>You're getting there.</small></div></div>
              </div>
              <div className="benefits-copy"><span className="section-kicker">A BETTER DAILY RHYTHM</span><h2>Create space for<br /><span>what matters.</span></h2><p className="benefits-intro">A little structure can change how your day feels. TaskFlow helps you build a calmer, more intentional routine.</p><div className="benefit-row"><span className="benefit-row-icon">◎</span><div><h3>More clarity</h3><p>Know what needs to be done and where to begin.</p></div></div><div className="benefit-row"><span className="benefit-row-icon">⌁</span><div><h3>Better focus</h3><p>Spend less time organizing and more time making progress.</p></div></div><div className="benefit-row"><span className="benefit-row-icon">✳</span><div><h3>A sense of accomplishment</h3><p>Make your progress visible, one completed task at a time.</p></div></div></div>
            </div>
          </section>
  );
}
