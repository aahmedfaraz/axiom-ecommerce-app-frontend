import React from "react";

const Orders = () => {
  let products = [
    {
      title: "White Mug",
      quantity: 500,
      price: 100,
      category: "Mug",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
      buyerName: "Ahmed",
      buyQuantity: 100,
    },
    {
      title: "Sneakers Shoes",
      quantity: 100,
      price: 200,
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
      buyerName: "Faraz",
      buyQuantity: 50,
    },
    {
      title: "White Mug",
      quantity: 500,
      price: 100,
      category: "Mug",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
      buyerName: "Ahmed",
      buyQuantity: 20,
    },
    {
      title: "Sneakers Shoes",
      quantity: 100,
      price: 200,
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti magnam omnis quisquam culpa atque, nihil recusandae at. Enim, corrupti.",
      date: "23 January 2022",
      buyerName: "Faraz",
      buyQuantity: 10,
    },
  ];

  const getTotalPrice = () => {
    let totals = 0;
    products.forEach((product) => {
      totals += product.buyQuantity * product.price;
    });
    return totals;
  };
  return (
    <div className='orders-container'>
      <h1>Seller Orders</h1>
      <ul>
        <li>
          <span>Product Title</span>
          <span>Buyer Name</span>
          <span>Product Price</span>
          <span>Buy Quantity</span>
          <span>Total Sale</span>
          <span></span>
        </li>
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <li key={`order-item-${index}`}>
              <span>{product.title}</span>
              <span>{product.buyerName}</span>
              <span>${product.price}</span>
              <span>{product.buyQuantity}</span>
              <span>${product.buyQuantity * product.price}</span>
              <span>
                <button>x</button>
              </span>
            </li>
          ))
        ) : (
          <p>No Data Found.</p>
        )}
        <li>
          <span></span>
          <span></span>
          <span></span>
          <span>TOTALS</span>
          <span>${getTotalPrice()}</span>
          <span></span>
        </li>
      </ul>
    </div>
  );
};

export default Orders;
