import { useState, useEffect, useCallback } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { insights } from "@/data/insights";
import { ArrowRight, MapPin, Shield, Users, Calendar, FlaskConical } from "lucide-react";
import HowWeWork from "@/components/HowWeWork";
import heroImage from "@/assets/hero-african-landscape.jpg";
import heroRiverDelta from "@/assets/hero-river-delta.jpg";
import heroEngineers from "@/assets/hero-engineers-pipeline.jpg";
import heroLaboratory from "@/assets/hero-laboratory.jpg";
import heroSavannah from "@/assets/hero-savannah-sunset.jpg";
import coastlineImage from "@/assets/african-coastline.jpg";
import projectRemediation from "@/assets/project-remediation.jpg";
import projectLng from "@/assets/project-lng.jpg";
import projectLab from "@/assets/project-lab.jpg";

const projectImages: Record<string, string> = {
  "niger-delta-remediation": projectRemediation,
  "lng-terminal-eia": projectLng,
  "industrial-lab-network": projectLab,
};

const heroSlides = [
  {
    image: heroImage,
    subtitle: "Environment · Laboratory · Engineering · Digital",
    title: "Trusted technical partners for Africa's most complex challenges",
    description: "Since 1992, TPI Group has delivered integrated environmental, laboratory, engineering, and digital solutions to the continent's leading operators and institutions.",
  },
  {
    image: heroRiverDelta,
    subtitle: "Environmental Stewardship",
    title: "Protecting Africa's ecosystems with science-driven solutions",
    description: "From baseline assessments to remediation, we safeguard critical natural resources across West Africa's most sensitive environments.",
  },
  {
    image: heroEngineers,
    subtitle: "Engineering & Asset Integrity",
    title: "Building and sustaining critical infrastructure across the continent",
    description: "Our multidisciplinary engineering teams deliver EPC solutions, asset integrity management, and pipeline services to international standards.",
  },
  {
    image: heroLaboratory,
    subtitle: "Accredited Laboratory Services",
    title: "Precision analysis powering confident decisions",
    description: "ISO 17025-accredited laboratories delivering reliable environmental, petroleum, and industrial testing with rapid turnaround.",
  },
  {
    image: heroSavannah,
    subtitle: "Three Decades of Impact",
    title: "Shaping sustainable futures across West Africa since 1992",
    description: "Over 500 projects delivered for the continent's leading operators, from oil & gas majors to government institutions and multilateral agencies.",
  },
];

const stats = [
  { icon: Calendar, value: "Since 1992", label: "Established" },
  { icon: MapPin, value: "5 Offices", label: "Across West Africa" },
  { icon: FlaskConical, value: "6 Service Lines", label: "Integrated Solutions" },
  { icon: Users, value: "500+", label: "Projects Delivered" },
];


const Index = () => {
  const featuredInsight = insights.find((i) => i.featured);
  const recentInsights = insights.filter((i) => !i.featured).slice(0, 3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentSlide + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, goToSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background images */}
        {heroSlides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 container-narrow section-padding pl-6 md:pl-12 lg:pl-20 xl:pl-32">
          <div className="max-w-3xl ml-0">
            <p
              key={`sub-${currentSlide}`}
              className="text-silver text-sm font-semibold uppercase tracking-[0.2em] mb-4 animate-fade-in"
            >
              {slide.subtitle}
            </p>
            <h1
              key={`title-${currentSlide}`}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.08] mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              {slide.title}
            </h1>
            <p
              key={`desc-${currentSlide}`}
              className="text-lg md:text-xl text-silver leading-relaxed max-w-2xl mb-10 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary-foreground text-primary hover:opacity-90 transition-opacity">
                Request a Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/what-we-do" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-md border border-silver/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                Explore Capabilities
              </Link>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex items-center gap-3 mt-12">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === currentSlide ? "w-10 bg-primary-foreground" : "w-4 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-card border-b border-border">
        <div className="container-narrow section-padding-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-mist">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Placeholder */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-wider text-center mb-6">Trusted by leading organisations</p>
            <div className="flex items-center justify-center gap-12 opacity-40 flex-wrap">
              {["Shell", "TotalEnergies", "NNPC", "Chevron", "NLNG", "Dangote"].map((name) => (
                <span key={name} className="text-sm font-semibold text-muted-foreground tracking-wide">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowWeWork />


      {/* Featured Case Studies */}
      <section className="navy-gradient">
        <div className="container-narrow section-padding">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver mb-3">Case Studies</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Featured Projects</h2>
            </div>
            <Link to="/projects" className="mt-4 md:mt-0 inline-flex items-center gap-1 text-sm font-medium text-silver hover:text-primary-foreground transition-colors">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="group bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg overflow-hidden hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={projectImages[p.id]}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="text-xs font-medium text-silver mb-3">{p.service} · {p.industry}</div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-3 group-hover:text-gold transition-colors">{p.title}</h3>
                  <p className="text-sm text-silver leading-relaxed">{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Insights */}
      <section className="bg-mist">
        <div className="container-narrow section-padding">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Insights</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Latest thinking</h2>
            </div>
            <Link to="/insights" className="mt-4 md:mt-0 inline-flex items-center gap-1 text-sm font-medium text-primary">
              View all insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured */}
            {featuredInsight && (
              <Link
                to={`/insights/${featuredInsight.id}`}
                className="group relative rounded-lg overflow-hidden card-hover"
              >
                <img src={coastlineImage} alt="" className="w-full h-80 object-cover" />
                <div className="hero-overlay absolute inset-0" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-foreground/20 text-primary-foreground rounded-full mb-3">
                    {featuredInsight.category}
                  </span>
                  <h3 className="text-xl font-semibold text-primary-foreground mb-2 group-hover:text-gold transition-colors">
                    {featuredInsight.title}
                  </h3>
                  <p className="text-sm text-silver line-clamp-2">{featuredInsight.excerpt}</p>
                </div>
              </Link>
            )}

            {/* Recent */}
            <div className="space-y-4">
              {recentInsights.map((ins) => (
                <Link
                  key={ins.id}
                  to={`/insights/${ins.id}`}
                  className="group flex gap-6 p-6 bg-card rounded-lg border border-border card-hover"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-primary">{ins.category}</span>
                      <span className="text-xs text-muted-foreground">{ins.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {ins.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{ins.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-card">
        <div className="container-narrow section-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Our Presence</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Offices across West Africa</h2>
            <p className="text-muted-foreground">
              With five offices spanning Nigeria and Guinea, we deliver local expertise with international standards.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Lagos", "Lekki", "Port Harcourt", "Warri", "Conakry"].map((city) => (
              <div key={city} className="flex items-center gap-2 px-5 py-3 bg-mist rounded-full border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="navy-gradient">
        <div className="container-narrow section-padding text-center">
          <div className="max-w-2xl mx-auto">
            <Shield className="w-10 h-10 text-silver mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to partner with Africa's leading technical consultancy?
            </h2>
            <p className="text-silver leading-relaxed mb-8">
              Whether you need an environmental assessment, laboratory analysis, or a full EPC solution, our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary-foreground text-primary hover:opacity-90 transition-opacity">
                Request a Proposal <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md border border-silver/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
