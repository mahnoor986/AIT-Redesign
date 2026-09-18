'use client';

import AppLayout from '@/components/layout/AppLayout';
import Image from 'next/image';
import React from 'react';
import { useTheme } from 'next-themes';
import SectionLabel from '@/components/ui/SectionLabel';
import { Target, Eye, Sparkles } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function About() {
  const { theme } = useTheme();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
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
      description:
        'Striving for the highest standards in education and student success.',
    },
    {
      title: 'Innovation',
      description:
        'Embracing creativity and cutting-edge technology to drive progress.',
    },
    {
      title: 'Integrity',
      description:
        'Upholding honesty, transparency, and ethical behavior in all aspects.',
    },
    {
      title: 'Compassion',
      description:
        'Supporting students with care, understanding, and empathy.',
    },
    {
      title: 'Inclusivity',
      description:
        'Ensuring equal opportunities and access for all, regardless of background.',
    },
    {
      title: 'Holistic Development',
      description:
        'Focusing on the overall growth of students, beyond just technical skills, to prepare them for responsible citizenship in a digital world.',
    },
  ];

  return (
    <AppLayout>
      {/* =========================================================
          ABOUT HERO
      ========================================================= */}
      <section
        className="
          relative
          min-h-[340px]
          sm:min-h-[380px]
          md:min-h-[420px]
          lg:min-h-[450px]
          overflow-hidden
          flex
          items-center
        "
        style={{
          background:
            'linear-gradient(105deg, #274854 0%, #274854 38%, #2a9d8f 68%, #4da199 100%)',
        }}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left decorative circle */}
          <div
            className="
              absolute
              -left-40
              -top-40
              w-[500px]
              h-[500px]
              rounded-full
              border
              border-white/10
            "
          />

          {/* Right decorative circle */}
          <div
            className="
              absolute
              -right-40
              -bottom-48
              w-[550px]
              h-[550px]
              rounded-full
              border
              border-white/10
            "
          />

          {/* Subtle glow */}
          <div
            className="
              absolute
              right-[8%]
              top-[15%]
              w-[280px]
              h-[280px]
              rounded-full
              bg-white/5
              blur-3xl
            "
          />

          {/* Small decorative dots */}
          <div className="absolute left-[7%] top-[22%] w-2 h-2 rounded-full bg-white/20" />
          <div className="absolute left-[15%] bottom-[20%] w-3 h-3 rounded-full bg-white/10" />
          <div className="absolute right-[15%] top-[25%] w-2 h-2 rounded-full bg-white/25" />
          <div className="absolute right-[25%] bottom-[18%] w-3 h-3 rounded-full bg-white/15" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10 relative z-10">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Label */}
            <div className="mb-4">
              <span
                className="
                  inline-flex
                  items-center
                  px-4
                  py-1.5
                  rounded-full
                  border
                  border-white/25
                  bg-white/10
                  backdrop-blur-sm
                  text-white
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  tracking-[0.16em]
                  uppercase
                "
              >
                About AIT
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                font-heading
                font-extrabold
                text-white
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-[52px]
                leading-[1.08]
                tracking-tight
                mb-4
              "
            >
              Al-Khair Institute
              <br className="hidden md:block" />
              of Technology
            </h1>

            {/* Accent Line */}
            <div className="mb-4">
              <div
                className="
                  h-1
                  w-16
                  sm:w-20
                  rounded-full
                  bg-[#4da199]
                "
              />
            </div>

            {/* Description */}
            <p
              className="
                max-w-2xl
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-white/85
                font-medium
              "
            >
              Al-Khair Institute of Technology (AIT) was founded with a
              singular mission: to bridge the gap between academic theory
              and industry demands.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT SECTION
      ========================================================= */}
      <section
        className="
          relative
          overflow-hidden
          bg-cream
          py-16
          transition-colors
          duration-500
          dark:bg-Black
          md:py-24
        "
        aria-label="About AIT"
      >
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-col
            items-center
            px-4
            sm:px-6
            lg:flex-row
            lg:px-8
          "
        >
          {/* =====================================================
              LEFT CONTENT CARD
          ===================================================== */}
          <div
            className="
              z-20
              flex
              w-full
              flex-col
              justify-center
              rounded-3xl
              border
              border-Blue/10
              bg-white
              p-8
              shadow-2xl
              shadow-Blue/5
              dark:border-cream/10
              dark:bg-Blue/25
              md:p-12
              lg:w-[60%]
              lg:rounded-br-[8rem]
              lg:border-r-0
              lg:p-16
            "
          >
            {/* Section Label */}
            <SectionLabel className="mb-3 text-Orange">
              Welcome to AIT
            </SectionLabel>

            {/* Heading */}
            <h2
              className="
                mb-6
                text-3xl
                font-extrabold
                leading-[1.15]
                text-SeaGrean
                md:text-5xl
              "
            >
              Where Technology Meets{' '}
              <span className="text-Orange">Excellence!</span>
            </h2>

            {/* Pull Quote */}
            <blockquote
              className="
                mb-6
                border-l-4
                border-SeaGrean
                pl-4
                text-lg
                font-medium
                italic
                text-Blue
                dark:text-cream
              "
            >
              Education should be more than just learning — an experience
              that empowers individuals and communities to thrive.
            </blockquote>

            {/* Description */}
            <p
              className="
                mb-10
                text-sm
                leading-relaxed
                text-Blue/75
                dark:text-cream/75
                md:text-base
              "
            >
              As a respected NGO project, we are committed to delivering
              exceptional tech education. These courses are fully backed and
              accredited, aiming to empower underserved communities in
              Pakistan with modern tech skills. With years of excellence in
              vocational and digital education, we strive to provide the best
              learning experience. Join us on this exciting journey and
              discover a new level of technology excellence.
            </p>

            {/* ===================================================
                LOGOS
            ===================================================== */}
            <div className="mt-2 flex items-center gap-6">
              {/* AIT Logo */}
              <div
                className="
                  rounded-xl
                  border
                  border-Blue/10
                  bg-cream
                  p-3
                  transition-colors
                  hover:border-SeaGrean/50
                  dark:border-cream/10
                  dark:bg-Black/40
                "
              >
                <img
                  src={
                    theme === 'dark'
                      ? '/ait-assets/AIT_Logo_Night.png'
                      : '/ait-assets/AIT_Logo_Day.png'
                  }
                  alt="AIT Logo"
                  className="h-10 object-contain sm:h-12"
                />
              </div>

              {/* Idara Al-Khair Logo */}
              <div
                className="
                  rounded-xl
                  border
                  border-Blue/10
                  bg-cream
                  p-3
                  transition-colors
                  hover:border-SeaGrean/50
                  dark:border-cream/10
                  dark:bg-Black/40
                "
              >
                <img
                  src="/ait-assets/Remove background project.png"
                  alt="Idara Al-Khair Logo"
                  className="h-10 object-contain sm:h-12"
                />
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}
          <div
            className="
              relative
              z-10
              mt-8
              min-h-[400px]
              w-full
              overflow-hidden
              rounded-3xl
              shadow-2xl
              lg:-ml-24
              lg:mt-0
              lg:h-[600px]
              lg:w-[50%]
            "
          >
            <Image
              src="/ait-assets/banner1.jpg"
              alt="Students learning at AIT"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-Blue/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <section
        className="
          relative
          overflow-hidden
          bg-cream
          py-20
          transition-colors
          duration-500
          dark:bg-Black
          md:py-24
        "
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-bold
                mb-6
                text-SeaGrean
                tracking-wider
              "
            >
              Mission <span className="text-Orange">&</span> Vision

              <div className="w-24 h-1 bg-Orange mb-2 mt-4 mx-auto rounded-full" />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
                text-gray-700
                dark:text-gray-400
                text-base
                md:text-lg
                max-w-3xl
                mx-auto
                leading-relaxed
              "
            >
              We envision being a leading force in the industry, driven by
              innovation, integrity, and inclusivity, creating a brighter
              technological future for individuals and communities while
              maintaining a strong commitment to excellence and social
              development.
            </motion.p>
          </div>

          {/* =====================================================
              MISSION
          ===================================================== */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 mb-24 lg:mb-32">
            {/* Mission Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
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
              <div
                className="
                  absolute
                  -top-6
                  -left-6
                  w-24
                  h-24
                  opacity-10
                  bg-[radial-gradient(#2a9d8f_2px,transparent_2px)]
                  [background-size:12px_12px]
                "
              />
            </motion.div>

            {/* Mission Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                w-full
                lg:w-1/2
                lg:pl-12
                border-l-0
                lg:border-l-4
                border-Orange
                pl-0
              "
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-SeaGrean/10 p-3 text-SeaGrean">
                  <Target className="w-8 h-8" />
                </div>

                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-SeaGrean
                    uppercase
                    tracking-wider
                  "
                >
                  Mission
                </h3>
              </div>

              <p
                className="
                  text-gray-700
                  dark:text-gray-300
                  text-lg
                  md:text-xl
                  leading-relaxed
                "
              >
                To empower individuals through cutting-edge technological
                education, fostering innovation and ethical leadership that
                addresses the challenges of tomorrow&apos;s digital landscape
                while serving humanity with compassion and excellence.
              </p>
            </motion.div>
          </div>

          {/* =====================================================
              VISION
          ===================================================== */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12 mb-24 lg:mb-32">
            {/* Vision Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                w-full
                lg:w-1/2
                lg:pr-12
                text-left
                lg:text-right
                border-r-0
                lg:border-r-4
                border-Orange
                pr-0
                lg:pr-12
              "
            >
              <div className="flex items-center lg:justify-end gap-4 mb-6">
                <h3
                  className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-SeaGrean
                    uppercase
                    tracking-wider
                  "
                >
                  Vision
                </h3>

                <div className="rounded-xl bg-Orange/10 p-3 text-Orange">
                  <Eye className="w-8 h-8" />
                </div>
              </div>

              <p
                className="
                  text-gray-700
                  dark:text-gray-300
                  text-lg
                  md:text-xl
                  leading-relaxed
                "
              >
                To be a globally recognized institute that transforms lives
                through technology education, creating a community of
                innovative thinkers and ethical leaders who drive positive
                change in society and contribute to sustainable technological
                advancement.
              </p>
            </motion.div>

            {/* Vision Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
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
              <div
                className="
                  absolute
                  -bottom-6
                  -right-6
                  w-24
                  h-24
                  opacity-10
                  bg-[radial-gradient(#C96928_2px,transparent_2px)]
                  [background-size:12px_12px]
                "
              />
            </motion.div>
          </div>

          {/* =====================================================
              CORE VALUES
          ===================================================== */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10"
          >
            <div
              className="
                p-6
                sm:p-8
                md:p-12
                rounded-[2rem]
                md:rounded-[3rem]
                bg-gradient-to-br
                from-cream
                to-SeaGrean/10
                dark:from-[#1C1C1D]
                dark:to-black
                border
                border-Black/10
                dark:border-white/5
                shadow-2xl
              "
            >
              {/* Values Heading */}
              <div className="flex flex-col sm:flex-row items-center mb-10 md:mb-12 gap-4 text-center">
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-SeaGrean shrink-0" />

                <h3
                  className="
                    text-3xl
                    md:text-5xl
                    lg:text-6xl
                    font-bold
                    text-Black
                    dark:text-white
                    tracking-wider
                  "
                >
                  Core Values That Define Us
                </h3>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`
                      p-6
                      md:p-8
                      rounded-2xl
                      border
                      transition-all
                      duration-500
                      group
                      ${
                        theme === 'dark'
                          ? 'bg-black/40 border-white/5 hover:border-SeaGrean/50'
                          : 'bg-cream/40 border-Black/5 hover:border-SeaGrean/50 shadow-sm'
                      }
                    `}
                  >
                    <h4
                      className="
                        text-xl
                        md:text-2xl
                        font-bold
                        mb-4
                        text-SeaGrean
                        group-hover:text-Orange
                        transition-colors
                      "
                    >
                      {value.title}
                    </h4>

                    <p
                      className="
                        text-gray-700
                        dark:text-gray-400
                        leading-relaxed
                        group-hover:text-Black
                        dark:group-hover:text-gray-200
                        transition-colors
                      "
                    >
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </AppLayout>
  );
}
