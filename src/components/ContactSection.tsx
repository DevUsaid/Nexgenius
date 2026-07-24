"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setForm({ name: '', company: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 py-12 md:py-16 px-6 border-t border-white/5 bg-transparent relative overflow-hidden">
      {/* Background glow circle locked within contact bounds */}
      <div className="absolute bottom-[-100px] left-[-10%] w-[550px] h-[550px] rounded-full bg-[#10b981]/10 blur-[130px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid gap-12 lg:grid-cols-2 items-start overflow-hidden">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-primary mb-4">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Let&apos;s Build Something <br />
              <span className="text-gradient">Smarter Together</span>
            </h2>
            <p className="text-brand-muted text-lg max-w-lg mb-12 leading-relaxed">
              Whether you&apos;re ready to integrate AI workflows into your operations or just want to bounce some ideas around, we&apos;re here to help.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-brand-card/40 max-w-md">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-brand-muted font-mono uppercase tracking-wider">Mail Us</p>
                  <a href="mailto:nexgenius@gmail.com" className="text-white font-bold hover:text-brand-accent transition-colors">
                    nexgenius@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-brand-card/40 max-w-md">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-brand-muted font-mono uppercase tracking-wider">Call Us</p>
                  <a href="tel:+18001234567" className="text-white font-bold hover:text-brand-accent transition-colors">
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-brand-card/40 max-w-md">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-brand-muted font-mono uppercase tracking-wider">Office</p>
                  <p className="text-white font-bold">
                    123 Innovation Drive, SF, CA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2.5rem] border border-white/5 bg-brand-card/30 backdrop-blur-md p-8 sm:p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2 font-mono">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-brand-dark px-5 py-4 text-sm text-white placeholder-slate-600 outline-none focus:border-brand-primary transition-colors"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2 font-mono">Company Name</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full rounded-2xl border border-white/10 bg-brand-dark px-5 py-4 text-sm text-white placeholder-slate-600 outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2 font-mono">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-brand-dark px-5 py-4 text-sm text-white placeholder-slate-600 outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-muted uppercase tracking-wider mb-2 font-mono">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help automate your business?"
                  className="w-full rounded-2xl border border-white/10 bg-brand-dark px-5 py-4 text-sm text-white placeholder-slate-600 outline-none focus:border-brand-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-[#39FF14] via-[#32E000] to-[#00FF7F] text-[#021107] font-extrabold rounded-2xl py-4 text-sm shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border border-[#39FF14]/50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-center text-emerald-400 text-sm font-semibold mt-4">
                  Thank you! Your message was sent successfully. We will get back to you shortly.
                </p>
              )}
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

