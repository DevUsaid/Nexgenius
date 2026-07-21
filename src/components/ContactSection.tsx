"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // API request to Next.js API Route for Resend integration
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setStatus('success');
      setForm({ name: '', company: '', email: '', phone: '', country: '', service: '', budget: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 py-24 px-6 border-t border-border-subtle bg-transparent relative overflow-hidden">
      {/* Background glow circle locked within contact bounds */}
      <div className="absolute bottom-[-100px] left-[-10%] w-[550px] h-[550px] rounded-full bg-brand-primary/10 blur-[130px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid gap-12 lg:grid-cols-2 items-start overflow-hidden">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-primary mb-4">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-white mb-6">
              Let&apos;s Build Something <br />
              <span className="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold  font-serif">Smarter Together</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-lg mb-12 leading-relaxed">
              Whether you&apos;re ready to integrate AI workflows into your operations or just want to bounce some ideas around, we&apos;re here to help.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-border-subtle bg-surface/40 max-w-md">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-mono uppercase tracking-wider mb-1">Mail Us</p>
                  <a href="mailto:hello@nexgeniussolutions.com" className="text-white font-semibold hover:text-brand-accent transition-colors">
                    hello@nexgeniussolutions.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 p-5 rounded-2xl border border-border-subtle bg-surface/40 max-w-md">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-mono uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-semibold">
                    Global Reach (HQ pending)
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
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2.5rem] border border-border-subtle glass-card p-8 sm:p-10"
          >
            <h3 className="text-2xl font-serif text-white mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2 font-mono">Full Name</label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2 font-mono">Company Name</label>
                  <Input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2 font-mono">Email Address</label>
                  <Input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2 font-mono">Phone</label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2 font-mono">Country</label>
                  <Input
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    placeholder="United States"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2 font-mono">Budget</label>
                  <Input
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    placeholder="$5k - $10k"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2 font-mono">Service Required</label>
                <Input
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  placeholder="e.g. AI Agents, Web Development"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2 font-mono">Your Message</label>
                <Textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help automate your business?"
                />
              </div>

              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full h-12 text-base rounded-xl glow-cyan"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Message
                  </>
                )}
              </Button>

              {status === 'success' && (
                <p className="text-center text-brand-accent text-sm font-semibold mt-4">
                  Thank you! Your message was sent successfully. We will get back to you shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-red-500 text-sm font-semibold mt-4">
                  There was an error sending your message. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
