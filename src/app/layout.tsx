import type { Metadata } from 'next';
import './globals.css';

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
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
