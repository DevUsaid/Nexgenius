'use client';

import { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Where should we start with AI?',
      answer: 'Start with a repeatable process, not a tool. We help identify a practical use case, assess your data and integrations, and define a focused pilot with clear success criteria and human oversight.',
    },
    {
      question: 'Can you work with our existing software and team?',
      answer: 'Yes. We integrate directly with your current technology stack, internal engineering talent, and workflow tools, ensuring seamless continuity and zero disruption.',
    },
    {
      question: 'How are project scope, timelines and pricing decided?',
      answer: 'We establish transparent, milestone-based scopes for fixed projects or flexible sprint iterations for dedicated partnerships with complete visibility at every stage.',
    },
    {
      question: 'Who owns the software and source code?',
      answer: 'You own 100% of all intellectual property, source code, architecture configurations, and data models upon project handover.',
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes, we provide continuous care, proactive monitoring, SLA-backed uptime, security updates, and ongoing improvements to keep your systems running smoothly.',
    },
  ];

  return (
    <section id="faq" className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: FAQ Introduction */}
          <div className="lg:col-span-5 flex flex-col items-start max-w-[420px]">
            <div className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-[#14532D] mb-4">
              07 / BEFORE WE BEGIN
            </div>

            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-medium text-[#111D33] tracking-tight leading-[1.12] mb-5">
              Good questions.<br />
              Clear answers.
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#617087] leading-[1.65] mb-8">
              Every project is different. Here are a few things worth knowing before our first conversation.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#14532D] hover:underline"
            >
              <span>Have something else in mind?</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="py-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer group"
                  >
                    <span className="text-[18px] sm:text-[20px] font-medium text-[#111D33] group-hover:text-[#14532D] transition-colors">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-[#111D33] group-hover:text-[#14532D]">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pr-12 text-[14px] sm:text-[15px] text-[#617087] leading-[1.65] animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
