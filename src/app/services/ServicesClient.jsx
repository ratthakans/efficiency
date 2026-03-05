'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Smartphone, Monitor, Cpu, ArrowRight,
  Check, X, Code2, Bluetooth, Wifi, Database, ShieldCheck, BarChart3,
} from 'lucide-react';
import Section, { SectionLabel, SectionTitle, FadeIn } from '@/components/ui/Section';
import { accentAt } from '@/lib/accents';

const SERVICES = [
  {
    icon: Smartphone, accentIdx: 4,
    tag: '01 / Mobile App Engineering',
    title: 'Mobile App Engineering',
    description:
      'We build mobile apps that run on iOS and Android using Flutter or native Swift/Kotlin, ' +
      'handling everything from UX research to App Store submission — one team, end to end.',
    capabilities: [
      'Flutter cross-platform (iOS + Android)',
      'Native iOS (Swift / SwiftUI)',
      'Native Android (Kotlin / Jetpack Compose)',
      'UX research & user testing',
      'Design system & component library',
      'Micro-interactions & motion design',
      'App Store & Play Store submission',
      'Push notifications & deep linking',
      'Offline-first architecture',
      'Performance profiling & optimisation',
    ],
    deliverables: [
      'Clickable Figma prototype before any code is written',
      'Flutter / native codebase with CI/CD',
      'App approved through store review in 2 rounds',
      '30 days post-launch support',
    ],
    notIncluded: [
      'Static marketing websites',
      'WordPress / CMS sites',
      'Pure web development (no mobile layer)',
    ],
    subServices: [
      { icon: Code2, label: 'Cross-Platform (Flutter)' },
      { icon: Smartphone, label: 'Native iOS / Android' },
      { icon: BarChart3, label: 'Analytics & Tracking' },
      { icon: ShieldCheck, label: 'Security & Auth' },
    ],
  },
  {
    icon: Monitor, accentIdx: 2,
    tag: '02 / POS & Operational Systems',
    title: 'POS & Operational Systems',
    description:
      'POS systems designed specifically for Retail, F&B, Kiosk and Ticketing. ' +
      'Full hardware integration from receipt printer and barcode scanner to kitchen display systems.',
    capabilities: [
      'POS for Retail / F&B / Kiosk',
      'Kitchen Display System (KDS)',
      'ESC/POS receipt printer integration',
      'Barcode / QR scanner integration',
      'Payment gateway: PromptPay, card terminal',
      'Inventory management & stock alerts',
      'Multi-branch, multi-cashier support',
      'Offline mode with sync-when-online',
      'Loyalty & membership system',
      'Real-time sales dashboard',
    ],
    deliverables: [
      'Android tablet / Windows POS app',
      'Back-office web admin panel',
      'Hardware SDK integration & testing',
      'Staff training documentation',
    ],
    notIncluded: [
      'Off-the-shelf POS reselling',
      'ERP systems (separate custom project)',
      'Accounting software',
    ],
    subServices: [
      { icon: Monitor, label: 'POS App (Tablet / PC)' },
      { icon: Database, label: 'Inventory & Stock' },
      { icon: BarChart3, label: 'Sales Dashboard' },
      { icon: Bluetooth, label: 'Hardware Integration' },
    ],
  },
  {
    icon: Cpu, accentIdx: 5,
    tag: '03 / Embedded & Device Software',
    title: 'Embedded & Device Software',
    description:
      'Systems wired to hardware — from IoT sensor networks and EV charging controllers ' +
      'to smart lock/access control and device firmware requiring real-time response.',
    capabilities: [
      'Embedded C / C++ firmware',
      'Rust for safety-critical systems',
      'BLE 5.0 / NFC / RFID protocol',
      'IoT: MQTT / CoAP / LoRaWAN',
      'RTOS integration (FreeRTOS / Zephyr)',
      'EV charging protocol (OCPP)',
      'Device SDK for mobile companion app',
      'Remote OTA firmware update',
      'Edge computing & data aggregation',
      'Hardware-in-the-loop testing',
    ],
    deliverables: [
      'Firmware binary + source code',
      'Mobile companion app (iOS/Android)',
      'Cloud IoT backend + dashboard',
      'Integration test report',
    ],
    notIncluded: [
      'PCB / hardware design',
      'Manufacturing / mass production',
      'RF certification & compliance',
    ],
    subServices: [
      { icon: Cpu, label: 'Firmware (C/C++/Rust)' },
      { icon: Wifi, label: 'IoT Protocol Stack' },
      { icon: Bluetooth, label: 'BLE / NFC / RFID' },
      { icon: ShieldCheck, label: 'OTA Update System' },
    ],
  },
];

