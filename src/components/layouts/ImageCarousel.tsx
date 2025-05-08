import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  interval?: number;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, interval = 5000, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    const loadStatus = new Array(images.length).fill(false);

    images.forEach((img, index) => {
      const image = new window.Image();
      image.src = img.src;
      image.onload = () => {
        loadStatus[index] = true;
        setLoaded([...loadStatus]);
      };
      image.onerror = () => {
        console.error(`Erro ao carregar imagem: ${img.src}`);
        loadStatus[index] = false;
        setLoaded([...loadStatus]);
      };
    });
  }, [images]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative w-full aspect-[16/9] ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="relative h-full w-full">
            {loaded[index] ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            ) : (
              <div className="absolute inset-0 bg-green-800 flex items-center justify-center">
                <div className="animate-pulse text-white">Carregando...</div>
              </div>
            )}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/30 to-transparent flex items-end pb-8 sm:pb-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-white">
                {image.title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-indigo-100">
                {image.subtitle}
              </p>
              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-green-800 font-medium rounded-md hover:bg-indigo-100 transition-all">
                <a href="/contactos" className="flex items-center">
                  Saiba Mais
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-4 sm:w-6'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;