import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/blog";
import { getAllProjectSlugs } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");
  const routes = [
    "",
    "/portfolio",
    "/gallery",
    "/blog",
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

  let projectSlugs: string[] = [];
  let blogSlugs: string[] = [];

  try {
    [projectSlugs, blogSlugs] = await Promise.all([
      getAllProjectSlugs(),
      getAllBlogSlugs(),
    ]);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[sitemap]", error);
    }
  }

  const projectEntries: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${base}/portfolio/${slug}`,
    lastModified: new Date(),
    priority: 0.65,
    changeFrequency: "monthly",
  }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
