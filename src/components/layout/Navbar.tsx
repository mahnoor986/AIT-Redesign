import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { programs } from '@/data/programs';

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopProgramsOpen, setDesktopProgramsOpen] = useState(false);
  const [desktopRecognitionsOpen, setDesktopRecognitionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-50">
          <img src="/ait-assets/AIT_Logo_Day.17imzcr09m~20.png" alt="AIT Institute" className="h-11 w-[4.9rem] object-contain object-left" />
          <div className="h-5 w-px bg-slate-300 mx-1 hidden sm:block"></div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest hidden sm:block leading-tight">
            Al-Khair<br />Institute
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
            About Us
          </Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setDesktopProgramsOpen(true)}
            onMouseLeave={() => setDesktopProgramsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-2">
              Courses <ChevronDown className="w-4 h-4" />
            </button>
            
            {/* Desktop Programs Dropdown */}
            {desktopProgramsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] z-50">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden flex">
                  <div className="w-1/3 bg-slate-50 p-6">
                    <h3 className="font-heading font-bold text-primary mb-2">Explore Paths</h3>
                    <p className="text-xs text-slate-500 mb-4">Discover practical tech programs designed for real-world careers.</p>
                    <Link href="/programs" className="text-sm font-bold text-accent hover:underline flex items-center gap-1">
                      View all courses <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="w-2/3 p-6 grid grid-cols-2 gap-x-4 gap-y-6">
                    {programs.slice(0, 6).map(p => (
                      <Link key={p.id} href={`/programs/${p.slug}`} className="group block">
                        <h4 className="font-semibold text-sm text-slate-800 group-hover:text-primary transition-colors line-clamp-1">{p.title}</h4>
                        <span className="text-xs text-slate-500">{p.category}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/admissions" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
            Admissions
          </Link>

          {/* Recognitions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDesktopRecognitionsOpen(true)}
            onMouseLeave={() => setDesktopRecognitionsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-2">
              Recognitions <ChevronDown className="w-4 h-4" />
            </button>
            
            {/* Desktop Recognitions Dropdown */}
            {desktopRecognitionsOpen && (
              <div className="absolute top-full left-0 pt-2 w-70 z-70">
                <div className="bg-white rounded-lg shadow-lg border border-slate-100 py-2">
                  <Link href="/affiliations" className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors">
                    AIT Institute Affiliations
                  </Link>
                  <Link href="/accreditations" className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors">
                    AIT Institute Accreditations
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/student-portal" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            Student Portal
          </Link>
          <Link href="/contact" className="border border-primary/25 text-primary hover:bg-primary/5 px-5 py-2.5 rounded-full text-sm font-bold transition-all min-w-[48px] min-h-[48px] flex items-center justify-center">
            Contact Us
          </Link>
          {/* Desktop Apply Now Button linked to /register */}
          <Link href="/register" className="bg-accent text-white hover:bg-accent/90 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 min-w-[48px] min-h-[48px] flex items-center justify-center">
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-slate-800 relative z-50 min-w-[48px] min-h-[48px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-6 text-lg font-heading font-semibold text-slate-800 pb-12">
            <Link href="/" className="pb-4 border-b border-slate-100">Home</Link>
            <div className="pb-4 border-b border-slate-100">
              <span className="text-slate-400 text-sm font-sans font-bold uppercase tracking-wider mb-4 block">Programs</span>
              <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-100">
                {programs.map(p => (
                  <Link key={p.id} href={`/programs/${p.slug}`} className="text-base font-medium text-slate-600">
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/about" className="pb-4 border-b border-slate-100">About AIT</Link>
            <Link href="/admissions" className="pb-4 border-b border-slate-100">Admissions</Link>
            <Link href="/campuses" className="pb-4 border-b border-slate-100">Campuses</Link>
            
            {/* Mobile Recognitions Section */}
            <div className="pb-4 border-b border-slate-100">
              <span className="text-slate-400 text-sm font-sans font-bold uppercase tracking-wider mb-4 block">Recognitions</span>
              <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-100">
                <Link href="/affiliations" className="text-base font-medium text-slate-600">
                  Affiliations
                </Link>
                <Link href="/accreditations" className="text-base font-medium text-slate-600">
                  Accreditations
                </Link>
              </div>
            </div>

            <Link href="/student-portal" className="pb-4 border-b border-slate-100 text-primary">Student Portal</Link>
            
            {/* Mobile Start Application / Apply Now Button linked to /register */}
            <Link href="/register" className="mt-4 bg-accent text-white text-center py-4 rounded-xl font-bold text-lg min-h-[48px] flex items-center justify-center">
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}