import type { Metadata } from "next";
import { CtaBand } from "@/sections/home/CtaBand";
import { FeaturedPortfolio } from "@/sections/home/FeaturedPortfolio";
import { FinalCta } from "@/sections/home/FinalCta";
import { HomeHero } from "@/sections/home/Hero";
import { HomeMetrics } from "@/sections/home/Metrics";
import { RecentPosts } from "@/sections/home/RecentPosts";
import { ServicesPreview } from "@/sections/home/ServicesPreview";
import { Testimonials } from "@/sections/home/Testimonials";
import { TrustStrip } from "@/sections/home/TrustStrip";

export const metadata: Metadata = {
  title: "XD Build",
  description:
    "XD Build helps owners and contractors align on what will be built, before work hits the field.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeMetrics />
      <FeaturedPortfolio />
      <CtaBand
        dark
        title="See coordination outcomes before you book a call."
        subtitle="Portfolio stories are deliberately short, built for quick proof."
        primaryLabel="View full portfolio"
        primaryHref="/portfolio"
        secondaryLabel="See services"
        secondaryHref="/services"
      />
      <ServicesPreview />
      {/* <CtaBand
        title="See coordination outcomes before you book a call."
        subtitle="Book a call when you are ready, we start with proof and move to clear next steps."
        primaryLabel="Book a call"
        primaryHref="/contact"
        secondaryLabel="View full portfolio"
        secondaryHref="/portfolio"
      /> */}
      <Testimonials />
      <TrustStrip />
      <RecentPosts />
      <FinalCta />
    </>
  );
}
