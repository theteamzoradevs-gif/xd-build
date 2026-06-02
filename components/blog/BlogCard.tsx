import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";
import styles from "./BlogCard.module.css";

type Props = {
  post: BlogPost;
};

export function BlogCard({ post }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className={styles.image}
        />
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
