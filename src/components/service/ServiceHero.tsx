import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
  category?: string;
}

const ServiceHero = ({ title, description, image, category = "Service Detail" }: ServiceHeroProps) => {
  return (
    <section className="px-4 md:px-10 pt-8 pb-6 bg-mist">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full rounded-[2rem] overflow-hidden"
        style={{ minHeight: "440px" }}
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-14 py-16 md:py-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6 mb-8"
          >
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Back to What We Do
            </Link>
            
            <span className="inline-flex items-center gap-1.5 self-start px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceHero;
