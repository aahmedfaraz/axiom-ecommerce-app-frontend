import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Root from "./components/pages/Root";
import Buyer from "./components/pages/Buyer";
import Seller from "./components/pages/Seller";
import Profile from "./components/layout/Profile";
import Products from "./components/products/Products";
import SellerProducts from "./components/products/SellerProducts";
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";
import NotFound from "./components/layout/NotFound";
import ProductCard from "./components/products/ProductCard";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<Root />}>
            <Route path='buyer' element={<Buyer />}>
              <Route path='profile' element={<Profile />} />
              <Route path='products' element={<Products />} />
              <Route path='products/:productID' element={<ProductCard />} />
              <Route path='cart' element={<Cart />} />
            </Route>
            <Route path='seller' element={<Seller />}>
              <Route path='profile' element={<Profile />} />
              <Route path='products' element={<SellerProducts />} />
              <Route path='orders' element={<Orders />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
