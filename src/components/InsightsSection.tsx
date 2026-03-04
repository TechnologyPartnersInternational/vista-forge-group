import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";

// Replaced broken import with dummy image
const coastlineImage = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";

const InsightsSection = () => {
  const featuredInsight = insights.find((i) => i.featured);
  const recentInsights = insights.filter((i) => !i.featured).slice(0, 3);

  return (
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
  );
};

export default InsightsSection;
