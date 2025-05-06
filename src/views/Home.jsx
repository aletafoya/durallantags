import React from "react";

import Hero from "../components/Hero.jsx";
import Facts from "../components/Facts.jsx";
import ProductGallery from "../components/ProductGallery.jsx";
import BrandsCarousel from "../components/BrandsCarousel.jsx";
import ContactForm from "../components/ContactForm.jsx";

function Home() {
  return (
    <>
      <Hero></Hero>
      <Facts></Facts>
      <ProductGallery></ProductGallery>
      <BrandsCarousel></BrandsCarousel>
      <section id="contacto">
        <ContactForm></ContactForm>
      </section>
    </>
  );
}

export default Home;
