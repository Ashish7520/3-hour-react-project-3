import React, { useState } from "react";

import ProductForm from "./Components/productForm";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import CartProvider from "./stores/CartProvider";

function App() {
  const [products, setProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const showAddProductHandler = () => {
    setShowAddProduct(true);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };

  const removeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div>
      <CartProvider>
        {!showAddProduct && (
          <button onClick={showAddProductHandler}>Add Products</button>
        )}
        {!showCart && <button onClick={showCartHandler}>Cart</button>}
        {showCart && <Cart onClick={removeCartHandler} />}
        {showAddProduct && <ProductForm addProducts={addProduct} />}
        <Product products={products} />
      </CartProvider>
    </div>
  );
}

export default App;
