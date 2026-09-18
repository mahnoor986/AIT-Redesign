'use client';

import { useEffect, useState } from 'react';
import { Users, BookOpen, GraduationCap, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import StatCounter from '@/components/ui/StatCounter';
import SectionLabel from '@/components/ui/SectionLabel';

const FALLBACK_STATS = [
  { icon: Users, value: 5000, suffix: '+', label: 'Students Trained', color: 'text-[#2a9d8f]' },
  { icon: BookOpen, value: 20, suffix: '+', label: 'Tech Courses', color: 'text-[#f97316]' },
  { icon: GraduationCap, value: 30, suffix: '+', label: 'Expert Instructors', color: 'text-[#2a9d8f]' },
  { icon: Trophy, value: 50, suffix: '+', label: 'Batches Completed', color: 'text-[#f97316]' },
];

interface StatsResponse {
  students_trained: number;
  tech_courses: number;
  expert_instructors: number;
  batches_completed: number;
}

export default function ImpactMetrics() {
  const [stats, setStats] = useState(FALLBACK_STATS);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/proxy/get?url=/api/courses/public/stats/');
        if (!res.ok) return;
        const json = await res.json();
        const data: StatsResponse | undefined = json?.data;
        if (data) {
          setStats([
            { icon: Users, value: Math.max(data.students_trained, 1), suffix: '+', label: 'Students Trained', color: 'text-[#2a9d8f]' },
            { icon: BookOpen, value: Math.max(data.tech_courses, 1), suffix: '+', label: 'Tech Courses', color: 'text-[#f97316]' },
            { icon: GraduationCap, value: Math.max(data.expert_instructors, 1), suffix: '+', label: 'Expert Instructors', color: 'text-[#2a9d8f]' },
            { icon: Trophy, value: Math.max(data.batches_completed, 1), suffix: '+', label: 'Batches Completed', color: 'text-[#f97316]' },
          ]);
        }
      } catch {
        // Keep fallback stats on error or static preview
      }
    };
    fetchStats();
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#264653] py-16 md:py-24 text-white"
      aria-label="AIT impact statistics"
    >
      {/* Ambient background glow line */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[#2a9d8f] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <SectionLabel number="01" className="justify-center text-[#2a9d8f]">
            Our Impact
          </SectionLabel>
          <h2 className="mt-4 inline-block text-3xl font-heading font-extrabold text-white sm:text-4xl md:text-5xl">
            Serving Through Technology
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="mt-3 block h-1 origin-left rounded-full bg-[#2a9d8f]"
            />
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ y: 35, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className="relative flex flex-col items-center text-center group"
              >
                {i > 0 && (
                  <span className="absolute -left-2 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-white/10 md:block" />
                )}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Icon size={26} className={stat.color} strokeWidth={1.75} />
                </div>
                <p className={`font-heading text-4xl sm:text-5xl font-extrabold tracking-tight ${stat.color}`}>
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium tracking-wide text-white/80">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { ImpactMetrics as ImpactStats };
