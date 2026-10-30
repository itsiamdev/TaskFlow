export default function HeroSection() {
  return (
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
  );
}
