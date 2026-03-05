'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Paintbrush, Code2, ShieldCheck, Rocket, Wrench } from 'lucide-react';
import Section, { SectionLabel, SectionTitle, FadeIn } from '@/components/ui/Section';
import { accentAt } from '@/lib/accents';

const PHASES = [
  {
    icon: Search,
    label: 'Discovery',
    accentIdx: 0,
    duration: '1–2 weeks',
    description:
      'Before opening a code editor, we need to understand your business — ' +
      'who the real end-users are, what the current workflow looks like, where the problems sit and what success looks like.',
    activities: [
      'Stakeholder interviews (1–2 rounds)',
      'User persona + journey mapping',
      'Technical requirements workshop',
      'Existing system audit (if applicable)',
      'Scope definition + boundary setting',
      'Risk identification',
    ],
    output: 'Project brief document, scope agreement, technical blueprint draft',
    whyItMatters: 'A good Discovery prevents unnecessary features and expensive rework — projects that skip this phase often take 2× longer than estimated.',
  },
  {
    icon: Paintbrush,
    label: 'UX / UI Design',
    accentIdx: 1,
    duration: '2–3 weeks',
    description:
      'We design interfaces that work in practice — not just a pretty Figma file. ' +
      'You get a clickable prototype before a single line of code is written.',
    activities: [
      'Information architecture',
      'Low-fidelity wireframe → feedback round',
      'High-fidelity UI design + Design System',
      'Interactive Figma prototype',
      'User testing (where scope allows)',
      'Micro-interaction specifications',
      'Accessibility review (WCAG 2.1)',
    ],
    output: 'Clickable Figma prototype, Design System (colours, typography, components), UI annotation',
    whyItMatters: 'Changing a design in Figma takes 10 minutes — changing it after development may take 2 days.',
  },
  {
    icon: Code2,
    label: 'Build',
    accentIdx: 2,
    duration: '4–10 weeks',
    description:
      'Sprint-based development every 2 weeks — with a demo at the end of each sprint. ' +
      'You see real progress, not a 3-month wait before seeing the final product.',
    activities: [
      'Sprint planning every 2 weeks',
      'Mobile app development (Flutter / Native)',
      'Backend API development',
      'Database schema + migrations',
      'Hardware SDK integration (if applicable)',
      'Mock data → real data migration',
      'Demo + feedback at each sprint end',
    ],
    output: 'Working app on TestFlight / Firebase App Distribution, API documentation',
    whyItMatters: 'Sprint demos let you adjust direction at any time — instead of discovering problems at delivery.',
  },
  {
    icon: ShieldCheck,
    label: 'QA & Testing',
    accentIdx: 3,
    duration: '1–2 weeks',
    description:
      'Tested on real physical devices, across multiple models and OS versions — ' +
      'not just a simulator, covering the edge cases real users will encounter.',
    activities: [
      'Functional testing: every user flow',
      'Real device matrix: 10+ models',
      'Performance profiling (startup, scroll, API)',
      'Load testing (backend)',
      'Security: input validation, auth flows',
      'Accessibility: screen reader, dynamic text',
      'Regression testing after bug fixes',
    ],
    output: 'QA report, bug fix list (P1/P2/P3), performance baseline metrics',
    whyItMatters: 'A bug found pre-launch takes 30 minutes to fix — a bug reported post-launch damages your rating and user trust.',
  },
  {
    icon: Rocket,
    label: 'Launch',
    accentIdx: 4,
    duration: '1 week',
    description:
      'App Store + Play Store submission, production deployment, monitoring setup — ' +
      'we stay with you through go-live to handle any issues immediately.',
    activities: [
      'App Store Connect + Google Play submission',
      'Store listing: screenshots, description, keywords',
      'Production server deployment',
      'Error monitoring setup (Sentry / Firebase Crashlytics)',
      'Performance monitoring dashboard',
      'Go-live checklist verification',
      'Handover documentation + training',
    ],
    output: 'App live on App Store + Play Store, monitoring dashboard, handover doc',
    whyItMatters: 'App Store review takes 1–3 days (Apple) — proper preparation avoids costly rejection delays.',
  },
  {
    icon: Wrench,
    label: 'Maintain',
    accentIdx: 5,
    duration: 'Monthly',
    description:
      'Maintenance packages for organisations that need an ongoing team — ' +
      'OS updates, bug fixes, performance tuning and minor feature additions.',
    activities: [
      'iOS / Android OS compatibility updates',
      'Dependency security patches',
      'Bug fixes (P1 hotfix within 24h)',
      'Performance monitoring review',
      'Minor feature additions (< 8h/month)',
      'Monthly technical health report',
    ],
    output: 'App running stably on the latest iOS/Android versions, monthly report',
    whyItMatters: 'Apple and Google update their OS every year — an unmaintained app can stop working without warning.',
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Process</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-semibold tracking-tight leading-[1.08] mb-6"
          >
            Clear<br />
            <span className="accent-cyan">at every step</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            6 clear phases, no surprises — you always know where the project stands
            and exactly what you'll receive at each phase.
          </motion.p>
        </div>
      </Section>

      {/* Phases detail */}
      <div className="border-t border-white/[0.05]">
        {PHASES.map((phase, i) => {
          const a    = accentAt(phase.accentIdx);
          const Icon = phase.icon;
          return (
            <div
              key={phase.label}
              className="row-card border-b border-white/[0.05] py-16 md:py-20"
              style={{ '--row-accent': a.hex }}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

                  {/* Left */}
                  <div className="lg:col-span-4">
                    <FadeIn>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="icon-box w-11 h-11 rounded-sm border"
                          style={{ background: `${a.hex}10`, borderColor: `${a.hex}28` }}
                        >
                          <Icon size={18} style={{ color: a.hex }} />
                        </div>
                        <span className="code-label">0{i + 1} / {phase.duration}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-mono font-semibold text-white/80 hover:text-white transition-colors mb-6">
                        {phase.label}
                      </h2>
                      <p className="text-white/45 leading-relaxed text-[15px]">{phase.description}</p>
                    </FadeIn>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-8">
                    <FadeIn delay={0.15}>
                      <div className="grid md:grid-cols-2 gap-10">
                        <div>
                          <p className="code-label mb-5">Activities</p>
                          <ul className="space-y-3">
                            {phase.activities.map(act => (
                              <li key={act} className="text-white/50 text-sm flex items-start gap-3">
                                <span className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: `${a.hex}90` }} />
                                {act}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-8">
                          <div>
                            <p className="code-label mb-4">Output</p>
                            <p className="text-white/55 text-sm leading-relaxed">{phase.output}</p>
                          </div>
                          <div
                            className="p-5 rounded-md text-sm leading-relaxed text-white/45 italic"
                            style={{ background: `${a.hex}08`, border: `1px solid ${a.hex}18` }}
                          >
                            <span style={{ color: `${a.hex}80` }} className="not-italic font-mono text-[10px] block mb-2">Why it matters</span>
                            {phase.whyItMatters}
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <Section>
        <div className="separator-glow mb-16" />
        <div className="text-center max-w-xl mx-auto">
          <FadeIn>
            <p className="text-2xl md:text-3xl font-mono font-semibold text-white mb-4">
              Ready to start Discovery?
            </p>
            <p className="text-white/38 text-sm mb-10">
              Tell us about your project — we'll assess and scope it for free, with no commitment required.
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
