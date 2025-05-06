import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Divider decorativo */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      
      {/* Footer principal */}
      <footer className="bg-gradient-to-b from-green-950 to-green-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          {/* Conteúdo do footer */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Coluna 1 - Logo e descrição */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-green-800/30 backdrop-blur-sm border border-green-700/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75 9.75-4.366 9.75-9.75S17.384 2.25 12 2.25zm-2.625 6c-.54 0-.975.435-.975.975v4.5c0 .54.435.975.975.975h5.25c.54 0 .975-.435.975-.975v-4.5c0-.54-.435-.975-.975-.975h-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">
                  Angro-Flor
                </span>
              </div>
              <p className="text-indigo-200 leading-relaxed">
                Transformando ideias em realidade digital com soluções inovadoras e designs impactantes.
              </p>
              
              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-medium text-white">Assine nossa newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="flex-grow px-4 py-2 rounded-l-lg bg-green-800/50 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-green-400"
                  />
                  <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-r-lg transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Coluna 2 - Links rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-green-800/50 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-green-400" />
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {[
                  { href: '/', label: 'Início' },
                  { href: '/sobre', label: 'Sobre Nós' },
                  { href: '/contato', label: 'Contato' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-indigo-300 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-2 h-2 rounded-full bg-green-600 mr-3 group-hover:bg-green-400 transition-colors" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Coluna 3 - Contato */}
            <div>
              <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-green-800/50">Informações de Contato</h4>
              <address className="not-italic space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 p-1 rounded-full bg-green-800/30">
                    <Mail className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-indigo-200">Email</p>
                    <a 
                      href="mailto:info@carlosZanganha.com" 
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                     angroflor6@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 p-1 rounded-full bg-green-800/30">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-indigo-200">Telefone</p>
                    <a 
                      href="tel:+244948531187" 
                      className="text-white hover:text-green-300 transition-colors"
                    >
                      +244 948 53 11 87
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 p-1 rounded-full bg-green-800/30">
                    <MapPin className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-indigo-200">Endereço</p>
                    <p className="text-white">Luanda, Angola</p>
                  </div>
                </div>
              </address>
            </div>
            
            {/* Coluna 4 - Redes sociais */}
            <div>
              <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-green-800/50">Conecte-se Conosco</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Facebook, label: 'Facebook', url: '#' },
                  { icon: Instagram, label: 'Instagram', url: '#' },
                  { icon: Twitter, label: 'Twitter', url: '#' },
                  { icon: Linkedin, label: 'LinkedIn', url: '#' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-green-800/30 hover:bg-green-700/50 transition-colors border border-green-800/50 hover:border-green-700/70"
                  >
                    <social.icon className="w-5 h-5 text-indigo-300" />
                    <span className="text-white text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
              
              {/* Horário de funcionamento */}
              <div className="bg-green-900/20 p-4 rounded-lg border border-green-800/50">
                <h5 className="font-medium text-white mb-2">Horário Comercial</h5>
                <p className="text-green-300 text-sm">Seg-Sex: 8h00 - 18h00</p>
                <p className="text-green-300 text-sm">Sábado: 9h00 - 13h00</p>
              </div>
            </div>
          </div>
          
          {/* Rodapé inferior */}
          <div className="border-t border-green-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-400 text-sm">
              © {currentYear} Angro-flor. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/politica-de-privacidade" className="text-green-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-servico" className="text-green-400 hover:text-white text-sm transition-colors">
                Termos de Serviço
              </Link>
              <Link href="/mapa-do-site" className="text-green-400 hover:text-white text-sm transition-colors">
                Mapa do Site
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;