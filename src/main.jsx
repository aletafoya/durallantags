import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS (for dropdowns, modals, etc.)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
  </StrictMode>
);
