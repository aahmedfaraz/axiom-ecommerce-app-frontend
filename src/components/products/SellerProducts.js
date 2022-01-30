import React from "react";
import SellerProductItem from "./SellerProductItem";

const SellerProducts = () => {
  let products = [
    {
      title: "White Mug",
      quantity: 500,
      price: 100,
      category: "Mug",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
    },
    {
      title: "Sneakers Shoes",
      quantity: 100,
      price: 200,
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
    },
    {
      title: "White Mug",
      quantity: 500,
      price: 100,
      category: "Mug",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
    },
    {
      title: "Sneakers Shoes",
      quantity: 100,
      price: 200,
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
    },
    {
      title: "White Mug",
      quantity: 500,
      price: 100,
      category: "Mug",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
    },
    {
      title: "Sneakers Shoes",
      quantity: 100,
      price: 200,
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
    },
  ];
  return (
    <div className='seller-product-container'>
      <form action=''>
        <h2>Add Product</h2>
        <div className='form-control'>
          <label htmlFor=''>Title</label>
          <input type='text' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>Quantity</label>
          <input type='number' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>Category</label>
          <input type='text' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>Price</label>
          <input type='number' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>Description</label>
          <textarea></textarea>
        </div>
        <input type='submit' value='Add' />
      </form>
      <h1>All Products</h1>
      <div className='all-seller-products'>
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <SellerProductItem
              key={`products:${index}`}
              title={product.title}
              quantity={product.quantity}
              price={product.price}
              category={product.category}
            />
          ))
        ) : (
          <p>No Products available to display</p>
        )}
      </div>
    </div>
  );
};

export default SellerProducts;
