import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllProjectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const routes = [
    "",
    "/portfolio",
    "/services",
    "/why-us",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    priority: path === "" ? 1 : 0.75,
    changeFrequency: "monthly",
  }));

  const projectEntries: MetadataRoute.Sitemap = getAllProjectSlugs().map(
    (slug) => ({
      url: `${base}/portfolio/${slug}`,
      lastModified: new Date(),
      priority: 0.65,
      changeFrequency: "monthly",
    })
  );

  return [...staticEntries, ...projectEntries];
}
