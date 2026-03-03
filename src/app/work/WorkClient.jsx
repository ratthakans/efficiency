'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ChevronDown, Building2, Dumbbell, Hotel, CreditCard, Truck, CalendarDays, Wheat, Heart, Newspaper, Trophy, Wine } from 'lucide-react';
import Link from 'next/link';
import Section, { SectionLabel, FadeIn } from '@/components/ui/Section';
import ProjectModal from '@/components/ProjectModal';
import { accentAt } from '@/lib/accents';

const INDUSTRY_ICON = {
  'Political Organization':              { icon: Building2 },
  'Sports & Recreation':                 { icon: Dumbbell },
  'Hospitality Technology':              { icon: Hotel },
  'Fintech & Payment Infrastructure':    { icon: CreditCard },
  'Logistics & Enterprise Operations':   { icon: Truck },
  'Trade & Event Management':            { icon: CalendarDays },
  'Agricultural E-Commerce':             { icon: Wheat },
  'Health & Wellness E-Commerce':        { icon: Heart },
  'Digital Media & Publishing':          { icon: Newspaper },
  'Sports Technology':                   { icon: Trophy },
  'Specialty Retail E-Commerce':         { icon: Wine },
};

const PROJECTS = [
  {
    name: 'Democrat Party', industry: 'Political Organization', year: '2025',
    url: 'https://www.democrat.or.th/',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&q=80',
    problem: 'No system to simulate election outcomes or model multi-party coalition scenarios. All planning was manual.',
    solution: 'Custom election simulation platform with seat projection, scenario modeling, and coalition analysis tools.',
    result: ['12+ coalition scenarios modeled per session', '80% reduction in manual calculation time', 'Single platform replacing 4 separate tools'],
  },
  {
    name: 'BRC-KYC Golf Club', industry: 'Sports & Recreation', year: '2025',
    url: 'https://brc-kycgolf.com/',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=80',
    problem: 'Tee time bookings handled by phone. Scheduling conflicts and double-bookings were frequent.',
    solution: 'Organizational website with integrated online booking system, member portal, and schedule management.',
    result: ['60% drop in phone-based booking volume', '0 scheduling conflicts since launch', 'Online bookings up 3× in 3 months'],
  },
  {
    name: 'My Hotel', industry: 'Hospitality Technology', year: '2024',
    url: 'https://www.pzentsmart.com/smart-hotel',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
    problem: 'Hotel operators had no unified mobile platform for smart room control, guest requests, and staff coordination.',
    solution: 'Smart hotel mobile app for guests to control rooms and request services, with real-time operator dashboard.',
    result: ['35% reduction in staff response calls', 'Guest self-service rate reached 70%', 'Deployed across 3 hotel properties'],
  },
  {
    name: 'GCOO', industry: 'Fintech & Payment Infrastructure', year: '2024',
    url: 'https://gcoo.io/',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
    problem: 'No dedicated payment infrastructure for the Thai market supporting QR, multi-channel, and merchant onboarding at scale.',
    solution: 'Thai payment processing system with QR transactions, multi-channel support, and merchant integration API.',
    result: ['50+ merchants onboarded at launch', 'QR payment processing under 1.2s', '100% BoT compliance coverage'],
  },
  {
    name: 'HongMove', industry: 'Logistics & Enterprise Operations', year: '2024',
    url: 'https://hongmove.co.th/',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    problem: 'Operations split across 5+ disconnected tools. No unified view of logistics, inventory, and service data.',
    solution: 'Full ERP and infrastructure platform covering logistics, inventory, operations coordination, and reporting.',
    result: ['5 tools consolidated into 1 platform', 'Data reconciliation time cut by 75%', 'Real-time visibility across all departments'],
  },
  {
    name: 'Talaadthai', industry: 'Trade & Event Management', year: '2024',
    url: 'https://talaadthai.com/',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    problem: 'Event registration and check-in done manually. High error rate and slow throughput at large trade events.',
    solution: 'Event registration system with QR-based check-in, attendee tracking, and organizer dashboard.',
    result: ['Check-in time reduced from 4 min to 30 sec', '10,000+ attendees processed per event', 'Error rate dropped from 8% to under 0.5%'],
  },
  {
    name: 'Siamvana', industry: 'Agricultural E-Commerce', year: '2025',
    url: 'https://siamvana.com',
    image: 'https://siamvana.com/wp-content/uploads/2025/12/sustainability.jpg',
    problem: 'Thai agricultural producers lacked a dedicated e-commerce channel connecting them directly with buyers at scale.',
    solution: 'E-commerce platform purpose-built for Thai agricultural products with producer profiles, product catalog, and order management.',
    result: ['100+ agricultural producers onboarded', 'Direct farm-to-buyer channel established', 'Order processing fully automated from listing to delivery'],
  },
  {
    name: 'B-Healthy', industry: 'Health & Wellness E-Commerce', year: '2023',
    url: 'https://b-healthy.co/',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1200&q=80',
    problem: 'Largest wellness e-commerce in Thailand lacked scalable infrastructure for multi-vendor catalog and growing transaction load.',
    solution: 'Scaled e-commerce platform with multi-vendor management, product catalog, order processing, and accounts.',
    result: ['1,000+ SKUs managed across 40+ vendors', 'Platform uptime maintained at 99.8%', '#1 wellness marketplace in Thailand'],
  },
  {
    name: 'The Politics', industry: 'Digital Media & Publishing', year: '2023',
    url: 'https://thepolitics.co/',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80',
    problem: 'News outlet had no structured CMS. Publishing was slow, SEO inconsistent, and reader navigation poor.',
    solution: 'News publishing platform with editorial CMS, article categorization, search, and SEO-optimized frontend.',
    result: ['Publishing time reduced by 65%', 'Organic search traffic up 2.4× in 6 months', '20+ articles published per week sustainably'],
  },
  {
    name: 'Golfdee', industry: 'Sports Technology', year: '2023',
    url: 'https://golfdee.com',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&q=80',
    problem: 'No dedicated mobile app for Thai golfers to discover courses, book tee times, or track rounds.',
    solution: 'Golf mobile app with course search and booking, score tracking, and community features.',
    result: ['5,000+ registered users in first 6 months', '200+ courses listed at launch', 'Avg. 4.6 app store rating'],
  },
  {
    name: 'Bottle Bridge', industry: 'Specialty Retail E-Commerce', year: '2023',
    url: 'https://bottlebridge.co/',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80',
    problem: 'Australian wine importer had no online retail presence. Manual order handling limited growth.',
    solution: 'Focused e-commerce platform for imported wines with curated catalog, order management, and customer accounts.',
    result: ['100+ of orders moved online within 2 months', 'Average order value 18% above offline baseline', 'Catalog scaled to 150+ SKUs at launch'],
  },
];

