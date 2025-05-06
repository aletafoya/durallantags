// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-10 w-auto" src={logo} alt="DURA LLANTAS Logo" />
            <span className="ml-2 text-2xl font-teko font-bold text-gray-900">
              DURA LLANTAGS
            </span>
          </div>

          {/* Menú de navegación */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className="font-montserrat text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                Inicio
              </Link>
              <Link
                to="/products"
                className="font-montserrat text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                Productos
              </Link>
              <HashLink
                to="/#contacto"
                smooth
                className="font-montserrat text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              >
                Contacto
              </HashLink>
            </div>
          </div>

          {/* Menú móvil (opcional) */}
          <div className="md:hidden">
            <button className="text-gray-900 hover:text-gray-600">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
