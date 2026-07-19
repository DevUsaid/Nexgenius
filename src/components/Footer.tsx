import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-32 relative overflow-hidden bg-transparent">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10b981]/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-[#00ff7f]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Massive CTA Section */}
        <div className="rounded-[3rem] border border-white/10 bg-brand-card/60 backdrop-blur-md p-12 md:p-20 mb-12 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')] opacity-[0.03]"></div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 drop-shadow-lg max-w-4xl">
            Ready to Build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#39ff14]">Future?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl font-light">
            Stop doing manual data entry. Let&apos;s architect an AI-driven automation engine that scales your business while you sleep.
          </p>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-brand-dark bg-white rounded-full text-lg transition-all hover:scale-105 hover:bg-brand-primary hover:text-white shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Links Grid Section */}
        <div className="py-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="text-3xl font-bold tracking-tight text-white flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-4 h-4 rounded-full bg-brand-primary shadow-[0_0_12px_#10b981]"></div>
              </div>
              Nex<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399]">Genius</span>
            </Link>
            <p className="text-base text-slate-400 leading-relaxed pr-8 font-medium">
              We engineer intelligent systems and high-performance websites to transform your manual workflows into automated powerhouses.
            </p>
          </div>
          
          {/* Services Column */}
          <div className="lg:col-span-3 flex flex-col gap-5 lg:pl-8">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Capabilities</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-slate-400 hover:text-[#10b981] font-medium transition-colors">Workflow Automation</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-[#10b981] font-medium transition-colors">Custom AI Integrations</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-[#10b981] font-medium transition-colors">AI-Powered Chatbots</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-[#10b981] font-medium transition-colors">Premium Web Design</Link></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#process" className="text-slate-400 hover:text-white font-medium transition-colors">Process</Link></li>
              <li><Link href="#pricing" className="text-slate-400 hover:text-white font-medium transition-colors">Pricing</Link></li>
              <li><Link href="#faq" className="text-slate-400 hover:text-white font-medium transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="text-slate-400 hover:text-white font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Connect Column */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Connect</h4>
            <p className="text-slate-400 font-medium mb-2">
              <a href="mailto:nexgenius@gmail.com" className="hover:text-[#10b981] transition-colors underline decoration-white/20 underline-offset-4">
                nexgenius@gmail.com
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              {/* Twitter (X) SVG */}
              <a href="#" aria-label="Twitter" className="p-3.5 bg-brand-card/80 rounded-2xl hover:bg-[#10b981] hover:text-brand-dark transition-all border border-white/10 group">
                <svg className="h-5 w-5 text-slate-300 group-hover:text-brand-dark" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn SVG */}
              <a href="#" aria-label="LinkedIn" className="p-3.5 bg-brand-card/80 rounded-2xl hover:bg-[#10b981] hover:text-brand-dark transition-all border border-white/10 group">
                <svg className="h-5 w-5 text-slate-300 group-hover:text-brand-dark" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.771-.773 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z"/>
                </svg>
              </a>
              {/* Instagram SVG */}
              <a href="#" aria-label="Instagram" className="p-3.5 bg-brand-card/80 rounded-2xl hover:bg-[#10b981] hover:text-brand-dark transition-all border border-white/10 group">
                <svg className="h-5 w-5 text-slate-300 group-hover:text-brand-dark" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">© 2026 NexGenius. Architecting the future.</p>
          <div className="flex space-x-8 text-sm font-semibold text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
