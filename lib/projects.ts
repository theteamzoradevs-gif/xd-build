import { cache } from "react";
import { fetchJson } from "@/lib/api/fetch-json";

export const PORTFOLIO_CATEGORIES = [
  "Healthcare centres",
  "Research centres",
  "Educational facilities",
  "Other",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export type ProjectCategory = "All" | PortfolioCategory;

const PORTFOLIO_CATEGORY_SET = new Set<string>(PORTFOLIO_CATEGORIES);

export function normalizeProjectCategories(raw: string[]): PortfolioCategory[] {
  const seen = new Set<PortfolioCategory>();
  const normalized: PortfolioCategory[] = [];

  for (const value of raw) {
    const category: PortfolioCategory = PORTFOLIO_CATEGORY_SET.has(value)
      ? (value as PortfolioCategory)
      : "Other";
    if (!seen.has(category)) {
      seen.add(category);
      normalized.push(category);
    }
  }

  return normalized;
}

export type Project = {
  slug: string;
  title: string;
  location: string;
  budget?: string;
  scope: string;
  categories: PortfolioCategory[];
  outcome: string;
  heroSrc: string;
  heroBlurDataURL?: string;
  heroAlt: string;
  gridSize?: "large" | "medium" | "tall";
  detailPageEnabled?: boolean;
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
  categories: string[];
  outcome: string;
  heroSrc: string;
  heroBlurDataURL?: string;
  heroAlt: string;
  gridSize?: "large" | "medium" | "tall";
  detailPageEnabled?: boolean;
  problem: string;
  solution: string;
  result: string;
};

/** Detail page is on unless admin explicitly disables it. */
export function isDetailPageEnabled(
  project: Pick<Project, "detailPageEnabled">,
): boolean {
  return project.detailPageEnabled !== false;
}

export const PROJECT_PLACEHOLDERS: ProjectPlaceholder[] = [];

export function mapApiProject(p: ApiPortfolioProject): Project {
  return {
    slug: p.slug,
    title: p.title,
    location: p.location,
    budget: p.budget,
    scope: p.scope,
    categories: normalizeProjectCategories(p.categories ?? []),
    outcome: p.outcome,
    heroSrc: p.heroSrc,
    heroAlt: p.heroAlt,
    heroBlurDataURL: p.heroBlurDataURL,
    gridSize: p.gridSize,
    detailPageEnabled: p.detailPageEnabled,
    problem: p.problem,
    solution: p.solution,
    result: p.result,
  };
}

/** All published projects for grids (includes card-only / detailPageEnabled false). */
export const getProjects = cache(async function getProjects(): Promise<Project[]> {
  const data = await fetchJson<{ projects?: ApiPortfolioProject[] }>(
    "/api/projects?status=published",
  );
  return (data.projects ?? []).map(mapApiProject);
});

export const getProjectsByCategory = cache(
  async function getProjectsByCategory(
    category: PortfolioCategory,
  ): Promise<Project[]> {
    const data = await fetchJson<{ projects?: ApiPortfolioProject[] }>(
      `/api/projects?status=published&category=${encodeURIComponent(category)}`,
    );
    return (data.projects ?? []).map(mapApiProject);
  },
);

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

/**
 * Slugs that have a detail page — for generateStaticParams and sitemap only.
 * Do not use this to build the /portfolio grid.
 */
export async function getDetailPageSlugs(): Promise<string[]> {
  const projects = await getProjects();
  return projects.filter(isDetailPageEnabled).map((p) => p.slug);
}

/** @deprecated Use getDetailPageSlugs for static detail routes. */
export async function getAllProjectSlugs(): Promise<string[]> {
  return getDetailPageSlugs();
}
