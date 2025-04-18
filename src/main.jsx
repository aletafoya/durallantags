import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Facts from "./components/Facts.jsx";
import ProductGallery from "./components/ProductGallery.jsx";
import BrandsCarousel from "./components/BrandsCarousel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Facts />
    <ProductGallery />
    <BrandsCarousel />
  </StrictMode>
);
