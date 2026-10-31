export default function ShowcaseSection() {
  return (
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
  );
}
