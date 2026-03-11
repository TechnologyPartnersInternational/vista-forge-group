import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface SubService {
  id: string;
  slug: string;
  title: string;
  shortDesc?: string;
  fullDesc: string;
  highlights: string[];
  image: string;
}

interface SubServiceSectionProps {
  subService: SubService;
  serviceSlug: string;
  index: number;
}

const SubServiceSection = ({ subService, serviceSlug, index }: SubServiceSectionProps) => {
  const isEven = index % 2 === 0;

  return (
    <section 
      id={subService.id}
      className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-mist"}`}
    >
      <div className="px-4 md:px-12">
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}>
          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10">
              <img 
                src={subService.image} 
                alt={subService.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
              {String(index + 1).padStart(2, "0")} / Capability
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {subService.title}
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              {subService.shortDesc || subService.fullDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {subService.highlights.map((highlight, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + (idx * 0.05) }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80 leading-snug">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12"
            >
              <Link 
                to={`/what-we-do/${serviceSlug}/${subService.slug}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-full hover:bg-primary transition-all group shadow-lg shadow-navy/10"
              >
                Explore Capability <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubServiceSection;
