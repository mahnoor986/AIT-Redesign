'use client';

import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { BadgeCheck, ShieldCheck, ScanLine, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import SectionLabel from '@/components/ui/SectionLabel';

export default function CertificationSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#264653] py-20 md:py-28 text-white transition-colors duration-500"
      aria-label="Verifiable certification"
    >
      {/* Background glow accents */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#2a9d8f]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#f97316]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel number="05" className="text-[#2a9d8f]">
              Certification
            </SectionLabel>

            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              Industry-Recognized, <span className="text-[#2a9d8f]">Verifiable</span> Certification
            </h2>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-200">
              Every AIT graduate receives a certificate carrying a unique QR code.
              Employers can scan it — or enter the certificate number online — and
              instantly confirm it is genuine. Your skills, backed by proof.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: ShieldCheck, text: 'QR-verified — impossible to fake' },
                { icon: ScanLine, text: 'Instant online verification, no login needed' },
                { icon: BadgeCheck, text: 'Recognized by employers and institutes' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-slate-100">
                  <Icon size={20} className="flex-none text-[#2a9d8f]" />
                  <span className="text-sm sm:text-base font-medium">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#2a9d8f] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2a9d8f]/30 transition-all duration-300 hover:bg-[#238276] hover:scale-105 active:scale-95 min-h-[48px]"
              >
                Verify a Certificate <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Right Certificate Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="mx-auto w-full max-w-lg"
          >
            <div className="relative rounded-2xl border border-[#2a9d8f]/40 bg-[#faf9f5] p-6 sm:p-8 shadow-2xl shadow-black/50 text-slate-800">
              {/* Inner ornamental border */}
              <div className="pointer-events-none absolute inset-3 rounded-xl border border-[#264653]/15" />

              {/* Header: Logo & Year */}
              <div className="flex items-center justify-between">
                <div className="relative h-10 w-28">
                  <img
                    src="/ait-assets/AIT_Logo_Day.png"
                    alt="AIT Logo"
                    className="h-full w-full object-contain object-left"
                  />
                </div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#264653]/60">
                  Since 1987
                </span>
              </div>

              {/* Certificate Body */}
              <div className="mt-8 text-center">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#2a9d8f]">
                  Certificate of Completion
                </p>
                <p className="mt-4 text-xs sm:text-sm text-[#264653]/70">
                  This certifies that
                </p>
                <p className="font-heading mt-2 text-2xl sm:text-3xl font-extrabold text-[#264653] tracking-wide">
                  Your Name Here
                </p>
                <p className="mx-auto mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-[#264653]/70">
                  has successfully completed the certified course at
                  Al-Khair Institute of Technology
                </p>
              </div>

              {/* Footer: Signature & QR code */}
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <div className="h-px w-28 sm:w-36 bg-[#264653]/30" />
                  <p className="mt-2 text-[11px] sm:text-xs font-medium text-[#264653]/60">
                    Authorized Signature
                  </p>
                </div>

                {/* QR code motif */}
                <div className="rounded-xl border border-[#2a9d8f]/30 bg-white p-2 shadow-lg text-center">
                  <QRCodeSVG
                    value="https://ait.iak.ngo/verify-certificate"
                    size={68}
                    fgColor="#264653"
                    bgColor="transparent"
                  />
                  <p className="mt-1 text-center text-[8px] font-bold tracking-wider text-[#2a9d8f]">
                    SCAN TO VERIFY
                  </p>
                </div>
              </div>

              {/* Seal Badge */}
              <div className="absolute -right-3 -top-3 sm:-right-4 sm:-top-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#f97316] text-white shadow-xl shadow-[#f97316]/30 ring-4 ring-white">
                <BadgeCheck size={28} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
