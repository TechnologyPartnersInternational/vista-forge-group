import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="container-narrow section-padding text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link to="/projects" className="text-primary mt-4 inline-block">Back to projects</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="navy-gradient">
        <div className="container-narrow section-padding">
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-silver hover:text-primary-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <div className="flex items-center gap-3 text-xs text-silver mb-4">
            <span>{project.service}</span><span>·</span><span>{project.industry}</span><span>·</span><span>{project.location}</span><span>·</span><span>{project.year}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground max-w-4xl">{project.title}</h1>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-card border-b border-border">
        <div className="container-narrow section-padding-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{m.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-mist">
        <div className="container-narrow section-padding">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">The Result</h2>
              <p className="text-muted-foreground leading-relaxed">{project.result}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
