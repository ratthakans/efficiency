'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Smartphone, Server, Cpu, Cloud, Wrench, Database, ArrowRight, ExternalLink } from 'lucide-react';
import Section, { SectionLabel, SectionTitle, FadeIn } from '@/components/ui/Section';
import { accentAt } from '@/lib/accents';

const STACKS = [
  {
    icon: Smartphone, category: 'Mobile Engineering',
    accentIdx: 4,
    items: [
      { name: 'Flutter (Dart)', desc: 'Cross-platform iOS + Android from a single codebase — our primary mobile technology.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Swift / SwiftUI', desc: 'Native iOS for performance-critical or Apple-specific features.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'Kotlin / Jetpack Compose', desc: 'Native Android for hardware SDK integrations requiring low-level access.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'React Native', desc: 'Chosen when a project requires tight JavaScript ecosystem integration.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
  },
  {
    icon: Cpu, category: 'Embedded & Device',
    accentIdx: 5,
    items: [
      { name: 'C / C++ (Embedded)', desc: 'Firmware development on microcontrollers: ESP32, STM32, nRF52.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Rust', desc: 'Memory-safe systems programming for safety-critical embedded applications.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg' },
      { name: 'BLE / NFC / RFID SDK', desc: 'Bluetooth 5.0 protocol stack, NFC/RFID integration via platform SDK.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
      { name: 'MQTT / CoAP / OCPP', desc: 'IoT messaging protocols, EV charging (OCPP 1.6/2.0), industrial IoT.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg' },
    ],
  },
  {
    icon: Server, category: 'Backend & API',
    accentIdx: 0,
    items: [
      { name: 'Node.js / TypeScript', desc: 'Primary backend runtime — typed, scalable, broad ecosystem compatibility.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Go', desc: 'Performance-critical services: high-throughput APIs, concurrent processing.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'Python', desc: 'Data processing, ML model serving, scripting and automation pipelines.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'REST + GraphQL + WebSocket', desc: 'API patterns chosen by use case — REST for CRUD, WebSocket for real-time.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    ],
  },
  {
    icon: Database, category: 'Database & Storage',
    accentIdx: 2,
    items: [
      { name: 'PostgreSQL', desc: 'Primary relational database — ACID compliance, complex queries, multi-tenant schemas.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Firebase / Firestore', desc: 'Real-time sync, push notifications and auth for mobile apps.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Supabase', desc: 'PostgreSQL + auth + storage + real-time for projects that need to move fast.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      { name: 'Redis', desc: 'Caching, session storage, pub/sub for real-time features.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    ],
  },
  {
    icon: Cloud, category: 'Cloud & Infrastructure',
    accentIdx: 1,
    items: [
      { name: 'AWS', desc: 'EC2, RDS, S3, Lambda, IoT Core — primary cloud platform for enterprise projects.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Google Cloud / Firebase', desc: 'Firebase Hosting, Cloud Run, BigQuery for analytics-heavy projects.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Docker + CI/CD', desc: 'Containerised deployments, GitHub Actions / GitLab CI pipeline on every project.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Nginx + VPS', desc: 'Reverse proxy, SSL termination for projects that don\'t require managed cloud.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    ],
  },
  {
    icon: Wrench, category: 'Engineering Environment',
    accentIdx: 3,
    items: [
      { name: 'VS Code / Xcode / Android Studio', desc: 'Platform-appropriate IDEs matching each tech stack.', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/3840px-Visual_Studio_Code_1.35_icon.svg.png', url: 'https://code.visualstudio.com/' },
      { name: 'Figma', desc: 'UI design, prototyping and design system — our design team works in Figma as the primary tool.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', url: 'https://www.figma.com/' },
      { name: 'Postman / Insomnia', desc: 'API design, testing, documentation and mock server for parallel development.', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', url: 'https://www.postman.com/' },
      { name: 'GitHub / GitLab', desc: 'Source control, code review and CI/CD pipeline integration.', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png', url: 'https://github.com/' },
    ],
  },
];

function StackItem({ item, accentHex }) {
  return (
    <div className="stack-item p-6 flex items-start gap-4 group/item" style={{ background: 'rgba(0,0,0,0.6)' }}>
      <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center mt-0.5 opacity-70 group-hover/item:opacity-100 transition-opacity">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.logo} alt={item.name} className="w-6 h-6 object-contain" onError={e => { e.target.style.display = 'none'; }} />
      </div>
      <div className="flex-1">
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
            <SectionLabel>Technology Stack</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-semibold tracking-tight leading-[1.08] mb-6"
          >
            Mobile-First<br />
            <span className="accent-blue">Technology Stack</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            Every tool is chosen to fit the real use case — Flutter for cross-platform mobile,
            C++ for embedded firmware, Go for high-performance backends.
          </motion.p>
        </div>
      </Section>

      {/* Stack sections */}
      <div className="border-t border-white/[0.05]">
        {STACKS.map((stack, i) => {
          const a    = accentAt(stack.accentIdx);
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
              Wondering what tech stack fits your project?
            </p>
            <p className="text-white/38 text-sm mb-10">
              We choose tech based on real requirements, not trends — talk to our team for free.
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
