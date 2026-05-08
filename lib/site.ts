export const siteConfig = {
  name: "XD Build",
  tagline:
    "Engineering-forward BIM, MEP, and VDC for teams that want fewer surprises on site.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://xdbuild.com",
  email: "info@xdbuild.com",
  phoneDisplay: "+1 403-888-2657",
  phoneE164: "+14038882657",
  whatsappE164: "14038882657",
  addressLines: [
    "#400, 7015 Macleod Trail SW",
    "Calgary, AB T2H 2K6",
  ],
  ogImage: "/images/xd-logo.png",
} as const;

export type NavKey =
  | "home"
  | "portfolio"
  | "blog"
  | "services"
  | "why-us"
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
  { key: "why-us", href: "/why-us", label: "Why Us" },
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
