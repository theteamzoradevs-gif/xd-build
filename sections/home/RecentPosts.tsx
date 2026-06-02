import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/blog/BlogCard";
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
      posts = await getRecentBlogPosts(3);
    } catch (error) {
      loadError = toPublicLoadError(error);
      console.error("[RecentPosts]", error);
    }
  }

  const [highlight, ...morePosts] = posts;

  return (
    <Section className={styles.section} aria-labelledby="recent-posts-title">
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Recent Posts</p>
          <h2 id="recent-posts-title" className={styles.title}>
            Fresh perspectives from our team
          </h2>
          <p className={styles.lead}>
            Short reads on construction tech, delivery risk, and field-first execution.
          </p>
        </div>
        {posts.length > 0 ? (
          <Button href="/blog" variant="secondary" className={styles.viewAll}>
            View all posts
          </Button>
        ) : null}
      </div>

      {loadError ? (
        <p className={styles.lead} role="alert">
          {loadError}
        </p>
      ) : null}

      {highlight ? (
        <article className={styles.card}>
          {highlight.image ? (
            <div className={styles.media}>
              <Image
                src={highlight.image}
                alt={highlight.imageAlt}
                width={960}
                height={540}
                className={styles.heroImage}
                sizes="(max-width: 768px) 100vw, 960px"
              />
            </div>
          ) : null}
          <p className={styles.meta}>
            {highlight.category} · {highlight.date}
          </p>
          <h3 className={styles.postTitle}>{highlight.title}</h3>
          <p className={styles.excerpt}>{highlight.excerpt}</p>
          <div className={styles.actions}>
            <Button href="/contact" variant="primary">
              Get Consultation
            </Button>
            <Link href={`/blog/${highlight.slug}`} className={styles.readMore}>
              Read post
              <Image
                src="/icons/right-arrow.svg"
                alt=""
                width={12}
                height={12}
                aria-hidden
              />
            </Link>
          </div>
        </article>
      ) : !loadError ? (
        <p className={styles.lead}>
          Publish a blog post in the admin (status <strong>Published</strong>) to
          show it here. Check <strong>Feature this post in listings</strong> to pin
          it as the main highlight.
        </p>
      ) : null}

      {morePosts.length > 0 ? (
        <div className={styles.moreGrid}>
          {morePosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : null}
    </Section>
  );
}
