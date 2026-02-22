import { Target, Compass, Rocket, ShieldCheck } from "lucide-react";
import howWeWorkBg from "@/assets/how-we-work-bg.jpg";

const steps = [
  {
    num: "01",
    title: "Align",
    desc: "We clarify objectives, success criteria, stakeholders, constraints, and timelines, then define the right scope and governance.",
    icon: Target,
  },
  {
    num: "02",
    title: "Design",
    desc: "We develop the method and plan: work programme, sampling/testing strategy, solution architecture, risk controls, and resourcing.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Deliver",
    desc: "We execute with discipline: field teams, labs, engineers, and digital teams working as one to produce high-quality outputs.",
    icon: Rocket,
  },
  {
    num: "04",
    title: "Assure & Improve",
    desc: "We validate results (QA/QC), document decisions, enable your teams (handover/training), and monitor outcomes for continuous improvement.",
    icon: ShieldCheck,
  },
];

const HowWeWork = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <img
        src={howWeWorkBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[hsl(var(--navy))]/85" />

      <div className="relative z-10 container-narrow section-padding">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            How We Work
          </h2>
          <p className="text-silver leading-relaxed">
            A repeatable delivery system that scales across advisory, laboratory
            services, engineering execution, and digital transformation.
          </p>
        </div>

        {/* Visual process flow */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 items-stretch">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col items-center text-center group">
                  {/* Glowing circle with icon */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150 group-hover:bg-primary/30 transition-colors" />
                    <div className="relative w-[120px] h-[120px] rounded-full border-2 border-primary/40 bg-[hsl(var(--navy))]/80 backdrop-blur-sm flex flex-col items-center justify-center gap-1 group-hover:border-primary/70 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-silver/60">
                        Step {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content card — flex-1 ensures equal height */}
                  <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 w-full flex-1 flex flex-col group-hover:border-primary/30 transition-colors">
                    <h3 className="text-xl font-bold text-primary-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-silver leading-relaxed flex-1">
                      {step.desc}
                    </p>
                  </div>
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
