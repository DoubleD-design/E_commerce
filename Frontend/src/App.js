import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/component/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/component/Footer/Footer";
import Product from "./customer/component/Product/Product";
import ProductDetails from "./customer/component/ProductDetails/ProductDetails";
import Cart from "./customer/component/Cart/Cart";
import Checkout from "./customer/component/Checkout/Checkout";
import Order from "./customer/component/Order/Order";
import OrderDetails from "./customer/component/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
