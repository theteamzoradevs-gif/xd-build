import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/sections/home/CtaBand";
import { PortfolioGallery } from "@/sections/portfolio/PortfolioGallery";
import { WORK_WITH_US_CTA } from "@/lib/workWithUsCta";

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
      </Section>
      <Section tight aria-label="Portfolio projects">
        <PortfolioGallery />
      </Section>
      <CtaBand dark {...WORK_WITH_US_CTA} />
    </>
  );
}
