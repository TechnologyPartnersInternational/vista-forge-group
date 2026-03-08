import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Clock, Share, Check, User, 
  MessageSquare, ArrowRight, Calendar 
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { insights } from "@/data/insights";
import InsightCard from "@/components/InsightCard";
import CtaBand from "@/components/CtaBand";

const InsightDetail = () => {
  const { id } = useParams();
  const insight = insights.find((i) => i.id === id);
  const [copied, setCopied] = useState(false);

  if (!insight) {
    return (
      <Layout>
        <div className="container-narrow section-padding text-center">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <Link to="/insights" className="text-primary mt-4 inline-block underline">Back to insights</Link>
        </div>
      </Layout>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categoryRelatedInsights = insights
    .filter((i) => i.category === insight.category && i.id !== insight.id)
    .slice(0, 4);

  const fallbackInsights = insights
    .filter((i) => i.id !== insight.id)
    .slice(0, 4);

  const hasRelated = categoryRelatedInsights.length > 0;
  const displayInsights = hasRelated ? categoryRelatedInsights : fallbackInsights;

  return (
    <Layout>
      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="bg-white pt-8 pb-12 px-4 md:px-10">
        <div className="w-full">
          <Link 
            to="/insights" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to insights</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Title Content */}
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {insight.type}
                </span>
                <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  {insight.readTime} Read
                </span>
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.15]">
                {insight.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {insight.excerpt}
              </p>
            </div>

            {/* Right Featured Image */}
            <div className="relative aspect-[16/10] md:aspect-[6/3] rounded-[2rem] overflow-hidden group shadow-2xl shadow-primary/5">
              <img 
                src={insight.bannerImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"} 
                alt={insight.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Hero Bottom Meta Bar */}
          <div className="mt-16 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-mist border border-border shrink-0 flex items-center justify-center">
                {insight.author?.image ? (
                  <img src={insight.author.image} alt={insight.author.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-8 h-8 text-muted-foreground/40" />
                )}
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">
                  {insight.author?.role || "Publication Team"}
                </span>
                <p className="text-lg font-bold text-foreground">
                  {insight.author?.name || "TPI Insights"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-right hidden md:block">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">Last updated</span>
                <p className="text-sm font-bold text-foreground">
                  {insight.lastUpdated || new Date(insight.date).toLocaleDateString("en-US", { month: 'long', year: 'numeric' })}
                </p>
              </div>
              <button 
                onClick={handleShare}
                className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white border border-border shadow-sm hover:border-primary transition-all group"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Check className="w-4 h-4 text-green-500" />
                    </motion.div>
                  ) : (
                    <Share className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  )}
                </AnimatePresence>
                <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">
                  {copied ? "Copied" : "Share"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content Grid ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              <div className="prose prose-gray max-w-none prose-p:text-lg prose-p:leading-relaxed prose-p:text-foreground/80">
                {insight.content.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-6 last:mb-0">{para}</p>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-border">
                <div className="flex flex-wrap gap-3">
                  {insight.category.split(",").map((tag, idx) => (
                    <span key={idx} className="px-4 py-2 bg-mist rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32">
                <div className="p-8 rounded-2xl bg-primary text-white shadow-2xl shadow-primary/20 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                  <div className="relative z-10 space-y-6">
                    <div className="p-3 bg-white/10 w-fit rounded-xl">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 leading-tight">Get in touch with our team</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Speak to one of our experts about the technical insights shared in this publication.
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
                
                <div className="mt-8 p-8 rounded-2xl border border-border bg-white shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Date Published</span>
                  </div>
                  <p className="text-sm font-bold text-foreground">
                    {new Date(insight.date).toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Insights Section ───────────────────────────────────── */}
      <section className="bg-white py-24 border-t border-border">
        <div className="w-full px-4 md:px-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary block">Related Analysis</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif">
                {hasRelated ? "Explore more insights" : "More from TPI Insights"}
              </h2>
              {!hasRelated && (
                <p className="text-muted-foreground text-sm italic">
                  There are currently no direct related insights for this topic, but you might find these interesting.
                </p>
              )}
            </div>
            <Link 
              to="/insights" 
              className="px-8 py-3.5 rounded-full border border-border font-bold text-[11px] uppercase tracking-widest hover:bg-primary transition-all hover:text-white"
            >
              See all analysis
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayInsights.map((i) => (
              <InsightCard key={i.id} insight={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
};

export default InsightDetail;
