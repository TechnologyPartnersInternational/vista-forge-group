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
import FAQSection from "@/seo/FAQSection";
import { wasteManagementFAQs } from "@/seo/faqData";

const service = services.find(s => s.slug === "waste-management");

const WasteManagementDetail = () => {
  const seo = PAGE_SEO.wasteManagement;

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
          { label: 'Waste Management', path: '/what-we-do/waste-management' },
        ]}
      />
      <JsonLd
        data={serviceSchema(
          'Waste Management Services',
          seo.description,
          `${SITE_URL}/what-we-do/waste-management`
        )}
      />

      <ServiceHero 
        title={service?.title || "Waste Management"}
        description={service?.shortDesc || ""}
        image={"/assets/special-inspection-SK1.jpg"}
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
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Resource Recovery</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Innovative waste solutions for a circular economy.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                TPI provides end-to-end hazardous and non-hazardous waste management services, focusing on resource recovery, thermal destruction, and ensuring zero-waste-to-landfill targets.
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
          serviceSlug="waste-management"
          index={index} 
        />
      ))}

      {/* FAQ Section */}
      <FAQSection
        title="Waste Management FAQ"
        subtitle="Common questions about waste management and disposal services in Nigeria."
        faqs={wasteManagementFAQs}
      />

      {/* How We Work */}
      <HowWeWork />

      {/* CTA */}
      <CtaBand />
    </Layout>
  );
};

export default WasteManagementDetail;
