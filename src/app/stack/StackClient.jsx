'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Server, Monitor, Zap, Cloud, CreditCard, Wrench, ArrowRight, ExternalLink } from 'lucide-react';
import Section, { SectionLabel, FadeIn } from '@/components/ui/Section';
import { accentAt } from '@/lib/accents';

const STACKS = [
  {
    icon: Server, category: 'Backend',
    items: [
      { name: 'Node.js / TypeScript', desc: 'Typed, scalable server-side runtime',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'REST API Architecture', desc: 'Clean, predictable interface design',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'PostgreSQL',            desc: 'Reliable relational database',              logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Role-based Auth',       desc: 'Granular access control by user role',     logo: 'https://cdn.auth0.com/styleguide/components/1.0.8/media/logos/img/badge.png' },
    ],
  },
  {
    icon: Monitor, category: 'Frontend',
    items: [
      { name: 'Flutter',          desc: 'Cross-platform mobile development',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'React / Next.js',  desc: 'Modern web interface framework',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS',     desc: 'Utility-first styling system',         logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
      { name: 'Responsive UI',    desc: 'Consistent across all screen sizes',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    icon: Zap, category: 'Automation & Integration',
    items: [
      { name: 'API Integrations',        desc: 'Connecting systems via standard interfaces', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' },
      { name: 'Webhooks',                desc: 'Real-time event-driven data exchange',       logo: 'https://static.cdnlogo.com/logos/w/78/webhook.svg' },
      { name: 'Workflow Automation',     desc: 'Structured rule-based process execution',    logo: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/n8n.webp' },
      { name: 'Event-driven Processes',  desc: 'Systems that react to operational signals',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    ],
  },
  {
    icon: Cloud, category: 'Infrastructure',
    items: [
      { name: 'Cloud Deployment', desc: 'VPS and container-based hosting',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg' },
      { name: 'Docker',           desc: 'Consistent, portable environments',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Version Control',  desc: 'Reproducible and auditable deployments',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Nginx',            desc: 'Reliable reverse proxy and web server',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    ],
  },
  {
    icon: CreditCard, category: 'Optional / Extended',
    items: [
      { name: 'Stripe',             desc: 'Global payment gateway integration',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png' },
      { name: 'QR Payment Systems', desc: 'Thai standard PromptPay QR payments',    logo: 'https://www.bot.or.th/content/dam/bot/icons/icon-thaiqr.png' },
      { name: 'Firebase',           desc: 'Push notifications and real-time sync',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Google Maps API',    desc: 'Location and mapping services',          logo: 'https://developers.google.com/static/maps/images/maps-icon.svg' },
    ],
  },
  {
    icon: Wrench, category: 'Engineering Environment',
    items: [
      { name: 'VS Code',  desc: 'Primary code editor and workspace',          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/3840px-Visual_Studio_Code_1.35_icon.svg.png', url: 'https://code.visualstudio.com/' },
      { name: 'Postman',  desc: 'API design, testing, and documentation',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',                                                           url: 'https://www.postman.com/' },
      { name: 'GitHub',   desc: 'Source control and collaboration',           logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png',                                         url: 'https://github.com/' },
      { name: 'Claude',   desc: 'AI-assisted development and reasoning',      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/1280px-Claude_AI_symbol.svg.png',                           url: 'https://claude.ai/' },
    ],
  },
];

function StackItem({ item, accentHex }) {
  return (
    <div
      className="stack-item p-6 flex items-start gap-4 group/item"
      style={{ background: 'rgba(0,0,0,0.6)' }}
    >
      <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center mt-0.5 opacity-75 group-hover/item:opacity-100 transition-opacity">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.logo} alt={item.name} className="w-6 h-6 object-contain" onError={e => { e.target.style.display = 'none'; }} />
      </div>
      <div>
        <p className="text-white/80 text-sm font-mono font-medium mb-0.5 group-hover/item:text-white transition-colors">{item.name}</p>
        <p className="text-white/38 text-xs leading-relaxed group-hover/item:text-white/55 transition-colors">{item.desc}</p>
      </div>
      {item.url && (
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="ml-auto mt-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity" onClick={e => e.stopPropagation()}>
          <ExternalLink size={12} style={{ color: accentHex }} />
        </a>
      )}
    </div>
  );
}


export default function StackPage() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Technology</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-semibold tracking-tight leading-[1.08] mb-6"
          >
            We use modern,<br />maintainable technologies.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            Every tool we use is chosen for long-term reliability, developer clarity,
            and operational fit. No unnecessary complexity.
          </motion.p>
        </div>
      </Section>

      {/* Stack sections */}
      <div className="border-t border-white/[0.05]">
        {STACKS.map((stack, i) => {
          const a    = accentAt(i);
          const Icon = stack.icon;
          return (
            <div
              key={stack.category}
              className="row-card border-b border-white/[0.05] py-20 md:py-24"
              style={{ '--row-accent': a.hex }}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

                  {/* Left */}
                  <div className="lg:col-span-4">
                    <FadeIn>
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="icon-box w-10 h-10 rounded-sm border border-white/[0.05]"
                          style={{ borderColor: `${a.hex}28` }}
                        >
                          <Icon size={16} style={{ color: `${a.hex}90` }} />
                        </div>
                        <span className="code-label">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-mono font-semibold text-white/80 group-hover:text-white transition-colors">{stack.category}</h2>
                    </FadeIn>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-8">
                    <FadeIn delay={0.15}>
                      <div
                        className="rounded-md overflow-hidden border border-white/[0.05]"
                        style={{ borderColor: `${a.hex}18` }}
                      >
                        <div className="grid sm:grid-cols-2 divide-y divide-x divide-white/[0.04]">
                          {stack.items.map(item => (
                            <StackItem key={item.name} item={item} accentHex={a.hex} />
                          ))}
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
              Want to discuss the right stack for your project?
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
