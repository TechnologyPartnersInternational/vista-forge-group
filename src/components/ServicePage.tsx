import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import HowWeWork from "@/components/HowWeWork";
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
  heroIcon: HeroIcon,
  introHeading,
  introText,
  sections,
  ctaHeading = `Ready to discuss your ${title.toLowerCase()} needs?`,
  ctaText = `Our team of specialists is ready to partner with you on your next ${title.toLowerCase()} project.`,
}: ServicePageProps) => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-narrow section-padding pb-16">
          <Link to="/what-we-do" className="inline-flex items-center gap-1 text-sm text-silver hover:text-primary-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="flex items-start gap-5">
            <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <HeroIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.08] mb-4">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-silver leading-relaxed max-w-3xl">
                {subtitle}
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{introHeading}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{introText}</p>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        const Icon = section.icon;

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
                  <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{section.title}</h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">{section.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {section.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                    Discuss your needs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <HowWeWork />

      {/* CTA */}
      <section className="bg-card">
        <div className="container-narrow section-padding">
          <div className="bg-primary rounded-xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{ctaHeading}</h2>
            <p className="text-silver leading-relaxed mb-8 max-w-2xl mx-auto">{ctaText}</p>
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

export default ServicePage;
