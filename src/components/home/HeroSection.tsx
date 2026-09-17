import { Link } from 'wouter';
import { ArrowRight, PlayCircle, CheckCircle2, Award, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1E293B 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold tracking-[0.18em] text-primary mb-7 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              AIT INSTITUTE • SKILLS FOR THE FUTURE
            </div>
          
            <h1 className="text-5xl md:text-6xl lg:text-[5.1rem] font-heading font-extrabold text-slate-900 tracking-[-0.06em] leading-[0.98] mb-7 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Build Skills. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Build Your Future.</span>
            </h1>
          
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              Practical technology education and career-focused training for students ready to build something that matters.
            </p>
          
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <Link href="/programs" className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent/90 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 min-h-[48px]">
              Explore Programs <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 rounded-full font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 min-h-[48px]">
                Apply Now
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-start gap-x-7 gap-y-3 text-sm font-medium text-slate-500 animate-in fade-in duration-1000 delay-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Industry-Led Curriculum</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Hands-on Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Career Placement Support</span>
            </div>
            </div>
          </div>

          <div className="relative min-h-[420px] md:min-h-[520px] animate-in fade-in slide-in-from-right-6 duration-1000">
            <div className="absolute -right-12 top-8 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-accent/10 blur-3xl"></div>
            <div className="relative mx-auto h-[420px] max-w-[580px] md:h-[520px]">
              <div className="absolute left-0 top-8 h-[78%] w-[68%] overflow-hidden rounded-[2rem] border-[10px] border-white shadow-2xl">
                <img src="/ait-assets/banner2.jpg" alt="AIT students working together on a technology project" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Learning by doing</p>
                  <p className="mt-2 text-xl font-bold">Verified tech courses</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 h-[58%] w-[54%] overflow-hidden rounded-[2rem] border-[10px] border-white shadow-2xl">
                <img src="/ait-assets/banner3.jpg" alt="AIT student learning in a practical training environment" className="h-full w-full object-cover" />
              </div>
              <div className="absolute right-0 top-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Users className="h-5 w-5" /></span>
                <span><strong className="block text-lg text-slate-900">4,816+</strong><small className="text-slate-500">students trained</small></span>
              </div>
              <div className="absolute bottom-12 left-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-slate-950/90 px-4 py-3 text-white shadow-xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white"><Award className="h-5 w-5" /></span>
                <span><strong className="block text-lg">19+</strong><small className="text-white/65">tech courses</small></span>
              </div>
              <div className="absolute left-[40%] top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-xl ring-8 ring-white/75">
                <PlayCircle className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
