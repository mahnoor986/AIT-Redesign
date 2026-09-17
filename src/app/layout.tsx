import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'AIT Institute',
  description: 'Applied technology education at AIT Institute.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}