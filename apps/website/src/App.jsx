import { useEffect } from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ProblemSection from "./components/ProblemSection.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import ShowcaseSection from "./components/ShowcaseSection.jsx";
import StepsSection from "./components/StepsSection.jsx";
import BenefitsSection from "./components/BenefitsSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import FAQSection from "./components/FAQSection.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";
import LegalLayout from "./components/LegalLayout.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import GetStartedPage from "./pages/GetStartedPage.jsx";
import HelpCenterPage from "./pages/HelpCenterPage.jsx";
import DocumentationPage from "./pages/DocumentationPage.jsx";
import BlogPage, { getBlogArticleBySlug } from "./pages/BlogPage.jsx";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const blogSlug = path.startsWith("/blog/") ? path.slice("/blog/".length) : "";
  const blogArticle = getBlogArticleBySlug(blogSlug);

  useEffect(() => {
    const pageTitle =
      path === "/privacy-policy"
        ? "Privacy Policy"
        : path === "/terms-of-service"
          ? "Terms of Service"
          : path === "/get-started"
            ? "Get Started"
            : path === "/help-center"
              ? "Help Center"
              : path === "/documentation"
                ? "Documentation"
                : path === "/blog"
                  ? "Blog"
                  : blogArticle
                    ? blogArticle.title
                : "Make Every Day Count";

    document.title = `${pageTitle} | TaskFlow`;
  }, [path]);

  if (path === "/privacy-policy") {
    return (
      <LegalLayout title="Privacy Policy">
        <PrivacyPolicy />
      </LegalLayout>
    );
  }

  if (path === "/terms-of-service") {
    return (
      <LegalLayout title="Terms of Service">
        <TermsOfService />
      </LegalLayout>
    );
  }

  if (path === "/get-started") {
    return <GetStartedPage />;
  }

  if (path === "/help-center") {
    return <HelpCenterPage />;
  }

  if (path === "/documentation") {
    return <DocumentationPage />;
  }

  if (path === "/blog" || path.startsWith("/blog/")) {
    return <BlogPage />;
  }

  return (
    <>
      <Header />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <ShowcaseSection />
      <StepsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
