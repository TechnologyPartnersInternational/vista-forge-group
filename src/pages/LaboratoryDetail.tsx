import { services } from "@/data/services";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/service/ServiceHero";
import SubServiceSection from "@/components/service/SubServiceSection";
import HowWeWork from "@/components/HowWeWork";
import CtaBand from "@/components/CtaBand";
import { motion } from "framer-motion";

const service = services.find(s => s.slug === "laboratory");

const LaboratoryDetail = () => {
  return (
    <Layout>
      <ServiceHero 
        title={service?.title || "Laboratory"}
        description={service?.shortDesc || ""}
        image={"/assets/20180627_092149-scaled.jpg"}
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
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Precise Analysis</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">World-class laboratory services for high-stakes projects.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our ISO 17025 accredited facilities provide comprehensive analytical support, ensuring your samples are handled with the highest level of scientific rigor and regulatory compliance.
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
          serviceSlug="laboratory"
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

export default LaboratoryDetail;
