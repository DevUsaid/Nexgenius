'use client';

import { useState } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-slate-950">
            Nex<span className="text-indigo-600">Genius</span>
          </Link>
          <div className="hidden md:flex space-x-10 text-sm font-semibold text-slate-600">
            <Link href="#services" className="hover:text-indigo-600 transition-colors">Services</Link>
            <Link href="#process" className="hover:text-indigo-600 transition-colors">Process</Link>
            <Link href="#about" className="hover:text-indigo-600 transition-colors">About</Link>
          </div>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-indigo-600 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all cursor-pointer"
          >
            Let&apos;s Talk
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
