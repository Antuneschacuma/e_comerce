import React from 'react';
import ProductCard from '@/components/layouts/ProductCard';
import { products } from '@/data/product';

const CatalogoPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {products.map((product) => (
      <ProductCard 
        key={product.id}
        {...product}
        className="mx-1 sm:mx-0" // Adiciona margem horizontal apenas em mobile
      />
    ))}
  </div>
</div>
  );
};

export default CatalogoPage;


