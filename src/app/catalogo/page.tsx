import React from 'react';
import ProductCard from '@/components/layouts/ProductCard';
import { products } from '@/data/product';

const CatalogoPage: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Título com margem ajustada */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-10 text-green-900">
          Nosso Catálogo de Serviços
        </h2>
        
        {/* Grid com padding interno e margens laterais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0">
          {products.map((product) => (
            <div key={product.id} className="px-1 sm:px-2 py-1 sm:py-2"> {/* Container adicional para cada card */}
              <ProductCard {...product} className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogoPage;