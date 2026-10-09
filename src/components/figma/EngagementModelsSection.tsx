'use client';

import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { Box, Users, Settings2, ArrowUpRight, Sparkles, Check } from 'lucide-react';

export default function EngagementModelsSection() {
  const models = [
    {
      badge: 'A DEFINED CHALLENGE',
      title: 'Project delivery',
      description: 'From discovery to launch, with a clear scope, delivery plan and agreed milestones.',
      idealFor: 'New products, websites or automation initiatives.',
      cta: 'Start Project Delivery',
      icon: Box,
      isFeatured: false,
      features: ['Fixed scope & clear milestones', 'Dedicated agile sprint cycles', 'Direct engineering lead & handover'],
    },
    {
      badge: 'AN EVOLVING ROADMAP',
      badgeSpecial: 'MOST POPULAR',
      title: 'Dedicated partnership',
      description: 'A connected product and engineering team that works alongside your business over time.',
      idealFor: 'Continuous development and enterprise transformation.',
      cta: 'Start Dedicated Partnership',
      icon: Users,
      isFeatured: true,
      features: ['Embedded AI & software squad', 'Continuous priority releases', 'Dedicated SLA & scale roadmap'],
    },
    {
      badge: 'CONTINUOUS CARE',
      title: 'Managed support',
      description: 'A practical support plan for applications, hosting and the systems your business relies on.',
      idealFor: 'Maintenance, security and ongoing continuity.',
      cta: 'Explore Managed Support',
      icon: Settings2,
      isFeatured: false,
      features: ['24/7 automated uptime monitoring', 'Continuous security & dependency patches', 'Monthly dedicated evolution hours'],
    },
  ];

  return (
    <section className="w-full bg-[#FAFBFD] py-24 lg:py-32 border-y border-[#E5E7EB] relative overflow-hidden">
      
      {/* Background Soft Emerald Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#14532D]/[0.04] blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        {/* Section Header with Smooth Scroll Reveal */}
        <ScrollReveal className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#14532D] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#14532D]" />
            <span>06 / YOUR TEAM, EXTENDED</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            <h2 className="lg:col-span-7 text-[36px] sm:text-[46px] lg:text-[52px] font-semibold text-[#111D33] tracking-tight leading-[1.1]">
              The right relationship.<br />
              <span className="text-gradient-hero">Not a one-size-fits-all contract.</span>
            </h2>
            <p className="lg:col-span-5 text-[15px] sm:text-[16px] text-[#617087] leading-[1.65]">
              Start with what you need today. Choose an engagement model that matches your velocity, technical scope, and business objectives.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Balanced Symmetrical Cards with Staggered Cascade */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {models.map((model) => {
            const Icon = model.icon;
            
            // Middle Card: Featured Signature Brand Hero Card
            if (model.isFeatured) {
              return (
                <StaggerItem key={model.title} className="h-full flex flex-col">
                  <div
                  key={model.title}
                  className="relative p-8 sm:p-9 rounded-[20px] bg-gradient-to-b from-[#14532D] via-[#0E3D1F] to-[#0A2916] text-white shadow-[0px_25px_60px_rgba(20,83,45,0.28)] ring-2 ring-[#34D399]/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-[0px_30px_70px_rgba(20,83,45,0.4)] group"
                >
                  {/* Top Glowing Laser Beam */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#34D399] to-transparent" />

                  <div>
                    {/* Badges Row */}
                    <div className="flex items-center justify-between mb-7">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] font-bold text-[#A7F3D0] tracking-[0.12em] uppercase px-3 py-1 rounded-full bg-white/10 border border-[#34D399]/40 backdrop-blur-md">
                          {model.badge}
                        </span>
                        <span className="font-mono text-[9px] font-extrabold text-[#064E3B] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-[#34D399] shadow-xs">
                          {model.badgeSpecial}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-[10px] bg-white/10 border border-white/20 flex items-center justify-center text-[#A7F3D0] shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[25px] sm:text-[27px] font-semibold text-white mb-3">
                      {model.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] sm:text-[15px] text-[#D1FAE5] leading-[1.65] mb-6 font-normal">
                      {model.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-2.5 mb-8">
                      {model.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 text-[12px] text-white font-medium">
                          <span className="w-4 h-4 rounded-full bg-[#34D399] text-[#064E3B] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clean Bottom Area: Subtitle + High-End CTA */}
                  <div className="pt-6 border-t border-white/10 space-y-3.5">
                    <p className="text-[11px] text-[#A7F3D0] font-medium leading-relaxed">
                      Best for: {model.idealFor}
                    </p>

                    <a
                      href="#contact"
                      className="w-full h-[48px] rounded-[10px] bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857] hover:from-[#34D399] hover:to-[#059669] text-white font-semibold text-[13px] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.5)] transition-all border border-white/20 hover:scale-[1.01]"
                    >
                      <span>{model.cta}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </StaggerItem>
            );
          }

          // Cards 1 & 3: Clean Symmetrical Brand Cards
          return (
            <StaggerItem key={model.title} className="h-full flex flex-col">
              <div
                key={model.title}
                className="relative p-8 rounded-[20px] bg-white border border-[#E5E7EB] hover:border-[#14532D]/40 shadow-[0px_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0px_20px_50px_rgba(20,83,45,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 h-full"
              >
                {/* Top Subtle Hover Accent */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#14532D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-7">
                    <span className="font-mono text-[9px] font-bold text-[#14532D] tracking-[0.12em] uppercase px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0]">
                      {model.badge}
                    </span>
                    <div className="w-10 h-10 rounded-[10px] bg-[#F8FAFC] group-hover:bg-[#F0FDF4] border border-[#E5E7EB] group-hover:border-[#BBF7D0] flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-[#14532D]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] sm:text-[25px] font-semibold text-[#111D33] mb-3 group-hover:text-[#14532D] transition-colors">
                    {model.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] text-[#617087] leading-[1.65] mb-6">
                    {model.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2.5 mb-8">
                    {model.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-[12px] text-[#475569] font-medium">
                        <span className="w-4 h-4 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#14532D] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clean Bottom Area: Subtitle + Button (No Text Collision) */}
                <div className="pt-6 border-t border-gray-100 space-y-3.5">
                  <p className="text-[11px] text-[#617087] font-medium leading-relaxed">
                    Best for: {model.idealFor}
                  </p>

                  <a
                    href="#contact"
                    className="w-full h-[48px] rounded-[10px] bg-[#F8FAFC] hover:bg-[#14532D] text-[#111D33] hover:text-white font-semibold text-[13px] border border-[#E5E7EB] hover:border-[#14532D] flex items-center justify-center gap-2 transition-all shadow-2xs hover:shadow-sm"
                  >
                    <span>{model.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      </div>
    </section>
  );
}
