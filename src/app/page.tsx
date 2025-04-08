'use client';
import React from 'react';
import Link from 'next/link';
import { Sparkles, Truck, Factory, CreditCard, ShieldCheck, Award } from 'lucide-react';
import { products } from '@/data/product';
import ImageCarousel from '@/components/layouts/ImageCarousel';
import ProductCard from '@/components/layouts/ProductCard';

const carouselImages = [
  {
    src: '/images/crane-4266604_1280.jpg',
    alt: 'Promoção de Cassimbo',
    title: 'Coleção do Cassimbo 2025',
    subtitle: 'Até 15% de desconto em materiais de construção',
    cta: 'Ver Ofertas'
  },
  {
    src: '/images/iron-rods-474792_1280.jpg',
    alt: 'Novos Produtos',
    title: 'Novidades Chegaram',
    subtitle: 'Confira nossos lançamentos em ferragens',
    cta: 'Novos Produtos'
  },
  {
    src: '/images/tube-8155664_1280.jpg',
    alt: 'Frete Grátis',
    title: 'Entrega Grátis',
    subtitle: 'Para compras acima de 200.000 Kz na região de Luanda',
    cta: 'Condições'
  }
];

const HomePage = () => {
  const featuredProducts = products.slice(0, 3);
  const bestSellers = products.slice(3, 6);

  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      {/* Seção Hero com Carrossel */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-transparent z-10" />
        <ImageCarousel 
          images={carouselImages} 
          interval={6000}
          className="h-[80vh] max-h-[800px]"
        />
      </section>

      {/* Seção de Marcas Parceiras (opcional) */}
      <section className="py-8 bg-indigo-900/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 hover:opacity-100 transition-opacity">
            {['Brand1', 'Brand2', 'Brand3', 'Brand4', 'Brand5'].map((brand, index) => (
              <div key={index} className="h-12 w-auto grayscale hover:grayscale-0 transition-all">
                {/* Substitua por logos reais */}
                <div className="h-full w-32 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-900 font-bold">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-100 rounded-full opacity-20" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-200 rounded-full opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Distribuidora Líder</span>
          </div>
          
          <h1 className="text-5xl font-bold text-indigo-900 mb-6 leading-tight">
            Materiais de ********* de <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Alta Qualidade
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fornecendo soluções em materiais de ********* para Angola desde 2008, com compromisso, qualidade e atendimento personalizado.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/catalogo"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl shadow-xl text-white bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Explorar Catálogo
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl shadow-md text-indigo-700 bg-white border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:shadow-lg"
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Nossa História
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4 relative inline-block">
              Produtos em Destaque
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full" />
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossos produtos mais procurados por clientes exigentes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                whatsappLink={product.whatsappLink}
                className="transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/catalogo"
              className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-semibold text-lg transition-all duration-300 group"
            >
              Ver todos os produtos
              <svg 
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">
              Por que nos escolher?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Excelência em materiais de *********** com atendimento personalizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="w-8 h-8 text-indigo-600" />,
                title: 'Entrega Rápida',
                description: 'Entregamos em toda Luanda em até 24h e no resto do país em 48h'
              },
              {
                icon: <Factory className="w-8 h-8 text-indigo-600" />,
                title: 'Fabricação Própria',
                description: 'Controle total de qualidade em nossa linha de produção'
              },
              {
                icon: <CreditCard className="w-8 h-8 text-indigo-600" />,
                title: 'Pagamento Flexível',
                description: 'Diversas opções de pagamento incluindo parcelamento'
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
                title: 'Garantia Estendida',
                description: 'Todos nossos produtos possuem garantia estendida'
              },
              {
                icon: <Award className="w-8 h-8 text-indigo-600" />,
                title: 'Qualidade Certificada',
                description: 'Materiais com certificação internacional de qualidade'
              },
              {
                icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
                title: 'Atendimento Premium',
                description: 'Equipe especializada para orientação técnica'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Mais Vendidos */}
      {bestSellers.length > 0 && (
        <section className="py-20 bg-indigo-900/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-indigo-900 mb-4">
                Mais Vendidos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Os produtos preferidos pelos nossos clientes
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {bestSellers.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  whatsappLink={product.whatsappLink}
                  className="bg-white transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
                  badge="Mais Vendido"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para se jogar na chuva?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está pronta para te ajudar a encontrar os melhores produtos deste mercado.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl shadow-lg text-indigo-900 bg-white hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
            >
              Fale Conosco
            </Link>
            <Link
              href="https://wa.me/244926425407"
              target="_blank"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl shadow-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;