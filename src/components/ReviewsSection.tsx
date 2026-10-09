"use client";

import { Star, Sparkles, CheckCircle2, TrendingUp, ShieldCheck, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Their multi-agent workflow cut our manual data entry to zero. Our sales team response times dropped from 4 hours to 12 seconds, resulting in immediate pipeline growth.",
    name: "David Miller",
    role: "VP of Operations",
    company: "Vertex Scale",
    metric: "3.4x",
    metricLabel: "Lead Velocity"
  },
  {
    quote: "Our client onboarding is now 80% automated. NexGenius delivered custom LangGraph agents connected to our CRM that work seamlessly without bugs.",
    name: "Michael Ross",
    role: "COO",
    company: "NexaTech Global",
    metric: "80%",
    metricLabel: "Work Automated"
  },
  {
    quote: "The 24/7 AI Voice receptionists book appointments directly into our calendar without missing a beat. The ROI paid for itself within the first 14 days.",
    name: "Dr. Sarah Lin",
    role: "Founder & Director",
    company: "MedPath Clinic Group",
    metric: "24/7",
    metricLabel: "Zero Missed Calls"
  },
  {
    quote: "Custom enterprise AI integrations used to take our internal dev team months. NexGenius designed, stress-tested, and deployed our RAG knowledge base in 5 days.",
    name: "Clara Dupont",
    role: "Head of Product",
    company: "NovaFlow AI",
    metric: "5 Days",
    metricLabel: "Time to Deploy"
  },
  {
    quote: "With autonomous research and support desk agents, our ticket resolution times dropped by 70%. Easily the best tech agency partner we’ve worked with.",
    name: "Leo Vance",
    role: "CTO",
    company: "FluxGrid Systems",
    metric: "-70%",
    metricLabel: "Support Latency"
  }
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-28 py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-transparent overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#39FF14]/8 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>Proven Enterprise ROI</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-5 leading-tight">
            Trusted By High-Growth <br />
            <span className="text-gradient">Innovators & Enterprises</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Real measurable outcomes from companies that automated their operations, eliminated manual latency, and scaled with NexGenius.
          </p>
        </div>

        {/* Infinite Loop Marquee Container */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)] py-4">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
            {duplicatedTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-[360px] sm:w-[420px] flex-shrink-0 rounded-[2.25rem] bg-[#021107]/90 border border-white/10 hover:border-[#39FF14]/50 p-7 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(57,255,20,0.15)] hover:-translate-y-1 group"
              >
                {/* Top Row: Stars + ROI Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1 text-[#39FF14]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#39FF14]" />
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#39FF14]/15 border border-[#39FF14]/30 text-[#39FF14] font-mono text-xs font-bold">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span>{t.metric} {t.metricLabel}</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                {/* Bottom Row: Author details */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base group-hover:text-[#39FF14] transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {t.role} · <span className="text-emerald-400 font-semibold">{t.company}</span>
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-[#39FF14]/40 group-hover:text-[#39FF14] transition-colors">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Social Proof Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {[
            { val: '100%', label: 'Verified Client Delivery' },
            { val: '5.0 ★', label: 'Average Client Rating' },
            { val: '3.4x', label: 'Average Efficiency Gain' },
            { val: '14 Days', label: 'Typical Full Payback' }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <span className="text-xl sm:text-2xl font-black text-white font-mono">{item.val}</span>
              <p className="text-[11px] font-mono text-slate-400 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
