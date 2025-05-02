import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layouts/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meu Catálogo Online',
  description: 'Um catálogo de produtos incrível.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-b  from-green-950 to-green-900`}>
        <Navbar />
        <main className="flex-grow container mx-auto py-8 px-4 bg-white rounded-t-lg shadow-xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}