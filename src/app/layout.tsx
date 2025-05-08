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
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white`}>
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
          <Navbar />
        </header>

        {/* Conteúdo principal - removido todos os paddings e estilos que podem causar conflitos */}
        <main className="flex-grow w-full overflow-x-hidden">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-green-900 text-white">
          <Footer />
        </footer>

        {/* Script para prevenção de zoom em mobile (opcional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('gesturestart', function(e) {
                e.preventDefault();
              });
              document.addEventListener('touchmove', function(e) {
                if(e.scale !== 1) e.preventDefault();
              }, { passive: false });
            `,
          }}
        />
      </body>
    </html>
  );
}