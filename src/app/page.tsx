import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/layouts/ProductCard';
import { products } from '@/data/product';
import ImageCarousel from '@/components/layouts/ImageCarousel';

// Dados para o carrossel
const carouselImages = [
  {
    src: '/images/banner1.jpg',
    alt: 'Promoção de Verão',
    title: 'Coleção de Verão 2023',
    subtitle: 'Até 40% de desconto'
  },
  {
    src: '/images/banner2.jpg',
    alt: 'Novos Produtos',
    title: 'Novidades Chegaram',
    subtitle: 'Confira nossos lançamentos'
  },
  {
    src: '/images/banner3.jpg',
    alt: 'Frete Grátis',
    title: 'Frete Grátis',
    subtitle: 'Para compras acima de 50.000 Kz'
  }
];

const HomePage = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-16 pb-16">
      {/* Seção Hero com Carrossel */}
      <section className="relative">
        <ImageCarousel images={carouselImages} />
      </section>

      {/* Seção de Destaques */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Bem-vindo ao Meu Catálogo Online!</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Descubra nossa incrível seleção de produtos de alta qualidade cuidadosamente selecionados para você.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/catalogo" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
            Ver Catálogo
          </Link>
          <Link href="/sobre" className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-gray-50 transition-colors duration-300">
            Sobre Nós
          </Link>
        </div>
      </section>

      {/* Produtos em Destaque */}
      {featuredProducts.length > 0 && (
        <section className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/catalogo" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300">
              Ver todos os produtos →
            </Link>
          </div>
        </section>
      )}

      {/* Seção de Benefícios */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Por que escolher nosso catálogo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Entrega Rápida',
                description: 'Entregamos em todo o país em até 48h'
              },
              {
                icon: '💎',
                title: 'Qualidade Garantida',
                description: 'Produtos selecionados com rigoroso controle'
              },
              {
                icon: '🔄',
                title: 'Devolução Fácil',
                description: 'Política de devolução sem complicações'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;