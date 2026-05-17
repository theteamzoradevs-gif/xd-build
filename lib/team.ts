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
  "The strength of the team is each individual member. The strength of each member is the team.";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Vinay Levaka",
    credentials: "PMP, LEED AP, EIT",
    title: "Founder and Director",
    bio: "Vinay brings over 12 years of construction industry expertise, with a Master's in Aerospace Engineering. With a global perspective, he has spearheaded projects across Singapore, India, the Middle East, USA, and Canada. His passion for construction and innovation drives him to stay at the forefront of technology and industry trends.",
    imageSrc: "/images/team/vinay-levaka.jpg",
    linkedIn: "https://www.linkedin.com/in/vinay-kumar-levaka/",
    isFounder: true,
  },
  {
    name: "Yugender Elugu",
    title: "Head of Business Development",
    bio: "Yugender is a versatile leader spearheading client acquisition, sales, and marketing initiatives. With a Bachelor's degree in Civil Engineering, he brings a strong foundation in construction to his role. Yugender's expertise spans various areas of the industry, allowing him to navigate complex projects and forge successful partnerships.",
    imageSrc: "/images/team/yugender-elugu.jpg",
  },
  {
    name: "Jyothee Palle",
    title: "BIM Lead",
    bio: "Jyothee brings a wealth of experience and expertise to his role. Starting his career in project management for public projects, Jyothee transitioned into the BIM industry, leveraging his onsite knowledge to excel in the virtual building industry. With 10 years of experience, he drives innovative BIM solutions and ensures operational excellence.",
    imageSrc: "/images/team/jyotheeswar-reddy.jpg",
  },
  {
    name: "Dinesh Makala",
    title: "Onsite Coordinator",
    bio: "Dinesh holds a Master's degree in Construction Management and plays a crucial role in facilitating seamless project execution. Proficient in BIM tools, Dinesh assists site teams with BIM tools, bridging the gap between on-site operations and office processes. His expertise and site interactions ensure efficient coordination and effective communication.",
    imageSrc: "/images/team/dinesh-reddy.jpg",
  },
];
