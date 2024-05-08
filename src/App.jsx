import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cart_set } from "./redux/Slices/cartSlice";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Details from "./pages/Details";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import F404 from "./pages/F404";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.localStorage.getItem("cart"))
      dispatch(cart_set(JSON.parse(window.localStorage.getItem("cart"))));
  });
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Footer />
            </>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="cart" element={<Cart />} />
          <Route path="details/:id" element={<Details />} />
        </Route>

        <Route path="*" element={<F404 />} />
      </Routes>
    </div>
  );
}
export default App;
