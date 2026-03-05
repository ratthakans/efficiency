'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Monitor, Cpu, Code2, GitBranch, Users } from 'lucide-react';
import Section, { SectionLabel, SectionTitle, FadeIn } from '@/components/ui/Section';
import { accentAt } from '@/lib/accents';

const VALUES = [
  { title: 'Mobile-first, always',       description: 'Every solution starts from the mobile experience — not a web layout shrunk down. Great mobile UX has to be designed from the ground up.' },
  { title: 'Specialist, not generalist', description: 'We chose to be excellent at 3 things (Mobile · POS · Embedded) rather than mediocre at everything.' },
  { title: 'Outcome over features',      description: 'We measure success with real business metrics — not feature count. An app users actually use is the answer.' },
];

const PRINCIPLES = [
  'UX must pass real user testing',
  'Code quality is non-negotiable',
  'Every timeline we give is achievable',
  'We decline projects that are not the right fit',
  'Transparency at every step',
  'Consistent delivery, sprint by sprint',
];

const EXPERTISE = [
  { icon: Smartphone, accentIdx: 4, title: 'Mobile App Engineering', desc: 'Flutter cross-platform, native iOS/Android, UX research, App Store delivery.' },
  { icon: Monitor,    accentIdx: 2, title: 'POS & Operations', desc: 'Retail/F&B POS, hardware SDK, inventory system, multi-branch ops.' },
  { icon: Cpu,        accentIdx: 5, title: 'Embedded & Device', desc: 'Firmware (C/C++/Rust), BLE/NFC/RFID, IoT protocol, OTA update.' },
];

