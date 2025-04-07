import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Catálogo Online</h3>
            <p className="text-gray-400">
              A melhor seleção de produtos para você.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Início</Link></li>
              <li><Link href="/catalogo" className="text-gray-400 hover:text-white transition">Catálogo</Link></li>
              <li><Link href="/sobre" className="text-gray-400 hover:text-white transition">Sobre Nós</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-white transition">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <address className="text-gray-400 not-italic">
              <p>Email: info@catalogo.com</p>
              <p>Telefone: +244 123 456 789</p>
              <p>Luanda, Angola</p>
            </address>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Catálogo Online. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;