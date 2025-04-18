import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información de contacto (izquierda) */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="font-Montserrat text-gray-800 text-lg mb-2">
              Ubicados en Av. Siglo XXI 500, 20983 El Llano, Ags.
            </p>
            <p className="font-Montserrat text-gray-800 text-lg">
              Teléfono:{" "}
              <a
                href="tel:4499990590"
                className="hover:text-[#024BAB] transition"
              >
                449 999 0590
              </a>
            </p>
          </div>

          {/* Redes sociales (derecha) */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61571098617388"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="social/facebook.png"
                alt="Facebook de DURA LLANTAS"
                className="h-10 w-10 object-contain"
              />
            </a>
            <a
              href="https://www.instagram.com/durallantags/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="social/instagram.png"
                alt="Instagram de DURA LLANTAS"
                className="h-10 w-10 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
