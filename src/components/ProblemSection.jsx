export default function ProblemSection() {
  return (
          <section className="problem-section section-pad">
            <div className="container">
              <div className="section-heading centered">
                <span className="section-kicker">A BETTER WAY TO WORK</span>
                <h2>Your day deserves more<br />than another <span>to-do list.</span></h2>
                <p>Productivity shouldn’t feel like another task on your list.</p>
              </div>
              <div className="problem-grid">
                <article className="problem-card"><div className="illustration illustration-memory"><span className="paper paper-back"></span><span className="paper paper-front"><i></i><i></i><i></i></span><span className="orbit-dot">!</span></div><h3>Too much to remember</h3><p>Keep important tasks, deadlines, and ideas from getting lost in the noise.</p></article>
                <article className="problem-card"><div className="illustration illustration-priority"><span className="priority-bar bar-one"></span><span className="priority-bar bar-two"></span><span className="priority-bar bar-three"></span><span className="priority-star">✦</span></div><h3>No clear priorities</h3><p>Understand what matters most and give your attention to the right things.</p></article>
                <article className="problem-card"><div className="illustration illustration-progress"><div className="progress-circle"><span>0%</span></div><span className="progress-chip">+1 task</span></div><h3>Progress feels invisible</h3><p>See what you’ve accomplished and build momentum one task at a time.</p></article>
              </div>
              <p className="section-footnote"><span>✳</span> TaskFlow makes everyday planning feel refreshingly simple.</p>
            </div>
          </section>
  );
}
