export type ProjectCategory = "All" | "MEP" | "BIM" | "VDC";

export type Project = {
  slug: string;
  title: string;
  location: string;
  budget?: string;
  scope: string;
  categories: Exclude<ProjectCategory, "All">[];
  outcome: string;
  heroSrc: string;
  heroBlurDataURL?: string;
  heroAlt: string;
  gridSize?: "large" | "medium" | "tall";
  problem: string;
  solution: string;
  result: string;
};

export type ProjectPlaceholder = {
  id: string;
  title: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "uofc-veterinary-learning-expansion",
    title: "UofC Veterinary Learning Expansion",
    location: "Calgary, AB",
    budget: "$68.5M (provincial capital funding)",
    scope:
      "Backed with $68.5 million in provincial capital funding, the new facility provides flexible active classrooms, student gathering areas, and wellness spaces, while doubling annual veterinary medicine training seats from 50 to 100. Scope includes design and coordination of all mechanical and electrical contracting work across this three-floor building.",
    categories: ["BIM", "MEP"],
    outcome:
      "Academic expansion with fully coordinated MEP — doubling training capacity across three floors.",
    heroSrc:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2048&auto=format&fit=crop",
    heroAlt: "University of Calgary veterinary learning expansion",
    gridSize: "large",
    problem:
      "A new teaching facility needed mechanical and electrical systems coordinated across three floors while supporting flexible classrooms, wellness programs, and a doubling of training seats.",
    solution:
      "XD Build led design and coordination of all mechanical and electrical contracting scope with disciplined BIM workflows and clear coordination cadence.",
    result:
      "Flexible classrooms and wellness spaces supported by installation-ready MEP coordination, aligned to provincial funding and academic milestones.",
  },
  {
    slug: "glenbow-museum-revitalization",
    title: "Glenbow Museum Revitalization",
    location: "Calgary, AB",
    budget: "$120M (estimated)",
    scope:
      "With an estimated $120 million budget, the Glenbow Museum was renovated and modernised into a world-class gallery space. All eight floors were renewed, with a new 13,000 sq ft rooftop, theatre, shop, and restaurant to create distinct experiences throughout the building and encourage return visits. BIM scope included complete mechanical renovation design support and prefabrication.",
    categories: ["BIM", "MEP"],
    outcome:
      "Major cultural renewal — eight floors, new rooftop, and hospitality program with mechanical prefabrication support.",
    heroSrc:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2048&auto=format&fit=crop",
    heroAlt: "Glenbow Museum revitalization, Calgary",
    gridSize: "large",
    problem:
      "A museum-wide renewal required mechanical systems to be coordinated across eight floors, a new rooftop, and multiple public venues without compromising the architectural vision.",
    solution:
      "XD Build delivered complete mechanical renovation design support, prefabrication strategy, and BIM coordination across the programme.",
    result:
      "A modernised gallery experience with coordinated mechanical scopes ready for phased delivery and field installation.",
  },
  {
    slug: "rgh-chilled-water-system-upgrade",
    title: "RGH Chilled Water System Upgrade",
    location: "Calgary, AB",
    scope:
      "As part of a chilled water system upgrade, the system was modelled with two chillers, a heat exchanger, three pumps, and a cooling tower with a 32\" pump header, with the majority of piping at 16\". The facility was laser scanned; phased demolition was planned and new services coordinated with existing heating and secondary cooling. Spool drawings helped the mechanical contractor shift roughly 90% of welding offsite — improving site safety and keeping the project on schedule.",
    categories: ["MEP", "BIM"],
    outcome:
      "Hospital plant upgrade with laser-scanned phasing, coordinated tie-ins, and fabrication-first spool packages.",
    heroSrc:
      "https://images.unsplash.com/photo-1581093196277-9f608bb3fdbb?q=80&w=2048&auto=format&fit=crop",
    heroAlt: "RGH chilled water system upgrade",
    gridSize: "tall",
    problem:
      "A live hospital environment needed a major chilled water upgrade with phased demolition, tight coordination to existing systems, and minimal disruption.",
    solution:
      "Laser scanning informed phased demolition; detailed modelling coordinated new equipment and mains; spool drawings shifted most welding to the shop.",
    result:
      "Roughly 90% of welding moved offsite with improved safety and schedule performance.",
  },
  {
    slug: "data-centre-facility-alberta",
    title: "Data Centre Facility",
    location: "Alberta",
    scope:
      "The data centre’s chilled water system was upgraded to serve unit expansion. The challenge was fitting the new system into the existing mechanical room. XD Build laser scanned to capture structure and conduits, modelled in BIM against the point cloud, and coordinated with existing conditions. Approximately 600 spool drawings supported offsite fabrication, reducing onsite labour hours by about 80%.",
    categories: ["MEP", "BIM"],
    outcome:
      "Dense existing plant — point cloud coordination and ~600 spools cutting onsite labour dramatically.",
    heroSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2048&auto=format&fit=crop",
    heroAlt: "Data centre mechanical upgrade, Alberta",
    gridSize: "medium",
    problem:
      "Expanding chilled water capacity inside a constrained mechanical room with congested existing structure and conduits.",
    solution:
      "Laser scanning, BIM coordination to the point cloud, and fabrication-level spool documentation at scale.",
    result:
      "Approximately 600 spool drawings enabled offsite build-out and an estimated 80% reduction in onsite labour hours.",
  },
  {
    slug: "rockyview-hospital-expansion",
    title: "Rockyview Hospital Expansion",
    location: "Calgary, AB",
    budget: "$73M (estimated)",
    scope:
      "With an estimated $73M budget, this project redevelops Rockyview General Hospital’s Intensive Care Unit, Coronary Care Unit, and Gastrointestinal Clinic. BIM scope included modelling and coordinating mechanical services and resolving major issues before installation. Laser scanning captured as-built structure and sanitary services, coordinating work to avoid shutdowns in the emergency unit above the renovation space.",
    categories: ["BIM", "MEP"],
    outcome:
      "Critical-care redevelopment beneath an active emergency unit — scanning, coordination, and clash resolution before install.",
    heroSrc:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2048&auto=format&fit=crop",
    heroAlt: "Rockyview General Hospital expansion",
    gridSize: "tall",
    problem:
      "Renovation beneath an operational emergency department demanded accurate as-builts and early issue resolution.",
    solution:
      "Full mechanical modelling and coordination with laser scanning of structure and sanitary services.",
    result:
      "Major clashes resolved before installation, protecting the emergency unit above from unplanned outages.",
  },
  {
    slug: "camrose-provincial-building-renovation",
    title: "Camrose Provincial Building Renovation",
    location: "Camrose, AB",
    scope:
      "Renovation of a municipal facility in Camrose, Alberta, including heating and cooling upgrades. BIM scope included laser scanning for as-built conditions, demolition planning, coordination of new services with existing systems, and modelling with a target to prefabricate at least 40% of piping and ducting offsite to reduce onsite labour.",
    categories: ["BIM", "MEP"],
    outcome:
      "Municipal renewal with scan-to-BIM coordination and a strong prefabrication target for ducts and piping.",
    heroSrc:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2048&auto=format&fit=crop",
    heroAlt: "Camrose Provincial Building renovation",
    gridSize: "medium",
    problem:
      "An occupied civic building needed HVAC upgrades with reliable as-builts and a prefabrication-friendly delivery strategy.",
    solution:
      "Laser scanning, demolition and coordination planning, and modelling geared to shop fabrication.",
    result:
      "Minimum 40% piping and ducting targeted offsite — reducing field labour and installation risk.",
  },
];

export const PROJECT_PLACEHOLDERS: ProjectPlaceholder[] = [];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

export function getFeaturedProjects(slugs: readonly string[]): Project[] {
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined);
}
