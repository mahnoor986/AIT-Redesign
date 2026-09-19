// 'use client';

// import { useRef } from 'react';
// import Image from 'next/image';
// import { gsap, useGSAP } from '@/lib/gsap';
// import SectionLabel from '@/components/ui/SectionLabel';

// interface PartnerLogo {
//   name: string;
//   /** logo image path — when absent, the name renders as a wordmark */
//   logo?: string;
// }

// const PARTNERS: PartnerLogo[] = [
//   { name: 'Idara Al-Khair', logo: '/ait-assets/IAK.jpg' },
//   { name: 'Thaakat Foundation', logo: '/ait-assets/Thakat.png' },
//   { name: 'Al-Khair Institute of Technology', logo: '/ait-assets/AIT.png' },
// ];

// export default function PartnersCarousel() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);
//   const tweenRef = useRef<gsap.core.Tween | null>(null);

//   // Logos ko duplicate kiya hai taake seamless infinite continuous scroll ban sakay
//   const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

//   useGSAP(
//     () => {
//       // Fade-in animation when entering viewport
//       gsap.fromTo(
//         sectionRef.current,
//         { opacity: 0, y: 24 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.9,
//           ease: 'power3.out',
//           scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
//         }
//       );

//       // Continuous infinite horizontal auto-scroll animation
//       if (trackRef.current) {
//         tweenRef.current = gsap.to(trackRef.current, {
//           xPercent: -33.333, // 1/3rd width slide karkay loop repeat karega
//           ease: 'none',
//           duration: 15, // speed adjust karne ke liye seconds kam/zyada kar sakte hain
//           repeat: -1,
//         });
//       }
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="border-y border-Blue/10 bg-cream py-12 transition-colors duration-500 dark:border-cream/10 dark:bg-Black"
//       aria-label="Our partners and recognitions"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <SectionLabel className="justify-center">Partners & Recognitions</SectionLabel>
//       </div>

//       <div
//         className="relative mx-auto mt-8 max-w-5xl overflow-hidden px-4 sm:px-6 lg:px-8"
//         onMouseEnter={() => tweenRef.current?.pause()}
//         onMouseLeave={() => tweenRef.current?.resume()}
//       >
//         {/* Edge gradient fades */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent dark:from-Black sm:w-24" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent dark:from-Black sm:w-24" />

//         {/* Continuous auto-scrolling track */}
//         <div ref={trackRef} className="flex w-[300%] items-center">
//           {duplicatedPartners.map((partner, i) => (
//             <div
//               key={`${partner.name}-${i}`}
//               className="group flex h-24 w-1/9 shrink-0 items-center justify-center px-6 sm:w-1/9"
//               title={partner.name}
//             >
//               {partner.logo ? (
//                 <Image
//                   src={partner.logo}
//                   alt={partner.name}
//                   width={160}
//                   height={64}
//                   className="max-h-16 w-auto object-contain opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
//                 />
//               ) : (
//                 <span className="whitespace-nowrap font-typographica text-xl text-Blue/50 transition-colors duration-500 group-hover:text-Orange dark:text-cream/50">
//                   {partner.name}
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }