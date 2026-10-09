"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Bot, MessageSquare, Mic, Database, Workflow, Globe, 
  ShoppingCart, LayoutTemplate, Cpu, Users, TrendingUp, 
  Headphones, FileSearch, Code2, Eye, ArrowUpRight, 
  ChevronLeft, ChevronRight, RotateCcw, Sparkles
} from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  category: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 0,
    title: 'AI Agent Development',
    description: 'Custom autonomous AI agents built for customer support, sales, lead qualification, and HR operations.',
    icon: <Bot className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'Flagship',
    category: 'Autonomous'
  },
  {
    id: 1,
    title: 'AI Chatbot Development',
    description: 'Context-aware chatbots for websites, WhatsApp, Instagram, and E-commerce tailored to your specific data.',
    icon: <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'Popular',
    category: 'Conversational'
  },
  {
    id: 2,
    title: 'Voice AI Solutions',
    description: 'AI receptionists and call answering agents capable of booking appointments and handling outbound support.',
    icon: <Mic className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'High Impact',
    category: 'Audio AI'
  },
  {
    id: 3,
    title: 'RAG AI Systems',
    description: 'Knowledge base chatbots and Document AI that securely queries your company SOPs and PDFs.',
    icon: <Database className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'Enterprise',
    category: 'Knowledge'
  },
  {
    id: 4,
    title: 'Multi-Agent Systems',
    description: 'Deploy teams of collaborating AI agents (LangGraph, CrewAI) that execute complex multi-step workflows autonomously.',
    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'Next-Gen',
    category: 'Swarm'
  },
  {
    id: 5,
    title: 'AI Sales & Prospecting Agents',
    description: 'Autonomous sales agents that discover qualified leads, craft personalized outreach, handle replies, and book meetings 24/7.',
    icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'Revenue',
    category: 'Growth'
  },
  {
    id: 6,
    title: 'Domain-Specific Custom LLMs',
    description: 'Custom fine-tuning of open-source models (Llama 3, Mistral) trained exclusively on your private enterprise data.',
    icon: <Cpu className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'Deep Tech',
    category: 'Models'
  },
  {
    id: 7,
    title: 'AI Support Desk Agents',
    description: 'Tier-1 and Tier-2 automated support agents integrated directly into Zendesk, Intercom, and CRM platforms.',
    icon: <Headphones className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'Operations',
    category: 'Support'
  },
  {
    id: 8,
    title: 'Autonomous Research Agents',
    description: 'AI agents that perform deep multi-source web research, synthesize competitive intelligence, and output structured reports.',
    icon: <FileSearch className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'Intelligence',
    category: 'Research'
  },
  {
    id: 9,
    title: 'AI Code & Developer Agents',
    description: 'Automated code generation, PR review, and automated bug fixing agents integrated into GitHub and DevOps pipelines.',
    icon: <Code2 className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'DevOps',
    category: 'Engineering'
  },
  {
    id: 10,
    title: 'AI Vision & Document Intelligence',
    description: 'Extract, analyze, and process complex PDFs, invoices, and visual data with multimodal AI vision models.',
    icon: <Eye className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'Multimodal',
    category: 'Vision'
  },
  {
    id: 11,
    title: 'AI Automation',
    description: 'Workflow, CRM, and email automation designed to streamline operations and eliminate manual data entry.',
    icon: <Workflow className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'Productivity',
    category: 'Workflows'
  },
  {
    id: 12,
    title: 'Custom Web Applications',
    description: 'AI-powered workflows, Business Automation platforms, custom dashboards, and admin panels built with modern architecture.',
    icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'Modern Web',
    category: 'Architecture'
  },
  {
    id: 13,
    title: 'E-commerce Solutions',
    description: 'Shopify and WooCommerce stores powered by AI shopping assistants and recommendation engines.',
    icon: <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'Retail',
    category: 'Commerce'
  },
  {
    id: 14,
    title: 'WordPress Development',
    description: 'High-performance business websites, portfolios, landing pages, and blogs with integrated SEO and speed optimization.',
    icon: <LayoutTemplate className="h-5 w-5 sm:h-6 sm:w-6" />,
    badge: 'CMS',
    category: 'Performance'
  }
];

