import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { ArrowRight, ChevronRight } from "lucide-react";
import HowWeWork from "@/components/HowWeWork";
import engineersImage from "@/assets/engineers-fieldwork.jpg";

const WhatWeDo = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={engineersImage} alt="TPI engineers" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 container-narrow section-padding-sm">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver mb-3">Our Capabilities</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">What We Do</h1>
            <p className="text-lg text-silver leading-relaxed">
              Six integrated service lines working together to solve Africa's most complex environmental, industrial, and infrastructure challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-mist">
        <div className="container-narrow section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Link
                key={s.id}
                to={`/what-we-do/${s.slug}`}
                className="group bg-card rounded-lg p-10 card-hover border border-border"
              >
                <s.icon className="w-10 h-10 text-primary mb-6" />
                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.shortDesc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Explore service <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />

      {/* CTA */}
      <section className="navy-gradient">
        <div className="container-narrow section-padding text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Need a tailored solution?</h2>
          <p className="text-silver mb-8 max-w-xl mx-auto">Our team will work with you to scope the right combination of services for your project.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary-foreground text-primary hover:opacity-90 transition-opacity">
            Request a Proposal <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
