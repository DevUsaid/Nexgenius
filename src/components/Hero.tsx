"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, BarChart3, Database, Workflow, Bot, Share2, Layers, Cpu } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-transparent pt-28 pb-20">
      
      {/* Neon Mesh Background */}
      <div className="neon-mesh-bg opacity-80"></div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Copy & CTAs */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center space-x-2 bg-surface/80 backdrop-blur-md border border-border-subtle rounded-full px-4 py-2 text-xs font-semibold mb-8 text-white transition-all hover:border-brand-primary"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span>Enterprise AI Automation</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-serif tracking-tight text-white mb-6 leading-[1.05] drop-shadow-lg"
          >
            AI Automation for <br />
            <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold">Enterprises.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-text-secondary mb-10 max-w-lg leading-relaxed font-medium"
          >
            We provide intelligent AI automation solutions for modern businesses and enterprises. Automate your operations, sales, customer support, and transform your entire workflow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto rounded-full font-bold shadow-[0_0_20px_rgba(57,255,20,0.3)]" asChild>
              <Link href="/contact">
                Start Automating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full font-bold" asChild>
              <Link href="#reviews">
                <Play className="mr-2 h-4 w-4 fill-current" />
                View Case Studies
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-6 mt-8 text-sm text-text-muted font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-primary" />
              Seamless Integration
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-primary" />
              Custom Workflows
            </div>
          </motion.div>
        </div>

        {/* Right Side: Abstract Enterprise Workflow Interface */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full relative min-h-[500px] md:min-h-[600px] flex items-center justify-center lg:justify-end pr-0 lg:pr-8"
        >
          {/* Soft Green Radial Glow Behind Robot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-brand-primary/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>

          {/* Empty Space for Global Neural Network Background to shine through */}
          <div className="relative z-10 w-full max-w-[400px] md:max-w-[480px] aspect-square ml-auto mr-0">
          </div>
        </motion.div>
      </div>

      {/* AI Automation Feature Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full max-w-7xl mx-auto px-6 mt-16 md:mt-24 z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-border-subtle/50">
          
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
              <Bot className="w-5 h-5 text-brand-primary" />
            </div>
            <h3 className="text-white font-semibold text-lg">Autonomous AI Agents</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Deploy custom-trained AI agents that handle customer inquiries, qualify leads, and manage data 24/7 without human intervention.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
              <Workflow className="w-5 h-5 text-brand-primary" />
            </div>
            <h3 className="text-white font-semibold text-lg">Business Automation</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Connect your entire tech stack. We automate repetitive manual tasks across your CRM, email, and internal databases instantly.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
              <BarChart3 className="w-5 h-5 text-brand-primary" />
            </div>
            <h3 className="text-white font-semibold text-lg">Intelligent Workflows</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Scale your operations effortlessly. Our AI-driven pipelines analyze data, predict trends, and trigger smart business logic on autopilot.
            </p>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
