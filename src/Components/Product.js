import React, { useContext } from "react";

import classes from "./Product.module.css";
import CartContext from "../stores/cart-context";

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const addItem = (item) => {
    console.log(item);
    cartCtx.addItem(item);
  };

  return (
    <div className={classes.card}>
      <div>Medicine List</div>
      <ul>
        {props.products.map((item) => (
          <li key={item.name}>
            <div>Name: {item.name}</div>
            <div>Description: {item.description}</div>
            <div>Price: {item.price}</div>
            <div>Available Quantity: {item.quantity}</div>
            <div>
              <button onClick={() => addItem(item)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
