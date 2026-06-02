import { cache } from "react";
import { fetchJson } from "@/lib/api/fetch-json";
import { getHomeFallback } from "@/lib/home-fallback";
import type { HomeContent } from "@/types/home";

type HomeResponse = { home?: HomeContent };

function sortHomeContent(home: HomeContent): HomeContent {
  return {
    ...home,
    stats: [...home.stats].sort((a, b) => a.sortOrder - b.sortOrder),
    testimonials: [...home.testimonials].sort(
      (a, b) => a.sortOrder - b.sortOrder,
    ),
  };
}

export const getHomeContent = cache(async function getHomeContent(): Promise<HomeContent> {
  const data = await fetchJson<HomeResponse>("/api/home");
  if (!data.home) {
    throw new Error("Home API returned no home payload");
  }
  return sortHomeContent(data.home);
});

/** Fetch from admin API; on failure log and use static homepage defaults. */
export async function getHomeContentWithFallback(): Promise<HomeContent> {
  try {
    return await getHomeContent();
  } catch (error) {
    console.error("[getHomeContent]", error);
    return getHomeFallback();
  }
}
