import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users, Briefcase, Target, Eye } from "lucide-react";
import Layout from "@/components/layout/Layout";
import LeaderCard from "@/components/LeaderCard";
import OurPresence from "@/components/OurPresence";
import CertificateCarousel from "@/components/CertificateCarousel";
import { leadership } from "@/data/team";
import heroBg from "@/assets/Projects/company-hero-bg.png";

const Company = () => {
  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="px-4 md:px-10 pt-8 pb-6 bg-mist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[2rem] overflow-hidden"
          style={{ minHeight: "340px" }}
        >
          <img
            src={heroBg}
            alt="TPI Company"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-14 py-16 md:py-20 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 self-start mb-5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Our Company
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              Building Africa's <br className="hidden md:block" />
              Technical Capacity
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-base text-white/80 leading-relaxed mb-8 max-w-lg"
            >
              A leading West African environmental, laboratory, and engineering 
              consultancy serving the continent's most critical industries since 1992.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30"
              >
                Learn Our Story <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── About TPI ──────────────────────────────────────────────────────── */}
      <section id="about" className="bg-white px-4 md:px-10 py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">
              Established 1992
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Three decades of excellence <br /> in technical consulting
            </h2>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
Welcome to Technology Partners International (TPI). We are a trusted provider of environmental, laboratory, waste management, and advanced asset integrity services. Since 1992, we have been delivering high-quality solutions to clients in Nigeria and across the world.
              </p>
              <p>
At Technology Partners International Nigeria Limited (TPI), excellence is our standard. We are proud to be both ISO/IEC 17025:2017–accredited and ISO 9001:2015–certified. These certifications reflect our commitment to global best practices in testing, measurement traceability, and quality management.
              </p>
              <p>
Our processes are designed with precision. From sample handling to final reporting, every step follows a strict quality control framework. This ensures that results are accurate, reliable, and transparent.
              </p>
              <p>
                We combine advanced methodologies with calibrated instruments and ongoing staff development. By doing so, we provide results that are reproducible and trustworthy, giving our clients full confidence in every project.
              </p>
              <p>
                At TPI, integrity and precision are not just values. They are the foundation of everything we do.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 h-full">
            <div className="p-8 rounded-2xl bg-mist border border-border/50 text-center flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-primary mb-1">200+</span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Professionals</span>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-xl shadow-mist border border-border/50 text-center flex flex-col items-center justify-center translate-y-4">
              <span className="text-3xl font-bold text-primary mb-1">30+</span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Years Exp</span>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-xl shadow-mist border border-border/50 text-center flex flex-col items-center justify-center -translate-y-4">
              <span className="text-3xl font-bold text-primary mb-1">5</span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Offices</span>
            </div>
            <div className="p-8 rounded-2xl bg-mist border border-border/50 text-center flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-primary mb-1">4</span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">ISO Certs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────────────────── */}
      <section className="px-4 md:px-10 py-20 bg-mist/30 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden group bg-white p-10 md:p-12 rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  "To provide innovative, cost-effective, and high-quality environmental solutions 
                  within the Sub-Saharan African region, with integrity and timely delivery."
                </p>
                
                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    At TPI, we are dedicated to delivering sustainable and affordable solutions 
                    that address the unique environmental challenges faced by investors and managers. 
                    Integrity is at the heart of everything we do.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden group navy-gradient p-10 md:p-12 rounded-[2rem] text-white shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/20 backdrop-blur-sm">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-white/90 leading-relaxed text-sm md:text-base">
                  "To become the leading environmental consultancy in Sub-Saharan Africa, 
                  recognized globally for integrity, innovation, and excellence in service delivery."
                </p>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-white/80 text-sm leading-relaxed">
                    We aim to make a lasting positive impact on our clients, the communities 
                    we serve, and the environment at large through innovative problem-solving 
                    and a dedication to excellence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Leadership ─────────────────────────────────────────────────────── */}
      <section id="leadership" className="px-4 md:px-10 py-20 bg-mist/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">Perspective</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Leadership Team</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member) => (
              <LeaderCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── QHSE Commitment ────────────────────────────────────────────────── */}
      <section id="qhse" className="bg-white px-4 md:px-10 py-20 border-t border-border/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Shield className="w-10 h-10 text-primary mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">QHSE Commitment</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Quality, Health, Safety, and Environment are embedded in our DNA. 
              Our integrated management system ensures consistent delivery standards
              across all operations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "ISO 17025:2017"].map((cert) => (
                <div key={cert} className="flex items-center gap-3 p-4 bg-mist rounded-xl border border-border/50">
                  <Award className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-xs font-bold text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 navy-gradient rounded-[2rem] p-10 lg:p-14 text-primary-foreground shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />
            <h3 className="text-2xl font-bold mb-6 relative z-10">Our HSE Policy</h3>
            <p className="text-silver leading-relaxed relative z-10 text-sm md:text-base">
              "TPI Group is committed to achieving the highest standards of health, 
              safety, and environmental performance. We believe that all incidents are 
              preventable, and we empower every team member to stop work if conditions 
              are unsafe. Our goal is zero harm to people and the environment."
            </p>
          </div>
        </div>
      </section>

      {/* ── Certificates Carousel ────────────────────────────────────────── */}
      <CertificateCarousel />

      {/* ── Locations (Our Presence) ────────────────────────────────────────── */}
      <OurPresence />

      {/* ── Join Our Team (Careers CTA) ─────────────────────────────────────── */}
      <section className="bg-white pt-10 pb-20">
        <div className="px-4 md:px-12">
          <div className="relative w-full overflow-hidden rounded-[2rem] group h-[500px] lg:h-[550px] shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-black">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
                alt="Careers at TPI" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-16 lg:p-20 pb-12 md:pb-16 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.2] mb-6">
                Shape Africa's technical <br className="hidden md:block" /> future with us.
              </h2>
              <p className="text-silver text-sm md:text-lg leading-relaxed mb-10 max-w-2xl">
                We're always looking for talented professionals who share our commitment 
                to technical excellence and sustainability. Explore opportunities across 
                our service lines.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-full bg-primary text-white hover:bg-primary/80 transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  View Open Roles <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                >
                  Talk to HR
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Company;
