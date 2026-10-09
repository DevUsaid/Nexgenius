'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu, X, Sparkles, Activity } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'AI workforce', href: '#ai-workforce' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Our approach', href: '#approach' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-[#E5E7EB]/80 transition-all">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center py-1 group shrink-0">
          <Image
            src="/images/nexgenius-logo-transparent.png"
            alt="NexGenius - AI & Software Solutions"
            width={210}
            height={50}
            priority
            unoptimized
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC]/90 border border-[#E5E7EB] shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-[13px] font-medium text-[#475569] hover:text-[#111D33] hover:bg-white transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-5 h-[44px] rounded-[8px] bg-[#14532D] hover:bg-[#0c381e] text-white text-[13px] font-semibold transition-all shadow-[0_4px_14px_rgba(20,83,45,0.25)] hover:shadow-[0_6px_20px_rgba(20,83,45,0.35)] hover:scale-[1.02]"
          >
            <span>Let’s talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#111D33] hover:bg-gray-100 transition-colors"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E7EB] bg-white/95 backdrop-blur-xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[15px] font-medium text-[#111D33] hover:text-[#14532D] py-2 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 h-12 rounded-[8px] bg-[#14532D] text-white text-[14px] font-semibold"
            >
              <span>Let’s talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
