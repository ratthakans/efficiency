'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, ChevronDown,
  Smartphone, Monitor, Cpu, Building2, ShoppingCart, Zap,
} from 'lucide-react';
import Link from 'next/link';
import Section, { SectionLabel, SectionTitle, FadeIn } from '@/components/ui/Section';
import { accentAt } from '@/lib/accents';

const CATEGORY_ICON = {
  'Mobile App': Smartphone,
  'POS System': Monitor,
  'Embedded':   Cpu,
  'Platform':   Building2,
  'E-Commerce': ShoppingCart,
  'Automation': Zap,
};

const PROJECTS = [
  {
    name: 'EV Taxi Booking App',
    category: 'Mobile App',
    year: '2025',
    accentIdx: 4,
    platform: 'Flutter · iOS + Android',
    problem: 'An EV taxi operator lacked a booking app with real-time location tracking, QR payment and a driver dashboard — working across both iOS and Android.',
    approach: 'Started with 2-week UX research with real drivers and passengers → Figma prototype → Flutter development with Firebase Realtime → PromptPay QR integration.',
    solution: 'Flutter cross-platform app on iOS+Android from a single codebase. Real-time map tracking via Google Maps SDK, QR payment, push notifications and driver management dashboard.',
    outcome: ['Booking flow completed in < 30 seconds', 'Driver app rated 4.7★ on App Store', 'QR payment live on Day 1 of launch', '99.7% crash-free rate in the first 3 months'],
    tags: ['Flutter', 'Firebase', 'Google Maps SDK', 'PromptPay'],
  },
  {
    name: 'F&B Kitchen Display System',
    category: 'POS System',
    year: '2025',
    accentIdx: 2,
    platform: 'Android Kotlin · Hardware SDK',
    problem: 'A restaurant was relaying orders from the front POS to the kitchen on paper — high error rate and slow throughput during peak hours.',
    approach: 'Analysed real kitchen workflow → designed a KDS UI readable from 1 metre → integrated ESC/POS printer → load and stress tested.',
    solution: 'Native Android KDS app receiving orders from POS in real time via WebSocket. Split-view per kitchen station on a tablet, with void/modify order and Bluetooth receipt printer integration.',
    outcome: ['Order error rate reduced by 94%', 'Kitchen throughput increased 35%', 'Staff training cut from 2 days to 2 hours', 'Hardware: ESC/POS printer + KDS Android tablet'],
    tags: ['Kotlin', 'WebSocket', 'ESC/POS SDK', 'Bluetooth'],
  },
  {
    name: 'Multi-Branch Retail POS + Loyalty',
    category: 'POS System',
    year: '2024',
    accentIdx: 0,
    platform: 'Flutter · PostgreSQL · Cloud',
    problem: 'A retailer with 15 branches ran separate POS systems with no shared inventory — stock counts were frequently wrong and loyalty points could not be used across branches.',
    approach: 'Designed a multi-tenant architecture with real-time inventory sync → Flutter POS app for tablet → web admin panel for HQ → loyalty engine as a separate module.',
    solution: 'Flutter POS app with offline-first mode syncing when online. Real-time inventory across 15 branches, cross-branch loyalty points, cloud print receipts and a management sales dashboard.',
    outcome: ['15 branches live in 6 weeks', 'Stock accuracy from 87% → 99.2%', '8,000+ loyalty members in 3 months', 'Manual stock checks reduced to 0/month'],
    tags: ['Flutter', 'PostgreSQL', 'Cloud Print', 'Offline Sync'],
  },
  {
    name: 'Smart Lock & Access Control',
    category: 'Embedded',
    year: '2024',
    accentIdx: 5,
    platform: 'C++ · BLE 5.0 · Flutter',
    problem: 'An office building needed access control that works offline, keeps a full audit trail, and lets admins manage permissions from a mobile app.',
    approach: 'Designed BLE protocol for door controller → firmware on ESP32 → Flutter companion app → cloud sync audit log → 72h offline fallback.',
    solution: 'Embedded firmware (C++) on ESP32 communicating via BLE 5.0. Flutter mobile app for unlock/admin. Backend sync audit log on every event, with 72-hour offline fallback mode.',
    outcome: ['Response time < 200ms average', '72h offline operation without failure', '100% complete audit log on every access event', 'Hardware: BLE 5.0 + RFID reader integrated'],
    tags: ['C++', 'ESP32', 'BLE 5.0', 'Flutter', 'AWS IoT'],
  },
  {
    name: 'Golfdee Mobile App',
    category: 'Mobile App',
    year: '2023',
    accentIdx: 1,
    platform: 'Flutter · iOS + Android',
    problem: 'There was no mobile app for Thai golfers to discover courses, book tee times and track scores in one place.',
    approach: 'UX research with target golfer segment → booking flow design → Flutter development → Google Maps integration → score tracking module build.',
    solution: 'Golf mobile app for course search, tee time booking, score tracking and community features on iOS+Android — with admin panel for course operators.',
    outcome: ['5,000+ registered users in first 6 months', '200+ courses listed at launch', 'Average 4.6★ App Store rating', '34% booking conversion from app visit'],
    tags: ['Flutter', 'Google Maps', 'Firebase', 'Node.js'],
  },
  {
    name: 'Smart Hotel Guest App',
    category: 'Mobile App',
    year: '2024',
    accentIdx: 3,
    platform: 'Flutter · BLE · IoT',
    problem: 'A hotel had no mobile platform for guests to control their room, request services or communicate with staff in real time.',
    approach: 'Guest experience journey map → room control UI designed to be usable by all age groups → BLE room controller integration → operator dashboard build.',
    solution: 'Flutter app for guests to control smart room (lights, aircon, TV), request services and chat with staff — with a real-time operator dashboard for housekeeping.',
    outcome: ['Staff call-to-response reduced 35%', 'Guest self-service rate 70%', 'Deployed across 3 hotel properties', 'Guest satisfaction score +0.4 from baseline'],
    tags: ['Flutter', 'BLE SDK', 'Firebase', 'WebSocket'],
  },
  {
    name: 'Payment Processing Platform',
    category: 'Platform',
    year: '2024',
    accentIdx: 0,
    platform: 'Node.js · PostgreSQL · React',
    problem: 'No payment infrastructure existed for Thai market–scale QR processing, multi-channel support and merchant onboarding in a single system.',
    approach: 'Designed payment flow per BoT standard → built merchant API → QR generation engine → merchant dashboard.',
    solution: 'Thai payment processing system supporting QR transactions, multi-channel, merchant onboarding API and a developer sandbox for integration testing.',
    outcome: ['50+ merchants onboarded at launch', 'QR payment processing under 1.2s', '100% BoT compliance', 'API uptime 99.9% over 12 months'],
    tags: ['Node.js', 'PostgreSQL', 'PromptPay API', 'React'],
  },
  {
    name: 'Trade Event QR Check-in',
    category: 'Platform',
    year: '2024',
    accentIdx: 3,
    platform: 'Flutter · Node.js · QR SDK',
    problem: 'A large trade event was manually registering and checking in attendees — high error rate, slow throughput and long entrance queues.',
    approach: 'Designed a fast registration flow with QR generation → Flutter scanner app → real-time attendance dashboard → offline fallback mode.',
    solution: 'Event registration system with QR-based check-in app on Android tablet, real-time attendance tracking and organiser dashboard for reporting.',
    outcome: ['Check-in time from 4 minutes → 30 seconds', '10,000+ attendees processed per event', 'Error rate from 8% → below 0.5%', 'Offline fallback active during wifi outage'],
    tags: ['Flutter', 'QR SDK', 'Node.js', 'WebSocket'],
  },
];

