import { Helmet } from 'react-helmet-async';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  THEME_COLOR,
  AUTHOR,
} from './seo.config';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

/**
 * Reusable per-page SEO component.
 * Renders <title>, meta description, keywords, canonical, OG, Twitter, robots, author, theme-color.
 */
const PageSEO = ({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage,
  ogType = 'website',
  noindex = false,
}: PageSEOProps) => {
  const canonicalUrl = canonicalPath ? `${SITE_URL}${canonicalPath}` : undefined;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={AUTHOR} />
      <meta name="theme-color" content={THEME_COLOR} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TPI_Nigeria" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default PageSEO;
