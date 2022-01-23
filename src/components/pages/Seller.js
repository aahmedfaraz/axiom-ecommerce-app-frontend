import React from "react";
import { Outlet } from "react-router-dom";

const Seller = () => {
  return (
    <div className='user-container'>
      <div className='dashboard'>
        <h2>Hi Ahmed!</h2>
        <button>Switch to Buyer</button>
      </div>
      <ul className='controls'>
        <li>Profile</li>
        <li>My Products</li>
        <li>Orders</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Seller;
