import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-32 relative overflow-hidden bg-transparent">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-brand-dark/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Massive CTA Section */}
        <div className="rounded-[2rem] border border-border-subtle bg-surface/60 backdrop-blur-md p-12 md:p-20 mb-12 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')] opacity-[0.03]"></div>
          
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight mb-8 drop-shadow-lg max-w-4xl">
            Ready to Build AI <br />
            <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold ">That Works?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-10 max-w-2xl font-light">
            Stop doing manual data entry. Let&apos;s architect an AI-driven automation engine that scales your business while you sleep.
          </p>
          <a
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-white bg-brand-primary rounded-full text-lg transition-all hover:scale-105 hover:bg-brand-accent shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]"
          >
            Schedule Discovery Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Links Grid Section */}
        <div className="py-16 border-t border-border-subtle grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="text-3xl font-bold tracking-tight text-white flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-4 h-4 rounded-full bg-brand-primary shadow-[0_0_12px_#10B981]"></div>
              </div>
              Nex<span className="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold ">Genius</span>
            </Link>
            <p className="text-base text-text-secondary leading-relaxed pr-8 font-medium">
              We engineer intelligent systems and high-performance websites to transform your manual workflows into automated powerhouses.
            </p>
          </div>
          
          {/* Company Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-lg font-semibold text-white tracking-wider mb-2">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="text-text-secondary hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-brand-primary transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-text-secondary hover:text-brand-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services Column */}
          <div className="lg:col-span-3 flex flex-col gap-5 lg:pl-8">
            <h4 className="text-lg font-semibold text-white tracking-wider mb-2">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services" className="text-text-secondary hover:text-brand-primary transition-colors">AI Agents</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-brand-primary transition-colors">Voice AI</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-brand-primary transition-colors">RAG Systems</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-brand-primary transition-colors">AI Chatbots</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-brand-primary transition-colors">Automation</Link></li>
              <li><Link href="/services/custom-development" className="text-text-secondary hover:text-brand-primary transition-colors">Web App Development</Link></li>
            </ul>
          </div>
          
          {/* Connect Column */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-lg font-semibold text-white tracking-wider mb-2">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="text-text-secondary hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-text-secondary hover:text-brand-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="py-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm font-medium">© 2026 NexGenius Solutions. All rights reserved.</p>
          <div className="flex space-x-6 text-text-secondary">
             {/* Socials */}
             <a href="#" aria-label="Twitter" className="hover:text-brand-primary transition-colors">Twitter</a>
             <a href="#" aria-label="LinkedIn" className="hover:text-brand-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
