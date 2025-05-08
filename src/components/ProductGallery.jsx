import React from "react";
import ProductCard from "./ProductCard";
import AllProd from "./allProd";

import continental from '../assets/TiresImg/CONTINENTAL.jpg';
import bridgestone from '../assets/TiresImg/BRIDGESTONE.jpg';
import michelin from '../assets/TiresImg/MICHELIN.png';

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      name: "Llanta Continental",
      description: "Perfecta para situaciones extremas",
      source: continental,
      link: "/Products",
    },
    {
      id: 2,
      name: "Llanta Bridgestone",
      description: "Ideal para carreteras mojadas",
      source: bridgestone,
      link: "/Products",
    },
    {
      id: 3,
      name: "Llanta Michelin",
      description: "Gran rendimiento en ciudad",
      source: michelin,
      link: "/Products",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#024BAB] to-[#002D6E]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título de la sección */}
        <h2 className="font-Teko text-7xl md:text-5xl text-center mb-12 text-white">
          Algunos De Nuestros Productos
        </h2>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              source={product.source}
              name={product.name}
              description={product.description}
              link={product.link}
            />
          ))}
        </div>

        {/* Botón "Ver Todos Los Productos" */}
        <AllProd />
        
      </div>
    </section>
  );
};

export default ProductGallery;
