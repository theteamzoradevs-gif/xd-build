export type HomeServiceItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

export const HOME_SERVICES_SUBQUOTE =
  "The best software in the world won't help you if you don't know how to use it.";

export const HOME_SERVICES: HomeServiceItem[] = [
  {
    id: "bim-advisory",
    title: "BIM Advisory",
    description:
      "Pre-bid, post bid, document review, execution plans, tool and workflow advice.",
    imageSrc: "/images/services/1.png",
  },
  {
    id: "bim-solutions",
    title: "BIM Solutions",
    description:
      "MEP modeling, coordination, clash resolution, 2D detailing, 4D scheduling, as-builts.",
    imageSrc: "/images/services/BIM.png",
  },
  {
    id: "renovation-design",
    title: "Renovation Design",
    description:
      "Renovating complex mechanical systems, demolition planning, phasing, BIM to prefabrication.",
    imageSrc: "/images/services/mechanical.jpeg",
  },
  {
    id: "prefab-design",
    title: "Pre-Fab Design",
    description:
      "Spool & duct fabrication, shop automation and integration, modular construction, pump skids.",
    imageSrc: "/images/services/Prefab.jpeg",
  },
  {
    id: "laser-scanning",
    title: "Laser Scanning",
    description:
      "Precise data and as-built capture, accurate modeling, efficient project execution.",
    imageSrc: "/images/services/laser.jpeg",
  },
  {
    id: "ar-implementation",
    title: "AR Implementation",
    description:
      "Immersive visualization, enhanced project communication, model verification with virtual overlays.",
    imageSrc: "/images/services/6.png",
  },
];
