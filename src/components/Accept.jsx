import React from "react";
import { Link } from "react-router-dom";
import trash from "../assets/TiresImg/trash.png";
import add from "../assets/TiresImg/add.png";

const Accept = ({price, limit, product}) => {
    const [quantity, setQuantity] = React.useState(1);
    const [total, setTotal] = React.useState(price);

    const handleAdd = () => {
        const newQuantity = quantity < limit ? quantity + 1 : limit;
        setQuantity(newQuantity);
        setTotal(price * newQuantity);
    }

    const handleDelete = () => {
        if(limit === 0) return;
        const newQuantity = quantity > 1 ? quantity - 1 : 1;
        setQuantity(newQuantity);
        setTotal(price * newQuantity);
    }

    return (
        <div className="flex gap-4 mt-4">
            <button 
                className="bg-[#FFC108] hover:bg-[#FFD700] text-black 
                font-Montserrat font-bold py-3 px-8 rounded-md text-lg transition duration-300 transform hover:scale-105" 
                onClick={handleDelete}
            >
                <img src={trash} className="w-10 h-10" alt="Decrease quantity" />
            </button>
            <h3 className="bg-[#FFC108] text-black 
                font-Montserrat font-bold py-3 px-8 rounded-md text-lg flex items-center justify-center">
                {quantity}
            </h3>
            <button 
                className="bg-[#FFC108] hover:bg-[#FFD700] text-black 
                font-Montserrat font-bold py-3 px-8 rounded-md text-lg transition duration-300 transform hover:scale-105" 
                onClick={handleAdd}
            >
                <img src={add} className="w-10 h-10" alt="Increase quantity" />
            </button>
            <p className="text-xl text-gray-600 mt-2">${total.toFixed(2)}</p>
            <Link to="/submission" state={{
                    product: {
                    imageSrc: product.imageSrc,
                    name: product["Descripción"],
                    description: total
                    }
                }}>
                <button className="bg-[#CAE8E3] hover:bg-[#D5EDE9] text-black font-Montserrat font-bold
                    py-3 px-8 rounded-md text-lg transition duration-300 transform hover:scale-105">Aceptar</button>
            </Link>
        </div>
    );
}

export default Accept;