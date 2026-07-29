import Layout from "@/components/layout/Layout";
import { industries } from "@/data/services";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageSEO from "@/seo/PageSEO";
import { SITE_NAME, SITE_URL } from "@/seo/seo.config";
import Breadcrumbs from "@/seo/Breadcrumbs";
import { JsonLd, webPageSchema } from "@/seo/JsonLd";

const Industries = () => {
  return (
    <Layout>
      <PageSEO
        title={`Industries & Sectors We Serve | ${SITE_NAME}`}
        description="Deep environmental consultancy and engineering expertise across Oil & Gas, Maritime, Mining, Agriculture, Construction, and Industrial sectors in Nigeria."
        keywords="environmental solutions oil and gas Nigeria, environmental consultancy industries Nigeria, maritime environmental services, TPI Nigeria industries"
        canonicalPath="/industries"
      />
      <Breadcrumbs items={[{ label: 'Industries', path: '/industries' }]} />
      <JsonLd
        data={webPageSchema(
          "Industries & Sectors Served by TPI Nigeria",
          "Sector-specific environmental engineering, compliance monitoring, and consultancy for leading industries in Nigeria.",
          `${SITE_URL}/industries`
        )}
      />
      <section className="navy-gradient">
        <div className="container-narrow section-padding">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver mb-3">Industries</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Sector expertise that makes the difference</h1>
            <p className="text-lg text-silver leading-relaxed">
              Deep knowledge of the regulatory, operational, and environmental challenges specific to each industry we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-narrow section-padding">
          <div className="space-y-6">
            {industries.map((ind) => (
              <div key={ind.id} id={ind.id} className="bg-card rounded-lg p-8 md:p-10 border border-border card-hover scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-3">{ind.title}</h2>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">{ind.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Discuss your project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
