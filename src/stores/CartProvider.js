import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = async (item) => {
    console.log(item, "into the provider");
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) => prevItem.title === item.title
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        prevItems.push({ ...item, quantity: 1 });
      }

      return [...prevItems];
    });
  };

  const removeItemHandler = async (itemName) => {
    setItems((prevItems) => {
      console.log(prevItems);
      const updatedItems = prevItems
        .map((item) => {
          if (item.title === itemName) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);

      return updatedItems;
    });
  };

  const cartContent = {
    items: items,
    totalAmount: 0,
    totalQuantity: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <>
      <CartContext.Provider value={cartContent}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
