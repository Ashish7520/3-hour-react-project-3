import Modal from "../Ui/Modal";
import React, { useContext } from "react";
import CartContext from "../stores/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  cartCtx.items.map((item) => {
    console.log(item.name);
  });
  return (
    <Modal onClick={props.onClick}>
      <ul>
        {cartCtx.items.map((item) => {
          <li>(console.log(item))</li>;
        })}
      </ul>
    </Modal>
  );
};

export default Cart;
