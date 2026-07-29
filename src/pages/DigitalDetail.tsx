import { services } from "@/data/services";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/service/ServiceHero";
import SubServiceSection from "@/components/service/SubServiceSection";
import HowWeWork from "@/components/HowWeWork";
import CtaBand from "@/components/CtaBand";
import { motion } from "framer-motion";
import PageSEO from "@/seo/PageSEO";
import { PAGE_SEO, SITE_URL } from "@/seo/seo.config";
import Breadcrumbs from "@/seo/Breadcrumbs";
import { JsonLd, serviceSchema } from "@/seo/JsonLd";

const service = services.find(s => s.slug === "digital-solutions");

const DigitalDetail = () => {
  const seo = PAGE_SEO.digital;

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
          { label: 'What We Do', path: '/what-we-do' },
          { label: 'Digital Solutions', path: '/what-we-do/digital-solutions' },
        ]}
      />
      <JsonLd
        data={serviceSchema(
          'Digital Solutions & Environmental Data Analytics',
          seo.description,
          `${SITE_URL}/what-we-do/digital-solutions`
        )}
      />

      <ServiceHero 
        title={service?.title || "Digital Solutions"}
        description={service?.shortDesc || ""}
        image={service?.subServices[0]?.image || ""}
      />

      {/* Overview */}
      <section className="bg-mist py-24 relative overflow-hidden">
        <div className="px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Smart Technology</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Harnessing data for a sustainable future.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We empower organizations with IoT-based monitoring, automated compliance reporting, and secure software solutions that transform operational data into actionable intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      {service?.subServices.map((sub, index) => (
        <SubServiceSection 
          key={sub.id} 
          subService={sub} 
          serviceSlug="digital-solutions"
          index={index} 
        />
      ))}

      {/* How We Work */}
      <HowWeWork />

      {/* CTA */}
      <CtaBand />
    </Layout>
  );
};

export default DigitalDetail;
