import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ source, name, description, lnk }) => {
  return (
    <nav>
      <Link to={lnk} className="flex justify-center items-center">
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full min-h-[400px]"
      >
        {/* Imagen del producto - más grande */}
        <div className="w-full h-64 bg-gray-100 flex items-center justify-center p-4">
          <img src={source} alt={name} className="h-full object-contain" />
        </div>

        {/* Información del producto */}
        <div className="p-6 text-center flex-grow flex flex-col justify-center">
          <h3 className="font-Teko font-medium text-5xl text-[#000000] mb-2">
            {name}
          </h3>
          <p className="font-Montserrat text-gray-600">{description}</p>
        </div>
      </div>
      </Link>  
    </nav>
    
  );
};

export default ProductCard;
