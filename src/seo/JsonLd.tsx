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
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [SITE_SHORT_NAME, 'TPI', 'Technology Partners International Nigeria Limited', 'TPI Group'],
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.jpg`,
    foundingDate: FOUNDING_YEAR,
    description:
      'Technology Partners International (TPI) is Nigeria\'s leading environmental consultancy and engineering company. Established in 1992, TPI provides ISO-certified environmental impact assessment (EIA), environmental compliance monitoring, laboratory testing, waste management, engineering, digital solutions, and professional training services across Nigeria and West Africa.',
    slogan: 'Building Africa\'s Technical Capacity Since 1992',
    knowsAbout: [
      'Environmental Impact Assessment',
      'Environmental Consultancy',
      'Environmental Compliance Monitoring',
      'Environmental Site Assessment',
      'Laboratory Testing and Analysis',
      'Waste Management',
      'Hazardous Waste Management',
      'Engineering Design',
      'Asset Integrity Management',
      'Air Quality Monitoring',
      'Water Quality Testing',
      'Soil Analysis',
      'GIS Mapping',
      'Remediation Services',
      'ESG Consulting',
      'HSE Training',
      'Climate Change and Sustainability',
      'Oil Spill Remediation',
      'Geophysical Services',
      'Hydrological Services',
    ],
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
    areaServed: [
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'Country', name: 'Guinea' },
      { '@type': 'Country', name: 'Ghana' },
      { '@type': 'GeoShape', name: 'West Africa' },
    ],
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
    '@id': `${SITE_URL}/#professionalservice`,
    name: SITE_NAME,
    alternateName: [SITE_SHORT_NAME, 'TPI'],
    url: SITE_URL,
    description:
      'Nigeria\'s leading environmental consultancy company providing environmental impact assessment (EIA), laboratory analysis, waste management, engineering, and professional training services since 1992.',
    serviceType: [
      'Environmental Consultancy',
      'Environmental Impact Assessment',
      'Environmental Impact Assessment (EIA)',
      'Environmental Compliance Monitoring',
      'Environmental Site Assessment',
      'Environmental Audit',
      'Laboratory Analysis',
      'Water Quality Testing',
      'Soil Analysis',
      'Waste Management',
      'Hazardous Waste Management',
      'Engineering Design',
      'Asset Integrity Management',
      'HSE Training',
      'ESG Consulting',
      'Air Quality Monitoring',
      'Remediation Services',
      'GIS Mapping',
      'Geophysical Services',
      'Digital Environmental Solutions',
    ],
    areaServed: [
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'Country', name: 'Guinea' },
      { '@type': 'Country', name: 'Ghana' },
      { '@type': 'GeoShape', name: 'West Africa' },
    ],
    providerMobility: 'dynamic',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Environmental & Engineering Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Environmental Impact Assessment (EIA)', description: 'Comprehensive EIA, ESHIA, and environmental evaluation studies for regulatory compliance in Nigeria.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Environmental Compliance Monitoring', description: 'Routine environmental monitoring of air, water, and soil quality to meet Nigerian regulatory standards.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Environmental Laboratory Services', description: 'ISO 17025 accredited laboratory for water, soil, air testing, crude oil assays, and eco-toxicity studies.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Waste Management Services', description: 'Integrated solid waste management, incineration, thermal desorption, and hazardous waste disposal.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Engineering & EPC Services', description: 'Multidisciplinary engineering design, procurement, construction management, and asset integrity.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Environmental Solutions', description: 'IoT monitoring, environmental data management, and automated compliance reporting platforms.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Professional Environmental Training', description: 'Accredited ESG, HSE, and environmental laboratory training programs in Nigeria.' } },
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
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: [
      { '@type': 'Country', name: 'Nigeria' },
      { '@type': 'GeoShape', name: 'West Africa' },
    ],
    providerMobility: 'dynamic',
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
