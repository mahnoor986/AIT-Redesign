'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function AboutSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    mounted && resolvedTheme === 'dark'
      ? '/ait-assets/AIT_Logo_Night.png'
      : '/ait-assets/AIT_Logo_Day.png';

  return (
    <section
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-16 md:py-24 transition-colors duration-500"
      aria-label="About AIT"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:flex-row lg:px-8">
        {/* Left Content Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="z-20 flex w-full flex-col justify-center rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-2xl shadow-slate-900/5 md:p-12 lg:w-[60%] lg:rounded-br-[8rem] lg:border-r-0 lg:p-16"
        >
          <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-wider text-[#f97316]">
            Welcome to AIT
          </span>

          <h2 className="mb-6 font-heading text-3xl font-extrabold leading-[1.15] text-[#2a9d8f] md:text-5xl">
            Where Technology Meets <span className="text-[#f97316]">Excellence!</span>
          </h2>

          {/* Pull-quote */}
          <blockquote className="mb-6 border-l-4 border-[#2a9d8f] pl-4 text-base sm:text-lg font-medium italic text-slate-800 dark:text-slate-200">
            Education should be more than just learning — an experience that
            empowers individuals and communities to thrive.
          </blockquote>

          <p className="mb-10 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
            As a respected NGO project, we are committed to delivering exceptional
            tech education. These courses are fully backed and accredited,
            aiming to empower underserved communities in Pakistan with modern tech
            skills. With years of excellence in vocational and digital education,
            we strive to provide the best learning experience. Join us on this
            exciting journey and discover a new level of technology excellence.
          </p>

          {/* Logos */}
          <div className="mt-2 flex items-center gap-6">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-3 transition-colors hover:border-[#2a9d8f]/50">
              <img
                src={logoSrc}
                alt="AIT Logo"
                className="h-10 sm:h-12 object-contain"
              />
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-3 transition-colors hover:border-[#2a9d8f]/50">
              <img
                src="/ait-assets/Remove background project.png"
                alt="Idara Al-Khair Logo"
                className="h-10 sm:h-12 object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Image (overlapped) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative z-10 mt-8 min-h-[380px] w-full overflow-hidden rounded-3xl shadow-2xl lg:-ml-24 lg:mt-0 lg:h-[580px] lg:w-[50%]"
        >
          <img
            src="/ait-assets/banner1.jpg"
            alt="Students learning at AIT"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#264653]/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
