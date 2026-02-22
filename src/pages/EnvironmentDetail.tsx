import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { environmentSubServices } from "@/data/services";
import { ArrowLeft, ArrowRight, CheckCircle2, Leaf } from "lucide-react";
import { useState } from "react";
import environmentHero from "@/assets/environment-hero.jpg";

const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "10", label: "Specialist Disciplines" },
  { value: "200+", label: "Projects Delivered" },
  { value: "5", label: "Regional Offices" },
];

const EnvironmentDetail = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <img src={environmentHero} alt="Environmental field assessment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-narrow section-padding pb-16">
          <Link to="/what-we-do" className="inline-flex items-center gap-1 text-sm text-silver hover:text-primary-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="flex items-start gap-5">
            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Leaf className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.08] mb-4">
                Environment
              </h1>
              <p className="text-lg md:text-xl text-silver leading-relaxed max-w-3xl">
                Decades of experience delivering environmental solutions that are feasible for our clients and sustainable for our future — across 10 specialist disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-card border-b border-border">
        <div className="container-narrow py-10 px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-mist">
        <div className="container-narrow section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Integrated environmental services, end to end
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our fully integrated range of environmental and engineering services allows us to quickly and cost-effectively address our public and private clients' environmental issues. From initial feasibility through to decommissioning and restoration, TPI is your single point of accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-services grid */}
      <section className="bg-card">
        <div className="container-narrow section-padding">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Our Disciplines</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              10 specialist environmental disciplines
            </h2>
          </div>

          <div className="space-y-4">
            {environmentSubServices.map((sub) => {
              const isExpanded = expandedService === sub.id;
              return (
                <div
                  key={sub.id}
                  className={`rounded-lg border transition-all duration-300 ${
                    isExpanded ? "border-primary/30 bg-mist shadow-lg" : "border-border bg-card hover:border-primary/20"
                  }`}
                >
                  <button
                    onClick={() => setExpandedService(isExpanded ? null : sub.id)}
                    className="w-full flex items-start gap-4 p-6 md:p-8 text-left"
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-colors ${
                      isExpanded ? "bg-primary text-primary-foreground" : "bg-mist text-primary"
                    }`}>
                      <sub.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-semibold transition-colors ${
                        isExpanded ? "text-primary" : "text-foreground"
                      }`}>
                        {sub.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{sub.shortDesc}</p>
                    </div>
                    <div className={`shrink-0 mt-1 transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`}>
                      <span className="text-xl text-muted-foreground">+</span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 md:px-8 pb-8 animate-fade-in">
                      <div className="pl-14">
                        <div className="border-t border-border pt-6">
                          <p className="text-sm text-foreground leading-relaxed mb-6">
                            {sub.fullDesc}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {sub.highlights.map((h) => (
                              <div key={h} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-foreground">{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach methodology */}
      <section className="navy-gradient">
        <div className="container-narrow section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver mb-3">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              How we deliver environmental value
            </h2>
            <p className="text-silver leading-relaxed">
              A rigorous, evidence-based methodology applied across every environmental discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assess", desc: "Baseline studies, risk reviews, and regulatory context mapping to understand the full scope of environmental challenges." },
              { step: "02", title: "Measure", desc: "Precise data collection using accredited methods, IoT sensor networks, and field sampling across air, water, and soil." },
              { step: "03", title: "Interpret", desc: "Multidisciplinary expert analysis, fate & transport modelling, and scenario planning to guide decision-making." },
              { step: "04", title: "Act", desc: "Practical remediation, compliance programmes, and monitoring systems delivered to international standards." },
            ].map((p) => (
              <div key={p.step}>
                <div className="text-5xl font-black text-primary-foreground/10 mb-3">{p.step}</div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-silver leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & accreditations */}
      <section className="bg-mist">
        <div className="container-narrow section-padding">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Standards</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Compliance you can count on
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every environmental assessment and monitoring programme we deliver is aligned to international frameworks and local regulatory requirements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "IFC Performance Standards",
                  "World Bank Environmental & Social Framework",
                  "ISO 14001 Environmental Management",
                  "ISO 17025 Laboratory Accreditation",
                  "GHG Protocol / ISO 14064",
                  "Nigerian NESREA Regulations",
                ].map((std) => (
                  <div key={std} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {std}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                {[
                  { value: "ISO 14001", label: "Certified" },
                  { value: "ISO 17025", label: "Accredited" },
                  { value: "NESREA", label: "Compliant" },
                  { value: "IFC", label: "Aligned" },
                ].map((cert) => (
                  <div key={cert.value} className="bg-card border border-border rounded-lg p-6 text-center">
                    <div className="text-lg font-bold text-primary">{cert.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{cert.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card">
        <div className="container-narrow section-padding">
          <div className="bg-primary rounded-xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to discuss your environmental challenge?
            </h2>
            <p className="text-silver leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you need an ESIA, compliance monitoring programme, or full-scale site remediation, our team is ready to partner with you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary-foreground text-primary hover:opacity-90 transition-opacity">
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EnvironmentDetail;
