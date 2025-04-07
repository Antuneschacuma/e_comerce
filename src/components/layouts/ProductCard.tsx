import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  whatsappLink: string;
}

const ProductCard: React.FC<Product> = ({
  id,
  name,
  description,
  price,
  image,
  whatsappLink,
}) => {
  return (
    <Card key={id}>
      <CardHeader>
        <h3 className="text-lg font-semibold">{name}</h3> {/* Substituindo Typography */}
      </CardHeader>
      <CardContent className="flex justify-center">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
          <Image
            src={image}
            alt={name}
            width={300}
            height={200}
            className="object-cover rounded-md cursor-pointer"
          />
        </a>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{description}</p> {/* Estilo similar ao Typography muted */}
        <h4 className="text-xl font-bold mb-2">${price.toFixed(2)}</h4> {/* Substituindo Typography h4 */}
        <Button asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;