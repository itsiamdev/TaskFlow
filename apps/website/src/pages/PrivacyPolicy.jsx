export default function PrivacyPolicy() {
  return (
    <div className="legal-content">
      <p className="legal-intro">
        This notice explains what information may be handled when you visit the
        TaskFlow concept website.
      </p>

      <section>
        <h2>This is a static demo</h2>
        <p>
          TaskFlow is a frontend concept, not a live task-management service.
          The website does not provide accounts, save tasks, or operate a
          backend, and it does not intentionally collect personal information
          through forms.
        </p>
      </section>

      <section>
        <h2>Information handled when you visit</h2>
        <p>
          The website loads fonts from Google Fonts. When your browser requests
          those font files, Google may receive technical information such as
          your IP address and browser details. Review{" "}
          <a href="https://policies.google.com/privacy">
            Google&apos;s Privacy Policy
          </a>{" "}
          for information about its processing.
        </p>
        <p>
          If the website is hosted online, the hosting provider may also process
          standard connection logs. The details depend on the provider and its
          configuration.
        </p>
      </section>

      <section>
        <h2>Cookies and tracking</h2>
        <p>
          This demo does not include its own analytics, advertising, or
          tracking tools. The hosting provider or third-party resources may use
          technologies described in their own privacy notices.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <p>
          You can configure your browser to block third-party requests, though
          this may affect how fonts appear. This demo does not have a user
          account or stored task data to access, correct, or delete.
        </p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>
          This notice may need to change if the demo gains forms, accounts,
          analytics, or other services. Before launch, replace this placeholder
          with the operator&apos;s contact details and a notice that accurately
          describes the deployed website.
        </p>
      </section>
    </div>
  );
}
