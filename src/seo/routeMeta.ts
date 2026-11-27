// ─── Route metadata ──────────────────────────────────────────────────────────
// One source for every public route's title, description, keywords, image and
// structured data. React pages read it at runtime (via PageSEO/JsonLd), and
// scripts/seo-pages.mjs writes it into each route's static HTML at build time,
// so crawlers that don't run JavaScript and link previews see the right page.

import { services, type Service, type SubService } from "@/data/services";
import { PAGE_SEO, SITE_URL, localTitle, localDescription } from "./seo.config";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "./JsonLd";

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  /** Site-relative or absolute image for link previews. */
  image?: string;
}

export interface RouteMeta extends PageMeta {
  path: string;
  /** Short heading and summary for the static (no-JavaScript) fallback. */
  h1: string;
  summary: string;
  /** Optional bullet points (a service's capabilities) for the fallback. */
  points?: string[];
  links: { label: string; path: string }[];
  jsonLd: Record<string, unknown>[];
}

// Re-exported for scripts/seo-pages.mjs, which bundles this module on its own.
export { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "./seo.config";

export const absoluteUrl = (p?: string) => (p ? (p.startsWith("http") ? p : `${SITE_URL}${p}`) : undefined);

/** PAGE_SEO key for each service line page. */
const SERVICE_SEO_KEY: Record<string, string> = {
  environment: "environment",
  laboratory: "laboratory",
  "waste-management": "wasteManagement",
  engineering: "engineering",
  "marine-underwater": "marine",
  "digital-solutions": "digital",
  training: "training",
};

export function serviceLineMeta(service: Service): PageMeta {
  const seo = PAGE_SEO[SERVICE_SEO_KEY[service.slug]];
  return seo
    ? { title: seo.title, description: seo.description, keywords: seo.keywords }
    : { title: localTitle(`${service.title} Services`), description: localDescription(service.shortDesc) };
}

export function subServiceMeta(service: Service, sub: SubService): PageMeta {
  if (sub.seo) return sub.seo;
  return {
    title: localTitle(sub.title),
    description: localDescription(
      sub.shortDesc || sub.fullDesc || `${sub.title} services by TPI in Nigeria and Africa. ${service.shortDesc}`,
    ),
    keywords: `${sub.title}, ${service.title}, Nigeria, environmental services, TPI`,
  };
}

/** Service schema for a service line, listing its sub-services as an offer catalogue. */
export function serviceLineSchema(service: Service, description: string) {
  const url = `${SITE_URL}/what-we-do/${service.slug}`;
  return {
    ...serviceSchema(service.title, description, url),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.subServices.map((sub) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: sub.title,
          description: sub.shortDesc,
          url: `${url}/${sub.slug}`,
        },
      })),
    },
  };
}

const crumbs = (items: { name: string; path: string }[]) =>
  breadcrumbSchema([{ name: "Home", path: "/" }, ...items].map((i) => ({ name: i.name, url: `${SITE_URL}${i.path}` })));

/** Every public route with static metadata (CMS detail pages are left to the client). */
export function buildRouteMetas(): RouteMeta[] {
  const routes: RouteMeta[] = [];

  const staticPages: [string, string, string][] = [
    ["/what-we-do", "whatWeDo", "What We Do"],
    ["/company", "company", "About TPI"],
    ["/projects", "projects", "Projects"],
    ["/insights", "insights", "Insights"],
    ["/gallery", "gallery", "Gallery"],
    ["/contact", "contact", "Contact TPI"],
    ["/privacy-policy", "privacyPolicy", "Privacy Policy"],
    ["/verify", "verify", "Verify a Certificate"],
  ];
  for (const [path, key, h1] of staticPages) {
    const seo = PAGE_SEO[key];
    routes.push({
      path,
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      h1,
      summary: seo.description,
      links:
        path === "/what-we-do"
          ? services.map((s) => ({ label: s.title, path: `/what-we-do/${s.slug}` }))
          : [{ label: "What We Do", path: "/what-we-do" }, { label: "Contact TPI", path: "/contact" }],
      jsonLd: [
        webPageSchema(seo.title, seo.description, `${SITE_URL}${path}`),
        crumbs([{ name: h1, path }]),
      ],
    });
  }

  for (const service of services) {
    const linePath = `/what-we-do/${service.slug}`;
    const line = serviceLineMeta(service);
    routes.push({
      path: linePath,
      ...line,
      image: service.slug === "marine-underwater" ? "/assets/marine/og/og-underwater-inspection-survey.jpg" : undefined,
      h1: service.title,
      summary: service.shortDesc,
      links: service.subServices.map((sub) => ({ label: sub.title, path: `${linePath}/${sub.slug}` })),
      jsonLd: [
        serviceLineSchema(service, line.description),
        crumbs([
          { name: "What We Do", path: "/what-we-do" },
          { name: service.title, path: linePath },
        ]),
      ],
    });

    for (const sub of service.subServices) {
      const path = `${linePath}/${sub.slug}`;
      const meta = subServiceMeta(service, sub);
      routes.push({
        path,
        ...meta,
        h1: sub.title,
        summary: sub.shortDesc || meta.description,
        points: sub.highlights,
        links: [
          { label: service.title, path: linePath },
          ...service.subServices
            .filter((o) => o.slug !== sub.slug)
            .map((o) => ({ label: o.title, path: `${linePath}/${o.slug}` })),
          ...(sub.brochure ? [{ label: `${sub.title} brochure (PDF)`, path: sub.brochure }] : []),
        ],
        jsonLd: [
          serviceSchema(sub.title, meta.description, `${SITE_URL}${path}`),
          crumbs([
            { name: "What We Do", path: "/what-we-do" },
            { name: service.title, path: linePath },
            { name: sub.title, path },
          ]),
        ],
      });
    }
  }

  return routes;
}
