import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import styles from "./FeaturedPost.module.css";

type Props = {
  post: BlogPost;
};

export function FeaturedPost({ post }: Props) {
  return (
    <article className={styles.wrap}>
      <div className={styles.content}>
        <p className={styles.kicker}>Featured Post</p>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <p className={styles.meta}>
          {post.date} · {post.category} · {post.comments} Comments
        </p>
        <Link href={`/blog/${post.slug}`} className={styles.cta}>
          Explore
        </Link>
      </div>
    </article>
  );
}
