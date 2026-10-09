'use client';

import { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  ShieldCheck,
  Check,
  Bot,
  User,
  Calendar,
  Mail,
  Zap,
  CheckCircle2,
  Receipt,
  MessageSquare,
  Database,
  RefreshCw,
  TrendingUp,
  Inbox,
  Sparkles,
  ShoppingBag,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function HeroSection() {
  // Chat & Order Workflow animation steps:
  // 0: Client sends initial message
  // 1: Agent responds
  // 2: Client requests to book order
  // 3: Agent gathers info and confirms
  // 4: Order appears in CRM Dashboard & flashes green!
  const [flowStep, setFlowStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlowStep((prev) => {
        if (prev < 4) {
          return prev + 1;
        } else {
          // Pause on final completed state then restart
          return 0;
        }
      });
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden bg-tech-grid">

      {/* Ambient Radial Lights */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#14532D]/[0.05] blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[500px] h-[450px] bg-[#059669]/[0.06] blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-10 sm:pt-14 lg:pt-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Promise */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start max-w-[620px]">

            {/* Clean Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] shadow-xs mb-5 group cursor-default">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14532D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14532D]"></span>
              </span>
              <span className="font-mono text-[11px] font-bold tracking-[0.08em] uppercase text-[#14532D]">
                AUTONOMOUS AI EMPLOYEES · 24/7 OPERATIONS
              </span>
            </div>

            {/* High-Impact AI-Focused Headline */}
            <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-extrabold text-[#111D33] tracking-tight leading-[1.08] mb-5">
              AI agents that run<br />
              <span className="text-gradient-hero">
                your business operations.
              </span>
            </h1>

            {/* Specific Outcome-Driven Subheadline */}
            <p className="text-[15.5px] sm:text-[17px] text-[#617087] font-normal leading-[1.65] max-w-[500px] mb-7">
              We build custom AI employees that chat with incoming leads, book customer orders, and sync with your CRM 24/7 — completely on autopilot.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 h-[50px] px-6 rounded-[8px] bg-gradient-to-r from-[#14532D] via-[#104b28] to-[#0A3019] text-white text-[14px] font-semibold transition-all duration-300 shadow-[0_8px_25px_rgba(20,83,45,0.3)] hover:shadow-[0_12px_35px_rgba(20,83,45,0.45)] hover:scale-[1.02] border border-white/10"
              >
                <span>Discuss your project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2.5 h-[50px] px-5 rounded-[8px] bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#111827] text-[14px] font-semibold transition-all duration-200 hover:border-gray-400 shadow-xs"
              >
                <span>Explore our services</span>
                <ArrowUpRight className="w-4 h-4 text-[#617087]" />
              </a>
            </div>

            {/* High-Trust Social Proof Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-gray-200/80 w-full">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6.5 h-6.5 rounded-full bg-[#14532D] text-white text-[9.5px] font-bold flex items-center justify-center ring-2 ring-white">AR</div>
                  <div className="w-6.5 h-6.5 rounded-full bg-[#0F172A] text-white text-[9.5px] font-bold flex items-center justify-center ring-2 ring-white">SJ</div>
                  <div className="w-6.5 h-6.5 rounded-full bg-[#059669] text-white text-[9.5px] font-bold flex items-center justify-center ring-2 ring-white">DM</div>
                </div>
                <div className="text-[11.5px] font-bold text-[#111D33]">
                  4.9/5 <span className="text-[#64748B] font-normal">Rating</span>
                </div>
              </div>

              <div className="h-3.5 w-px bg-gray-200" />

              <div className="text-[11.5px] text-[#475569] font-medium">
                <span className="font-bold text-[#14532D]">14,000+</span> tasks automated
              </div>

              <div className="h-3.5 w-px bg-gray-200 hidden sm:block" />

              <div className="text-[11.5px] text-[#475569] font-medium hidden sm:block">
                <span className="font-bold text-[#14532D]">99.9%</span> SLA accuracy
              </div>
            </div>
          </div>

          {/* Right Column: Realistic MacBook Pro Mockup with Live AI Workflow */}
          <div className="lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end">

            {/* MacBook Outer Shell */}
            <div className="w-full max-w-[680px] relative select-none">

              {/* MacBook Top Display Lid */}
              <div className="rounded-t-[22px] bg-[#1E293B] p-2.5 sm:p-3 border-[2.5px] border-[#334155] shadow-[0px_30px_70px_-15px_rgba(0,0,0,0.45)] relative overflow-hidden">

                {/* MacBook Center Web Camera Dot */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-30">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F172A] border border-[#475569]/50 flex items-center justify-center">
                    <span className="w-0.5 h-0.5 rounded-full bg-[#10B981] animate-ping" />
                  </div>
                </div>

                {/* MacBook Display Screen Content */}
                <div className="bg-[#0B0F19] text-white rounded-[12px] sm:rounded-[14px] overflow-hidden border border-white/10 relative shadow-inner">

                  {/* macOS App Header Bar */}
                  <div className="bg-[#111827] px-3.5 py-2 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                      </div>
                      <span className="text-[10.5px] font-mono text-gray-300 ml-2">
                        NexOps Studio · Autonomous Sales & Booking Engine
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#A7F3D0] text-[9.5px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      <span>LIVE AUTOMATION</span>
                    </div>
                  </div>

                  {/* Split Screen View: Left Chat vs Right CRM Dashboard */}
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] sm:min-h-[400px]">

                    {/* Left Side: Live Client Chat with AI Agent (48%) */}
                    <div className="md:col-span-6 bg-[#0E1526] p-3 sm:p-3.5 border-r border-white/10 flex flex-col justify-between">

                      {/* Chat Header */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold">
                            SJ
                          </div>
                          <div>
                            <div className="text-[11.5px] font-bold text-white leading-tight">Sarah Jenkins</div>
                            <div className="text-[9px] text-emerald-400 font-mono">● Online on Website Chat</div>
                          </div>
                        </div>

                        <span className="text-[9.5px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                          AI Agent Handling
                        </span>
                      </div>

                      {/* Chat Conversation Scroll Area */}
                      <div className="space-y-2.5 text-[11px] leading-relaxed flex-1 overflow-y-auto pr-1">

                        {/* Message 1: Client Query */}
                        <div className="flex items-start gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-emerald-800 text-white text-[8px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            C
                          </div>
                          <div className="bg-[#1E293B] text-gray-200 p-2 rounded-xl rounded-tl-xs max-w-[92%] border border-white/5">
                            “Hi! I need an automated AI workflow system for our business operations.”
                          </div>
                        </div>

                        {/* Message 2: Agent Response */}
                        {flowStep >= 1 && (
                          <div className="flex items-start gap-1.5 flex-row-reverse animate-in fade-in duration-300">
                            <div className="w-4 h-4 rounded-full bg-[#10B981] text-black text-[8px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              🤖
                            </div>
                            <div className="bg-[#14532D] text-white p-2 rounded-xl rounded-tr-xs max-w-[92%] border border-[#10B981]/30">
                              “Hello Sarah! What package do you need, and what is your required timeline?”
                            </div>
                          </div>
                        )}

                        {/* Message 3: Client asks to book order */}
                        {flowStep >= 2 && (
                          <div className="flex items-start gap-1.5 animate-in fade-in duration-300">
                            <div className="w-4 h-4 rounded-full bg-emerald-800 text-white text-[8px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              C
                            </div>
                            <div className="bg-[#1E293B] text-gray-200 p-2 rounded-xl rounded-tl-xs max-w-[92%] border border-white/5">
                              “Book the <span className="text-emerald-400 font-semibold">Enterprise AI Package ($18,500)</span> for us please!”
                            </div>
                          </div>
                        )}

                        {/* Message 4: Agent gathers info & confirms order */}
                        {flowStep >= 3 && (
                          <div className="flex items-start gap-1.5 flex-row-reverse animate-in fade-in duration-300">
                            <div className="w-4 h-4 rounded-full bg-[#10B981] text-black text-[8px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              🤖
                            </div>
                            <div className="bg-[#14532D] text-white p-2 rounded-xl rounded-tr-xs max-w-[92%] border border-[#10B981]/30">
                              <span className="text-emerald-300 font-bold block mb-0.5">✓ Order Booked Successfully!</span>
                              Created workspace, logged to CRM & scheduled kickoff call for Monday.
                            </div>
                          </div>
                        )}

                        {/* Typing indicator when waiting */}
                        {flowStep < 4 && (
                          <div className="flex items-center gap-1.5 text-[9.5px] text-emerald-400 font-mono pt-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            <span>NexOps AI processing live...</span>
                          </div>
                        )}
                      </div>

                      {/* Chat Input Bar (Mockup) */}
                      <div className="pt-2 border-t border-white/10 mt-2 flex items-center gap-2">
                        <div className="bg-[#1E293B] text-[10px] text-gray-400 px-2.5 py-1.5 rounded-lg flex-1 border border-white/5">
                          Type message...
                        </div>
                        <div className="w-6 h-6 rounded-lg bg-[#10B981] text-black flex items-center justify-center font-bold text-[10px]">
                          ↑
                        </div>
                      </div>

                    </div>

                    {/* Right Side: Live Orders & CRM Dashboard (52%) */}
                    <div className="md:col-span-6 bg-[#0B0F19] p-3 sm:p-3.5 flex flex-col justify-between">

                      <div>
                        {/* CRM Top Bar */}
                        <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
                            <Database className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Live Orders CRM</span>
                          </div>
                          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                            Auto-Syncing
                          </span>
                        </div>

                        {/* CRM Quick Stats */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-[#111827] p-2 rounded-lg border border-white/5">
                            <div className="text-[9px] text-gray-400 font-mono">Today's Revenue</div>
                            <div className="text-[14px] font-black text-emerald-400">
                              {flowStep >= 3 ? '$48,500' : '$30,000'}
                            </div>
                          </div>
                          <div className="bg-[#111827] p-2 rounded-lg border border-white/5">
                            <div className="text-[9px] text-gray-400 font-mono">Active Orders</div>
                            <div className="text-[14px] font-black text-white">
                              {flowStep >= 3 ? '18 Orders' : '17 Orders'}
                            </div>
                          </div>
                        </div>

                        {/* Orders List / Pipeline */}
                        <div className="space-y-2">
                          <div className="text-[9.5px] font-mono text-gray-400 uppercase tracking-wider">
                            Real-time Orders Pipeline:
                          </div>

                          {/* 💥 THE NEW ORDER POPPING IN FROM CHAT! */}
                          {flowStep >= 3 ? (
                            <div className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-950/80 to-[#14532D]/40 border-2 border-[#10B981] shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-in zoom-in-95 duration-300">
                              <div className="flex items-center justify-between text-[10px] mb-1">
                                <span className="font-mono font-bold text-emerald-300 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                                  ORDER #NX-842 · NEW
                                </span>
                                <span className="font-mono font-extrabold text-[#10B981] text-[11px] bg-emerald-900/60 px-1.5 py-0.5 rounded">
                                  $18,500.00
                                </span>
                              </div>
                              <div className="text-[11.5px] font-bold text-white">
                                Sarah Jenkins · Acme Corp
                              </div>
                              <div className="text-[9.5px] text-gray-300 mt-0.5">
                                Enterprise AI Workflow System
                              </div>
                              <div className="mt-1.5 flex items-center gap-1 text-[8.5px] font-mono text-emerald-300">
                                <Check className="w-2.5 h-2.5 text-[#10B981] stroke-[3]" />
                                <span>Contract sent & kickoff booked</span>
                              </div>
                            </div>
                          ) : (
                            <div className="p-2.5 rounded-xl bg-white/5 border border-dashed border-white/10 text-center py-4 text-gray-500 text-[10px] font-mono">
                              Listening for incoming client order...
                            </div>
                          )}

                          {/* Previous Order in CRM */}
                          <div className="p-2 rounded-lg bg-[#111827] border border-white/5 opacity-70">
                            <div className="flex items-center justify-between text-[9.5px] mb-0.5">
                              <span className="font-mono text-gray-400">ORDER #NX-841</span>
                              <span className="font-mono font-bold text-gray-300">$12,000.00</span>
                            </div>
                            <div className="text-[10.5px] font-medium text-gray-200">
                              FinScale LLC · Operations Bot
                            </div>
                            <span className="text-[8.5px] text-emerald-400 font-mono">✓ Confirmed</span>
                          </div>
                        </div>

                      </div>

                      {/* Bottom Live Automation Metric */}
                      <div className="pt-2 border-t border-white/10 mt-2 flex items-center justify-between text-[9.5px] font-mono">
                        <span className="text-gray-400">Total Human Time:</span>
                        <span className="text-emerald-400 font-bold">0 mins (100% Autonomous)</span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* MacBook Bottom Base / Lip with Center Thumb Notch */}
              <div className="relative mx-auto w-[103%] -left-[1.5%] h-3.5 sm:h-4 bg-gradient-to-b from-[#64748B] via-[#475569] to-[#334155] rounded-b-[14px] shadow-[0_16px_35px_rgba(0,0,0,0.3)] flex justify-center items-start">
                <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#1E293B] rounded-b-sm" />
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Capabilities Ticker Strip */}
      <div className="w-full border-y border-[#E5E7EB] bg-white/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="font-mono text-[11px] text-[#617087] tracking-[0.08em] uppercase max-w-[210px] leading-tight font-medium">
            ONE TECHNOLOGY PARTNER.<br />
            EVERY STAGE OF GROWTH.
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            <div className="flex items-center gap-3 group cursor-default">
              <span className="w-7 h-7 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center text-[#14532D] text-xs font-bold transition-transform group-hover:scale-110">+</span>
              <span className="text-[15px] sm:text-[16px] font-semibold text-[#111D33] group-hover:text-[#14532D] transition-colors">
                AI & automation
              </span>
            </div>

            <div className="flex items-center gap-3 group cursor-default">
              <span className="w-7 h-7 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center text-[#14532D] text-xs font-bold transition-transform group-hover:scale-110">+</span>
              <span className="text-[15px] sm:text-[16px] font-semibold text-[#111D33] group-hover:text-[#14532D] transition-colors">
                Digital products
              </span>
            </div>

            <div className="flex items-center gap-3 group cursor-default">
              <span className="w-7 h-7 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center text-[#14532D] text-xs font-bold transition-transform group-hover:scale-110">+</span>
              <span className="text-[15px] sm:text-[16px] font-semibold text-[#111D33] group-hover:text-[#14532D] transition-colors">
                Cloud & infrastructure
              </span>
            </div>

            <div className="flex items-center gap-3 group cursor-default">
              <span className="w-7 h-7 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center text-[#14532D] text-xs font-bold transition-transform group-hover:scale-110">+</span>
              <span className="text-[15px] sm:text-[16px] font-semibold text-[#111D33] group-hover:text-[#14532D] transition-colors">
                Search & growth
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
