import Layout from "@/components/layout/Layout";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <Layout>
      <section className="navy-gradient">
        <div className="container-narrow section-padding">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver mb-3">Our Work</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Projects & Case Studies</h1>
            <p className="text-lg text-silver leading-relaxed">
              Evidence of impact — selected projects demonstrating our integrated approach to complex challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-narrow section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="group bg-card rounded-lg border border-border card-hover overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="font-medium text-primary">{p.service}</span>
                    <span>·</span>
                    <span>{p.industry}</span>
                    <span>·</span>
                    <span>{p.year}</span>
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{p.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">{p.problem}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {p.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <div className="text-xl font-bold text-foreground">{m.value}</div>
                        <div className="text-xs text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read case study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
