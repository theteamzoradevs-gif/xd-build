import type { HomeContent } from "@/types/home";

/** Last-resort defaults when GET /api/home fails (matches former static homepage). */
export const DEFAULT_HOME_FALLBACK: HomeContent = {
  statsEnabled: true,
  hero: {
    /** Empty — avoids shipping the 46MB local MP4 when CMS is unreachable. */
    videoSrc: "",
    videoPoster: "/images/hero-poster.jpg",
    trustBadgeValue: "120+",
  },
  stats: [
    { value: "500+", label: "projects completed", sortOrder: 0 },
    { value: "12M+", label: "sq. ft. designed", sortOrder: 1 },
    { value: "98%", label: "clients satisfied", sortOrder: 2 },
    { value: "15", label: "national awards", sortOrder: 3 },
  ],
  testimonialsSection: {
    eyebrow: "Trusted by industry leaders",
    title: "Social proof from teams who ship in the field",
    subtitle:
      "Clients who measure us on outcomes — not slide decks.",
  },
  testimonials: [
    {
      id: "testimonial-botting",
      logoSrc: "/images/clients/bottling.png",
      logoAlt: "Botting",
      quote:
        "Their professionalism and dedication to customer satisfaction make them an indispensable partner in our projects.",
      authorName: "Tim",
      authorCompany: "Botting",
      sortOrder: 0,
    },
    {
      id: "testimonial-deejay",
      logoSrc: "/images/clients/Dee-Jay-Plumbing-%26-Heating.png",
      logoAlt: "Dee-Jay Plumbing & Heating",
      quote:
        "Their precise scanning technology and detailed BIM models have helped us streamline workflows and make informed decisions.",
      authorName: "Braden",
      authorCompany: "Dee-Jay Plumbing & Heating",
      sortOrder: 1,
    },
    {
      id: "testimonial-seacliff",
      logoSrc: "/images/clients/seacliff-electric.png",
      logoAlt: "Seacliff Electric",
      quote:
        "Their quick delivery of services has exceeded our expectations, ensuring that we stay on track with our timelines.",
      authorName: "Ryan",
      authorCompany: "Seacliff Electric",
      sortOrder: 2,
    },
    {
      id: "testimonial-specialty-air",
      logoSrc: "/images/clients/specialty-air-district-mechanic.png",
      logoAlt: "Specialty Air / District Mechanical",
      quote:
        "We highly commend XD Build for their outstanding support, dedication and efficient service delivery.",
      authorName: "Kyle",
      authorCompany: "Specialty Air / District Mechanical",
      sortOrder: 3,
    },
  ],
};

function sortHomeContent(home: HomeContent): HomeContent {
  return {
    ...home,
    stats: [...home.stats].sort((a, b) => a.sortOrder - b.sortOrder),
    testimonials: [...home.testimonials].sort(
      (a, b) => a.sortOrder - b.sortOrder,
    ),
  };
}

export function getHomeFallback(): HomeContent {
  return sortHomeContent(DEFAULT_HOME_FALLBACK);
}
