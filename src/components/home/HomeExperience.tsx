import { useState } from 'react';
import { ArrowRight, Check, ChevronRight, ExternalLink, Maximize2, ShieldCheck } from 'lucide-react';
import { Link } from 'wouter';

const journey = [
  ['01', 'Apply Online', 'Fill out the registration form with your details and preferred course.'],
  ['02', 'Entrance Test', 'Complete the next step in the admissions process for your selected course.'],
  ['03', 'Enroll', 'Confirm your place and get ready to begin your AIT learning journey.'],
  ['04', 'Learn & Build', 'Develop practical skills through guided learning and real projects.'],
  ['05', 'Get Certified', 'Complete your course and receive a verifiable AIT certificate.'],
];

const campusImages = [
  { src: '/ait-assets/banner1.jpg', alt: 'Students learning together at AIT', label: 'Collaborative classrooms' },
  { src: '/ait-assets/banner2.jpg', alt: 'AIT students working on a hands-on technology project', label: 'Practical training' },
  { src: '/ait-assets/banner3.jpg', alt: 'Students learning through applied technology', label: 'Learning by doing' },
];

const newsItems = [
  { date: 'Admissions', title: 'Admissions are open for new technology learning batches', text: 'Explore current courses and take the next step toward your tech journey.', href: '/admissions' },
  { date: 'Learning', title: 'Build practical skills across AIT specializations', text: 'From computer fundamentals to web development, AI, and digital marketing.', href: '/programs' },
  { date: 'Community', title: 'Real stories from the AIT learning community', text: 'See how students and education leaders describe the AIT experience.', href: '/about' },
];

