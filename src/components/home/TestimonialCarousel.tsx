import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      quote: "Mind boggling initiative to educate ... only if we had more schools like this, the country would look a whole lot different.",
      author: "Omar Javaid",
      role: "Education Director, IOBM",
      program: "AIT community review"
    },
    {
      id: 2,
      quote: "I recently completed the one-year programming course at Idara Alkhair, and it was an excellent experience. The instructors were knowledgeable and supportive, making complex topics easy to understand.",
      author: "Noor-Ul-Ain",
      role: "AIT Graduate",
      program: "Web Development"
    },
    {
      id: 3,
      quote: "The course covered essential skills like HTML, CSS, WordPress, Canva, Bootstrap, and JavaScript. The practical projects were particularly helpful in building my portfolio.",
      author: "Noor-Ul-Ain",
      role: "AIT Graduate",
      program: "Practical project learning"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-slate-600 mb-8">
              Don't just take our word for it. Hear from our alumni who have transformed their careers through practical education at AIT.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/3 relative">
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 min-h-[300px] flex flex-col justify-center">
              <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
              
              <div className="relative z-10 animate-in fade-in zoom-in-95 duration-300" key={currentIndex}>
                <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonials[currentIndex].author}</h4>
                    <p className="text-sm text-slate-500">{testimonials[currentIndex].role}</p>
                    <p className="text-xs font-semibold text-primary mt-1 uppercase tracking-wider">{testimonials[currentIndex].program}</p>
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
