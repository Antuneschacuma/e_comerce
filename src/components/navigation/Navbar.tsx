'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon, SearchIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implemente sua lógica de busca aqui
    console.log("Buscar por:", searchQuery);
    // Redirecionar para página de resultados ou filtrar conteúdo
  };

  return (
    <>
      {/* Barra superior decorativa */}
      <div className="w-full h-1 bg-gradient-to-r from-green-800 via-green-600 to-green-300" />
      
      {/* Navbar principal */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2 shadow-xl' : 'py-4'} bg-white/90 backdrop-blur-md border-b border-indigo-100`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            
            {/* Logo - Versão Simplificada */}
            {/* <Link href="/" className="flex items-center group">
              <div className="relative flex items-center space-x-3">
                <div className="relative w-16 h-16">
                  <img 
                    src="/images/png-transparent-gardening-logo-landscaping-design-web-design-leaf-plant-stem.png" 
                    alt="Antunes'Home - Soluções Publicitárias"
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className={`text-2xl font-extrabold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent ${isScrolled ? 'text-xl' : 'text-2xl'} transition-all`}>
                  Angro-Flor
                </span>
              </div>
            </Link> */}

            {/* Links de navegação */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { href: '/', label: 'Início' },
                { href: '/sobre', label: 'Sobre Nós' },
                { href: '/catalogo', label: 'catalogo' },
                { href: '/contactos', label: 'Contactos' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-green-600 hover:bg-indigo-50 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-green-600 w-0 group-hover:w-3/4 transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Barra de pesquisa e ações */}
            <div className="hidden lg:flex items-center space-x-4">
              {showSearch ? (
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Pesquisar serviços..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-300 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-64 transition-all"
                    autoFocus
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-600"
                  >
                    <SearchIcon className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button 
                  onClick={() => setShowSearch(true)}
                  className="p-2 rounded-full hover:bg-indigo-50 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <SearchIcon className="w-5 h-5" />
                </button>
              )}
              
              <Link 
                href="/contactos" 
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-medium"
              >
                Orçamento
              </Link>
            </div>

            {/* Botão mobile */}
            <div className="lg:hidden flex items-center space-x-4">
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-indigo-50"
              >
                <SearchIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-indigo-50"
              >
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Barra de pesquisa mobile */}
          {showSearch && (
            <div className="lg:hidden mt-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar serviços..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                  autoFocus
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600"
                >
                  <SearchIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white py-4 px-4 shadow-lg rounded-b-lg">
            <div className="flex flex-col space-y-3">
              {[
                { href: '/', label: 'Início' },
                { href: '/sobre', label: 'Sobre Nós' },
                { href: '/catalogo', label: 'catalogo' },
                { href: '/contactos', label: 'Contactos' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-green-600 hover:bg-indigo-50 transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowSearch(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;