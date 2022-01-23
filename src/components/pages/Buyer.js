import React from "react";
import { Outlet } from "react-router-dom";

const Buyer = () => {
  return (
    <div className='user-container'>
      <div className='dashboard'>
        <h2>Hi Ahmed!</h2>
        <button>Switch to Seller</button>
      </div>
      <ul className='controls'>
        <li>Profile</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Buyer;
