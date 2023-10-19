import React, { useRef } from "react";

const ProductForm = (props) => {
  const Inputnameref = useRef();
  const Inputdesref = useRef();
  const Inputpriceref = useRef();
  const Inputquantityref = useRef();

  const formHandler = (e) => {
    e.preventDefault();

    let enteredName = Inputnameref.current.value;
    let enteredDes = Inputdesref.current.value;
    let enteredPrice = Inputpriceref.current.value;
    let enteredQuantity = Inputquantityref.current.value;

    props.addProducts({
      name: enteredName,
      description: enteredDes,
      price: enteredPrice,
      quantity: enteredQuantity,
    });

    Inputnameref.current.value = "";
    Inputdesref.current.value = "";
    Inputpriceref.current.value = "";
    Inputquantityref.current.value = "";
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <label htmlFor="product">Name</label>
        <input id="product" type="text" ref={Inputnameref} />
        <label htmlFor="descreption">Descreption</label>
        <input id="descreption" type="text" ref={Inputdesref} />
        <label htmlFor="price">Price</label>
        <input id="price" type="number" min={0.0} ref={Inputpriceref} />
        <label htmlFor="quantity">Available Quantity</label>
        <input id="quantity" type="number" ref={Inputquantityref} />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default ProductForm;
