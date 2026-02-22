import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { insights } from "@/data/insights";
import { ArrowLeft, Clock } from "lucide-react";

const InsightDetail = () => {
  const { id } = useParams();
  const insight = insights.find((i) => i.id === id);

  if (!insight) {
    return (
      <Layout>
        <div className="container-narrow section-padding text-center">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <Link to="/insights" className="text-primary mt-4 inline-block">Back to insights</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-card">
        <div className="container-narrow section-padding">
          <div className="max-w-3xl mx-auto">
            <Link to="/insights" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> All Insights
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-mist text-primary rounded-full">{insight.category}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" /> {insight.readTime}
              </span>
              <span className="text-xs text-muted-foreground">{new Date(insight.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{insight.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{insight.excerpt}</p>
            <div className="silver-line mb-8" />
            <div className="prose prose-gray max-w-none">
              {insight.content.split("\n\n").map((para, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed mb-4">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InsightDetail;
