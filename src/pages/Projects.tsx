import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/ProjectCard";
import InsightsSection from "@/components/InsightsSection";
import { projects } from "@/data/projects";
import heroBg from "@/assets/Projects/projects-hero-bg.png";

// ── Filter constants ───────────────────────────────────────────────────────
const STATUS_FILTERS = ["All", "Ongoing", "Completed"] as const;
type StatusFilter = (typeof STATUS_FILTERS)[number];

const CATEGORY_FILTERS = [
  "Environmental Planning & Management",
  "Environmental Compliance Monitoring (ECM)",
  "General Laboratory Services",
  "Remote & Mobile Laboratory Services",
  "Integrated Solid Waste Management (ISWM) system",
  "Incinerator",
];

const ALL_CATEGORIES = [
  ...CATEGORY_FILTERS,
  "Climate Change & GHG Reporting",
  "Health, Social Engagement & Resettlement",
  "Air Quality & Acoustics",
  "Clean-Up & Remediation",
  "Geophysical & Geotechnical",
  "GIS Services",
  "Digital Services",
];

// ── Page ───────────────────────────────────────────────────────────────────
const Projects = () => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [showAllCats, setShowAllCats] = useState(false);
  const [showMoreMobile, setShowMoreMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const visibleCats = showAllCats ? ALL_CATEGORIES : CATEGORY_FILTERS;

  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        const matchStatus =
          statusFilter === "All" ||
          (statusFilter === "Ongoing" && p.status === "ongoing") ||
          (statusFilter === "Completed" && p.status === "completed");
        const matchCat = !activeCat || p.category === activeCat;
        const matchSearch =
          !searchTerm ||
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.location.toLowerCase().includes(searchTerm.toLowerCase());
        return matchStatus && matchCat && matchSearch;
      }),
    [statusFilter, activeCat, searchTerm]
  );

  return (
    <Layout>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
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
            alt="TPI Projects"
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
              Our Projects
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              We Safeguard Environments,{" "}
              <br className="hidden md:block" />
              Empower Communities
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-base text-white/80 leading-relaxed mb-8 max-w-lg"
            >
              From Niger Delta remediation to ISO-accredited laboratory networks,
              our projects deliver measurable impact across Nigeria and West Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#projects-grid"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30"
              >
                Explore Projects <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Filter Bar ────────────────────────────────────────────────────── */}
      <section
        id="projects-grid"
        className="px-4 md:px-10 pt-6 pb-4 bg-mist z-30 border-b border-border/50"
      >
        <div className="flex flex-col gap-3">
          {/* Row 1: Status tabs + Search */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {STATUS_FILTERS.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
                    ${
                      statusFilter === s
                        ? "bg-primary text-white shadow-sm shadow-primary/30"
                        : "bg-white text-foreground border border-border hover:border-primary/40"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex items-center">
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
                    placeholder="Search projects..."
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
          <div className="flex items-center gap-2 flex-wrap">
            {activeCat && (
              <button
                onClick={() => setActiveCat(null)}
                className="text-xs text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors flex-shrink-0"
              >
                Clear
              </button>
            )}

            {visibleCats.map((cat, i) => {
              const hiddenOnMobile = i >= 2 && !showMoreMobile;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(activeCat === cat ? null : cat)}
                  title={cat}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
                    transition-all duration-200 max-w-[200px] overflow-hidden flex-shrink-0
                    ${hiddenOnMobile ? "hidden sm:flex" : ""}
                    ${
                      activeCat === cat
                        ? "bg-primary text-white"
                        : "bg-white text-foreground border border-border hover:border-primary/50 hover:text-primary"
                    }`}
                >
                  {activeCat === cat && <span className="flex-shrink-0">✓</span>}
                  <span className="truncate">{cat}</span>
                </button>
              );
            })}

            {/* Mobile-only Show more / less toggle */}
            <button
              onClick={() => setShowMoreMobile((v) => !v)}
              className="sm:hidden flex items-center gap-1 px-3 py-1 text-xs font-semibold text-primary border border-primary/30 rounded-full hover:bg-primary/5 transition-all duration-200 flex-shrink-0"
            >
              {showMoreMobile ? "Less" : `+${visibleCats.length - 2} more`}
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${showMoreMobile ? "rotate-180" : ""}`}
              />
            </button>

            {/* Desktop: See all / collapse */}
            <button
              onClick={() => setShowAllCats((v) => !v)}
              className="hidden sm:flex items-center gap-1 px-3 py-1 text-xs font-semibold text-primary border border-primary/30 rounded-full hover:bg-primary/5 transition-all duration-200 flex-shrink-0"
            >
              {showAllCats ? "Show Less" : "...See all"}
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${showAllCats ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* ── Projects Grid ─────────────────────────────────────────────────── */}
      <section className="bg-white px-4 md:px-10 py-10">
        <motion.p layout className="text-sm text-muted-foreground mb-6">
          Showing{" "}
          <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "project" : "projects"}
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
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                  className="h-[420px]"
                >
                  <ProjectCard project={project} />
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
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No projects found
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Try adjusting your filters or search term to find what you're
                looking for.
              </p>
              <button
                onClick={() => {
                  setStatusFilter("All");
                  setActiveCat(null);
                  setSearchTerm("");
                }}
                className="mt-6 px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── Insights Section ───────────────────────────────────────────────── */}
      <InsightsSection />
    </Layout>
  );
};

export default Projects;
