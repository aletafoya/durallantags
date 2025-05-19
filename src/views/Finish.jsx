import React from "react";
import { Link } from "react-router-dom";

const Finish = () => {
    return(
        <div className="pt-16 p-8 text-center">  
            <h1 className="text-3xl font-bold text-green-600 mb-4">
                ¡Compra realizada con éxito!
            </h1>
            <p className="mb-6">Gracias por tu compra. Te enviaremos un correo con los detalles.</p>

            <Link to="/">
                <button className="bg-[#002d6e] text-white py-2 px-4 rounded hover:bg-blue-700">
                    Regresar a inicio
                </button>
            </Link>
        </div>
    );
}

export default Finish;