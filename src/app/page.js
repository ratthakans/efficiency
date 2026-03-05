'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowDown, Smartphone, Monitor, Cpu,
  ShieldCheck, Layers, GitBranch, Zap, ChevronDown,
  TrendingUp, Users, Globe, Clock,
} from 'lucide-react';
import { useState } from 'react';
import Section, { SectionLabel, SectionTitle, FadeIn } from '@/components/ui/Section';
import TypewriterText from '@/components/TypewriterText';
import ProcessModal from '@/components/ProcessModal';
import { accentAt } from '@/lib/accents';

// ─── Static data ──────────────────────────────────────────
const PILLARS = [
  {
    icon: Smartphone, accentIdx: 4, tag: '01 / Mobile',
    title: 'Mobile App Engineering',
    description: 'iOS · Android · Flutter. Designed from real user behaviour — not just a pretty screen.',
    tags: ['Flutter', 'Swift', 'Kotlin', 'React Native'],
    href: '/services',
  },
  {
    icon: Monitor, accentIdx: 2, tag: '02 / POS & Operations',
    title: 'POS & Operational Systems',
    description: 'Purpose-built for F&B, Retail, Kiosk and Ticketing — with full hardware integration from printer to scanner.',
    tags: ['Retail POS', 'F&B KDS', 'Kiosk', 'Hardware SDK'],
    href: '/services',
  },
  {
    icon: Cpu, accentIdx: 5, tag: '03 / Embedded',
    title: 'Embedded & Device Software',
    description: 'Systems wired to hardware — IoT, EV, device control, firmware integration at the edge.',
    tags: ['C/C++', 'Rust', 'RTOS', 'IoT Protocol'],
    href: '/services',
  },
];

const WHY_US = [
  { icon: Layers,     accentIdx: 4, title: 'UX/UI grounded in practice',   desc: 'Not just aesthetics — every interface is validated against real users in real environments.' },
  { icon: Smartphone, accentIdx: 2, title: 'Mobile-First Engineering',      desc: 'A team that specialises in mobile development — not a web agency that does mobile on the side.' },
  { icon: GitBranch,  accentIdx: 0, title: 'Operational Thinking',          desc: 'We understand business workflows. Systems we build adapt to how you operate — not the other way around.' },
  { icon: Zap,        accentIdx: 5, title: 'Transparent Pricing',           desc: 'Clear packages, no hidden costs. We tell you immediately which tier fits your project.' },
];

const HERO_STATS = [
  { label: 'mobile apps delivered', value: '25+',  accentIdx: 4 },
  { label: 'POS systems deployed',  value: '12+',  accentIdx: 2 },
  { label: 'avg. delivery time',    value: '8w',   accentIdx: 5 },
];

const WHY_MOBILE = [
  {
    icon: TrendingUp, accentIdx: 4,
    stat: '6.9B',
    label: 'Smartphone users worldwide',
    desc: 'Over 86% of the global population carries a smartphone. Your product needs to be in their pocket — not on a desktop they no longer use.',
  },
  {
    icon: Clock, accentIdx: 2,
    stat: '4.8h',
    label: 'Average daily screen time on mobile',
    desc: 'Users spend nearly 5 hours per day on mobile devices. Attention lives on mobile — if your system isn\'t there, you\'re invisible.',
  },
  {
    icon: Globe, accentIdx: 0,
    stat: '92%',
    label: 'Internet users access via mobile',
    desc: 'In Southeast Asia, mobile-first is not a trend — it\'s the baseline. Building for desktop first means building for the minority.',
  },
  {
    icon: Users, accentIdx: 5,
    stat: '3×',
    label: 'Higher conversion on a well-designed mobile app',
    desc: 'A native mobile app with great UX converts 3× better than a mobile website for transactional use cases like booking, payment and POS.',
  },
];

