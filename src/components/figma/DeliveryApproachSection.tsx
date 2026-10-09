'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Search, 
  Layers, 
  Cpu, 
  Rocket, 
  Check, 
  CheckCircle2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function DeliveryApproachSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      step: '01',
      title: 'Discover',
      tag: 'REQUIREMENTS & AUDIT',
      icon: Search,
      duration: 'Week 1',
      description: 'Understand your business goals, users, and existing architectures. We uncover hidden bottlenecks and agree on ROI metrics before recommending any technology stack.',
      deliverables: [
        'System architecture & data pipeline audit',
        'Workflow bottleneck & latency profiling',
        'Feasibility & cloud unit economics modeling'
      ],
      output: 'SOLUTION ROADMAP',
      preview: {
        badge: 'Audit Readiness',
        metric: '98%',
        status: 'Scope locked',
        tags: ['GCP Cloud', 'Next.js 16', '<80ms SLA']
      }
    },
    {
      step: '02',
      title: 'Design',
      tag: 'SYSTEM BLUEPRINT & UX',
      icon: Layers,
      duration: 'Week 2 - 3',
      description: 'Define the scalable schema, security guardrails, and high-fidelity clickable prototype. We validate user flows and API contracts before writing production code.',
      deliverables: [
        'Interactive Figma UX / UI prototype',
        'Database & API schema contracts (OpenAPI)',
        'Security, RBAC & compliance blueprint'
      ],
      output: 'VALIDATED BLUEPRINT',
      preview: {
        badge: 'Schema Status',
        metric: 'Verified',
        status: 'Design synced',
        tags: ['Design Tokens', 'REST & gRPC', 'Role Auth']
      }
    },
    {
      step: '03',
      title: 'Engineer',
      tag: 'SPRINT DEVELOPMENT',
      icon: Cpu,
      duration: 'Week 4 - 8',
      description: 'Build in rapid, focused 2-week agile sprints. Real-time preview deployments, automated QA test suites, and continuous stakeholder review sessions.',
      deliverables: [
        'Production-ready modular codebases',
        'Automated CI/CD & unit / integration suites',
        'Dedicated staging preview environments'
      ],
      output: 'TESTED SOFTWARE',
      preview: {
        badge: 'Test Coverage',
        metric: '99.4%',
        status: 'Passing CI/CD',
        tags: ['Turbopack', 'E2E Suites', 'Dockerized']
      }
    },
    {
      step: '04',
      title: 'Evolve',
      tag: 'LAUNCH & CONTINUITY',
      icon: Rocket,
      duration: 'Ongoing',
      description: 'Zero-downtime production cutover with full source repository and IP transfer. Continuous proactive monitoring, SLA guarantees, and performance tuning.',
      deliverables: [
        'Zero-downtime production deployment',
        '100% full IP & repository ownership handover',
        '24/7 telemetry & SLA monitoring contracts'
      ],
      output: 'LONG-TERM SUPPORT',
      preview: {
        badge: 'Live Uptime',
        metric: '99.99%',
        status: '24/7 Monitored',
        tags: ['Automated Backups', 'Zero Lock-in', 'SLA Tier 1']
      }
    },
  ];

  // Sticky Scroll Driver: Pin the section and advance step 1 -> 2 -> 3 -> 4 as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowH = window.innerHeight;
      const totalScrollable = sectionHeight - windowH;

      if (totalScrollable <= 0) return;

      // Distance scrolled into this section
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // Map progress [0, 1] to step [0, steps.length - 1]
      const stepIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      setActiveStep(stepIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  // Click on dot or arrows smoothly scrolls page to that step's segment
  const scrollToStep = (index: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
    
    // Position inside the middle of that step's scroll segment
    const stepCenterFraction = (index + 0.5) / steps.length;
    const targetScroll = sectionTop + stepCenterFraction * totalScrollable;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
    setActiveStep(index);
  };

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      scrollToStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      scrollToStep(activeStep - 1);
    }
  };

  return (
    <section 
      id="approach" 
      ref={sectionRef} 
      className="relative w-full bg-[#FAFBFD] border-y border-[#E2E8F0] bg-tech-grid"
      style={{ height: '320vh' }}
    >
      {/* Background Soft Ambient Light Blobs */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-[#14532D]/[0.035] blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#22C55E]/[0.025] blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Sticky Viewport Container: Stays pinned while scrolling through the 4 steps */}
      <div className="sticky top-20 lg:top-24 h-[calc(100vh-5.5rem)] lg:h-[calc(100vh-6.5rem)] flex items-center justify-center">
        
        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-20 py-2 sm:py-4">
          
          {/* Main 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Timeline, Headings, and Connected Glowing Dots */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] font-mono text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#14532D] mb-3 shadow-xs w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#14532D]" />
                <span>04 / HOW WE DELIVER</span>
              </div>

              {/* Title */}
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-[#111D33] tracking-tight leading-[1.12] mb-3">
                A clear path from<br />
                <span className="text-gradient-hero">ambition to execution.</span>
              </h2>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14.5px] text-[#617087] leading-[1.6] mb-6 max-w-[480px]">
                No black boxes. A structured, transparent engineering pipeline with visible milestones, shared decisions, and software engineered for longevity.
              </p>

              {/* Vertical Connected Timeline with Glowing Dots */}
              <div className="relative pl-8 mb-6 max-w-[420px]">
                
                {/* Background Continuous Timeline Line */}
                <div className="absolute left-[13px] top-3 bottom-5 w-[2px] bg-[#E2E8F0]" />

                {/* Dynamic Active Progress Fill Line */}
                <div 
                  className="absolute left-[13px] top-3 w-[2px] bg-[#14532D] transition-all duration-500 ease-out"
                  style={{
                    height: `${(activeStep / (steps.length - 1)) * 82}%`
                  }}
                />

                {/* Step Items with Dots */}
                <div className="space-y-4">
                  {steps.map((st, i) => {
                    const isActive = activeStep === i;
                    const isPassed = activeStep > i;

                    return (
                      <button
                        key={st.step}
                        onClick={() => scrollToStep(i)}
                        className="group flex items-start text-left w-full cursor-pointer focus:outline-none transition-transform duration-200 hover:translate-x-1"
                      >
                        {/* Timeline Dot on the Line */}
                        <div className="absolute left-0 -translate-x-[0px] mt-0.5">
                          <div 
                            className={`w-6.5 h-6.5 rounded-full flex items-center justify-center font-mono text-[10.5px] font-bold transition-all duration-300 ${
                              isActive
                                ? 'bg-[#14532D] text-white shadow-[0_0_0_4px_rgba(20,83,45,0.18)] scale-105 ring-2 ring-[#86EFAC]'
                                : isPassed
                                ? 'bg-[#14532D] text-white'
                                : 'bg-white border-2 border-[#CBD5E1] text-[#94A3B8] group-hover:border-[#14532D]'
                            }`}
                          >
                            {isPassed ? (
                              <Check className="w-3 h-3 text-white stroke-[3]" />
                            ) : (
                              st.step
                            )}
                          </div>
                        </div>

                        {/* Step Text Info */}
                        <div className="pl-2.5">
                          <div className="flex items-center gap-2">
                            <span className={`text-[14px] font-bold transition-colors ${
                              isActive 
                                ? 'text-[#14532D]' 
                                : 'text-[#334155] group-hover:text-[#111D33]'
                            }`}>
                              {st.title}
                            </span>
                            <span className="font-mono text-[9.5px] text-[#64748B] uppercase bg-gray-100 px-2 py-0.5 rounded">
                              {st.duration}
                            </span>
                          </div>
                          <span className={`text-[11px] block transition-colors ${
                            isActive ? 'text-[#475569] font-medium' : 'text-[#94A3B8]'
                          }`}>
                            {st.tag}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Controls & Scroll Hint */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-200 max-w-[450px]">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevStep}
                    disabled={activeStep === 0}
                    aria-label="Previous step"
                    className={`w-8.5 h-8.5 rounded-lg border flex items-center justify-center transition-all ${
                      activeStep === 0
                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                        : 'border-[#CBD5E1] bg-white text-[#14532D] hover:bg-[#F0FDF4] hover:border-[#14532D] shadow-xs cursor-pointer'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={nextStep}
                    disabled={activeStep === steps.length - 1}
                    aria-label="Next step"
                    className={`w-8.5 h-8.5 rounded-lg border flex items-center justify-center transition-all ${
                      activeStep === steps.length - 1
                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                        : 'border-[#CBD5E1] bg-white text-[#14532D] hover:bg-[#F0FDF4] hover:border-[#14532D] shadow-xs cursor-pointer'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-[11.5px] font-mono text-[#64748B]">
                  Step <span className="font-bold text-[#14532D]">{activeStep + 1}</span> of {steps.length}
                </div>

                <div className="ml-auto flex items-center gap-1.5 text-[10.5px] font-mono text-[#14532D] bg-[#F0FDF4] px-2.5 py-1 rounded-full border border-[#BBF7D0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                  <span>Scroll to advance</span>
                </div>
              </div>

            </div>

            {/* Right Column: Exact 1-Card Focused Viewport */}
            <div className="lg:col-span-6 flex justify-center">
              
              <div className="w-full max-w-[480px] xl:max-w-[500px] overflow-hidden rounded-[20px] p-1">
                
                {/* Horizontal Sliding Film Strip of Cards: Shows exactly 1 card at a time with 100% width */}
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeStep * 100}%)` }}
                >
                  {steps.map((step) => {
                    const Icon = step.icon;

                    return (
                      <div 
                        key={step.step}
                        className="w-full shrink-0"
                      >
                        <div className="rounded-[20px] bg-white border border-[#14532D] shadow-[0px_16px_40px_rgba(20,83,45,0.11)] ring-1 ring-[#14532D]/30 p-5 sm:p-6 flex flex-col justify-between relative">
                          
                          {/* Top Laser Accent Line */}
                          <div className="absolute top-0 left-8 right-8 h-[2.5px] rounded-full bg-gradient-to-r from-[#14532D] via-[#22C55E] to-[#14532D]" />

                          <div>
                            {/* Card Header: Step Icon + Duration + Step Number */}
                            <div className="flex items-center justify-between mb-3.5">
                              <div className="w-10 h-10 rounded-[12px] bg-[#14532D] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(20,83,45,0.22)]">
                                <Icon className="w-4.5 h-4.5" />
                              </div>

                              <div className="flex items-center gap-2">
                                <span className="font-mono text-[10.5px] font-semibold text-[#64748B] bg-gray-50 border border-gray-200 px-2.5 py-0.5 rounded-full">
                                  {step.duration}
                                </span>
                                <span className="font-mono text-[15px] font-extrabold text-[#14532D]">
                                  {step.step}
                                </span>
                              </div>
                            </div>

                            {/* Tag */}
                            <div className="font-mono text-[9px] font-bold text-[#14532D] tracking-[0.14em] uppercase mb-1">
                              {step.tag}
                            </div>

                            {/* Title */}
                            <h3 className="text-[22px] sm:text-[24px] font-bold text-[#111D33] mb-2">
                              {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[12.5px] sm:text-[13px] text-[#617087] leading-[1.55] mb-3.5 font-normal">
                              {step.description}
                            </p>

                            {/* Micro-Telemetry Live Preview Box */}
                            <div className="mb-3.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                              <div className="flex items-center justify-between text-[10.5px] font-mono mb-1.5">
                                <span className="text-[#64748B] font-medium">{step.preview.badge}</span>
                                <span className="font-bold text-[#14532D] bg-[#DCFCE7] border border-[#BBF7D0] px-2 py-0.5 rounded text-[9.5px]">
                                  {step.preview.metric} · {step.preview.status}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {step.preview.tags.map((tg) => (
                                  <span key={tg} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white border border-gray-200 text-[#475569]">
                                    {tg}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Deliverables Checklist */}
                            <div className="space-y-1.5 mb-3.5 pt-3 border-t border-gray-100">
                              <div className="text-[9.5px] font-mono font-bold uppercase text-[#94A3B8] tracking-wider mb-1">
                                Key Deliverables:
                              </div>
                              {step.deliverables.map((del) => (
                                <div key={del} className="flex items-start gap-2 text-[11.5px] text-[#475569] font-medium leading-tight">
                                  <Check className="w-3.5 h-3.5 text-[#14532D] shrink-0 stroke-[2.5] mt-0.5" />
                                  <span>{del}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Bottom Deliverable Output Badge */}
                          <div className="pt-3 border-t border-gray-100">
                            <div className="flex items-center justify-between p-2 rounded-[8px] bg-[#F0FDF4] border border-[#BBF7D0]">
                              <div className="flex flex-col">
                                <span className="font-mono text-[7.5px] text-[#166534] uppercase tracking-wider font-extrabold">
                                  DELIVERABLE OUTPUT
                                </span>
                                <span className="text-[11px] font-bold text-[#14532D] tracking-tight">
                                  {step.output}
                                </span>
                              </div>
                              <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0" />
                            </div>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Step Progress Fill Bar */}
                <div className="mt-2.5 px-1">
                  <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#14532D] h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${((activeStep + 1) / steps.length) * 100}%`
                      }}
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
