"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbit, LayoutGrid, ArrowUpRight, Sparkles } from 'lucide-react';
import ServicesRing3D, { servicesData } from './ServicesRing3D';

export default function Services() {
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');

  return (
    <section id="services" className="scroll-mt-32 pt-24 sm:pt-36 pb-16 sm:pb-24 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Autonomous Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 tracking-tight text-white leading-tight">
            Our Enterprise <span className="text-gradient">AI Suite</span>
          </h2>

          <p className="text-brand-muted max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Explore 15 specialized autonomous AI agents, enterprise workflows, and mission-critical systems engineered for exponential scale.
          </p>

          {/* View Mode Switcher */}
          <div className="inline-flex items-center p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mt-6 gap-1 shadow-xl">
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                viewMode === '3d'
                  ? 'bg-[#39FF14] text-[#021107] font-bold shadow-[0_0_20px_rgba(57,255,20,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Orbit className="h-4 w-4" />
              <span>3D Orbit Ring</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#39FF14] text-[#021107] font-bold shadow-[0_0_20px_rgba(57,255,20,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
              <span>Full Grid (15)</span>
            </button>
          </div>
        </motion.div>

        {/* Dynamic Display: 3D Ring vs Full Grid */}
        <AnimatePresence mode="wait">
          {viewMode === '3d' ? (
            <motion.div
              key="3d-ring"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <ServicesRing3D />
            </motion.div>
          ) : (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-4"
            >
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  className="glass-card p-6 sm:p-7 rounded-[2rem] flex flex-col justify-between items-start text-left h-full border border-white/10 hover:border-[#39FF14]/50 group transition-all duration-300"
                >
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-6 w-full">
                      <div className="p-3 bg-brand-dark/70 border border-white/10 rounded-2xl text-brand-primary group-hover:bg-[#39FF14] group-hover:text-[#021107] group-hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300">
                        {service.icon}
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
                        {service.badge}
                      </span>
                    </div>

                    <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-400 mb-2">
                      {service.category}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#39FF14] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-brand-muted leading-relaxed text-xs sm:text-sm mb-6">
                      {service.description}
                    </p>
                  </div>

                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-xs font-bold text-brand-primary hover:text-brand-accent transition-colors gap-1 mt-auto pt-4 border-t border-white/5 w-full justify-between"
                  >
                    <span>Deploy Service</span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
