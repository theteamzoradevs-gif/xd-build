export type ProjectCategory = "All" | "MEP" | "BIM" | "VDC";

export type Project = {
  slug: string;
  title: string;
  location: string;
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

export const PROJECTS: Project[] = [
  {
    slug: "metropolis-tech-center",
    title: "Metropolis Tech Center",
    location: "Chicago, IL",
    categories: ["BIM", "MEP"],
    outcome: "Coordinated MEP in a live campus with zero late-stage reroutes.",
    heroSrc:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad3ab?q=80&w=2048&auto=format&fit=crop",
    heroAlt: "Modern digital solutions company",
    gridSize: "large",
    problem:
      "Tight timelines and overlapping trades made late clashes likely during fit-out.",
    solution:
      "LOD-aware modeling, disciplined clash rituals, and a single coordination hub for architects, engineers, and subs.",
    result:
      "Faster approvals, cleaner install sequences, and a site team that knew what was changing, and why.",
  },
  {
    slug: "quantum-labs-vdc",
    title: "Quantum Labs VDC",
    location: "Austin, TX",
    categories: ["VDC"],
    outcome: "4D-linked model helped shave weeks off a complex phased build.",
    heroSrc:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2048&auto=format&fit=crop",
    heroAlt: "Modern digital solutions company",
    gridSize: "tall",
    problem:
      "Owners needed certainty on phasing, shutdowns, and logistics before committing spend.",
    solution:
      "VDC workflows tied the model to schedule and scope changes, with clear visuals for trade partners.",
    result:
      "Fewer coordination meetings, earlier buy-in from stakeholders, and smoother field execution.",
  },
  {
    slug: "harbor-bridge-infrastructure",
    title: "Harbor Bridge Infrastructure",
    location: "Houston, TX",
    categories: ["MEP"],
    outcome: "Field-ready sheets reduced RFIs during peak install weeks.",
    heroSrc:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2048&auto=format&fit=crop",
    heroAlt: "Modern digital solutions company",
    gridSize: "tall",
    problem:
      "Large infrastructure packages were hard to read in 2D alone, slowing install decisions.",
    solution:
      "Modeled systems with fabrication-friendly detail and issue tracking tied to real locations.",
    result:
      "Install crews spent less time interpreting drawings and more time building.",
  },
  {
    slug: "the-onyx-headquarters",
    title: "The Onyx Headquarters",
    location: "San Francisco, CA",
    categories: ["BIM"],
    outcome: "Executive stakeholders got a clear story before sign-off.",
    heroSrc:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2048&auto=format&fit=crop",
    heroAlt: "Modern digital solutions company",
    gridSize: "large",
    problem:
      "Design iterations were moving faster than the team could communicate impacts to leadership.",
    solution:
      "A coordinated model with clean views and decision-ready packages at each milestone.",
    result:
      "Alignment without noise, approvals moved forward with fewer loops and rework.",
  },
  {
    slug: "global-data-hub",
    title: "Global Data Hub",
    location: "Phoenix, AZ",
    categories: ["MEP", "BIM"],
    outcome: "Cooling paths and cable hierarchy stayed legible under pressure.",
    heroSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2048&auto=format&fit=crop",
    heroAlt: "Modern digital solutions company",
    gridSize: "medium",
    problem:
      "Mission-critical environments demand clarity, there is little room for ambiguous routing.",
    solution:
      "Disciplined coordination standards, aggressive clash closure, and install-ready deliverables.",
    result:
      "Less downtime risk, cleaner turnover, and operators who trust the as-built story.",
  },
  {
    slug: "heritage-health-hub",
    title: "Heritage Health Hub",
    location: "Portland, OR",
    categories: ["BIM"],
    outcome: "Clinical adjacencies protected while MEP stayed maintainable.",
    heroSrc:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2048&auto=format&fit=crop",
    heroAlt: "Modern digital solutions company",
    gridSize: "medium",
    problem:
      "Healthcare projects need code-aware routing without compromising future maintenance access.",
    solution:
      "Model-first coordination with room-by-room intent captured early and protected through CD.",
    result:
      "Smoother inspections, fewer owner-requested changes, and a facility team with clear systems logic.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
