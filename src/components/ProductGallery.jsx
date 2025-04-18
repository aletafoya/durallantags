import React from "react";
import ProductCard from "./ProductCard";

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      name: "Llanta X",
      description: "Perfecta para situaciones extremas",
      source: "public/tire_example.png",
    },
    {
      id: 2,
      name: "Llanta Y",
      description: "Ideal para carreteras mojadas",
      source: "public/tire_example.png",
    },
    {
      id: 3,
      name: "Llanta Z",
      description: "Gran rendimiento en ciudad",
      source: "public/tire_example.png",
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
            />
          ))}
        </div>

        {/* Botón "Ver Todos Los Productos" */}
        <div className="text-center">
          <button className="bg-[#FFC108] hover:bg-[#FFD700] text-black font-Montserrat font-bold py-3 px-8 rounded-md text-lg transition duration-300 transform hover:scale-105">
            Ver Todos Los Productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
