import React from "react";
import ProductCard from "./ProductCard";
import { productsData } from "../data/products";
import "./Product.css";

const ProductCatalog = () => {
  const filteredProducts = productsData.filter((product) => product.isHit);

  return (
    <div className="catalog-page-container">
      <div className="catalog-header">
        <h1 className="page-title">ЭЛЕКТРОСАМОКАТЫ</h1>
        <div className="filter-buttons">
          <button className="filter-btn active">Хиты продаж</button>
          <button className="filter-btn">Для города</button>
          <button className="filter-btn">Для взрослых</button>
          <button className="filter-btn">Для детей</button>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
