import React from "react";

const Cart = () => {
  let products = [
    {
      title: "White Mug",
      quantity: 500,
      price: 100,
      category: "Mug",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
      selectedQuantity: 100,
    },
    {
      title: "Sneakers Shoes",
      quantity: 100,
      price: 200,
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
      selectedQuantity: 50,
    },
    {
      title: "White Mug",
      quantity: 500,
      price: 100,
      category: "Mug",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
      selectedQuantity: 20,
    },
    {
      title: "Sneakers Shoes",
      quantity: 100,
      price: 200,
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
      selectedQuantity: 10,
    },
  ];

  const getTotalPrice = () => {
    let totals = 0;
    products.forEach((product) => {
      totals += product.selectedQuantity * product.price;
    });
    return totals;
  };

  return (
    <div className='cart-container'>
      <h1>Buyer Cart</h1>
      <ul>
        <li>
          <span>Product Title</span>
          <span>Product Price</span>
          <span>Selected Quantity</span>
          <span>Total Price</span>
        </li>
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <li key={`cart-item-${index}`}>
              <span>{product.title}</span>
              <span>${product.price}</span>
              <span>{product.selectedQuantity}</span>
              <span>${product.selectedQuantity * product.price}</span>
            </li>
          ))
        ) : (
          <p>No Product in Cart.</p>
        )}
        <li>
          <span></span>
          <span></span>
          <span>TOTALS</span>
          <span>${getTotalPrice()}</span>
        </li>
      </ul>
      <button>Buy</button>
    </div>
  );
};

export default Cart;
