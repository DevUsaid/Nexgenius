"use client";

import Hero from '@/components/Hero';
import ReviewsSection from '@/components/ReviewsSection';
import FAQ from '@/components/FAQ';
import Scroll3DScene from '@/components/Scroll3DScene';
import Process3DScene from '@/components/Process3DScene';
import Services from '@/components/Services';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Scroll3DScene />

      <div className="relative z-10">
        <Hero />

        <Services />

        {/* Process Section */}
        <section id="process" className="scroll-mt-28 py-24 px-6 border-t border-white/5 bg-transparent backdrop-blur-[2px]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative hidden lg:flex flex-col justify-end items-start h-full min-h-[400px]"
              >
                {/* 3D Working Mascot */}
                <Process3DScene />
                
                <div className="p-6 rounded-2xl bg-brand-card/80 backdrop-blur-md border border-white/10 max-w-[260px] shadow-2xl relative z-10 mb-10 ml-4">
                  <p className="text-sm italic text-slate-300">&quot;NexGenius transformed our sales workflow and halved our response times.&quot;</p>
                  <span className="text-[10px] text-brand-accent font-bold mt-3 block uppercase tracking-wider">— Strategic Growth Client</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-primary mb-4">
                  Process
                </p>
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white leading-tight">
                  Our Proven Process for <br />
                  <span className="text-gradient">Digital Success</span>
                </h2>
                <p className="text-brand-muted text-lg mb-8 leading-relaxed max-w-xl">
                  We don&apos;t just write code; we analyze, design, and automate to ensure your operations run with maximum efficiency.
                </p>
                <div className="space-y-8">
                  {[
                    { step: '01', title: 'Share Your Workflow', desc: 'From lead gen to client onboarding, just share your workflow and the tools you use.' },
                    { step: '02', title: 'We Build the System', desc: 'We design and set up custom automations that connect your tools with AI—so work happens while you sleep.' },
                    { step: '03', title: 'Launch and Take Control', desc: 'You get a plug-and-play dashboard with a walkthrough to manage everything easily.' }
                  ].map((item, i) => (
                    <div key={i} className="flex space-x-4">
                      <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-brand-primary/10 text-brand-primary font-bold border border-brand-primary/20">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="font-bold text-white text-lg">{item.title}</h4>
                        <p className="text-brand-muted text-sm mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <ReviewsSection />

        {/* FAQs Section */}
        <FAQ />
      </div>
    </main>
  );
}
