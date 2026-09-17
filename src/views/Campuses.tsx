import AppLayout from '@/components/layout/AppLayout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Campuses() {
  return (
    <AppLayout>
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        {/* Simple grid background */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight">
            Our Campuses
          </h1>
          <p className="text-lg text-slate-300">
            State-of-the-art facilities designed to foster creativity, collaboration, and deep technical learning.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              Headquarters
            </div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Main Tech Campus</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              AIT creates learning environments where students can explore technology through guided instruction, practical work, and community support.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Address</h4>
                 <p className="text-slate-600 text-sm">AIT campuses across Karachi<br />Contact admissions for the nearest location</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Operating Hours</h4>
                 <p className="text-slate-600 text-sm">Contact admissions for current campus hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Contact</h4>
                 <p className="text-slate-600 text-sm">Admissions support available through the contact page</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-emerald-600/80 mix-blend-multiply z-10"></div>
            <img src="/ait-assets/banner2.jpg" alt="AIT students working on a practical technology project" className="absolute inset-0 h-full w-full object-cover" />
            
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
              <h3 className="font-bold text-xl mb-2">Facilities Include:</h3>
              <ul className="text-sm space-y-1 text-white/90">
                 <li>• Practical technology learning</li>
                 <li>• Supportive instructors</li>
                 <li>• Community-led learning</li>
                 <li>• Campus and online options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Note on Online Learning */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
          </div>
          <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">AIT Virtual Campus (Online)</h2>
          <p className="text-slate-600 mb-6">
            Not in the city? All our programs are fully accessible via our custom Learning Management System (LMS). Attend live classes, submit assignments, interact with peers, and get 1-on-1 mentorship from anywhere in the world.
          </p>
          <a href="/programs" className="text-primary font-bold hover:underline py-2 px-4 min-h-[48px] inline-flex items-center">
            Explore Programs
          </a>
        </div>
      </div>
    </AppLayout>
  );
}
