'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layers, Code2, Server, LayoutDashboard, Zap, Link2, ArrowRight } from 'lucide-react';
import Section, { SectionLabel, FadeIn } from '@/components/ui/Section';
import { accentAt } from '@/lib/accents';

const SERVICES = [
  {
    icon: Layers, title: 'System Architecture',
    description: 'We design the technical foundation before any code is written. Clear blueprints that align technology choices with business requirements.',
    capabilities: ['Technical requirements analysis', 'System design documentation', 'Technology stack selection', 'Scalability planning', 'Security architecture'],
    outcome: 'A clear roadmap that prevents costly rewrites and ensures long-term maintainability.',
  },
  {
    icon: Code2, title: 'Custom Software Development',
    description: 'We build software tailored to your specific operational needs. Not modified templates—purpose-built solutions.',
    capabilities: ['Full-stack development', 'API design and implementation', 'Database architecture', 'Performance optimization', 'Code documentation'],
    outcome: 'Software that fits your workflow exactly, not the other way around.',
  },
  {
    icon: Server, title: 'Backend & Infrastructure',
    description: 'Robust server infrastructure that handles complexity without compromising on reliability or performance.',
    capabilities: ['Cloud infrastructure setup', 'Database management', 'Server configuration', 'Backup and recovery systems', 'Monitoring and alerting'],
    outcome: 'Infrastructure that scales with your business and stays reliable under pressure.',
  },
  {
    icon: LayoutDashboard, title: 'Dashboard & Admin Systems',
    description: 'Internal tools that give you visibility into operations. Clear interfaces for complex data.',
    capabilities: ['Admin panel development', 'Data visualization', 'Reporting systems', 'User management', 'Role-based access control'],
    outcome: 'Operational visibility that enables better decisions, faster.',
  },
  {
    icon: Zap, title: 'Automation',
    description: 'We identify repetitive processes and automate them. Reducing manual work while increasing accuracy.',
    capabilities: ['Workflow automation', 'Scheduled tasks and jobs', 'Notification systems', 'Document generation', 'Process orchestration'],
    outcome: 'Operations that run themselves, freeing your team for higher-value work.',
  },
  {
    icon: Link2, title: 'Integration',
    description: 'Connecting your systems so data flows seamlessly. No more manual data entry between platforms.',
    capabilities: ['Third-party API integration', 'Data synchronization', 'Payment gateway setup', 'Communication platform links', 'Legacy system connections'],
    outcome: 'A unified system where information moves automatically where it needs to go.',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Services</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-semibold tracking-tight leading-[1.08] mb-6"
          >
            What we build
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            From architecture to deployment, we handle every layer of software development.
            Each service is designed to create operational clarity.
          </motion.p>
        </div>
      </Section>

      {/* Services list */}
      <div className="border-t border-white/[0.05]">
        {SERVICES.map((svc, i) => {
          const a = accentAt(i);
          const Icon = svc.icon;
          return (
            <div
              key={svc.title}
              className="row-card border-b border-white/[0.05] py-20 md:py-28"
              style={{ '--row-accent': a.hex }}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

                  {/* Left */}
                  <div className="lg:col-span-5">
                    <FadeIn>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="icon-box w-11 h-11 rounded-sm border border-white/[0.05]"
                          style={{ borderColor: `${a.hex}28` }}
                        >
                          <Icon size={18} style={{ color: `${a.hex}99` }} className="transition-colors duration-400" />
                        </div>
                        <span className="code-label">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-mono font-semibold text-white/80 hover:text-white transition-colors mb-4">
                        {svc.title}
                      </h2>
                      <p className="text-white/45 leading-relaxed text-[15px]">{svc.description}</p>
                    </FadeIn>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-7">
                    <FadeIn delay={0.18}>
                      <div className="grid md:grid-cols-2 gap-10">
                        <div>
                          <p className="code-label mb-5">Capabilities</p>
                          <ul className="space-y-3">
                            {svc.capabilities.map(cap => (
                              <li key={cap} className="text-white/50 text-sm flex items-start gap-3">
                                <span
                                  className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0"
                                  style={{ backgroundColor: `${a.hex}90` }}
                                />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="code-label mb-5">Outcome</p>
                          <p className="text-white/60 leading-relaxed text-[15px]">{svc.outcome}</p>
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
            <p className="text-2xl md:text-3xl font-mono font-semibold text-white mb-4">Have a project in mind?</p>
            <p className="text-white/38 text-sm mb-10">Let&apos;s discuss how we can help.</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-mono font-semibold text-black rounded-sm"
              style={{ background: 'linear-gradient(135deg, #61afef, #56b6c2)', boxShadow: '0 0 28px rgba(97,175,239,0.25)' }}
            >
              Start With Clarity
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
