// ─── Central SEO Configuration ───────────────────────────────────────────────
// Single source of truth for all SEO metadata across the TPI website.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_URL = 'https://www.tpigrp.com';
export const SITE_NAME = 'Technology Partners International';
export const SITE_SHORT_NAME = 'TPI Nigeria';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const THEME_COLOR = '#0f766e'; // teal-700 matching TPI brand primary
export const AUTHOR = 'Technology Partners International (TPI)';
export const FOUNDING_YEAR = '1992';
export const GA4_MEASUREMENT_ID = 'G-Q3TKLPXBSZ';

// ─── Social Profiles ────────────────────────────────────────────────────────
export const SOCIAL_PROFILES = {
  linkedin: 'https://www.linkedin.com/company/technology-partners-international-nigeria-limited/',
  twitter: 'https://twitter.com/TPI_Nigeria',
};

// ─── Contact Info ───────────────────────────────────────────────────────────
export const CONTACT = {
  phone: '+234 8033030049',
  email: 'info@tpinigeria.com',
  address: {
    street: '52/54 Oluwaleyimu Street, Off Toyin Street',
    locality: 'Ikeja',
    region: 'Lagos State',
    postalCode: '',
    country: 'NG',
    full: '52/54 Oluwaleyimu Street, Off Toyin Street, Ikeja, Lagos State, Nigeria',
  },
};

// ─── Per-Page SEO Metadata ──────────────────────────────────────────────────
// Each entry contains optimised title, description, and targeted keywords.

export interface PageSEOData {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogType?: string;
}

