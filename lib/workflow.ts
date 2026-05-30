export type WorkflowStage = {
  id: string;
  label: string;
  variant: "accent" | "muted" | "dark";
  bullets: readonly string[];
  tags: string;
};

export const WORKFLOW_QUOTE =
  "Efficiency is doing things right; effectiveness is doing the right things.";

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: "planning",
    label: "Planning",
    variant: "accent",
    bullets: [
      "Tender documents are reviewed",
      "Owner, contractor, and client requirements are identified",
      "Construction schedule is reviewed",
    ],
    tags: "Scope, milestones, BXP",
  },
  {
    id: "initiation",
    label: "Initiation",
    variant: "muted",
    bullets: [
      "Modeling efforts focus on clashes with structure and clearance issues",
      "Critical areas with constricted services are identified and service arrangement is decided",
    ],
    tags: "Sleeving, equipment, clearances",
  },
  {
    id: "coordination",
    label: "Co-ordination",
    variant: "accent",
    bullets: [
      "Clearances for fire dampers, valves, VAVs, and equipment are reviewed",
      "Starting with mains, service runs are coordinated, including hangers and supports",
    ],
    tags: "Clash resolution, layouts, material order",
  },
  {
    id: "execution",
    label: "Execution",
    variant: "dark",
    bullets: [
      "Prefabrication logistics and lead times are analyzed",
      "Model is broken down to spools or modules and detailed for shop",
      "Installation progress is tracked to identify deviation from model",
    ],
    tags: "Prefabrication, detailing, as-built",
  },
];

export const WORKFLOW_NARRATIVE_LEFT = [
  "XD Build recognizes that often, construction schedules may not fully align with the specific needs and work processes of trade contractors.",
  "Therefore, it is essential to meticulously review tender documents, identify owner, contractor, and client requirements, and thoroughly assess the construction schedule.",
  "Moreover, we understand that successful BIM processes and service coordination require constant collaboration and site review.",
] as const;

export const WORKFLOW_NARRATIVE_RIGHT = [
  "To bridge the gap between office and site, our onsite representation ensures seamless communication and coordination throughout the project lifecycle.",
  "This collaborative approach allows us to proactively address clashes with structure, clearance issues, and critical service arrangements, ensuring efficient project execution and delivery.",
  "XD Build's streamlined prefabrication process and meticulous onsite progress tracking, supported by advanced laser scanning and AR model verification, help minimize errors during construction.",
] as const;
