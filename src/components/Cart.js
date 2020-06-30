import React from "react";
import LineItem from "./LineItem";
import { useStore } from "../state";

const Cart = () => {
  const {
    checkout,
    updateQuantityInCart,
    removeLineItemInCart,
    closeCart,
    isCartOpen,
  } = useStore();

  const openCheckout = () => {
    window.open(checkout.webUrl);
  };

  const lineItems = checkout.lineItems.map((lineItem) => {
    return (
      <LineItem
        updateQuantityInCart={updateQuantityInCart}
        removeLineItemInCart={removeLineItemInCart}
        key={lineItem.id.toString()}
        lineItem={lineItem}
      />
    );
  });

  return (
    <div className={`Cart ${isCartOpen ? "Cart--open" : ""}`}>
      <header className="Cart__header">
        <h2>Your cart</h2>
        <button onClick={closeCart} className="Cart__close">
          ×
        </button>
      </header>
      <ul className="Cart__line-items">{lineItems}</ul>
      <footer className="Cart__footer">
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Subtotal</div>
          <div className="Cart-info__pricing">
            <span className="pricing">£ {checkout.subtotalPrice}</span>
          </div>
        </div>
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Taxes</div>
          <div className="Cart-info__pricing">
            <span className="pricing">£ {checkout.totalTax}</span>
          </div>
        </div>
        <div className="Cart-info clearfix">
          <div className="Cart-info__total Cart-info__small">Total</div>
          <div className="Cart-info__pricing">
            <span className="pricing">£ {checkout.totalPrice}</span>
          </div>
        </div>
        <button className="Cart__checkout button" onClick={openCheckout}>
          Checkout
        </button>
      </footer>
    </div>
  );
};

export default Cart;
