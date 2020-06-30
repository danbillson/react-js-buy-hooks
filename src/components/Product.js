import React, { useState } from "react";
import VariantSelector from "./VariantSelector";
import { useStore } from "../state";

const Product = ({ product }) => {
  const { addVariantToCart, client, isUpdating } = useStore();
  const defaultOptionValues = product.options.reduce((acc, cur) => ({
    ...acc,
    [cur.name]: cur.values[0].value,
  }));
  const [state, setState] = useState({ selectedOptions: defaultOptionValues });

  const findImage = (images, variantId) => {
    const primary = images[0];
    const image = images.find((image) => image.variant_ids.includes(variantId));

    return (image || primary).src;
  };

  const handleOptionChange = ({ target }) => {
    let selectedOptions = state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = client.product.helpers.variantForOptions(
      product,
      selectedOptions
    );

    setState({
      ...state,
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image,
    });
  };

  const handleQuantityChange = ({ target: { value } }) => {
    setState({
      ...state,
      selectedVariantQuantity: value,
    });
  };

  let variantImage = state.selectedVariantImage || product.images[0];
  let variant = state.selectedVariant || product.variants[0];
  let variantQuantity = state.selectedVariantQuantity || 1;
  let variantSelectors = product.options.map((option) => {
    return (
      <VariantSelector
        key={option.id.toString()}
        option={option}
        handleOptionChange={handleOptionChange}
      />
    );
  });
  return (
    <div className="Product">
      {product.images.length ? (
        <img src={variantImage.src} alt={`${product.title} product shot`} />
      ) : null}
      <h5 className="Product__title">{product.title}</h5>
      <span className="Product__price">£{variant.price}</span>
      {variantSelectors}
      <label className="Product__option">
        Quantity
        <input
          min="1"
          type="number"
          defaultValue={variantQuantity}
          onChange={handleQuantityChange}
        ></input>
      </label>
      <button
        disabled={isUpdating}
        className="Product__buy button"
        onClick={() => addVariantToCart(variant.id, variantQuantity)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
