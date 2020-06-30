import React from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useStore } from "./state";

const App = () => {
  const { isCartOpen, shop, openCart } = useStore();

  return (
    <div className="App">
      <header className="App__header">
        {!isCartOpen && (
          <div className="App__view-cart-wrapper">
            <button className="App__view-cart" onClick={() => openCart()}>
              Cart
            </button>
          </div>
        )}
        <div className="App__title">
          <h1>{shop.name}: React Example</h1>
          <h2>{shop.description}</h2>
        </div>
      </header>
      <Products />
      <Cart />
    </div>
  );
};

export default App;
