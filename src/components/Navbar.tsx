'use client';

import { useState } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-full border border-[#10b981]/30 bg-[#0a2e16]/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(16,185,129,0.15)] transition-all duration-300">
        <div className="px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:opacity-90 flex items-center gap-1 group">
            <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
              <div className="w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_10px_#10b981]"></div>
            </div>
            Nex<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399]">Genius</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1 h-full">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Contact', href: '/contact' }
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-sm font-bold text-slate-300 hover:text-white transition-colors group h-full flex items-center"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 rounded-t-full"></span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsContactModalOpen(true)}
            className="bg-white text-brand-dark px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-[1.02] transition-all cursor-pointer border border-transparent hover:border-[#10b981]/50"
          >
            Start Project
          </button>
        </div>
      </nav>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
