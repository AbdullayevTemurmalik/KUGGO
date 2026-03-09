import React from "react";
import ProductCard from "./Products";
import { productsData } from "../data/products";

const ProductCatalog = () => {
  const limitedProducts = productsData.slice(0, 4);

  return (
    <div className="catalog-page-container">
      <div className="catalog-header2">
        <h1 className="page-title">часто покупают</h1>
      </div>

      <div className="product-grid">
        {limitedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
