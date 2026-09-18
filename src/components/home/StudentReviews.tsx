'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Play, Quote, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  organization: string;
  role?: string;
  video?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Mind boggling initiative to educate ... only if we had more schools like this, the country would look a whole lot different.',
    author: 'Omar Javaid',
    organization: 'IOBM',
    role: 'Education Director',
  },
  {
    quote:
      'The innovative approach to learning has transformed how we think about education.',
    author: 'Sarah Chen',
    organization: 'EdTech Solutions',
    role: 'Technology Lead',
  },
  {
    quote:
      'A revolutionary step forward in making quality education accessible to all.',
    author: 'Michael Rodriguez',
    organization: 'Future Learning Institute',
    role: 'Principal Consultant',
  },
  {
    quote:
      'The quality of education and dedication to student success is truly remarkable.',
    author: 'Ayesha Khan',
    organization: 'Digital Learning Academy',
    role: 'Program Manager',
  },
  {
    quote:
      'I recently completed the one-year programming course at Idara Alkhair, and it was an excellent experience. The instructors were knowledgeable and supportive, making complex topics easy to understand. The course covered essential skills like HTML, CSS, WordPress, Canva, Bootstrap, and JavaScript, providing a strong foundation in web development. The practical projects were particularly helpful in building my portfolio. I highly recommend this course to anyone looking to start a career in web development!',
    author: 'Noor-Ul-Ain',
    organization: 'AIT Graduate',
    role: 'Web Development',
  },
];

// const CARD_GRADIENTS = [
//   'from-slate-900 via-slate-900 to-[#2a9d8f]/40',
//   'from-slate-900 via-slate-900 to-[#f97316]/30',
//   'from-[#2a9d8f]/30 via-slate-900 to-slate-900',
//   'from-slate-900 via-slate-900 to-[#264653]',
//   'from-[#f97316]/30 via-slate-900 to-slate-900',
// ];

export default function StudentReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Autoplay effect
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [emblaApi, isPaused]);

  return (
    <section
      className="overflow-hidden bg-slate-50 dark:bg-slate-950 py-20 md:py-28 transition-colors duration-500 border-t border-slate-200 dark:border-slate-800/80"
      aria-label="Student reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-7 lg:grid-cols-[1fr_1.6fr]">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-[#2a9d8f] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-[#2a9d8f]/20">
              Student Reviews
            </span>

            <h2 className="mt-6 font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              What Our <span className="text-[#2a9d8f]">Students</span> Say About Us
            </h2>

            <p className="mt-5 max-w-md text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Real stories from our community — students, graduates, and
              education leaders who have experienced AIT.
            </p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={scrollPrev}
                aria-label="Previous reviews"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2a9d8f]/40 text-[#2a9d8f] transition-all duration-300 hover:bg-[#2a9d8f] hover:text-white hover:scale-105 active:scale-95"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={scrollNext}
                aria-label="Next reviews"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2a9d8f]/40 text-[#2a9d8f] transition-all duration-300 hover:bg-[#2a9d8f] hover:text-white hover:scale-105 active:scale-95"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT — CARDS CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden py-4 cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex gap-7 sm:gap-3">
              {testimonials.map((t, i) => (
                <div
                  key={t.author + i}
                  className="w-[82%] sm:w-[47%] lg:w-[46%] flex-none select-none"
                >
                  <div
                    className={`group relative flex h-[460px] flex-col justify-between overflow-hidden rounded-3xl bg-[#274854] p-7 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#2a9d8f]/20 border border-white/10
          `}
                  >
                    {/* AIT WATERMARK */}
                    <span className="font-mono absolute right-6 top-6 text-sm font-bold tracking-widest text-white/30">
                      AIT
                    </span>

                    <Quote
                      size={36}
                      className="shrink-0 text-[#2a9d8f]"
                      aria-hidden
                    />

                    {t.video ? (
                      <button
                        onClick={() => setActiveVideo(t.video!)}
                        aria-label={`Play video review by ${t.author}`}
                        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2a9d8f] text-white shadow-xl shadow-[#2a9d8f]/40 transition-transform duration-300 hover:scale-110"
                      >
                        <Play
                          size={26}
                          className="ml-1"
                          fill="currentColor"
                        />
                      </button>
                    ) : (
                      <p className="my-4 line-clamp-6 text-sm sm:text-[15px] leading-relaxed text-slate-200">
                        “{t.quote}”
                      </p>
                    )}

                    <div className="shrink-0 border-t border-white/10 pt-4">
                      <p className="font-heading font-semibold text-white text-base">
                        {t.author}
                      </p>

                      <p className="text-sm font-medium text-[#2a9d8f]">
                        {t.organization}
                      </p>

                      {t.role && (
                        <p className="text-xs text-slate-400 mt-0.5">
                          {t.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2a9d8f]"
          >
            <X size={22} />
          </button>

          <video
            src={activeVideo}
            controls
            autoPlay
            className="max-h-[80vh] w-full max-w-3xl rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
