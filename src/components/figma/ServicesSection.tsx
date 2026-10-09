'use client';

import { useState, useRef } from 'react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import {
  Cpu,
  LayoutGrid,
  Globe,
  Smartphone,
  Server,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Code2,
  Terminal,
  Database
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  tags: string[];
  icon: any;
  isHighlighted: boolean;
  type: 'ai' | 'software' | 'web' | 'mobile' | 'cloud' | 'seo';
}

function TiltCard({ service }: { service: ServiceItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0, isHovered: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max tilt angles: 8 degrees for a subtle, high-end feel
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ rotateX, rotateY, x, y, isHovered: true });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, x: 0, y: 0, isHovered: false });
  };

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group transition-all duration-200 ease-out h-full"
      style={{
        perspective: 1000,
        transform: tilt.isHovered
          ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-8px) scale3d(1.015, 1.015, 1.015)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className={`relative h-full flex flex-col justify-between p-7 sm:p-8 rounded-[24px] bg-white border transition-all duration-300 overflow-hidden ${service.isHighlighted
          ? 'border-[#14532D] shadow-[0px_20px_50px_rgba(20,83,45,0.12)] ring-1 ring-[#14532D]/30'
          : 'border-[#E2E8F0] shadow-[0px_10px_35px_rgba(0,0,0,0.03)] hover:border-[#14532D]/40 hover:shadow-[0px_25px_60px_rgba(20,83,45,0.1)]'
          }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Dynamic Interactive Cursor Spotlight following mouse position */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          style={{
            background: `radial-gradient(350px circle at ${tilt.x}px ${tilt.y}px, rgba(20, 83, 45, 0.12), transparent 80%)`,
          }}
        />

        {/* Top 3D Specular Laser Highlight Line */}
        <div className={`absolute top-0 left-8 right-8 h-[2.5px] rounded-full transition-opacity duration-300 ${service.isHighlighted
          ? 'bg-gradient-to-r from-[#14532D] via-[#22C55E] to-[#14532D] opacity-100'
          : 'bg-gradient-to-r from-transparent via-[#14532D] to-transparent opacity-0 group-hover:opacity-100'
          }`} />

        {/* Card Content with 3D Pop-Out Layers */}
        <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>

          {/* Top Bar: Identifier + 3D Pop Icon */}
          <div className="flex items-center justify-between mb-5">
            <span
              className="font-mono text-[10px] text-[#64748B] tracking-[0.14em] uppercase font-bold"
              style={{ transform: 'translateZ(15px)' }}
            >
              {service.id}
            </span>

            {/* 3D Floating Icon Pod */}
            <div
              className={`w-12 h-12 rounded-[14px] flex items-center justify-center transition-all duration-300 ${service.isHighlighted
                ? 'bg-[#14532D] text-white shadow-[0_6px_20px_rgba(20,83,45,0.3)]'
                : 'bg-[#F0FDF4] border border-[#BBF7D0] text-[#14532D] group-hover:bg-[#14532D] group-hover:text-white group-hover:shadow-[0_6px_20px_rgba(20,83,45,0.25)]'
                }`}
              style={{ transform: 'translateZ(32px)' }}
            >
              <Icon className="w-5 h-5 stroke-[2.2] transition-transform group-hover:scale-110" />
            </div>
          </div>

          {/* Micro-Telemetry Tech Pill */}
          <div className="mb-3" style={{ transform: 'translateZ(22px)' }}>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] font-mono text-[9.5px] font-bold text-[#14532D]">
              {service.badge}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-[22px] sm:text-[24px] font-bold text-[#111D33] mb-3 group-hover:text-[#14532D] transition-colors leading-tight"
            style={{ transform: 'translateZ(26px)' }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            className="text-[13.5px] sm:text-[14px] text-[#617087] leading-[1.62] mb-6 font-normal"
            style={{ transform: 'translateZ(18px)' }}
          >
            {service.description}
          </p>

          {/* 3D Micro-Visual Interactive Graphic inside the Card */}
          <div
            className="mb-6 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] group-hover:border-[#BBF7D0] transition-colors"
            style={{ transform: 'translateZ(24px)' }}
          >
            {service.type === 'ai' && (
              <div className="flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-[#14532D] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping" />
                  <span>Neural Pipeline</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#475569]">
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200">LangGraph</span>
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200">GCP AI</span>
                </div>
              </div>
            )}

            {service.type === 'software' && (
              <div className="flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-1.5 text-[#111D33] font-bold">
                  <Database className="w-3.5 h-3.5 text-[#14532D]" />
                  <span>API Architecture</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#475569]">
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200">REST & gRPC</span>
                  <span className="bg-[#DCFCE7] text-[#14532D] px-2 py-0.5 rounded font-bold">Postgres</span>
                </div>
              </div>
            )}

            {service.type === 'web' && (
              <div className="flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-1.5 text-[#111D33] font-bold">
                  <Code2 className="w-3.5 h-3.5 text-[#14532D]" />
                  <span>Edge Rendering</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#475569]">
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200">Turbopack</span>
                  <span className="bg-[#DCFCE7] text-[#14532D] px-2 py-0.5 rounded font-bold">Next.js 16</span>
                </div>
              </div>
            )}

            {service.type === 'mobile' && (
              <div className="flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-1.5 text-[#111D33] font-bold">
                  <Smartphone className="w-3.5 h-3.5 text-[#14532D]" />
                  <span>Cross-Platform</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#475569]">
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200">React Native</span>
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200">Swift / Kotlin</span>
                </div>
              </div>
            )}

            {service.type === 'cloud' && (
              <div className="flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-1.5 text-[#111D33] font-bold">
                  <Server className="w-3.5 h-3.5 text-[#14532D]" />
                  <span>Infrastructure</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#475569]">
                  <span className="bg-[#DCFCE7] text-[#14532D] px-2 py-0.5 rounded font-bold">Terraform</span>
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200">Docker</span>
                </div>
              </div>
            )}

            {service.type === 'seo' && (
              <div className="flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-1.5 text-[#111D33] font-bold">
                  <TrendingUp className="w-3.5 h-3.5 text-[#14532D]" />
                  <span>Growth Velocity</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#475569]">
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200">Structured Data</span>
                  <span className="bg-[#DCFCE7] text-[#14532D] px-2 py-0.5 rounded font-bold">99+ Lighthouse</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tags Footer with 3D Pop Depth */}
        <div
          className="relative z-10 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="flex flex-wrap gap-1.5">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-[7px] text-[11px] font-medium bg-gray-50 text-[#475569] group-hover:text-[#14532D] border border-gray-200 group-hover:border-[#BBF7D0] group-hover:bg-[#F0FDF4] transition-all shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 3D Action Arrow */}
          <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-200 group-hover:border-[#BBF7D0] group-hover:bg-[#F0FDF4] flex items-center justify-center transition-all group-hover:scale-110 shrink-0">
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#14532D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      id: '01 / INTELLIGENCE',
      title: 'AI & digital workforce',
      badge: '● 4,800+ OPS / SEC',
      description: 'Turn repetitive manual operations into intelligent, self-running workflows — with full human-in-the-loop governance.',
      tags: ['AI automation', 'AI agents', 'Autonomous FTE'],
      icon: Cpu,
      isHighlighted: true,
      type: 'ai',
    },
    {
      id: '02 / PRODUCTS',
      title: 'Web & custom software',
      badge: '● MODULAR MICROSERVICES',
      description: 'Purpose-built web platforms engineered to connect complex business logic, custom APIs, and seamless user experiences.',
      tags: ['Web applications', 'Custom software', 'Internal tools'],
      icon: LayoutGrid,
      isHighlighted: false,
      type: 'software',
    },
    {
      id: '03 / EXPERIENCES',
      title: 'Web development',
      badge: '● <80ms EDGE SPEED',
      description: 'Lightning-fast, highly optimized digital flagships that communicate your authority and convert visitors into clients.',
      tags: ['Next.js flagships', 'Headless CMS', 'E-commerce'],
      icon: Globe,
      isHighlighted: false,
      type: 'web',
    },
    {
      id: '04 / MOBILITY',
      title: 'Mobile applications',
      badge: '● 60 FPS NATIVE PERFORMANCE',
      description: 'Polished iOS and Android mobile applications crafted with native smoothness, offline resilience, and fluid interactions.',
      tags: ['iOS & Android', 'React Native', 'Cross-platform'],
      icon: Smartphone,
      isHighlighted: false,
      type: 'mobile',
    },
    {
      id: '05 / INFRASTRUCTURE',
      title: 'Cloud & managed services',
      badge: '● 99.99% UPTIME SLA',
      description: 'Resilient cloud architecture, zero-downtime CI/CD pipelines, automated daily backups, and 24/7 telemetry monitoring.',
      tags: ['GCP & AWS Cloud', 'DevOps & CI/CD', '24/7 SLA Care'],
      icon: Server,
      isHighlighted: false,
      type: 'cloud',
    },
    {
      id: '06 / VISIBILITY',
      title: 'SEO & organic growth',
      badge: '● TOP 1% SERP AUTHORITY',
      description: 'Technical architecture and content-led search engineering designed to dominate search rankings and generate compounding pipeline.',
      tags: ['Technical SEO', 'Schema graphs', 'Conversion analytics'],
      icon: TrendingUp,
      isHighlighted: false,
      type: 'seo',
    },
  ];

  return (
    <section id="services" className="w-full bg-[#FAFBFD] py-24 lg:py-32 relative overflow-hidden border-b border-[#E5E7EB] bg-tech-grid">

      {/* Ambient Radial Lights */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-[#14532D]/[0.035] blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#22C55E]/[0.025] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Section Header with Smooth Scroll Reveal */}
        <ScrollReveal className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] font-mono text-[11px] font-semibold tracking-[0.1em] uppercase text-[#14532D] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#14532D]" />
            <span>01 / CORE CAPABILITIES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            <h2 className="lg:col-span-7 text-[20px] sm:text-[40px] lg:text-[52px] font-bold text-[#111D33] tracking-tight leading-[1.08]">
              From a single challenge to your<br />
              <span className="text-gradient-hero">entire digital ecosystem.</span>
            </h2>
            <p className="lg:col-span-5 text-[15px] sm:text-[16px] text-[#617087] leading-[1.65]">
              One integrated engineering partner across autonomous intelligence, modern digital products, and high-availability cloud infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* 2x3 Cards Grid with Apple/Linear Smooth Staggered Cascade */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <TiltCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
