import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, BarChart, Clock } from 'lucide-react';
import { programShowcaseCourses } from '@/data/programs';

export default function ProgramCatalog() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12" id="programs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="mb-4 font-heading text-3xl font-extrabold text-slate-900 md:text-4xl">
            Explore Our Programs
          </h2>
          <p className="text-lg text-slate-600">
            Industry-relevant courses designed to take you from beginner to professional in months, not years.
          </p>
        </div>

        <div className="relative overflow-x-auto -mx-4 px-4 pb-5 pt-1 [scrollbar-width:none] md:-mx-6 md:px-6 [&::-webkit-scrollbar]:hidden" aria-label="AIT program courses">
          {programShowcaseCourses.map((course, index) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full sm:w-[280px] shrink-0 flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <Link href={course.href} className="group block">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image.src}
                    alt={course.image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <span className="absolute bottom-4 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    {course.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="mb-2 font-heading text-xl font-bold text-slate-900 transition-colors group-hover:text-primary">
                    {course.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-sm text-slate-600">{course.description}</p>

                  <div className="mt-auto flex items-between text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-slate-400" />{course.duration}</span>
                    <span className="flex items-center gap-2"><BarChart className="h-3.5 w-3.5 text-slate-400" />{course.level}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm font-bold text-primary transition-colors group-hover:text-accent">
                    View Course Details
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}