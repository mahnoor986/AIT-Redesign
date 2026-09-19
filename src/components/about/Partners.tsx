// 'use client';

// import React from 'react';
// import { Handshake } from 'lucide-react';
// import { motion } from 'framer-motion';
// import PartnersMarquee from '@/components/about/PartnersMarquee';

// const PARTNER_DATA = {
//   name: 'Ali and Ayeza',
//   highlight: '&',
//   subtitle: 'Impact Fund',
//   description:
//     "The Ali and Ayeza Impact Fund is the heart behind this remarkable transformation. With a bold vision to break the cycle of poverty, this fund is changing lives across Pakistan by turning hope into lasting opportunity. In collaboration with Idara Al-Khair and our esteemed partner, Thaakat Foundation, the fund champions projects that bring quality education and essential healthcare to underserved communities. Every initiative they support is a step toward a brighter future—one where people are empowered not just to survive, but to flourish with dignity, independence, and pride. The fund believes that true progress begins when every individual is given the tools to unlock their full potential. Their unwavering commitment is not just creating change — it's creating generational impact.",
// };

// export default function Partners() {
//   return (
//     <section
//       className="relative min-h-[500px] overflow-hidden py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 border-t border-slate-200 dark:border-slate-800"
//       aria-label="Our Partners"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
//         {/* Header Content */}
//         <div className="flex flex-col items-center justify-center text-center">
//           <div className="bg-[#2a9d8f]/10 p-5 rounded-full mb-6">
//             <Handshake className="w-12 h-12 text-[#f97316]" />
//           </div>
//           <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
//             Our <span className="text-[#2a9d8f]">Partners</span>
//           </h2>
//           <div className="w-20 h-1.5 bg-[#f97316] rounded-full" />
//         </div>

//         {/* Partner Description Card */}
//         <PartnersMarquee />
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-5xl mx-auto mt-16"
//         >
//           <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 sm:p-14 md:p-16 shadow-2xl border border-slate-200 dark:border-slate-800 relative group transition-all duration-500 hover:border-[#2a9d8f]/40">
//             <div className="relative z-10">
//               <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
//                 <div>
//                   <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white border-l-8 border-[#f97316] pl-6 uppercase tracking-wider">
//                     Ali <span className="text-[#f97316]">&</span> Ayeza
//                   </h3>
//                   <p className="text-[#f97316] font-bold mt-2 ml-8 tracking-widest uppercase text-xs sm:text-sm">
//                     {PARTNER_DATA.subtitle}
//                   </p>
//                 </div>
//               </div>

//               <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg md:text-xl leading-[1.8] font-normal italic text-justify sm:text-left">
//                 &ldquo;{PARTNER_DATA.description}&rdquo;
//               </p>

//               <div className="mt-10 flex justify-end">
//                 <div className="w-32 h-1 bg-gradient-to-r from-transparent to-[#2a9d8f]/40 rounded-full" />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Decorative ambient blur */}
//       <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 bg-[#2a9d8f]/5 rounded-full blur-3xl -mr-32 -mb-32" />
//     </section>
//   );
// }
