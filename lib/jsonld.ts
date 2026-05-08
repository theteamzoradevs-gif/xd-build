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
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94103",
      addressCountry: "US",
    },
    areaServed: "US",
    description: siteConfig.tagline,
  };
}
