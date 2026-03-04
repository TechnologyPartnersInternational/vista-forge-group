import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import TrustStrip from "@/components/TrustStrip";
import HowWeWork from "@/components/HowWeWork";
import FeaturedProjects from "@/components/FeaturedProjects";
import InsightsSection from "@/components/InsightsSection";
import OurPresence from "@/components/OurPresence";
import CtaBand from "@/components/CtaBand";
import ClientLogos from "@/components/ClientLogos";

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />
      <TrustStrip />
      <HowWeWork />
      <FeaturedProjects />
      <InsightsSection />
      <OurPresence />
      <CtaBand />
      <ClientLogos />
    </Layout>
  );
};

export default Index;
