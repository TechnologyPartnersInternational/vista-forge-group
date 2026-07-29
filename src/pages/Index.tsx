import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import TrustStrip from "@/components/TrustStrip";
import HowWeWork from "@/components/HowWeWork";
import FeaturedProjects from "@/components/FeaturedProjects";
import InsightsSection from "@/components/InsightsSection";
//import OurPresence from "@/components/OurPresence";
import CtaBand from "@/components/CtaBand";
import ClientLogos from "@/components/ClientLogos";
import PageSEO from "@/seo/PageSEO";
import { PAGE_SEO } from "@/seo/seo.config";
import { JsonLd, localBusinessSchema, professionalServiceSchema } from "@/seo/JsonLd";
import FAQSection from "@/seo/FAQSection";
import { environmentFAQs } from "@/seo/faqData";

const Index = () => {
  const seo = PAGE_SEO.home;

  return (
    <Layout>
      <PageSEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath={seo.canonicalPath}
        ogType={seo.ogType}
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={professionalServiceSchema()} />

      <HeroCarousel />
      <TrustStrip />
      <ClientLogos />
      <HowWeWork />
      <FeaturedProjects />
      <InsightsSection />
      {/* <OurPresence /> */}
      <CtaBand />

      <FAQSection
        title="Environmental Consultancy FAQ"
        subtitle="Answers to common questions about environmental services in Nigeria."
        faqs={environmentFAQs}
      />
    </Layout>
  );
};

export default Index;