const INITIAL = 4;
const BATCH   = 2;

export default function WorkPage() {
  const [visible, setVisible]           = useState(INITIAL);
  const [selectedProject, setSelected] = useState(null);
  const loaderRef                       = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && visible < PROJECTS.length) {
        setVisible(v => Math.min(v + BATCH, PROJECTS.length));
      }
    }, { threshold: 0.1 });

    if (loaderRef.current) io.observe(loaderRef.current);
    return () => io.disconnect();
  }, [visible]);

  return (
    <div className="pt-16">

      {/* Hero */}
      <Section className="pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Work</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-semibold tracking-tight leading-[1.08] mb-6"
          >
            Selected <span className="accent-blue">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            Mobile apps, POS systems and embedded solutions built for real businesses.
            Every project comes with a clear problem statement, approach and measurable outcome.
          </motion.p>
        </div>
      </Section>

      {/* Category legend */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap gap-3">
          {Object.entries(CATEGORY_ICON).slice(0, 3).map(([cat]) => {
            const idx = cat === 'Mobile App' ? 4 : cat === 'POS System' ? 2 : 5;
            const a   = accentAt(idx);
            const Icon = CATEGORY_ICON[cat];
            return (
              <span key={cat} className="inline-flex items-center gap-1.5 text-[10px] font-mono px-3 py-1 rounded-sm border"
                style={{ color: a.hex, background: `${a.hex}10`, borderColor: `${a.hex}28` }}>
                <Icon size={10} />
                {cat}
              </span>
            );
          })}
        </div>
      </div>

      {/* Projects */}
      <div className="border-t border-white/[0.05]">
        {PROJECTS.slice(0, visible).map((project, i) => {
          const a    = accentAt(project.accentIdx);
          const Icon = CATEGORY_ICON[project.category] || Smartphone;

          return (
            <div
              key={project.name}
              className="row-card border-b border-white/[0.05] cursor-pointer"
              style={{ '--row-accent': a.hex }}
              onClick={() => setSelected(project)}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-18">
                <FadeIn>
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">

                    {/* Left meta */}
                    <div className="lg:col-span-4">
                      <div className="flex items-start justify-between lg:flex-col lg:gap-4 mb-6 lg:mb-0">
                        <div>
                          <span className="code-label block mb-2">{String(i + 1).padStart(2, '0')}</span>
                          <h2 className="text-xl md:text-2xl font-mono font-semibold text-white/80 hover:text-white transition-colors mb-2">
                            {project.name}
                          </h2>
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] tracking-wide rounded-sm border mb-2"
                            style={{ color: a.hex, background: `${a.hex}10`, borderColor: `${a.hex}28` }}
                          >
                            <Icon size={10} />
                            {project.category}
                          </span>
                          <p className="text-[10px] text-white/25 font-mono">{project.platform}</p>
                        </div>
                        <span className="code-label">{project.year}</span>
                      </div>
                    </div>

                    {/* Right content */}
                    <div className="lg:col-span-8">
                      <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                        <div>
                          <p className="code-label mb-3">Problem</p>
                          <p className="text-white/45 text-sm leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                          <p className="code-label mb-3">Approach</p>
                          <p className="text-white/45 text-sm leading-relaxed line-clamp-5">{project.approach}</p>
                        </div>
                        <div>
                          <p className="code-label mb-3">Outcome</p>
                          <ul className="space-y-2">
                            {project.outcome.map((r, ri) => (
                              <li key={ri} className="text-white/60 text-sm flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: `${a.hex}90` }} />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-6">
                        {project.tags.map(t => (
                          <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-sm border"
                            style={{ color: `${a.hex}cc`, background: `${a.hex}08`, borderColor: `${a.hex}20` }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          );
        })}

        {/* Scroll loader */}
        {visible < PROJECTS.length && (
          <div ref={loaderRef} className="flex justify-center py-16">
            <div className="flex items-center gap-2 text-white/28 text-sm font-mono">
              <ChevronDown size={16} className="animate-bounce" />
              <span>Scroll to load more</span>
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25 }}
            className="max-w-2xl w-full rounded-md p-8 relative overflow-y-auto max-h-[85vh]"
            style={{ background: '#0a0e13', border: '1px solid rgba(255,255,255,0.08)' }}
            onClick={e => e.stopPropagation()}
          >
            {(() => {
              const a = accentAt(selectedProject.accentIdx);
              const Icon = CATEGORY_ICON[selectedProject.category] || Smartphone;
              return (
                <>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-sm border mb-3"
                        style={{ color: a.hex, background: `${a.hex}10`, borderColor: `${a.hex}28` }}>
                        <Icon size={10} />{selectedProject.category}
                      </span>
                      <h2 className="text-xl font-mono font-semibold text-white">{selectedProject.name}</h2>
                      <p className="text-[11px] text-white/30 font-mono mt-1">{selectedProject.platform} · {selectedProject.year}</p>
                    </div>
                    <button onClick={() => setSelected(null)} className="text-white/30 hover:text-white transition-colors text-lg font-mono">✕</button>
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: 'Problem', text: selectedProject.problem },
                      { label: 'Approach', text: selectedProject.approach },
                      { label: 'Solution', text: selectedProject.solution },
                    ].map(({ label, text }) => (
                      <div key={label}>
                        <p className="code-label mb-2">{label}</p>
                        <p className="text-white/55 text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                    <div>
                      <p className="code-label mb-3">Outcome</p>
                      <ul className="space-y-2">
                        {selectedProject.outcome.map((r, i) => (
                          <li key={i} className="text-white/65 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full mt-[6px] flex-shrink-0" style={{ backgroundColor: a.hex }} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </div>
      )}

      {/* CTA */}
      {visible >= PROJECTS.length && (
        <Section>
          <div className="separator-glow mb-16" />
          <div className="text-center max-w-xl mx-auto">
            <FadeIn>
              <p className="text-2xl md:text-3xl font-mono font-semibold text-white mb-4">
                Ready to build your next project?
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-mono font-semibold text-black rounded-sm mt-8"
                style={{ background: 'linear-gradient(135deg, #61afef, #56b6c2)', boxShadow: '0 0 28px rgba(97,175,239,0.25)' }}
              >
                Get a Free Assessment
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </FadeIn>
          </div>
        </Section>
      )}
    </div>
  );
}
