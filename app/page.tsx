import type { Metadata } from "next";
import { getHomeContentWithFallback } from "@/lib/api/home";
import { getRecentBlogPosts } from "@/lib/blog";
import type { BlogPost } from "@/lib/blog";
import { getFeaturedProjects, type Project } from "@/lib/projects";
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

export const revalidate = 60;

export default async function HomePage() {
  const [home, featuredProjects, recentPosts] = await Promise.all([
    getHomeContentWithFallback(),
    getFeaturedProjects().catch((): Project[] => []),
    getRecentBlogPosts(3).catch((): BlogPost[] => []),
  ]);

  return (
    <>
      <HomeHero hero={home.hero} featuredProjects={featuredProjects} />
      <TrustMetrics stats={home.stats} />
      <WhyOutsource />
      <CompanyIntro />
      <HomeServicesGrid />
      <QualityLineBanner />
      <WhyUs />
      <FeaturedPortfolio projects={featuredProjects} />
      <RecentPosts posts={recentPosts} />
      <Testimonials
        section={home.testimonialsSection}
        testimonials={home.testimonials}
      />
      <FinalCta />
      <FormPopup />
    </>
  );
}
