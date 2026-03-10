import { services } from "@/data/services";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/service/ServiceHero";
import SubServiceSection from "@/components/service/SubServiceSection";
import HowWeWork from "@/components/HowWeWork";
import CtaBand from "@/components/CtaBand";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, Award, Zap } from "lucide-react";

const service = services.find(s => s.slug === "environment");

const EnvironmentDetail = () => {
  return (
    <Layout>
      <ServiceHero 
        title={service?.title || "Environment"}
        description={service?.shortDesc || "Environmental excellence through science and innovation."}
        image={service?.subServices[0]?.image || ""}
      />

      {/* Compliance Section */}
      <section className="bg-mist py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="px-4 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                Excellence in Standards
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Compliance you <br /> can count on.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                We bridge the gap between complex regulatory requirements and operational efficiency. Our team ensures your projects meet the highest standards of environmental and social governance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "IFC Standards", desc: "Rigorous alignment with World Bank & IFC performance standards." },
                  { icon: Award, title: "ISO Certified", desc: "Operating under ISO 14001:2015 environmental management systems." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 p-6 bg-white rounded-2xl shadow-sm border border-border/50">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-navy rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <h3 className="text-2xl font-bold mb-10 border-b border-white/10 pb-6">Key Performance Metrics</h3>
                <div className="space-y-8">
                  {[
                    { label: "Permit Approval Success", value: "98%" },
                    { label: "Regulatory Compliance Rate", value: "100%" },
                    { label: "Environmental Risk Mitigation", value: "High" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                      <span className="text-white/60 text-sm font-medium uppercase tracking-wider">{stat.label}</span>
                      <span className="text-2xl font-bold text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Rapid Turnaround</h5>
                    <p className="text-xs text-white/50">Permitting process reduced by up to 30%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      {service?.subServices.map((sub, index) => (
        <SubServiceSection 
          key={sub.id} 
          subService={sub} 
          serviceSlug="environment"
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

export default EnvironmentDetail;
