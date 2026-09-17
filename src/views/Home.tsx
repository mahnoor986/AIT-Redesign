import AppLayout from '@/components/layout/AppLayout';
import HeroSection from '@/components/home/HeroSection';
import ImpactMetrics from '@/components/home/ImpactMetrics';
import ProgramCatalog from '@/components/home/ProgramCatalog';
import FlagshipDiploma from '@/components/home/FlagshipDiploma';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import FaqSection from '@/components/home/FaqSection';
import { Link } from 'wouter';

export default function Home() {
  return (
    <AppLayout>
      <HeroSection />
      <ImpactMetrics />
      <ProgramCatalog />
      <FlagshipDiploma />
      <TestimonialCarousel />
      <FaqSection />
      
      {/* Final CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Admissions are open — join students building in-demand technology skills with AIT.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:-translate-y-1 min-h-[48px] flex items-center justify-center">
              Enroll Now
            </Link>
            <Link href="/programs" className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-all min-h-[48px] flex items-center justify-center border border-slate-700">
              Browse Programs
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
