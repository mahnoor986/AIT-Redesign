import { Link } from 'wouter';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img src="/ait-assets/AIT_Logo_Day.17imzcr09m~20.png" alt="AIT Institute" className="h-12 w-24 object-contain object-left brightness-0 invert" />
              <div className="text-xs font-semibold text-primary uppercase tracking-widest leading-tight mt-1">
                Al-Khair Institute
              </div>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-sm">
              Empowering the next generation of tech leaders through practical, verified, and industry-aligned education.
            </p>
            <div className="flex items-center gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer min-w-[40px] min-h-[40px]">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer min-w-[40px] min-h-[40px]">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/programs/web-development" className="hover:text-primary transition-colors py-1 inline-block">Web Development</Link></li>
              <li><Link href="/programs/ai-data-science" className="hover:text-primary transition-colors py-1 inline-block">AI & Data Science</Link></li>
              <li><Link href="/programs/graphics-design-video-editing" className="hover:text-primary transition-colors py-1 inline-block">Design & Video</Link></li>
              <li><Link href="/programs/cybersecurity" className="hover:text-primary transition-colors py-1 inline-block">Cybersecurity</Link></li>
              <li><Link href="/admissions" className="hover:text-primary transition-colors py-1 inline-block text-accent">View all programs →</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 uppercase tracking-wider text-sm">Institute</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-primary transition-colors py-1 inline-block">About Us</Link></li>
              <li><Link href="/campuses" className="hover:text-primary transition-colors py-1 inline-block">Campuses & Facilities</Link></li>
              <li><Link href="/admissions" className="hover:text-primary transition-colors py-1 inline-block">Admissions & Fees</Link></li>
              <li><Link href="/student-portal" className="hover:text-primary transition-colors py-1 inline-block">Student Portal</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors py-1 inline-block">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 uppercase tracking-wider text-sm">Get in touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">AIT campuses across Karachi<br />Contact admissions for locations</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <Link href="/contact" className="text-sm hover:text-white transition-colors py-1 inline-block">Contact admissions support</Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <Link href="/contact" className="text-sm hover:text-white transition-colors py-1 inline-block">Send an inquiry online</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Al-Khair Institute of Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors py-1">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors py-1">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
