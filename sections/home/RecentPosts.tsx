import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getFeaturedBlogPost } from "@/lib/blog";
import styles from "./RecentPosts.module.css";

export async function RecentPosts() {
  let featuredPost: Awaited<ReturnType<typeof getFeaturedBlogPost>>;

  try {
    featuredPost = await getFeaturedBlogPost();
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[RecentPosts]", error);
    }
    featuredPost = undefined;
  }

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
      </div>

      {featuredPost ? (
        <article className={styles.card}>
          <p className={styles.meta}>
            {featuredPost.category} · {featuredPost.date}
          </p>
          <h3 className={styles.postTitle}>{featuredPost.title}</h3>
          <p className={styles.excerpt}>{featuredPost.excerpt}</p>
          <div className={styles.actions}>
            <Button href="/contact" variant="primary">
              Get Consultation
            </Button>
            <Link href={`/blog/${featuredPost.slug}`} className={styles.readMore}>
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
      ) : (
        <p className={styles.lead}>New posts will appear here soon.</p>
      )}
    </Section>
  );
}