const PROCESS_STEPS = [
  { label: 'Discovery',  accentIdx: 0, desc: 'Understand the business before opening a code editor' },
  { label: 'UX / UI',   accentIdx: 1, desc: 'A testable prototype — not just a pretty Figma file' },
  { label: 'Build',     accentIdx: 2, desc: 'Sprint-based, demo every 2 weeks' },
  { label: 'QA & Test', accentIdx: 3, desc: 'Real device testing, full edge case coverage' },
  { label: 'Launch',    accentIdx: 4, desc: 'Deploy + store submission + go-live support' },
  { label: 'Maintain',  accentIdx: 5, desc: 'Monitoring, updates, feature expansion' },
];

const FAQS = [
  {
    q: 'Does Efficiency only do mobile apps, or do you handle backend too?',
    a: 'We handle the full stack — mobile app (iOS/Android/Flutter), backend APIs, database, cloud infrastructure and hardware integration. You don\'t need to manage multiple vendors.',
  },
  {
    q: 'What does the starting price of ฿375,000 cover?',
    a: 'The Starter package includes: UX/UI design, Flutter mobile app (iOS+Android), backend API, cloud deployment, store submission and 30 days post-launch support. See the Pricing page for full details.',
  },
  {
    q: 'Can you integrate hardware like printers or BLE devices?',
    a: 'Yes — we specialise in hardware protocol integration including Bluetooth, USB, Serial, ESC/POS printers, RFID, NFC and IoT sensors via native SDK on both Android and iOS.',
  },
  {
    q: 'How long does development take?',
    a: 'Starter Package: 6–8 weeks. Business App: 8–12 weeks. Platform: 12–16 weeks. We work in 2-week sprints with a demo at the end of each sprint.',
  },
  {
    q: 'Is there support after launch?',
    a: 'Yes — we offer Maintenance Packages covering bug fixes, OS updates, monitoring, performance tuning and minor feature additions.',
  },
];

