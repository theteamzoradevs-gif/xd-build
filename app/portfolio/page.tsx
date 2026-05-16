import type { Metadata } from "next";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/sections/home/CtaBand";
import { PortfolioGallery } from "@/sections/portfolio/PortfolioGallery";
import { PORTFOLIO_QUALITY_LINE } from "@/lib/portfolioCopy";
import portfolioStyles from "./portfolio-page.module.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected BIM, MEP, and VDC projects with concrete outcomes, from mission critical campuses to HQ builds.",
};

export default function PortfolioPage() {
  return (
    <>
      <Section aria-labelledby="portfolio-title">
        <p className="pageKicker">Portfolio</p>
        <h1 id="portfolio-title" className="pageTitle">
          Confirmed projects
        </h1>
        <p className="pageLead">
          Calgary, Alberta, and regional work spanning museums, healthcare, academic
          campuses, and critical infrastructure — with BIM, scanning, and prefabrication
          at the centre of delivery.
        </p>
        <blockquote className={portfolioStyles.qualityQuote}>
          <p>{PORTFOLIO_QUALITY_LINE}</p>
        </blockquote>
      </Section>
      <Section tight aria-label="Portfolio projects">
        <PortfolioGallery />
      </Section>
      <Section tight aria-label="Impact metrics">
        <div className={portfolioStyles.portfolioMetrics}>
          <div>
            <p className={portfolioStyles.portfolioMetricVal}>
              <AnimatedCounter value="500+" />
            </p>
            <p className={portfolioStyles.portfolioMetricLabel}>projects completed</p>
          </div>
          <div>
            <p className={portfolioStyles.portfolioMetricVal}>
              <AnimatedCounter value="12M+" />
            </p>
            <p className={portfolioStyles.portfolioMetricLabel}>sq. ft. designed</p>
          </div>
          <div>
            <p className={portfolioStyles.portfolioMetricVal}>
              <AnimatedCounter value="98%" />
            </p>
            <p className={portfolioStyles.portfolioMetricLabel}>clients satisfied</p>
          </div>
          <div>
            <p className={portfolioStyles.portfolioMetricVal}>
              <AnimatedCounter value="15" />
            </p>
            <p className={portfolioStyles.portfolioMetricLabel}>national awards</p>
          </div>
        </div>
      </Section>
      <CtaBand
        dark
        title="Interested in working with us?"
        subtitle="We’ll tell you plainly if XD Build is right for your next milestone, or point you elsewhere."
      />
    </>
  );
}
