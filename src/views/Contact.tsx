import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <AppLayout>
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600">
            Have questions about admissions, programs, or corporate partnerships? We're here to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">Contact Information</h3>
              <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                Fill out the form and our admissions team will get back to you within 24 hours. For immediate assistance, please call our support line.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                 <Mail className="w-5 h-5" />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900">Admissions Support</h4>
                   <p className="text-slate-600 text-sm">Send an inquiry using the form and the AIT team will help with your next step.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Address</h4>
                   <p className="text-slate-600 text-sm">Course, admissions, and campus questions</p>
                   <p className="text-xs text-slate-400 mt-1">General inquiries and support</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900">AIT Campuses</h4>
                   <p className="text-slate-600 text-sm">Campuses across Karachi<br />Contact admissions for the nearest location</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">Thank you for reaching out. An admissions advisor will contact you shortly.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="px-6 py-3 bg-slate-100 text-slate-700 rounded-full font-bold hover:bg-slate-200 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[48px] bg-slate-50 focus:bg-white transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[48px] bg-slate-50 focus:bg-white transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[48px] bg-slate-50 focus:bg-white transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="program" className="text-sm font-semibold text-slate-700">Program of Interest (Optional)</label>
                    <select 
                      id="program" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[48px] bg-slate-50 focus:bg-white transition-colors text-slate-700"
                    >
                      <option value="">Select a program...</option>
                      <option value="web">Full-Stack Web Development</option>
                      <option value="ai">AI & Data Science</option>
                      <option value="design">Graphics Design & Video Editing</option>
                      <option value="cyber">Cybersecurity</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50 focus:bg-white transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed min-h-[48px] flex items-center justify-center gap-2"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'} 
                    {formState !== 'submitting' && <Send className="w-5 h-5" />}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}