export default function HomeExperience() {
  const [selectedImage, setSelectedImage] = useState<typeof campusImages[number] | null>(null);

  return (
    <>
      <section className="bg-white py-24" id="journey">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent">Your journey</p>
            <h2 className="text-3xl font-heading font-extrabold tracking-tight text-slate-900 md:text-5xl">From your first application to a verified tech credential.</h2>
          </div>
          <div className="relative grid gap-8 md:grid-cols-5 md:gap-5">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-slate-200 md:block"></div>
            {journey.map(([number, title, text]) => (
              <div key={number} className="relative flex gap-4 md:block">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-primary text-xs font-bold text-white shadow-md">{number}</div>
                <div className="pt-0 md:pt-7">
                  <h3 className="mb-2 font-heading text-lg font-bold text-slate-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-24" id="campus">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent">Learning experience</p>
              <h2 className="text-3xl font-heading font-extrabold tracking-tight text-slate-900 md:text-5xl">A place to learn, build, and belong.</h2>
            </div>
            <Link href="/campuses" className="inline-flex min-h-[48px] items-center gap-2 font-bold text-primary hover:text-accent">Explore campuses <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-4 md:grid-cols-[1.12fr_0.88fr] md:grid-rows-2">
            <button type="button" onClick={() => setSelectedImage(campusImages[0])} className="group relative min-h-[300px] overflow-hidden rounded-2xl bg-slate-900 text-left md:row-span-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4">
              <img src={campusImages[0].src} alt={campusImages[0].alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-white">
                <span><small className="mb-1 block text-xs font-bold uppercase tracking-[0.2em] text-white/65">01</small><strong className="text-2xl font-heading">Classrooms</strong></span>
                <Maximize2 className="h-5 w-5 opacity-70 transition group-hover:opacity-100" />
              </div>
            </button>
            {campusImages.slice(1).map((image, index) => (
              <button key={image.src} type="button" onClick={() => setSelectedImage(image)} className="group relative min-h-[220px] overflow-hidden rounded-2xl bg-slate-900 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4">
                <img src={image.src} alt={image.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 text-white">
                  <span><small className="mb-1 block text-xs font-bold uppercase tracking-[0.2em] text-white/65">0{index + 2}</small><strong className="text-xl font-heading">{image.label}</strong></span>
                  <Maximize2 className="h-5 w-5 opacity-70 transition group-hover:opacity-100" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24" id="certification">
        <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/5"></div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex items-start justify-between border-b border-slate-200 pb-5">
                <img src="/ait-assets/AIT_Logo_Day.17imzcr09m~20.png" alt="Al-Khair Institute of Technology" className="h-12 w-auto object-contain object-left" />
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
              <div className="py-10 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Certificate of Completion</p>
                <p className="mt-6 font-heading text-2xl font-bold text-slate-900">Industry-recognized learning</p>
                <div className="mx-auto mt-8 h-16 w-16 border-4 border-dashed border-primary/30 p-2">
                  <div className="h-full w-full bg-[linear-gradient(45deg,#0f766e_25%,transparent_25%,transparent_75%,#0f766e_75%),linear-gradient(45deg,#0f766e_25%,transparent_25%,transparent_75%,#0f766e_75%)] bg-[length:10px_10px] bg-[position:0_0,5px_5px] opacity-80"></div>
                </div>
                <p className="mt-3 text-xs text-slate-400">Scan to verify online</p>
              </div>
              <div className="border-t border-slate-200 pt-4 text-xs text-slate-500">AIT certificate verification is available online without a login.</div>
            </div>
          </div>
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent">05 / Certification</p>
            <h2 className="text-3xl font-heading font-extrabold tracking-tight text-slate-900 md:text-5xl">Industry-recognized, verifiable certification.</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">Every AIT graduate receives a certificate carrying a unique QR code. Employers can scan it or enter the certificate number online to confirm it is genuine.</p>
            <ul className="mt-8 space-y-4 text-sm font-semibold text-slate-700">
              {['QR-verified credentials', 'Instant online verification, no login needed', 'Recognized by employers and institutes'].map((item) => <li key={item} className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-4 w-4" /></span>{item}</li>)}
            </ul>
            <a href="https://ait.iak.ngo/verify-certificate" target="_blank" rel="noreferrer" className="mt-10 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-6 font-bold text-white transition hover:bg-primary/90">Verify a Certificate <ExternalLink className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20" id="partners">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Partners &amp; recognitions</p>
            <h2 className="mt-3 text-3xl font-heading font-extrabold text-slate-900">A mission carried by trusted institutions.</h2>
          </div>
          <div className="grid grid-cols-3 items-center gap-4 md:gap-10">
            {[
              ['/ait-assets/IAK.jpg', 'Idara Al-Khair'],
              ['/ait-assets/Thakat.png', 'Thaakat Foundation'],
              ['/ait-assets/AIT.png', 'Al-Khair Institute of Technology'],
            ].map(([src, alt]) => (
              <div key={src} className="flex min-h-[100px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 md:min-h-[140px] md:p-8">
                <img src={src} alt={alt} loading="lazy" className="max-h-20 w-auto max-w-full object-contain mix-blend-multiply md:max-h-24" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24" id="news">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent">Latest from AIT</p><h2 className="text-3xl font-heading font-extrabold text-slate-900 md:text-5xl">Keep learning with us.</h2></div>
            <Link href="/about" className="hidden min-h-[48px] items-center gap-2 font-bold text-primary md:inline-flex">About AIT <ChevronRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {newsItems.map((item, index) => (
              <Link key={item.title} href={item.href} className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                <div className="mb-12 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-accent"><span>{item.date}</span><span>0{index + 1}</span></div>
                <h3 className="text-xl font-heading font-bold leading-tight text-slate-900 transition group-hover:text-primary">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">{item.text}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">Explore <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={selectedImage.label}>
          <button type="button" aria-label="Close image viewer" onClick={() => setSelectedImage(null)} className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl hover:bg-slate-100">×</button>
          <figure className="max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain" />
            <figcaption className="px-3 py-3 text-sm font-bold text-slate-900">{selectedImage.label}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}