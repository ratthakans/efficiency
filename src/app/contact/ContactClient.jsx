'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Check, MessageCircle } from 'lucide-react';
import Section, { SectionLabel, FadeIn } from '@/components/ui/Section';

const CONTACT_INFO = [
  { icon: Mail,          label: 'Email',   value: 'hello@efficiency.co.th',       href: 'mailto:hello@efficiency.co.th' },
  { icon: Phone,         label: 'Phone',   value: '+66 92 390 5464',              href: 'tel:+66923905464' },
  { icon: MessageCircle, label: 'LINE',    value: '@efficiency.co.th',             href: 'https://line.me/ti/p/@efficiency.co.th' },
  { icon: MapPin,        label: 'Address', value: '246/8 Soi Yothinphatthana, Bang Kapi, Bangkok 10240', href: null },
];

const PROJECT_TYPES = [
  'Mobile App (iOS/Android)',
  'POS System',
  'Embedded / Device Software',
  'Not sure yet (looking for advice)',
];

const INITIAL_FORM = { name: '', email: '', company: '', project_type: '', budget: '', description: '' };

const BUDGET_RANGES = [
  'Under ฿375,000 (consultation)',
  '฿375,000–560,000 (Starter)',
  '฿560,000–1,100,000 (Business)',
  '฿1,100,000+ (Platform)',
  'Not sure yet',
];

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
            Get a free<br />
            <span className="accent-blue">project assessment</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            Tell us about your project — we'll assess it and recommend the right package
            with a rough timeline and estimate within 1 business day, no commitment required.
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
                <div className="rounded-md p-12 text-center bg-[#080808]/70 border border-[#98c379]/20">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#98c379]/10 border border-[#98c379]/30">
                    <Check size={24} style={{ color: '#98c379' }} />
                  </div>
                  <h3 className="text-xl font-mono font-medium mb-3 text-white">Message received!</h3>
                  <p className="text-white/45 text-sm leading-relaxed max-w-md mx-auto">
                    Thanks for reaching out — our team will review your project and get back to you within 1 business day.
                    For urgent enquiries, contact us directly via LINE or email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <label className="block">
                      <span className="code-label block mb-3">Name *</span>
                      <input
                        type="text" required
                        value={form.name}
                        onChange={e => update('name', e.target.value)}
                        placeholder="Full name"
                        className="field-input w-full px-4 py-3 text-sm"
                      />
                    </label>
                    <label className="block">
                      <span className="code-label block mb-3">Email *</span>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={e => update('email', e.target.value)}
                        placeholder="your@email.com"
                        className="field-input w-full px-4 py-3 text-sm"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="code-label block mb-3">Company / Organisation</span>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => update('company', e.target.value)}
                      placeholder="Company name (if applicable)"
                      className="field-input w-full px-4 py-3 text-sm"
                    />
                  </label>

                  <div className="grid md:grid-cols-2 gap-6">
                    <label className="block">
                      <span className="code-label block mb-3">Project type *</span>
                      <select
                        required
                        value={form.project_type}
                        onChange={e => update('project_type', e.target.value)}
                        className="field-input w-full px-4 py-3 text-sm appearance-none"
                        style={{ background: 'rgba(8,8,8,0.5)', color: form.project_type ? '#fff' : 'rgba(255,255,255,0.2)' }}
                      >
                        <option value="" disabled>Select type...</option>
                        {PROJECT_TYPES.map(t => <option key={t} value={t} style={{ color: '#fff', background: '#0a0e13' }}>{t}</option>)}
                      </select>
                    </label>
                    <label className="block">
                      <span className="code-label block mb-3">Budget (approximate)</span>
                      <select
                        value={form.budget}
                        onChange={e => update('budget', e.target.value)}
                        className="field-input w-full px-4 py-3 text-sm appearance-none"
                        style={{ background: 'rgba(8,8,8,0.5)', color: form.budget ? '#fff' : 'rgba(255,255,255,0.2)' }}
                      >
                        <option value="" style={{ color: 'rgba(255,255,255,0.2)' }}>Select range...</option>
                        {BUDGET_RANGES.map(b => <option key={b} value={b} style={{ color: '#fff', background: '#0a0e13' }}>{b}</option>)}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="code-label block mb-3">Project description *</span>
                    <textarea
                      required rows={5}
                      value={form.description}
                      onChange={e => update('description', e.target.value)}
                      placeholder="Tell us about: your business, the problem you're solving, who the end-users are, any timeline or deadline constraints..."
                      className="field-input w-full px-4 py-3 text-sm resize-none"
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
                  <p className="code-label mb-6">Contact channels</p>
                  <div className="space-y-8">
                    {CONTACT_INFO.map(item => (
                      <div key={item.label} className="flex gap-4">
                        <div className="icon-box w-10 h-10 rounded-sm flex-shrink-0 border border-white/[0.08] flex items-center justify-center bg-[#080808]/50">
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

                <div className="pt-8 border-t border-white/[0.05] space-y-4">
                  <div>
                    <p className="code-label mb-2">Company</p>
                    <p className="text-white/60 text-sm">EFFICIENCY Co., Ltd.</p>
                  </div>
                  <div>
                    <p className="code-label mb-2">Office hours</p>
                    <p className="text-white/60 text-sm">Monday – Friday, 9:00 – 18:00 (ICT)</p>
                  </div>
                  <div>
                    <p className="code-label mb-2">Response time</p>
                    <p className="text-white/60 text-sm">Within 1 business day across all channels.</p>
                  </div>
                </div>

                <div
                  className="p-5 rounded-md text-sm"
                  style={{ background: 'rgba(97,175,239,0.06)', border: '1px solid rgba(97,175,239,0.15)' }}
                >
                  <p className="font-mono text-[11px] text-white/40 mb-2">Free assessment includes:</p>
                  <ul className="space-y-1.5">
                    {['Package recommendation', 'Rough timeline estimate', 'Technical approach overview', 'No commitment required'].map(item => (
                      <li key={item} className="text-white/55 text-xs flex items-center gap-2 font-mono">
                        <span className="w-1 h-1 rounded-full bg-[#61afef] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </div>
  );
}
