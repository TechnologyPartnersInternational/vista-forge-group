// ─── Central SEO Configuration ───────────────────────────────────────────────
// Single source of truth for all SEO metadata across the TPI website.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_URL = 'https://www.tpinigeria.com';
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
  emailAlt: 'info@tpigrp.com',
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
    title: 'Technology Partners International | Environmental Consultancy & Engineering in Nigeria',
    description:
      'TPI is Nigeria\'s leading environmental consultancy and engineering firm. ISO-certified services in EIA, laboratory testing, waste management, and compliance since 1992.',
    keywords:
      'environmental consultancy Nigeria, environmental engineering Nigeria, EIA consultant Nigeria, environmental impact assessment, TPI Nigeria, environmental monitoring, laboratory services Nigeria',
    canonicalPath: '/',
    ogType: 'website',
  },

  company: {
    title: 'About TPI | Environmental Experts & Engineers in Nigeria Since 1992',
    description:
      'Learn about Technology Partners International — 30+ years of environmental consultancy excellence in Nigeria. ISO 9001, ISO 14001, ISO 45001 & ISO 17025 certified.',
    keywords:
      'about TPI Nigeria, environmental consultancy company, ISO certified environmental firm, environmental experts Nigeria, TPI leadership team',
    canonicalPath: '/company',
  },

  whatWeDo: {
    title: 'Environmental Consultancy Services | TPI Nigeria',
    description:
      'Explore TPI\'s six integrated service lines: environment, laboratory, waste management, engineering, digital solutions, and professional training across Nigeria.',
    keywords:
      'environmental services Nigeria, environmental consultancy services, waste management services, laboratory services, engineering services Nigeria, HSE training',
    canonicalPath: '/what-we-do',
  },

  environment: {
    title: 'Environmental Impact Assessment & Compliance Services | TPI Nigeria',
    description:
      'Expert environmental impact assessments, compliance monitoring, site remediation, and GIS mapping services in Nigeria. ISO 14001 certified with 98% permit success rate.',
    keywords:
      'environmental impact assessment Nigeria, EIA consultant, environmental compliance monitoring, environmental audit, oil spill remediation Nigeria, air quality monitoring',
    canonicalPath: '/what-we-do/environment',
  },

  laboratory: {
    title: 'Environmental Laboratory Services | Water, Soil & Air Testing | TPI',
    description:
      'ISO 17025 accredited environmental laboratory in Nigeria. Water quality testing, soil analysis, air monitoring, crude oil assays, and eco-toxicity studies.',
    keywords:
      'environmental laboratory Nigeria, water testing laboratory, soil analysis Nigeria, ISO 17025 lab, crude oil assay, eco-toxicity testing, mobile laboratory',
    canonicalPath: '/what-we-do/laboratory',
  },

  wasteManagement: {
    title: 'Waste Management Services in Nigeria | Hazardous & Solid Waste | TPI',
    description:
      'End-to-end waste management solutions in Nigeria — integrated solid waste, incineration, thermal desorption, and policy compliance for oil & gas and industrial sectors.',
    keywords:
      'waste management Nigeria, hazardous waste management, solid waste management, incineration services, thermal desorption, waste policy compliance Nigeria',
    canonicalPath: '/what-we-do/waste-management',
  },

  engineering: {
    title: 'Engineering, EPC & Asset Integrity Services | TPI Nigeria',
    description:
      'Multidisciplinary engineering design, procurement, construction management, and asset integrity services for Nigeria\'s oil & gas and infrastructure sectors.',
    keywords:
      'engineering services Nigeria, EPC contractor, asset integrity management, risk-based inspection, NDT services Nigeria, corrosion monitoring',
    canonicalPath: '/what-we-do/engineering',
  },

  digital: {
    title: 'Digital Solutions & Environmental Data Analytics | TPI Nigeria',
    description:
      'IoT environmental monitoring, data management platforms, and secure software solutions for automated compliance reporting and environmental intelligence.',
    keywords:
      'environmental data analytics, digital environmental solutions, IoT monitoring Nigeria, compliance reporting software, environmental data management',
    canonicalPath: '/what-we-do/digital-solutions',
  },

  training: {
    title: 'Professional Environmental & HSE Training | TPI Nigeria',
    description:
      'Accredited ESG, HSE, and environmental laboratory training programs in Nigeria. Build technical capacity with customised courses from industry experts.',
    keywords:
      'HSE training Nigeria, ESG training, environmental training, laboratory training Nigeria, customised training programs, capacity building',
    canonicalPath: '/what-we-do/training',
  },

  projects: {
    title: 'Environmental Projects & Case Studies | TPI Nigeria',
    description:
      'Browse TPI\'s portfolio of completed and ongoing environmental projects across Nigeria — EIA studies, laboratory analysis, remediation, and waste management.',
    keywords:
      'environmental projects Nigeria, TPI case studies, EIA projects, remediation projects, environmental monitoring projects',
    canonicalPath: '/projects',
  },

  insights: {
    title: 'Environmental Insights & Industry News | TPI Nigeria',
    description:
      'Expert articles, research insights, and industry news on environmental consultancy, compliance, laboratory science, and sustainability in Nigeria.',
    keywords:
      'environmental news Nigeria, environmental articles, compliance insights, sustainability news, TPI blog, environmental research',
    canonicalPath: '/insights',
  },

  gallery: {
    title: 'Project Gallery | TPI Nigeria',
    description:
      'View photos from TPI\'s environmental projects, laboratory facilities, field operations, and training programs across Nigeria and West Africa.',
    keywords:
      'TPI project photos, environmental project gallery, laboratory images, field operations Nigeria',
    canonicalPath: '/gallery',
  },

  contact: {
    title: 'Contact Technology Partners International | Get a Quote',
    description:
      'Contact TPI for environmental consultancy, laboratory testing, waste management, or engineering services in Nigeria. Offices in Lagos, Port Harcourt, Warri & Conakry.',
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
    title: 'Certificate Verification | Technology Partners International',
    description:
      'Verify the authenticity of certificates issued by Technology Partners International (TPI). Enter your certificate ID to confirm its validity and view details.',
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
