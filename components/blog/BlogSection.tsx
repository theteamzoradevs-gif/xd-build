import type { BlogPost } from "@/lib/blog";
import { FeaturedPost } from "./FeaturedPost";
import { BlogCard } from "./BlogCard";
import styles from "./BlogSection.module.css";

type Props = {
  posts: BlogPost[];
};

export function BlogSection({ posts }: Props) {
  const [featured, ...rest] = posts;

  return (
    <section className={styles.section} aria-labelledby="blog-title">
      <header className={styles.header}>
        <p className={styles.kicker}>Blog</p>
        <h1 id="blog-title" className={styles.title}>
          Recent posts
        </h1>
        <p className={styles.lead}>
          Practical reads on BIM delivery, MEP coordination, and project clarity.
        </p>
      </header>

      {featured ? <FeaturedPost post={featured} /> : null}

      <div className={styles.grid}>
        {rest.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
