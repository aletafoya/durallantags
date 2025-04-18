import React from "react";

const brandLogos = [
  { src: "public/brands/firestone_logo.png", alt: "Firestone" },
  { src: "public/brands/bridgestone_logo.png", alt: "Bridgestone" },
  { src: "public/brands/michelin_logo.png", alt: "Michelin" },
  { src: "public/brands/goodyear_logo.png", alt: "Goodyear" },
  { src: "public/brands/pirelli_logo.png", alt: "Pirelli" },
];

const BrandsCarousel = () => {
  return (
    <div
      className="w-full flex justify-around items-center"
      style={{ height: "10vh" }}
    >
      {brandLogos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="h-full object-contain"
        />
      ))}
    </div>
  );
};

export default BrandsCarousel;
