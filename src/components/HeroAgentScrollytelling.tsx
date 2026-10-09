"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Cpu, Network, CheckCircle2, ArrowRight, Sparkles, 
  Database, Bot, Zap, Mail, MessageSquare, 
  Workflow, Calendar, Activity, ChevronDown
} from 'lucide-react';

interface HeroAgentScrollytellingProps {
  onBookCall?: () => void;
}

export default function HeroAgentScrollytelling({ onBookCall }: HeroAgentScrollytellingProps) {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20">
      
      {/* ------------------------------------------------------------- */}
      {/* HERO INTRO HEADER                                             */}
      {/* ------------------------------------------------------------- */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
        
        {/* Glow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] text-xs font-mono font-bold tracking-widest uppercase mb-5 shadow-[0_0_20px_rgba(57,255,20,0.25)]">
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          <span>Next-Gen Autonomous AI Agent Workforce</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] mb-5">
          Deploy Autonomous AI Agents <br />
          <span className="text-gradient">Engineered To Think & Execute</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          Scroll down to watch our 4-stage autonomous architecture unfold layer-by-layer in real time.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookCall}
            className="w-full sm:w-auto bg-gradient-to-r from-[#39FF14] via-[#32E000] to-[#00FF7F] text-[#021107] px-8 py-4 rounded-full font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#39FF14]"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          
          <a
            href="#services"
            className="w-full sm:w-auto px-7 py-4 rounded-full font-bold text-sm sm:text-base border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-[#39FF14]/40 transition-all text-center"
          >
            Explore 15 AI Services
          </a>
        </div>

        {/* Scroll Cue */}
        <div className="mt-12 flex flex-col items-center gap-2 text-slate-400 font-mono text-xs animate-bounce">
          <span className="text-[#39FF14] tracking-widest uppercase text-[11px] font-bold">
            Scroll Down To Reveal Each Agent Stage ↓
          </span>
          <ChevronDown className="h-4 w-4 text-[#39FF14]" />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* STACKED STICKY CARDS CONTAINER (1 NEECHE DUSRA, 3, 4)           */}
      {/* ------------------------------------------------------------- */}
      <div className="relative w-full space-y-12 sm:space-y-16">

        {/* ============================================================= */}
        {/* CARD 01: INGESTION & TRIGGER (Sticky at top-24)               */}
        {/* ============================================================= */}
        <div className="sticky top-20 sm:top-24 z-10 w-full">
          <div className="rounded-[2.5rem] bg-[#020e06]/95 border border-[#39FF14]/40 p-6 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl ring-1 ring-white/10">
            
            {/* Stage Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="h-2.5 w-2.5 rounded-full bg-[#39FF14] animate-ping" />
                <span className="text-[#39FF14] font-bold tracking-wider uppercase">
                  Stage 01 · Signal Capture & Real-Time Ingestion
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#39FF14]/15 text-[#39FF14] font-mono text-xs font-bold border border-[#39FF14]/30">
                01 / 04
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Context */}
              <div className="lg:col-span-5 text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#39FF14]/15 text-[#39FF14] text-xs font-mono font-bold">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>PERCEPTION & INTAKE</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Capturing Events Across <br />
                  <span className="text-gradient">Every Enterprise Channel</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The agent listens 24/7 across WhatsApp, inbound email inboxes, Stripe webhooks, and raw PDF SOPs. Unstructured human prompts and payloads are ingested and normalized into high-dimensional vector embeddings within 35 milliseconds.
                </p>
                <div className="pt-2 space-y-2 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14]" />
                    <span>WhatsApp Business API Gateway: Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14]" />
                    <span>Real-time Webhook Receiver (200 OK)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14]" />
                    <span>OCR Multimodal Document Parser Ready</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Animated Simulation */}
              <div className="lg:col-span-7 w-full">
                <div className="rounded-2xl bg-[#031409]/95 border border-[#39FF14]/30 p-5 font-mono text-xs shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14]" />
                      <span className="ml-2">inbound_listener_stream.log</span>
                    </div>
                    <span className="text-[#39FF14] bg-[#39FF14]/10 px-2 py-0.5 rounded text-[10px] animate-pulse">
                      STREAMING LIVE
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: <MessageSquare className="h-4 w-4 text-[#39FF14]" />, title: 'Inbound WhatsApp Inquiry', meta: '"Need AI voice booking agent for clinic chain"', time: '8ms ago' },
                      { icon: <Mail className="h-4 w-4 text-emerald-400" />, title: 'Enterprise RFP Attachment', meta: 'Parsed: Vendor_Specification.pdf (42 pages)', time: '21ms ago' },
                      { icon: <Workflow className="h-4 w-4 text-teal-400" />, title: 'Payment Webhook [Stripe]', meta: 'Event: invoice.payment_succeeded ($5,000)', time: '64ms ago' }
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-white/5 text-[#39FF14]">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-white font-bold">{item.title}</p>
                            <p className="text-slate-400 text-[11px]">{item.meta}</p>
                          </div>
                        </div>
                        <span className="text-[#39FF14] text-[10px] bg-[#39FF14]/10 px-2 py-0.5 rounded">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>QUEUE_STATUS: INGESTING</span>
                    <span className="text-[#39FF14]">LATENCY: 32ms</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================= */}
        {/* CARD 02: REASONING & PLANNING (Sticky at top-28, stacks over)  */}
        {/* ============================================================= */}
        <div className="sticky top-24 sm:top-28 z-20 w-full">
          <div className="rounded-[2.5rem] bg-[#021207]/95 border border-[#39FF14]/50 p-6 sm:p-9 shadow-[0_30px_70px_rgba(0,0,0,0.9)] backdrop-blur-2xl ring-1 ring-white/10">
            
            {/* Stage Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="h-2.5 w-2.5 rounded-full bg-[#39FF14] animate-ping" />
                <span className="text-[#39FF14] font-bold tracking-wider uppercase">
                  Stage 02 · Cognitive Reasoning & Knowledge Retrieval
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#39FF14]/15 text-[#39FF14] font-mono text-xs font-bold border border-[#39FF14]/30">
                02 / 04
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#39FF14]/15 text-[#39FF14] text-xs font-mono font-bold">
                  <Cpu className="h-3.5 w-3.5" />
                  <span>COGNITIVE CORE</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Dynamic Reasoning via <br />
                  <span className="text-gradient">Enterprise Vector RAG</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  No static if/else branching. The LLM cognitive loop retrieves private company SOPs, matches context with 98.6% cosine similarity, and synthesizes a multi-step execution plan aligned with enterprise safety rules.
                </p>
                <div className="pt-2 space-y-2 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14]" />
                    <span>Vector Similarity Match: 98.6%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14]" />
                    <span>ChromaDB / Pinecone Index Connected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14]" />
                    <span>Self-Correction & Constraint Evaluation</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Reasoning Terminal */}
              <div className="lg:col-span-7 w-full">
                <div className="rounded-2xl bg-[#010904] border border-[#39FF14]/40 p-5 font-mono text-xs shadow-inner space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[#39FF14]">COGNITIVE REASONING MATRIX</span>
                    <span className="text-slate-400">CONFIDENCE: 99.4%</span>
                  </div>

                  <div className="space-y-2 text-slate-300">
                    <p className="text-slate-400">&gt; Querying Enterprise Vector DB for client intent...</p>
                    <p className="text-[#39FF14]">&gt; Match Found: SOP_Clinic_Bookings_v3.pdf [Score: 0.986]</p>
                    <p className="text-slate-300">&gt; Reasoning: Patient requests slot with Dr. Emily for Friday 3 PM.</p>
                    <p className="text-emerald-400">&gt; Formulating 3-Step Sub-Agent Execution Graph...</p>
                  </div>

                  {/* Confidence Bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>Vector Similarity Confidence</span>
                      <span className="text-[#39FF14]">98.6%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#39FF14] to-[#00FF7F] w-[98.6%]" />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>STATE: PLAN_GENERATED</span>
                    <span className="text-[#39FF14]">TOKENS: 140/s</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================= */}
        {/* CARD 03: MULTI-AGENT SWARM (Sticky at top-32, stacks over)     */}
        {/* ============================================================= */}
        <div className="sticky top-28 sm:top-32 z-30 w-full">
          <div className="rounded-[2.5rem] bg-[#021508]/95 border border-[#39FF14]/60 p-6 sm:p-9 shadow-[0_35px_80px_rgba(0,0,0,0.95)] backdrop-blur-2xl ring-1 ring-white/10">
            
            {/* Stage Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="h-2.5 w-2.5 rounded-full bg-[#39FF14] animate-ping" />
                <span className="text-[#39FF14] font-bold tracking-wider uppercase">
                  Stage 03 · Autonomous Swarm Execution & Tool APIs
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#39FF14]/15 text-[#39FF14] font-mono text-xs font-bold border border-[#39FF14]/30">
                03 / 04
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#39FF14]/15 text-[#39FF14] text-xs font-mono font-bold">
                  <Network className="h-3.5 w-3.5" />
                  <span>SWARM ORCHESTRATION</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Parallel Sub-Agents <br />
                  <span className="text-gradient">Executing Real-World Tools</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The primary coordinator agent dispatches specialized sub-agents simultaneously. Agent Alpha syncs records into your CRM, Agent Beta drafts personalized confirmation copy, and Agent Gamma locks appointment slots via calendar APIs.
                </p>
                <div className="pt-2 space-y-2 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14]" />
                    <span>LangGraph / CrewAI Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14]" />
                    <span>Sub-second Parallel API Execution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#39FF14]" />
                    <span>Zero Human Bottlenecks</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 3 Parallel Sub-Agent Tiles */}
              <div className="lg:col-span-7 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: 'Sub-Agent A', role: 'CRM Sentinel', action: 'POST /crm/v3/leads', status: '200 OK · Synced', icon: <Database className="h-4 w-4 text-[#39FF14]" /> },
                    { title: 'Sub-Agent B', role: 'Personalizer', action: 'Draft Patient SOP Mail', status: 'Generated in 0.3s', icon: <Bot className="h-4 w-4 text-emerald-400" /> },
                    { title: 'Sub-Agent C', role: 'Calendar Dispatcher', action: 'Lock Slot: Fri 3:00 PM', status: 'Slot Confirmed', icon: <Calendar className="h-4 w-4 text-teal-400" /> }
                  ].map((sub, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-2xl bg-[#031409]/95 border border-[#39FF14]/30 hover:border-[#39FF14] flex flex-col justify-between transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                          {sub.icon}
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                          ACTIVE
                        </span>
                      </div>

                      <h4 className="text-white text-xs font-bold font-mono">{sub.title}</h4>
                      <span className="text-[10px] text-slate-400 font-mono mb-3">{sub.role}</span>

                      <div className="pt-2 border-t border-white/10 font-mono text-[10px]">
                        <p className="text-slate-400 truncate">{sub.action}</p>
                        <p className="text-[#39FF14] font-semibold">{sub.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================= */}
        {/* CARD 04: MISSION COMPLETE (Sticky at top-36, final stack)      */}
        {/* ============================================================= */}
        <div className="sticky top-32 sm:top-36 z-40 w-full mb-16 sm:mb-24">
          <div className="rounded-[2.5rem] bg-[#031b0b]/98 border-2 border-[#39FF14] p-6 sm:p-9 shadow-[0_40px_100px_rgba(57,255,20,0.3)] backdrop-blur-2xl ring-2 ring-[#39FF14]/40">
            
            {/* Stage Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="h-2.5 w-2.5 rounded-full bg-[#39FF14] animate-ping" />
                <span className="text-[#39FF14] font-bold tracking-wider uppercase">
                  Stage 04 · Mission Accomplished & Automated Scale
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#39FF14] text-[#021107] font-mono text-xs font-extrabold shadow-[0_0_15px_#39FF14]">
                04 / 04 COMPLETE
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 text-left space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#39FF14]/20 text-[#39FF14] text-xs font-mono font-bold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>AUTONOMOUS DELIVERY</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Flawless Resolution In <br />
                  <span className="text-gradient">Under 1.5 Seconds</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The mission executes end-to-end with zero human delay. Inbound leads are qualified, bookings are scheduled, CRM records are synced, and confirmation emails are in customer inboxes before a human team could even read the prompt.
                </p>

                <div className="pt-3">
                  <button
                    onClick={onBookCall}
                    className="bg-[#39FF14] text-[#021107] font-extrabold px-7 py-3.5 rounded-full text-xs sm:text-sm shadow-[0_0_25px_rgba(57,255,20,0.6)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Deploy This System For Your Business</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Telemetry & Metrics */}
              <div className="lg:col-span-7 w-full space-y-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#39FF14]/20 via-[#021107] to-white/5 border border-[#39FF14]/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-[#39FF14] text-[#021107] shadow-[0_0_20px_#39FF14]">
                      <CheckCircle2 className="h-6 w-6 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base">Autonomous Execution Verified</h4>
                      <p className="text-[#39FF14] text-xs font-mono">0 human minutes · 100% Cryptographic Audit Trail</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-white bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                    1.42s Total
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="text-xl font-black text-white font-mono">0.0s</span>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">Human Latency</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="text-xl font-black text-[#39FF14] font-mono">100%</span>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">Data Accuracy</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                    <span className="text-xl font-black text-white font-mono">24/7</span>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">Continuous Uptime</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
