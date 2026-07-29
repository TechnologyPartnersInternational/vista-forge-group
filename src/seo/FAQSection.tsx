import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { JsonLd, faqSchema } from './JsonLd';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

/**
 * Reusable FAQ accordion with embedded FAQPage JSON-LD schema.
 * Styled to match TPI's existing design system.
 */
const FAQSection = ({
  title = 'Frequently Asked Questions',
  subtitle,
  faqs,
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-4 md:px-10 py-20">
      <JsonLd data={faqSchema(faqs)} />
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-3" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                role="listitem"
                className="bg-white rounded-2xl border border-border/50 overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4 group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <h3 className="text-sm md:text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
