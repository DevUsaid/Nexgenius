'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[95%] max-w-6xl z-50 rounded-2xl sm:rounded-full border border-[#39FF14]/30 bg-[#061a0d]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(57,255,20,0.15)] transition-all duration-300">
        <div className="px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:opacity-90 flex items-center gap-1 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#39FF14]/20 flex items-center justify-center mr-1.5 sm:mr-2 group-hover:scale-110 transition-transform">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#39FF14] shadow-[0_0_12px_#39FF14]"></div>
            </div>
            Nex<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#00FF7F]">Genius</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 h-full">
            {navLinks.map((link) => (
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

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsContactModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="hidden sm:inline-flex bg-gradient-to-r from-[#39FF14] via-[#32E000] to-[#00FF7F] text-[#021107] px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-extrabold shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:scale-[1.03] transition-all cursor-pointer border border-[#39FF14]/50"
            >
              Start Project
            </button>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-[#39FF14]" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 border-t border-white/10 bg-[#061a0d]/95 backdrop-blur-2xl rounded-b-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-bold text-slate-200 hover:text-white hover:bg-[#39FF14]/10 transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] opacity-70"></span>
                </Link>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#39FF14] via-[#32E000] to-[#00FF7F] text-[#021107] py-3.5 rounded-xl text-sm font-extrabold shadow-[0_0_20px_rgba(57,255,20,0.4)] text-center cursor-pointer border border-[#39FF14]/50"
                >
                  Start Project
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
