import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layouts/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meu Catálogo Online',
  description: 'Um catálogo de produtos incrível.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-b from-green-950 to-green-900`}>
        {/* Navbar com padding responsivo */}
        <header className="sticky top-0 z-50 w-full">
          <Navbar />
        </header>

        {/* Conteúdo principal com responsividade completa */}
        <main className="flex-grow">
          <div className="mx-auto w-full max-w-[1920px]">
            <div className="px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12 bg-white rounded-t-lg shadow-xl min-h-[calc(100vh-140px)]">
              {children}
            </div>
          </div>
        </main>

        {/* Footer responsivo */}
        <footer className="w-full">
          <Footer />
        </footer>

        {/* Prevenção de zoom em mobile */}
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