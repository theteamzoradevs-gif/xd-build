import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/sections/home/CtaBand";
import { RoutePortfolioShowcase } from "@/sections/portfolio/RoutePortfolioShowcase";
import { ServiceSection } from "@/sections/services/ServiceSection";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "BIM coordination, MEP modeling, and VDC planning, explained as problems solved and outcomes earned.",
};

const METRICS = [
  { value: "500+", label: "Projects supported" },
  { value: "10+", label: "Lead modelers / coordinators on call" },
  { value: "99%", label: "Would run our process again (internal survey)" },
] as const;

export default function ServicesPage() {
  return (
    <>
      <Section aria-labelledby="services-title">
        <p className="pageKicker">Services overview</p>
        <h1 id="services-title" className="pageTitle">
          Engineering partners for teams tired of blurry handoffs
        </h1>
        <p className="pageLead">
          Below is exactly how we help, what breaks first, how we stabilize it,
          and what changes when we leave the model ready for real life.
        </p>
        <div className={styles.metrics}>
          {METRICS.map((m) => (
            <div key={m.label} className={styles.metric}>
              <p className={styles.metricValue}>{m.value}</p>
              <p className={styles.metricLabel}>{m.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <ServiceSection
        id="bim"
        eyebrow="BIM coordination"
        title="Everyone points to the same build story"
        problem="Separate models and drifting comments mean rework shows up weeks too late."
        solution="Single coordination hub with standards your trades can absorb in one glance."
        outcome="Cleaner RFIs, faster approvals, and a field team aligned before mobilization spikes."
        imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Construction crew reviewing plans on site"
      />

      <CtaBand
        title="Need a sanity check before the next coordination freeze?"
        subtitle="Send milestone dates, we will tell you if the model matches the ambition."
        primaryLabel="See related projects"
        primaryHref="/portfolio"
        secondaryLabel="Get Consultation"
        secondaryHref="/contact"
      />

      <ServiceSection
        id="mep"
        eyebrow="MEP modeling"
        title="Systems that respect ceilings, shafts, and real maintenance access"
        problem="Routed drawings look fine on PDFs but fight each other inside the ceiling."
        solution="Clash-tested routing with installs that crews can prefab confidently."
        outcome="Fewer traps above the corridor, quieter change orders mid-install."
        imageSrc="https://images.unsplash.com/photo-1580584126903-c17d41830450?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Engineer reviewing technical drawings"
        imagePosition="right"
      />

      <CtaBand
        dark
        title="MEP install week is expensive, make it predictable."
        subtitle="We thrive on chaotic stacks; you get plain-language next steps."
        secondaryLabel="View recent work"
        secondaryHref="/portfolio"
      />

      <ServiceSection
        id="vdc"
        eyebrow="VDC & planning"
        title="Show how the site breathes, not just how it renders"
        problem="Owners do not lack ambition; they lack a believable sequencing story."
        solution="Planning views tied to real quantities, durations, and known risks."
        outcome="Confidence in buyout, tighter logistics, clearer decisions when money moves."
        imageSrc="https://images.unsplash.com/photo-1633412802994-ec9c9438c6ed?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Abstract digital wireframe visualization"
      />

      <section className={styles.consultShell} aria-labelledby="consult-title">
        <div className={styles.consultPanel}>
          <p className="pageKicker">Engineering consultancy</p>
          <h2 id="consult-title" className={styles.consultTitle}>
            When you need a third lens on risk
          </h2>
          <p className={styles.consultLead}>
            Bring us in peer-review mode, we stress-test pathways, envelopes, and
            energy assumptions before bids lock.
          </p>
          <div className={styles.consultGrid}>
            <article className={styles.mini}>
              <h3 className={styles.miniTitle}>Structural realism</h3>
              <p className={styles.miniBody}>
                Flag aggressive spans and assumptions that usually surface after
                steel is booked.
              </p>
            </article>
            <article className={styles.mini}>
              <h3 className={styles.miniTitle}>Energy &amp; compliance</h3>
              <p className={styles.miniBody}>
                Translate code language into directional choices, not another slide
                of caveats.
              </p>
            </article>
            <article className={styles.mini}>
              <h3 className={styles.miniTitle}>Historic + retrofit</h3>
              <p className={styles.miniBody}>
                Make existing conditions legible enough for confident scopes and
                allowances.
              </p>
            </article>
          </div>
          <Button href="/contact" variant="primary">
            Book a consultation
          </Button>
        </div>
      </section>

      <RoutePortfolioShowcase routeKey="services" />
    </>
  );
}
