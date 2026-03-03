'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Layers, Server, Zap, Terminal, GitBranch, Cpu } from 'lucide-react';
import { useState } from 'react';
import Section, { SectionLabel, SectionTitle, FadeIn } from '@/components/ui/Section';
import TypewriterText from '@/components/TypewriterText';
import ProcessModal from '@/components/ProcessModal';
import { accentAt } from '@/lib/accents';

// ─── Static data ──────────────────────────────────────────
const CAPABILITIES = [
  {
    icon: Layers, accentIdx: 0, tag: '01 / Architecture',
    title: 'System Architecture',
    description: 'Designing scalable structures that align technology with business operations. Clear blueprints before any code is written.',
  },
  {
    icon: Server, accentIdx: 4, tag: '02 / Backend',
    title: 'Backend Development',
    description: 'Building robust server infrastructure that handles complexity without compromising reliability or performance.',
  },
  {
    icon: Zap, accentIdx: 2, tag: '03 / Automation',
    title: 'Automation & Integration',
    description: 'Connecting systems and automating workflows to eliminate manual processes and reduce operational friction.',
  },
];

const WHAT_WE_BUILD = [
  { label: 'Business Platforms',    icon: Terminal,  accentIdx: 0 },
  { label: 'Booking Systems',       icon: GitBranch, accentIdx: 1 },
  { label: 'Dashboards',            icon: Cpu,       accentIdx: 2 },
  { label: 'Backend Infrastructure',icon: Server,    accentIdx: 3 },
  { label: 'Workflows',             icon: Zap,       accentIdx: 4 },
  { label: 'Integrations',          icon: Layers,    accentIdx: 5 },
];

const PROCESS = [
  { label: 'Define',  accentIdx: 0 },
  { label: 'Design',  accentIdx: 1 },
  { label: 'Build',   accentIdx: 2 },
  { label: 'Test',    accentIdx: 3 },
  { label: 'Deploy',  accentIdx: 4 },
];

const HERO_BADGES = [
  { label: 'systems built', value: '40+',  accentIdx: 4 },
  { label: 'uptime avg',    value: '99.9%', accentIdx: 2 },
  { label: 'avg delivery',  value: '6w',   accentIdx: 5 },
];

