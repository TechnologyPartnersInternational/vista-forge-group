import { Helmet } from 'react-helmet-async';
import { GA4_MEASUREMENT_ID } from './seo.config';

/**
 * Google Analytics 4 integration via react-helmet-async.
 * Injects the GA4 gtag.js script and configuration.
 *
 * Replace the measurement ID in seo.config.ts if it changes.
 */
const AnalyticsScripts = () => {
  if (!GA4_MEASUREMENT_ID) return null;

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </script>
    </Helmet>
  );
};

export default AnalyticsScripts;
