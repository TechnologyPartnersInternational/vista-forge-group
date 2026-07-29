import {
  SITE_URL,
  SITE_NAME,
  SITE_SHORT_NAME,
  DEFAULT_OG_IMAGE,
  CONTACT,
  SOCIAL_PROFILES,
  FOUNDING_YEAR,
} from './seo.config';

// ─── Generic JSON-LD renderer ────────────────────────────────────────────────

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Renders a <script type="application/ld+json"> tag with the given structured data.
 */
export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

// ─── Schema Generators ───────────────────────────────────────────────────────

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    alternateName: SITE_SHORT_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.jpg`,
    foundingDate: FOUNDING_YEAR,
    description:
      'Leading environmental consultancy and engineering company in Nigeria providing EIA, laboratory, waste management, engineering, digital solutions, and training services since 1992.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.locality,
      addressRegion: CONTACT.address.region,
      addressCountry: CONTACT.address.country,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACT.phone,
        contactType: 'customer service',
        email: CONTACT.email,
        areaServed: ['NG', 'GN', 'GH'],
        availableLanguage: ['English'],
      },
    ],
    sameAs: [SOCIAL_PROFILES.linkedin, SOCIAL_PROFILES.twitter],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 200,
    },
    iso6523Code: 'ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, ISO/IEC 17025:2017',
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.locality,
      addressRegion: CONTACT.address.region,
      addressCountry: CONTACT.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.6018,
      longitude: 3.3515,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    priceRange: '$$$$',
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Environmental consultancy, laboratory analysis, waste management, engineering, and professional training services in Nigeria.',
    serviceType: [
      'Environmental Consultancy',
      'Environmental Impact Assessment',
      'Laboratory Analysis',
      'Waste Management',
      'Engineering Design',
      'Asset Integrity Management',
      'HSE Training',
      'ESG Consulting',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Environmental & Engineering Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Environmental Impact Assessment' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laboratory Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Waste Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Engineering & EPC' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Solutions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Professional Training' } },
      ],
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: SITE_SHORT_NAME,
    url: SITE_URL,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}

export function webPageSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: { '@type': 'WebSite', url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    serviceType: name,
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function personSchema(person: {
  name: string;
  title: string;
  description: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.title,
    description: person.description,
    image: person.image,
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
