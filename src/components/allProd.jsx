import React from "react";
import { Link } from "react-router-dom";

const AllProd = () => {
    return (
    <Link to="/products" className="flex justify-center">
          <div className="text-center">
              <button className="bg-[#FFC108] hover:bg-[#FFD700] text-black font-Montserrat font-bold py-3 px-8 rounded-md text-lg transition duration-300 transform hover:scale-105">
                  Ver Todos Los Productos
        </button>
        </div>
    </Link>
    );
}

export default AllProd;