"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, HelpCircle, ArrowUpRight } from 'lucide-react';

type FAQItem = {
  num: string;
  question: string;
  answer: string;
  category: string;
};

const faqs: FAQItem[] = [
  {
    num: "01",
    category: "CAPABILITIES",
    question: "How do custom AI Agents differ from standard chatbots?",
    answer: "Traditional chatbots only follow static if-then rules or basic FAQ matching. Our autonomous AI Agents possess cognitive reasoning, access your live vector knowledge base (RAG), and execute real-world tool actions—such as querying SQL databases, updating CRM pipelines, drafting proposals, and locking calendar appointments autonomously."
  },
  {
    num: "02",
    category: "TIMELINE",
    question: "How long does deployment take from audit to launch?",
    answer: "Fast-track agent deployments (such as Voice AI receptionists or specialized RAG support bots) typically launch in 3 to 7 business days. Complex multi-agent swarms with enterprise custom integrations usually take 2 to 3 weeks including rigorous edge-case testing."
  },
  {
    num: "03",
    category: "SECURITY",
    question: "Is enterprise data secure and private?",
    answer: "Yes, 100%. We adhere to strict enterprise data protection standards. Your proprietary knowledge and customer data are never used to train public foundational models. All API transactions use end-to-end encrypted tunnels and isolated private vector databases."
  },
  {
    num: "04",
    category: "INTEGRATION",
    question: "Can your AI solutions integrate into our existing software stack?",
    answer: "Seamlessly. Our systems integrate with WhatsApp, HubSpot, Salesforce, Zendesk, Slack, Stripe, PostgreSQL, Shopify, Google Workspace, and any platform with a REST or GraphQL API. You keep your existing tools; we make them autonomous."
  },
  {
    num: "05",
    category: "NEXT STEPS",
    question: "Can we review an active demonstration before committing?",
    answer: "Absolutely. We offer a complimentary 30-minute discovery session and workflow audit where we analyze your bottlenecks and demonstrate live multi-agent automations running in parallel."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-28 py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-transparent overflow-hidden relative">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#39FF14]/8 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>Clarity & Technical Guidance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-5">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Everything you need to know about engineering autonomous AI workflows with NexGenius.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.num}
                className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#03170a]/95 border-[#39FF14]/60 shadow-[0_0_30px_rgba(57,255,20,0.2)] ring-1 ring-[#39FF14]/30'
                    : 'bg-[#021107]/75 border-white/10 hover:border-white/20 hover:bg-[#031508]/80'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-4 sm:gap-6 pr-4">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md transition-colors ${
                      isOpen ? 'bg-[#39FF14] text-[#021107]' : 'bg-white/5 text-slate-400'
                    }`}>
                      {faq.num}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#39FF14] transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`p-2 rounded-full border transition-all duration-300 flex-shrink-0 ${
                    isOpen 
                      ? 'bg-[#39FF14]/15 border-[#39FF14]/40 text-[#39FF14] rotate-180' 
                      : 'bg-white/5 border-white/10 text-slate-400'
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/5 font-light">
                        <div className="pt-4 flex flex-col gap-3">
                          <p>{faq.answer}</p>
                          <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14]" />
                            <span>Category: {faq.category}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Help Box */}
        <div className="mt-12 p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-white font-bold text-sm sm:text-base">Have a specialized custom technical query?</h4>
            <p className="text-slate-400 text-xs font-mono mt-0.5">Our senior AI systems architects are ready to assist.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#39FF14] hover:text-[#021107] text-white text-xs font-mono font-bold transition-all border border-white/10 hover:border-[#39FF14]"
          >
            <span>Ask Architecture Team</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