const INITIAL = 4;
const BATCH   = 3;

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
            Selected projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
          >
            Each project represents a real operational challenge solved with custom software.
            No templates. No generic solutions.
          </motion.p>
        </div>
      </Section>

      {/* Projects */}
      <div className="border-t border-white/[0.05]">
        {PROJECTS.slice(0, visible).map((project, i) => {
          const a    = accentAt(i);
          const cfg  = INDUSTRY_ICON[project.industry];
          const Icon = cfg?.icon;

          return (
            <div
              key={project.name}
              className="row-card border-b border-white/[0.05] cursor-pointer"
              style={{ '--row-accent': a.hex }}
              onClick={() => setSelected(project)}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-24">
                <FadeIn>
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">

                    {/* Left meta */}
                    <div className="lg:col-span-4">
                      <div className="flex items-start justify-between lg:flex-col lg:gap-4 mb-6 lg:mb-0">
                        <div>
                          <span className="code-label block mb-2">{String(i + 1).padStart(2, '0')}</span>
                          <h2 className="text-2xl md:text-3xl font-mono font-semibold text-white/80 hover:text-white transition-colors mb-1">
                            {project.name}
                          </h2>
                          {project.url && (
                            <a
                              href={project.url} target="_blank" rel="noopener noreferrer"
                              className="text-[11px] text-white/28 hover:text-white/55 transition-colors flex items-center gap-1 mt-1"
                              onClick={e => e.stopPropagation()}
                            >
                              <ArrowUpRight size={11} />
                              {project.url.replace(/https?:\/\//, '').replace(/\/$/, '')}
                            </a>
                          )}
                        </div>
                        <div className="text-right lg:text-left">
                          <span className="code-label block mb-2">{project.year}</span>
                          {Icon && (
                            <span
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] tracking-wide rounded-sm border"
                              style={{ color: a.hex, background: `${a.hex}10`, borderColor: `${a.hex}28` }}
                            >
                              <Icon size={10} />
                              {project.industry}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right content */}
                    <div className="lg:col-span-8">
                      <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                        <div>
                          <p className="code-label mb-3">Challenge</p>
                          <p className="text-white/45 text-sm leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                          <p className="code-label mb-3">Solution</p>
                          <p className="text-white/45 text-sm leading-relaxed">{project.solution}</p>
                        </div>
                        <div>
                          <p className="code-label mb-3">Result</p>
                          <ul className="space-y-2">
                            {project.result.map((r, ri) => (
                              <li key={ri} className="text-white/60 text-sm flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0" style={{ backgroundColor: `${a.hex}90` }} />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
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

      <ProjectModal isOpen={!!selectedProject} project={selectedProject} onClose={() => setSelected(null)} />

      {/* CTA */}
      {visible >= PROJECTS.length && (
        <Section>
          <div className="separator-glow mb-16" />
          <div className="text-center max-w-xl mx-auto">
            <FadeIn>
              <p className="text-2xl md:text-3xl font-mono font-semibold text-white mb-4">Ready to build something similar?</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-mono font-semibold text-black rounded-sm mt-8"
                style={{ background: 'linear-gradient(135deg, #61afef, #56b6c2)', boxShadow: '0 0 28px rgba(97,175,239,0.25)' }}
              >
                Start a Project
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </FadeIn>
          </div>
        </Section>
      )}
    </div>
  );
}
