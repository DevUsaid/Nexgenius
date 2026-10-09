'use client';

import { useState, useEffect } from 'react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { 
  ShieldCheck, 
  Server, 
  FileCode2, 
  Check, 
  Activity, 
  RefreshCw, 
  Globe, 
  Database, 
  Cpu, 
  Zap, 
  Lock,
  ArrowUpRight,
  GitBranch
} from 'lucide-react';

export default function EngineeringContinuitySection() {
  const [activeStage, setActiveStage] = useState<'build' | 'deploy' | 'maintain'>('maintain');
  const [pingPulse, setPingPulse] = useState(false);

  // Auto-cycle between the 3 stages: Build -> Deploy -> Maintain
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setActiveStage((prev) => {
        if (prev === 'build') return 'deploy';
        if (prev === 'deploy') return 'maintain';
        return 'build';
      });
    }, 4500);

    const pulseInterval = setInterval(() => {
      setPingPulse((prev) => !prev);
    }, 1500);

    return () => {
      clearInterval(cycleInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  const commitments = [
    {
      title: 'Security-conscious by design',
      description: 'Access controls, sensible data boundaries and considered integrations.',
      icon: ShieldCheck,
    },
    {
      title: 'Infrastructure without the loose ends',
      description: 'Domains, hosting, deployment, backups and server maintenance.',
      icon: Server,
    },
    {
      title: 'Software you can build on',
      description: 'Maintainable code, documentation and a structured handover.',
      icon: FileCode2,
    },
  ];

  return (
    <section className="w-full bg-white py-24 lg:py-32 border-b border-[#E5E7EB] relative overflow-hidden">
      
      {/* Background Subtle Tech Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#14532D]/[0.03] blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Live Animated Cloud & Infrastructure Continuity Console */}
          <ScrollReveal className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[540px] h-[440px] sm:h-[460px] rounded-[18px] overflow-hidden bg-[#0B0F19] border border-white/10 shadow-[0px_25px_60px_rgba(0,0,0,0.35)] p-5 sm:p-6 flex flex-col justify-between ring-1 ring-white/5 group">
              
              {/* Background Cyber Grid */}
              <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />

              {/* Ambient Green Light Blob */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Top Bar: Telemetry Status & Stage Indicator */}
              <div className="relative z-10 flex items-center justify-between pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                  <span className="font-mono text-[10px] font-bold text-slate-300 tracking-[0.14em] uppercase">
                    CONTINUITY TELEMETRY · LIVE
                  </span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[9px] text-[#A7F3D0]">
                  <Activity className="w-3 h-3 text-[#34D399]" />
                  <span>UPTIME 99.99%</span>
                </div>
              </div>

              {/* Interactive Stage Selector Bar */}
              <div className="relative z-10 grid grid-cols-3 gap-1.5 p-1 rounded-[10px] bg-white/5 border border-white/10 my-3">
                <button
                  onClick={() => setActiveStage('build')}
                  className={`py-1.5 rounded-[7px] text-[11px] font-mono font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeStage === 'build'
                      ? 'bg-[#14532D] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <GitBranch className="w-3 h-3" />
                  <span>1. BUILD</span>
                </button>

                <button
                  onClick={() => setActiveStage('deploy')}
                  className={`py-1.5 rounded-[7px] text-[11px] font-mono font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeStage === 'deploy'
                      ? 'bg-[#14532D] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Globe className="w-3 h-3" />
                  <span>2. DEPLOY</span>
                </button>

                <button
                  onClick={() => setActiveStage('maintain')}
                  className={`py-1.5 rounded-[7px] text-[11px] font-mono font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeStage === 'maintain'
                      ? 'bg-[#14532D] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>3. MAINTAIN</span>
                </button>
              </div>

              {/* Dynamic Animated Content Display Area */}
              <div className="relative z-10 flex-1 my-1 p-4 rounded-[12px] bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col justify-between">
                
                {/* STAGE 1: BUILD PIPELINE ANIMATION */}
                {activeStage === 'build' && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>CI/CD Automated Build Pipeline</span>
                      <span className="text-[#34D399] font-bold">Passing ✓</span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between text-slate-200">
                        <span className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#34D399]" />
                          <span>Code Quality & TypeScript Audit</span>
                        </span>
                        <span className="font-mono text-[9px] text-[#A7F3D0]">0 Errors</span>
                      </div>

                      <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between text-slate-200">
                        <span className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#34D399]" />
                          <span>Automated Integration Test Suite</span>
                        </span>
                        <span className="font-mono text-[9px] text-[#A7F3D0]">148/148 Passed</span>
                      </div>

                      <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between text-slate-200">
                        <span className="flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
                          <span>Container Vulnerability Scan</span>
                        </span>
                        <span className="font-mono text-[9px] text-[#A7F3D0]">Clean (SOC-2)</span>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[9px] font-mono text-slate-500">
                      <span>Artifact Bundle: 32.4MB Optimized</span>
                      <span>Build Time: 21.4s</span>
                    </div>
                  </div>
                )}

                {/* STAGE 2: DEPLOY MULTI-REGION CLOUD ANIMATION */}
                {activeStage === 'deploy' && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>Global Edge Mesh Routing</span>
                      <span className="text-[#34D399] font-bold">Zero-Downtime Rollout</span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between text-slate-200">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#34D399] animate-ping" />
                          <span>US-East (N. Virginia Cluster)</span>
                        </span>
                        <span className="font-mono text-[9px] text-[#A7F3D0]">14ms Latency</span>
                      </div>

                      <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between text-slate-200">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#34D399] animate-ping" />
                          <span>EU-Central (Frankfurt Edge)</span>
                        </span>
                        <span className="font-mono text-[9px] text-[#A7F3D0]">22ms Latency</span>
                      </div>

                      <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between text-slate-200">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#34D399] animate-ping" />
                          <span>AP-South (Singapore Fast-Path)</span>
                        </span>
                        <span className="font-mono text-[9px] text-[#A7F3D0]">31ms Latency</span>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[9px] font-mono text-slate-500">
                      <span>SSL Auto-Renewed (TLS 1.3)</span>
                      <span>Traffic Shift: 100% Healthy</span>
                    </div>
                  </div>
                )}

                {/* STAGE 3: 24/7 AUTONOMOUS MAINTENANCE & SELF-HEALING */}
                {activeStage === 'maintain' && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>Continuous Proactive Maintenance</span>
                      <span className="text-[#34D399] font-bold">Autonomous Daemon</span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between text-slate-200">
                        <span className="flex items-center gap-2">
                          <Activity className="w-3.5 h-3.5 text-[#34D399] animate-pulse" />
                          <span>Health Heartbeat Probe</span>
                        </span>
                        <span className="font-mono text-[9px] text-[#A7F3D0]">Every 10s · 200 OK</span>
                      </div>

                      <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between text-slate-200">
                        <span className="flex items-center gap-2">
                          <Database className="w-3.5 h-3.5 text-[#34D399]" />
                          <span>Point-in-Time Database Snapshots</span>
                        </span>
                        <span className="font-mono text-[9px] text-[#A7F3D0]">Encrypted · S3/GCS</span>
                      </div>

                      <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between text-slate-200">
                        <span className="flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-[#34D399]" />
                          <span>Self-Healing Anomaly Detector</span>
                        </span>
                        <span className="font-mono text-[9px] text-[#A7F3D0]">0 Drift Detected</span>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[9px] font-mono text-slate-500">
                      <span>Incident MTTR: &lt; 4 mins SLA</span>
                      <span>Continuous Patching: Enabled</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Layer Floating Bar (Figma Style Enhanced) */}
              <div className="relative z-10 p-3 rounded-[10px] bg-white/95 text-[#0B0F19] shadow-lg flex items-center justify-around border border-[#D1FAE5]">
                <div className={`flex items-center gap-2 text-[12px] font-bold transition-all ${
                  activeStage === 'build' ? 'text-[#14532D] scale-105' : 'text-[#64748B]'
                }`}>
                  <span className="w-4 h-4 rounded-full bg-[#D1FAE5] text-[#14532D] flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>Build</span>
                </div>

                <div className={`flex items-center gap-2 text-[12px] font-bold transition-all ${
                  activeStage === 'deploy' ? 'text-[#14532D] scale-105' : 'text-[#64748B]'
                }`}>
                  <span className="w-4 h-4 rounded-full bg-[#D1FAE5] text-[#14532D] flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>Deploy</span>
                </div>

                <div className={`flex items-center gap-2 text-[12px] font-bold transition-all ${
                  activeStage === 'maintain' ? 'text-[#14532D] scale-105' : 'text-[#64748B]'
                }`}>
                  <span className="w-4 h-4 rounded-full bg-[#D1FAE5] text-[#14532D] flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span>Maintain</span>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column: Engineering Principles with Scroll Reveal */}
          <ScrollReveal delay={0.15} className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#14532D] mb-5">
              <span>05 / BUILT FOR THE LONG TERM</span>
            </div>

            <h2 className="text-[36px] sm:text-[46px] lg:text-[52px] font-semibold text-[#111D33] tracking-tight leading-[1.1] mb-5">
              Launch is a milestone.<br />
              <span className="text-gradient-hero">Not the finish line.</span>
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#617087] leading-[1.65] mb-8 font-normal">
              We connect disciplined software engineering with ongoing operational care—so your applications, cloud architecture and automated pipelines thrive long after release.
            </p>

            {/* Commitments List with Stagger */}
            <StaggerContainer className="w-full space-y-5 pt-6 border-t border-[#E5E7EB]">
              {commitments.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <div className="flex items-start gap-4 p-3 rounded-[12px] transition-all hover:bg-[#F8FAFC]">
                      <div className="w-10 h-10 rounded-[10px] bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center shrink-0 mt-0.5 text-[#14532D] shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[16px] font-semibold text-[#111D33] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[13px] text-[#617087] leading-[1.5]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