export const PAGE_SEO: Record<string, PageSEOData> = {
  home: {
    title: 'Environmental Consultancy & Engineering in Nigeria & Africa | TPI',
    description:
      'Technology Partners International (TPI): environmental consultancy and engineering in Nigeria and Africa since 1992. EIA, ISO 17025 laboratory, waste management.',
    keywords:
      'environmental consultancy companies in Nigeria, environmental impact assessment companies in Nigeria, EIA consultant Nigeria, environmental consulting firms Lagos, environmental management company Nigeria, top environmental companies in Nigeria, environmental engineering Nigeria, environmental monitoring company Nigeria, laboratory services Nigeria, waste management company Nigeria, ISO certified environmental firm Nigeria, environmental compliance Nigeria, TPI Nigeria, environmental consultancy Lagos, environmental services Nigeria',
    canonicalPath: '/',
    ogType: 'website',
  },

  company: {
    title: 'About TPI | Environmental Consultancy in Nigeria Since 1992',
    description:
      'For over 30 years, Technology Partners International has delivered environmental consultancy, engineering and laboratory services across Nigeria and Africa.',
    keywords:
      'about TPI Nigeria, environmental consultancy company Nigeria, ISO certified environmental firm Nigeria, environmental experts Nigeria, TPI leadership team, leading environmental company Nigeria, top environmental consulting firms Nigeria, environmental engineering company Lagos',
    canonicalPath: '/company',
  },

  whatWeDo: {
    title: 'Environmental Consulting Services in Nigeria & Africa | TPI',
    description:
      'EIA and compliance, an ISO 17025 laboratory, waste management, engineering, digital solutions and HSE training: integrated environmental services across Africa.',
    keywords:
      'environmental consultancy services Nigeria, environmental services Nigeria, environmental consulting firms Nigeria, waste management services Nigeria, laboratory services Nigeria, engineering services Nigeria, HSE training Nigeria, environmental management services, EIA services Nigeria, top environmental companies Nigeria',
    canonicalPath: '/what-we-do',
  },

  environment: {
    title: 'Environmental Impact Assessment (EIA) Company in Nigeria | TPI',
    description:
      'EIA, ESHIA, compliance monitoring, site assessment, remediation and GIS services from TPI, an environmental consultancy trusted in Nigeria and Africa since 1992.',
    keywords:
      'environmental impact assessment companies in Nigeria, EIA companies Nigeria, environmental impact assessment Nigeria, EIA consultant Nigeria, environmental compliance monitoring Nigeria, environmental audit Nigeria, oil spill remediation Nigeria, air quality monitoring Nigeria, environmental consultancy companies in Nigeria, ESHIA Nigeria, environmental site assessment Nigeria, environmental management company Nigeria',
    canonicalPath: '/what-we-do/environment',
  },

  laboratory: {
    title: 'Environmental Testing Laboratory in Nigeria | ISO 17025 | TPI',
    description:
      "One of Nigeria's largest environmental laboratories: ISO 17025 accredited water, soil, air, crude oil and eco-toxicity testing, with mobile labs across Africa.",
    keywords:
      'environmental laboratory Nigeria, environmental testing laboratory Lagos, water testing laboratory Nigeria, soil analysis Nigeria, ISO 17025 lab Nigeria, crude oil assay Nigeria, eco-toxicity testing, mobile laboratory Nigeria, accredited laboratory Nigeria, water quality testing Nigeria',
    canonicalPath: '/what-we-do/laboratory',
  },

  wasteManagement: {
    title: 'Waste Management Company in Nigeria | Hazardous Waste | TPI',
    description:
      'Hazardous and solid waste management in Nigeria: incineration, thermal desorption, integrated waste systems and policy compliance for industry across Africa.',
    keywords:
      'waste management companies in Nigeria, waste management Nigeria, hazardous waste management Nigeria, solid waste management Nigeria, incineration services Nigeria, thermal desorption Nigeria, waste policy compliance Nigeria, waste management company Lagos, industrial waste management Nigeria',
    canonicalPath: '/what-we-do/waste-management',
  },

  engineering: {
    title: 'Engineering & Asset Integrity Services in Nigeria | TPI',
    description:
      'Engineering design, FEED and asset integrity management for oil, gas and infrastructure in Nigeria and West Africa, backed by 30+ years of environmental expertise.',
    keywords:
      'engineering services Nigeria, EPC contractor, asset integrity management, risk-based inspection, NDT services Nigeria, corrosion monitoring',
    canonicalPath: '/what-we-do/engineering',
  },

  digital: {
    title: 'Environmental Data & Monitoring Solutions in Nigeria | TPI',
    description:
      'IoT environmental monitoring, data management and compliance reporting platforms that give operators in Nigeria and Africa real-time environmental intelligence.',
    keywords:
      'environmental data analytics, digital environmental solutions, IoT monitoring Nigeria, compliance reporting software, environmental data management',
    canonicalPath: '/what-we-do/digital-solutions',
  },

  training: {
    title: 'ESG, HSE & Environmental Laboratory Training in Nigeria | TPI',
    description:
      'Practical ESG, HSE and environmental laboratory training in Nigeria. Customised courses from TPI specialists build lasting technical capacity across Africa.',
    keywords:
      'HSE training Nigeria, ESG training, environmental training, laboratory training Nigeria, customised training programs, capacity building',
    canonicalPath: '/what-we-do/training',
  },

  projects: {
    title: 'Environmental Projects & Case Studies in Nigeria | TPI',
    description:
      "Case studies from TPI's environmental work in Nigeria and Africa: EIA and baseline studies, site remediation, compliance monitoring and waste management.",
    keywords:
      'environmental projects Nigeria, TPI case studies, EIA projects, remediation projects, environmental monitoring projects',
    canonicalPath: '/projects',
  },

  insights: {
    title: 'Environmental Insights & News: Nigeria & Africa | TPI',
    description:
      'Articles from TPI specialists on environmental assessment, compliance, laboratory science, energy projects and sustainability in Nigeria and across Africa.',
    keywords:
      'environmental news Nigeria, environmental articles, compliance insights, sustainability news, TPI blog, environmental research',
    canonicalPath: '/insights',
  },

  gallery: {
    title: 'Project & Laboratory Photo Gallery | TPI Nigeria',
    description:
      "Photos from TPI's environmental field projects, laboratory facilities and training programmes across Nigeria and West Africa.",
    keywords:
      'TPI project photos, environmental project gallery, laboratory images, field operations Nigeria',
    canonicalPath: '/gallery',
  },

  contact: {
    title: 'Contact TPI | Environmental Consultants in Lagos, Nigeria',
    description:
      'Request a proposal from TPI for environmental consultancy, laboratory testing, waste management or engineering. Offices in Lagos, Port Harcourt, Warri and Conakry.',
    keywords:
      'contact TPI Nigeria, environmental consultant Lagos, TPI phone number, TPI email, environmental services quote Nigeria',
    canonicalPath: '/contact',
  },

  privacyPolicy: {
    title: 'Privacy Policy | Technology Partners International',
    description:
      'Read TPI\'s privacy policy to understand how we collect, use, and protect your personal information.',
    keywords: 'TPI privacy policy, data protection Nigeria',
    canonicalPath: '/privacy-policy',
  },

  verify: {
    title: 'Verify a TPI Certificate | Technology Partners International',
    description:
      'Check that a training certificate issued by Technology Partners International (TPI) is genuine. Enter the certificate number to see its holder and course details.',
    keywords:
      'TPI certificate verification, verify TPI certificate, certificate lookup, ISO certification verification, TPI Nigeria certificate',
    canonicalPath: '/verify',
  },

  notFound: {
    title: 'Page Not Found | TPI Nigeria',
    description: 'The page you are looking for does not exist. Return to the TPI homepage.',
    keywords: '',
    canonicalPath: '/404',
  },
};

// ─── Helpers for generated titles & descriptions ────────────────────────────
// Google shows roughly 60–65 characters of a title and ~160 of a description.

const TITLE_MAX = 65;

/** "<Topic> in Nigeria | TPI" when it fits, otherwise "<Topic> | TPI". */
export function localTitle(topic: string, suffix = 'TPI'): string {
  const withPlace = `${topic} in Nigeria | ${suffix}`;
  if (!/nigeria|africa/i.test(topic) && withPlace.length <= TITLE_MAX) return withPlace;
  return `${topic} | ${suffix}`;
}

/** Trim to at most `max` characters at a word boundary, never mid-word. */
export function clampDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:.–-]+$/, '')}…`;
}

/** Add a short "where" line to a description that doesn't name Nigeria/Africa, if it fits. */
export function localDescription(text: string, max = 160): string {
  const clean = clampDescription(text, max);
  const where = ' Delivered by TPI across Nigeria and Africa.';
  if (/nigeria|africa/i.test(clean) || clean.length + where.length > max) return clean;
  return `${clean.replace(/\.?$/, '.')}${where}`;
}
