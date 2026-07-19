"use client";

import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section id="hero" className="pt-44 pb-24 px-6 relative overflow-hidden bg-transparent min-h-[90vh] flex flex-col justify-center">
        
        {/* Background moved to page layout */}


        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-2xl text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 bg-brand-card/30 backdrop-blur-md border border-white/5 shadow-inner px-5 py-2.5 rounded-full text-sm font-medium mb-10 transition-all cursor-default"
            >
              <Sparkles className="h-4 w-4 text-brand-accent" />
              <span className="text-slate-300 tracking-wide">Elite Digital Craftsmanship</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.05] drop-shadow-2xl"
            >
              Engineered For <br />
              <span className="text-gradient tracking-normal">Modern AI & Web</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl font-semibold tracking-tight text-brand-primary mb-6 drop-shadow-lg"
            >
              Bespoke digital architecture. Built to scale.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-light max-w-xl"
            >
              We blend top-tier web development with advanced AI integrations to create powerful, 
              high-performance digital solutions tailored to your absolute requirements.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-5 w-full max-w-md sm:max-w-none"
            >
              <button
                onClick={() => setIsContactModalOpen(true)}
                aria-label="Book a Call"
                className="w-full sm:w-auto bg-gradient-to-r from-[#059669] to-[#10b981] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-brand-primary/20 hover:scale-[1.03] transition-all flex items-center justify-center group cursor-pointer border border-[#10b981]/20"
              >
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#pricing"
                className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg border border-white/10 bg-brand-card/60 text-slate-300 hover:text-white hover:border-brand-primary/30 transition-all text-center"
              >
                See Our Plans
              </a>
            </motion.div>


          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}

