import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import HowWeWork from "@/components/HowWeWork";
import CtaBand from "@/components/CtaBand";
import { services, industries } from "@/data/services";

// Hero background
const heroImage =
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";

// Curated Unsplash images per service (order matches services array)
const serviceImages = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200", // Environment
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1200", // Laboratory
  "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=1200", // Waste Management
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200", // Digital
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200", // Training
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200", // EPC
];

// Industry images — keyed by industry.id
const industryImages: Record<string, string> = {
  "oil-gas":
    "https://images.unsplash.com/photo-1518709779341-56cf4535e94a?auto=format&fit=crop&q=80&w=800",
  manufacturing:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  infrastructure:
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
  government:
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
  mining:
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800",
  power:
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800",
  maritime:
    "https://images.unsplash.com/photo-1568989411459-f2ef3bfd8f4e?auto=format&fit=crop&q=80&w=800",
};

const WhatWeDo = () => {
  const [featuredService, ...otherServices] = services;
  const featuredImage = serviceImages[0];

  return (
    <Layout>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="px-4 md:px-10 pt-8 pb-6 bg-mist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[2rem] overflow-hidden"
          style={{ minHeight: "380px" }}
        >
          <img
            src={heroImage}
            alt="TPI engineers at work"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-14 py-16 md:py-24 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 self-start mb-5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Our Capabilities
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              Six Integrated{" "}
              <br className="hidden md:block" />
              Service Lines
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-base text-white/80 leading-relaxed mb-8 max-w-lg"
            >
              Working together to solve Africa's most complex environmental,
              industrial, and infrastructure challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#services-grid"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────────────── */}
      <section id="services-grid" className="bg-white py-24 overflow-hidden">
        <div className="px-4 md:px-12">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
                What We Do
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-sans text-foreground">
                Our Service Lines
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 md:mt-0 text-base text-muted-foreground max-w-sm leading-relaxed"
            >
              Integrated expertise spanning environment, laboratory, engineering,
              digital, and beyond.
            </motion.p>
          </div>

          {/* Featured + Side Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[780px]">

            {/* Left: Featured Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-full"
            >
              <Link
                to={`/what-we-do/${featuredService.slug}`}
                className="group relative flex flex-col h-full bg-mist rounded-[1.5rem] overflow-hidden border border-border/50 min-h-[420px]"
              >
                {/* Dynamic Image Overlay */}
                <div className="absolute top-0 left-0 w-full h-[280px] lg:h-[480px] group-hover:h-full transition-all duration-700 ease-custom z-0 overflow-hidden">
                  <img
                    src={featuredImage}
                    alt={featuredService.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Spacer */}
                <div className="relative w-full h-[280px] lg:h-[480px] shrink-0 z-0 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 flex-1 flex flex-col justify-center pointer-events-none">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <featuredService.icon className="w-5 h-5 text-primary group-hover:text-gold transition-colors duration-500" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary group-hover:text-gold transition-colors duration-500">
                      {featuredService.title}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-sans text-foreground group-hover:text-white transition-colors duration-500 mb-4">
                    {featuredService.shortDesc}
                  </h3>
                  {/* Sub-services list */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredService.subServices.slice(0, 4).map((sub) => (
                      <span
                        key={sub.slug}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-white/10 group-hover:text-white/80 transition-colors duration-500"
                      >
                        {sub.title}
                      </span>
                    ))}
                    {featuredService.subServices.length > 4 && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-white/10 group-hover:text-white/80 transition-colors duration-500">
                        +{featuredService.subServices.length - 4} more
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-gold transition-colors duration-500">
                    Explore service <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Right: 2×2 Smaller Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherServices.map((service, index) => {
                const imgSrc = serviceImages[index + 1];
                const Icon = service.icon;

                // Last card (EPC) — dark navy treatment instead of image
                const isLastCard = index === otherServices.length - 1;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                    className="flex-1"
                  >
                    {isLastCard ? (
                      // Dark navy card for EPC
                      <Link
                        to={`/what-we-do/${service.slug}`}
                        className="group relative flex flex-col h-full min-h-[180px] lg:min-h-0 rounded-[1.25rem] overflow-hidden navy-gradient p-6 lg:p-7 hover:-translate-y-1 transition-transform duration-300"
                      >
                        <div className="absolute top-3 right-4 text-[4rem] font-black text-white/5 leading-none select-none pointer-events-none">
                          06
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-primary-foreground/60 mb-2 block">
                          {service.title}
                        </span>
                        <h3 className="text-lg font-bold font-sans text-white leading-snug flex-1">
                          {service.shortDesc}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 group-hover:text-white transition-colors mt-4">
                          Explore <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    ) : (
                      // Image overlay card
                      <Link
                        to={`/what-we-do/${service.slug}`}
                        className="group relative flex flex-col h-full min-h-[180px] lg:min-h-0 bg-mist border border-border/50 rounded-[1.25rem] overflow-hidden"
                      >
                        {/* Dynamic Image */}
                        <div className="absolute top-0 left-0 w-full h-full group-hover:h-full transition-all duration-700 ease-custom z-0 overflow-hidden">
                          <img
                            src={imgSrc}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:via-black/50 transition-all duration-700" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-6">
                          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-[10px] font-bold tracking-widest uppercase text-primary group-hover:text-gold transition-colors duration-500 mb-1 block">
                            {service.title}
                          </span>
                          <h3 className="text-base font-bold font-sans text-white leading-snug line-clamp-2">
                            {service.shortDesc}
                          </h3>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-white/60 group-hover:text-white transition-colors duration-300 mt-3">
                            Explore <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ───────────────────────────────────────────── */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="px-4 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
                Sectors
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-sans text-foreground">
                Industries We Serve
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 md:mt-0 text-base text-muted-foreground max-w-sm leading-relaxed"
            >
              Delivering measurable outcomes across Nigeria, West Africa, and beyond.
            </motion.p>
          </div>

          {/* Image card grid — matches OurPresence style */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {industries.map((industry, index) => {
              const img = industryImages[industry.id];
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
                  className="group relative rounded-[1.25rem] overflow-hidden aspect-[3/4] bg-black cursor-default"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={img}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-custom group-hover:scale-110 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-500" />
                  </div>

                  {/* Center Title */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pointer-events-none transition-transform duration-500 ease-custom group-hover:-translate-y-6">
                    <h3 className="text-sm md:text-base font-bold text-white text-center leading-snug drop-shadow-md">
                      {industry.title}
                    </h3>
                  </div>

                  {/* Slide-up description */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-5 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-custom pointer-events-none text-center">
                    <p className="text-xs text-white/80 leading-relaxed">
                      {industry.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How We Work ───────────────────────────────────────────────────── */}
      <HowWeWork />

      {/* ── CTA Band ──────────────────────────────────────────────────────── */}
      <CtaBand />
    </Layout>
  );
};

export default WhatWeDo;
