import React from "react";

const CartContext = React.createContext({
  items: "",
  totalAmount: 0,
  totalQuantity: 0,
  addItems: (item) => {},
  removeItems: (item) => {},
});

export default CartContext;
