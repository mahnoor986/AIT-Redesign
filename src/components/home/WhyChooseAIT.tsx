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
    iconColor: 'text-[#2a9d8f]',
    pos: 'lg:left-[3%] lg:top-[16%]',
    delay: 0.1,
  },
  {
    icon: Hammer,
    title: 'Hands-On Projects',
    subtitle: 'Learn by building real-world applications',
    iconColor: 'text-[#f97316]',
    pos: 'lg:right-[3%] lg:top-[14%]',
    delay: 0.2,
  },
  {
    icon: Award,
    title: 'Expert Instructors',
    subtitle: 'Industry practitioners who teach from experience',
    iconColor: 'text-[#264653]',
    pos: 'lg:left-[1%] lg:top-[56%]',
    delay: 0.3,
  },
  {
    icon: BookOpen,
    title: 'Modern Curriculum',
    subtitle: 'Updated with current industry demands',
    iconColor: 'text-[#f97316]',
    pos: 'lg:right-[1%] lg:top-[54%]',
    delay: 0.4,
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    subtitle: 'Placement assistance and career guidance',
    iconColor: 'text-[#2a9d8f]',
    pos: 'lg:left-[20%] lg:top-[84%]',
    delay: 0.5,
  },
  {
    icon: MapPin,
    title: 'Multiple Branches',
    subtitle: 'Campuses across Karachi — study near you',
    iconColor: 'text-[#264653]',
    pos: 'lg:right-[20%] lg:top-[84%]',
    delay: 0.6,
  },
];

export default function WhyChooseAIT() {
  return (
    <section
      className="relative overflow-hidden bg-white dark:bg-slate-950 py-20 md:py-32 transition-colors duration-500"
      aria-label="Why choose AIT"
    >
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
            We Are Here For{' '}
            <span className="text-[#f97316]">Excellence</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Since 1987, Idara Al-Khair has served the community — AIT carries
            that mission into technology education.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-0 lg:block">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: feature.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`
                  group
                  relative
                  isolate
                  flex
                  items-center
                  gap-4
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/50
                  dark:border-white/10
                  bg-white/40
                  dark:bg-white/[0.08]
                  p-5
                  shadow-[0_10px_30px_-8px_rgba(15,23,42,0.2),0_2px_6px_rgba(15,23,42,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)]
                  dark:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]
                  backdrop-blur-[40px]
                  backdrop-saturate-[180%]
                  transition-all
                  duration-300
                  hover:bg-white/55
                  dark:hover:bg-white/[0.12]
                  hover:shadow-[0_16px_40px_-8px_rgba(15,23,42,0.25),inset_0_1px_1px_rgba(255,255,255,1)]
                  lg:absolute
                  lg:w-72
                  ${feature.pos}
                `}
              >
                {/* Diagonal glass sheen */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/50 via-white/10 to-transparent dark:from-white/10 dark:via-white/[0.02] dark:to-transparent" />

                {/* Top rim light */}
                <div className="pointer-events-none absolute left-[6%] right-[6%] top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                {/* Left rim light */}
                <div className="pointer-events-none absolute left-0 top-[12%] bottom-[12%] w-px bg-gradient-to-b from-transparent via-white/70 to-transparent" />

                {/* Icon */}
                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-12
                    w-12
                    flex-none
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/70
                    bg-white/60
                    shadow-[0_4px_12px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,1)]
                    backdrop-blur-xl
                    dark:border-white/10
                    dark:bg-white/[0.08]
                    ${feature.iconColor}
                  `}
                >
                  <Icon size={22} strokeWidth={1.9} />
                </div>

                {/* Content */}
                <div className="relative z-10 min-w-0">
                  <h3 className="font-heading text-base font-bold tracking-tight text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-0.5 text-xs leading-snug text-slate-500 dark:text-slate-300 sm:text-sm">
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