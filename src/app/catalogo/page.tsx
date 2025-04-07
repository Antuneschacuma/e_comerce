import React from 'react';
import ProductCard from '@/components/layouts/ProductCard';
import { products } from '@/data/product';

const CatalogoPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Nosso Catálogo de Produtos</h2> {/* Substituindo Typography h2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CatalogoPage;