import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const steps = [
  {
    number: "01",
    title: "Capture what’s on your mind",
    description: "Bring tasks, ideas, and reminders together in one place.",
  },
  {
    number: "02",
    title: "Choose what matters today",
    description: "Set a clear priority and give your day a little structure.",
  },
  {
    number: "03",
    title: "Make steady progress",
    description: "Focus on one thing at a time and notice what you accomplish.",
  },
];

function PhonePreviews() {
  return (
    <div className="download-phone-art" aria-hidden="true">
      <div className="download-phone phone-back">
        <div className="phone-screen">
          <div className="phone-status"><span>9:41</span><span>● ● ▰</span></div>
          <div className="phone-app-heading">
            <span>MONDAY, OCTOBER 26</span>
            <strong>Good morning, Alex <b>✳</b></strong>
          </div>
          <div className="phone-summary">
            <span>Today&apos;s progress</span>
            <strong>5 of 8 tasks</strong>
            <i><span /></i>
          </div>
          <div className="phone-list-heading">Today&apos;s tasks <span>＋</span></div>
          <div className="phone-task is-done"><i>✓</i><span>Review project brief<small>Work · 9:00 AM</small></span></div>
          <div className="phone-task"><i /><span>Finish presentation<small>Work · 11:30 AM</small></span></div>
          <div className="phone-task"><i /><span>Read 20 pages<small>Personal · 2:00 PM</small></span></div>
          <div className="phone-tab-bar"><span>⌂<small>Today</small></span><span>▤<small>Tasks</small></span><span>◷<small>Plan</small></span><span>☻<small>Profile</small></span></div>
        </div>
      </div>
      <div className="download-phone phone-front">
        <div className="phone-screen">
          <div className="phone-status"><span>9:41</span><span>● ● ▰</span></div>
          <div className="phone-profile"><span>AM</span><small>YOUR WEEK</small></div>
          <h3>A little progress<br />every day.</h3>
          <div className="phone-progress-ring"><div><strong>75%</strong><small>complete</small></div></div>
          <div className="phone-week-label">THIS WEEK <b>+24%</b></div>
          <div className="phone-bars"><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="phone-week-days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
          <div className="phone-streak"><span>✦</span><div><strong>You&apos;re on a roll</strong><small>4-day productivity streak</small></div></div>
          <div className="phone-tab-bar"><span>⌂<small>Today</small></span><span>▤<small>Tasks</small></span><span>◷<small>Plan</small></span><span>☻<small>Profile</small></span></div>
        </div>
      </div>
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <>
      <Header />
      <main className="getting-started-page">
        <div className="container getting-started-container">
          <a className="text-link getting-started-back" href="/#top">
            <span aria-hidden="true">←</span> Back to TaskFlow
          </a>

          <section className="getting-started-hero">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span>
              A clearer day starts here
            </span>
            <h1>
              Make space for
              <br />
              <span>what matters.</span>
            </h1>
            <p>
              A few small steps can turn a busy list into a thoughtful plan.
              Explore how TaskFlow can help you get organized.
            </p>
            <a className="button button-primary" href="/#features">
              Explore the features <span aria-hidden="true">↗</span>
            </a>
          </section>

          <section className="download-section" aria-labelledby="download-title">
            <PhonePreviews />
            <div className="download-intro">
              <span className="section-kicker">YOUR TASKFLOW, YOUR WAY</span>
              <h2 id="download-title">
                Choose where to <span>begin.</span>
              </h2>
              <p>
                Take a look at the web demo today. Mobile apps are on their way.
              </p>
            </div>
            <div className="download-options">
              <a className="download-option download-web" href="/#product">
                <span className="download-option-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3.5" y="4.5" width="17" height="12" rx="2" />
                    <path d="M8 20h8M12 16.5V20" />
                  </svg>
                </span>
                <span className="download-option-copy">
                  <small>AVAILABLE NOW</small>
                  <strong>Web version</strong>
                </span>
                <span className="download-option-action">Open demo <b aria-hidden="true">↗</b></span>
              </a>
              <button className="download-option" type="button" disabled>
                <span className="download-option-icon play-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path className="play-main" d="M5.2 3.8c-.4.3-.7.8-.7 1.5v13.4c0 .7.3 1.2.7 1.5l8-8.2-8-8.2Z" />
                    <path className="play-blue" d="m5.2 3.8 9.5 5.7 3.1-3.1-10.2-3.8c-.9-.3-1.8.2-2.4 1.2Z" />
                    <path className="play-green" d="m5.2 20.2 9.5-5.7 3.1 3.1-10.2 3.8c-.9.3-1.8-.2-2.4-1.2Z" />
                    <path className="play-yellow" d="m14.7 9.5 3.1-3.1 2.6 1.5c1.2.7 1.2 2.5 0 3.2l-2.6 1.5-3.1-3.1Z" />
                    <path className="play-red" d="m14.7 14.5 3.1 3.1 2.6-1.5c1.2-.7 1.2-2.5 0-3.2l-2.6-1.5-3.1 3.1Z" />
                  </svg>
                </span>
                <span className="download-option-copy">
                  <small>ANDROID</small>
                  <strong>Google Play</strong>
                </span>
                <span className="download-option-action">Coming soon</span>
              </button>
              <button className="download-option" type="button" disabled>
                <span className="download-option-icon apple-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="m7 19 5-12 5 12M9 14h6M5 21 17 5M19 21 7 5" />
                  </svg>
                </span>
                <span className="download-option-copy">
                  <small>IOS · BETA</small>
                  <strong>App Store</strong>
                </span>
                <span className="download-option-action">Beta soon</span>
              </button>
            </div>
          </section>

          <section className="getting-started-steps" aria-labelledby="getting-started-title">
            <div className="getting-started-section-heading">
              <span className="section-kicker">A SIMPLE PLACE TO BEGIN</span>
              <h2 id="getting-started-title">
                Start with one <span>small step.</span>
              </h2>
              <p>Build a calmer routine, one task at a time.</p>
            </div>
            <div className="getting-started-step-grid">
              {steps.map((step) => (
                <article className="getting-started-step" key={step.number}>
                  <span className="getting-started-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <p className="getting-started-notice">
            TaskFlow is currently a concept demo. Creating an account and saving
            tasks are not available in this version.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
