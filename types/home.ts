export type HomeStat = {
  value: string;
  label: string;
  sortOrder: number;
};

export type HomeTestimonial = {
  id: string;
  logoSrc: string;
  logoAlt: string;
  quote: string;
  authorName: string;
  authorCompany: string;
  sortOrder: number;
};

export type HomeHero = {
  videoSrc: string;
  videoPoster: string;
  trustBadgeValue: string;
};

export type HomeTestimonialsSection = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type HomeContent = {
  hero: HomeHero;
  stats: HomeStat[];
  testimonialsSection: HomeTestimonialsSection;
  testimonials: HomeTestimonial[];
};
