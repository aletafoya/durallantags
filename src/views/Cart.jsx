import React from "react";
import { useLocation } from "react-router-dom";

function Cart() {
    const location = useLocation();
    const product = location.state;

    if (!product) {
        return (
        <div className="p-4">
            <h1 className="text-xl font-semibold">Sin productos</h1>
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
            <p className="text-xl text-gray-600 mt-2">${product["Precio"]}</p>
            <p className="text-gray-500 mt-2">Código: {product["NO ART"]}</p>
            </div>
        </div>
        </div>
    );
}

export default Cart;
