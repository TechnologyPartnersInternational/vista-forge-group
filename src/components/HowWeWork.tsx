import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Compass, Rocket, ShieldCheck } from "lucide-react";

// Image imports from assets
import image1 from "@/assets/How we work/APAC036.jpg";
import image2 from "@/assets/How we work/ConstructionWorkersTalkingBuildingFrame.jpg";
import image3 from "@/assets/How we work/Hydrogeology3.jpg";
import image4 from "@/assets/How we work/shutterstock_343487897.jpg";

const steps = [
  {
    num: "01",
    title: "Align Objectives",
    desc: "We clarify objectives, success criteria, stakeholders, constraints, and timelines, then define the right scope and governance structure to ensure absolute alignment from day one.",
    icon: Target,
    image: image1,
  },
  {
    num: "02",
    title: "Strategic Design",
    desc: "We develop the method and plan: constructing the work programme, outlining sampling and testing strategies, designing solution architecture, mapping risk controls, and allocating resources.",
    icon: Compass,
    image: image2,
  },
  {
    num: "03",
    title: "Disciplined Delivery",
    desc: "We execute with precision. Our field teams, laboratory technicians, engineers, and digital specialists work seamlessly as one unit to produce high-quality, actionable outputs.",
    icon: Rocket,
    image: image3,
  },
  {
    num: "04",
    title: "Assure & Improve",
    desc: "We validate all results through rigorous QA/QC protocols, carefully document methodologies, enable your internal teams via comprehensive handover training, and monitor continuous improvement.",
    icon: ShieldCheck,
    image: image4,
  },
];

const HowWeWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the entire timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map progress (0 to 1) to height percentage (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-white relative overflow-hidden" ref={containerRef}>
      <div className="px-6 pt-12">
        
        {/* Header */}
        <div className="w-full mb-16 md:mb-24 flex flex-col items-center justify-center">
          <p className="text-[16px] font-semibold text-primary uppercase tracking-[0.3em] mb-4">
            Our Methodology
          </p>
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-6 leading-[1.1]">
            How We Deliver Excellence
          </h2>
          <p className="text-lg leading-relaxed max-w-4xl text-center">
            A repeatable, precision-driven delivery system that perfectly scales across advisory consulting, laboratory
            services, engineering execution, and digital transformation.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-8 md:pl-16">
          
          {/* Default Gray Background Line */}
          <div className="absolute top-0 bottom-0 left-[15px] md:left-[31px] w-[2px] bg-border" />
          
          {/* Dynamic Blue Fill Line */}
          <motion.div 
            className="absolute top-0 left-[15px] md:left-[31px] w-[2px] bg-primary origin-top"
            style={{ height: lineHeight }}
          />

          {/* Timeline Steps */}
          <div className="flex flex-col gap-24 md:gap-32 pb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">
                  
                  {/* Timeline Node (The Circle on the line) */}
                  <div className="absolute -left-[32px] md:-left-[48px] top-6 lg:top-1/2 lg:-translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center z-20 transition-colors duration-500">
                     {/* Inner active dot - becomes visible as line passes it */}
                     <motion.div 
                        className="w-full h-full rounded-full bg-primary"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ margin: "0px 0px -20% 0px" }}
                        transition={{ 
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                     />
                  </div>

                  {/* Left Side: Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 pt-2 lg:pt-0"
                  >
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-mist">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-bold text-primary tracking-widest uppercase">
                        Step {step.num}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Right Side: Rounded Image */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-1/2 "
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-black rounded-[2rem] relative group">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HowWeWork;
