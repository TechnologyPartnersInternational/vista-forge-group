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
import { trainingFAQs } from "@/seo/faqData";

const service = services.find(s => s.slug === "training");

const TrainingDetail = () => {
  const seo = PAGE_SEO.training;

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
          { label: 'Training', path: '/what-we-do/training' },
        ]}
      />
      <JsonLd
        data={serviceSchema(
          'Professional Environmental & HSE Training',
          seo.description,
          `${SITE_URL}/what-we-do/training`
        )}
      />

      <ServiceHero 
        title={service?.title || "Training"}
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
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Capacity Building</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Empowering professionals for technical excellence.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                TPI provides accredited training programs in ESG, HSE, laboratory management, and technical compliance, building local capacity to meet global industrial standards.
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
          serviceSlug="training"
          index={index} 
        />
      ))}

      {/* FAQ Section */}
      <FAQSection
        title="Training FAQ"
        subtitle="Common questions about our professional development and HSE training programs."
        faqs={trainingFAQs}
      />

      {/* How We Work */}
      <HowWeWork />

      {/* CTA */}
      <CtaBand />
    </Layout>
  );
};

export default TrainingDetail;
