import Layout from "@/components/layout/Layout";
import { insights } from "@/data/insights";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
// Replaced broken import with dummy image
const coastlineImage = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";;

const Insights = () => {
  const featured = insights.find((i) => i.featured);
  const rest = insights.filter((i) => !i.featured);

  return (
    <Layout>
      <section className="navy-gradient">
        <div className="container-narrow section-padding">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver mb-3">Knowledge</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Insights</h1>
            <p className="text-lg text-silver leading-relaxed">
              Technical perspectives, regulatory updates, and thought leadership from our team.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-narrow section-padding">
          {/* Featured */}
          {featured && (
            <Link to={`/insights/${featured.id}`} className="group relative block rounded-lg overflow-hidden mb-12 card-hover">
              <img src={coastlineImage} alt="" className="w-full h-72 md:h-96 object-cover" />
              <div className="hero-overlay absolute inset-0" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-foreground/20 text-primary-foreground rounded-full mb-3">{featured.category}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2 group-hover:text-gold transition-colors">{featured.title}</h2>
                <p className="text-silver max-w-2xl">{featured.excerpt}</p>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((ins) => (
              <Link key={ins.id} to={`/insights/${ins.id}`} className="group bg-card rounded-lg border border-border p-8 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary">{ins.category}</span>
                  <span className="text-xs text-muted-foreground">{ins.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{ins.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">{ins.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
