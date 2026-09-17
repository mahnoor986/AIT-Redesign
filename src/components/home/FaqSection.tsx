import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const faqs = [
    {
      question: "What are the fees for AIT courses?",
      answer: "AIT courses are highly affordable. The current total fee is PKR 5,000: tuition PKR 4,000, bag PKR 800, and ID card PKR 200. A certificate fee of PKR 100 is extra if requested. Check the course page for the latest breakdown."
    },
    {
      question: "How do I get admission at AIT?",
      answer: "Choose a course, complete the registration form, and follow the admissions instructions for your selected batch. The admissions team can help you choose the right learning path."
    },
    {
      question: "Will I get a certificate after completing a course?",
      answer: "Yes. Graduates receive an AIT certificate with a unique QR code. Employers can scan the code or enter the certificate number online to verify it."
    },
    {
      question: "Where are AIT campuses located?",
      answer: "AIT operates campuses across Karachi. Contact the admissions team to confirm the available campus options for the course and batch you are considering."
    },
    {
      question: "Do I need my own laptop to join?",
      answer: "Ask the admissions team about the equipment requirements for your selected course and campus before enrolling."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about admissions, learning, and your career path at AIT.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-primary shadow-md bg-white' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset min-h-[48px]"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-lg pr-8 ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'bg-white text-slate-400 border border-slate-200'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a href="/contact" className="text-primary font-bold hover:underline inline-flex items-center gap-1 min-h-[48px] py-2 px-4 rounded hover:bg-primary/5">
            Contact Admissions Support
          </a>
        </div>
      </div>
    </section>
  );
}
