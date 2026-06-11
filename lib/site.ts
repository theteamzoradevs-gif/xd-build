import { isGalleryEnabled } from "@/lib/features/gallery";

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
  bookingsUrl:
    "https://bookings.cloud.microsoft/bookwithme/user/3fe9102e38a248e881e096073b8ad69a%40xdbuild.com/meetingtype/a700ySj_k0mu-rIMFTM__A2?anonymous&ismsaljsauthenabled",
  addressLines: ["7015 Macleod Trail SW, #400", "Calgary, AB, T2H 2K6"],
  logo: "/images/logo/3.png",
  favicon: "/images/logo/2.png",
  ogImage: "/images/logo/3.png",
} as const;

export type NavKey      =
  | "home"
  | "portfolio"
  | "blog"
  | "services"
  | "gallery"
  | "about"
  | "contact";

const ALL_NAV_ITEMS = [
  { key: "home", href: "/", label: "Home" },
  { key: "about", href: "/about", label: "About" },
  { key: "services", href: "/services", label: "Services" },
  { key: "portfolio", href: "/portfolio", label: "Portfolio" },
  { key: "blog", href: "/blog", label: "Blogs" },
  { key: "gallery", href: "/gallery", label: "Gallery" },
  { key: "contact", href: "/contact", label: "Contact Us" },
] as const satisfies ReadonlyArray<{
  key: NavKey;
  href: string;
  label: string;
}>;

export const NAV_ITEMS: ReadonlyArray<{
  key: NavKey;
  href: string;
  label: string;
}> = ALL_NAV_ITEMS.filter(
  (item) => item.key !== "gallery" || isGalleryEnabled(),
);

export const primaryCta = {
  label: "Get in touch",
  href: "/contact",
} as const;

export function whatsappHref(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappE164}?text=${text}`;
}
