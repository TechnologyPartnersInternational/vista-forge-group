import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { environmentSubServices } from "@/data/services";
import { ArrowLeft, ArrowRight, CheckCircle2, Leaf } from "lucide-react";
import environmentHero from "@/assets/environment-hero.jpg";
import envPlanning from "@/assets/env-planning.jpg";
import envMonitoring from "@/assets/env-monitoring.jpg";
import envSiteAssessment from "@/assets/env-site-assessment.jpg";
import envClimate from "@/assets/env-climate.jpg";
import envSocial from "@/assets/env-social.jpg";
import envAirQuality from "@/assets/env-air-quality.jpg";
import envRemediation from "@/assets/env-remediation.jpg";
import envHydrology from "@/assets/env-hydrology.jpg";
import envGeophysical from "@/assets/env-geophysical.jpg";
import envGis from "@/assets/env-gis.jpg";

const subServiceImages: Record<string, string> = {
  "environmental-planning": envPlanning,
  "compliance-monitoring": envMonitoring,
  "site-assessment": envSiteAssessment,
  "climate-sustainability": envClimate,
  "health-social": envSocial,
  "air-quality": envAirQuality,
  "remediation": envRemediation,
  "hydrology": envHydrology,
  "geophysical": envGeophysical,
  "gis": envGis,
};

const EnvironmentDetail = () => {
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
                Decades of experience delivering environmental solutions that are feasible for our clients and sustainable for our future, across 10 specialist disciplines.
              </p>
            </div>
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

      {/* Sub-services — alternating image-rich sections */}
      {environmentSubServices.map((sub, index) => {
        const isEven = index % 2 === 0;
        const image = subServiceImages[sub.id];

        return (
          <section
            key={sub.id}
            id={sub.id}
            className={index % 4 < 2 ? "bg-card" : "bg-mist"}
          >
            <div className="container-narrow section-padding">
              <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}>
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src={image}
                      alt={sub.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Number badge */}
                    <div className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <sub.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{sub.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                    {sub.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {sub.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Discuss your {sub.title.toLowerCase()} needs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      

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
