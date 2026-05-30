export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  comments: number;
  excerpt: string;
  image: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
