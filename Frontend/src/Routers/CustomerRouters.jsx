import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "../customer/component/ProductDetails/ProductDetails";
import Product from "../customer/component/Product/Product";
import Contact from "../pages/Contact";
import TearmsCondition from "../pages/TearmsCondition";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import About from "../pages/About";
import HomePage from "../pages/HomePage";
import Navigation from "../customer/component/Navigation/Navigation";
import Cart from "../customer/component/Cart/Cart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { customTheme, customerTheme } from "../Admin/them/customeThem";
import Order from "../customer/component/Order/Order";
import OrderDetails from "../customer/component/Order/OrderDetails";
import Checkout from "../customer/component/Checkout/Checkout";
import Footer from "../customer/component/Footer/Footer";
import PaymentSuccess from "../customer/component/PaymentSuccess/PaymentSuccess";
import RateProduct from "../customer/component/ReviewProduct/RateProduct";
import SearchProduct from "../customer/component/Product/SearchProduct";

const CustomerRouters = () => {
  const location = useLocation();

  // Only show Navigation component when not on the NotFound page
  const showNavigation = location.pathname !== "*";

  // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",`/product/${productId}`]
  return (
    <div>
      <ThemeProvider theme={customerTheme}>
        {showNavigation && <Navigation />}
        <Routes>
          <Route path="/login" element={<HomePage />}></Route>
          <Route path="/register" element={<HomePage />}></Route>

          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products/search" element={<SearchProduct />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/terms-condition" element={<TearmsCondition />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/:lavelOne/:lavelTwo/:lavelThree"
            element={<Product />}
          ></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/account/order" element={<Order />}></Route>
          <Route
            path="/account/order/:orderId"
            element={<OrderDetails />}
          ></Route>
          <Route
            path="/account/rate/:productId"
            element={<RateProduct />}
          ></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default CustomerRouters;
