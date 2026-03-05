'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, Zap } from 'lucide-react';
import Section, { SectionLabel, SectionTitle, FadeIn } from '@/components/ui/Section';
import { accentAt } from '@/lib/accents';

// Prices adjusted +25% and rounded to clean numbers
const PACKAGES = [
  {
    name: 'Starter',
    subtitle: 'Mobile / Operational MVP',
    price: '375,000–560,000',
    timeline: '6–8 weeks',
    accentIdx: 4,
    description: 'Ideal for businesses that need a mobile app or operational system that works in MVP scope.',
    included: [
      'UX Research & User Journey Mapping',
      'UI Design + Design System (Figma)',
      'Flutter app — iOS + Android (1 platform set)',
      'Backend API (Node.js / Go)',
      'Database + Cloud deployment',
      'App Store + Play Store submission',
      '30 days post-launch support',
      'Performance baseline profiling',
    ],
    notIncluded: [
      'Admin web panel (add-on)',
      'Hardware SDK integration (add-on)',
      'Advanced analytics dashboard (add-on)',
      'Multi-language / localisation',
    ],
    bestFor: ['Startups validating an MVP', 'SMEs needing an ops app', 'Single POS / single location'],
  },
  {
    name: 'Business',
    subtitle: 'Business App',
    price: '560,000–1,100,000',
    timeline: '8–12 weeks',
    accentIdx: 2,
    popular: true,
    description: 'For businesses that need a more complex app with admin panel, hardware integration or third-party APIs.',
    included: [
      'Everything in Starter +',
      'Admin web panel (full CRUD)',
      'Analytics & reporting dashboard',
      'Hardware SDK integration (printer/scanner/BLE)',
      'Advanced auth (SSO / biometric)',
      'Push notification system',
      'AB testing infrastructure',
      '60 days post-launch support',
      'QA testing — real device matrix (10+ models)',
      'CI/CD pipeline setup',
    ],
    notIncluded: [
      'Multi-tenant / multi-branch (upgrade to Platform)',
      'Embedded firmware development (add-on)',
      'Custom hardware design',
    ],
    bestFor: ['Multi-location businesses (2–10)', 'POS + loyalty + inventory', 'Apps integrating with hardware'],
  },
  {
    name: 'Platform',
    subtitle: 'Full Platform',
    price: '1,100,000–2,250,000',
    timeline: '12–16 weeks',
    accentIdx: 5,
    description: 'For platform-scale systems — multi-tenant, complex workflows, enterprise integration and SLA-grade reliability.',
    included: [
      'Everything in Business +',
      'Multi-tenant architecture',
      'Enterprise API integration',
      'Role-based access control (RBAC)',
      'Audit logging for compliance',
      'Advanced offline-first architecture',
      'Load testing & performance SLA',
      'Security penetration test (basic)',
      '90 days post-launch support',
      'Dedicated technical project manager',
      'Documentation: API + developer guide',
    ],
    notIncluded: [
      'PC/hardware manufacturing',
      'RF/EMC certification',
      'On-premise server setup (add-on)',
    ],
    bestFor: ['Enterprise / large business groups', 'Platforms with multiple partners or merchants', 'Embedded + Cloud + Mobile full stack'],
  },
];

const ADDONS = [
  {
    name: 'Maintenance Package',
    price: '20,000–50,000',
    unit: '/ month',
    desc: 'Bug fixes, OS compatibility updates, performance monitoring, minor feature additions (< 8h/month)',
    accentIdx: 4,
  },
  {
    name: 'Feature Expansion',
    price: '125,000–500,000',
    unit: '/ feature set',
    desc: 'Add new features post-launch — scoped, costed and delivered as a 2–4 week mini-sprint.',
    accentIdx: 2,
  },
  {
    name: 'Data Dashboard',
    price: '250,000–750,000',
    unit: '/ project',
    desc: 'Business intelligence dashboard with data visualisation, exports, scheduled reports and custom KPIs.',
    accentIdx: 0,
  },
  {
    name: 'Hardware Integration',
    price: '100,000–315,000',
    unit: '/ integration',
    desc: 'BLE, NFC, RFID, ESC/POS printer, barcode scanner, payment terminal — native SDK integration + testing.',
    accentIdx: 5,
  },
  {
    name: 'UX/UI Audit',
    price: '38,000–100,000',
    unit: '/ audit',
    desc: 'Review an existing app for usability issues, accessibility, performance and design consistency.',
    accentIdx: 1,
  },
  {
    name: 'Embedded Module',
    price: '190,000–625,000',
    unit: '/ module',
    desc: 'Additional firmware module: OTA update, new sensor protocol, communication stack, edge computation.',
    accentIdx: 3,
  },
];

const SCOPE_NOTES = [
  { title: 'Pricing depends on scope', desc: 'All prices are ranges — the final quote depends on complexity, number of screens/API endpoints and hardware requirements specified in your project brief.' },
  { title: 'No hidden costs', desc: 'Quoted prices include design, development, testing and deployment. Third-party service costs (cloud, store account, API subscriptions) are disclosed separately.' },
  { title: 'Payment terms', desc: 'Typically: 30% on contract signing, 40% at mid-project milestone, 30% on delivery — adjustable based on project structure.' },
  { title: 'Scope changes', desc: 'If scope changes during the project, we immediately communicate the impact on timeline and cost before proceeding.' },
];

