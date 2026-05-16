import type { Metadata } from "next";
import { BrandFocus } from "@/sections/home/BrandFocus";
import { CompanyIntro } from "@/sections/home/CompanyIntro";
import { FeaturedPortfolio } from "@/sections/home/FeaturedPortfolio";
import { FinalCta } from "@/sections/home/FinalCta";
import { HomeHero } from "@/sections/home/Hero";
import { Testimonials } from "@/sections/home/Testimonials";
import { WhyUs } from "@/sections/home/WhyUs";

export const metadata: Metadata = {
  title: "XD Build",
  description:
    "Calgary-based Digital Delivery Partner specialising in BIM and VDC solutions for the construction industry.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BrandFocus />
      <CompanyIntro />
      <WhyUs />
      <FeaturedPortfolio />
      <Testimonials />
      <FinalCta />
    </>
  );
}
