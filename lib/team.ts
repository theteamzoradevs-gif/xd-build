export type TeamMember = {
  name: string;
  credentials?: string;
  title: string;
  bio: string;
  imageSrc: string;
  linkedIn?: string;
  isFounder?: boolean;
};

export const TEAM_QUOTE =
  "Transforming global insights into local, high-impact innovations.";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Vinay Levaka",
    credentials: "PMP, LEED AP, EIT",
    title: "Founder and Director",
    bio: "Vinay brings over 15 years of construction industry expertise, with a Master's in Aerospace Engineering. With a global perspective, he has spearheaded projects across Singapore, India, the Middle East, USA, and Canada. His passion for construction and innovation drives him to stay at the forefront of technology and industry trends.",
    imageSrc: "/images/team/vinay-levaka.jpg",
    linkedIn: "https://www.linkedin.com/in/vinay-kumar-levaka/",
    isFounder: true,
  },
];

