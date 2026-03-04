import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

// Image imports
import projectRemediation from "@/assets/Featured Projects/20131028_173122-scaled.jpg";
import projectLng from "@/assets/Featured Projects/IMG-20230620-WA0013.jpg";
import projectLab from "@/assets/Featured Projects/file-13323803-870x580-1.png";

const projectImages: Record<string, string> = {
  "niger-delta-remediation": projectRemediation,
  "lng-terminal-eia": projectLng,
  "industrial-lab-network": projectLab,
};

const FeaturedProjects = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-3">Case Studies</p>
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-foreground">Featured Projects</h2>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link to="/projects" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors">
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[800px]">
          {/* Left side: Large featured project */}
          {projects[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-full"
            >
              <Link
                to={`/projects/${projects[0].id}`}
                className="group relative flex flex-col h-full bg-mist rounded-[1rem] overflow-hidden border border-border/50"
              >
                {/* Dynamic Image Overlay */}
                <div className="absolute top-0 left-0 w-full h-[300px] lg:h-[500px] group-hover:h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-0 overflow-hidden">
                  <img
                    src={projectImages[projects[0].id]}
                    alt={projects[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Intelligent gradient: Dark at bottom (behind text), transparent at top to preserve image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                
                {/* Spacer for natural height */}
                <div className="relative w-full h-[300px] lg:h-[500px] shrink-0 z-0 pointer-events-none" />
                
                {/* Content overlay */}
                <div className="relative z-10 p-8 md:p-10 flex-1 flex flex-col justify-center pointer-events-none">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-primary group-hover:text-gold transition-colors duration-500 mb-3">
                    {projects[0].service}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-sans text-foreground group-hover:text-white transition-colors duration-500 mb-4">
                    {projects[0].title}
                  </h3>
                  <p className="text-base text-muted-foreground group-hover:text-gray-200 leading-relaxed line-clamp-3 transition-colors duration-500">
                    {projects[0].summary}
                  </p>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Right side: 2 stacked smaller projects */}
          <div className="flex flex-col gap-8">
            {projects.slice(1, 3).map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
                className="flex-1"
              >
                <Link
                  to={`/projects/${p.id}`}
                  className="group relative flex flex-col sm:flex-row h-full bg-white border border-border/50 rounded-[1rem] overflow-hidden"
                >
                  {/* Dynamic Image Overlay */}
                  <div className="absolute top-0 left-0 w-full h-[250px] sm:h-full sm:w-[50%] group-hover:w-full group-hover:h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-0 overflow-hidden">
                    <img
                      src={projectImages[p.id]}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Intelligent gradient: Dark behind text, transparent where image is main focus */}
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  
                  {/* Spacer for natural height */}
                  <div className="relative w-full h-[250px] sm:h-auto sm:w-[50%] shrink-0 z-0 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8 flex-1 flex flex-col justify-center pointer-events-none">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-primary group-hover:text-gold transition-colors duration-500 mb-2 line-clamp-1">
                      {p.service}
                    </div>
                    <h3 className="text-xl font-bold font-sans text-foreground group-hover:text-white transition-colors duration-500 mb-3 line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-gray-200 leading-relaxed line-clamp-2 transition-colors duration-500">
                      {p.summary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
