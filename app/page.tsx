import type { Metadata } from "next";
import { CompanyIntro } from "@/sections/home/CompanyIntro";
import { FeaturedPortfolio } from "@/sections/home/FeaturedPortfolio";
import { FinalCta } from "@/sections/home/FinalCta";
import { HomeHero } from "@/sections/home/Hero";
import { HomeServicesGrid } from "@/sections/home/HomeServicesGrid";
import { QualityLineBanner } from "@/sections/home/QualityLineBanner";
import { Testimonials } from "@/sections/home/Testimonials";
import { TrustMetrics } from "@/sections/home/TrustMetrics";
import { ValuePropositionSection } from "@/sections/home/ValuePropositionSection";
import { WhyOutsource } from "@/sections/home/WhyOutsource";
import { WhyUs } from "@/sections/home/WhyUs";
import { WorkflowSection } from "@/sections/home/WorkflowSection";

export const metadata: Metadata = {
  title: "XD Build",
  description:
    "Calgary-based Digital Delivery Partner specialising in BIM and VDC solutions for the construction industry.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustMetrics />
      <WhyOutsource />
      <CompanyIntro />
      <HomeServicesGrid />
      <ValuePropositionSection />
      <QualityLineBanner />
      <WorkflowSection />
      <WhyUs />
      <FeaturedPortfolio />
      <Testimonials />
      <FinalCta />
    </>
  );
}
