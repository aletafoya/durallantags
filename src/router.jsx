import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./views/Home/";
import Products from "./views/Products";
import Layout from "./layouts/Layout";
import Cart from "./views/Cart";
import Submission from "./views/Submission";
import Finish from "./views/Finish";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/submission" element={<Submission />}></Route>
          <Route path="/finish" element={<Finish/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
