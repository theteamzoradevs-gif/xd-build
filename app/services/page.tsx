import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import styles from "./services.module.css";
import { CtaBand } from "@/sections/home/CtaBand";
import { RoutePortfolioShowcase } from "@/sections/portfolio/RoutePortfolioShowcase";
import { ServiceSection } from "@/sections/services/ServiceSection";
import { WORK_WITH_US_CTA } from "@/lib/workWithUsCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "BIM solutions, pre-fab design, laser scanning, and renovation design across the construction lifecycle.",
};

export default function ServicesPage() {
  return (
    <>
      <Section denseTop denseBottom aria-labelledby="services-title" className={styles.heroHeader}>
        <p className="pageKicker">Services</p>
        <h1 id="services-title" className="pageTitle">
          Full-lifecycle digital delivery
        </h1>
        <p className="pageLead">
          Our services span the full construction lifecycle, from initial coordination
          through to fabrication-ready deliverables and on-site support.
        </p>
      </Section>

      <ServiceSection
        id="bim-solutions"
        eyebrow="BIM solutions"
        title="Models built for coordination and the field"
        problem=""
        solution=""
        outcome=""
        summary="MEP modeling, coordination, and clash resolution. 2D detailing, 4D scheduling, and as-built documentation. We build detailed, fabrication-ready models that align trade contractors and reduce costly rework on site."
        imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Construction team coordinating BIM on site"
      />

      <ServiceSection
        id="prefab-design"
        eyebrow="Pre-fab design"
        title="Spools, modules, and shop-ready detail"
        problem=""
        solution=""
        outcome=""
        summary="Spool and duct fabrication, shop automation and integration, modular construction, and pump skids. We break models down to individual spools and modules, detailed to shop-ready standard — shifting as much work offsite as possible to reduce labour costs and on-site risk."
        imageSrc="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Prefabrication and modular construction"
        imagePosition="right"
      />

      <CtaBand
        title="Planning a coordination-intensive package?"
        subtitle="Send your milestone and discipline mix — we’ll recommend the fastest path to a fabrication-ready model."
        primaryLabel="View portfolio"
        primaryHref="/portfolio"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />

      <ServiceSection
        id="laser-scanning"
        eyebrow="Laser scanning"
        title="As-built capture you can trust in the model"
        problem=""
        solution=""
        outcome=""
        summary="Precise as-built capture using our own in-house laser scanners. We produce accurate point cloud data and coordinate new services against existing conditions, reducing errors and eliminating surprises during installation."
        imageSrc="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Laser scanning and point cloud coordination"
      />

      <ServiceSection
        id="renovation-design"
        eyebrow="Renovation design"
        title="Phased work in active buildings"
        problem=""
        solution=""
        outcome=""
        summary="Complex mechanical system renovations, demolition planning, phasing, and BIM-to-prefabrication workflows. We plan and coordinate renovations in active facilities, ensuring existing operations are protected while new systems are introduced efficiently."
        imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1800&auto=format&fit=crop"
        imageAlt="Healthcare and institutional renovation coordination"
        imagePosition="right"
      />

      <RoutePortfolioShowcase routeKey="services" />

      <CtaBand dark {...WORK_WITH_US_CTA} />
    </>
  );
}
