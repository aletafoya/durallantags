import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js"; 
import ProductCard from "../components/ProductCard";

import firestoneImg from "../assets/TiresImg/FIRESTONE.png";
import michelinImg from "../assets/TiresImg/MICHELIN.png";
import goodyearImg from "../assets/TiresImg/GOODYEAR.jpg";
import bridgestoneImg from "../assets/TiresImg/BRIDGESTONE.jpg";
import continentalImg from "../assets/TiresImg/CONTINENTAL.jpg";
import hankookImg from "../assets/TiresImg/HANKOOK.png";
import pirelliImg from "../assets/TiresImg/PIRELLI.png";
import defaultImg from "../assets/TiresImg/DEFAULT.jpg";

const imageMap = {
  FIRESTONE: firestoneImg,
  MICHELIN: michelinImg,
  GOODYEAR: goodyearImg,
  BRIDGESTONE: bridgestoneImg,
  CONTINENTAL: continentalImg,
  HANKOOK: hankookImg,
  PIRELLI: pirelliImg,
};

const getBrandFromDescription = (description) => {
  if (!description) return null;
  const upperDesc = description.toUpperCase();
  return Object.keys(imageMap).find((brand) => upperDesc.includes(brand)) || null;
};

const getImagePath = (brand) => {
  return imageMap[brand] || defaultImg;
};

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const querySnapshot = await getDocs(collection(db, "products_storage"));
        const productList = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const brand = getBrandFromDescription(data["Descripción"]);
          const imageSrc = getImagePath(brand);
          return {
            id: data["NO ART"],
            ...data,
            imageSrc,
          };
        });
        setProducts(productList);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            source={product.imageSrc}
            name={product["Descripción"]}
            description={"$" + product["Precio"]}
            
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
