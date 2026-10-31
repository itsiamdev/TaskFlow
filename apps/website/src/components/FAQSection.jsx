export default function FAQSection() {
  return (
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
  );
}
