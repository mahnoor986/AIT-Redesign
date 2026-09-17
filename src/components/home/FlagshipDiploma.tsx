import { Link } from 'wouter';
import { CheckCircle2 } from 'lucide-react';

export default function FlagshipDiploma() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
              <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-bold uppercase tracking-wider rounded-full mb-6 self-start">
                 Featured Program
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
                Web Development
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Build a practical foundation in web development with guidance from AIT instructors and a curriculum designed around useful digital skills.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span className="text-slate-300">HTML, CSS, and JavaScript foundations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span className="text-slate-300">WordPress, Bootstrap, and practical projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span className="text-slate-300">Portfolio-focused learning and support</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/programs/software-engineering-diploma" className="px-8 py-4 bg-accent text-white rounded-full font-bold text-center hover:bg-accent/90 transition-all min-h-[48px] flex items-center justify-center">
                  View Syllabus
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white/10 text-white rounded-full font-bold text-center hover:bg-white/20 transition-all min-h-[48px] flex items-center justify-center">
                  Talk to an Advisor
                </Link>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto hidden md:block">
              <img src="/ait-assets/banner1.jpg" alt="AIT students receiving practical technology education" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/65 to-slate-950/30"></div>
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full max-w-md bg-slate-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                     <span className="text-emerald-400 font-bold">Practical focus</span>
                  </div>
                   <h3 className="text-xl font-bold text-white mb-2">Learn by building</h3>
                   <p className="text-slate-400 mb-6">Explore the course details and contact admissions for current batch availability.</p>
                   <div className="flex flex-wrap gap-2 text-xs font-bold text-white/80">
                     <span className="rounded-full bg-white/10 px-3 py-2">HTML &amp; CSS</span>
                     <span className="rounded-full bg-white/10 px-3 py-2">JavaScript</span>
                     <span className="rounded-full bg-white/10 px-3 py-2">WordPress</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
