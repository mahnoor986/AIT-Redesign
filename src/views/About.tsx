import AppLayout from '@/components/layout/AppLayout';
import { Target, Shield, Users, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-slate-900 text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none" 
             style={{ background: 'radial-gradient(circle at 70% 30%, #0F766E 0%, transparent 70%)' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight">
              Empowering the next generation of tech leaders.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Al-Khair Institute of Technology (AIT) was founded with a singular mission: to bridge the gap between academic theory and industry demands.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-20 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-16 mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We observed that many students graduating with traditional degrees still lacked the practical, hands-on skills required to succeed in modern tech environments. AIT was established to provide highly focused, project-based training that directly translates to job readiness.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we offer specialized programs in Software Engineering, Artificial Intelligence, Design, and Cybersecurity, all taught by industry practitioners who bring real-world challenges into the classroom.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl">
                <div className="text-4xl font-extrabold text-primary mb-2">10+</div>
                <div className="font-semibold text-slate-800">Years of Excellence</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl mt-8">
                <div className="text-4xl font-extrabold text-primary mb-2">5K+</div>
                <div className="font-semibold text-slate-800">Alumni Network</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl -mt-8">
                <div className="text-4xl font-extrabold text-accent mb-2">40+</div>
                <div className="font-semibold text-slate-800">Expert Instructors</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <div className="text-4xl font-extrabold text-accent mb-2">50+</div>
                <div className="font-semibold text-slate-800">Hiring Partners</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-slate-600">The principles that guide our curriculum, our culture, and our commitment to student success.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Target, title: "Practical First", desc: "Theory matters, but execution matters more. We learn by building." },
            { icon: Shield, title: "Credibility", desc: "Fully certified, constantly updated curriculum trusted by employers." },
            { icon: Users, title: "Community", desc: "Education is collaborative. We foster peer learning and mentorship." },
            { icon: Lightbulb, title: "Innovation", desc: "Adapting to the bleeding edge of tech to keep our students ahead." }
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <val.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
