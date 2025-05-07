import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js"; 
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "products_storage"));
      const productList = querySnapshot.docs.map(doc => ({
        id: doc["NO ART"],
        ...doc.data(),
      }));
      setProducts(productList);
    }

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Productos</h1>
      <div>
        {products.map(product => (
          <ProductCard
            name={product["Descripción"]}
            description={product["Precio"]}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
