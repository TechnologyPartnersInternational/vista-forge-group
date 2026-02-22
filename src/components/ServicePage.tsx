import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceSection {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  icon: LucideIcon;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroIcon: LucideIcon;
  introHeading: string;
  introText: string;
  sections: ServiceSection[];
  ctaHeading?: string;
  ctaText?: string;
}

const ServicePage = ({
  title,
  subtitle,
  heroImage,
  introHeading,
  introText,
  sections,
  ctaHeading = `Ready to discuss your ${title.toLowerCase()} needs?`,
  ctaText = `Our team of specialists is ready to partner with you on your next ${title.toLowerCase()} project.`,
}: ServicePageProps) => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end">
        <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-narrow section-padding pb-16">
          <Link to="/what-we-do" className="inline-flex items-center gap-1 text-sm text-silver hover:text-primary-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="w-12 h-0.5 bg-primary mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-[1.08] mb-4">
            {title}
          </h1>
          <p className="text-base md:text-lg text-silver leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Intro — two-column */}
      <section className="bg-mist">
        <div className="container-narrow section-padding">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-5/12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Overview</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">{introHeading}</h2>
            </div>
            <div className="lg:w-7/12 flex items-center">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{introText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={section.id}
            id={section.id}
            className={index % 4 < 2 ? "bg-card" : "bg-mist"}
          >
            <div className="container-narrow section-padding">
              <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}>
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <span className="text-sm font-semibold text-muted-foreground/50 block mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">{section.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">{section.description}</p>

                  <div className="flex flex-col gap-2.5">
                    {section.highlights.map((h) => (
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

      {/* CTA */}
      <section className="bg-card">
        <div className="container-narrow section-padding">
          <div className="bg-primary rounded-xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">{ctaHeading}</h2>
            <p className="text-base text-silver leading-relaxed mb-8 max-w-2xl mx-auto">{ctaText}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary-foreground text-primary hover:opacity-90 transition-opacity">
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
