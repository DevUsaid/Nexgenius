"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
      
      {/* 1. Dedicated About Hero */}
      <section className="max-w-7xl mx-auto py-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            Who we are
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 leading-tight max-w-5xl mx-auto">
            We don&apos;t just write code. <br className="hidden md:block" />
            We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#39ff14]">architect the future.</span>
          </h1>
          <p className="text-brand-muted text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            NexGenius is an elite AI & automation agency. We transform sluggish, manual workflows into high-speed automated systems that scale effortlessly.
          </p>
        </motion.div>
      </section>

      {/* 2. Our Mission */}
      <section className="max-w-7xl mx-auto py-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-6">
              Businesses today are drowning in manual tasks, scattered spreadsheets, and disconnected software. Teams spend more time managing work than actually doing it.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed font-semibold">
              Our mission is to eliminate operational bottlenecks. We build custom AI solutions and automated pipelines so your team can focus on growth, not data entry.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-[3rem] border border-white/10 bg-brand-card/40 overflow-hidden flex items-center justify-center shadow-2xl group"
          >
            <div className="absolute inset-0 bg-[#10b981]/10 blur-[80px] group-hover:bg-[#10b981]/20 transition-colors duration-700"></div>
            
            {/* Robotic Scanner Background */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[3rem]">
              {/* Laser Line */}
              <motion.div
                animate={{ y: ["-10%", "410%", "-10%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-full h-[2px] bg-brand-primary shadow-[0_0_20px_rgba(16,185,129,1)] opacity-40 absolute top-0"
              />
              
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_70%)]" />
            </div>

            <div className="relative z-10 text-center p-8">
              <div className="relative w-32 h-32 mx-auto mb-8 flex items-center justify-center">
                {/* Rotating Dashed Outer Ring (Robotic Eye) */}
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
                <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)] backdrop-blur-md border border-brand-primary/50 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-brand-primary/20"
                    animate={{ y: ["100%", "-100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                  <Target className="w-8 h-8 text-brand-primary relative z-10" />
                </div>
                
                {/* Orbital dots */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_12px_#10b981]" />
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-accent rounded-full shadow-[0_0_10px_#34d399]" />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-black text-white tracking-tight uppercase">
                  Precision & <span className="text-gradient">Growth</span>
                </h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="max-w-7xl mx-auto py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Our Core <span className="text-gradient">Values</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            The principles that guide every line of code we write and every system we deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Radical Simplicity',
              desc: 'We take complex AI concepts and turn them into simple, highly intuitive interfaces that anyone can use.',
              icon: <Zap className="w-8 h-8" />
            },
            {
              title: 'Measurable ROI',
              desc: 'We don’t build tech for the sake of tech. Every system we deploy is designed to save hours and generate real profit.',
              icon: <Target className="w-8 h-8" />
            },
            {
              title: 'Future-Proof',
              desc: 'Our architectures are built to scale. As your business grows, your AI automation systems grow seamlessly with you.',
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
              <div className="p-4 bg-brand-dark/80 rounded-2xl text-brand-primary mb-8 border border-white/5">
                {val.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{val.title}</h3>
              <p className="text-brand-muted leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Technical Strategy (Integration of existing section) */}
      <section className="max-w-7xl mx-auto py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-accent mb-4">
              Our Approach
            </p>
            <h2 className="text-4xl font-black tracking-tight text-white mb-6 leading-tight">
              Strategy-led digital work for brands that need one team from idea to launch.
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed max-w-2xl">
              We keep the work practical. First we define the real operational problem, then we design the optimal system architecture, and then we ship in clear milestones.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                'Clear strategy before execution',
                'Custom AI-agent architecture',
                'Simple process with measurable ROI',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/5 bg-brand-card/40 p-5 shadow-sm hover:border-brand-primary/20 transition-colors">
                  <p className="text-sm font-bold text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] border border-white/5 bg-brand-card/40 p-10 text-white shadow-xl overflow-hidden relative w-full"
          >
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-brand-primary/10 blur-[80px] pointer-events-none"></div>
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-primary mb-6">
                What we focus on
              </p>
              <div className="space-y-4 text-slate-300">
                {[
                  'Auditing manual operational bottlenecks',
                  'Premium UX flows for AI chatbots & dashboards',
                  'Robust third-party API integrations',
                  'Production-ready launches and live support',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/5 bg-brand-dark px-5 py-4 text-sm font-medium">
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
          className="rounded-[3rem] bg-brand-card/60 border border-white/10 p-12 backdrop-blur-md shadow-2xl"
        >
          <h2 className="text-4xl font-black text-white mb-6">Ready to transform your operations?</h2>
          <p className="text-brand-muted text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss your workflow and see how AI can save your team thousands of hours.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 font-extrabold text-[#021107] bg-gradient-to-r from-[#39FF14] via-[#32E000] to-[#00FF7F] rounded-full text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] border border-[#39FF14]/50"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
