'use client';

import { motion } from 'framer-motion';
import AppLayout from '@/components/layout/AppLayout';
import HeroSection from '@/components/home/HeroSection';
import ImpactMetrics from '@/components/home/ImpactMetrics';
import ProgramCatalog from '@/components/home/ProgramCatalog';
import JourneySection from '@/components/home/JourneySection';
import CertificationSection from '@/components/home/CertificationSection';
import WhyChooseAIT from '@/components/home/WhyChooseAIT';
import StudentReviews from '@/components/home/StudentReviews';
import { Link } from 'wouter';

export default function Home() {
  return (
    <AppLayout>
      <HeroSection />
      <ImpactMetrics />
      <ProgramCatalog />
      <JourneySection />
      <CertificationSection />
      <WhyChooseAIT />
      <StudentReviews />

      {/* Final CTA */}
      <section className="bg-white py-10 md:py-12 lg:py-14">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">

          <motion.div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              px-6
              py-10
              text-center
              text-white
              sm:px-10
              sm:py-11
              md:px-14
              md:py-12
            "
            style={{
              background:
                'linear-gradient(120deg, #274854 0%, #274854 25%, #2a9d8f 55%, #4da199 75%, #274854 100%)',
              backgroundSize: '250% 250%',
            }}
            animate={{
              backgroundPosition: [
                '0% 50%',
                '100% 50%',
                '0% 50%',
              ],
            }}
            transition={{
              duration: 10,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          >

            {/* Soft glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-[#4da199]/25
                blur-[90px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-24
                h-64
                w-64
                rounded-full
                bg-[#2a9d8f]/25
                blur-[90px]
              "
            />

            {/* Subtle light overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-white/[0.025]
              "
            />

            {/* Decorative curved line */}
            <div
              className="
                pointer-events-none
                absolute
                left-[-10%]
                top-[10%]
                h-48
                w-[120%]
                rounded-[50%]
                border
                border-white/[0.08]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-[-10%]
                bottom-[-35%]
                h-48
                w-[120%]
                rounded-[50%]
                border
                border-white/[0.06]
              "
            />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl">

              {/* Heading */}
              <motion.h2
                className="
                  mx-auto
                  max-w-3xl
                  font-heading
                  text-3xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[48px]
                "
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Start Your Tech Journey?{' '}
              </motion.h2>

              {/* Description */}
              <motion.p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-relaxed
                  text-white/80
                  sm:text-base
                  md:text-lg
                "
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
              >
                Admissions are open — join thousands of students
                learning in-demand tech skills, affordable and fully
                certified.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="
                  mt-7
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  sm:flex-row
                "
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
              >

                {/* Enroll */}
                <Link
                  href="/contact"
                  className="
                    flex
                    min-h-[48px]
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-[#2a9d8f]
                    px-8
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-black/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#4da199]
                    hover:shadow-xl
                    sm:w-auto
                    sm:min-w-[165px]
                    sm:text-base
                  "
                >
                  Enroll Now
                </Link>

                {/* Browse */}
                <Link
                  href="/programs"
                  className="
                    flex
                    min-h-[48px]
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-white/[0.08]
                    px-8
                    py-3
                    text-sm
                    font-bold
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#4da199]
                    hover:bg-[#4da199]/20
                    sm:w-auto
                    sm:min-w-[195px]
                    sm:text-base
                  "
                >
                  Browse Programs
                </Link>

              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </AppLayout>
  );
}
