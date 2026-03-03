'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section, { SectionLabel, SectionTitle, FadeIn } from '@/components/ui/Section';
import { accentAt } from '@/lib/accents';

const VALUES = [
  { title: 'Systems over improvisation',  description: "We don't build quick fixes. We design systems that remain stable as your business grows and changes." },
  { title: 'Structure before scale',      description: 'Growth without structure creates chaos. We ensure your foundation can support what comes next.' },
  { title: 'Quiet execution',             description: 'No unnecessary complexity. No over-engineering. We build what\'s needed, nothing more.' },
];

const PRINCIPLES = [
  'Clarity in every decision',
  'Simplicity as a feature',
  'Long-term thinking',
  'Measurable outcomes',
  'Honest communication',
  'Sustainable solutions',
];

const TEAM = [
  {
    name: 'Ratthakan Suwanphakdee', role: 'Founder', email: 'ratthakan@efficiency.co.th',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a2b219604d407ea94dad25/67a774093_profile.jpg',
    description: 'Vision and strategy for the studio. Shapes how we approach problems and build lasting partnerships with clients.',
    skills: ['Strategy', 'Client Relations', 'Systems Thinking', 'Project Vision'],
  },
  {
    name: 'Namfon Kamnoedklang', role: 'Mobile Developer', email: 'namfon@efficiency.co.th',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a2b219604d407ea94dad25/c7fe812ae_profilefon.jpg',
    description: 'Develops cross-platform mobile apps that work seamlessly across iOS and Android with native performance.',
    skills: ['Flutter', 'Cross-Platform Dev', 'Mobile UX', 'App Optimization'],
  },
  {
    name: 'Krisada Vivek', role: 'Tech Lead', email: 'krisada@efficiency.co.th',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a2b219604d407ea94dad25/075633634_profilemo.jpg',
    description: 'Oversees technical direction and system architecture. Ensures code quality and long-term maintainability.',
    skills: ['System Design', 'Architecture', 'Code Review', 'Technical Strategy'],
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
            Clarity before<br />complexity.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            We are a software development studio focused on building digital systems
            that bring structure to complex operations. Based in Bangkok, working globally.
          </motion.p>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="border-t border-white/[0.05]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <SectionLabel>Philosophy</SectionLabel>
            <SectionTitle className="mb-8">We believe good software is invisible.</SectionTitle>
            <FadeIn delay={0.2}>
              <p className="text-white/50 leading-relaxed">
                It doesn&apos;t demand attention. It doesn&apos;t break. It quietly supports the
                people who use it, day after day. This is what we build: software that
                works so well, you forget it&apos;s there.
              </p>
            </FadeIn>
          </div>
          <div className="space-y-4">
            {VALUES.map((v, i) => {
              const a = accentAt(i);
              return (
                <FadeIn key={v.title} delay={i * 0.15}>
                  <div
                    className="value-card pl-6 py-5 group cursor-default"
                    style={{ '--card-accent': a.hex }}
                  >
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
              &quot;We don&apos;t measure success by lines of code or number of features.
              We measure it by how smoothly your operations run after we&apos;re done.&quot;
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/28 text-sm font-mono">— EFFICIENCY Studio</p>
          </FadeIn>
        </div>
      </Section>

      {/* Principles */}
      <Section className="border-t border-white/[0.05]">
        <SectionLabel>Principles</SectionLabel>
        <SectionTitle className="mb-14">What guides our work</SectionTitle>
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.04]"
        >
          {PRINCIPLES.map((principle, i) => {
            const a = accentAt(i);
            return (
              <FadeIn key={principle} delay={i * 0.08}>
                <div
                  className="value-card p-8 md:p-10 group cursor-default bg-black"
                  style={{ '--card-accent': a.hex }}
                >
                  <span className="code-label block mb-3">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-base font-mono font-medium text-white/60 group-hover:text-white transition-colors duration-400">
                    {principle}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Team */}
      <Section className="border-t border-white/[0.05]">
        <SectionLabel>Our Team</SectionLabel>
        <SectionTitle className="mb-14">The people behind the systems</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, i) => {
            const a = accentAt(i);
            return (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div
                  className="tech-card rounded-md p-6 group cursor-default"
                  style={{ '--row-accent': a.hex }}
                >
                  {/* Photo */}
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
                  <a
                    href={`mailto:${member.email}`}
                    className="text-[12px] font-mono text-white/30 transition-colors duration-300 hover:text-white"
                  >
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
                Our studio is based in Bangkok, but we work with clients globally.
                Time zones are manageable when communication is clear and expectations are set.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <div className="p-8 md:p-10 rounded-md bg-[#080808]/70 border border-white/[0.06]">
              <p className="code-label mb-4">Address</p>
              <p className="text-white/65 leading-relaxed text-sm">
                246/8 Soi Yothin Phatthana<br />
                Khlong Chan Subdistrict<br />
                Bang Kapi District<br />
                Bangkok 10240<br />
                Thailand
              </p>
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
              Ready to bring clarity to your operations?
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-mono font-semibold text-black rounded-sm mt-8"
              style={{ background: 'linear-gradient(135deg, #61afef, #56b6c2)', boxShadow: '0 0 28px rgba(97,175,239,0.25)' }}
            >
              Start a Conversation
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
