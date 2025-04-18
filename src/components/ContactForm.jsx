import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-gradient-to-b from-[#024BAB] to-[#002D6E] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-Teko text-3xl md:text-7xl text-center mb-12">
          Contáctanos
        </h2>

        <div className="flex flex-col lg:flex-row-reverse gap-12">
          {/* Formulario de Contacto (Derecha) */}
          <div className="lg:w-1/2">
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg h-full">
              {" "}
              {/* Añadido h-full */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="font-Montserrat block mb-2 text-gray-800"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full px-4 py-3 rounded-md font-Montserrat text-gray-800 border border-gray-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="apellido"
                    className="font-Montserrat block mb-2 text-gray-800"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    className="w-full px-4 py-3 rounded-md font-Montserrat text-gray-800 border border-gray-300"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-Montserrat block mb-2 text-gray-800"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md font-Montserrat text-gray-800 border border-gray-300"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="font-Montserrat block mb-2 text-gray-800"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows="5"
                  className="w-full px-4 py-3 rounded-md font-Montserrat text-gray-800 border border-gray-300"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#FFC108] hover:bg-[#FFD700] text-black font-Montserrat font-bold py-3 px-8 rounded-md text-lg transition duration-300"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

          {/* Horarios (Izquierda) - Ajustado para igual altura */}
          <div className="lg:w-1/2 lg:pr-12 flex items-center">
            {" "}
            {/* Añadido flex items-center */}
            <div className="p-8 w-full">
              <h3 className="font-Teko font-semibold text-6xl md:text-6xl mb-8 text-white">
                {" "}
                {/* Tamaño aumentado */}
                Nuestros Horarios
              </h3>

              <div className="space-y-8 text-white">
                {" "}
                {/* Espaciado aumentado */}
                <div>
                  <h4 className="text-4xl font-Teko font-semibold mb-3">
                    Lunes A Viernes:
                  </h4>{" "}
                  {/* Tamaño aumentado */}
                  <p className="text-2xl font-Montserrat">
                    8:00 a.m. - 7:30 p.m.
                  </p>{" "}
                  {/* Tamaño aumentado */}
                </div>
                <div>
                  <h4 className="text-4xl font-Teko font-semibold mb-3">
                    Sábado:
                  </h4>
                  <p className="text-2xl font-Montserrat">
                    8:00 a.m. - 4:00 p.m.
                  </p>
                </div>
                <div>
                  <h4 className="text-4xl font-Teko font-semibold mb-3">
                    Domingo:
                  </h4>
                  <p className="text-2xl font-Montserrat">
                    8:00 a.m. - 3:00 p.m.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
