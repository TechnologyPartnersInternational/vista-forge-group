import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { JsonLd, breadcrumbSchema } from './JsonLd';
import { SITE_URL } from './seo.config';

export interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * SEO breadcrumb navigation with JSON-LD schema.
 * Renders a semantic <nav> with <ol> and accompanying BreadcrumbList structured data.
 */
const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const location = useLocation();

  // Build full breadcrumb list with Home prepended
  const crumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    ...items,
  ];

  const schemaItems = crumbs.map((item) => ({
    name: item.label,
    url: `${SITE_URL}${item.path}`,
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav
        aria-label="Breadcrumb"
        className="px-4 md:px-10 py-3 bg-mist/50 border-b border-border/30"
      >
        <ol className="flex items-center flex-wrap gap-1 text-xs text-muted-foreground max-w-7xl mx-auto">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            const isActive = location.pathname === crumb.path;

            return (
              <li key={crumb.path} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight className="w-3 h-3 text-muted-foreground/50 shrink-0" />
                )}
                {isLast || isActive ? (
                  <span
                    className="font-semibold text-foreground"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="hover:text-primary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
