"use client";

import { Bot, MessageSquare, Mic, Database, Workflow, Globe, ShoppingCart, LayoutTemplate, Cpu, Users, TrendingUp, Headphones, FileSearch, Code2, Eye, ArrowUpRight } from 'lucide-react';
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
    title: 'Multi-Agent Systems',
    description: 'Deploy teams of collaborating AI agents (LangGraph, CrewAI) that execute complex multi-step workflows autonomously.',
    icon: <Users className="h-7 w-7" />,
    badge: 'AI Agents'
  },
  {
    title: 'AI Sales & Prospecting Agents',
    description: 'Autonomous sales agents that discover qualified leads, craft personalized outreach, handle replies, and book meetings 24/7.',
    icon: <TrendingUp className="h-7 w-7" />,
    badge: 'AI Sales'
  },
  {
    title: 'Domain-Specific Custom LLMs',
    description: 'Custom fine-tuning of open-source models (Llama 3, Mistral) trained exclusively on your private enterprise data.',
    icon: <Cpu className="h-7 w-7" />,
    badge: 'Custom LLM'
  },
  {
    title: 'AI Support Desk Agents',
    description: 'Tier-1 and Tier-2 automated support agents integrated directly into Zendesk, Intercom, and CRM platforms.',
    icon: <Headphones className="h-7 w-7" />,
    badge: 'Support'
  },
  {
    title: 'Autonomous Research Agents',
    description: 'AI agents that perform deep multi-source web research, synthesize competitive intelligence, and output structured reports.',
    icon: <FileSearch className="h-7 w-7" />,
    badge: 'Research'
  },
  {
    title: 'AI Code & Developer Agents',
    description: 'Automated code generation, PR review, and automated bug fixing agents integrated into GitHub and DevOps pipelines.',
    icon: <Code2 className="h-7 w-7" />,
    badge: 'Dev AI'
  },
  {
    title: 'AI Vision & Document Intelligence',
    description: 'Extract, analyze, and process complex PDFs, invoices, and visual data with multimodal AI vision models.',
    icon: <Eye className="h-7 w-7" />,
    badge: 'Vision AI'
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
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-primary mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg font-medium">
            Deploy autonomous AI agents, robust workflows, and high-performance digital systems to scale your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-[2.5rem] flex flex-col justify-between items-start text-left h-full"
            >
              <div className="w-full">
                <div className="flex justify-between items-center mb-8 w-full">
                  <div className="p-4 bg-brand-dark/60 border border-white/10 rounded-2xl text-brand-primary transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>

                <p className="text-brand-muted leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
              </div>

              <a href="#contact" className="inline-flex items-center text-xs font-bold text-brand-primary hover:text-brand-accent transition-colors gap-1 mt-auto">
                Explore <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