// ─── Page component ───────────────────────────────────────
export default function HomePage() {
  const [activeStep, setActiveStep] = useState(null);
  const [openFaq, setOpenFaq]       = useState(null);

  return (
    <div className="relative pt-16">

      {/* ══ Hero ══════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <span className="tag-glow">Thailand Mobile Engineering Studio</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-[78px] font-mono font-semibold tracking-tight leading-[1.04] mb-6 text-white"
              >
                <TypewriterText words={['Mobile', 'POS', 'Embedded', 'IoT']} className="accent-blue" />
                <br />
                <span className="text-white/85">App</span>
                <br />
                <span className="accent-grad-rb">Engineering.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-white/50 font-light max-w-md mb-10 leading-relaxed"
              >
                Thailand's specialist studio for
                <span className="text-white/75"> Mobile App · POS · Embedded Software</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-mono font-semibold text-black rounded-sm transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #61afef, #56b6c2)', boxShadow: '0 0 28px rgba(97,175,239,0.3)' }}
                >
                  Get a Free Assessment
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-mono font-medium text-white rounded-sm transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
                >
                  View Our Work
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 opacity-40" />
                </Link>
              </motion.div>
            </div>

            {/* Right: terminal mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div
                className="rounded-md p-6 font-mono text-sm"
                style={{
                  background: 'rgba(8,8,8,0.85)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 0 60px rgba(97,175,239,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* title bar */}
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.05]">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#e06c75', opacity: 0.8 }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#e5c07b', opacity: 0.8 }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#98c379', opacity: 0.8 }} />
                  <span className="ml-3 text-[10px] text-white/25 tracking-widest">efficiency — flutter build</span>
                </div>
                <div className="space-y-2 text-xs leading-relaxed">
                  <p><span style={{ color: '#98c379' }}>✓</span> <span className="text-white/35">UX research</span> <span style={{ color: '#98c379' }}>complete</span></p>
                  <p><span style={{ color: '#98c379' }}>✓</span> <span className="text-white/35">design system</span> <span style={{ color: '#61afef' }}>exported</span></p>
                  <p><span style={{ color: '#98c379' }}>✓</span> <span className="text-white/35">flutter build</span> <span style={{ color: '#c678dd' }}>apk --release</span></p>
                  <p><span style={{ color: '#98c379' }}>✓</span> <span className="text-white/35">iOS archive</span> <span style={{ color: '#98c379' }}>signed ✓</span></p>
                  <p><span style={{ color: '#e5c07b' }}>→</span> <span className="text-white/35">App Store submission</span> <span style={{ color: '#e5c07b' }}>processing...</span></p>
                  <p className="mt-3 text-white/30"><span style={{ color: '#56b6c2' }}>$</span> flutter run <span className="text-white/55">--release --flavor production</span></p>
                  <p style={{ color: '#98c379' }}>  ✓ Build complete — 4.2s</p>
                  <p style={{ color: '#98c379' }}>  ✓ Hot restart on device — ready</p>
                  <motion.p animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.1, repeat: Infinity }} className="text-white/50">
                    <span style={{ color: '#56b6c2' }}>$</span> <span className="opacity-30">▌</span>
                  </motion.p>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                {HERO_STATS.map(b => {
                  const a = accentAt(b.accentIdx);
                  return (
                    <div
                      key={b.label}
                      className="flex-1 rounded-md px-3 py-3 text-center"
                      style={{ background: 'rgba(8,8,8,0.65)', border: `1px solid ${a.hex}28`, backdropFilter: 'blur(8px)' }}
                    >
                      <p className="text-lg font-mono font-semibold" style={{ color: a.hex }}>{b.value}</p>
                      <p className="text-[9px] text-white/28 tracking-widest uppercase mt-1">{b.label}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={16} className="text-white/20 animate-bounce" />
        </motion.div>
      </section>

      {/* ══ 3 Pillars ══════════════════════════════════════════ */}
      <Section>
        <div className="separator-glow mb-14" />
        <SectionLabel>Core Specialisations</SectionLabel>
        <SectionTitle className="mb-4">
          <span className="accent-blue">3 things we do best</span>
        </SectionTitle>
        <p className="text-white/40 text-sm mb-12 max-w-xl">
          We are not a web agency that does everything — we are specialists in mobile-first engineering.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {PILLARS.map((p, i) => {
            const a    = accentAt(p.accentIdx);
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={i * 0.12}>
                <Link href={p.href}>
                  <div className="tech-card rounded-md p-8 group cursor-pointer h-full" data-accent={a.key} style={{ '--row-accent': a.hex }}>
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center mb-6 transition-all duration-400"
                      style={{ background: `${a.hex}12`, border: `1px solid ${a.hex}30` }}
                    >
                      <Icon size={18} style={{ color: a.hex }} />
                    </div>
                    <p className="code-label mb-2">{p.tag}</p>
                    <h3 className="text-lg font-mono font-semibold text-white/90 mb-3 group-hover:text-white transition-colors">{p.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-400 mb-5">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-sm border"
                          style={{ color: `${a.hex}cc`, background: `${a.hex}10`, borderColor: `${a.hex}22` }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="accent-line" style={{ background: a.hex }} />
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ Why Mobile ════════════════════════════════════════ */}
      <Section>
        <div className="separator-glow mb-14" />
        <SectionLabel>Why Mobile</SectionLabel>
        <SectionTitle className="mb-4">
          In this era, <span className="accent-blue">mobile is the platform</span>
        </SectionTitle>
        <p className="text-white/40 text-sm mb-12 max-w-xl">
          It's not a trend — it's where your users already are. Here's why building mobile-first is the only strategy that makes sense today.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {WHY_MOBILE.map((item, i) => {
            const a    = accentAt(item.accentIdx);
            const Icon = item.icon;
            return (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="tech-card rounded-md p-8 group cursor-default h-full" style={{ '--row-accent': a.hex }}>
                  <div className="flex items-start gap-5">
                    <div
                      className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0"
                      style={{ background: `${a.hex}10`, border: `1px solid ${a.hex}28` }}
                    >
                      <Icon size={20} style={{ color: a.hex }} />
                    </div>
                    <div>
                      <p className="text-3xl font-mono font-bold mb-1" style={{ color: a.hex }}>{item.stat}</p>
                      <p className="text-[11px] font-mono text-white/35 tracking-widest uppercase mb-3">{item.label}</p>
                      <p className="text-sm text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-400">{item.desc}</p>
                    </div>
                  </div>
                  <span className="accent-line" style={{ background: a.hex }} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ Why Efficiency ════════════════════════════════════ */}
      <Section>
        <div className="separator-glow mb-14" />
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <SectionLabel>Why Efficiency</SectionLabel>
              <p className="text-3xl md:text-4xl font-mono font-semibold leading-tight text-white mb-6 mt-5">
                Mobile Engineers<br />
                <span className="accent-cyan">who understand</span><br />
                <span className="text-white/65">Thai business</span>
              </p>
              <p className="text-white/45 text-sm leading-relaxed max-w-sm">
                We don't just write code — we engineer systems that fit the real operational needs of your business, with UX/UI validated in real environments.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_US.map((item, i) => {
              const a    = accentAt(item.accentIdx);
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="value-card pl-5 py-6 pr-5 group cursor-default" style={{ '--card-accent': a.hex }}>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={14} style={{ color: a.hex }} />
                      <p className="text-[11px] font-mono font-semibold text-white/80 group-hover:text-white transition-colors leading-snug">{item.title}</p>
                    </div>
                    <p className="text-white/38 text-xs leading-relaxed group-hover:text-white/55 transition-colors">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ══ Process ═══════════════════════════════════════════ */}
      <Section>
        <div className="separator-glow mb-14" />
        <SectionLabel>How We Work</SectionLabel>
        <SectionTitle className="mb-14">
          <span className="accent-yellow">Clear</span> at every <span className="accent-cyan">step</span>
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {PROCESS_STEPS.map((step, i) => {
            const a = accentAt(step.accentIdx);
            return (
              <FadeIn key={step.label} delay={i * 0.08}>
                <button
                  onClick={() => setActiveStep(step.label)}
                  className="tech-card rounded-md p-5 group w-full text-left cursor-pointer"
                  data-accent={a.key}
                  style={{ '--row-accent': a.hex }}
                >
                  <span className="text-[9px] font-mono tracking-[0.3em] text-white/22 block mb-3">0{i + 1}</span>
                  <p className="text-sm font-mono font-medium text-white/70 group-hover:text-white transition-colors duration-400 mb-2">
                    {step.label}
                  </p>
                  <p className="text-[10px] text-white/30 leading-relaxed group-hover:text-white/45 transition-colors hidden sm:block">
                    {step.desc}
                  </p>
                  <span className="accent-line" style={{ background: a.hex }} />
                </button>
              </FadeIn>
            );
          })}
        </div>
        <ProcessModal step={activeStep} isOpen={!!activeStep} onClose={() => setActiveStep(null)} />
      </Section>

      {/* ══ FAQ ══════════════════════════════════════════════ */}
      <Section>
        <div className="separator-glow mb-14" />
        <SectionLabel>FAQ</SectionLabel>
        <SectionTitle className="mb-12">Common Questions</SectionTitle>
        <div className="max-w-3xl">
          {FAQS.map((faq, i) => {
            const a      = accentAt(i % 6);
            const isOpen = openFaq === i;
            return (
              <FadeIn key={i} delay={i * 0.06}>
                <div
                  className="row-card border-b border-white/[0.05] cursor-pointer"
                  style={{ '--row-accent': a.hex }}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <div className="py-5 flex items-start justify-between gap-4">
                    <p className="font-mono text-sm text-white/75 leading-relaxed pr-4">{faq.q}</p>
                    <ChevronDown
                      size={16}
                      className="flex-shrink-0 mt-0.5 text-white/28 transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </div>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pb-5"
                    >
                      <p className="text-white/45 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <Section>
        <div className="separator-glow mb-16" />
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-2xl md:text-3xl lg:text-4xl font-mono font-semibold leading-snug mb-4 text-white">
              Ready to build something<br />
              <span className="accent-blue">that actually works</span>?
            </p>
            <p className="text-white/38 text-sm mb-12">
              Get a free assessment — we'll tell you immediately which package fits your project and what the timeline looks like.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-mono font-semibold text-black rounded-sm transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #61afef, #98c379)', boxShadow: '0 0 40px rgba(97,175,239,0.25)' }}
              >
                Get a Free Assessment
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-mono font-medium text-white rounded-sm transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
              >
                Talk to the Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
