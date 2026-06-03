import { cache } from "react";
import { fetchJson } from "@/lib/api/fetch-json";

export type ProjectCategory = "All" | "MEP" | "BIM" | "VDC";

export type Project = {
  slug: string;
  title: string;
  location: string;
  budget?: string;
  scope: string;
  categories: Exclude<ProjectCategory, "All">[];
  outcome: string;
  heroSrc: string;
  heroBlurDataURL?: string;
  heroAlt: string;
  gridSize?: "large" | "medium" | "tall";
  problem: string;
  solution: string;
  result: string;
};

export type ProjectPlaceholder = {
  id: string;
  title: string;
};

/** API shape from GET /api/projects */
export type ApiPortfolioProject = {
  slug: string;
  title: string;
  location: string;
  budget?: string;
  scope: string;
  categories: ("BIM" | "MEP" | "VDC")[];
  outcome: string;
  heroSrc: string;
  heroBlurDataURL?: string;
  heroAlt: string;
  gridSize?: "large" | "medium" | "tall";
  problem: string;
  solution: string;
  result: string;
};

export const PROJECT_PLACEHOLDERS: ProjectPlaceholder[] = [];

export function mapApiProject(p: ApiPortfolioProject): Project {
  return {
    slug: p.slug,
    title: p.title,
    location: p.location,
    budget: p.budget,
    scope: p.scope,
    categories: p.categories,
    outcome: p.outcome,
    heroSrc: p.heroSrc,
    heroAlt: p.heroAlt,
    heroBlurDataURL: p.heroBlurDataURL,
    gridSize: p.gridSize,
    problem: p.problem,
    solution: p.solution,
    result: p.result,
  };
}

export const getProjects = cache(async function getProjects(): Promise<Project[]> {
  const data = await fetchJson<{ projects?: ApiPortfolioProject[] }>(
    "/api/projects?status=published",
  );
  return (data.projects ?? []).map(mapApiProject);
});

/** On failure log and return an empty list (does not break the page). */
export async function getProjectsSafe(): Promise<Project[]> {
  try {
    return await getProjects();
  } catch (error) {
    console.error("[getProjects]", error);
    return [];
  }
}

export const getFeaturedProjects = cache(
  async function getFeaturedProjects(): Promise<Project[]> {
    const data = await fetchJson<{ projects?: ApiPortfolioProject[] }>(
      "/api/projects?status=published&featured=true",
    );
    return (data.projects ?? []).map(mapApiProject);
  },
);

export const getProjectBySlug = cache(async function getProjectBySlug(
  slug: string,
): Promise<Project | undefined> {
  try {
    const { project } = await fetchJson<{ project: ApiPortfolioProject }>(
      `/api/projects/${encodeURIComponent(slug)}`,
    );
    return mapApiProject(project);
  } catch {
    return undefined;
  }
});

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getProjects();
  return projects.map((p) => p.slug);
}
