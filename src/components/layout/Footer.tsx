import { Link } from 'wouter';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#274854] text-slate-200 pt-10 pb-5 border-t border-[#1f3a44]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <img
                src="/ait-assets/AIT_Logo_Day.17imzcr09m~20.png"
                alt="AIT Institute"
                className="h-10 w-20 object-contain object-left brightness-0 invert"
              />

              <div className="text-[10px] font-semibold text-[#2a9d8f] uppercase tracking-widest leading-tight mt-0.5">
                Al-Khair Institute
              </div>
            </Link>

            <p className="text-slate-300 text-xs mb-4 max-w-sm leading-relaxed">
              Empowering the next generation of tech leaders through practical,
              verified, and industry-aligned education.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">

              {/* Twitter */}
              <div className="w-8 h-8 rounded-full bg-[#1f3a44] flex items-center justify-center hover:bg-[#2a9d8f] transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>

                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>

              {/* LinkedIn */}
              <div className="w-8 h-8 rounded-full bg-[#1f3a44] flex items-center justify-center hover:bg-[#2a9d8f] transition-colors cursor-pointer">
                <span className="sr-only">LinkedIn</span>

                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.761 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-heading font-bold mb-3 uppercase tracking-wider text-xs">
              Explore
            </h4>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs/web-development"
                  className="text-xs hover:text-primary transition-colors inline-block"
                >
                  Web Development
                </Link>
              </li>

              <li>
                <Link
                  href="/programs/ai-data-science"
                  className="text-xs hover:text-primary transition-colors inline-block"
                >
                  AI & Data Science
                </Link>
              </li>

              <li>
                <Link
                  href="/programs/graphics-design-video-editing"
                  className="text-xs hover:text-primary transition-colors inline-block"
                >
                  Design & Video
                </Link>
              </li>

              <li>
                <Link
                  href="/programs/cybersecurity"
                  className="text-xs hover:text-primary transition-colors inline-block"
                >
                  Cybersecurity
                </Link>
              </li>

              <li>
                <Link
                  href="/admissions"
                  className="text-xs hover:text-primary transition-colors inline-block text-accent"
                >
                  View all programs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Institute */}
          <div>
            <h4 className="text-white font-heading font-bold mb-3 uppercase tracking-wider text-xs">
              Institute
            </h4>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-xs hover:text-primary transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/campuses"
                  className="text-xs hover:text-primary transition-colors inline-block"
                >
                  Campuses & Facilities
                </Link>
              </li>

              <li>
                <Link
                  href="/admissions"
                  className="text-xs hover:text-primary transition-colors inline-block"
                >
                  Admissions & Fees
                </Link>
              </li>

              <li>
                <Link
                  href="/student-portal"
                  className="text-xs hover:text-primary transition-colors inline-block"
                >
                  Student Portal
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-xs hover:text-primary transition-colors inline-block"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold mb-3 uppercase tracking-wider text-xs">
              Get in touch
            </h4>

            <ul className="space-y-2.5">

              {/* Location */}
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2a9d8f] shrink-0 mt-0.5" />

                <span className="text-xs leading-relaxed">
                  AIT campuses across Karachi
                  <br />
                  Contact admissions for locations
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2a9d8f] shrink-0" />

                <Link
                  href="/contact"
                  className="text-xs hover:text-white transition-colors"
                >
                  Contact admissions support
                </Link>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2a9d8f] shrink-0" />

                <Link
                  href="/contact"
                  className="text-xs hover:text-white transition-colors"
                >
                  Send an inquiry online
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1f3a44] pt-4 flex flex-col md:flex-row justify-between items-center gap-2">

          <p className="text-[10px] text-slate-300">
            &copy; {new Date().getFullYear()} Al-Khair Institute of Technology.
            All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[10px] text-slate-300">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
