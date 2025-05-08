import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layouts/Footer';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Meu Catálogo Online',
  description: 'Um catálogo de produtos incrível',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth h-full">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white`}>
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
          <Navbar />
        </header>

        {/* Conteúdo principal - simplificado */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}