import { fetchJson } from "@/lib/api/fetch-json";

export type ApiBlogPost = {
  id: string;
  title: string;
  categoryTag: string;
  date: string;
  commentCount: number;
  excerpt: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  status: "published" | "draft" | "scheduled";
  featured: boolean;
};

/** UI shape used by BlogSection, BlogCard, FeaturedPost */
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  comments: number;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const BLOG_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80";

function splitBody(body: string): string[] {
  const trimmed = body.trim();
  if (!trimmed) return [];
  return trimmed.split(/\n\s*\n/).filter(Boolean);
}

export function mapApiBlogPost(post: ApiBlogPost): BlogPost {
  const imageSrc = post.imageSrc?.trim();
  return {
    slug: post.id,
    title: post.title,
    date: post.date,
    category: post.categoryTag,
    comments: post.commentCount,
    excerpt: post.excerpt,
    image: imageSrc || BLOG_FALLBACK_IMAGE,
    imageAlt: post.imageAlt?.trim() || post.title,
    body: splitBody(post.body),
  };
}

function orderPublishedForList(posts: ApiBlogPost[]): ApiBlogPost[] {
  const featured = posts.find((p) => p.featured);
  if (!featured) return posts;
  return [featured, ...posts.filter((p) => p.id !== featured.id)];
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const data = await fetchJson<{ blogs?: ApiBlogPost[] }>(
    "/api/blogs?status=published",
  );
  const published = (data.blogs ?? []).filter((b) => b.status === "published");
  return orderPublishedForList(published).map(mapApiBlogPost);
}

export async function getFeaturedBlogPost(): Promise<BlogPost | undefined> {
  const posts = await getPublishedBlogPosts();
  return posts[0];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const { blog } = await fetchJson<{ blog: ApiBlogPost }>(
      `/api/blogs/${encodeURIComponent(slug)}`,
    );
    if (blog.status !== "published") return undefined;
    return mapApiBlogPost(blog);
  } catch {
    return undefined;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const data = await fetchJson<{ blogs?: ApiBlogPost[] }>(
    "/api/blogs?status=published",
  );
  return (data.blogs ?? [])
    .filter((b) => b.status === "published")
    .map((b) => b.id);
}
