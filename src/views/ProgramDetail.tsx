import { useParams, Link } from 'wouter';
import { getProgramBySlug } from '@/data/programs';
import AppLayout from '@/components/layout/AppLayout';
import { ArrowLeft, Clock, BarChart, BookOpen, CheckCircle2, Download, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const programImages: Record<string, string> = {
  'fundamentals-cit': '/ait-assets/banner1.jpg',
  'web-development': '/ait-assets/banner2.jpg',
  'graphics-design-video-editing': '/ait-assets/banner3.jpg',
  'ai-data-science': '/ait-assets/banner2.jpg',
  'digital-marketing': '/ait-assets/banner1.jpg',
  'cybersecurity': '/ait-assets/banner3.jpg',
  'english-communication': '/ait-assets/banner1.jpg',
};

export default function ProgramDetail() {
  const { slug } = useParams();
  const program = getProgramBySlug(slug || '');

  if (!program) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Program Not Found</h1>
          <p className="mb-8 text-slate-600">The program you're looking for doesn't exist or has been removed.</p>
          <Link href="/programs" className="text-primary font-bold hover:underline">
            ← Back to all programs
          </Link>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      {/* Animated Gradient Hero Header */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          backgroundImage:
            'linear-gradient(-45deg, #274854, #2a9d8f, #274854, #1d353f)',
          backgroundSize: '400% 400%',
        }}
        className="relative overflow-hidden pt-20 pb-24 text-white"
      >
        <div className="absolute inset-0 bg-slate-950/40"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium mb-8 py-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Programs
          </Link>

          <div className="max-w-3xl flex flex-col items-center">
            <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              {program.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 tracking-tight">
              {program.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              {program.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-semibold text-white/90">
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Clock className="w-4 h-4 text-[#2a9d8f]" /> {program.duration}
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <BarChart className="w-4 h-4 text-[#2a9d8f]" /> {program.level}
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Award className="w-4 h-4 text-[#2a9d8f]" /> Certificate Included
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#2a9d8f]" />
                What You'll Learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {program.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {/* Course focus */}
                {[
                  "Module 1: Foundations & Fundamentals",
                  "Module 2: Core Concepts & Practical Application",
                  "Module 3: Advanced Techniques",
                  "Module 4: Final Capstone Project"
                ].map((mod, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm">
                    <h3 className="font-bold text-lg text-slate-800 mb-2">{mod}</h3>
                    <p className="text-slate-600 text-sm">
                      Hands-on exercises, assignments, and quizzes to ensure deep understanding of the module's core objectives.
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">Enrollment Open</h3>
               <p className="text-slate-500 text-sm mb-6">Admissions are open. Contact the AIT team for current batch availability and next steps.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Duration</span>
                  <span className="font-bold text-slate-900">{program.duration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="text-slate-600">Format</span>
                   <span className="font-bold text-slate-900">Confirm with AIT</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-600">Prerequisites</span>
                   <span className="font-bold text-slate-900">See course details</span>
                </div>
              </div>
              
              <Link href="/contact" className="w-full py-4 bg-[#f97316] text-white rounded-xl font-bold text-center hover:bg-[#e06511] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 block min-h-[48px] flex items-center justify-center mb-4">
                Apply for this Program
              </Link>
              
              <button className="w-full py-4 bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-bold text-center hover:bg-slate-100 transition-all flex items-center justify-center gap-2 min-h-[48px]">
                <Download className="w-4 h-4" /> Download Syllabus
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </AppLayout>
  );
}