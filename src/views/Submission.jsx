import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const SubmissionPage = () => {
  const location = useLocation();
  const product = location.state?.product;
  const [formData, setFormData] = useState({ name: "", email: "", street: "", residence: "", estate: "" });
  const [status, setStatus] = useState("");

  if (!product) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 text-lg font-semibold">No product information found.</p>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      product: `${product.name} - ${product.description}`,
    };

    emailjs
      .send("service_6kaxe22", "YOUR_TEMPLATE_ID", templateParams, "YOUR_PUBLIC_KEY")
      .then(() => setStatus("Enviado con éxito!"))
      .catch(() => setStatus("Error al enviar el correo."));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Confirmar Compra</h2>
      <div className="mb-4">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="w-full h-48 object-contain mb-2"
        />
        <p className="font-semibold">{product.name}</p>
        <p className="text-gray-600">{"$" + product.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
            type="text"
            name="street"
            placeholder="Calle"
            value={formData.street}
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            required
        />
        <input 
            type="text"
            name="residence"
            placeholder="Colonia"
            value={formData.residence}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
        />
        <input 
            type="text"
            name="estate"
            placeholder="Estado"
            value={formData.estate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
        />
        <button
          type="submit"
          className="w-full bg-[#002d6e] text-white py-2 rounded hover:bg-blue-700"
        >
          Confirmar Pedido
        </button>
      </form>

      {status && <p className="mt-4 text-center font-medium">{status}</p>}
    </div>
  );
};

export default SubmissionPage;
