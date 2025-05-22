import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-green-950 to-green-900 text-white">
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      
      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          
          {/* Coluna 1 */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-green-800/30 border border-green-700/50">
                <Sparkles className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">
                Angro-Flor
              </span>
            </div>
            <p className="text-green-300 text-sm sm:text-base">
              Transformando ideias em realidade com soluções inovadoras.
            </p>
          </div>
          
          {/* Coluna 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-green-800/50">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {['Início', 'Sobre Nós', 'Contato'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-green-300 hover:text-white text-sm sm:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coluna 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-green-800/50">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="w-4 h-4 mt-1 mr-2 text-green-400" />
                <a href="mailto:angroflor6@gmail.com" className="text-green-300 hover:text-white text-sm sm:text-base">
                  angroflor6@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="w-4 h-4 mt-1 mr-2 text-green-400" />
                <a href="tel:+244948531187" className="text-green-300 hover:text-white text-sm sm:text-base">
                  +244 948 53 11 87
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="w-4 h-4 mt-1 mr-2 text-green-400" />
                <a href="tel:+244952204917" className="text-green-300 hover:text-white text-sm sm:text-base">
                  +244 952 20 49 17
                </a>
              </div>
            </div>
          </div>
          
          {/* Coluna 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-green-800/50">
              Redes Sociais
            </h4>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="https://www.facebook.com/profile.php?id=61557006295549"
                  className="p-2 rounded-full bg-green-800/30 hover:bg-green-700/50 transition-colors"
                >
                  <Icon className="w-5 h-5 text-green-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Rodapé inferior */}
        <div className="border-t border-green-800/50 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-green-400 text-xs sm:text-sm mb-3 sm:mb-0">
            © {currentYear} Angro-flor. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <Link href="/politica-privacidade" className="text-green-400 hover:text-white text-xs sm:text-sm">
              Política de Privacidade
            </Link>
            <Link href="/termos-servico" className="text-green-400 hover:text-white text-xs sm:text-sm">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;