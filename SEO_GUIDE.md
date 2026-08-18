# TPI Nigeria - Enterprise Technical SEO Guide (2026 Edition)

Welcome to the Enterprise SEO Documentation for **Technology Partners International (TPI Nigeria)** (`https://www.tpigrp.com`). This document outlines the comprehensive technical SEO architecture, structured data schemas, Core Web Vitals optimizations, and ongoing maintenance practices implemented across the React SPA application.

---

## 1. SEO Architecture Overview

While this application is a standard client-side Single Page Application (SPA) powered by Vite and React, it is engineered to meet Google's 2026 Search Engine indexing standards:

- **Runtime Meta Tags & Open Graph Injection:** Using `react-helmet-async`, every page dynamically updates document `<title>`, `<meta name="description">`, canonical URLs, keywords, and Open Graph (Facebook/LinkedIn/Twitter) preview tags before rendering content.
- **Dynamic Structured Data (JSON-LD):** Google's crawling bot executes modern JavaScript and inspects the injected DOM for JSON-LD schema blocks. We inject specialized `@graph` schemas per page to unlock Google Rich Results (Knowledge Panels, FAQ Accordions, Breadcrumbs, and Service reviews).
- **Route Code-Splitting & Resource Hints:** All page routes are dynamically loaded via `React.lazy` and wrapped in `Suspense`, ensuring the initial JavaScript bundle is minimal for instant page interaction and exceptional Core Web Vitals scores.

---

## 2. Centralized Configuration (`src/seo/seo.config.ts`)

All site-wide SEO defaults, social profiles, domain settings, and Google Analytics tracking IDs are stored in a single centralized file: `src/seo/seo.config.ts`.

### Key Variables to Manage:
- **`SITE_URL`**: Currently set to `https://www.tpigrp.com`. If you deploy under a staging subdomain or alternate domain, update this constant to prevent canonical URL mismatch.
- **`GA4_TRACKING_ID`**: Set to `G-Q3TKLPXBSZ`. The Analytics tracking script is cleanly integrated in `src/seo/AnalyticsScripts.tsx` and loads automatically in production.
- **`PAGE_SEO` Dictionary**: Contains the pre-researched titles, meta descriptions (under 160 chars), targeted keyword strings, and canonical paths for every core page on the platform.

---

## 3. How to Add SEO to a New Page

When developing a new route or component page in `src/pages/`, follow this standard pattern to ensure proper indexing:

```tsx
import React from "react";
import Layout from "@/components/layout/Layout";
import PageSEO from "@/seo/PageSEO";
import Breadcrumbs from "@/seo/Breadcrumbs";
import { JsonLd, webPageSchema } from "@/seo/JsonLd";
import { SITE_URL } from "@/seo/seo.config";

const CustomPage = () => {
  return (
    <Layout>
      {/* 1. Inject Title, Meta Description, Keywords, and Canonical */}
      <PageSEO
        title="Environmental Water Analysis | TPI Nigeria"
        description="Accredited water quality analytical testing and marine pollution evaluation for industrial enterprises in Nigeria."
        keywords="water quality testing Nigeria, marine pollution analysis, environmental lab Lagos, TPI Nigeria"
        canonicalPath="/water-analysis"
        ogType="website"
      />

      {/* 2. Render Visual & Structured Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: "What We Do", path: "/what-we-do" },
          { label: "Water Analysis", path: "/water-analysis" }
        ]}
      />

      {/* 3. Inject JSON-LD Structured Data Schema for Google */}
      <JsonLd
        data={webPageSchema(
          "Environmental Water Analysis",
          "Accredited water quality analytical testing and marine pollution evaluation in Nigeria.",
          `${SITE_URL}/water-analysis`
        )}
      />

      <section className="py-16 px-6">
        <h1>Environmental Water Analysis Services</h1>
        {/* Page Content */}
      </section>
    </Layout>
  );
};

export default CustomPage;
```

