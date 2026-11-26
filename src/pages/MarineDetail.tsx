import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Download } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/service/ServiceHero";
import SubServiceSection from "@/components/service/SubServiceSection";
import CtaBand from "@/components/CtaBand";
import PhotoCredits from "@/components/service/PhotoCredits";
import { marineService, marineOverview } from "@/data/marineServices";
import PageSEO from "@/seo/PageSEO";
import { PAGE_SEO, SITE_URL } from "@/seo/seo.config";
import Breadcrumbs from "@/seo/Breadcrumbs";
import { JsonLd, serviceSchema } from "@/seo/JsonLd";
import FAQSection from "@/seo/FAQSection";
import { marineFAQs } from "@/seo/faqData";

const service = marineService;

const MarineDetail = () => {
  const seo = PAGE_SEO.marine;

  return (
    <Layout>
      <PageSEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath={seo.canonicalPath}
      />
      <Breadcrumbs
        items={[
          { label: "What We Do", path: "/what-we-do" },
          { label: service.title, path: `/what-we-do/${service.slug}` },
        ]}
      />
      <JsonLd data={serviceSchema(service.title, seo.description, `${SITE_URL}/what-we-do/${service.slug}`)} />

      <ServiceHero
        title={service.title}
        description={service.shortDesc}
        image={marineOverview.heroImage}
        category="ROV & Underwater"
      />

      {/* Overview and service index */}
      <section className="bg-mist py-20 md:py-28">
        <div className="px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.1] text-balance">
                Inspection evidence from below the waterline.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[62ch] mb-12">
                {marineOverview.intro}
              </p>
              <ul className="border-t border-border">
                {service.subServices.map((sub) => (
                  <li key={sub.id} className="border-b border-border">
                    <a
                      href={`#${sub.id}`}
                      className="group flex items-center justify-between gap-6 py-5 text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <span>{sub.title}</span>
                      <ArrowDown className="w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      {service.subServices.map((sub, index) => (
        <SubServiceSection key={sub.id} subService={sub} serviceSlug={service.slug} index={index} />
      ))}

      {/* What every survey delivers */}
      <section className="navy-gradient py-20 md:py-28">
        <div className="px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-16">
            <h2 className="lg:col-span-5 text-3xl md:text-5xl font-bold text-white leading-[1.1] text-balance">
              A record your team can act on.
            </h2>
            <p className="lg:col-span-7 text-lg text-white/80 leading-relaxed max-w-[62ch] self-end">
              Deliverables follow the agreed asset list, survey coverage and measurement requirements, and every report states what was covered and what was not.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
            {marineOverview.record.map((item) => (
              <div key={item.title} className="border-t border-white/25 pt-6">
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-[60ch]">{marineOverview.enquiry}</p>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-navy-deep font-bold hover:bg-white/90 active:scale-[0.98] transition-all group"
              >
                Discuss your survey
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={marineOverview.brochure}
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/40 text-white font-bold hover:bg-white/10 active:scale-[0.98] transition-all group"
              >
                Download brochure
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Underwater Inspection FAQ"
        subtitle="What our ROV inspection and survey work covers, and where its limits are."
        faqs={marineFAQs}
      />

      <CtaBand />
      <PhotoCredits images={[marineOverview.heroImage, ...service.subServices.map((s) => s.image)]} />
    </Layout>
  );
};

export default MarineDetail;
