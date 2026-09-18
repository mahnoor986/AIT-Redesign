'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, BarChart, CheckCircle2, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { programShowcaseCourses, type ProgramShowcaseCourse } from '@/data/programs';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ProgramCatalog() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const slideWidth = container.clientWidth;
    container.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const previousIndex = currentIndex === 0 ? programShowcaseCourses.length - 1 : currentIndex - 1;
    scrollToSlide(previousIndex);
  };

  const handleNext = () => {
    scrollToSlide((currentIndex + 1) % programShowcaseCourses.length);
  };

  // Sync current index when user swipes or scrolls manually
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = container.clientWidth;
        if (width > 0) {
          const page = Math.round(container.scrollLeft / width);
          setCurrentIndex(Math.min(Math.max(page, 0), programShowcaseCourses.length - 1));
        }
      }, 50);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', onScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 md:py-16" id="programs">
      <div className="container mx-auto w-full px-4 md:px-6">
        {/* Centered section introduction */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <SectionLabel number="02" className="mb-2 justify-center text-emerald-600 dark:text-emerald-400">
              Programs Catalog
          </SectionLabel>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900 md:text-4xl">
              Explore Our Programs
          </h2>
          <p className="mt-2 text-base text-slate-600 md:text-lg">
              Industry-relevant courses designed to take you from beginner to professional in months, not years.
          </p>
        </div>

        {/* Slide counter */}
        <div className="mb-3 flex justify-center">
          <div className="flex items-center gap-1.5 rounded-full bg-slate-200/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700">
            <span>{currentIndex + 1}</span>
            <span className="text-slate-400">/</span>
            <span>{programShowcaseCourses.length}</span>
          </div>
        </div>

        {/* Carousel: one feature-style horizontal card per slide */}
        <div className="relative px-10 md:px-14 lg:px-16">
          <button
            onClick={handlePrev}
            aria-label="Previous program"
            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-lg transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-6 pt-2"
            aria-label="AIT program courses"
          >
            {programShowcaseCourses.map((course) => (
              <motion.div
                  key={course.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="group relative grid h-[520px] w-full flex-none snap-start grid-cols-1 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-emerald-500/10 md:h-[410px] md:grid-cols-2"
              >
                {/* Course content */}
                <div className="flex min-h-0 flex-col justify-center p-6 md:p-8 lg:p-10">
                  <div className="mb-4 inline-block self-start rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                    {course.category}
                  </div>
                  <h3 className="mb-3 font-heading text-2xl font-extrabold text-white transition-colors group-hover:text-emerald-400 md:text-3xl">
                    {course.title}
                  </h3>
                  <p className="mb-5 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
                    {course.description}
                  </p>

                  <ul className="mb-6 space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      Practical, industry-relevant curriculum
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      Guidance from experienced instructors
                    </li>
                  </ul>

                  <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
                    <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-800/90 px-3 py-1.5">
                      <Clock className="h-3.5 w-3.5 text-emerald-400" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-800/90 px-3 py-1.5">
                      <BarChart className="h-3.5 w-3.5 text-accent" />
                      {course.level}
                    </span>
                  </div>

                  <Link
                    href={course.href}
                    className="flex min-h-[44px] w-fit items-center justify-between gap-8 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-xl group/btn"
                  >
                    <span>View Course Details</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>

                {/* Course image and contextual panel */}
                <div className="relative min-h-0 w-full overflow-hidden">
                    <img
                      src={course.image.src}
                      alt={course.image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/65 to-slate-950/25" />
                  <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-800/80 p-6 shadow-2xl backdrop-blur-sm">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500 text-xl font-bold text-white">
                          {course.title.charAt(0)}
                        </div>
                        <span className="text-right text-sm font-bold text-emerald-400">Practical focus</span>
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-white">Build real skills</h4>
                      <p className="mb-4 text-sm leading-relaxed text-slate-400">
                        Explore the course details and prepare for your next professional step.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs font-bold text-white/80">
                        <span className="rounded-full bg-white/10 px-3 py-2">{course.category}</span>
                        <span className="rounded-full bg-white/10 px-3 py-2">{course.level}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <button
            onClick={handleNext}
            aria-label="Next program"
            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition-colors hover:bg-slate-800"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}