import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import {
  getDetailPageSlugs,
  getProjectBySlug,
  isDetailPageEnabled,
} from "@/lib/projects";
import styles from "./project.module.css";

type Props = {
  params: { slug: string };
};

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await getDetailPageSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project || !isDetailPageEnabled(project)) return { title: "Project" };
  return {
    title: project.title,
    description: `${project.outcome} ${project.location}.`,
    openGraph: { title: project.title, description: project.outcome },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);
  if (!project || !isDetailPageEnabled(project)) notFound();

  const qs = encodeURIComponent(project.title);

  return (
    <>
      <Section className={styles.hero} aria-labelledby="project-hero-title">
        <div className={styles.heroInner}>
          <div className={styles.heroTags}>
            {project.categories.map((c) => (
              <span key={c} className={styles.tag}>
                {c}
              </span>
            ))}
          </div>
          <h1 id="project-hero-title" className={styles.heroTitle}>
            {project.title}
          </h1>
          <p className={styles.heroMeta}>{project.location}</p>
          {project.budget ? (
            <p className={styles.heroBudget}>Budget: {project.budget}</p>
          ) : null}
          <p className={styles.heroScope}>{project.scope}</p>
          <p className={styles.heroOutcome}>{project.outcome}</p>
          <div className={styles.heroMedia}>
            <Image
              src={project.heroSrc}
              alt={project.heroAlt}
              fill
              priority
              sizes="100vw"
              className={styles.heroImg}
            />
          </div>
        </div>
      </Section>

      <Section aria-labelledby="project-story">
        <h2 id="project-story" className="sr-only">
          Story
        </h2>
        <div className={styles.story}>
          <article className={styles.panel}>
            <h3 className={styles.panelTitle}>Problem</h3>
            <p className={styles.panelBody}>{project.problem}</p>
          </article>
          <article className={styles.panel}>
            <h3 className={styles.panelTitle}>Solution</h3>
            <p className={styles.panelBody}>{project.solution}</p>
          </article>
          <article className={styles.panel}>
            <h3 className={styles.panelTitle}>Result</h3>
            <p className={styles.panelBody}>{project.result}</p>
          </article>
        </div>
        <div className={styles.cta}>
          <Button href={`/contact?project=${qs}`} variant="primary">
            Start a similar project
          </Button>
          <Button href="/portfolio" variant="secondary">
            Back to portfolio
          </Button>
        </div>
      </Section>
    </>
  );
}