export default function ServicesRing3D() {
  const count = servicesData.length;
  const angleStep = 360 / count; // 24 degrees per card

  const [currentAngle, setCurrentAngle] = useState(0);
  const [targetAngle, setTargetAngle] = useState(0);
  const [isAutoSpin, setIsAutoSpin] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  
  // Compact, proportional dimensions
  const [radius, setRadius] = useState(520);
  const [cardWidth, setCardWidth] = useState(250);
  const [cardHeight, setCardHeight] = useState(330);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ x: number; angle: number }>({ x: 0, angle: 0 });
  const animFrameRef = useRef<number | null>(null);

  // Responsive radius calculation
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRadius(340);
        setCardWidth(210);
        setCardHeight(290);
      } else if (width < 1024) {
        setRadius(440);
        setCardWidth(230);
        setCardHeight(310);
      } else {
        setRadius(540);
        setCardWidth(260);
        setCardHeight(340);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Smooth lerp loop & auto-spin
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      setTargetAngle((prevTarget) => {
        if (isAutoSpin && !isDragging) {
          return prevTarget - 10 * delta; // Slow, elegant orbit
        }
        return prevTarget;
      });

      setCurrentAngle((prevCurrent) => {
        const diff = targetAngle - prevCurrent;
        if (Math.abs(diff) < 0.01) return targetAngle;
        return prevCurrent + diff * 0.12;
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isAutoSpin, isDragging, targetAngle]);

  // Pointer drag events
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setIsAutoSpin(false);
    dragStartRef.current = {
      x: e.clientX,
      angle: targetAngle
    };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const sensitivity = 0.22;
    setTargetAngle(dragStartRef.current.angle + deltaX * sensitivity);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    
    // Snap to nearest card
    const snapped = Math.round(targetAngle / angleStep) * angleStep;
    setTargetAngle(snapped);
  };

  const rotateToCard = useCallback((index: number) => {
    setIsAutoSpin(false);
    const target = -index * angleStep;
    const currentRot = targetAngle;
    const diff = ((target - currentRot) % 360 + 540) % 360 - 180;
    setTargetAngle(currentRot + diff);
  }, [angleStep, targetAngle]);

  const nextCard = () => {
    setIsAutoSpin(false);
    setTargetAngle(prev => Math.round((prev - angleStep) / angleStep) * angleStep);
  };

  const prevCard = () => {
    setIsAutoSpin(false);
    setTargetAngle(prev => Math.round((prev + angleStep) / angleStep) * angleStep);
  };

  const normalizedAngle = ((-Math.round(currentAngle / angleStep) % count) + count) % count;
  const activeService = servicesData[normalizedAngle] || servicesData[0];

  return (
    <div className="relative w-full flex flex-col items-center select-none py-4 sm:py-6">
      
      {/* 3D Viewport Box with Proper Perspective */}
      <div 
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => setIsAutoSpin(false)}
        onMouseLeave={() => !isDragging && setIsAutoSpin(true)}
        className="relative w-full h-[460px] sm:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{
          perspective: '1000px',
          perspectiveOrigin: '50% 50%'
        }}
      >
        {/* Soft Radial Ambient Glow */}
        <div className="absolute w-[500px] h-[350px] rounded-full pointer-events-none -z-10 bg-radial from-[#39FF14]/15 via-transparent to-transparent blur-3xl opacity-60" />

        {/* 3D Cylinder Anchor (Pushed back by radius so front card is at Z=0) */}
        <div
          className="relative flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${radius}px) rotateY(${currentAngle}deg) rotateX(1deg)`,
            transition: isDragging ? 'none' : 'transform 0.05s linear'
          }}
        >
          {servicesData.map((service, index) => {
            const cardBaseAngle = index * angleStep;
            
            // Relative angle to viewer (-180 to 180)
            const netAngle = ((cardBaseAngle + currentAngle) % 360 + 540) % 360 - 180;
            const absAngle = Math.abs(netAngle);
            const isFront = absAngle < angleStep / 1.8;
            const isFacingFront = absAngle < 90;

            // Opacity & depth falloff
            const opacity = isFront 
              ? 1 
              : isFacingFront 
                ? Math.max(0.25, 1 - absAngle / 110) 
                : 0.06;

            return (
              <div
                key={service.id}
                onClick={(e) => {
                  if (Math.abs(netAngle) > 10) {
                    e.stopPropagation();
                    rotateToCard(index);
                  }
                }}
                className={`absolute rounded-[1.75rem] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ${
                  isFront 
                    ? 'border-2 border-[#39FF14] bg-[#061a0d]/95 shadow-[0_0_35px_rgba(57,255,20,0.35)] ring-1 ring-[#39FF14]/40 z-30' 
                    : 'border border-white/10 bg-[#04140a]/80 backdrop-blur-md hover:border-[#39FF14]/40'
                }`}
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${cardBaseAngle}deg) translateZ(${radius}px)`,
                  opacity,
                  filter: isFacingFront ? 'none' : 'blur(2px)',
                  cursor: isFront ? 'default' : 'pointer',
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between mb-4 w-full">
                    <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                      isFront 
                        ? 'bg-[#39FF14] text-[#021107] shadow-[0_0_15px_rgba(57,255,20,0.6)]' 
                        : 'bg-white/5 border border-white/10 text-brand-primary'
                    }`}>
                      {service.icon}
                    </div>

                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isFront 
                        ? 'bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/40' 
                        : 'bg-white/5 text-slate-400 border border-white/5'
                    }`}>
                      {service.badge}
                    </span>
                  </div>

                  <div className="text-[9px] uppercase tracking-[0.2em] font-mono text-slate-400 mb-1.5">
                    {service.category}
                  </div>

                  <h3 className={`text-base sm:text-lg font-bold mb-2 tracking-tight leading-snug line-clamp-2 ${
                    isFront ? 'text-white' : 'text-slate-200'
                  }`}>
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Card Bottom */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between w-full mt-auto">
                  <span className="text-[10px] font-mono text-slate-400">
                    {String(service.id + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                  </span>

                  <a 
                    href="#contact" 
                    onClick={(e) => isFront ? null : e.stopPropagation()}
                    className={`inline-flex items-center gap-1 text-[11px] font-bold transition-all ${
                      isFront 
                        ? 'text-[#39FF14] hover:text-[#00FF7F]' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>Deploy</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-2xl w-full px-6 mt-2">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#39FF14] animate-ping" />
            <span className="text-xs font-mono font-semibold text-white">
              {String(activeService.id + 1).padStart(2, '0')} · {activeService.title}
            </span>
          </div>

          <button
            onClick={() => setIsAutoSpin(!isAutoSpin)}
            title={isAutoSpin ? "Pause Orbit" : "Play Orbit"}
            className={`p-1.5 rounded-full border text-xs transition-colors flex items-center gap-1 cursor-pointer ${
              isAutoSpin 
                ? 'bg-[#39FF14]/15 border-[#39FF14]/30 text-[#39FF14]' 
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            <RotateCcw className={`h-3 w-3 ${isAutoSpin ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
          </button>
        </div>

        <p className="text-[11px] font-mono text-slate-400 order-last sm:order-none">
          Drag to orbit · Click to focus
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={prevCard}
            aria-label="Previous"
            className="p-2.5 rounded-full bg-white/5 hover:bg-[#39FF14]/15 border border-white/10 hover:border-[#39FF14]/40 text-slate-300 hover:text-[#39FF14] transition-all cursor-pointer active:scale-95"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <button
            onClick={nextCard}
            aria-label="Next"
            className="p-2.5 rounded-full bg-white/5 hover:bg-[#39FF14]/15 border border-white/10 hover:border-[#39FF14]/40 text-slate-300 hover:text-[#39FF14] transition-all cursor-pointer active:scale-95"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-1.5 flex-wrap max-w-sm mt-3 px-4">
        {servicesData.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => rotateToCard(idx)}
            aria-label={`Go to ${s.title}`}
            className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
              normalizedAngle === idx 
                ? 'w-6 bg-[#39FF14] shadow-[0_0_8px_#39FF14]' 
                : 'w-1 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

    </div>
  );
}
