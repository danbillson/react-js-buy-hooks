import React from "react";
import Product from "./Product";
import { useStore } from "../state";

const Products = () => {
  const { products, isFetching } = useStore();

  return isFetching ? (
    "Loading..."
  ) : (
    <div className="Product-wrapper">
      {products.map((product) => (
        <Product key={product.id.toString()} product={product} />
      ))}
    </div>
  );
};

export default Products;
