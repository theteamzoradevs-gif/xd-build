import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/sections/home/CtaBand";
import { PortfolioGallery } from "@/sections/portfolio/PortfolioGallery";
import { WORK_WITH_US_CTA } from "@/lib/workWithUsCta";
import { toPublicLoadError } from "@/lib/api/public-error";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected BIM, MEP, and VDC projects with concrete outcomes, from mission critical campuses to HQ builds.",
};

export const revalidate = 60;

export default async function PortfolioPage() {
  let projects: Awaited<ReturnType<typeof getProjects>> = [];
  let loadError: string | null = null;

  try {
    projects = await getProjects();
  } catch (error) {
    loadError = toPublicLoadError(error);
    console.error("[PortfolioPage]", error);
  }

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
        {loadError ? (
          <p className="pageLead" role="alert">
            {loadError}
          </p>
        ) : null}
      </Section>
      <Section tight aria-label="Portfolio projects">
        <PortfolioGallery projects={projects} />
      </Section>
      <CtaBand dark {...WORK_WITH_US_CTA} />
    </>
  );
}
