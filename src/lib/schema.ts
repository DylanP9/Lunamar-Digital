/**
 * JSON-LD schema builders for Lunamar Digital.
 *
 * Each function returns a plain object ready to be serialised into a
 * <script type="application/ld+json"> tag via the JsonLd component.
 *
 * Spec references:
 *   - https://schema.org/LocalBusiness
 *   - https://schema.org/ProfessionalService
 *   - https://schema.org/Service
 *   - https://schema.org/WebSite
 */

import { siteConfig } from "@/data/siteConfig";
import type { Service } from "@/types/services";

const PROVIDER_REF = {
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
} as const;

// ---------------------------------------------------------------------------
// LocalBusiness + ProfessionalService
// ---------------------------------------------------------------------------

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/og.svg`,
    },
    image: `${siteConfig.url}/og.svg`,
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Credit Card, Bank Transfer, Direct Debit",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceArea: {
      "@type": "Country",
      name: "United Kingdom",
    },
    knowsAbout: [
      "Web Design",
      "Web Development",
      "Search Engine Optimisation",
      "Local SEO",
      "Social Media Management",
      "Digital Marketing",
      "Conversion Rate Optimisation",
    ],
    founder: {
      "@type": "Person",
      name: "Dylan Polland",
      jobTitle: "Founder",
      sameAs: siteConfig.socials.find((s) => s.label === "LinkedIn")?.href,
    },
    sameAs: siteConfig.socials.map((s) => s.href),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services for Small Businesses",
      url: `${siteConfig.url}/services`,
    },
  };
}

// ---------------------------------------------------------------------------
// WebSite — enables Google Sitelinks Search Box eligibility
// ---------------------------------------------------------------------------

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#business` },
    inLanguage: "en-GB",
  };
}

// ---------------------------------------------------------------------------
// Service — one per service from services.ts
// ---------------------------------------------------------------------------

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services#${service.id}`,
    name: service.title,
    description: service.detail,
    url: `${siteConfig.url}/services#${service.id}`,
    provider: PROVIDER_REF,
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceOutput: service.points.map((point) => ({
      "@type": "Thing",
      name: point,
    })),
  };
}

// ---------------------------------------------------------------------------
// ItemList wrapper — groups all services for the /services page
// ---------------------------------------------------------------------------

export function buildServiceListSchema(services: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/services#list`,
    name: "Digital Services for Small Businesses",
    description:
      "Website design, SEO foundations, social media management and digital marketing for UK small businesses.",
    url: `${siteConfig.url}/services`,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: buildServiceSchema(service),
    })),
  };
}