const TEAM = [
  {
    name: 'Ratthakan Suwanphakdee', role: 'Founder & Product', email: 'ratthakan@efficiency.co.th',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a2b219604d407ea94dad25/67a774093_profile.jpg',
    description: 'Product strategy and client relationships — believes that understanding the business before writing code is the foundation of great software.',
    skills: ['Product Strategy', 'UX Direction', 'Client Partnership', 'Mobile Architecture'],
  },
  {
    name: 'Namfon Kamnoedklang', role: 'Mobile Engineer', email: 'namfon@efficiency.co.th',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a2b219604d407ea94dad25/c7fe812ae_profilefon.jpg',
    description: 'Flutter specialist building cross-platform apps with native-level performance — expert in UI animation and state management.',
    skills: ['Flutter', 'Dart', 'iOS/Android', 'Mobile UX', 'App Optimisation'],
  },
  {
    name: 'Krisada Vivek', role: 'Tech Lead', email: 'krisada@efficiency.co.th',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a2b219604d407ea94dad25/075633634_profilemo.jpg',
    description: 'System architecture and backend engineering — designs infrastructure that scales from day one, not retrofitted later.',
    skills: ['System Design', 'Node.js / Go', 'Cloud Architecture', 'Embedded Systems', 'Code Review'],
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel>About</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-semibold tracking-tight leading-[1.08] mb-6"
          >
            Mobile Engineering<br />
            <span className="accent-blue">Studio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            Efficiency is a software studio specialising in Mobile App, POS Systems and Embedded Software —
            based in Bangkok, working with Thai businesses and global clients.
          </motion.p>
        </div>
      </Section>

      {/* Expertise */}
      <Section className="border-t border-white/[0.05]">
        <SectionLabel>What We Specialise In</SectionLabel>
        <SectionTitle className="mb-12">3 areas where we're <span className="accent-cyan">the best</span></SectionTitle>
        <div className="grid md:grid-cols-3 gap-4">
          {EXPERTISE.map((exp, i) => {
            const a    = accentAt(exp.accentIdx);
            const Icon = exp.icon;
            return (
              <FadeIn key={exp.title} delay={i * 0.12}>
                <div className="tech-card rounded-md p-7 group cursor-default" style={{ '--row-accent': a.hex }}>
                  <div className="w-10 h-10 rounded flex items-center justify-center mb-5" style={{ background: `${a.hex}12`, border: `1px solid ${a.hex}28` }}>
                    <Icon size={17} style={{ color: a.hex }} />
                  </div>
                  <h3 className="text-base font-mono font-semibold text-white/85 mb-2 group-hover:text-white transition-colors">{exp.title}</h3>
                  <p className="text-white/38 text-sm leading-relaxed">{exp.desc}</p>
                  <span className="accent-line" style={{ background: a.hex }} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="border-t border-white/[0.05]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <SectionLabel>Philosophy</SectionLabel>
            <SectionTitle className="mb-8">Good software is<br />software that gets used</SectionTitle>
            <FadeIn delay={0.2}>
              <p className="text-white/50 leading-relaxed">
                We don't measure success by feature count or architectural complexity —
                we measure it by users opening the app and feeling like it was{' '}
                <span className="accent-cyan">designed specifically for them</span>.
              </p>
            </FadeIn>
          </div>
          <div className="space-y-4">
            {VALUES.map((v, i) => {
              const a = accentAt(i * 2);
              return (
                <FadeIn key={v.title} delay={i * 0.15}>
                  <div className="value-card pl-6 py-5 group cursor-default" style={{ '--card-accent': a.hex }}>
                    <h3 className="text-base font-mono font-medium mb-2 text-white/75 group-hover:text-white transition-colors">{v.title}</h3>
                    <p className="text-white/38 text-sm leading-relaxed group-hover:text-white/55 transition-colors">{v.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Manifesto */}
      <Section className="border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/70 mb-6">
              &quot;We don't just write code — we design experiences users remember
              and build systems businesses can rely on for the long run.&quot;
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/28 text-sm font-mono">— EFFICIENCY Studio, Bangkok</p>
          </FadeIn>
        </div>
      </Section>

      {/* Principles */}
      <Section className="border-t border-white/[0.05]">
        <SectionLabel>Engineering Principles</SectionLabel>
        <SectionTitle className="mb-14">What <span className="accent-green">guides our work</span></SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.04]">
          {PRINCIPLES.map((principle, i) => {
            const a = accentAt(i);
            return (
              <FadeIn key={principle} delay={i * 0.08}>
                <div className="value-card p-8 md:p-10 group cursor-default bg-black" style={{ '--card-accent': a.hex }}>
                  <span className="code-label block mb-3">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-base font-mono font-medium text-white/60 group-hover:text-white transition-colors duration-400">{principle}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Team */}
      <Section className="border-t border-white/[0.05]">
        <SectionLabel>Team</SectionLabel>
        <SectionTitle className="mb-14">The people who build your <span className="accent-blue">system</span></SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, i) => {
            const a = accentAt(i);
            return (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="tech-card rounded-md p-6 group cursor-default" style={{ '--row-accent': a.hex }}>
                  <div className="overflow-hidden mb-5 aspect-square rounded-sm border border-white/[0.05]" style={{ borderColor: `${a.hex}22` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image} alt={member.name}
                      className="w-full h-full object-cover opacity-55 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-base font-mono font-medium text-white/85 mb-0.5 group-hover:text-white transition-colors">{member.name}</h3>
                  <p className="code-label mb-3">{member.role}</p>
                  <p className="text-white/38 text-sm leading-relaxed mb-4 group-hover:text-white/55 transition-colors">{member.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.skills.map(skill => (
                      <span key={skill} className="text-[10px] px-2 py-0.5 rounded-sm font-mono border"
                        style={{ backgroundColor: `${a.hex}10`, color: `${a.hex}cc`, borderColor: `${a.hex}22` }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a href={`mailto:${member.email}`} className="text-[12px] font-mono text-white/30 transition-colors duration-300 hover:text-white">
                    {member.email}
                  </a>
                  <span className="accent-line" style={{ background: a.hex }} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Location */}
      <Section className="border-t border-white/[0.05]">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionLabel>Location</SectionLabel>
            <SectionTitle className="mb-6">Bangkok, Thailand</SectionTitle>
            <FadeIn delay={0.2}>
              <p className="text-white/50 leading-relaxed">
                Studio based in Bangkok, working with clients across Thailand and internationally.
                We're remote-friendly — but always run in-person workshops for Discovery phase.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <div className="p-8 md:p-10 rounded-md bg-[#080808]/70 border border-white/[0.06]">
              <p className="code-label mb-4">Address</p>
              <p className="text-white/65 leading-relaxed text-sm">
                246/8 Soi Yothinphatthana<br />
                Khlong Chan, Bang Kapi<br />
                Bangkok 10240<br />
                Thailand
              </p>
              <p className="text-white/35 text-xs font-mono mt-4">LINE: @efficiency.co.th</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-white/[0.05]">
        <div className="separator-glow mb-16" />
        <div className="text-center max-w-xl mx-auto">
          <FadeIn>
            <p className="text-2xl md:text-3xl font-mono font-semibold text-white mb-4">
              Ready to build something <span className="accent-blue">better together</span>?
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-mono font-semibold text-black rounded-sm mt-8"
              style={{ background: 'linear-gradient(135deg, #61afef, #56b6c2)', boxShadow: '0 0 28px rgba(97,175,239,0.25)' }}
            >
              Talk to the Team
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
