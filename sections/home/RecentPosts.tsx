import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { getRecentBlogPosts, type BlogPost } from "@/lib/blog";
import { toPublicLoadError } from "@/lib/api/public-error";
import styles from "./RecentPosts.module.css";

type Props = {
  posts?: BlogPost[];
};

export async function RecentPosts({ posts: prefetched }: Props) {
  let posts: BlogPost[] = prefetched ?? [];
  let loadError: string | null = null;

  if (!prefetched) {
    try {
      posts = await getRecentBlogPosts(1);
    } catch (error) {
      loadError = toPublicLoadError(error);
      console.error("[RecentPosts]", error);
    }
  }

  const featured = posts[0];

  return (
    <Section denseTop denseBottom className={styles.section} aria-labelledby="recent-posts-title">
      <div className={styles.header}>
        <p className={styles.kicker}>Blog</p>
        <h2 id="recent-posts-title" className={styles.title}>
          Recent posts
        </h2>
        <p className={styles.lead}>
          Practical reads on BIM delivery, MEP coordination, and project clarity.
        </p>
      </div>

      {loadError ? (
        <p className={styles.lead} role="alert">
          {loadError}
        </p>
      ) : null}

      {featured ? <FeaturedPost post={featured} /> : null}

      {posts.length > 0 ? (
        <div className={styles.footer}>
          <Link href="/blog" className={styles.viewAll}>
            View all posts
          </Link>
        </div>
      ) : null}
    </Section>
  );
}