> **Note on Private & Admin Pages:** Always include `noindex={true}` in `<PageSEO title="..." noindex={true} />` for admin dashboards, login pages, or internal tools to instruct crawlers (`robots="noindex, nofollow"`) to exclude them entirely from search engines.

---

## 4. Structured Data Schemas (JSON-LD Reference)

Our schema library (`src/seo/JsonLd.tsx`) provides type-safe generators for Google Search Rich Results:

1. **`localBusinessSchema()` & `professionalServiceSchema()` (Home Page):**
   - Declares TPI as an Environmental Consultancy & Professional Service founded in 1992.
   - Includes official address (Lagos), operational area (Nigeria/West Africa), latitude/longitude coordinates, business hours, telephone, and social profiles (LinkedIn & Twitter).
2. **`serviceSchema()` (Service Details & Sub-services):**
   - Maps service categories (Environment, Laboratory, Engineering, Training, Waste Management, Digital) to Google Service schema, associating them with the parent provider organization.
3. **`personSchema()` (Company Leadership):**
   - Documents executive directors and scientific leads with job titles, biographies, and organizational affiliations for Knowledge Graph authority.
4. **`FAQPage Schema` (`FAQSection.tsx` & `faqData.ts`):**
   - Automatically outputs structured Q&A arrays on service landing pages to trigger accordion rich snippets directly in Google search results.
5. **`Article Schema` (Insights & Technical Articles):**
   - Marks up environmental news, case studies, and issues with publication dates, headlines, authors, and organization publisher logos for enhanced news indexing.

---

## 5. Discoverability & Static Files (`/public`)

Three files in the `/public/` directory control crawling rules and offline discoverability:

- **`sitemap.xml`**: Lists all public URLs, last modification dates, priorities (`1.0` for Home, `0.9` for primary services, `0.8` for sub-services), and change frequencies. **When launching new public routes, append a `<url>` entry to this file.**
- **`robots.txt`**: Directs search engine bots (Googlebot, Bingbot, AppleBot) to `sitemap.xml`, permits public folder access, and explicitly restricts access to `/admin` and internal APIs.
- **`manifest.json` & Favicon Tags (`index.html`)**: Defines Progressive Web App (PWA) manifest properties, display theme colors (`#1B3B36` TPI Forest Green), and Touch/Favicon Apple icon styling.

---

## 6. Core Web Vitals & Performance Strategy

To satisfy Google's 2026 page experience signals (LCP, CLS, INP), several foundational enhancements are deployed:

- **Resource Hints in `<head>`:** `<link rel="preconnect">` and `<link rel="dns-prefetch">` warm up TLS/DNS handshakes for Google Fonts and Google Analytics CDN servers before React boots up.
- **Font Optimization:** Google Fonts (Outfit & Inter) use `display=swap` to prevent Flash of Invisible Text (FOIT) and avoid font layout shift penalties (CLS).
- **Lazy Route Splitting:** Heavy libraries (e.g., Framer Motion, TanStack Query, Recharts) and deep routes are code-split in `App.tsx` via `React.lazy`, reducing Total Blocking Time (TBT).
- **Enterprise Vercel Headers (`vercel.json`):** Sets strict security HTTP headers (HSTS, Content-Security-Policy, Nosniff) and enforces `public, max-age=31536000, immutable` caching for all `/assets/*` static bundles.

---

## 7. Ongoing Maintenance & Verification Checklist

Whenever updating site content or running periodic SEO audits:

1. **Google Search Console (GSC):**
   - Inspect domain via GSC URL Inspection tool to confirm rendered HTML displays all meta descriptions and JSON-LD scripts correctly.
   - Resubmit `https://www.tpigrp.com/sitemap.xml` whenever bulk page changes occur.
2. **Schema Validation:**
   - Paste URL or page HTML into the [Google Rich Results Test](https://search.google.com/test/rich-results) and Schema.org Validator to verify zero syntax errors in structured data blocks.
3. **Core Web Vitals Monitoring:**
   - Review PageSpeed Insights or Lighthouse Mobile report in Chrome DevTools to verify Performance and SEO score thresholds remain above 95/100.
