import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Compass, Rocket, ShieldCheck, ArrowRight } from "lucide-react";

// Image imports from assets
import image1 from "@/assets/How we work/APAC036.jpg";
import image2 from "@/assets/How we work/ConstructionWorkersTalkingBuildingFrame.jpg";
import image3 from "@/assets/How we work/Hydrogeology3.jpg";
import image4 from "@/assets/How we work/shutterstock_343487897.jpg";

const steps = [
  {
    num: "01",
    title: "Align Objectives",
    desc: "We partner with your leadership and technical teams to clarify strategic objectives, success criteria, and stakeholder expectations across advisory, engineering, and digital domains. By mapping constraints, establishing risk reporting frameworks, and structuring proper project governance, we ensure absolute alignment with both business goals and strict regulatory standards (such as IFC, ESG guidelines, and local environmental laws) from day one.",
    icon: Target,
    image: image1,
  },
  {
    num: "02",
    title: "Strategic Design",
    desc: "Our specialists engineer the optimal delivery pathway: constructing detailed work programmes, outlining robust media sampling and analytical testing strategies for our ISO 17025-accredited labs, and designing multidisciplinary engineering or digital architecture solutions. We map asset integrity risks, define strict QA/QC protocols, and allocate elite technical resources,from field scientists and design engineers to IoT specialists,to guarantee scalable, compliant solutions.",
    icon: Compass,
    image: image2,
  },
  {
    num: "03",
    title: "Disciplined Delivery",
    desc: "We execute with absolute precision across all streams of work. On-site field teams manage complex site characterizations, compliance monitoring, and remediation, while our laboratory technicians process samples utilizing state-of-the-art instrumentation (AAS, GC). Simultaneously, our engineers deliver robust conceptual/FEED designs and asset inspections, while digital specialists deploy secure reporting platforms,all working seamlessly together to produce high-quality, data-driven outputs.",
    icon: Rocket,
    image: image3,
  },
  {
    num: "04",
    title: "Assure & Improve",
    desc: "We validate all results through internal quality checks, proficiency testing, and inter-laboratory comparisons to guarantee data integrity. We document methodologies to support effortless regulatory audits, empower your internal teams through customized technical training (ESG, HSE, Lab Instrumentation), and implement IoT-based monitoring or predictive analytics models to drive continuous improvement and long-term, sustainable asset compliance.",
    icon: ShieldCheck,
    image: image4,
  },
];

const HowWeWork = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className=" mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="w-full mb-16 flex flex-col items-start md:items-center justify-center">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 leading-tight md:text-center">
            How We Deliver Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl md:text-center">
            A repeatable, precision-driven delivery system that perfectly scales across advisory consulting, laboratory services, engineering execution, and digital transformation.
          </p>
        </div>

        {/* Interactive Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Tab List */}
          <div className="lg:col-span-4 flex flex-col gap-2 relative">
            {/* <div className="absolute left-[24px] top-4 bottom-4 w-px bg-border hidden lg:block" /> */}
            
            {steps.map((step, index) => {
              const isActive = index === activeStepIndex;
              const Icon = step.icon;
              
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStepIndex(index)}
                  className={`relative flex items-center gap-6 p-4 rounded-xl transition-all duration-300 text-left w-full group
                    ${isActive ? 'bg-white border border-border/50' : 'hover:bg-white/50 border border-transparent'}
                  `}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors duration-300
                    ${isActive ? 'bg-primary text-white' : 'bg-white border border-border text-muted-foreground group-hover:border-primary/30 group-hover:text-primary'}
                  `}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest block mb-1 transition-colors duration-300
                      ${isActive ? 'text-primary' : 'text-muted-foreground'}
                    `}>
                      Step {step.num}
                    </span>
                    <h3 className={`text-lg font-bold font-serif transition-colors duration-300
                      ${isActive ? 'text-foreground' : 'text-foreground/70'}
                    `}>
                      {step.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Content (Image + Text) */}
          <div className="lg:col-span-8 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full flex flex-col gap-8"
              >
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] rounded-2xl overflow-hidden bg-mist">
                  <img 
                    src={steps[activeStepIndex].image} 
                    alt={steps[activeStepIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
                
                <div className="flex-1 flex flex-col justify-center max-w-3xl">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                    {steps[activeStepIndex].title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {steps[activeStepIndex].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
