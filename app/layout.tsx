import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Carmates | Find Your Next Mate on Wheels',
  description: 'Every car comes with a 150-point inspection and a real human mate. Find your next vehicle with Carmates.',
  keywords: 'car sales, vehicles, used cars, Australia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <Header />
        <main className="min-h-screen bg-slate-950">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
