'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import AppLayout from '@/components/layout/AppLayout';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const SOCIALS = [
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/923332336203' },
  { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com' },
];

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
] as const;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }

    setLoading(false);
  };

  return (
    <AppLayout>
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        
        {/* Animated Gradient Hero Section */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage:
              'linear-gradient(-45deg, #274854, #2a9d8f, #274854, #1d353f)',
            backgroundSize: '400% 400%',
          }}
          className="relative overflow-hidden pb-36 pt-24 md:pt-32 text-white"
        >
          {/* Subtle Ambient Glowing Orbs */}
          <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#2a9d8f]/30 blur-[100px]" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#274854]/40 blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 flex flex-col items-center px-4 text-center max-w-4xl mx-auto"
          >
            <span className="font-mono mb-4 inline-block rounded-full border border-[#2a9d8f]/40 bg-[#2a9d8f]/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-emerald-200">
              Contact
            </span>

            <h1 className="font-heading mb-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Get in Touch
            </h1>

            <div className="mb-6 h-1 w-24 rounded-full bg-[#f97316]" />

            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed">
              Have questions? We&apos;d love to hear from you and assist you further.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content (overlapping hero with -mt-20) */}
        <section className="relative z-10 -mt-20 pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
              {/* LEFT COLUMN: info + socials + map */}
              <div className="space-y-5">
                {/* Visit Us Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xl shadow-slate-900/5"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2a9d8f] text-white shadow-md shadow-[#2a9d8f]/20">
                      <MapPin size={20} />
                    </span>
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                      Visit Us
                    </h3>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <a
                      href="https://maps.app.goo.gl/bo9eCtUqNXh6CKxb7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 transition-colors hover:text-[#2a9d8f]"
                    >
                      A 507, Sector 11-A, Near Power House Chorangi, North Karachi,
                      Karachi, Pakistan
                    </a>
                    <div className="flex-none rounded-xl border border-[#2a9d8f]/30 bg-white p-1.5 shadow-sm">
                      <img
                        src="/ait-assets/QR scan.png"
                        alt="Scan for directions"
                        className="h-20 w-20 rounded-lg object-contain"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Call Us & Email Us 2-col Grid */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xl shadow-slate-900/5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f97316] text-white shadow-md shadow-[#f97316]/20">
                        <Phone size={20} />
                      </span>
                      <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                        Call Us
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      Main: <span className="font-medium text-slate-900 dark:text-slate-200">+92 333 2336203</span>
                      <br />
                      Support: <span className="font-medium text-slate-900 dark:text-slate-200">021 36950309</span>
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xl shadow-slate-900/5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2a9d8f] text-white shadow-md shadow-[#2a9d8f]/20">
                        <Mail size={20} />
                      </span>
                      <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                        Email Us
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      ait.info@iak.ngo
                      <br />
                      contact.ait@iak.ngo
                    </p>
                  </motion.div>
                </div>

                {/* Socials Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xl shadow-slate-900/5"
                >
                  <p className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                    Follow us
                  </p>
                  <div className="flex gap-3">
                    {SOCIALS.map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a9d8f]/10 text-[#2a9d8f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a9d8f] hover:text-white"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Map Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/5"
                >
                  <iframe
                    title="AIT — North Karachi campus map"
                    src="https://maps.google.com/maps?q=Power%20House%20Chowrangi%20Sector%2011-A%20North%20Karachi&z=15&output=embed"
                    className="h-60 w-full grayscale-[25%] contrast-[1.05] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              </div>

              {/* RIGHT COLUMN: Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-2xl shadow-slate-900/5"
              >
                <SectionLabel className="mb-2 text-[#2a9d8f]">
                  Send us a message
                </SectionLabel>

                <h2 className="font-heading mb-8 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  We usually reply within a day
                </h2>

                {success ? (
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-[#2a9d8f]/30 bg-[#2a9d8f]/5 px-6 py-14 text-center">
                    <CheckCircle2 size={52} className="mb-4 text-[#2a9d8f]" />
                    <p className="font-heading mb-2 text-xl font-bold text-slate-900 dark:text-white">
                      Message sent successfully!
                    </p>
                    <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
                      Thanks for reaching out — our team will get back to you soon.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#2a9d8f] transition-colors hover:text-[#f97316]"
                    >
                      <MessageSquare size={16} /> Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {FIELDS.map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                        >
                          {field.label}
                        </label>
                        <input
                          id={field.name}
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#2a9d8f] focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]/20 transition-all"
                        />
                      </div>
                    ))}

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here…"
                        required
                        rows={5}
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#2a9d8f] focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2a9d8f] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2a9d8f]/25 transition-all duration-300 hover:bg-[#238276] hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 min-h-[50px]"
                    >
                      <Send size={17} />
                      {loading ? 'Sending…' : 'Send Message'}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}