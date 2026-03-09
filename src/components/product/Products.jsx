import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/slices/cartSlice";
import {
  toggleWishlist,
  selectWishlistItems,
} from "../store/slices/wishlistSlice";
import { productsData } from "../data/products";
import "./Products.css";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector(selectWishlistItems);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleToggleLike = (product) => {
    dispatch(toggleWishlist(product));
  };

  const handleGoToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="products-container">
      {productsData.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.imageUrl}
            alt={product.name}
            onClick={() => handleGoToProduct(product.id)}
            style={{ cursor: "pointer" }}
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="product-prices">
            <span className="old-price">{product.oldPrice} ₽</span>
            <span className="current-price">{product.currentPrice} ₽</span>
          </div>
          <ul className="features-list">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="card-buttons">
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              🛒 Добавить
            </button>
            <button
              className={`like-button ${
                wishlistItems.find((item) => item.id === product.id)
                  ? "liked"
                  : ""
              }`}
              onClick={() => handleToggleLike(product)}
            >
              ❤️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
