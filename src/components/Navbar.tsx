'use client';

import { useState } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-full border border-[#39FF14]/30 bg-[#061a0d]/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(57,255,20,0.15)] transition-all duration-300">
        <div className="px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:opacity-90 flex items-center gap-1 group">
            <div className="w-8 h-8 rounded-full bg-[#39FF14]/20 flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
              <div className="w-3 h-3 rounded-full bg-[#39FF14] shadow-[0_0_12px_#39FF14]"></div>
            </div>
            Nex<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#00FF7F]">Genius</span>
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
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#39FF14] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 rounded-t-full shadow-[0_0_8px_#39FF14]"></span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsContactModalOpen(true)}
            className="bg-gradient-to-r from-[#39FF14] via-[#32E000] to-[#00FF7F] text-[#021107] px-6 py-2 rounded-full text-sm font-extrabold shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:scale-[1.03] transition-all cursor-pointer border border-[#39FF14]/50"
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
