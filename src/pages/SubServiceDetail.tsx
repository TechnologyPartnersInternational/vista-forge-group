import { useParams, Link, Navigate } from "react-router-dom";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight, ArrowRight, Download } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import capabilityStatement from "@/assets/CompanyProfile/TPI-Company-Profile.pdf";

const SubServiceDetail = () => {
  const { serviceSlug, subServiceSlug } = useParams();

  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) return <Navigate to="/what-we-do" replace />;

  const subService = service.subServices.find((ss) => ss.slug === subServiceSlug);
  if (!subService) return <Navigate to={`/what-we-do/${serviceSlug}`} replace />;

  // Filter related projects based on subservice category or service
  const relatedProjects = projects.filter(p => 
    p.category.toLowerCase().includes(subService.title.toLowerCase()) || 
    p.service.toLowerCase() === service.title.toLowerCase()
  ).slice(0, 4);

  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={subService.image} 
            alt={subService.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 md:px-12">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex md:items-center flex-col md:flex-row gap-2 text-white/60 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap"
            >
              <Link to="/what-we-do" className="hover:text-primary transition-colors">What We Do</Link>
              <ChevronRight className="w-4 h-4 shrink-0 md:block hidden" />
              <Link to={`/what-we-do/${service.slug}`} className="hover:text-primary transition-colors">{service.title}</Link>
              <ChevronRight className="w-4 h-4 shrink-0 md:block hidden" />
              <span className="text-primary font-medium">{subService.title}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {subService.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl leading-relaxed"
            >
              {subService.shortDesc || `Deep technical expertise and sustainable solutions tailored for the ${service.title.toLowerCase()} sector.`}
            </motion.p>
          </div>
        </div>
      </section>

      {/* NEW Editorial Content Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                  How we can help you
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-light">
                  {subService.fullDesc}
                </p>

                {/* Featured Image with Caption */}
                <div className="mb-16">
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4 shadow-xl">
                    <img 
                      src={subService.image} 
                      alt={subService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-4 py-1">
                    {subService.title} — TPI provides comprehensive technical solutions with a focus on sustainable outcomes and regulatory compliance.
                  </p>
                </div>

                <div className="space-y-16">
                  <section>
                    <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6">Expertise and capabilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                      {subService.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 py-4 border-b border-border/50">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Why TPI Section - Integrated */}
                  <section className="bg-mist p-10 rounded-3xl border border-border/50">
                    <h3 className="text-2xl font-serif text-foreground mb-4">Why TPI?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      With over 30 years of operational experience across Africa, we combine global best practices with deep local knowledge. Our team of experts delivers results that are both world-class and context-aware, ensuring your projects meet the highest international standards while navigating local complexities with ease.
                    </p>
                  </section>
                </div>
              </motion.div>
            </div>

            {/* Sidebar / Related Links */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-12">
                {/* Download Block */}
                <div className="bg-mist rounded-3xl p-8 border border-border/50">
                  <h3 className="text-2xl font-serif text-foreground mb-4">Download</h3>
                  <p className="text-sm text-muted-foreground mb-8">
                    Read more about our {subService.title.toLowerCase()} capabilities in our comprehensive service brochure.
                  </p>
                  <a 
                    href={capabilityStatement} 
                    download="TPI-Capability-Statement.pdf"
                    className="flex items-center justify-between w-full p-4 bg-navy text-white rounded-xl hover:bg-primary transition-all group"
                  >
                    <span className="font-bold">Capability Statement</span>
                    <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                  </a>
                  
                </div>

                {/* Related Services */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">Related Services</h3>
                  <div className="flex flex-col gap-4">
                    {service.subServices
                      .filter((ss) => ss.slug !== subServiceSlug)
                      .slice(0, 4)
                      .map((ss) => (
                        <Link 
                          key={ss.slug} 
                          to={`/what-we-do/${service.slug}/${ss.slug}`}
                          className="group flex items-center justify-between py-4 border-b border-border/50 hover:border-primary transition-all"
                        >
                          <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors">{ss.title}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Quick Contact CTA */}
                <div className="bg-navy text-white rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                  <h3 className="text-2xl font-serif mb-4">Ready to start?</h3>
                  <p className="text-white/70 mb-8 text-sm leading-relaxed">
                    Discuss your project requirements with our specialist consultants.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-primary transition-all pb-1"
                  >
                    Contact an expert <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Discovery Section - Latest Work */}
      {relatedProjects.length > 0 && (
        <section className="bg-mist py-24 border-y border-border/50">
          <div className="w-full mx-auto px-4 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block">Projects</span>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground">Discover our latest work</h2>
              </div>
              <Link to="/projects" className="group flex items-center gap-2 py-3 px-6 bg-white rounded-full border border-border/50 hover:border-primary transition-all">
                <span className="font-bold text-sm">View all projects</span>
                <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center group-hover:bg-primary transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Expertise Links - Discovery */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <span className="text-sm font-light text-muted-foreground mb-4 block italic">Explore more of our expertise:</span>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {services.filter(s => s.slug !== serviceSlug).map(s => (
              <Link 
                key={s.slug} 
                to={`/what-we-do/${s.slug}`}
                className="text-lg md:text-xl font-serif text-foreground hover:text-primary transition-colors border-b border-border/30 hover:border-primary"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
};

export default SubServiceDetail;
