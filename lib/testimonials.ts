export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  logoSrc?: string;
  quoteHighlights?: readonly string[];
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Their professionalism and dedication to customer satisfaction make them an indispensable partner in our projects.",
    name: "Tim",
    company: "Botting",
    logoSrc: "/images/clients/bottling.png",
    quoteHighlights: ["professionalism", "indispensable partner"],
  },
  {
    quote:
      "Their precise scanning technology and detailed BIM models have helped us streamline workflows and make informed decisions.",
    name: "Braden",
    company: "Dee-Jay Plumbing & Heating",
    logoSrc: "/images/clients/Dee-Jay-Plumbing-%26-Heating.png",
    quoteHighlights: ["scanning technology", "informed decisions"],
  },
  {
    quote:
      "Their quick delivery of services has exceeded our expectations, ensuring that we stay on track with our timelines.",
    name: "Ryan",
    company: "Seacliff Electric",
    logoSrc: "/images/clients/seacliff-electric.png",
    quoteHighlights: ["exceeded our expectations", "on track"],
  },
  {
    quote:
      "We highly commend XD Build for their outstanding support, dedication and efficient service delivery.",
    name: "Kyle",
    company: "Specialty Air / District Mechanical",
    logoSrc: "/images/clients/specialty-air-district-mechanic.png",
    quoteHighlights: ["outstanding support", "efficient service delivery"],
  },
];
