import { useState } from 'react';
import { Link } from 'wouter';
import { programs, getAllCategories } from '@/data/programs';
import { ArrowRight, BookOpen, Clock, BarChart } from 'lucide-react';

const programImages: Record<string, { src: string; alt: string }> = {
  'fundamentals-cit': { src: '/ait-assets/banner1.jpg', alt: 'Students learning computer fundamentals at AIT' },
  'web-development': { src: '/ait-assets/banner2.jpg', alt: 'AIT students building a technology project' },
  'graphics-design-video-editing': { src: '/ait-assets/banner3.jpg', alt: 'Creative technology learning at AIT' },
  'ai-data-science': { src: '/ait-assets/banner2.jpg', alt: 'Students collaborating on an AI and data project' },
  'digital-marketing': { src: '/ait-assets/banner1.jpg', alt: 'AIT students working in a practical class' },
  'cybersecurity': { src: '/ait-assets/banner3.jpg', alt: 'Practical technology training at AIT' },
  'english-communication': { src: '/ait-assets/banner1.jpg', alt: 'AIT students learning together' },
};

export default function ProgramCatalog() {
  const categories = ['All', ...getAllCategories()];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrograms = programs.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-slate-50 relative" id="programs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-4">
              Explore Our Programs
            </h2>
            <p className="text-lg text-slate-600">
              Industry-relevant courses designed to take you from beginner to professional in months, not years.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="relative">
              <input 
                type="search" 
                placeholder="Search programs..."
                className="w-full md:w-64 pl-4 pr-10 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[48px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all min-h-[48px] ${
                activeCategory === cat 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <Link 
                key={program.id} 
                href={`/programs/${program.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={programImages[program.slug]?.src} alt={programImages[program.slug]?.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent"></div>
                  <span className="absolute bottom-4 left-5 inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    {program.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3">
                    {program.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <BarChart className="w-4 h-4 text-slate-400" />
                      {program.level}
                    </div>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between text-sm font-bold text-primary group-hover:text-accent transition-colors">
                    View Course Details
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No programs found</h3>
            <p className="text-slate-500">Try adjusting your search or category filters.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-4 text-primary font-bold hover:underline py-2"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
