'use client';

import { useMemo, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, BarChart, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { programShowcaseCourses, type ProgramShowcaseCourse } from '@/data/programs';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ProgramCatalog() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Chunk courses into pairs of 2 for grid-2 display
  const pairedCourses = useMemo(() => {
    const pairs: ProgramShowcaseCourse[][] = [];
    for (let i = 0; i < programShowcaseCourses.length; i += 2) {
      pairs.push(programShowcaseCourses.slice(i, i + 2));
    }
    return pairs;
  }, []);

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
    if (currentIndex > 0) {
      scrollToSlide(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < pairedCourses.length - 1) {
      scrollToSlide(currentIndex + 1);
    }
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
          setCurrentIndex(Math.min(Math.max(page, 0), pairedCourses.length - 1));
        }
      }, 50);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', onScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pairedCourses.length]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24" id="programs">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header & Carousel Navigation */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel number="02" className="text-emerald-600 dark:text-emerald-400 mb-2">
              Programs Catalog
            </SectionLabel>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 md:text-4xl">
              Explore Our Programs
            </h2>
            <p className="mt-2 text-base md:text-lg text-slate-600">
              Industry-relevant courses designed to take you from beginner to professional in months, not years.
            </p>
          </div>

          {/* Navigation buttons & counter */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-xs font-semibold text-slate-700">
              <span>{currentIndex + 1}</span>
              <span className="text-slate-400">/</span>
              <span>{pairedCourses.length}</span>
            </div>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous programs"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= pairedCourses.length - 1}
              aria-label="Next programs"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white transition-all hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel: Grid-2 per slide */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 md:-mx-6 md:px-6 pb-6 pt-2"
          aria-label="AIT program courses"
        >
          {pairedCourses.map((pair, pairIdx) => (
            <div
              key={pairIdx}
              className="w-full flex-none shrink-0 snap-start grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {pair.map((course) => (
                <motion.div
                  key={course.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-emerald-500/10"
                >
                  {/* Image with dark gradient overlay & category badge */}
                  <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                    <img
                      src={course.image.src}
                      alt={course.image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/35 to-transparent" />
                    
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block rounded-full bg-accent/20 border border-accent/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-md">
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body with Featured Program Theme Colors */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div>
                      <h3 className="mb-3 font-heading text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-emerald-400">
                        {course.title}
                      </h3>
                      <p className="mb-6 text-sm sm:text-base leading-relaxed text-slate-400 line-clamp-2 sm:line-clamp-3">
                        {course.description}
                      </p>
                    </div>

                    <div>
                      {/* Duration & Level Tags */}
                      <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-300">
                        <span className="flex items-center gap-1.5 rounded-full bg-slate-800/90 border border-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                          <Clock className="h-3.5 w-3.5 text-emerald-400" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5 rounded-full bg-slate-800/90 border border-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                          <BarChart className="h-3.5 w-3.5 text-accent" />
                          {course.level}
                        </span>
                      </div>

                      {/* Action CTA */}
                      <Link
                        href={course.href}
                        className="flex w-full items-center justify-between rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-xl group/btn min-h-[48px]"
                      >
                        <span>View Course Details</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}