export default function PricingPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Pricing</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-semibold tracking-tight leading-[1.08] mb-6"
          >
            Starting from<br />
            <span className="accent-blue">฿375,000</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            Clear packages, no hidden costs — we can tell you immediately which tier your project belongs in and exactly how long it will take.
          </motion.p>
        </div>
      </Section>

      {/* Package cards */}
      <Section className="border-t border-white/[0.05]">
        <div className="grid md:grid-cols-3 gap-5">
          {PACKAGES.map((pkg, i) => {
            const a = accentAt(pkg.accentIdx);
            return (
              <FadeIn key={pkg.name} delay={i * 0.12}>
                <div
                  className="tech-card rounded-md p-8 group cursor-default h-full relative flex flex-col"
                  style={{ '--row-accent': a.hex, ...(pkg.popular ? { borderColor: `${a.hex}40` } : {}) }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span
                        className="inline-flex items-center gap-1 text-[9px] font-mono font-bold px-3 py-1 rounded-full"
                        style={{ background: a.hex, color: '#000' }}
                      >
                        <Zap size={8} /> Recommended
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <p className="code-label mb-2">{pkg.subtitle}</p>
                    <h2 className="text-2xl font-mono font-bold text-white mb-4">{pkg.name}</h2>
                    <div className="mb-2">
                      <span className="text-3xl font-mono font-bold" style={{ color: a.hex }}>
                        ฿{pkg.price}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/35 font-mono">⏱ {pkg.timeline}</p>
                  </div>

                  <p className="text-white/45 text-sm leading-relaxed mb-8">{pkg.description}</p>

                  {/* Included */}
                  <div className="mb-6 flex-1">
                    <p className="code-label mb-4">Included</p>
                    <ul className="space-y-2.5">
                      {pkg.included.map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                          <Check size={12} className="mt-[3px] flex-shrink-0" style={{ color: a.hex }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not included */}
                  <div className="mb-6">
                    <p className="code-label mb-3">Not included</p>
                    <ul className="space-y-2">
                      {pkg.notIncluded.map(item => (
                        <li key={item} className="flex items-start gap-2 text-xs text-white/30 font-mono">
                          <X size={10} className="mt-[3px] flex-shrink-0 text-white/20" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best for */}
                  <div className="pt-5 border-t border-white/[0.06]">
                    <p className="code-label mb-3">Best for</p>
                    <ul className="space-y-1.5">
                      {pkg.bestFor.map(bf => (
                        <li key={bf} className="text-[11px] text-white/40 font-mono flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full mt-[5px] flex-shrink-0" style={{ backgroundColor: `${a.hex}60` }} />
                          {bf}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="accent-line mt-6" style={{ background: a.hex }} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Add-ons */}
      <Section>
        <div className="separator-glow mb-14" />
        <SectionLabel>Add-ons</SectionLabel>
        <SectionTitle className="mb-12">
          Expandable to your <span className="accent-cyan">requirements</span>
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADDONS.map((addon, i) => {
            const a = accentAt(addon.accentIdx);
            return (
              <FadeIn key={addon.name} delay={i * 0.08}>
                <div className="tech-card rounded-md p-6 group cursor-default" style={{ '--row-accent': a.hex }}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-sm font-mono font-semibold text-white/80 group-hover:text-white transition-colors leading-snug">{addon.name}</h3>
                  </div>
                  <div className="mb-3">
                    <span className="font-mono font-bold text-lg" style={{ color: a.hex }}>฿{addon.price}</span>
                    <span className="text-[11px] text-white/30 ml-1">{addon.unit}</span>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">{addon.desc}</p>
                  <span className="accent-line" style={{ background: a.hex }} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Scope Notes */}
      <Section>
        <div className="separator-glow mb-14" />
        <SectionLabel>Good to know</SectionLabel>
        <SectionTitle className="mb-12">Pricing that's <span className="accent-yellow">transparent</span></SectionTitle>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {SCOPE_NOTES.map((note, i) => {
            const a = accentAt(i);
            return (
              <FadeIn key={note.title} delay={i * 0.1}>
                <div className="value-card pl-5 py-5 pr-5 group cursor-default" style={{ '--card-accent': a.hex }}>
                  <h3 className="text-sm font-mono font-semibold text-white/80 mb-2 group-hover:text-white transition-colors">{note.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{note.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="separator-glow mb-16" />
        <div className="text-center max-w-xl mx-auto">
          <FadeIn>
            <p className="text-2xl md:text-3xl font-mono font-semibold text-white mb-4">
              Not sure which package fits?
            </p>
            <p className="text-white/38 text-sm mb-10">
              Tell us about your project — we'll assess it and recommend a package with a rough estimate, free, within 1 business day.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-mono font-semibold text-black rounded-sm"
              style={{ background: 'linear-gradient(135deg, #61afef, #56b6c2)', boxShadow: '0 0 28px rgba(97,175,239,0.25)' }}
            >
              Get a Free Assessment
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
