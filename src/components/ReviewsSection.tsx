"use client";

import { Star } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Their AI automation cut our manual tasks in half! Our productivity skyrocketed, and we're seeing real ROI.",
    name: "David M.",
    role: "Operations Manager",
    company: "Vertex Solutions"
  },
  {
    quote: "Our workflow is now 80% automated, saving us hours every week. The AI solutions delivered were seamless and efficient!",
    name: "Michael R.",
    role: "COO",
    company: "NexaTech"
  },
  {
    quote: "From lead management to customer support, automation has transformed our processes. Highly recommend this team!",
    name: "Sarah L.",
    role: "Founder",
    company: "BrightPath Consulting"
  },
  {
    quote: "Custom AI workflows used to take weeks. With NexGenius, we built and launched in just 3 days. Super intuitive.",
    name: "Clara D.",
    role: "Head of CX",
    company: "NovaPath"
  },
  {
    quote: "Thanks to NexGenius, our onboarding process runs 3x faster with zero human errors. Game-changer for scaling.",
    name: "Leo V.",
    role: "CTO",
    company: "FluxGrid"
  }
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-28 py-24 px-6 border-t border-white/5 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-primary mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Real success stories from businesses that scaled smarter with our AI automation.
          </p>
        </div>

        {/* Infinite Loop Marquee Container */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] py-4 w-max">
            {duplicatedTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-[350px] sm:w-[400px] flex-shrink-0 glass-card p-8 rounded-[2.5rem] flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6 text-brand-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-accent" />
                    ))}
                  </div>
                  <p className="text-slate-200 italic text-base leading-relaxed mb-8">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div>
                  <div className="h-[1px] bg-white/5 mb-6" />
                  <h4 className="font-bold text-white text-base">{t.name}</h4>
                  <p className="text-xs text-brand-muted font-mono mt-1">
                    {t.role} @ <span className="text-brand-primary">{t.company}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

