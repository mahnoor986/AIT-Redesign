'use client';

import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Hammer,
  Award,
  BookOpen,
  Briefcase,
  MapPin,
} from 'lucide-react';

const FEATURES = [
  {
    icon: BadgeCheck,
    title: 'Certified',
    subtitle: 'Courses with QR-verified certificates',
    iconBg: 'bg-[#2a9d8f]',
    pos: 'lg:left-[3%] lg:top-[16%]',
    delay: 0.1,
  },
  {
    icon: Hammer,
    title: 'Hands-On Projects',
    subtitle: 'Learn by building real-world applications',
    iconBg: 'bg-[#f97316]',
    pos: 'lg:right-[3%] lg:top-[14%]',
    delay: 0.2,
  },
  {
    icon: Award,
    title: 'Expert Instructors',
    subtitle: 'Industry practitioners who teach from experience',
    iconBg: 'bg-[#264653]',
    pos: 'lg:left-[1%] lg:top-[56%]',
    delay: 0.3,
  },
  {
    icon: BookOpen,
    title: 'Modern Curriculum',
    subtitle: 'Updated with current industry demands',
    iconBg: 'bg-[#f97316]',
    pos: 'lg:right-[1%] lg:top-[54%]',
    delay: 0.4,
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    subtitle: 'Placement assistance and career guidance',
    iconBg: 'bg-[#2a9d8f]',
    pos: 'lg:left-[20%] lg:top-[84%]',
    delay: 0.5,
  },
  {
    icon: MapPin,
    title: 'Multiple Branches',
    subtitle: 'Campuses across Karachi — study near you',
    iconBg: 'bg-[#264653]',
    pos: 'lg:right-[20%] lg:top-[84%]',
    delay: 0.6,
  },
];

export default function WhyChooseAIT() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#2a9d8f]/5 via-slate-50 to-white dark:from-[#264653]/15 dark:via-slate-950 dark:to-slate-900 py-20 md:py-32 transition-colors duration-500"
      aria-label="Why choose AIT"
    >
      {/* Soft background ambient blurs */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2a9d8f]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:min-h-[660px] lg:px-8">
        {/* Center heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-xl text-center lg:pt-36"
        >
          <span className="inline-block rounded-full bg-[#2a9d8f] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-[#2a9d8f]/20">
            Why Choose AIT?
          </span>

          <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            We Are Here For <span className="text-[#f97316]">Excellence</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Since 1987, Idara Al-Khair has served the community — AIT carries that
            mission into technology education.
          </p>
        </motion.div>

        {/* Feature cards: scattered around center on desktop, clean responsive grid on mobile/tablet */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-0 lg:block">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: feature.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group flex items-center gap-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-all duration-300 hover:border-[#2a9d8f]/50 hover:shadow-xl hover:shadow-[#2a9d8f]/10 lg:absolute lg:w-72 ${feature.pos}`}
              >
                <div
                  className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl text-white shadow-md ${feature.iconBg}`}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-snug">
                    {feature.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
