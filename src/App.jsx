export default function App() {
  return (
    <>
      <header className="site-header">
          <nav className="nav container" aria-label="Main navigation">
            <a className="brand" href="#top" aria-label="TaskFlow home">
              <span className="brand-mark"><span></span><span></span><span></span></span>
              <span>taskflow</span>
            </a>
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#how-it-works">How it works</a>
              <a href="#benefits">Benefits</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="nav-actions">
              <a className="sign-in" href="#get-started">Sign in</a>
              <a className="button button-small button-dark" href="#get-started">Get started <span aria-hidden="true">↗</span></a>
            </div>
          </nav>
        </header>
      
        <main id="top">
          <section className="hero section-pad">
            <div className="hero-glow glow-one"></div><div className="hero-glow glow-two"></div>
            <div className="container hero-grid">
              <div className="hero-copy">
                <div className="eyebrow"><span className="eyebrow-dot"></span> Your productivity, reimagined</div>
                <h1>Make every<br />day <span>count.</span></h1>
                <p className="hero-lead">Plan smarter, stay focused, and turn your goals into meaningful progress.</p>
                <p className="hero-description">Organize your tasks, manage your priorities, and keep everything moving forward in one beautifully simple workspace.</p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#product">Start organizing <span aria-hidden="true">↗</span></a>
                  <a className="button button-quiet" href="#features">Explore features <span aria-hidden="true">↓</span></a>
                </div>
                <div className="hero-note"><span className="note-check">✓</span> Less chaos. More clarity.</div>
              </div>
      
              <div className="hero-visual" aria-label="Preview of the TaskFlow task dashboard">
                <div className="ambient-ring"></div>
                <div className="dashboard-window">
                  <div className="window-top">
                    <div className="window-brand"><span className="mini-mark">t</span> taskflow</div>
                    <div className="window-controls"><i></i><i></i><i></i></div>
                  </div>
                  <div className="app-layout">
                    <aside className="app-sidebar">
                      <div className="sidebar-label">WORKSPACE</div>
                      <a className="side-link active" href="#product"><span>▦</span> Overview <b>⌂</b></a>
                      <a className="side-link" href="#product"><span>☷</span> My tasks <em>8</em></a>
                      <a className="side-link" href="#product"><span>◷</span> Upcoming</a>
                      <a className="side-link" href="#product"><span>✓</span> Completed</a>
                      <div className="sidebar-label projects-label">YOUR PROJECTS</div>
                      <div className="project-link"><span className="project-dot violet"></span> Personal</div>
                      <div className="project-link"><span className="project-dot orange"></span> Work</div>
                      <div className="project-link"><span className="project-dot green"></span> Learning</div>
                      <div className="sidebar-profile"><div className="profile-avatar">AM</div><div><strong>Alex Morgan</strong><small>Free workspace</small></div><span>···</span></div>
                    </aside>
                    <div className="app-main">
                      <div className="app-greeting"><div><span className="muted-small">MONDAY, OCTOBER 26</span><h3>Good morning, Alex <span>✳</span></h3><p>Here’s your plan for today.</p></div><div className="app-search">⌕ <span>Search</span><kbd>⌘ K</kbd></div></div>
                      <div className="overview-cards">
                        <div className="overview-card"><span className="card-icon purple-icon">▤</span><span className="muted-small">Tasks today</span><strong>8 <small>tasks</small></strong><div className="mini-line"><i style={{ width: "68%" }} /></div><small className="card-foot">5 of 8 completed</small></div>
                        <div className="overview-card"><span className="card-icon green-icon">↗</span><span className="muted-small">Weekly progress</span><strong>72<small>%</small></strong><div className="mini-line green-line"><i style={{ width: "72%" }} /></div><small className="card-foot">Looking good this week</small></div>
                      </div>
                      <div className="tasks-head"><div><h4>Today’s tasks</h4><p>Make it a day that counts.</p></div><span className="add-task">＋</span></div>
                      <div className="task-list">
                        <label className="task-row"><input type="checkbox" defaultChecked /><span className="fake-check"></span><span className="task-text done">Review project brief<small><i className="tag tag-work">Work</i> · 9:00 AM</small></span><span className="priority priority-high">High</span></label>
                        <label className="task-row"><input type="checkbox" /><span className="fake-check"></span><span className="task-text">Finish presentation slides<small><i className="tag tag-work">Work</i> · 11:30 AM</small></span><span className="priority priority-medium">Medium</span></label>
                        <label className="task-row"><input type="checkbox" /><span className="fake-check"></span><span className="task-text">Read 20 pages<small><i className="tag tag-personal">Personal</i> · 2:00 PM</small></span><span className="priority priority-low">Low</span></label>
                        <label className="task-row"><input type="checkbox" defaultChecked /><span className="fake-check"></span><span className="task-text done">Complete coding practice<small><i className="tag tag-learning">Learning</i> · 3:30 PM</small></span><span className="priority priority-medium">Medium</span></label>
                      </div>
                      <div className="app-bottom-note"><span className="sparkle">✦</span><span><strong>You’re building momentum!</strong><small>Two tasks down. Keep going.</small></span><span className="note-arrow">↗</span></div>
                    </div>
                  </div>
                </div>
                <div className="floating-stat"><span className="stat-icon">✦</span><div><strong>You're on a roll</strong><small>4-day productivity streak</small></div><span className="stat-spark">↗</span></div>
                <div className="floating-check"><span>✓</span><div><strong>Task completed</strong><small>Nice work. Keep it up!</small></div></div>
              </div>
            </div>
            <div className="hero-bottom container"><span>MADE FOR YOUR EVERYDAY</span><div className="hero-bottom-line"></div><span>FOCUS ON WHAT MATTERS</span></div>
          </section>
      
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
      
          <section className="features-section section-pad" id="features">
            <div className="container">
              <div className="section-heading split-heading"><div><span className="section-kicker">THE TOOLKIT</span><h2>Everything you need<br />to <span>stay on track.</span></h2></div><p>Thoughtful tools that help you spend less time managing your day and more time living it.</p></div>
              <div className="features-grid">
                <article className="feature-card feature-large"><div className="feature-icon icon-lilac">☷</div><div className="feature-art task-art"><div className="art-line"><span className="art-check checked">✓</span><span>Plan the week ahead</span><b>Today</b></div><div className="art-line"><span className="art-check"></span><span>Send project update</span><b>10:30</b></div><div className="art-line"><span className="art-check"></span><span>Review notes</span><b>2:00</b></div></div><h3>Smart task organization</h3><p>Keep everything in one clear, accessible workspace, ready whenever you need it.</p></article>
                <article className="feature-card"><div className="feature-icon icon-peach">↗</div><div className="feature-art priority-art"><span className="priority-pill p-high">● High priority</span><span className="priority-pill p-medium">● Medium priority</span><span className="priority-pill p-low">● Low priority</span></div><h3>Priority management</h3><p>Know what deserves your attention first, without the guesswork.</p></article>
                <article className="feature-card"><div className="feature-icon icon-blue">◷</div><div className="feature-art calendar-art"><div className="calendar-top">OCTOBER 2026 <span>‹ &nbsp; ›</span></div><div className="calendar-days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div><div className="calendar-dates"><span>19</span><span>20</span><span className="date-active">21</span><span>22</span><span>23</span><span>24</span><span>25</span></div><div className="calendar-event"></div></div><h3>Daily planning</h3><p>Build a focused daily plan around your real priorities and commitments.</p></article>
                <article className="feature-card"><div className="feature-icon icon-green">↗</div><div className="feature-art bars-art"><div className="bar-wrap"><i style={{ height: "35%" }} /><i style={{ height: "52%" }} /><i style={{ height: "44%" }} /><i style={{ height: "76%" }} /><i style={{ height: "62%" }} /><i style={{ height: "91%" }} /><i style={{ height: "70%" }} /></div><div className="bars-caption"><span>This week</span><strong>+24%</strong></div></div><h3>Progress tracking</h3><p>Make your progress visible with clear summaries and satisfying milestones.</p></article>
                <article className="feature-card"><div className="feature-icon icon-yellow">◇</div><div className="feature-art project-art"><span className="project-tile tile-purple">P</span><span className="project-tile tile-orange">W</span><span className="project-tile tile-green">L</span><span className="project-label">3 active projects</span></div><h3>Projects & categories</h3><p>Group related tasks and keep different parts of life neatly organized.</p></article>
                <article className="feature-card"><div className="feature-icon icon-pink">⌁</div><div className="feature-art deadline-art"><div className="deadline-icon">◷</div><div><strong>Project deadline</strong><small>Tomorrow · 4:00 PM</small></div><span className="deadline-dot"></span></div><h3>Upcoming deadlines</h3><p>Keep important dates in sight and give yourself room to plan ahead.</p></article>
              </div>
            </div>
          </section>
      
          <section className="showcase-section section-pad" id="product">
            <div className="container showcase-grid">
              <div className="showcase-copy"><span className="section-kicker">A CLEARER PICTURE</span><h2>Your entire day.<br /><span>One clear view.</span></h2><p>From your first task to your final accomplishment, keep your plans organized and your attention where it belongs.</p><ul className="check-list"><li><span>✓</span> See what’s next at a glance</li><li><span>✓</span> Keep projects and priorities together</li><li><span>✓</span> Celebrate progress as you go</li></ul><a className="text-link" href="#get-started">Meet your new workspace <span>↗</span></a></div>
              <div className="showcase-visual">
                <div className="showcase-panel">
                  <div className="showcase-top"><div><span className="muted-small">YOUR WORKSPACE</span><h3>Weekly overview</h3></div><span className="week-select">Oct 26 – Nov 1⌄</span></div>
                  <div className="week-summary"><div><small>Tasks completed</small><strong>24 <em>/ 32</em></strong><div className="summary-progress"><i></i></div></div><div className="week-ring"><div><strong>75%</strong><small>complete</small></div></div></div>
                  <div className="week-chart"><div className="chart-y"><span>100%</span><span>75%</span><span>50%</span><span>25%</span></div><div className="chart-area"><div className="chart-gridlines"><i></i><i></i><i></i><i></i></div><div className="chart-bars"><div><i style={{ height: "52%" }} /><span>Mon</span></div><div><i style={{ height: "75%" }} /><span>Tue</span></div><div><i style={{ height: "61%" }} /><span>Wed</span></div><div><i style={{ height: "88%" }} /><span>Thu</span></div><div><i style={{ height: "69%" }} /><span>Fri</span></div><div><i style={{ height: "42%" }} /><span>Sat</span></div><div><i style={{ height: "25%" }} /><span>Sun</span></div></div></div></div>
                  <div className="showcase-bottom"><span className="bottom-dot"></span><div><strong>You're making steady progress</strong><small>Keep showing up for your goals.</small></div><span className="bottom-arrow">↗</span></div>
                </div>
                <div className="showcase-float"><span className="float-check">✓</span><div><strong>Small steps add up.</strong><small>Keep your streak alive</small></div></div>
              </div>
            </div>
          </section>
      
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
      
          <section className="testimonial-section section-pad">
            <div className="container">
              <div className="section-heading centered"><span className="section-kicker">MADE FOR REAL LIFE</span><h2>A little more calm in<br /><span>the everyday.</span></h2><p>Sample testimonial cards — replace these placeholders with genuine user feedback.</p></div>
              <div className="testimonial-grid">
                <article className="testimonial-card"><div className="quote-mark">“</div><p>“TaskFlow testimonial placeholder. Add a real quote here about how the product fits into someone's day.”</p><div className="testimonial-person"><span className="avatar avatar-one">JD</span><div><strong>Jordan D.</strong><small>Placeholder · Student</small></div><span className="placeholder-label">SAMPLE</span></div></article>
                <article className="testimonial-card featured-testimonial"><div className="quote-mark">“</div><p>“A placeholder for authentic customer feedback about planning, focus, and feeling more organized.”</p><div className="testimonial-person"><span className="avatar avatar-two">SM</span><div><strong>Sam M.</strong><small>Placeholder · Designer</small></div><span className="placeholder-label">SAMPLE</span></div></article>
                <article className="testimonial-card"><div className="quote-mark">“</div><p>“Use this card for a real story from someone who uses TaskFlow in their everyday routine.”</p><div className="testimonial-person"><span className="avatar avatar-three">AR</span><div><strong>Alex R.</strong><small>Placeholder · Developer</small></div><span className="placeholder-label">SAMPLE</span></div></article>
              </div>
            </div>
          </section>
      
          <section className="faq-section section-pad" id="faq">
            <div className="container faq-grid">
              <div className="faq-heading"><span className="section-kicker">GOOD TO KNOW</span><h2>Questions?<br /><span>We’ve got you.</span></h2><p>Everything you need to know about your new daily workspace.</p><a className="text-link" href="mailto:hello@taskflow.example">Get in touch <span>↗</span></a></div>
              <div className="faq-list">
                <details open><summary>What is TaskFlow?<span></span></summary><p>TaskFlow is a concept for a simple productivity workspace designed to help you organize tasks, clarify priorities, and keep track of your day.</p></details>
                <details><summary>Can I organize tasks by priority?<span></span></summary><p>The design includes visual high, medium, and low priority labels. This static demo shows how that feature could look in a finished product.</p></details>
                <details><summary>Can I manage multiple projects?<span></span></summary><p>The interface mockup includes project categories to demonstrate how tasks could be grouped by area or project.</p></details>
                <details><summary>Does TaskFlow work on mobile devices?<span></span></summary><p>This landing page is responsive and adapts to phones, tablets, and desktop screens.</p></details>
                <details><summary>Can I track my progress?<span></span></summary><p>Progress indicators and charts are included as visual examples in this frontend concept.</p></details>
                <details><summary>Is TaskFlow free to use?<span></span></summary><p>This is a visual demo, not a launched service. Pricing and availability would be defined when the product is built.</p></details>
              </div>
            </div>
          </section>
      
          <section className="cta-section section-pad" id="get-started">
            <div className="container">
              <div className="cta-card"><div className="cta-orb orb-left"></div><div className="cta-orb orb-right"></div><div className="cta-content"><span className="cta-kicker"><span></span> YOUR NEXT CHAPTER STARTS HERE</span><h2>Your next productive<br />day starts <em>here.</em></h2><p>Bring your tasks together, find your focus, and make progress with a clearer plan.</p><a className="button button-light" href="#top">Get started <span>↗</span></a><small>One task at a time. One better day at a time.</small></div><div className="cta-decoration"><div className="deco-card deco-card-back"></div><div className="deco-card deco-card-front"><span className="deco-check">✓</span><div><strong>One thing at a time.</strong><small>You're right where you need to be.</small></div><span className="deco-spark">✳</span></div></div></div>
            </div>
          </section>
        </main>
      
        <footer className="site-footer">
          <div className="container footer-main">
            <div className="footer-brand-col"><a className="brand" href="#top"><span className="brand-mark"><span></span><span></span><span></span></span><span>taskflow</span></a><p>A simpler way to organize your day and make meaningful progress.</p><div className="social-links" aria-label="Social media"><a href="#top" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 10h3v9H5zm5 0h2.9v1.2h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.5V19h-3v-4.3c0-1 0-2.3-1.5-2.3s-1.8 1.1-1.8 2.2V19h-3v-9Z"/></svg></a><a href="#top" aria-label="X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z"/></svg></a><a href="#top" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle className="instagram-flash" cx="17.7" cy="6.8" r="1"/></svg></a></div></div>
            <div className="footer-column"><strong>Product</strong><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#faq">FAQ</a></div>
            <div className="footer-column"><strong>Company</strong><a href="#top">About</a><a href="mailto:hello@taskflow.example">Contact</a></div>
            <div className="footer-column"><strong>Resources</strong><a href="#faq">Help center</a><a href="#product">Documentation</a></div>
            <div className="footer-column"><strong>Legal</strong><a href="#top">Privacy policy</a><a href="#top">Terms of service</a></div>
          </div>
          <div className="container footer-bottom"><span>© 2026 TaskFlow. A concept demo.</span><span>Designed for a clearer day <b>✳</b></span></div>
        </footer>
    </>
  );
}
