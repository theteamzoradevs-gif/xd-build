import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FinalCta } from "@/sections/home/FinalCta";
import { RoutePortfolioShowcase } from "@/sections/portfolio/RoutePortfolioShowcase";
import { siteConfig } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About our team",
  description:
    "XD Build pairs field instincts with obsessive digital craft for owners shipping complex portfolios.",
};

const TEAM = [
  {
    name: "Vinay Levaka",
    title: "Director and Founder",
    bio: "Leads strategy and delivery standards across XD Build BIM and VDC engagements.",
    img: "/images/vinay-levaka.jpg",
    alt: "Modern digital solutions company",
  },
  {
    name: "Dinesh Reddy",
    title: "Lead Advisor",
    bio: "Supports clients with practical BIM advisory and milestone-level coordination reviews.",
    img: "/images/dinesh-reddy.png",
    alt: "Modern digital solutions company",
  },
  {
    name: "Yugender Elugu",
    title: "Business Development Head",
    bio: "Works with partners to align scope, timelines, and the right delivery model early.",
    img: null,
    alt: "Modern digital solutions company",
  },
  {
    name: "Jyotheeswar Reddy",
    title: "BIM Lead",
    bio: "Drives model quality, clash discipline, and coordination cadence across active packages.",
    img: "/images/jyotheeswar-reddy.png",
    alt: "Jyotheeswar Reddy, BIM Lead",
  },
  {
    name: "Venu Mukkamula",
    title: "Managing Partner",
    bio: "Leads strategic delivery alignment and partnership outcomes for complex construction programs.",
    img: "/images/venu-mukkamula.png",
    alt: "Venu Mukkamula, Managing Partner",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Section className={styles.hero} aria-labelledby="about-hero-title">
        <div className={styles.heroInner}>
          <p className={`${styles.heroKicker} pageKicker`}>Craft + code</p>
          <h1 id="about-hero-title" className="pageTitle">
            Bridging stubborn jobsites with modern digital craftsmanship
          </h1>
          <p className={`${styles.heroLead} pageLead`}>
            {siteConfig.name} exists for builders who admire beautiful renderings, but
            need language that electricians and inspectors believe.
          </p>
        </div>
      </Section>

      <Section aria-labelledby="mission-title">
        <div className={styles.twoCol}>
          <div>
            <p className="pageKicker">Mission</p>
            <h2 id="mission-title" className={styles.blockTitle}>
              Innovate quietly where quality usually fails
            </h2>
            <p className={styles.blockText}>
              We help mission-driven owners keep promises to lenders, occupants, and crews
              alike by baking coordination rituals into everyday delivery.
            </p>
          </div>
          <div className={styles.mediaRounded}>
            <Image
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1600&auto=format&fit=crop"
              alt="Modern digital solutions company"
              fill
              className={styles.cover}
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      <Section className={styles.visionBand} aria-labelledby="vision-title">
        <div className={`${styles.twoCol} ${styles.visionRow}`}>
          <div className={styles.mediaRounded}>
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop"
              alt="Modern digital solutions company"
              fill
              className={styles.cover}
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
          <div>
            <p className={`${styles.heroKicker} pageKicker`}>Vision</p>
            <h2 id="vision-title" className={`${styles.blockTitle} ${styles.lightText}`}>
              Be the sanity check before steel locks in
            </h2>
            <p className={`${styles.blockText} ${styles.lightMuted}`}>
              We want every builder to recognize when digital delivery is fluff, and when it
              is structurally disciplined enough to insure.
            </p>
          </div>
        </div>
      </Section>

      <Section aria-labelledby="story-title">
        <div className={styles.story}>
          <div>
            <h2 id="story-title" className={styles.sectionTitle}>
              Built from blueprint culture to BIM fluency
            </h2>
            <div className={styles.storyPoints}>
              <div>
                <h3>The foundation</h3>
                <p>
                  Veteran supers and detailers anchored our instincts, everything else had to survive their scrutiny.
                </p>
              </div>
              <div>
                <h3>Digital integration</h3>
                <p>
                  Cloud coordination became non-negotiable as owners demanded proof, not anecdotes.
                </p>
              </div>
              <div>
                <h3>Modern leadership</h3>
                <p>
                  Now we parachute pods into national portfolios with the same blunt weekly scorecards everywhere.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.storyHero}>
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop"
              alt="Modern digital solutions company"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.cover}
            />
            <div className={styles.metricCard}>
              <p className={styles.metricValue}>
                <AnimatedCounter value="500+" />
              </p>
              <p className={styles.metricLabel}>Projects coordinated</p>
            </div>
          </div>
        </div>
      </Section>

      <Section aria-labelledby="team-title">
        <div className={styles.teamHeader}>
          <p className="pageKicker">Our team</p>
          <h2 id="team-title" className={styles.sectionTitle}>
            Meet Our Professional Team Members
          </h2>
        </div>
        <div className={styles.teamGrid}>
          {TEAM.map((person) => (
            <article key={person.name} className={styles.person}>
              <div className={styles.avatar}>
                {person.img ? (
                  <Image
                    src={person.img}
                    alt={person.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className={`${styles.cover} ${styles.teamPhoto}`}
                  />
                ) : (
                  <div className={styles.avatarFallback} aria-hidden>
                    {person.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                )}
              </div>
              <h3>{person.name}</h3>
              <p className={styles.role}>{person.title}</p>
              <p className={styles.bio}>{person.bio}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className={styles.culture} aria-labelledby="culture-title">
        <div className={styles.cultureInner}>
          <div className={styles.twoCol}>
          <div>
            <h2 id="culture-title" className={`${styles.sectionTitle} ${styles.lightText}`}>
              Culture of blunt precision
            </h2>
            <p className={`${styles.blockText} ${styles.lightMuted}`}>
              Respect for craft means saying “not yet” until the coordinated model matches the bravery of your schedule.
            </p>
            <div className={styles.miniGrid}>
              <div className={`${styles.mini} ${styles.lightMini}`}>
                <h3>Integrity</h3>
                <p>We escalate bad news simultaneously with workable options.</p>
              </div>
              <div className={`${styles.mini} ${styles.lightMini}`}>
                <h3>Accuracy</h3>
                <p>Measurements and metadata stay married, no orphaned PDFs pretending to be truth.</p>
              </div>
            </div>
          </div>
          <div className={styles.mediaRounded}>
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
              alt="Modern digital solutions company"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className={styles.cover}
            />
          </div>
        </div>
        </div>
      </Section>

      <Section aria-labelledby="about-cta">
        <div className={styles.splitCta}>
          <div>
            <p className="pageKicker">Proof over pitch</p>
            <h2 id="about-cta" className={styles.sectionTitle}>
              Ready to vet us on a milestone you cannot miss?
            </h2>
            <p className={styles.sectionLeadPlain}>
              One working session, we map risk, sequencing, and the fastest path to a coordinated milestone.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Button href="/portfolio" variant="primary">
              View full portfolio
            </Button>
            <Button href="/contact" variant="secondary">
              Get Consultation
            </Button>
          </div>
        </div>
      </Section>

      <RoutePortfolioShowcase routeKey="about" />

      <FinalCta />
    </>
  );
}
