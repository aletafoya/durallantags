import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";
import { writeFileSync } from 'fs';

const tire = new Set();
const brands = new Set();
const entire = new Set();

async function fetchProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, "products_storage"));
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const ftc = data["Descripción"] || "";
      if (!ftc.trim()) return;

      const words = ftc.trim().split(/\s+/);
      let last = words[words.length - 1];

      if (words[0][0] - '0' <= 9) {
        const ap = parseInt(words[0]);
        if (!isNaN(ap)) tire.add(ap);
      }

      let non = false;
      if (last[0] - '0' <= 9) {
        last = words[words.length - 2];

      } else {
        let pos = false;
        for(let i = 0; i < last.length; i++) {
          if(last[i] - '0' <= 9) {
            pos = true;
            break;
          } 
        }

        if(!pos) brands.add(last);
      }

    });

    writeFileSync('Records.json', JSON.stringify({
      numbers: Array.from(tire),
      brands: Array.from(brands),
      entire: Array.from(entire)
    }, null, 3));

    process.exit(0); 

  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

fetchProducts();