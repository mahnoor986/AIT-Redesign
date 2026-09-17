import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        <span>⚡ Admissions Open for 2026 Diploma &amp; Certification Batches — Apply Before Seats Fill! </span>
        <a href="/contact" className="underline underline-offset-4 font-bold hover:text-orange-200">
          Apply Now
        </a>
      </div>
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
