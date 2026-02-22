import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { environmentSubServices } from "@/data/services";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
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
      <section className="relative min-h-[50vh] flex items-end">
        <img src={environmentHero} alt="Environmental field assessment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-narrow section-padding pb-16">
          <Link to="/what-we-do" className="inline-flex items-center gap-1 text-sm text-silver hover:text-primary-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-[1.08] mb-4">
            Environment
          </h1>
          <p className="text-base md:text-lg text-silver leading-relaxed max-w-3xl">
            Decades of experience delivering environmental solutions that are feasible for our clients and sustainable for our future, across 10 specialist disciplines.
          </p>
        </div>
      </section>

      {/* Intro — two-column */}
      <section className="bg-mist">
        <div className="container-narrow section-padding">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-5/12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Overview</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Integrated environmental services, end to end
              </h2>
            </div>
            <div className="lg:w-7/12 flex items-center">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our fully integrated range of environmental and engineering services allows us to quickly and cost-effectively address our public and private clients' environmental issues. From initial feasibility through to decommissioning and restoration, TPI is your single point of accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
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
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img src={image} alt={sub.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <span className="text-sm font-semibold text-muted-foreground/50 block mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">{sub.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">{sub.fullDesc}</p>

                  <div className="flex flex-col gap-2.5">
                    {sub.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-foreground">{h}</span>
                      </div>
                    ))}
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Compliance you can count on
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Every environmental assessment and monitoring programme we deliver is aligned to international frameworks and local regulatory requirements.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  "IFC Performance Standards",
                  "World Bank Environmental & Social Framework",
                  "ISO 14001 Environmental Management",
                  "ISO 17025 Laboratory Accreditation",
                  "GHG Protocol / ISO 14064",
                  "Nigerian NESREA Regulations",
                ].map((std) => (
                  <div key={std} className="flex items-center gap-2 text-sm font-medium text-foreground">
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
                    <div className="text-lg font-semibold text-primary">{cert.value}</div>
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
          <div className="bg-primary rounded-xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              Ready to discuss your environmental challenge?
            </h2>
            <p className="text-base text-silver leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you need an ESIA, compliance monitoring programme, or full-scale site remediation, our team is ready to partner with you.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary-foreground text-primary hover:opacity-90 transition-opacity">
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EnvironmentDetail;
