"use client";

import { useState } from 'react';
import { ArrowRight, Sparkles, Activity, ShieldCheck, Bot, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section 
        id="hero" 
        className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#021107]"
      >
        
        {/* ------------------------------------------------------------- */}
        {/* FULL BANNER BACKGROUND VIDEO                                  */}
        {/* ------------------------------------------------------------- */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[70%_center] scale-105 opacity-85"
            src="/large-thumbnail20260128-175395-wzt74g.mp4"
          />

          {/* Cinematic Vignette & Gradient Overlays for Maximum Contrast & Blend */}
          {/* 1. Left fade so left-aligned text is 100% readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#021107] via-[#021107]/80 to-transparent/20 z-[1]" />
          
          {/* 2. Top fade to cleanly mask any video header artifacts behind the navbar */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#021107] via-[#021107]/90 to-transparent z-[1]" />

          {/* 3. Bottom fade to blend seamlessly into the next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#021107] via-transparent to-[#021107]/60 z-[1]" />

          {/* 3. Soft neon green glow pulse behind right-side 3D robots */}
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-[#39FF14]/15 rounded-full blur-[150px] pointer-events-none z-[1]" />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* HERO BANNER FOREGROUND CONTENT                                */}
        {/* ------------------------------------------------------------- */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-32 sm:pt-40 pb-20 flex flex-col justify-center">
          
          <div className="max-w-2xl text-left">
            
            {/* Top Glowing Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 bg-[#021107]/80 backdrop-blur-xl border border-[#39FF14]/40 shadow-[0_0_25px_rgba(57,255,20,0.25)] px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-[#39FF14] mb-6 sm:mb-8"
            >
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-pulse" />
              <span>Next-Gen Autonomous AI Workforce</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 sm:mb-8 leading-[1.08] drop-shadow-2xl"
            >
              Engineered For <br />
              <span className="text-gradient">Modern AI & Web</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed font-light max-w-xl drop-shadow-md"
            >
              We design, build, and deploy custom autonomous AI agents, intelligent multi-agent swarms, and enterprise automation pipelines that run your business 24/7.
            </motion.p>

            {/* Value Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 mb-8 sm:mb-10 w-full max-w-md font-mono text-xs text-slate-300"
            >
              <div className="flex items-center gap-2 bg-[#021107]/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="h-2 w-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
                <span>Multi-Agent Swarms</span>
              </div>
              <div className="flex items-center gap-2 bg-[#021107]/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="h-2 w-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
                <span>Vector RAG Systems</span>
              </div>
              <div className="flex items-center gap-2 bg-[#021107]/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="h-2 w-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
                <span>24/7 Voice AI Agents</span>
              </div>
              <div className="flex items-center gap-2 bg-[#021107]/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="h-2 w-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
                <span>Sub-second Latency</span>
              </div>
            </motion.div>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
            >
              <button
                onClick={() => setIsContactModalOpen(true)}
                aria-label="Book a Call"
                className="w-full sm:w-auto bg-gradient-to-r from-[#39FF14] via-[#32E000] to-[#00FF7F] text-[#021107] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-extrabold text-base sm:text-lg shadow-[0_0_35px_rgba(57,255,20,0.5)] hover:shadow-[0_0_50px_rgba(57,255,20,0.7)] hover:scale-105 transition-all flex items-center justify-center group cursor-pointer border border-[#39FF14]"
              >
                <span>Book a Call</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>
              
              <a
                href="#services"
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg border border-white/15 bg-[#021107]/70 backdrop-blur-xl text-slate-200 hover:text-white hover:border-[#39FF14]/50 transition-all text-center"
              >
                See 15 AI Services
              </a>
            </motion.div>

          </div>

          {/* ------------------------------------------------------------- */}
          {/* BANNER BOTTOM LIVE STATUS TELEMETRY DOCK                      */}
          {/* ------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 sm:mt-20 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400 bg-[#021107]/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/5"
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#39FF14]" />
              </span>
              <span className="text-[#39FF14] font-bold tracking-wider">
                60 FPS LIVE 3D AGENT ASSEMBLY
              </span>
            </div>

            <div className="flex items-center gap-6">
              <span className="hidden sm:inline text-slate-300">
                Throughput: <strong className="text-white">1,420 Tasks/hr</strong>
              </span>
              <span className="hidden md:inline text-slate-300">
                SLA: <strong className="text-[#39FF14]">99.8% Autonomous</strong>
              </span>
              <span className="text-slate-300">
                Latency: <strong className="text-white">35ms</strong>
              </span>
            </div>
          </motion.div>

        </div>

      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
