import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Accept from "../components/Accept";

function Cart() {
    const location = useLocation();
    const product = location.state;
    const limit = product ? product["stock"] : 0;
    const pr = product ? product["Precio"] : 0;

    if (!product) {
        return (
            <div className="p-4">
                <h1 className="text-xl font-semibold">Sin productos</h1>
            </div>
        );
    }

    if(limit === 0) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center max-w-md">
                    <svg
                        className="w-16 h-16 text-red-400 mb-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fee2e2" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5"
                            stroke="#ef4444"
                            strokeWidth="2"
                        />
                    </svg>
                    <h1 className="text-2xl font-bold text-red-600 mb-2">Producto agotado</h1>
                    <p className="text-gray-600 text-center">
                        Lo sentimos, este producto ya no está disponible.
                    </p>
                </div>
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
                </div>
            </div>
            <Accept price={pr} limit={limit} product={product}></Accept>
        </div>
    );
}

export default Cart;