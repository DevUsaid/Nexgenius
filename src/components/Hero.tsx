"use client";
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-44 pb-24 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none"
      >
         <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-indigo-200 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-violet-200 blur-[100px] rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full text-sm font-semibold mb-10"
        >
          <Sparkles className="h-4 w-4 text-indigo-500" />
          <span className="text-slate-700">The Future of Digital Excellence</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tight text-slate-950 mb-10 leading-[0.95] text-wrap-balance"
        >
          Elevate Your Brand <br />
          <span className="text-gradient">To Next Genius</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-xl text-slate-600 mb-12 leading-relaxed font-medium text-pretty"
        >
          We craft elite digital solutions that combine cutting-edge technology 
          with breathtaking design to scale your business globally.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            aria-label="Explore our services"
            className="bg-indigo-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-700 hover:scale-105 transition-all flex items-center group shadow-xl shadow-indigo-100 cursor-pointer focus-visible:ring-4 focus-visible:ring-indigo-300 outline-none"
          >
            Explore Services
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 rounded-full font-bold text-lg border-2 border-slate-200 bg-white hover:border-indigo-600 hover:text-indigo-600 transition-all cursor-pointer">
            View Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}
