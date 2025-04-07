import React from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-10"> {/* Adicionando sticky e z-index */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo da Empresa */}
        <Link href="/" className="flex items-center text-xl font-bold text-indigo-600">
          <span className="mr-2"> {/* Simulação de um ícone */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75 9.75-4.366 9.75-9.75S17.384 2.25 12 2.25zm-2.625 6c-.54 0-.975.435-.975.975v4.5c0 .54.435.975.975.975h5.25c.54 0 .975-.435.975-.975v-4.5c0-.54-.435-.975-.975-.975h-5.25z" clipRule="evenodd" />
            </svg>
          </span>
          Minha Marca
        </Link>

        {/* Links de Navegação (para telas maiores) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-indigo-600">
            Início
          </Link>
          <Link href="/sobre" className="text-gray-700 hover:text-indigo-600">
            Sobre Nós
          </Link>
          <Link href="/catalogo" className="text-gray-700 hover:text-indigo-600">
            Catálogo
          </Link>
          <Link href="/contactos" className="text-gray-700 hover:text-indigo-600">
            Contactos
          </Link>
          {/* Campo de Pesquisa (simulado) */}
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              {/* Ícone de pesquisa (pode usar um da @heroicons/react) */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Botão para o MobileNav (para telas menores) */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;