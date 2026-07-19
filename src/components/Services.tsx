"use client";

import { Cpu, MessageSquare, Zap, Code, Sparkles, Layout, ArrowUpRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const services = [
  {
    title: 'Custom Web Development',
    description: 'Build high-performance, SEO-optimized, and scalable web applications using modern frameworks like Next.js and React.',
    icon: <Code className="h-7 w-7" />,
    badge: 'Web'
  },
  {
    title: 'AI SaaS Development',
    description: 'End-to-end development of robust AI-powered Software as a Service products tailored to your specific business ideas.',
    icon: <Sparkles className="h-7 w-7" />,
    badge: 'Product'
  },
  {
    title: 'Custom AI Integration',
    description: 'Integrate advanced OpenAI, Anthropic, or custom local LLM intelligence directly into your existing software and operational pipelines.',
    icon: <Cpu className="h-7 w-7" />,
    badge: 'Intelligence'
  },
  {
    title: 'AI-Powered Chatbots',
    description: 'Build custom-trained, context-aware 24/7 support chatbots that resolve customer queries instantly and sync data directly with your backend.',
    icon: <MessageSquare className="h-7 w-7" />,
    badge: 'Support'
  },
  {
    title: 'Workflow Automation',
    description: 'Connect your business tools (Gmail, CRM, Slack) into seamless, custom-built automated workflows that run 24/7.',
    icon: <Zap className="h-7 w-7" />,
    badge: 'Efficiency'
  },
  {
    title: 'UI/UX & Web Design',
    description: 'Premium, user-centric interface design specifically crafted for modern web apps and complex AI dashboards.',
    icon: <Layout className="h-7 w-7" />,
    badge: 'Design'
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
            Supercharge your business operations, reduce manual overhead, and optimize efficiency with our tailored AI workflows.
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
                Request Setup <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

