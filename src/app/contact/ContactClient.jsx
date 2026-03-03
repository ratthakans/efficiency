'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Check } from 'lucide-react';
import Section, { SectionLabel, FadeIn } from '@/components/ui/Section';

const CONTACT_INFO = [
  { icon: Mail,   label: 'Email',   value: 'hello@efficiency.co.th',          href: 'mailto:hello@efficiency.co.th' },
  { icon: Phone,  label: 'Phone',   value: '+66 92 390 5464',                  href: 'tel:+66923905464' },
  { icon: MapPin, label: 'Address', value: '246/8 Soi Yothin Phatthana, Khlong Chan, Bang Kapi, Bangkok 10240', href: null },
];

const INITIAL_FORM = { name: '', email: '', company: '', project_description: '' };

export default function ContactPage() {
  const [form, setForm]             = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);

  const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: wire to real API endpoint
    await new Promise(r => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <div className="pt-16">

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Contact</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-semibold tracking-tight leading-[1.08] mb-6"
          >
            Start with clarity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            Tell us about your project. We&apos;ll discuss whether we&apos;re the right fit
            and how we might work together.
          </motion.p>
        </div>
      </Section>

      {/* Form + Info */}
      <Section className="border-t border-white/[0.05]">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Form */}
          <div className="lg:col-span-7">
            <FadeIn>
              {submitted ? (
                <div
                  className="rounded-md p-12 text-center bg-[#080808]/70 border border-[#98c379]/20"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#98c379]/10 border border-[#98c379]/30"
                  >
                    <Check size={24} style={{ color: '#98c379' }} />
                  </div>
                  <h3 className="text-xl font-mono font-medium mb-3 text-white">Message received</h3>
                  <p className="text-white/45 text-sm leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. We&apos;ll review your message and respond within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <label className="block">
                      <span className="code-label block mb-3">Name *</span>
                      <input
                        type="text" required
                        value={form.name}
                        onChange={e => update('name', e.target.value)}
                        placeholder="Your name"
                        className="field-input w-full bg-[#080808]/50 border border-white/[0.08] rounded-sm px-4 py-3 text-white focus:border-white/20 transition-colors outline-none font-mono text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="code-label block mb-3">Email *</span>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={e => update('email', e.target.value)}
                        placeholder="your@email.com"
                        className="field-input w-full bg-[#080808]/50 border border-white/[0.08] rounded-sm px-4 py-3 text-white focus:border-white/20 transition-colors outline-none font-mono text-sm"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="code-label block mb-3">Company</span>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => update('company', e.target.value)}
                      placeholder="Company name (optional)"
                      className="field-input w-full bg-[#080808]/50 border border-white/[0.08] rounded-sm px-4 py-3 text-white focus:border-white/20 transition-colors outline-none font-mono text-sm"
                    />
                  </label>

                  <label className="block">
                    <span className="code-label block mb-3">Project Description *</span>
                    <textarea
                      required rows={5}
                      value={form.project_description}
                      onChange={e => update('project_description', e.target.value)}
                      placeholder="Tell us about your project, challenges, or questions..."
                      className="field-input w-full bg-[#080808]/50 border border-white/[0.08] rounded-sm px-4 py-3 text-white focus:border-white/20 transition-colors outline-none font-mono text-sm resize-none"
                    />
                  </label>

                  <button
                    type="submit" disabled={submitting}
                    className="group inline-flex items-center gap-3 px-7 py-3.5 text-sm font-mono font-semibold text-black rounded-sm transition-all duration-300 disabled:opacity-50"
                    style={{ background: 'linear-gradient(135deg, #61afef, #56b6c2)', boxShadow: '0 0 28px rgba(97,175,239,0.25)' }}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </FadeIn>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="space-y-10">
                <div>
                  <p className="code-label mb-6">Contact Information</p>
                  <div className="space-y-8">
                    {CONTACT_INFO.map(item => (
                      <div key={item.label} className="flex gap-4">
                        <div
                          className="icon-box w-10 h-10 rounded-sm flex-shrink-0 border border-white/[0.08] flex items-center justify-center bg-[#080808]/50"
                        >
                          <item.icon size={15} className="text-white/40" />
                        </div>
                        <div>
                          <p className="code-label mb-1">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-white/60 text-sm hover:text-white transition-colors">{item.value}</a>
                          ) : (
                            <p className="text-white/60 text-sm leading-relaxed">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/[0.05]">
                  <p className="code-label mb-2">Company</p>
                  <p className="text-white/60 text-sm">EFFICIENCY Co., Ltd.</p>
                </div>
                <div>
                  <p className="code-label mb-2">Website</p>
                  <a href="https://efficiency.co.th" target="_blank" rel="noopener noreferrer"
                    className="text-white/60 text-sm hover:text-white transition-colors">
                    efficiency.co.th
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </div>
  );
}
