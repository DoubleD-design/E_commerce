// import { Navigation } from "mdi-material-ui";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TearmsCondition from "../pages/TearmsCondition";
import Contact from "../pages/Contact";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Cart from "../customer/components/Cart/Cart";

import DemoAdmin from "../Admin/Views/DemoAdmin";
import AdminPannel from "../Admin/AdminPannel";
import Navigation from "../customer/components/Navigation/Navigation";

const Routers = () => {
  return (
    <div>
        <div>
             <Navigation/>
        </div>
       <div className="">
        <Routes>

        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="/terms-condition" element={<TearmsCondition/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/men" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      

        <Route path="/admin" element={<AdminPannel/>}></Route>
        <Route path="/demo" element={<DemoAdmin/>}></Route>

      </Routes>
       </div>
      
    </div>
  );
};

export default Routers;
