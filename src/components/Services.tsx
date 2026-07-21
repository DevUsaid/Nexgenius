"use client";

import { Bot, MessageSquare, Mic, Database, Workflow, Globe, ShoppingCart, LayoutTemplate, ArrowUpRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const services = [
  {
    title: 'AI Agent Development',
    description: 'Custom autonomous AI agents built for customer support, sales, lead qualification, and HR recruitment.',
    icon: <Bot className="h-7 w-7" />,
    badge: 'Primary'
  },
  {
    title: 'AI Chatbot Development',
    description: 'Context-aware chatbots for websites, WhatsApp, Instagram, and E-commerce tailored to your specific data.',
    icon: <MessageSquare className="h-7 w-7" />,
    badge: 'Primary'
  },
  {
    title: 'Voice AI Solutions',
    description: 'AI receptionists and call answering agents capable of booking appointments and handling outbound support.',
    icon: <Mic className="h-7 w-7" />,
    badge: 'Primary'
  },
  {
    title: 'RAG AI Systems',
    description: 'Knowledge base chatbots and Document AI that securely queries your company SOPs and PDFs.',
    icon: <Database className="h-7 w-7" />,
    badge: 'Primary'
  },
  {
    title: 'AI Automation',
    description: 'Workflow, CRM, and email automation designed to streamline operations and eliminate manual data entry.',
    icon: <Workflow className="h-7 w-7" />,
    badge: 'Primary'
  },
  {
    title: 'Custom Web Applications',
    description: 'AI-powered workflows, Business Automation platforms, custom dashboards, and admin panels built with modern architecture.',
    icon: <Globe className="h-7 w-7" />,
    badge: 'Primary'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Shopify and WooCommerce stores powered by AI shopping assistants and recommendation engines.',
    icon: <ShoppingCart className="h-7 w-7" />,
    badge: 'Primary'
  },
  {
    title: 'WordPress Development',
    description: 'High-performance business websites, portfolios, landing pages, and blogs with integrated SEO and speed optimization.',
    icon: <LayoutTemplate className="h-7 w-7" />,
    badge: 'Primary'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-primary mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif mb-6 tracking-tight text-white leading-tight">
            What We <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold">Offer</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-medium">
            Deploy autonomous systems, robust AI workflows, and premium digital experiences to transform your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-[2rem] flex flex-col justify-between items-start text-left h-full group"
            >
              <div className="w-full">
                <div className="flex justify-between items-center mb-8 w-full">
                  <div className="p-4 bg-surface border border-border-subtle rounded-2xl text-brand-primary group-hover:text-brand-accent transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent bg-brand-primary/10 px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-serif mb-3 text-white leading-tight">
                  {service.title}
                </h3>

                <p className="text-text-secondary leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
              </div>

              <a href="/contact" className="inline-flex items-center text-sm font-semibold text-brand-primary group-hover:text-brand-accent transition-colors gap-1 mt-auto">
                Explore <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
