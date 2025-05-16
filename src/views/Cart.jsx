import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Accept from "../components/Accept";

function Cart() {
    const location = useLocation();
    const product = location.state;
    const limit = product ? product["Cant. Disp. "] : 0;
    const pr = product ? product["Precio"] : 0;

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
                </div>
            </div>
            <Accept price={pr} limit={limit} product={product}></Accept>
        </div>
    );
}

export default Cart;