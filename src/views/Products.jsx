import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js"; 
import ProductCard from "../components/ProductCard.jsx";

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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const leftOffset = Math.floor(maxVisiblePages / 2);
      const rightOffset = Math.ceil(maxVisiblePages / 2) - 1;
      
      let startPage = currentPage - leftOffset;
      let endPage = currentPage + rightOffset;
      
      if (startPage < 1) {
        startPage = 1;
        endPage = maxVisiblePages;
      }
      
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = totalPages - maxVisiblePages + 1;
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Productos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            source={product.imageSrc}
            name={product["Descripción"]}
            description={"$" + product["Precio"]}
            link={"/cart"}
          />
        ))}
      </div>

      {products.length > productsPerPage && (
        <div className="flex items-center justify-center mt-10 space-x-2">
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Anterior
          </button>

          {getPageNumbers().map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                currentPage === number
                  ? "bg-blue-600 text-white font-medium shadow-md"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              } transition-all duration-200`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm flex items-center"
          >
            Siguiente
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Products;