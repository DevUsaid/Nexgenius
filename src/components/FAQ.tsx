"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How can AI automation help my business?",
    answer: "AI automation streamlines operations by eliminating repetitive tasks. It can automate lead generation, instant customer support (via chatbots), financial reporting, data entry, and connect your software systems together. This allows your team to focus on high-value strategic work, saving both time and money."
  },
  {
    question: "What industries do you serve?",
    answer: "We build custom solutions for SaaS platforms, E-commerce stores, FinTech & Finance, Healthcare providers, and professional agencies. If your business uses digital tools and has workflows that follow repeatable rules, AI automation can work for you."
  },
  {
    question: "How long does it take to implement AI automation?",
    answer: "Simple automations (like chatbot setup or basic integrations) can be launched in 3-5 business days. Complex, enterprise-wide workflows usually take 2-4 weeks from discovery to deployment."
  },
  {
    question: "Is my data secure with AI automation?",
    answer: "Yes, security is a priority. We build using industry-standard API integrations with bank-grade encryption. We do not store your private business data on our servers; the automations run securely between your verified platforms."
  },
  {
    question: "Can I get a demo before committing?",
    answer: "Absolutely. We offer a free 30-minute discovery call and workflow audit where we outline exactly what we can automate for your business and demonstrate similar active workflows."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-28 py-24 px-6 border-t border-white/5 bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-primary mb-4">
            Answers
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Got questions about how AI automation works? We have answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/5 bg-brand-card/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-brand-primary/30"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-white text-lg transition-colors hover:text-brand-accent"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-brand-muted border-t border-white/5 bg-brand-dark/20 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
