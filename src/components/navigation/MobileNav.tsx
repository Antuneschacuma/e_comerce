'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/16/solid';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:hidden">
          <MenuIcon className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="p-6 w-64 sm:w-80"> {/* Largura do painel */}
        <SheetHeader className="mb-4">
          <SheetTitle className="text-lg font-semibold">Navegação</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-3 mb-6">
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
        </div>

        {/* Campo de Pesquisa Mobile */}
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="border border-gray-300 rounded-md py-2 px-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </div>
        </div>

        {/* Botão de Fechar */}
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;