import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Accept from "../components/Accept";

function Cart() {
    const location = useLocation();
    const product = location.state;
    const [total, setTotal] = useState(product ? product["Precio"] : 0);
    const limit = product ? product["Cant. Disp. "] : 0;
    

    if (!product) {
        return (
            <div className="p-4">
                <h1 className="text-xl font-semibold">Sin productos</h1>
            </div>
        );
    }
    
    if (total === 0) {
        return (
            <div className="p-4">
                <h1 className="bg-[#FFC108] hover:bg-[#FFD700] text-black font-Montserrat font-bold py-3 px-8 rounded-md text-lg transition duration-300 transform hover:scale-105">Sin productos</h1>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Productos</h1>
            <div className="flex gap-6">
                <img
                    src={product.imageSrc}
                    alt={product["Descripción"]}
                    className="w-64 h-64 object-contain"
                />
                <div>
                    <h2 className="text-3xl font-bold">{product["Descripción"]}</h2>
                    <p className="text-xl text-gray-600 mt-2">${total.toFixed(2)}</p>
                </div>
            </div>
            <Accept price={total} limit={limit}></Accept>
        </div>
    );
}

export default Cart;