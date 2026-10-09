'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111827] text-white pt-16 pb-8 border-t border-[#374151]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        {/* Top Section: Brand + Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-[#374151]">
          
          {/* Brand Statement */}
          <div className="lg:col-span-5 flex flex-col items-start max-w-[380px]">
            {/* Official Brand Logo */}
            <Link href="/" className="inline-flex items-center mb-5 group">
              <Image
                src="/images/nexgenius-logo-dark.png"
                alt="NexGenius - AI & Software Solutions"
                width={190}
                height={46}
                unoptimized
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-[17px] text-[#CBD5E1] font-normal leading-[1.5] mb-6">
              Intelligent systems.<br />
              Built around your business.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-white hover:text-[#A7F3D0] transition-colors"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* 3 Footer Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Group 1: Intelligence */}
            <div className="flex flex-col space-y-4">
              <div className="font-mono text-[10px] text-[#A7F3D0] font-medium uppercase tracking-[0.12em]">
                Intelligence
              </div>
              <div className="flex flex-col space-y-2.5 text-[13px] text-[#CBD5E1]">
                <a href="#ai-workforce" className="hover:text-white transition-colors">AI automation</a>
                <a href="#ai-workforce" className="hover:text-white transition-colors">AI agents</a>
                <a href="#ai-workforce" className="hover:text-white transition-colors">AI FTE / Digital workforce</a>
              </div>
            </div>

            {/* Group 2: Engineering */}
            <div className="flex flex-col space-y-4">
              <div className="font-mono text-[10px] text-[#A7F3D0] font-medium uppercase tracking-[0.12em]">
                Engineering
              </div>
              <div className="flex flex-col space-y-2.5 text-[13px] text-[#CBD5E1]">
                <a href="#services" className="hover:text-white transition-colors">Web & custom software</a>
                <a href="#services" className="hover:text-white transition-colors">Web development</a>
                <a href="#services" className="hover:text-white transition-colors">Mobile applications</a>
              </div>
            </div>

            {/* Group 3: Operations */}
            <div className="flex flex-col space-y-4">
              <div className="font-mono text-[10px] text-[#A7F3D0] font-medium uppercase tracking-[0.12em]">
                Operations
              </div>
              <div className="flex flex-col space-y-2.5 text-[13px] text-[#CBD5E1]">
                <a href="#services" className="hover:text-white transition-colors">Hosting & domains</a>
                <a href="#services" className="hover:text-white transition-colors">Server maintenance</a>
                <a href="#services" className="hover:text-white transition-colors">SEO & organic growth</a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#94A3B8]">
          <div>
            © 2026 NexGenius Systems. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy notice
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of use
            </Link>
            <button
              onClick={scrollToTop}
              className="font-mono text-[10px] text-white hover:text-[#A7F3D0] transition-colors cursor-pointer"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
