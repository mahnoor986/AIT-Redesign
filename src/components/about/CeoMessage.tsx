'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CeoMessage() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 relative overflow-hidden transition-colors duration-500 border-t border-slate-200 dark:border-slate-800"
      aria-label="Message from our CEO"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <div className="relative max-w-xs sm:max-w-sm w-full">
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#2a9d8f]/30 to-[#f97316]/20 rounded-full blur-xl opacity-70" />
              <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-3xl border-2 border-[#2a9d8f]/30 dark:border-slate-800 shadow-2xl">
                <img
                  src="/ait-assets/Saad Bhai.jpg"
                  alt="Mohammad Saad Sheikh - CEO of AIT"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#2a9d8f] text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl border border-white/20">
                Mohammad Saad Sheikh
              </div>
            </div>
          </motion.div>

          {/* Message Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5"
          >
            <div className="flex items-center mb-6">
              <Quote className="w-10 h-10 text-[#2a9d8f] mr-3 shrink-0" />
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                Message from our <span className="text-[#2a9d8f]">CEO</span>
              </h2>
            </div>

            <div className="bg-white dark:bg-slate-900/80 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl transition duration-300 hover:shadow-2xl hover:border-[#2a9d8f]/30">
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                Al-Khair Institute of Technology (AIT) was created to empower students from underserved backgrounds with high-quality digital skills. In today's digital economy, your background doesn't define your success—your skills do.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Our mission is to build futures, transform lives, and enable Pakistani talent to lead globally. Together, we are creating lasting change.
              </p>
              
              <p className="font-semibold text-slate-900 dark:text-white text-base sm:text-lg">
                Welcome to AIT—where dreams meet opportunity.
              </p>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <a
                    href="https://www.linkedin.com/in/msaadsheikh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                  >
                    <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#2a9d8f] transition-colors">
                      Mohammad Saad Sheikh
                    </h4>
                    <p className="text-sm font-medium text-[#2a9d8f]">Founder &amp; CEO, AIT →</p>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}