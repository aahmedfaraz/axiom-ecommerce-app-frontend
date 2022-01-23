import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
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
    <div className='products'>
      <h1>All Products</h1>
      <div className='products-container'>
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <ProductItem
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

export default Products;
