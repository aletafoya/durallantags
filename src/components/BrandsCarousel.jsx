import React from "react";

const brandLogos = [
  { src: "/brands/firestone_logo.png", alt: "Firestone" },
  { src: "/brands/bridgestone_logo.png", alt: "Bridgestone" },
  { src: "/brands/michelin_logo.png", alt: "Michelin" },
  { src: "/brands/goodyear_logo.png", alt: "Goodyear" },
  { src: "/brands/pirelli_logo.png", alt: "Pirelli" },
];

const BrandsCarousel = () => {
  return (
    <div
      className="w-full flex justify-around items-center bg-white"
      style={{ height: "12vh" }}
    >
      {brandLogos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="h-4/5 object-contain"
        />
      ))}
    </div>
  );
};

export default BrandsCarousel;
