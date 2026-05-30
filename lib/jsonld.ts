import { siteConfig } from "@/lib/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLines[0],
      addressLocality: "Calgary",
      addressRegion: "AB",
      postalCode: "T3S 0P6",
      addressCountry: "CA",
    },
    areaServed: "CA",
    description: siteConfig.tagline,
    sameAs: [siteConfig.linkedInCompany],
  };
}
