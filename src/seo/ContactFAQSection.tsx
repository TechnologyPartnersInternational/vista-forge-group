import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { JsonLd, faqSchema } from './JsonLd';

interface FAQCategory {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

const contactFAQData: FAQCategory[] = [
  {
    title: 'Company and getting started',
    questions: [
      {
        question: 'What is Technology Partners International (TPI)?',
        answer:
          'Technology Partners International (TPI) is a premier environmental consultancy, technical engineering firm, and accredited analytical laboratory headquartered in Nigeria. With over 30 years of experience, we deliver end-to-end sustainable solutions for oil & gas, infrastructure, power, manufacturing, and mining projects across West Africa.',
      },
      {
        question: 'Who are TPI\'s environmental services designed for?',
        answer:
          'Environmental managers, HSE directors, compliance officers, facility and field teams, engineering consultants, and operations leaders in energy, mining, maritime, water utilities, and industrial manufacturing. Our services are built for enterprise operators proactively managing their environmental footprint and maintaining rigorous statutory compliance.',
      },
      {
        question: 'Which regulatory frameworks and standards does TPI support?',
        answer:
          'TPI is Nigeria-first: statutory frameworks including the EIA Act (Cap E12), NESREA regulations, NUPRC guidelines, and the NOSDRA Act are systematically embedded into our operations and reporting. Our compliance methodologies are citation-backed and verifiable. For projects involving international finance, we fully support IFC Performance Standards, Equator Principles, and the World Bank Environmental and Social Framework (ESF).',
      },
      {
        question: 'How do I get started with a project or consultation?',
        answer:
          'Request an initial scope evaluation or technical consultation through our enquiry form above. Because every operation is unique, onboarding is guided: a technical specialist from our consultancy, compliance, or analytical lab division will help review your operational brief, outline statutory requirements, and establish a clear implementation timeline.',
      },
      {
        question: 'Is TPI ISO certified across its service divisions?',
        answer:
          'Yes. TPI operates under internationally certified quality and environmental frameworks, holding ISO 14001:2015 for Environmental Management Systems, ISO 9001:2015 for Quality Management, ISO 45001:2018 for Occupational Health & Safety, and ISO/IEC 17025:2017 accreditation for laboratory testing and calibration.',
      },
    ],
  },
  {
    title: 'Consultancy and regulatory compliance',
    questions: [
      {
        question: 'What is an Environmental Impact Assessment (EIA) and how long does it take?',
        answer:
          'An EIA is an exhaustive evaluation of the potential environmental, socio-economic, and health impacts of a proposed development prior to execution. In Nigeria, completion typically ranges from 3 to 12 months depending on project scale and regulatory milestones. Leveraging our deep technical rigor and regulator familiarity, TPI maintains a 98% first-time permit approval success rate.',
      },
      {
        question: 'Why do I need routine environmental compliance monitoring?',
        answer:
          'Environmental Compliance Monitoring (ECM) ensures that operational discharges and ambient environmental conditions consistently remain within legal permissible limits for air, surface water, groundwater, and soil. Verifiable routine monitoring protects adjacent communities, prevents regulatory fines or shutdowns, and secures your social and legal license to operate.',
      },
      {
        question: 'Can TPI assist if my facility has identified compliance gaps or audit findings?',
        answer:
          'Absolutely. We conduct comprehensive diagnostic audits and gap analyses to assess organizational exposure. Our multidisciplinary engineers and environmental planners then formulate clear corrective action plans, implement necessary technical remediation, and liaise directly with regulatory authorities like NESREA or NUPRC to restore full operational compliance.',
      },
      {
        question: 'Does TPI deploy continuous real-time environmental monitoring systems?',
        answer:
          'Yes. We engineer and deploy advanced automated Air Quality Monitoring Systems (AQMS) and Continuous Emission Monitoring Systems (CEMS) powered by telemetry and IoT sensors. These solutions provide real-time data streams for critical operational oversight and early exceedance detection.',
      },
    ],
  },
  {
    title: 'Laboratory analysis and technical operations',
    questions: [
      {
        question: 'What environmental matrices and samples does TPI\'s laboratory analyze?',
        answer:
          'Our ISO/IEC 17025 accredited laboratory facility analyzes potable and non-potable water, soil and sediment, atmospheric air, crude oil, refined petroleum products, industrial effluents, hazardous sludges, and biological tissue (plankton, benthic fauna). We execute high-precision physicochemical, heavy metal, nutrient, organic compound, and ecotoxicity testing.',
      },
      {
        question: 'Does TPI provide mobile field laboratories for remote project locations?',
        answer:
          'Yes. We deploy ruggedized, fully equipped mobile laboratory units directly to remote onshore mining sites, riverine environments, and offshore exploration platforms across West Africa. These specialized units offer rapid field testing—providing verified preliminary analytical data within hours for mission-critical decision-making.',
      },
      {
        question: 'How does TPI manage hazardous waste and thermal desorption operations?',
        answer:
          'TPI designs, builds, and manages industrial-scale Thermal Desorption Units (TDU) and high-temperature incineration systems. We treat hydrocarbon-contaminated soils, oil-based drill cuttings, chemical waste, and biomedical sludge, utilizing strict secondary emission controls to guarantee environmental safety and compliance.',
      },
    ],
  },
];

const ContactFAQSection = () => {
  // Default second item of first category open ('0-1'), matching the reference design layout
  const [openKey, setOpenKey] = useState<string | null>('0-1');

  const toggle = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  // Flatten FAQs for structured JSON-LD SEO schema
  const allFaqs = contactFAQData.flatMap((cat) => cat.questions);

  return (
    <section className="bg-white px-4 md:px-32 py-20 md:py-28">
      <JsonLd data={faqSchema(allFaqs)} />
      <div className=" mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-20">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary block mb-3">
            Frequently Asked
          </span>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight mb-6 leading-[1.1]">
            Questions, answered plainly.
          </h2>
          <p className="text-base md:text-lg text-foreground leading-relaxed font-normal">
            What Technology Partners International is, how regulatory compliance flows, how testing samples are managed, and what happens when you start. If your question is not here, ask us directly.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-4">
          {contactFAQData.map((category, catIndex) => (
            <div
              key={catIndex}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 md:py-14 border-t border-[#D5E4DF]"
            >
              {/* Left Column: Category Title */}
              <div className="lg:col-span-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight sticky top-24">
                  {category.title}
                </h3>
              </div>

              {/* Right Column: Accordion Questions */}
              <div className="lg:col-span-8" role="list">
                {category.questions.map((faq, qIndex) => {
                  const key = `${catIndex}-${qIndex}`;
                  const isOpen = openKey === key;

                  return (
                    <div
                      key={qIndex}
                      role="listitem"
                      className="border-b border-[#DCE8E3] last:border-b-0 pb-6 mb-6 last:pb-0 last:mb-0 transition-colors"
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-start justify-between text-left gap-6 group py-1 outline-none"
                        aria-expanded={isOpen}
                        aria-controls={`faq-ans-${key}`}
                        id={`faq-qst-${key}`}
                      >
                        <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-foreground shrink-0 mt-1 transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-primary' : ''
                          }`}
                        />
                      </button>
                      <div
                        id={`faq-ans-${key}`}
                        role="region"
                        aria-labelledby={`faq-qst-${key}`}
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-[500px] opacity-100 mt-3.5' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-sm md:text-base text-foreground leading-relaxed pr-6 font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactFAQSection;
