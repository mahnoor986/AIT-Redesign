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
      <section className="bg-[#f5f7f8] py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              md:rounded-[36px]
              bg-gradient-to-br
              from-[#264653]
              via-[#264653]
              to-[#2a9d8f]
              px-6
              py-12
              sm:px-10
              sm:py-14
              md:px-16
              md:py-16
              lg:px-20
              lg:py-20
              text-center
              text-white
            "
          >
            {/* Decorative glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-[#2a9d8f]/25
                blur-[90px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-24
                h-72
                w-72
                rounded-full
                bg-[#f97316]/15
                blur-[90px]
              "
            />

            {/* Subtle center line */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-1/2
                h-px
                w-full
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
              "
            />

            {/* CTA Content */}
            <div className="relative z-10 mx-auto max-w-4xl text-center">

              {/* Heading */}
              <h2
                className="
                  mx-auto
                  max-w-3xl
                  text-4xl
                  font-heading
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-5xl
                  lg:text-[52px]
                "
              >
                Ready to Start Your Tech{' '}
                <span className="text-[#f97316]">
                  Journey?
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-base
                  leading-relaxed
                  text-slate-200
                  sm:text-lg
                  md:text-xl
                "
              >
                Admissions are open — join thousands of students
                learning in-demand tech skills, affordable and fully
                certified.
              </p>

              {/* Buttons */}
              <div
                className="
                  mt-9
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  sm:flex-row
                "
              >
                <Link
                  href="/contact"
                  className="
                    flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f97316]
                    px-8
                    py-3.5
                    text-base
                    font-bold
                    text-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#ea580c]
                    hover:shadow-lg
                    sm:w-auto
                    sm:min-w-[180px]
                    sm:text-lg
                  "
                >
                  Enroll Now
                </Link>

                <Link
                  href="/programs"
                  className="
                    flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-white/10
                    px-8
                    py-3.5
                    text-base
                    font-bold
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/20
                    sm:w-auto
                    sm:min-w-[210px]
                    sm:text-lg
                  "
                >
                  Browse Programs
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}