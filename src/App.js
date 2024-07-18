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

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Order/> */}
        <OrderDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
