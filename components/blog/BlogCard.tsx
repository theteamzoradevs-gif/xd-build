import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import styles from "./BlogCard.module.css";

type Props = {
  post: BlogPost;
};

export function BlogCard({ post }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={post.image} alt={post.title} className={styles.image} />
      </div>
      <div className={styles.body}>
        <span className={styles.tag}>{post.category}</span>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.meta}>
          {post.date} · {post.comments} Comments
        </p>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className={styles.cta}>
          View Article
        </Link>
      </div>
    </article>
  );
}
