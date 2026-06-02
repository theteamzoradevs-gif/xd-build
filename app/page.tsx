import type { Metadata } from "next";
import { getHomeContentWithFallback } from "@/lib/api/home";
import { CompanyIntro } from "@/sections/home/CompanyIntro";
import { FeaturedPortfolio } from "@/sections/home/FeaturedPortfolio";
import { FinalCta } from "@/sections/home/FinalCta";
import { HomeHero } from "@/sections/home/Hero";
import { HomeServicesGrid } from "@/sections/home/HomeServicesGrid";
import { QualityLineBanner } from "@/sections/home/QualityLineBanner";
import { Testimonials } from "@/sections/home/Testimonials";
import { TrustMetrics } from "@/sections/home/TrustMetrics";
import { WhyOutsource } from "@/sections/home/WhyOutsource";
import { WhyUs } from "@/sections/home/WhyUs";
import { RecentPosts } from "@/sections/home/RecentPosts";
import FormPopup from "@/components/forms/FormPopup";

export const metadata: Metadata = {
  title: "XD Build",
  description:
    "Calgary-based Digital Delivery Partner specialising in BIM and VDC solutions for the construction industry.",
};

export default async function HomePage() {
  const home = await getHomeContentWithFallback();

  return (
    <>
      <HomeHero hero={home.hero} />
      <TrustMetrics stats={home.stats} />
      <WhyOutsource />
      <CompanyIntro />
      <HomeServicesGrid />
      <QualityLineBanner />
      <WhyUs />
      <FeaturedPortfolio />
      <RecentPosts />
      <Testimonials
        section={home.testimonialsSection}
        testimonials={home.testimonials}
      />
      <FinalCta />

      {/* 👈 Added at the very bottom so it renders on top of everything after 3 seconds */}
      <FormPopup />
    </>
  );
}