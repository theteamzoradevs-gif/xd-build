export const SERVICES_INTRO =
  "Our services span the full construction lifecycle, from initial coordination through to fabrication-ready deliverables and on-site support.";

export type HeroFeaturedService = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

/** Four services rotated in the home hero carousel (matches /services content). */
export const HERO_FEATURED_SERVICES: readonly HeroFeaturedService[] = [
  {
    id: "bim-solutions",
    title: "Models built for coordination and the field",
    description:
      "MEP modeling, coordination, and clash resolution. 2D detailing, 4D scheduling, and as-built documentation. We build detailed, fabrication-ready models that align trade contractors and reduce costly rework on site.",
    imageSrc: "/images/services/BIM.png",
    imageAlt: "BIM coordination and MEP modeling",
  },
  {
    id: "prefab-design",
    title: "Spools, modules, and shop-ready detail",
    description:
      "Spool and duct fabrication, shop automation and integration, modular construction, and pump skids. We break models down to individual spools and modules, detailed to shop-ready standard — shifting as much work offsite as possible to reduce labour costs and on-site risk.",
    imageSrc: "/images/services/Prefab.jpeg",
    imageAlt: "Prefabrication and modular construction",
  },
  {
    id: "laser-scanning",
    title: "As-built capture you can trust in the model",
    description:
      "Precise as-built capture using our own in-house laser scanners. We produce accurate point cloud data and coordinate new services against existing conditions, reducing errors and eliminating surprises during installation.",
    imageSrc: "/images/services/laser.jpeg",
    imageAlt: "Laser scanning and point cloud coordination",
  },
  {
    id: "renovation-design",
    title: "Phased work in active buildings",
    description:
      "Complex mechanical system renovations, demolition planning, phasing, and BIM-to-prefabrication workflows. We plan and coordinate renovations in active facilities, ensuring existing operations are protected while new systems are introduced efficiently.",
    imageSrc: "/images/services/mechanical.jpeg",
    imageAlt: "Mechanical renovation and phased building work",
  },
] as const;

export const SERVICES = [
  {
    id: "bim-solutions",
    title: "BIM Solutions",
    body: "MEP modeling, coordination, and clash resolution. 2D detailing, 4D scheduling, and as-built documentation. We build detailed, fabrication-ready models that align trade contractors and reduce costly rework on site.",
  },
  {
    id: "pre-fab-design",
    title: "Pre-Fab Design",
    body: "Spool and duct fabrication, shop automation and integration, modular construction, and pump skids. We break models down to individual spools and modules, detailed to shop-ready standard , shifting as much work offsite as possible to reduce labour costs and on-site risk.",
  },
  {
    id: "laser-scanning",
    title: "Laser Scanning",
    body: "Precise as-built capture using our own in-house laser scanners. We produce accurate point cloud data and coordinate new services against existing conditions, reducing errors and eliminating surprises during installation.",
  },
  {
    id: "renovation-design",
    title: "Renovation Design",
    body: "Complex mechanical system renovations, demolition planning, phasing, and BIM-to-prefabrication workflows. We plan and coordinate renovations in active facilities, ensuring existing operations are protected while new systems are introduced efficiently.",
  },
] as const;
