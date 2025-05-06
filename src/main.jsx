import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Navbar from "./components/Navbar.jsx";
import App from "./router.jsx";

import Footer from "./components/Footer.jsx";
import AppRouter from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
