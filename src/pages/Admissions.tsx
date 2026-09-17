import AppLayout from '@/components/layout/AppLayout';
import { Link } from 'wouter';
import { FileText, CheckCircle, MessageSquare } from 'lucide-react';

export default function Admissions() {
  return (
    <AppLayout>
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mb-6">
            Admissions Process
          </h1>
          <p className="text-lg text-slate-600">
            We evaluate applicants based on motivation, logical reasoning, and readiness to learn. Our process is designed to ensure you're placed in a program where you will thrive.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Steps */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-10">How to Apply</h2>
              
              <div className="space-y-10 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:ml-[1.375rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                
                <div className="relative flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-lg shrink-0 z-10">
                    1
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Submit Application</h3>
                    <p className="text-slate-600 text-sm">Fill out our online application form with your basic details, educational background, and program of interest.</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-lg shrink-0 z-10">
                    2
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Admissions Counseling</h3>
                    <p className="text-slate-600 text-sm">Have a brief chat with our advisors to discuss your career goals and confirm the chosen program aligns with them.</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-lg shrink-0 z-10">
                    3
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Assessment (Optional)</h3>
                    <p className="text-slate-600 text-sm">Advanced programs may require a short logical reasoning or foundational skills test to ensure readiness.</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0 z-10 shadow-lg">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Enrollment & Registration</h3>
                    <p className="text-slate-600 text-sm">Upon acceptance, secure your seat by paying the registration fee. Welcome to AIT!</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Fees & Schedule info */}
            <div className="space-y-8">
               <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl">
                 <h3 className="text-2xl font-heading font-bold mb-4">Admissions Open</h3>
                 <p className="text-slate-300 mb-6">Choose a course and contact the AIT team to confirm current batch availability and enrollment steps.</p>
                <Link href="/contact" className="w-full py-4 bg-accent text-white rounded-xl font-bold text-center hover:bg-accent/90 transition-all block min-h-[48px] flex items-center justify-center">
                  Start Application
                </Link>
                 <p className="text-xs text-center text-slate-400 mt-4">Seats and schedules vary by course.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-8">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">Fee Structure & Aid</h3>
                <p className="text-slate-600 text-sm mb-6">
                   The current published total fee is PKR 5,000: tuition PKR 4,000, bag PKR 800, and ID card PKR 200. A certificate fee of PKR 100 is extra if requested.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-slate-700">
                    <FileText className="w-4 h-4 text-primary" /> Transparent pricing
                  </li>
                   <li className="flex items-center gap-2 text-sm text-slate-700">
                     <FileText className="w-4 h-4 text-primary" /> Check the selected course for its latest breakdown
                   </li>
                </ul>
                 <Link href="/contact" className="text-primary font-bold hover:underline flex items-center gap-2 text-sm py-2">
                  <MessageSquare className="w-4 h-4" /> Request detailed fee brochure
                 </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}
