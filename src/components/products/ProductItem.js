import React from "react";
import productImage from "../../assets/images/product.jpg";

const ProductItem = ({ title, quantity, price, category }) => {
  return (
    <div className='product-item'>
      <img src={productImage} alt='product thumbnail' />
      <div className='details'>
        <h3>{title}</h3>
        <p>Price: ${price}</p>
        <small>Stock: {quantity} units</small>
        <small>Category: {category}</small>
      </div>
    </div>
  );
};

export default ProductItem;
