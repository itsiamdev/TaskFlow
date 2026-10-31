import { useEffect, useState } from "react";

const launchTime = new Date(2026, 10, 23, 0, 0, 0).getTime();
const betaSignupUrl = "#download-title";

function getTimeRemaining() {
  const totalSeconds = Math.max(0, Math.floor((launchTime - Date.now()) / 1000));

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

const countdownUnits = [
  ["days", "Days"],
  ["hours", "Hours"],
  ["minutes", "Minutes"],
  ["seconds", "Seconds"],
];

export default function BetaCountdownSection() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining);
  const isLive = Object.values(timeRemaining).every((value) => value === 0);

  useEffect(() => {
    const updateCountdown = () => setTimeRemaining(getTimeRemaining());
    const intervalId = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="beta-launch section-pad" aria-labelledby="beta-launch-title">
      <div className="container">
        <div className="beta-launch-card">
          <span className="beta-launch-kicker">TASKFLOW BETA 2026</span>
          <h2 id="beta-launch-title">
            Your productivity journey <span>starts soon.</span>
          </h2>
          <p className="beta-launch-description">
            Be among the first to experience a smarter way to manage your tasks,
            build habits, organize your schedule, and stay focused.
          </p>

          <p className="beta-launch-date">
            <span>LAUNCHING</span>
            <time dateTime="2026-11-23">NOVEMBER 23, 2026</time>
          </p>

          {isLive ? (
            <p className="beta-launch-live" role="status" aria-live="polite">
              TaskFlow Beta is now live!
            </p>
          ) : (
            <div
              className="beta-countdown"
              role="timer"
              aria-label="Time remaining until TaskFlow Beta launch"
              aria-live="off"
            >
              {countdownUnits.map(([unit, label]) => (
                <div className="beta-countdown-unit" key={unit}>
                  <span className="beta-countdown-value">
                    {String(timeRemaining[unit]).padStart(2, "0")}
                  </span>
                  <span className="beta-countdown-label">{label}</span>
                </div>
              ))}
            </div>
          )}

          <a className="button button-primary beta-launch-button" href={betaSignupUrl}>
            Join the Beta <span aria-hidden="true">↗</span>
          </a>
          <p className="beta-launch-note">
            Early access <span aria-hidden="true">·</span> Android{" "}
            <span aria-hidden="true">·</span> Limited beta testers
          </p>
        </div>
      </div>
    </section>
  );
}
