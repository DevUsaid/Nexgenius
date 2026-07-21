"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck, ArrowRight, Workflow, Database, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
      
      {/* 1. Dedicated About Hero */}
      <section className="max-w-7xl mx-auto py-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            Who we are
          </div>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white mb-8 leading-tight max-w-5xl mx-auto drop-shadow-xl">
            We don&apos;t just write code. <br className="hidden md:block" />
            We automate your <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold">Business Operations.</span>
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            NexGenius Solutions is an elite Business Automation agency. We transform sluggish, manual workflows across operations, sales, and customer support into high-speed autonomous systems that scale effortlessly.
          </p>
        </motion.div>
      </section>

      {/* 2. Our Mission */}
      <section className="max-w-7xl mx-auto py-24 border-t border-border-subtle">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Our <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold">Mission</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Empowering businesses through Intelligent Automation. Businesses today are drowning in manual tasks, scattered spreadsheets, and disconnected software. Teams spend more time managing work than actually doing it.
            </p>
            <p className="text-white text-lg leading-relaxed font-semibold">
              Our vision is to become a global leader in Digital Transformation. We build custom automated workflows so your team can focus on growth, not data entry.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-[3rem] border border-border-subtle bg-surface/40 overflow-hidden flex items-center justify-center shadow-2xl group"
          >
            <div className="absolute inset-0 bg-brand-primary/10 blur-[80px] group-hover:bg-brand-primary/20 transition-colors duration-700"></div>
            
            {/* Robotic Scanner Background -> Changed to Data Grid */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[3rem]">
              <motion.div
                animate={{ y: ["-10%", "410%", "-10%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-full h-[2px] bg-brand-primary shadow-[0_0_20px_#39FF14] opacity-40 absolute top-0"
              />
              
              <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_70%)]" />
            </div>

            <div className="relative z-10 text-center p-8">
              <div className="relative w-32 h-32 mx-auto mb-8 flex items-center justify-center">
                {/* Rotating Dashed Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[2px] border-dashed border-brand-primary/40 rounded-full"
                />
                
                {/* Inner Pulsing Ring */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-3 border-[1px] border-brand-primary/50 rounded-full"
                />
                
                {/* Center Core */}
                <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(57,255,20,0.5)] backdrop-blur-md border border-brand-primary/50 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-brand-primary/20"
                    animate={{ y: ["100%", "-100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                  <Workflow className="w-8 h-8 text-brand-primary relative z-10" />
                </div>
                
                {/* Orbital dots */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_12px_#39FF14]" />
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]" />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-serif text-white tracking-tight uppercase">
                  Precision & <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold">Scale</span>
                </h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="max-w-7xl mx-auto py-24 border-t border-border-subtle">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Our Core <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold">Values</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            The principles that guide every workflow we optimize and every system we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Automation First',
              desc: 'We map complex business operations and turn them into seamless, highly intuitive automated workflows.',
              icon: <Zap className="w-8 h-8" />
            },
            {
              title: 'Measurable ROI',
              desc: 'We do not build tech for the sake of tech. We establish measurable ROI by replacing manual labor with intelligent digital processes.',
              icon: <Target className="w-8 h-8" />
            },
            {
              title: 'Enterprise Architecture',
              desc: 'Our architectures are built to scale. As your operations grow, your automation systems grow seamlessly with you.',
              icon: <ShieldCheck className="w-8 h-8" />
            }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] flex flex-col items-start"
            >
              <div className="p-4 bg-surface rounded-2xl text-brand-primary mb-8 border border-border-subtle">
                {val.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{val.title}</h3>
              <p className="text-text-secondary leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Technical Strategy */}
      <section className="max-w-7xl mx-auto py-24 border-t border-border-subtle">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-primary mb-4">
              Our Approach
            </p>
            <h2 className="text-4xl font-serif tracking-tight text-white mb-6 leading-tight">
              Business Automation solutions for brands that need guaranteed operational efficiency.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
              We keep the work practical. First we define the real operational bottleneck in your sales or support pipeline, then we design the optimal automation architecture, and then we deploy in clear milestones.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                'Clear strategy before execution',
                'Custom workflow architecture',
                'Simple process with measurable ROI',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border-subtle bg-surface/40 p-5 shadow-sm hover:border-brand-primary/30 transition-colors">
                  <p className="text-sm font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] border border-border-subtle glass-card p-10 text-white shadow-xl overflow-hidden relative w-full"
          >
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-brand-primary/10 blur-[80px] pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-primary mb-6">
                What we focus on
              </p>
              <div className="space-y-4 text-text-secondary">
                {[
                  'Auditing manual operational bottlenecks',
                  'Building Autonomous Workflows',
                  'Integrating Sales & CRM Systems',
                  'Deploying 24/7 AI Customer Support',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-border-subtle bg-primary-bg px-5 py-4 text-sm font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="max-w-4xl mx-auto pt-16 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] glass-card border border-border-subtle p-12 backdrop-blur-md shadow-2xl"
        >
          <h2 className="text-4xl font-serif text-white mb-6">Ready to transform your operations?</h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss your workflow and see how AI can save your team thousands of hours.
          </p>
          <Link href="/contact" passHref>
             <Button size="lg" className="rounded-full px-10 py-6 text-lg font-bold glow-emerald">
               Get in Touch
               <ArrowRight className="ml-2 w-5 h-5" />
             </Button>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
