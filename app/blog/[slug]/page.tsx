import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog";
import styles from "./post.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Blog" };
  }
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <Section tight aria-labelledby="blog-post-title">
        <div className={styles.head}>
          <p className="pageKicker">{post.category}</p>
          <h1 id="blog-post-title" className={styles.title}>
            {post.title}
          </h1>
          <p className={styles.meta}>
            {post.date} · {post.comments} Comments
          </p>
        </div>

        <div className={styles.heroMedia}>
          <img src={post.image} alt={post.title} className={styles.heroImage} />
        </div>

        <article className={styles.body}>
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <div className={styles.actions}>
          <Link href="/blog" className={styles.back}>
            ← Back to Blog
          </Link>
        </div>
      </Section>
    </>
  );
}
