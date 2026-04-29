"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BackgroundParticles from '@/components/BackgroundParticles';
import Footer from '@/components/Footer';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://assets2.lottiefiles.com/packages/lf20_4kx2q32n.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen relative">
      <BackgroundParticles />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        
        <section id="process" className="py-24 px-6 border-t border-slate-100 bg-transparent backdrop-blur-[2px]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">
                  Our Proven Process for <br />
                  <span className="text-indigo-600">Digital Success</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  We don&apos;t just build; we strategize, design, and optimize to ensure 
                  your digital products deliver tangible business value.
                </p>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Discovery & Strategy', desc: 'Understanding your goals and market.' },
                    { step: '02', title: 'Design & Prototyping', desc: 'Crafting the perfect user experience.' },
                    { step: '03', title: 'Development & Testing', desc: 'Building with high-quality code.' },
                    { step: '04', title: 'Launch & Growth', desc: 'Scaling your business post-launch.' }
                  ].map((item, i) => (
                    <div key={i} className="flex space-x-4">
                      <span className="text-indigo-600 font-bold">{item.step}</span>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-white/40 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center border border-slate-200 backdrop-blur-md">
                  {animationData ? (
                    <Lottie
                      animationData={animationData}
                      loop={true}
                      autoplay={true}
                      style={{ width: '100%', height: '100%' }}
                    />
                  ) : (
                    <div className="text-slate-400 text-sm font-mono">Loading animation...</div>
                  )}
                </div>
                <div className="absolute -bottom-6 -right-6 soft-card p-6 rounded-2xl bg-white max-w-[220px]">
                   <p className="text-sm font-medium text-slate-900">&quot;NexGenius transformed our sales within 3 years.&quot;</p>
                   <span className="text-xs text-indigo-500 font-bold mt-2 block">- Strategic Growth Client</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
