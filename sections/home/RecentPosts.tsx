import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { BLOG_POSTS } from "@/lib/blog";
import styles from "./RecentPosts.module.css";

export function RecentPosts() {
  const featuredPost = BLOG_POSTS[0];

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

      <article className={styles.card}>
        <p className={styles.meta}>Insight · 6 min read</p>
        <h3 className={styles.postTitle}>
          Exploring the High-Risk World of Chicken Road: A Crash-Style Game of Skill
        </h3>
        <p className={styles.excerpt}>
          A look at risk-reward decision making and what fast feedback loops can teach teams
          managing high-stakes project milestones.
        </p>
        <div className={styles.actions}>
          <Button href="/contact" variant="primary">
            Get Consultation
          </Button>
          <Link href={`/blog/${featuredPost.slug}`} className={styles.readMore}>
            Read post
            <Image src="/icons/right-arrow.svg" alt="" width={12} height={12} aria-hidden />
          </Link>
        </div>
      </article>
    </Section>
  );
}
