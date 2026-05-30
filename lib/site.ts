export const siteConfig = {
  name: "XD Build",
  tagline:
    "Calgary-based Digital Delivery Partner specialising in BIM and VDC solutions for the construction industry.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://xdbuild.com",
  email: "info@xdbuild.com",
  phoneDisplay: "403-888-2657",
  phoneE164: "+14038882657",
  whatsappE164: "14038882657",
  linkedInCompany: "https://www.linkedin.com/company/xdbuild",
  addressLines: ["35 Bartlett Crescent SE", "Calgary, AB T3S 0P6"],
  ogImage: "/images/logo/2.png",
} as const;

export type NavKey      =
  | "home"
  | "portfolio"
  | "blog"
  | "services"
  | "gallery"
  | "about"
  | "contact";

export const NAV_ITEMS: ReadonlyArray<{
  key: NavKey;
  href: string;
  label: string;
}> = [
  { key: "home", href: "/", label: "Home" },
  { key: "portfolio", href: "/portfolio", label: "Portfolio" },
  { key: "blog", href: "/blog", label: "Blog" },
  { key: "services", href: "/services", label: "Services" },
  { key: "gallery", href: "/gallery", label: "Gallery" },
  { key: "about", href: "/about", label: "About" },
  { key: "contact", href: "/contact", label: "Contact" },
];

export const primaryCta = {
  label: "Get in touch",
  href: "/contact",
} as const;

export function whatsappHref(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappE164}?text=${text}`;
}
