import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Layout>
        <div className="container-narrow section-padding text-center">
          <h1 className="text-2xl font-bold text-foreground">Service not found</h1>
          <Link to="/what-we-do" className="text-primary mt-4 inline-block">Back to services</Link>
        </div>
      </Layout>
    );
  }

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <Layout>
      {/* Hero */}
      <section className="navy-gradient">
        <div className="container-narrow section-padding">
          <Link to="/what-we-do" className="inline-flex items-center gap-1 text-sm text-silver hover:text-primary-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="flex items-start gap-6">
            <service.icon className="w-12 h-12 text-silver shrink-0 mt-1" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{service.title}</h1>
              <p className="text-lg text-silver leading-relaxed max-w-3xl">{service.shortDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-card">
        <div className="container-narrow section-padding">
          <h2 className="text-2xl font-bold text-foreground mb-8">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-3 p-5 rounded-lg bg-mist border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground font-medium">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Service + CTA */}
      <section className="bg-mist">
        <div className="container-narrow section-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-card rounded-lg border border-border">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Next Service</p>
              <h3 className="text-xl font-bold text-foreground">{nextService.title}</h3>
            </div>
            <Link to={`/what-we-do/${nextService.slug}`} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Explore <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
