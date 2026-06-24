/** One-line public summaries for portfolio cards (no budget). */
export const PROJECT_CARD_SUMMARY: Record<string, string> = {
  "rockyview-hospital-expansion":
    "Redevelopment of the Rockyview General Hospital Intensive Care Unit, Coronary Care Unit, and Gastrointestinal Clinic.",
  "rgh-chilled-water-system-upgrade":
    "Chilled water system upgrade at Rockyview General Hospital with phased demolition and coordinated mechanical installation.",
  "data-centre-facility":
    "Chilled water system upgrade to serve unit expansion within a constrained Calgary data centre mechanical room.",
  "cole-la-valle-pemberton-school-project":
    "Contemporary French-language school facility in Pemberton, British Columbia.",
  "rangeview-high-school-development":
    "New high school campus in Chestermere with classrooms, labs, and collaborative learning spaces.",
  "uofc-veterinary-learning-expansion":
    "Expansion of the University of Calgary's Veterinary Medicine facilities at the Spy Hill campus.",
  "telus-sky-tower-renovation-modernization":
    "Building systems upgrade and tenant-space modernization at Calgary's Telus Sky tower.",
  "bethany-care-hillhurst-senior-living-redevelopment":
    "Modern senior living facility redevelopment in Calgary's Hillhurst community.",
  "glenbow-museum-revitalization":
    "Renovation and modernization of the Glenbow Museum into the JR Shaw Centre for Arts & Culture.",
  "calgary-zoo-polar-bear-habitat-expansion":
    "Polar bear habitat expansion at the Calgary Zoo with specialized environmental and animal-care systems.",
};

export function getProjectCardSummary(slug: string, fallback: string): string {
  return PROJECT_CARD_SUMMARY[slug] ?? fallback;
}
