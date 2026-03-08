import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import InsightCard from "@/components/InsightCard";
import { insights } from "@/data/insights";
import heroBg from "@/assets/Projects/insights-hero-bg.png";

// ── Filter constants ────────────────────────────────────────────────────────
const TYPE_FILTERS = ["All", "Article", "Issues", "Story", "News"] as const;
type TypeFilter = (typeof TYPE_FILTERS)[number];

const CATEGORY_CHIPS = [
  "Environmental Planning",
  "Compliance Monitoring",
  "Air Quality & Emissions",
  "Remediation",
  "Laboratory Services",
  "Climate & Sustainability",
];

const ALL_CATEGORIES = [
  ...CATEGORY_CHIPS,
  "Laboratory & Marine Science",
  "Site Assessment",
  "Laboratory Quality",
  "Waste Management",
  "Social & Health Impact",
  "Geophysical & Engineering",
];

// Placeholder image per insight type (used in the featured section)
const TYPE_IMAGES: Record<string, string> = {
  Article: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
  Issues:  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
  Story:   "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
  News:    "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=1200",
};

// ── Page ────────────────────────────────────────────────────────────────────
const Insights = () => {
  const [typeFilter,    setTypeFilter]    = useState<TypeFilter>("All");
  const [activeCat,     setActiveCat]     = useState<string | null>(null);
  const [showAllCats,   setShowAllCats]   = useState(false);
  const [showMoreMobile, setShowMoreMobile] = useState(false);
  const [searchTerm,    setSearchTerm]    = useState("");
  const [searchOpen,    setSearchOpen]    = useState(false);

  const visibleCats = showAllCats ? ALL_CATEGORIES : CATEGORY_CHIPS;

  const featured = insights.find((i) => i.featured);
  const latestFour = insights.slice(0, 4);

  const filtered = useMemo(
    () =>
      insights.filter((ins) => {
        const matchType  = typeFilter === "All" || ins.type === typeFilter;
        const matchCat   = !activeCat || ins.category === activeCat;
        const matchSearch =
          !searchTerm ||
          ins.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ins.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ins.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchType && matchCat && matchSearch;
      }),
    [typeFilter, activeCat, searchTerm]
  );

  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="px-4 md:px-10 pt-8 pb-6 bg-mist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[2rem] overflow-hidden"
          style={{ minHeight: "340px" }}
        >
          <img
            src={heroBg}
            alt="TPI Insights"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-14 py-16 md:py-20 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 self-start mb-5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Knowledge Hub
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              Expert Perspectives,{" "}
              <br className="hidden md:block" />
              Regulatory Clarity
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-base text-white/80 leading-relaxed mb-8 max-w-lg"
            >
              Technical articles, regulatory issues, field stories and news from
              TPI's environmental and laboratory specialists across Nigeria and
              West Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#insights-grid"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30"
              >
                Explore Insights <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Filter Bar ─────────────────────────────────────────────────────── */}
      <section
        id="insights-grid"
        className="px-4 md:px-10 pt-6 pb-4 bg-mist z-30 border-b border-border/50"
      >
        <div className="flex flex-col gap-3">
          {/* Row 1: Type tabs + Search */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              {TYPE_FILTERS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
                    ${
                      typeFilter === t
                        ? "bg-primary text-white shadow-sm shadow-primary/30"
                        : "bg-white text-foreground border border-border hover:border-primary/40"
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex items-center flex-shrink-0">
              <button
                onClick={() => setSearchOpen((v) => !v)}
                className="p-2 rounded-full hover:bg-white transition-colors text-muted-foreground hover:text-primary"
              >
                <Search className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {searchOpen && (
                  <motion.input
                    key="search"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    type="text"
                    placeholder="Search insights..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="absolute right-8 bg-white border border-border rounded-full px-3 py-1.5 text-xs outline-none focus:border-primary text-foreground placeholder:text-muted-foreground overflow-hidden"
                    autoFocus
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Row 2: Category chips */}
          <motion.div layout className="flex items-center gap-2 flex-wrap min-h-[32px]">
            <AnimatePresence mode="popLayout">
              {activeCat && (
                <motion.button
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setActiveCat(null)}
                  className="text-xs text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors flex-shrink-0"
                >
                  Clear
                </motion.button>
              )}

              {visibleCats.map((cat) => (
                <motion.button
                  key={cat}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setActiveCat(activeCat === cat ? null : cat)}
                  title={cat}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
                    transition-all duration-200 max-w-[200px] overflow-hidden flex-shrink-0
                    ${
                      activeCat === cat
                        ? "bg-primary text-white"
                        : "bg-white text-foreground border border-border hover:border-primary/50 hover:text-primary"
                    }`}
                >
                  {activeCat === cat && <span className="flex-shrink-0">✓</span>}
                  <span className="truncate">{cat}</span>
                </motion.button>
              ))}

              {/* Mobile Show more */}
              <motion.button
                layout
                key="mobile-toggle"
                onClick={() => setShowMoreMobile((v) => !v)}
                className="sm:hidden flex items-center gap-1 px-3 py-1 text-xs font-semibold text-primary border border-primary/30 rounded-full hover:bg-primary/5 transition-all duration-200 flex-shrink-0"
              >
                {showMoreMobile ? "Less" : `+${visibleCats.length - 2} more`}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showMoreMobile ? "rotate-180" : ""}`} />
              </motion.button>

              {/* Desktop See all */}
              <motion.button
                layout
                key="desktop-toggle"
                onClick={() => setShowAllCats((v) => !v)}
                className="hidden sm:flex items-center gap-1 px-3 py-1 text-xs font-semibold text-primary border border-primary/30 rounded-full hover:bg-primary/5 transition-all duration-200 flex-shrink-0"
              >
                {showAllCats ? "Show Less" : "...See all"}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showAllCats ? "rotate-180" : ""}`} />
              </motion.button>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Featured + Latest Insights ─────────────────────────────────────── */}
      <section className="bg-white px-4 md:px-10 py-10 border-b border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left: Featured big card */}
          {featured && (
            <Link
              to={`/insights/${featured.id}`}
              className="group relative block rounded-[1.25rem] overflow-hidden min-h-[360px] lg:min-h-[420px] shadow-md hover:shadow-xl transition-shadow duration-500"
            >
              <img
                src={TYPE_IMAGES[featured.type]}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

              {/* Featured badge */}
              <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest">
                Featured
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80 mb-2 block">
                  {featured.type} · {featured.category}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-3">
                  {featured.title}
                </h2>
                <p className="text-sm text-white/70 line-clamp-2 mb-4">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:text-gold transition-colors">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          )}

          {/* Right: Latest Insights list */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Latest Insights
            </h2>
            <div className="flex flex-col divide-y divide-border/60">
              {latestFour.map((ins) => (
                <Link
                  key={ins.id}
                  to={`/insights/${ins.id}`}
                  className="group flex flex-col gap-1 py-4 hover:bg-mist/30 transition-colors px-1 -mx-1 rounded-md"
                >
                  <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {ins.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/70">
                      {ins.type}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-[10px] text-muted-foreground">
                      {ins.readTime}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-[10px] text-muted-foreground">
                      {new Date(ins.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── All Insights Grid ──────────────────────────────────────────────── */}
      <section className="bg-white px-4 md:px-10 py-10">
        <motion.p layout className="text-sm text-muted-foreground mb-6">
          Showing{" "}
          <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "insight" : "insights"}
          {activeCat && (
            <>
              {" "}in{" "}
              <span className="font-semibold text-primary">{activeCat}</span>
            </>
          )}
        </motion.p>

        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
            >
              {filtered.map((insight, i) => (
                <motion.div
                  key={insight.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                  className="h-[420px]"
                >
                  <InsightCard insight={insight} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No insights found</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Try adjusting your filters or search term.
              </p>
              <button
                onClick={() => { setTypeFilter("All"); setActiveCat(null); setSearchTerm(""); }}
                className="mt-6 px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </Layout>
  );
};

export default Insights;
