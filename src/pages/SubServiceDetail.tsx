import { useParams, Link, Navigate } from "react-router-dom";
import { services } from "@/data/services";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import CtaBand from "@/components/CtaBand";

const SubServiceDetail = () => {
  const { serviceSlug, subServiceSlug } = useParams();

  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) return <Navigate to="/what-we-do" replace />;

  const subService = service.subServices.find((ss) => ss.slug === subServiceSlug);
  if (!subService) return <Navigate to={`/what-we-do/${serviceSlug}`} replace />;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={subService.image} 
            alt={subService.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 md:px-12">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-white/60 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap"
            >
              <Link to="/what-we-do" className="hover:text-primary transition-colors">What We Do</Link>
              <ChevronRight className="w-4 h-4 shrink-0" />
              <Link to={`/what-we-do/${service.slug}`} className="hover:text-primary transition-colors">{service.title}</Link>
              <ChevronRight className="w-4 h-4 shrink-0" />
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
              Deep technical expertise and sustainable solutions tailored for the {service.title.toLowerCase()} sector.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-24">
        <div className="px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block p-1 bg-primary/10 rounded-lg mb-6">
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    {subService.icon ? (
                       <subService.icon className="w-6 h-6 text-primary" />
                    ) : (
                      <service.icon className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Service Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {subService.fullDesc}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-mist p-8 rounded-[2rem] border border-border/50">
                    <h3 className="text-xl font-bold text-foreground mb-6">Core Capabilities</h3>
                    <ul className="space-y-4">
                      {subService.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-6">
                    <div className="bg-navy text-white p-8 rounded-[2rem] flex-1">
                      <h3 className="text-xl font-bold mb-4">Why TPI?</h3>
                      <p className="text-white/70 leading-relaxed text-sm">
                        With over 30 years of operational experience across Africa, we combine global best practices with deep local knowledge to deliver results that are both world-class and context-aware.
                      </p>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-[2rem]">
                      <h3 className="text-xl font-bold text-primary mb-4">Compliance</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        All our services are delivered in strict adherence to international standards including ISO, IFC Performance Standards, and local NESREA/EGASPIN regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-mist rounded-[2rem] p-8 border border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-6">Related Services</h3>
                  <div className="flex flex-col gap-3">
                    {service.subServices
                      .filter((ss) => ss.slug !== subServiceSlug)
                      .slice(0, 5)
                      .map((ss) => (
                        <Link 
                          key={ss.slug} 
                          to={`/what-we-do/${service.slug}/${ss.slug}`}
                          className="group flex items-center justify-between p-4 bg-white rounded-xl border border-border/50 hover:border-primary hover:shadow-md transition-all"
                        >
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{ss.title}</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all" />
                        </Link>
                      ))}
                  </div>
                </div>

                <div className="bg-primary rounded-[2rem] p-8 text-white text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                  <p className="text-white/80 mb-8 text-sm">
                    Let's discuss how our {subService.title.toLowerCase()} capabilities can support your project goals.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-navy hover:text-white transition-all transform hover:-translate-y-1"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
};

export default SubServiceDetail;
