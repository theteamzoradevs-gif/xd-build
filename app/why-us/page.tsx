import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/sections/home/CtaBand";
import { FinalCta } from "@/sections/home/FinalCta";
import { RoutePortfolioShowcase } from "@/sections/portfolio/RoutePortfolioShowcase";
import styles from "./why-us.module.css";

export const metadata: Metadata = {
  title: "Why XD Build",
  description:
    "Specific outcomes, not slogans, from a team obsessed with disciplined coordination.",
};

const STATS = [
  { value: "250+", label: "Projects completed" },
  { value: "12k+", label: "BIM models iterated" },
  { value: "100%", label: "Regulatory documentation traceable" },
  { value: "98%", label: "Clients who return with new scopes" },
] as const;

const TIMELINE = [
  {
    year: "2014",
    title: "Field-first origins",
    text: "We started translating messy jobsites into legible coordination packages teams could swear by.",
  },
  {
    year: "2017",
    title: "BIM scaled nationally",
    text: "Modeling workflows centralized, fewer rogue sheets, tighter ownership on changes.",
  },
  {
    year: "2020",
    title: "National delivery pod",
    text: "Squads aligned across timezones with one QA bar so quality did not hinge on whoever was awake.",
  },
  {
    year: "Today",
    title: "Digital twin-ready handoffs",
    text: "We package models so downstream teams, not only viz teams, use what we leave behind.",
  },
] as const;

export default function WhyUsPage() {
  return (
    <>
      <Section aria-labelledby="why-title">
        <div className={styles.heroGrid}>
          <div>
            <p className="pageKicker">Precision engineered delivery</p>
            <h1 id="why-title" className="pageTitle">
              Leaders choose XD Build because the field stops guessing
            </h1>
            <p className={`${styles.heroLead} pageLead`}>
              We turn coordination into receipts: named issues, clear owners, visuals
              that still make sense at 7am installs.
            </p>
          </div>
          <div className={styles.heroShot} aria-hidden>
            <div className={styles.heroPattern} />
          </div>
        </div>
      </Section>

      <Section tight className={styles.statBand} aria-label="Impact metrics">
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label}>
              <p className={styles.statValue}>
                <AnimatedCounter value={s.value} />
              </p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="performance-title">
        <div className={styles.timelineGrid}>
          <div>
            <h2 id="performance-title" className={styles.sectionTitle}>
              A decade refining how coordination feels on site
            </h2>
            <p className={styles.sectionLead}>
              The timeline below is shorthand for maturity, not marketing spikes. Same
              team, sharper rituals.
            </p>
            <div className={styles.timelineShot}>
              <Image
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1600&auto=format&fit=crop"
                alt="Modern digital solutions company"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className={styles.timelineImg}
              />
            </div>
          </div>
          <ol className={styles.timeline}>
            {TIMELINE.map((item, idx) => (
              <li key={item.year} className={styles.timelineItem}>
                <div className={styles.dot} aria-hidden />
                <div>
                  <p className={styles.timelineYear}>{item.year}</p>
                  <p className={styles.timelineHeading}>{item.title}</p>
                  <p className={styles.timelineText}>{item.text}</p>
                </div>
                {idx === TIMELINE.length - 1 ? null : (
                  <div className={styles.timelineLine} aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <CtaBand
        title="Prefer receipts over rhetoric?"
        subtitle="We send a blunt read on your readiness in the first reply, no fluff."
        primaryLabel="See related projects"
        primaryHref="/portfolio"
        secondaryLabel="Get Consultation"
        secondaryHref="/contact"
      />

      <Section className={styles.mastery} aria-labelledby="mastery-title">
        <div className={styles.masteryHeader}>
          <h2 id="mastery-title" className={styles.sectionTitle}>
            Technical mastery layered for leaders and crews
          </h2>
          <p className={styles.sectionLead}>
            Specialized pods so you never get a generalized answer when you asked about
            diffusers.
          </p>
        </div>
        <div className={styles.bento}>
          <article className={styles.bLarge}>
            <h3>BIM oversight that protects intent</h3>
            <p>
              Coordinators fluent in LOD discipline so design intent survives value
              engineering swings.
            </p>
          </article>
          <article className={styles.bDark}>
            <h3>ISO-minded QA</h3>
            <p>
              Naming, versioning, clashes, everything auditable before it becomes rework.
            </p>
          </article>
          <article>
            <h3>Electrical clarity</h3>
            <p>Keep feeder stories legible across floors and phased cutovers.</p>
          </article>
          <article>
            <h3>HVAC practicality</h3>
            <p>Routing that survives inspections and future filter changes alike.</p>
          </article>
          <article>
            <h3>MEP choreography</h3>
            <p>One playbook for ducts, piping, cabling, fewer territorial fights.</p>
          </article>
        </div>
      </Section>

      <Section aria-labelledby="reliability-title">
        <div className={styles.reliGrid}>
          <div className={styles.reliCollage}>
            <div className={styles.collageLarge}>
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop"
                alt="Modern digital solutions company"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.collageImg}
              />
            </div>
            <div className={styles.collageStack}>
              <div className={styles.collageMini}>
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                  alt="Modern digital solutions company"
                  fill
                  sizes="200px"
                  className={styles.collageImg}
                />
              </div>
              <div className={styles.collageMiniWide}>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=700&auto=format&fit=crop"
                  alt="Modern digital solutions company"
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                  className={styles.collageImg}
                />
              </div>
            </div>
          </div>
          <div>
            <p className="pageKicker">Client-centric reliability</p>
            <h2 id="reliability-title" className={styles.sectionTitle}>
              What “done” feels like Monday morning
            </h2>
            <ul className={styles.promiseList}>
              <li>
                <strong>Milestones you can cite.</strong>
                Dates tie to tangible model checkpoints, so schedule reviews stay honest.
              </li>
              <li>
                <strong>No mystery inbox.</strong>
                Cloud updates tied to approvals, ownership is obvious even if someone is
                out sick.
              </li>
              <li>
                <strong>Risk called early.</strong>
                We escalate conflicts sooner with solutions, not just screenshots.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <RoutePortfolioShowcase routeKey="why-us" />

      <FinalCta />
    </>
  );
}
