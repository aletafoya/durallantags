import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdbqpDoeJaPq7J2KME-uq8LTALf4XOOHc",
  authDomain: "durallantags-ea1db.firebaseapp.com",
  projectId: "durallantags-ea1db",
  storageBucket: "durallantags-ea1db.firebasestorage.app",
  messagingSenderId: "6592115922",
  appId: "1:6592115922:web:bc5cb046b96765986c690b",
  measurementId: "G-7JJKXQ5JZ9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };