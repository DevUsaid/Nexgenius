'use client';

import { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Camera,
  CheckCircle2,
  Clock,
  FileText,
  Activity,
  Sparkles,
  ShieldCheck,
  Check,
  Loader2,
  RefreshCw,
  TrendingUp,
  BarChart3,
  CheckCheck,
  Zap,
  Wifi,
  Signal
} from 'lucide-react';

export default function SolutionConceptsSection() {
  // 1. Web App States
  const [sidebarTab, setSidebarTab] = useState<'workflows' | 'overview' | 'documents' | 'audit'>('workflows');
  const [activeFilter, setActiveFilter] = useState<'all' | 'review' | 'done'>('all');
  const [docProgress, setDocProgress] = useState(65);
  const [purchaseApproved, setPurchaseApproved] = useState(false);

  // 2. Mobile App Live Animation States
  const [mobileStep, setMobileStep] = useState(1); // 0, 1, 2, 3 (Sync)
  const [photoProgress, setPhotoProgress] = useState(40);
  const [isSynced, setIsSynced] = useState(false);

  // Web progress scanning simulation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setDocProgress((prev) => (prev >= 100 ? 30 : prev + 15));
    }, 1800);
    return () => clearInterval(progressInterval);
  }, []);

  // Continuous Mobile Live Execution Animation Loop
  useEffect(() => {
    const stepTimer = setInterval(() => {
      setMobileStep((prev) => {
        const nextStep = (prev + 1) % 4;
        if (nextStep === 3) {
          setIsSynced(true);
        } else {
          setIsSynced(false);
        }
        return nextStep;
      });
    }, 2800);

    const photoInterval = setInterval(() => {
      setPhotoProgress((prev) => (prev >= 100 ? 20 : prev + 25));
    }, 900);

    return () => {
      clearInterval(stepTimer);
      clearInterval(photoInterval);
    };
  }, []);

  // Filter tasks based on selected tab
  const allTasks = [
    {
      id: 1,
      title: 'Supplier onboarding',
      status: 'Approved ✓',
      type: 'done',
      badgeClass: 'text-[#14532D] bg-[#E2F7E9]',
      icon: CheckCircle2,
      iconClass: 'text-[#14532D]',
    },
    {
      id: 2,
      title: 'Purchase request #820',
      status: purchaseApproved ? 'Approved ✓' : 'In Review (HR)',
      type: purchaseApproved ? 'done' : 'review',
      badgeClass: purchaseApproved ? 'text-[#14532D] bg-[#E2F7E9]' : 'text-[#1746D1] bg-[#DBEAFE]',
      icon: purchaseApproved ? CheckCircle2 : Clock,
      iconClass: purchaseApproved ? 'text-[#14532D]' : 'text-[#1746D1]',
      canApprove: !purchaseApproved,
    },
    {
      id: 3,
      title: 'Tax document audit',
      status: docProgress >= 100 ? 'Verified ✓' : `Parsing ${docProgress}%`,
      type: 'done',
      badgeClass: 'text-[#14532D] bg-[#F0FDF4] border border-[#BBF7D0]',
      icon: RefreshCw,
      iconClass: 'text-[#14532D] animate-spin',
      isProgress: true,
    },
  ];

  const displayedTasks = allTasks.filter((task) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'review') return task.type === 'review';
    if (activeFilter === 'done') return task.type === 'done';
    return true;
  });

  return (
    <section id="solutions" className="w-full bg-white py-24 lg:py-32 scroll-mt-24 border-b border-[#E5E7EB]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] font-mono text-[11px] font-semibold tracking-[0.1em] uppercase text-[#14532D] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#14532D]" />
            <span>03 / POSSIBILITIES IN PRACTICE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <h2 className="lg:col-span-7 text-[36px] sm:text-[46px] lg:text-[52px] font-semibold text-[#111D33] tracking-tight leading-[1.1]">
              Complex challenges.<br />
              <span className="text-gradient-hero">Considered solutions.</span>
            </h2>
            <p className="lg:col-span-5 text-[15px] sm:text-[16px] text-[#617087] leading-[1.65]">
              Real-time interactive prototypes showing how custom software and autonomous automation operate seamlessly inside your organization.
            </p>
          </div>
        </div>

        {/* 2 Concept Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Concept Card 1: Enterprise Web Application */}
          <div className="flex flex-col group">
            {/* Visual Workspace Mockup */}
            <div className="w-full h-[400px] sm:h-[430px] rounded-[16px] bg-[#FAFBFD] border border-[#E5E7EB] p-4 sm:p-6 flex items-center justify-center overflow-hidden mb-6 transition-all duration-300 group-hover:border-[#14532D]/30 group-hover:shadow-[0_20px_50px_rgba(20,83,45,0.08)] relative">

              {/* Live Status Watermark */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 border border-gray-200 text-[10px] font-mono text-[#14532D] shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="font-semibold">Interactive Demo</span>
              </div>

              {/* Application Window Frame */}
              <div className="w-full max-w-[540px] h-[330px] rounded-[12px] bg-white border border-[#E5E7EB] shadow-[0px_20px_50px_rgba(20,36,64,0.08)] flex overflow-hidden ring-1 ring-black/[0.04]">

                {/* Mini Sidebar with Clickable Tabs */}
                <div className="w-[125px] bg-[#0B0F19] text-white p-3.5 flex flex-col justify-between shrink-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                      <div className="w-3 h-3 rounded bg-[#10B981]" />
                      <span className="text-[12px] font-bold tracking-tight text-white font-mono">
                        nexus/ops
                      </span>
                    </div>

                    <div className="space-y-1 font-sans text-[10px]">
                      <button
                        onClick={() => setSidebarTab('workflows')}
                        className={`w-full text-left px-2 py-1.5 rounded flex items-center justify-between transition-colors cursor-pointer ${sidebarTab === 'workflows'
                            ? 'text-white font-semibold bg-[#1E293B]'
                            : 'text-slate-400 hover:text-white'
                          }`}
                      >
                        <span>Workflows</span>
                        {sidebarTab === 'workflows' && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />}
                      </button>

                      <button
                        onClick={() => setSidebarTab('overview')}
                        className={`w-full text-left px-2 py-1.5 rounded flex items-center justify-between transition-colors cursor-pointer ${sidebarTab === 'overview'
                            ? 'text-white font-semibold bg-[#1E293B]'
                            : 'text-slate-400 hover:text-white'
                          }`}
                      >
                        <span>Analytics</span>
                        {sidebarTab === 'overview' && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />}
                      </button>

                      <button
                        onClick={() => setSidebarTab('documents')}
                        className={`w-full text-left px-2 py-1.5 rounded flex items-center justify-between transition-colors cursor-pointer ${sidebarTab === 'documents'
                            ? 'text-white font-semibold bg-[#1E293B]'
                            : 'text-slate-400 hover:text-white'
                          }`}
                      >
                        <span>Documents</span>
                        {sidebarTab === 'documents' && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />}
                      </button>

                      <button
                        onClick={() => setSidebarTab('audit')}
                        className={`w-full text-left px-2 py-1.5 rounded flex items-center justify-between transition-colors cursor-pointer ${sidebarTab === 'audit'
                            ? 'text-white font-semibold bg-[#1E293B]'
                            : 'text-slate-400 hover:text-white'
                          }`}
                      >
                        <span>Audit Logs</span>
                        {sidebarTab === 'audit' && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />}
                      </button>
                    </div>
                  </div>

                  <div className="text-[9px] font-mono text-slate-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>v3.2 Connected</span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between bg-white overflow-hidden">

                  {/* TAB 1: WORKFLOWS (Default) */}
                  {sidebarTab === 'workflows' && (
                    <div className="animate-in fade-in duration-200">
                      <div className="flex items-center justify-between text-[9px] font-mono text-[#6B7280] mb-1.5">
                        <span className="flex items-center gap-1">
                          <Activity className="w-3 h-3 text-[#14532D]" />
                          <span>Pipeline Execution</span>
                        </span>
                        <span className="text-[#14532D] font-bold">{displayedTasks.length} Visible</span>
                      </div>

                      <h4 className="text-[14px] font-bold text-[#111D33] leading-tight mb-0.5">
                        Everything, in motion.
                      </h4>
                      <p className="text-[10px] text-[#6B7280] mb-2.5">
                        Autonomous cross-team approval workflows.
                      </p>

                      {/* Interactive Filter Pills */}
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <button
                          onClick={() => setActiveFilter('all')}
                          className={`text-[9px] px-2 py-0.5 rounded-[4px] font-semibold transition-all cursor-pointer ${activeFilter === 'all'
                              ? 'bg-[#14532D] text-white shadow-xs'
                              : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                            }`}
                        >
                          All ({allTasks.length})
                        </button>
                        <button
                          onClick={() => setActiveFilter('review')}
                          className={`text-[9px] px-2 py-0.5 rounded-[4px] font-semibold transition-all cursor-pointer ${activeFilter === 'review'
                              ? 'bg-[#14532D] text-white shadow-xs'
                              : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                            }`}
                        >
                          Needs Review ({allTasks.filter((t) => t.type === 'review').length})
                        </button>
                        <button
                          onClick={() => setActiveFilter('done')}
                          className={`text-[9px] px-2 py-0.5 rounded-[4px] font-semibold transition-all cursor-pointer ${activeFilter === 'done'
                              ? 'bg-[#14532D] text-white shadow-xs'
                              : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                            }`}
                        >
                          Completed ({allTasks.filter((t) => t.type === 'done').length})
                        </button>
                      </div>

                      {/* Filtered Dynamic Task List */}
                      <div className="space-y-1.5 max-h-[160px] overflow-y-auto">
                        {displayedTasks.map((task) => {
                          const Icon = task.icon;
                          return (
                            <div
                              key={task.id}
                              className="p-2 rounded-[6px] border border-gray-100 bg-gray-50/80 text-[11px] flex items-center justify-between transition-all hover:bg-white hover:border-[#BBF7D0] shadow-2xs"
                            >
                              <div className="flex items-center gap-2">
                                <Icon className={`w-3.5 h-3.5 ${task.iconClass}`} />
                                <span className="font-semibold text-[#111D33]">{task.title}</span>
                              </div>

                              <div className="flex items-center gap-1.5">
                                {task.canApprove && (
                                  <button
                                    onClick={() => setPurchaseApproved(true)}
                                    className="px-1.5 py-0.5 rounded bg-[#14532D] text-white text-[8px] font-bold hover:bg-[#0c381e] cursor-pointer transition-colors"
                                  >
                                    Approve 1-Click
                                  </button>
                                )}
                                <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${task.badgeClass}`}>
                                  {task.status}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* TAB 2: ANALYTICS */}
                  {sidebarTab === 'overview' && (
                    <div className="animate-in fade-in duration-200 space-y-3">
                      <div className="flex items-center justify-between text-[9px] font-mono text-[#6B7280]">
                        <span>Real-time Operational Telemetry</span>
                        <span className="text-[#10B981] font-bold">● Active 99.98%</span>
                      </div>

                      <h4 className="text-[14px] font-bold text-[#111D33]">
                        System Throughput & Metrics
                      </h4>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-[8px] bg-[#F8FAFC] border border-gray-100">
                          <span className="text-[9px] font-mono text-gray-500">Total Invocations</span>
                          <div className="text-[16px] font-bold text-[#111D33]">48,920</div>
                          <span className="text-[9px] text-[#14532D] font-semibold">↑ +24% this week</span>
                        </div>
                        <div className="p-2.5 rounded-[8px] bg-[#F8FAFC] border border-gray-100">
                          <span className="text-[9px] font-mono text-gray-500">Error Fallback</span>
                          <div className="text-[16px] font-bold text-[#14532D]">0.02%</div>
                          <span className="text-[9px] text-slate-500">Human override SLA</span>
                        </div>
                      </div>

                      <div className="p-2 rounded bg-[#F0FDF4] border border-[#BBF7D0] text-[10px] text-[#14532D] font-medium flex items-center justify-between">
                        <span>Autonomous Queue Load</span>
                        <span className="font-mono font-bold">12ms Response</span>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: DOCUMENTS */}
                  {sidebarTab === 'documents' && (
                    <div className="animate-in fade-in duration-200 space-y-2.5">
                      <div className="flex items-center justify-between text-[9px] font-mono text-[#6B7280]">
                        <span>AI Document OCR & Parser</span>
                        <span className="text-[#14532D] font-bold">4/4 Processed</span>
                      </div>

                      <h4 className="text-[14px] font-bold text-[#111D33]">
                        Incoming Data Extraction Queue
                      </h4>

                      <div className="space-y-1.5 text-[10px]">
                        <div className="p-2 rounded bg-gray-50 border border-gray-100 flex items-center justify-between">
                          <span className="font-medium text-[#111D33]">Vendor_SLA_Agreement.pdf</span>
                          <span className="font-mono text-[9px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">OCR Verified ✓</span>
                        </div>
                        <div className="p-2 rounded bg-gray-50 border border-gray-100 flex items-center justify-between">
                          <span className="font-medium text-[#111D33]">Tax_Receipt_Q3.pdf</span>
                          <span className="font-mono text-[9px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">Auto-Filed ✓</span>
                        </div>
                        <div className="p-2 rounded bg-gray-50 border border-gray-100 flex items-center justify-between">
                          <span className="font-medium text-[#111D33]">Invoice_Reconciliation.csv</span>
                          <span className="font-mono text-[9px] text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-bold">Synced ERP</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: AUDIT LOGS */}
                  {sidebarTab === 'audit' && (
                    <div className="animate-in fade-in duration-200 space-y-2">
                      <div className="flex items-center justify-between text-[9px] font-mono text-[#6B7280]">
                        <span>Immutable Audit Trail</span>
                        <span className="text-[#14532D] font-bold">SOC-2 Compliant</span>
                      </div>

                      <h4 className="text-[14px] font-bold text-[#111D33]">
                        Live Security & Event Ledger
                      </h4>

                      <div className="space-y-1.5 font-mono text-[9px]">
                        <div className="p-1.5 rounded bg-gray-50 border border-gray-100 flex justify-between text-slate-600">
                          <span>[09:44:12] Agent Ops-01</span>
                          <span className="text-emerald-700">Enriched 40 lead records</span>
                        </div>
                        <div className="p-1.5 rounded bg-gray-50 border border-gray-100 flex justify-between text-slate-600">
                          <span>[09:42:05] Human Reviewer</span>
                          <span className="text-blue-700">Signed SOW Contract #84</span>
                        </div>
                        <div className="p-1.5 rounded bg-gray-50 border border-gray-100 flex justify-between text-slate-600">
                          <span>[09:40:19] Gateway</span>
                          <span className="text-emerald-700">Database backup executed</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Micro AI Toast Footer */}
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[9px] font-mono text-[#6B7280]">
                    <span className="flex items-center gap-1 text-[#14532D] font-medium">
                      <Sparkles className="w-3 h-3" />
                      <span>AI Engine: Auto-routed 18 vendor files</span>
                    </span>
                    <span>0.18s latency</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Concept Metadata & Details */}
            <div className="font-mono text-[10px] text-[#14532D] uppercase tracking-[0.12em] font-semibold mb-2">
              CONCEPT / ENTERPRISE WEB APPLICATION
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[24px] sm:text-[26px] font-semibold text-[#111D33] group-hover:text-[#14532D] transition-colors">
                One workspace. Connected operations.
              </h3>
              <ArrowUpRight className="w-5 h-5 text-[#111D33] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p className="text-[14px] text-[#617087] leading-[1.65]">
              A custom portal for approvals, automated document parsing, and cross-team workflows, engineered to eradicate fragmented manual spreadsheets.
            </p>
          </div>

          {/* Concept Card 2: Mobile Product (LIVE ANIMATED REAL-TIME EXECUTION) */}
          <div className="flex flex-col group">
            {/* Visual Mobile Mockup with Continuous Live Animations */}
            <div className="w-full h-[400px] sm:h-[430px] rounded-[16px] bg-gradient-to-br from-[#F0FDF4] to-[#FAFBFD] border border-[#BBF7D0] p-6 sm:p-8 flex items-center justify-between overflow-hidden mb-6 transition-all duration-300 group-hover:border-[#86EFAC] group-hover:shadow-[0_20px_50px_rgba(20,83,45,0.08)] relative">

              {/* Teaser Left Side */}
              <div className="max-w-[210px] space-y-3 z-10">
                <div className="font-mono text-[10px] text-[#14532D] font-bold uppercase tracking-[0.12em] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span>FIELD / LIVE MOTION</span>
                </div>
                <h4 className="text-[26px] sm:text-[32px] font-semibold text-[#111D33] leading-[1.12]">
                  Less paperwork.<br />
                  <span className="text-[#14532D]">More progress.</span>
                </h4>
                <p className="text-[12px] text-[#617087] leading-relaxed">
                  Real-time field worker inspection with automated camera upload & cloud sync.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="font-mono text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white border border-[#BBF7D0] text-[#14532D] shadow-xs">
                    iOS Native
                  </span>
                  <span className="font-mono text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white border border-[#BBF7D0] text-[#14532D] shadow-xs">
                    Android
                  </span>
                </div>
              </div>

              {/* Mini Phone Composition with Live Running Animation Cycle */}
              <div className="w-[200px] sm:w-[220px] h-[330px] rounded-[28px] bg-white border-[4px] border-[#0B0F19] shadow-2xl p-3.5 flex flex-col justify-between overflow-hidden shrink-0 relative ring-1 ring-black/10 transition-transform duration-500 hover:scale-[1.02]">

                {/* Phone Top / Dynamic Island Bar */}
                <div>
                  <div className="flex items-center justify-between text-[9px] font-semibold text-[#111827] mb-1">
                    <span>9:41</span>
                    {/* Animated Dynamic Island */}
                    <div className="w-16 h-3 rounded-full bg-[#0B0F19] flex items-center justify-center gap-1 px-1 transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                      <span className="text-[6px] text-white font-mono font-bold">
                        {mobileStep === 3 ? 'HQ SYNCED' : 'GPS LIVE'}
                      </span>
                    </div>
                    <span className="text-[8px] font-mono">100%</span>
                  </div>

                  <div className="text-[8px] font-mono text-[#6B7280] tracking-wider uppercase mt-2">
                    FIELD SOP ENGINE · LIVE
                  </div>
                  <div className="text-[13px] font-bold text-[#111D33] mb-2 flex items-center justify-between">
                    <span>Today&apos;s Inspection</span>
                    {/* Dynamic Animated Counter */}
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#F0FDF4] text-[#14532D] border border-[#BBF7D0]">
                      {mobileStep >= 2 ? '3/3' : mobileStep === 1 ? '2/3' : '1/3'} Done
                    </span>
                  </div>

                  {/* Live Dynamic Checklist Card with Active Animated States */}
                  <div className="p-2.5 rounded-[8px] bg-[#F8FAFC] border border-gray-100 space-y-2">
                    <div className="flex items-center justify-between text-[8px] font-mono text-[#14532D] font-bold">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14532D] animate-pulse" />
                        <span>SITE VISIT · BLDG 4</span>
                      </span>
                      <span className="text-gray-400">#FTE-402</span>
                    </div>

                    {/* Step 1: Safety Check */}
                    <div className={`p-1.5 rounded-[6px] border text-[10px] flex items-center justify-between transition-all duration-300 ${mobileStep >= 0 ? 'bg-[#F0FDF4] border-[#BBF7D0]' : 'bg-white border-gray-100'
                      }`}>
                      <span className="font-semibold text-[#111D33] text-[9.5px]">
                        Safety gear verified
                      </span>
                      <span className="w-3.5 h-3.5 rounded-full bg-[#14532D] text-white flex items-center justify-center text-[8px] font-bold">
                        ✓
                      </span>
                    </div>

                    {/* Step 2: Thermal Sensor Scan (Live Scanning Animation) */}
                    <div className={`p-1.5 rounded-[6px] border text-[10px] flex items-center justify-between transition-all duration-300 ${mobileStep >= 1 ? 'bg-[#F0FDF4] border-[#BBF7D0]' : 'bg-blue-50/80 border-blue-200'
                      }`}>
                      <div className="flex items-center gap-1.5">
                        {mobileStep === 0 ? (
                          <Loader2 className="w-2.5 h-2.5 text-blue-600 animate-spin" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#14532D]" />
                        )}
                        <span className="font-semibold text-[#111D33] text-[9.5px]">
                          Thermal sensor audit
                        </span>
                      </div>
                      {mobileStep >= 1 ? (
                        <span className="w-3.5 h-3.5 rounded-full bg-[#14532D] text-white flex items-center justify-center text-[8px] font-bold">
                          ✓
                        </span>
                      ) : (
                        <span className="text-[7.5px] font-mono text-blue-600 font-bold animate-pulse">
                          Scanning...
                        </span>
                      )}
                    </div>

                    {/* Step 3: Diagnostics Photo (Live Uploading Bar Animation) */}
                    <div className={`p-1.5 rounded-[6px] border text-[10px] flex items-center justify-between transition-all duration-300 ${mobileStep >= 2 ? 'bg-[#F0FDF4] border-[#BBF7D0]' : 'bg-emerald-50/50 border-emerald-200'
                      }`}>
                      <div className="w-full pr-1">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-semibold text-[#111D33] text-[9.5px] flex items-center gap-1">
                            <Camera className="w-2.5 h-2.5 text-[#14532D]" />
                            <span>Photo diagnostic</span>
                          </span>
                          {mobileStep >= 2 ? (
                            <span className="w-3.5 h-3.5 rounded-full bg-[#14532D] text-white flex items-center justify-center text-[8px] font-bold">
                              ✓
                            </span>
                          ) : (
                            <span className="text-[7.5px] font-mono text-emerald-700 font-bold">
                              {photoProgress}% Uploading
                            </span>
                          )}
                        </div>
                        {mobileStep < 2 && (
                          <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1">
                            <div
                              className="bg-[#10B981] h-full transition-all duration-300 rounded-full"
                              style={{ width: `${photoProgress}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Live Trigger Button with Animated State */}
                    <div className="pt-1">
                      <div
                        className={`w-full py-1.5 rounded-[6px] text-white text-[9px] font-bold text-center flex items-center justify-center gap-1.5 shadow-xs transition-all duration-500 ${mobileStep === 3 || isSynced
                            ? 'bg-[#10B981] scale-[1.02]'
                            : 'bg-[#14532D]'
                          }`}
                      >
                        {mobileStep === 3 || isSynced ? (
                          <>
                            <CheckCheck className="w-3.5 h-3.5 animate-bounce" />
                            <span>Cloud Synced to HQ ✓</span>
                          </>
                        ) : (
                          <>
                            <Zap className="w-3 h-3 text-[#A7F3D0] animate-pulse" />
                            <span>Auto-Syncing to HQ...</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Bottom Footer with Live Signal Status */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[8px] text-[#6B7280] font-mono">
                  <span className="flex items-center gap-1 text-[#14532D] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                    <span>Socket Connected</span>
                  </span>
                  <span className="text-gray-400">AES-256</span>
                </div>
              </div>

            </div>

            {/* Concept Metadata & Details */}
            <div className="font-mono text-[10px] text-[#14532D] uppercase tracking-[0.12em] font-semibold mb-2">
              CONCEPT / MOBILE PRODUCT
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[24px] sm:text-[26px] font-semibold text-[#111D33] group-hover:text-[#14532D] transition-colors">
                Field service, without the friction.
              </h3>
              <ArrowUpRight className="w-5 h-5 text-[#111D33] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p className="text-[14px] text-[#617087] leading-[1.65]">
              A mobile companion for on-site engineering teams, with digital task checklists, photo capture, and instantaneous HQ data sync.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
