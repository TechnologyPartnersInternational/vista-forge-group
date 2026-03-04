import { Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";

const CtaBand = () => {
  return (
    <section className="navy-gradient">
      <div className="container-narrow section-padding text-center">
        <div className="max-w-2xl mx-auto">
          <Shield className="w-10 h-10 text-silver mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to partner with Africa's leading technical consultancy?
          </h2>
          <p className="text-silver leading-relaxed mb-8">
            Whether you need an environmental assessment, laboratory analysis, or a full EPC solution, our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md bg-primary-foreground text-primary hover:opacity-90 transition-opacity">
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-md border border-silver/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
