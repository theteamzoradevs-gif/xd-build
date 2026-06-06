import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";
import styles from "./FeaturedPost.module.css";

type Props = {
  post: BlogPost;
};

export function FeaturedPost({ post }: Props) {
  return (
    <article className={styles.wrap}>
      {/* Left Content Side */}
      <div className={styles.content}>
        <p className={styles.kicker}>Featured Post</p>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <p className={styles.meta}>
          {post.date} · {post.category}
        </p>
        <Link href={`/blog/${post.slug}`} className={styles.cta}>
          Explore
        </Link>
      </div>

      {/* Right Image Side */}
      {post.image && (
        <div className={styles.imageContainer}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
            priority
            className={styles.image}
          />
        </div>
      )}
    </article>
  );
}