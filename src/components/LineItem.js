import React from "react";
import { useStore } from "../state";

const LineItem = ({ lineItem }) => {
  const { updateQuantityInCart, removeLineItemInCart } = useStore();

  const decrementQuantity = (lineItemId) => {
    const updatedQuantity = lineItem.quantity - 1;
    updateQuantityInCart(lineItemId, updatedQuantity);
  };

  const incrementQuantity = (lineItemId) => {
    const updatedQuantity = lineItem.quantity + 1;
    updateQuantityInCart(lineItemId, updatedQuantity);
  };

  return (
    <li className="Line-item">
      <div className="Line-item__img">
        {lineItem.variant.image ? (
          <img
            src={lineItem.variant.image.src}
            alt={`${lineItem.title} product shot`}
          />
        ) : null}
      </div>
      <div className="Line-item__content">
        <div className="Line-item__content-row">
          <div className="Line-item__variant-title">
            {lineItem.variant.title}
          </div>
          <span className="Line-item__title">{lineItem.title}</span>
        </div>
        <div className="Line-item__content-row">
          <div className="Line-item__quantity-container">
            <button
              className="Line-item__quantity-update"
              onClick={() => decrementQuantity(lineItem.id)}
            >
              -
            </button>
            <span className="Line-item__quantity">{lineItem.quantity}</span>
            <button
              className="Line-item__quantity-update"
              onClick={() => incrementQuantity(lineItem.id)}
            >
              +
            </button>
          </div>
          <span className="Line-item__price">
            £ {(lineItem.quantity * lineItem.variant.price).toFixed(2)}
          </span>
          <button
            className="Line-item__remove"
            onClick={() => removeLineItemInCart(lineItem.id)}
          >
            ×
          </button>
        </div>
      </div>
    </li>
  );
};

export default LineItem;
