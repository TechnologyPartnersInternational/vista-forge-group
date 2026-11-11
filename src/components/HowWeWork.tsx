import { useRef, useState, type KeyboardEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// Image imports from assets
import image1 from "@/assets/How we work/Align Objectives pic.webp";
import image2 from "@/assets/How we work/Strategic Design pic.webp";
import image3 from "@/assets/How we work/Disciplined Delivery pictures.jpg";
import image4 from "@/assets/How we work/Assure & Improve pictures.jpg";

const steps = [
  {
    num: "01",
    title: "Align Objectives",
    desc: "We partner with your leadership and technical teams to clarify strategic objectives, success criteria, and stakeholder expectations across advisory, engineering, and digital domains. By mapping constraints, establishing risk reporting frameworks, and structuring proper project governance, we ensure absolute alignment with both business goals and strict regulatory standards (such as IFC, ESG guidelines, and local environmental laws) from day one.",
    image: image1,
  },
  {
    num: "02",
    title: "Strategic Design",
    desc: "Our specialists engineer the optimal delivery pathway: constructing detailed work programmes, outlining robust media sampling and analytical testing strategies for our ISO 17025-accredited labs, and designing multidisciplinary engineering or digital architecture solutions. We map asset integrity risks, define strict QA/QC protocols, and allocate elite technical resources,from field scientists and design engineers to IoT specialists,to guarantee scalable, compliant solutions.",
    image: image2,
  },
  {
    num: "03",
    title: "Disciplined Delivery",
    desc: "We execute with absolute precision across all streams of work. On-site field teams manage complex site characterizations, compliance monitoring, and remediation, while our laboratory technicians process samples utilizing state-of-the-art instrumentation (AAS, GC). Simultaneously, our engineers deliver robust conceptual/FEED designs and asset inspections, while digital specialists deploy secure reporting platforms,all working seamlessly together to produce high-quality, data-driven outputs.",
    image: image3,
  },
  {
    num: "04",
    title: "Assure & Improve",
    desc: "We validate all results through internal quality checks, proficiency testing, and inter-laboratory comparisons to guarantee data integrity. We document methodologies to support effortless regulatory audits, empower your internal teams through customized technical training (ESG, HSE, Lab Instrumentation), and implement IoT-based monitoring or predictive analytics models to drive continuous improvement and long-term, sustainable asset compliance.",
    image: image4,
  },
];

// Dotted rail drawn with a repeating radial gradient, so the dots take their
// colour from `currentColor` and can switch between "passed" and "upcoming".
const dottedRail = {
  backgroundImage: "radial-gradient(circle, currentColor 1.5px, transparent 1.75px)",
  backgroundSize: "4px 10px",
  backgroundRepeat: "repeat-y",
  backgroundPosition: "center top",
} as const;

const HowWeWork = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduceMotion = useReducedMotion();
  const active = steps[activeStepIndex];

  // Arrow keys / Home / End move between steps (WAI-ARIA tabs pattern).
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = steps.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = Math.min(activeStepIndex + 1, last);
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = Math.max(activeStepIndex - 1, 0);
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActiveStepIndex(next);
    tabRefs.current[next]?.focus();
  };

  const fade = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: reduceMotion ? 0 : -10 },
    transition: { duration: reduceMotion ? 0 : 0.35, ease: "easeOut" as const },
  };

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className=" mx-auto px-4 md:px-12">

        {/* Header */}
        <div className="w-full mb-16 flex flex-col items-start md:items-center justify-center">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight md:text-center">
            How We Deliver Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl md:text-center">
            A repeatable, precision-driven delivery system that perfectly scales across advisory consulting, laboratory services, engineering execution, and digital transformation.
          </p>
        </div>

        {/* Stepper on the left; image + description on the right.
            On large screens the stepper spans both rows, so step 4 lines up
            with the bottom of the description. */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(230px,300px)_1fr] gap-x-12 xl:gap-x-16 gap-y-8">

          {/* Stepper: 1 ··· 2 ··· 3 ··· 4 */}
          <div
            role="tablist"
            aria-label="Delivery steps"
            aria-orientation="vertical"
            onKeyDown={handleKeyDown}
            className="flex flex-col lg:row-span-2 lg:h-full"
          >
            {steps.map((step, index) => {
              const isActive = index === activeStepIndex;
              const isDone = index < activeStepIndex;

              return (
                <div key={step.num} className="contents">
                  <button
                    ref={(el) => (tabRefs.current[index] = el)}
                    id={`hww-tab-${index}`}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls="hww-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveStepIndex(index)}
                    className="group flex items-center gap-4 text-left rounded-full -ml-1 pl-1 pr-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold tabular-nums transition-all duration-300 ${
                        isActive
                          ? "border-primary bg-primary text-white ring-4 ring-primary/15"
                          : isDone
                            ? "border-primary bg-white text-primary"
                            : "border-border bg-white text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`text-lg leading-snug transition-colors duration-300 ${
                        isActive
                          ? "font-bold text-foreground"
                          : "font-semibold text-foreground/55 group-hover:text-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>

                  {/* Dotted connector: blue once the path has passed it */}
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      style={dottedRail}
                      className={`ml-[15px] w-2.5 h-7 lg:h-auto lg:flex-1 lg:min-h-7 my-1 transition-colors duration-500 ${
                        index < activeStepIndex ? "text-primary" : "text-border"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Image (shares a row with the stepper) */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2/1] rounded-2xl overflow-hidden bg-mist">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={activeStepIndex}
                {...fade}
                src={active.image}
                alt={active.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>

          {/* Description (under the image). All four are stacked in the same
              grid cell, so the area is always as tall as the longest one and
              the stepper beside it never shifts when the step changes. */}
          <div
            id="hww-panel"
            role="tabpanel"
            aria-labelledby={`hww-tab-${activeStepIndex}`}
            className="lg:col-start-2 grid max-w-4xl"
          >
            {steps.map((step, index) => {
              const isActive = index === activeStepIndex;
              return (
                <div
                  key={step.num}
                  aria-hidden={!isActive}
                  className={`[grid-area:1/1] transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 invisible pointer-events-none"
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary block mb-3">
                    Step {step.num} of {String(steps.length).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
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