// ─── Page component ───────────────────────────────────────
export default function HomePage() {
  const [activeStep, setActiveStep] = useState(null);

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
                <span className="tag-glow">Software Development Studio</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-[84px] font-mono font-semibold tracking-tight leading-[1.04] mb-6 text-white"
              >
                <TypewriterText words={['Build', 'Deploy', 'Automate', 'Scale']} className="accent-blue" />
                <br />
                <span className="text-white/85">Digital</span>
                <br />
                <span className="accent-grad-rb">Systems.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg text-white/50 font-light max-w-md mb-10 leading-relaxed"
              >
                We design and build custom software that supports real operations —
                from architecture to deployment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-mono font-semibold text-black rounded-sm transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #61afef, #56b6c2)', boxShadow: '0 0 28px rgba(97,175,239,0.3)' }}
                >
                  View Services
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-mono font-medium text-white rounded-sm transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
                >
                  Start a Project
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 opacity-40" />
                </Link>
              </motion.div>
            </div>

            {/* Right: terminal card */}
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
                  <span className="ml-3 text-[10px] text-white/25 tracking-widest">efficiency — bash</span>
                </div>
                <div className="space-y-2 text-xs leading-relaxed">
                  <p><span style={{ color: '#98c379' }}>✓</span> <span className="text-white/35">system architecture</span> <span style={{ color: '#98c379' }}>designed</span></p>
                  <p><span style={{ color: '#98c379' }}>✓</span> <span className="text-white/35">api layer</span> <span style={{ color: '#61afef' }}>deployed</span></p>
                  <p><span style={{ color: '#98c379' }}>✓</span> <span className="text-white/35">workflows</span> <span style={{ color: '#c678dd' }}>automated</span></p>
                  <p><span style={{ color: '#e5c07b' }}>→</span> <span className="text-white/35">monitoring</span> <span style={{ color: '#e5c07b' }}>running...</span></p>
                  <p className="mt-3 text-white/30"><span style={{ color: '#56b6c2' }}>$</span> npm run <span className="text-white/55">deploy:production</span></p>
                  <p style={{ color: '#98c379' }}>  ✓ Build complete — 2.4s</p>
                  <p style={{ color: '#98c379' }}>  ✓ Deployed to edge — 18 regions</p>
                  <motion.p animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.1, repeat: Infinity }} className="text-white/50">
                    <span style={{ color: '#56b6c2' }}>$</span> <span className="opacity-30">▌</span>
                  </motion.p>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                {HERO_BADGES.map(b => {
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

      {/* ══ Position statement ════════════════════════════════ */}
      <Section>
        <div className="separator-glow mb-20" />
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <div className="md:sticky md:top-32">
              <p className="code-label mb-5">Our Belief</p>
              <p className="text-3xl md:text-4xl font-mono font-semibold leading-tight text-white mb-8">
                Most companies<br />
                <span className="accent-red">add tools.</span><br />
                <span className="text-white/65">Few redesign<br />how they operate.</span>
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-[#e06c75] to-transparent" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-5 text-white/50 leading-relaxed text-[15px]">
              <p className="text-lg text-white/65">
                We build digital systems that make operations predictable and measurable.
                Not more software — better <span className="accent-cyan">structure</span>.
              </p>
              <p>
                Most businesses accumulate tools without ever gaining clarity. Spreadsheets multiply.
                Workarounds become habits. Teams adapt to broken processes because no one has time to fix them.
              </p>
              <p>
                We step in to design and build the systems that should have been there from the start.
                Custom platforms, automated workflows, and structured backends —
                built around how your operations <span className="accent-green">actually work</span>.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ══ What we build ═════════════════════════════════════ */}
      <Section>
        <div className="separator-glow mb-14" />
        <SectionLabel>What We Build</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
          {WHAT_WE_BUILD.map((item, i) => {
            const a = accentAt(item.accentIdx);
            const Icon = item.icon;
            return (
              <FadeIn key={item.label} delay={item.accentIdx * 0.08}>
                <div className="tech-card rounded-md p-7 group cursor-default" data-accent={a.key}>
                  <Icon size={15} className="mb-4 text-white/25 group-hover:text-white/50 transition-colors duration-400" />
                  <span className="text-[9px] font-mono tracking-[0.25em] text-white/22 mb-2 block">0{i + 1}</span>
                  <p className="text-[15px] font-light text-white/75 group-hover:text-white transition-colors duration-400 font-mono">
                    {item.label}
                  </p>
                  <span className="accent-line" style={{ background: a.hex }} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ Capabilities ══════════════════════════════════════ */}
      <Section>
        <div className="separator-glow mb-14" />
        <SectionLabel>Capabilities</SectionLabel>
        <SectionTitle className="mb-14">
          <span className="accent-yellow">End-to-end</span> development for{' '}
          <span className="accent-green">complex systems</span>
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-4">
          {CAPABILITIES.map((cap, i) => {
            const a = accentAt(cap.accentIdx);
            const Icon = cap.icon;
            return (
              <FadeIn key={cap.title} delay={i * 0.15}>
                <div className="tech-card rounded-md p-8 group cursor-default h-full" data-accent={a.key}>
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center mb-5 transition-all duration-400"
                    style={{ background: `${a.hex}12`, border: `1px solid ${a.hex}28` }}
                  >
                    <Icon size={15} style={{ color: a.hex }} />
                  </div>
                  <p className="code-label mb-3">{cap.tag}</p>
                  <h3 className="text-lg font-mono font-medium text-white/90 mb-3 group-hover:text-white transition-colors">{cap.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/58 transition-colors duration-400">{cap.description}</p>
                  <span className="accent-line" style={{ background: a.hex }} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ Process ═══════════════════════════════════════════ */}
      <Section>
        <div className="separator-glow mb-14" />
        <SectionLabel>Process</SectionLabel>
        <SectionTitle className="mb-14">
          <span className="accent-cyan">Clarity</span> at every <span className="accent-blue">stage</span>
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {PROCESS.map((step, i) => {
            const a = accentAt(step.accentIdx);
            return (
              <FadeIn key={step.label} delay={i * 0.09}>
                <button
                  onClick={() => setActiveStep(step.label)}
                  className="tech-card rounded-md p-7 group w-full text-left cursor-pointer"
                  data-accent={a.key}
                >
                  <span className="text-[9px] font-mono tracking-[0.3em] text-white/22 block mb-4">0{i + 1}</span>
                  <p className="text-base font-mono font-medium text-white/70 group-hover:text-white transition-colors duration-400">
                    {step.label}
                  </p>
                  <span className="accent-line" style={{ background: a.hex }} />
                </button>
              </FadeIn>
            );
          })}
        </div>
        <ProcessModal step={activeStep} isOpen={!!activeStep} onClose={() => setActiveStep(null)} />
      </Section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <Section>
        <div className="separator-glow mb-16" />
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-2xl md:text-3xl lg:text-4xl font-mono font-semibold leading-snug mb-4 text-white">
              We <span className="accent-red">build</span> software that{' '}
              <span className="accent-cyan">supports</span> real operations.
            </p>
            <p className="text-white/38 text-sm mb-12">Ready to start? Let&apos;s talk.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-mono font-semibold text-black rounded-sm transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #61afef, #98c379)', boxShadow: '0 0 40px rgba(97,175,239,0.25)' }}
            >
              Start With Clarity
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
