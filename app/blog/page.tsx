import type { Metadata } from "next";
import { BlogSection } from "@/components/blog/BlogSection";
import { toPublicLoadError } from "@/lib/api/public-error";
import { getPublishedBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Recent posts and updates from the XD Build content archive.",
};

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof getPublishedBlogPosts>> = [];
  let loadError: string | null = null;

  try {
    posts = await getPublishedBlogPosts();
  } catch (error) {
    loadError = toPublicLoadError(error);
    console.error("[BlogPage]", error);
  }

  return (
    <>
      {loadError ? (
        <p className="pageLead" role="alert" style={{ padding: "0 1.5rem" }}>
          {loadError}
        </p>
      ) : null}
      <BlogSection posts={posts} />
    </>
  );
}
