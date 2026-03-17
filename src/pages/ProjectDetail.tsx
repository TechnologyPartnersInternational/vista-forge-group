import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Share, MapPin, Briefcase, Users, 
  Check, MessageSquare, ArrowRight, Loader2 
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import { api } from "@/lib/api";
import { projects as staticProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import CtaBand from "@/components/CtaBand";

const ProjectDetail = () => {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  // Fetch project from API
  const { data: apiProject, isLoading } = useQuery({
    queryKey: ['project', id],
    queryFn: () => api.getProjectById(id!),
    enabled: !!id,
    retry: 1,
  });

  // Fetch all projects for related section
  const { data: apiAllProjects } = useQuery({
    queryKey: ['projects'],
    queryFn: api.getProjects,
    retry: 1,
  });

  // Effective project data (API or Static)
  const project = useMemo(() => {
    return apiProject || staticProjects.find((p) => p.id === id);
  }, [apiProject, id]);

  // Effective all projects for related calculations
  const allProjects = useMemo(() => {
    if (!apiAllProjects || apiAllProjects.length === 0) return staticProjects;
    const apiIds = new Set(apiAllProjects.map(p => p.id));
    return [...apiAllProjects, ...staticProjects.filter(p => !apiIds.has(p.id))];
  }, [apiAllProjects]);

  const staticProject = staticProjects.find((p) => p.id === id);

  if (isLoading && !staticProject) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="container-narrow section-padding text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link to="/projects" className="text-primary mt-4 inline-block underline">Back to projects</Link>
        </div>
      </Layout>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedProjects = allProjects
    .filter((p) => p.service === project.service && p.id !== project.id)
    .slice(0, 4);

  return (
    <Layout>
      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="px-4 md:px-10 pt-8 pb-12 bg-white">
        <div className="relative w-full rounded-[2rem] overflow-hidden min-h-[500px] md:min-h-[600px] group">
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <div className="absolute inset-0 z-10 p-8 md:p-16 flex flex-col justify-between">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group/back"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover/back:-translate-x-1" />
              <span className="text-sm font-medium">Back to projects</span>
            </Link>

            <div className="max-w-4xl space-y-6">
              <div className="space-y-2">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em]">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                  {project.title}
                </h1>
                {project.subtitle && (
                  <p className="text-xl md:text-2xl text-silver/90 font-medium font-serif italic">
                    {project.subtitle}
                  </p>
                )}
              </div>

              {/* Meta Stats Bar */}
              <div className="pt-8 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 block">Location</span>
                  <div className="flex items-center gap-2 text-white font-medium">
                    <MapPin className="w-4 h-4 text-primary" />
                    {project.location}
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 block">Industry</span>
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Briefcase className="w-4 h-4 text-primary" />
                    {project.industry}
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 block">Client</span>
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Users className="w-4 h-4 text-primary" />
                    {project.client}
                  </div>
                </div>
                
                <button 
                  onClick={handleShare}
                  className="ml-auto flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all group/share"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share className="w-4 h-4 text-white" />}
                  <span className="text-xs font-bold uppercase tracking-widest text-white">
                    {copied ? "Copied" : "Share"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content Grid ────────────────────────────────────────────────── */}
      <section className="px-4 md:px-10 py-10 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
            
            {/* Left Column: Rich Content */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Introduction */}
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                  {project.summary}
                </p>
                <div className="h-px bg-border w-24" />
                <div className="grid grid-cols-1 gap-12">
                  <div className="space-y-4">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-6">
                      {project.problem}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary">The Result</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Content Blocks */}
              {project.mainContent?.map((block, idx: number) => (
                <div key={idx} className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {block.heading}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                    {block.text}
                  </p>
                </div>
              ))}

              {/* Testimonial */}
              {project.testimonial && project.testimonial.quote && (
                <div className="p-10 md:p-14 bg-mist rounded-[2rem] border border-border/50 relative overflow-hidden">
                  <span className="absolute top-8 right-10 text-9xl font-serif text-primary/10 select-none">“</span>
                  <blockquote className="relative z-10 space-y-8">
                    <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed">
                      {project.testimonial.quote}
                    </p>
                    <footer className="flex items-center gap-4">
                      <div className="w-12 h-px bg-primary" />
                      <div>
                        <cite className="not-italic font-bold text-sm block">{project.testimonial.author}</cite>
                        <span className="text-xs text-muted-foreground">{project.testimonial.role}</span>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              )}

              {/* Final Conclusion */}
              <div className="space-y-6">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* Collaborators */}
              {project.collaborators && project.collaborators.length > 0 && (
                <div className="pt-12 border-t border-border">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-6">Partners & Collaborators</span>
                  <p className="text-xs font-medium text-muted-foreground flex flex-wrap gap-x-4 gap-y-2 uppercase tracking-wide">
                    {project.collaborators.join(" / ")}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 space-y-8 relative">
              
              {/* Delivered List */}
              {project.delivered && project.delivered.length > 0 && (
                <div className="p-8 rounded-2xl border border-border bg-white shadow-sm space-y-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground">What we delivered</h4>
                  <ul className="space-y-4">
                    {project.delivered.map((item: string, idx: number) => (
                      <li key={idx} className="flex gap-3 text-sm text-muted-foreground leading-snug">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Services Section */}
              <div className="p-8 rounded-2xl border border-border bg-white shadow-sm space-y-4">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground">Industry & Service</h4>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-foreground">Environmental Consulting</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{project.service} / {project.industry}</p>
                </div>
              </div>

              {/* Sticky Get in Touch Card Wrapper */}
              <div className="sticky top-28">
                <div className="p-8 rounded-2xl bg-primary text-white shadow-2xl shadow-primary/20 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                  <div className="relative z-10 space-y-6">
                    <div className="p-3 bg-white/10 w-fit rounded-xl">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 leading-tight">Get in touch with our team</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Speak to one of our regional experts about similar projects or technical requirements.
                      </p>
                    </div>
                    <Link 
                      to="/contact"
                      className="flex items-center justify-between w-full px-6 py-4 rounded-xl bg-white text-primary font-bold text-sm hover:bg-silver transition-colors group"
                    >
                      Contact our experts
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── Explore More Section ────────────────────────────────────────── */}
      <section className="px-4 md:px-10 py-24 bg-white">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary block">Case Studies</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif">Explore more {project.service.toLowerCase()} projects</h2>
            </div>
            <Link 
              to="/projects" 
              className="px-8 py-3.5 rounded-full border border-border font-bold text-[11px] uppercase tracking-widest hover:bg-primary transition-all hover:text-white"
            >
              See all projects
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
};

export default ProjectDetail;
