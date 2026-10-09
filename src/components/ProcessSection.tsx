"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Cpu, GitMerge, Rocket, ShieldCheck, Terminal, Layers } from 'lucide-react';
import Process3DScene from './Process3DScene';

const steps = [
  {
    step: '01',
    badge: 'DISCOVERY & ARCHITECTURE',
    title: 'Audit & Workflow Mapping',
    subtitle: 'From manual chaos to structured logic',
    desc: 'We audit your manual workflows, software stack, and SOPs. We identify high-impact bottlenecks and architect a comprehensive blueprint for your custom AI agents.',
    deliverable: 'Custom AI Architecture Blueprint & API Mapping',
    icon: <Terminal className="h-6 w-6 text-[#39FF14]" />
  },
  {
    step: '02',
    badge: 'ENGINEERING & INTEGRATION',
    title: 'Multi-Agent Swarm Build',
    subtitle: 'Connecting tools with intelligent reasoning',
    desc: 'We train custom vector RAG knowledge bases, develop LangGraph multi-agent swarms, and integrate with your CRM, databases, and communication channels with bank-grade encryption.',
    deliverable: 'Validated Autonomous Agent Pipeline & Security Testing',
    icon: <Cpu className="h-6 w-6 text-emerald-400" />
  },
  {
    step: '03',
    badge: 'DEPLOYMENT & SCALE',
    title: 'Launch & Continuous Evolution',
    subtitle: 'Autonomous execution while your team sleeps',
    desc: 'You receive an intuitive control dashboard with live walkthroughs and telemetry monitoring. The agents operate 24/7 with zero downtime and self-correcting logic.',
    deliverable: 'Production Dashboard, Webhooks, & 24/7 Uptime SLA',
    icon: <Rocket className="h-6 w-6 text-[#00FF7F]" />
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="scroll-mt-28 py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-transparent border-t border-white/5">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#39FF14]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>Proven 3-Stage Blueprint</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-5">
            How We Architect <br />
            <span className="text-gradient">Autonomous Systems</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            We don’t just deploy off-the-shelf bots. We engineer bespoke digital architectures that eliminate manual bottlenecks and scale your operations with mathematical precision.
          </p>
        </div>

        {/* 2-Column Process Grid: 3D Mascot on Left + Interactive Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 3D Mascot & Client Testimonial Pill */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[420px] sm:min-h-[480px]">
            
            {/* 3D Working Mascot Canvas */}
            <div className="relative w-full h-[400px] sm:h-[450px]">
              <Process3DScene />
            </div>

            {/* Testimonial Quote Bubble */}
            <div className="absolute bottom-2 left-4 right-4 sm:left-6 sm:right-6 p-4 rounded-2xl bg-[#021107]/90 backdrop-blur-xl border border-[#39FF14]/30 shadow-2xl">
              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                &quot;NexGenius transformed our operations and cut response latency from 3 hours to 1.4 seconds.&quot;
              </p>
              <div className="mt-2 flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#39FF14] font-bold uppercase tracking-wider">Strategic Client ROI</span>
                <span className="text-slate-400">Verified Automation</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3 Interactive Steps Roadmap */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {steps.map((item, index) => {
              const isSelected = activeStep === index;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 sm:p-7 rounded-[2rem] transition-all duration-300 cursor-pointer text-left border ${
                    isSelected
                      ? 'bg-[#03170a]/95 border-[#39FF14] shadow-[0_0_35px_rgba(57,255,20,0.25)] ring-1 ring-[#39FF14]/40 scale-[1.01]'
                      : 'bg-[#021006]/70 border-white/10 hover:border-white/20 hover:bg-[#031508]/80'
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    
                    {/* Step Number + Icon Badge */}
                    <div className={`p-3 rounded-2xl transition-all duration-300 flex-shrink-0 ${
                      isSelected 
                        ? 'bg-[#39FF14] text-[#021107] shadow-[0_0_20px_rgba(57,255,20,0.5)]' 
                        : 'bg-white/5 border border-white/10 text-[#39FF14]'
                    }`}>
                      {item.icon}
                    </div>

                    {/* Step Body */}
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${
                          isSelected ? 'text-[#39FF14]' : 'text-slate-400'
                        }`}>
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {item.step} / 03
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>

                      <p className="text-xs font-mono text-emerald-400 font-semibold mb-2">
                        {item.subtitle}
                      </p>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                        {item.desc}
                      </p>

                      {/* Deliverable Box */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#39FF14]" />
                          <span>Deliverable:</span>
                        </span>
                        <span className="text-white font-medium text-right truncate max-w-[240px] sm:max-w-none">
                          {item.deliverable}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
