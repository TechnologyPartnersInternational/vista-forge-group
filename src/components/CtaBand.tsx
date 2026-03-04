import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Placeholder image fitting the technical/industrial theme
const heroPlaceholderImg = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000";

const CtaBand = () => {
  return (
    <section className="bg-white py-24">
      <div className="px-6 md:px-12">
        <div className="relative w-full overflow-hidden rounded-[1rem] group h-[500px] lg:h-[600px] shadow-2xl">
          
          {/* Background Image with Slow Hover Scale */}
          <div className="absolute inset-0 z-0 bg-black">
            <img 
              src={heroPlaceholderImg} 
              alt="Partnership Impact" 
              className="w-full h-full object-cover opacity-80 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform group-hover:scale-105" 
            />
          </div>

          {/* Bottom-Left Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/50 to-transparent sm:bg-gradient-to-tr" />

          {/* Content Block Aligned Bottom-Left */}
          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-16 lg:p-24 pb-12 md:pb-20 max-w-4xl">
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold font-serif text-white leading-[1.2] mb-6">
              Ready to partner with Africa's leading technical consultancy?
            </h2>
            
            <p className="text-silver text-lg leading-relaxed mb-8 max-w-2xl">
              Whether you need an environmental assessment, laboratory analysis, or a full EPC solution, our team is ready to help.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-full bg-primary text-white hover:bg-primary/80 transition-colors duration-300 shadow-lg w-full sm:w-auto"
              >
                Request a Proposal <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaBand;
