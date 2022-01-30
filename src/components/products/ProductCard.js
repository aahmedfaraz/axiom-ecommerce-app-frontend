import React from "react";
import { useParams } from "react-router-dom";

const ProductCard = () => {
  const params = useParams();
  console.log(params);
  let products = [
    {
      id: "1234",
      title: "White Mug",
      quantity: 500,
      price: 100,
      category: "Mug",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
    },
    {
      id: "5678",
      title: "Sneakers Shoes",
      quantity: 100,
      price: 200,
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
    },
  ];

  let cardProduct = null;

  products.forEach((product) => {
    if (params.productID === product.id) {
      cardProduct = product;
    }
  });

  const { title, quantity, price, category, description } = cardProduct;

  return (
    <div className='product-card'>
      <h1>{title}</h1>
      <ul>
        <li>
          <span>Category</span>
          <span>{category}</span>
        </li>
        <li>
          <span>Price</span>
          <span>{price}</span>
        </li>
        <li>
          <span>Quantity</span>
          <span>{quantity}</span>
        </li>
        <li>
          <span>Description</span>
          <span>{description}</span>
        </li>
        <li>
          <span>Select Quantity</span>
          <span>
            <input
              id='select-quantity'
              type='number'
              placeholder='Enter Quantity'
            />
          </span>
        </li>
      </ul>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