const QUALITY_SIGNALS = [
  { label: 'Design System approach', desc: 'Component library, spacing system, type scale — on every project.' },
  { label: 'CI/CD Pipeline',         desc: 'Automated build, test and deploy on every branch.' },
  { label: 'Real Device Testing',    desc: 'Tested on physical devices across multiple models & OS versions.' },
  { label: 'Performance Targets',    desc: 'App startup < 2s, API p95 < 300ms, crash-free > 99.5%.' },
  { label: 'Security Basics',        desc: 'Certificate pinning, secure storage, input validation.' },
  { label: 'Accessibility',          desc: 'WCAG 2.1 AA for key elements — dynamic text, contrast.' },
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
            3 things we do<br />
            <span className="accent-blue">better than anyone</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            We are not a web agency that takes on everything — we are specialists in Mobile App, POS Systems and Embedded Software.
          </motion.p>
        </div>
      </Section>

      {/* Services list */}
      <div className="border-t border-white/[0.05]">
        {SERVICES.map((svc, i) => {
          const a    = accentAt(svc.accentIdx);
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
                          className="icon-box w-12 h-12 rounded-sm border"
                          style={{ background: `${a.hex}10`, borderColor: `${a.hex}28` }}
                        >
                          <Icon size={20} style={{ color: a.hex }} />
                        </div>
                        <span className="code-label">{svc.tag}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-mono font-semibold text-white/80 hover:text-white transition-colors mb-5">
                        {svc.title}
                      </h2>
                      <p className="text-white/45 leading-relaxed text-[15px] mb-8">{svc.description}</p>

                      {/* Sub-service icons */}
                      <div className="grid grid-cols-2 gap-2">
                        {svc.subServices.map(sub => (
                          <div key={sub.label} className="flex items-center gap-2 text-[11px] text-white/40 font-mono">
                            <sub.icon size={11} style={{ color: `${a.hex}80` }} />
                            {sub.label}
                          </div>
                        ))}
                      </div>
                    </FadeIn>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-7">
                    <FadeIn delay={0.18}>
                      <div className="grid md:grid-cols-2 gap-10 mb-10">
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
                          <div className="mb-8">
                            <p className="code-label mb-5">Deliverables</p>
                            <ul className="space-y-3">
                              {svc.deliverables.map(d => (
                                <li key={d} className="text-white/55 text-sm flex items-start gap-2">
                                  <Check size={12} className="mt-[3px] flex-shrink-0" style={{ color: a.hex }} />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="code-label mb-4">Not included</p>
                            <ul className="space-y-2">
                              {svc.notIncluded.map(n => (
                                <li key={n} className="text-white/30 text-xs flex items-start gap-2 font-mono">
                                  <X size={10} className="mt-[3px] flex-shrink-0 text-white/25" />
                                  {n}
                                </li>
                              ))}
                            </ul>
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

      {/* Quality Signals */}
      <Section>
        <div className="separator-glow mb-14" />
        <SectionLabel>Engineering Standards</SectionLabel>
        <SectionTitle className="mb-12">
          <span className="accent-green">Quality</span> that's measurable
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {QUALITY_SIGNALS.map((qs, i) => {
            const a = accentAt(i);
            return (
              <FadeIn key={qs.label} delay={i * 0.08}>
                <div className="tech-card rounded-md p-6 group cursor-default" style={{ '--row-accent': a.hex }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: a.hex }} />
                    <p className="text-sm font-mono font-medium text-white/80 group-hover:text-white transition-colors">{qs.label}</p>
                  </div>
                  <p className="text-white/38 text-xs leading-relaxed">{qs.desc}</p>
                  <span className="accent-line" style={{ background: a.hex }} />
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
              Got a project in mind?
            </p>
            <p className="text-white/38 text-sm mb-10">
              Tell us a little — we'll assess it and recommend the right package for free.
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
