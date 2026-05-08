import type { Metadata } from "next";
import { BlogSection } from "@/components/blog/BlogSection";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Recent posts and updates from the XD Build content archive.",
};

export default function BlogPage() {
  return <BlogSection posts={BLOG_POSTS} />;
}
