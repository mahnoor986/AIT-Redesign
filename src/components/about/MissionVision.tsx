'use client';

import React from 'react';
import { Target, Eye, Sparkles } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function MissionVision() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const values = [
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in education and student success.',
    },
    {
      title: 'Innovation',
      description: 'Embracing creativity and cutting-edge technology to drive progress.',
    },
    {
      title: 'Integrity',
      description: 'Upholding honesty, transparency, and ethical behavior in all aspects.',
    },
    {
      title: 'Compassion',
      description: 'Supporting students with care, understanding, and empathy.',
    },
    {
      title: 'Inclusivity',
      description: 'Ensuring equal opportunities and access for all, regardless of background.',
    },
    {
      title: 'Holistic Development',
      description:
        'Focusing on the overall growth of students, beyond just technical skills, to prepare them for responsible citizenship in a digital world.',
    },
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-500 border-t border-slate-200 dark:border-slate-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#2a9d8f] tracking-tight"
          >
            Mission <span className="text-[#f97316]">&</span> Vision
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#f97316] mb-6 mt-3 mx-auto rounded-full" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter technological future for individuals and communities while maintaining a strong commitment to excellence and social development.
          </motion.p>
        </div>

        {/* Mission Section (Image Left, Text Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/ait-assets/banner2.jpg"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Decorative dots */}
            <div className="pointer-events-none absolute -top-6 -left-6 w-24 h-24 opacity-15 bg-[radial-gradient(#2a9d8f_2px,transparent_2px)] [background-size:12px_12px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 lg:pl-12 border-l-4 border-[#f97316]"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-[#2a9d8f]" />
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#2a9d8f] uppercase tracking-wider">
                Mission
              </h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
              To empower individuals through cutting-edge technological education, fostering innovation and ethical leadership that addresses the challenges of tomorrow&apos;s digital landscape while serving humanity with compassion and excellence.
            </p>
          </motion.div>
        </div>

        {/* Vision Section (Text Left, Image Right) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 lg:pr-12 text-left lg:text-right border-l-4 lg:border-l-0 lg:border-r-4 border-[#f97316]"
          >
            <div className="flex items-center gap-3 mb-4 lg:justify-end">
              <Eye className="w-8 h-8 text-[#2a9d8f]" />
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#2a9d8f] uppercase tracking-wider">
                Vision
              </h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-lg sm:text-xl leading-relaxed">
              To be a globally recognized institute that transforms lives through technology education, creating a community of innovative thinkers and ethical leaders who drive positive change in society and contribute to sustainable technological advancement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/ait-assets/banner3.jpg"
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Decorative dots */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 w-24 h-24 opacity-15 bg-[radial-gradient(#f97316_2px,transparent_2px)] [background-size:12px_12px]" />
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="p-8 sm:p-14 rounded-[3rem] bg-gradient-to-br from-slate-50 to-[#2a9d8f]/10 dark:from-slate-900/90 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="flex items-center mb-12 space-x-4 justify-center text-center">
              <Sparkles className="w-9 h-9 text-[#2a9d8f]" />
              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Core Values That Define Us
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/40 backdrop-blur-sm transition-all duration-300 hover:border-[#2a9d8f]/50 hover:shadow-lg group"
                >
                  <h4 className="font-heading text-xl font-bold mb-3 text-[#2a9d8f] group-hover:text-[#f97316] transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
