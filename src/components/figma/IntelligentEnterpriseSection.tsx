'use client';

import { ArrowUpRight, ArrowDown, Sparkles, UserCheck, Cpu, Zap, Activity } from 'lucide-react';

export default function IntelligentEnterpriseSection() {
  const tools = [
    { name: 'CRM', desc: 'Customer Data' },
    { name: 'Email', desc: 'Inbound Inquiries' },
    { name: 'Documents', desc: 'Contracts & PDF' },
    { name: 'ERP', desc: 'Ledger & Stock' },
  ];

  return (
    <section id="ai-workforce" className="w-full bg-[#0B0F19] text-white py-24 lg:py-32 relative overflow-hidden bg-tech-grid-dark">

      {/* Radiant Emerald Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#10B981]/[0.08] blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#14532D]/[0.15] blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">

        {/* Top Grid: Promise + Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">

          {/* Left Column: AI Promise */}
          <div className="lg:col-span-6 flex flex-col items-start max-w-[570px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14532D]/40 border border-[#10B981]/30 font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#A7F3D0] mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#34D399]" />
              <span>02 / THE INTELLIGENT ENTERPRISE</span>
            </div>

            <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] font-semibold text-white tracking-tight leading-[1.08] mb-6">
              Your next team member <br />
              <span className="text-gradient-emerald">
                might be an autonomous system.
              </span>
            </h2>

            <p className="text-[16px] sm:text-[18px] text-[#94A3B8] font-normal leading-[1.7] mb-8">
              Build a digital workforce that handles repeatable business processes, synchronizes your tools and escalates only what requires human judgment. Custom-engineered around your exact architecture—not a generic chatbot.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 h-[52px] px-7 rounded-[8px] bg-white hover:bg-slate-100 text-[#0B0F19] text-[14px] font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:scale-[1.02] mb-6"
            >
              <span>Explore AI for your business</span>
              <ArrowUpRight className="w-4 h-4 text-[#0B0F19]" />
            </a>

            <div className="p-3.5 rounded-[8px] bg-white/[0.03] border border-white/10 font-mono text-[11px] text-[#94A3B8] leading-relaxed backdrop-blur-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>
              <span><strong className="text-white">AI FTE /</strong> Role-based digital workers with defined permissions, SLA guarantees, and audit logs.</span>
            </div>
          </div>

          {/* Right Column: Orchestration Blueprint (Cyber Terminal Look) */}
          <div className="lg:col-span-6">
            <div className="bg-[#111827]/90 backdrop-blur-2xl border border-white/10 rounded-[16px] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative overflow-hidden ring-1 ring-white/5">

              {/* Subtle Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 font-mono text-[11px] font-medium text-slate-300 tracking-[0.1em] uppercase">
                    SYSTEM PIPELINE / ORCHESTRATION BLUEPRINT
                  </span>
                </div>
                <Activity className="w-4 h-4 text-[#34D399] animate-pulse" />
              </div>

              {/* Connected Input Tools */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-2.5 rounded-[8px] bg-[#1E293B]/80 border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#34D399]/40 transition-colors"
                  >
                    <span className="font-mono text-[12px] font-bold text-white mb-0.5">{tool.name}</span>
                    <span className="text-[9px] text-slate-400 font-mono">{tool.desc}</span>
                  </div>
                ))}
              </div>

              {/* Dynamic Flow Line */}
              <div className="flex items-center justify-center my-2 text-[#34D399]">
                <div className="flex flex-col items-center">
                  <span className="w-0.5 h-4 bg-gradient-to-b from-white/20 to-[#34D399]"></span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>

              {/* Operations Agent Core Box */}
              <div className="bg-gradient-to-r from-[#14532D] to-[#0d3b1f] border border-[#34D399]/40 rounded-[12px] p-5 sm:p-6 mb-4 shadow-[0_10px_30px_rgba(20,83,45,0.4)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Cpu className="w-16 h-16 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#A7F3D0]">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h4 className="text-[20px] font-semibold text-white">
                      Operations Core Agent
                    </h4>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#A7F3D0] border border-[#34D399]/40 font-bold">
                    SYNAPSE ENGINE
                  </span>
                </div>
                <p className="text-[13px] text-[#D1FAE5] font-mono mt-2">
                  Understand ➔ Synthesize ➔ Execute ➔ Document
                </p>
              </div>

              {/* Dynamic Flow Line */}
              <div className="flex items-center justify-center my-2 text-[#34D399]">
                <div className="flex flex-col items-center">
                  <span className="w-0.5 h-4 bg-gradient-to-b from-[#34D399] to-white/20"></span>
                  <ArrowDown className="w-4 h-4" />
                </div>
              </div>

              {/* Human Approval Guardrail */}
              <div className="p-4 rounded-[10px] bg-[#1E293B]/70 border border-white/10 flex items-center gap-3.5 mb-5 hover:border-white/20 transition-colors">
                <div className="w-9 h-9 rounded-full bg-[#10B981]/15 text-[#34D399] flex items-center justify-center shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white">
                    Human approval where it matters
                  </div>
                  <div className="text-[12px] text-slate-400">
                    Custom permissions, review queues and immutable audit trails.
                  </div>
                </div>
              </div>

              {/* Blueprint Footer Note */}
              <div className="flex items-center justify-between pt-2 text-[10px] font-mono text-slate-400 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse"></span>
                  <span>ENTERPRISE SPECIFICATION READY</span>
                </div>
                <span className="text-[#34D399]">99.98% RELIABILITY</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Spectrum: 3 Next.js Feature Columns */}
        <div className="pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          <div className="p-6 rounded-[12px] bg-white/[0.02] border border-white/5 hover:border-[#10B981]/30 transition-all">
            <h3 className="text-[22px] sm:text-[24px] font-semibold text-white mb-2 flex items-center gap-2">
              <span className="text-[#34D399]">01</span> AI Automation
            </h3>
            <p className="text-[14px] text-slate-200 font-medium mb-1">
              Connect disjointed workflows. Remove repetitive manual tasks.
            </p>
            <p className="text-[13px] text-slate-400">
              Cross-app approvals, document data extraction, and ERP auto-sync.
            </p>
          </div>

          <div className="p-6 rounded-[12px] bg-white/[0.02] border border-white/5 hover:border-[#10B981]/30 transition-all">
            <h3 className="text-[22px] sm:text-[24px] font-semibold text-white mb-2 flex items-center gap-2">
              <span className="text-[#34D399]">02</span> AI Autonomous Agents
            </h3>
            <p className="text-[14px] text-slate-200 font-medium mb-1">
              Give software clear business objectives, not just simple scripts.
            </p>
            <p className="text-[13px] text-slate-400">
              Knowledge retrieval engines, customer triage, and intelligent dispatching.
            </p>
          </div>

          <div className="p-6 rounded-[12px] bg-white/[0.02] border border-white/5 hover:border-[#10B981]/30 transition-all">
            <h3 className="text-[22px] sm:text-[24px] font-semibold text-white mb-2 flex items-center gap-2">
              <span className="text-[#34D399]">03</span> AI FTE Workforce
            </h3>
            <p className="text-[14px] text-slate-200 font-medium mb-1">
              Deploy dedicated digital roles with defined KPI ownership.
            </p>
            <p className="text-[13px] text-slate-400">
              Standard operating procedures, automated task logs, and continuous learning.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
