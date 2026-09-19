'use client';

import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import AboutSection from '@/components/about/AboutSection';
import MissionVision from '@/components/about/MissionVision';
import CeoMessage from '@/components/about/CeoMessage';
// import Partners from '@/components/about/Partners';

export default function About() {
  return (
    <AppLayout>
      {/* =========================================================
          ABOUT HERO (Animated Gradient & Centered Content)
      ========================================================= */}
      <section
        className="relative min-h-[340px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[450px] overflow-hidden flex items-center justify-center text-center bg-gradient-to-r from-[#274854] via-[#2a9d8f] to-[#4da199] bg-[length:200%_200%] animate-gradient"
        style={{
          animation: 'gradientMove 8s ease infinite',
        }}
      >
        {/* Keyframe Inline Style for Smooth Gradient Animation */}
        <style>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left decorative circle */}
          <div className="absolute -left-40 -top-40 w-[500px] h-[500px] rounded-full border border-white/10" />

          {/* Right decorative circle */}
          <div className="absolute -right-40 -bottom-48 w-[550px] h-[550px] rounded-full border border-white/10" />

          {/* Subtle glow */}
          <div className="absolute right-[8%] top-[15%] w-[280px] h-[280px] rounded-full bg-white/5 blur-3xl" />

          {/* Small decorative dots */}
          <div className="absolute left-[7%] top-[22%] w-2 h-2 rounded-full bg-white/20" />
          <div className="absolute left-[15%] bottom-[20%] w-3 h-3 rounded-full bg-white/10" />
          <div className="absolute right-[15%] top-[25%] w-2 h-2 rounded-full bg-white/25" />
          <div className="absolute right-[25%] bottom-[18%] w-3 h-3 rounded-full bg-white/15" />
        </div>

        {/* Centered Content */}
        <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10 relative z-10 flex flex-col items-center justify-center">
          <div className="max-w-2xl lg:max-w-3xl flex flex-col items-center">
            {/* Label */}
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold tracking-[0.16em] uppercase">
                About AIT
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08] tracking-tight mb-4">
              Al-Khair Institute
              <br className="hidden md:block" />
              of Technology
            </h1>

            {/* Accent Line */}
            <div className="mb-4">
              <div className="h-1 w-16 sm:w-20 rounded-full bg-[#4da199]" />
            </div>

            {/* Description */}
            <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/85 font-medium">
              Al-Khair Institute of Technology (AIT) was founded with a
              singular mission: to bridge the gap between academic theory
              and industry demands.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXTRACTED SECTIONS FROM AIT_FE
      ========================================================= */}
      <AboutSection />
      <MissionVision />
      <CeoMessage />
      {/* <Partners /> */}
    </AppLayout>
  );
}