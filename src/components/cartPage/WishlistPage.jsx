import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectWishlistItems,
  toggleWishlist,
} from "../store/slices/wishlistSlice";
import { addToCart } from "../store/slices/cartSlice";

import {
  FaHeartBroken,
  FaHeart,
  FaShoppingCart,
  FaTrash,
  FaArrowRight,
  FaHome,
} from "react-icons/fa";
import "./WishlistPage.css";

const WishlistPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishlistItems = useSelector(selectWishlistItems);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleToggleWishlist = (product) => {
    dispatch(toggleWishlist(product));
  };

  const handleGoToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <div className="breadcrumb">
          <button className="breadcrumb-btn" onClick={() => navigate("/")}>
            <FaHome /> Главная
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Избранное</span>
        </div>
        <h1 className="wishlist-title">
          ❤️ Избранное
          <span className="items-count">({wishlistItems.length})</span>
        </h1>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <div className="empty-icon">
            <FaHeartBroken />
          </div>
          <h2>Список избранного пуст</h2>
          <p>Добавьте товары, которые вам понравились!</p>
          <button className="browse-btn" onClick={() => navigate("/")}>
            Перейти в каталог
          </button>
        </div>
      ) : (
        <div className="wishlist-content">
          <div className="wishlist-info">
            <p>
              В избранном <strong>{wishlistItems.length}</strong> товар(ов)
            </p>
          </div>

          <div className="wishlist-grid">
            {wishlistItems.map((product) => (
              <div key={product.id} className="wishlist-card">
                <div className="card-image-section">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                    onClick={() => handleGoToProduct(product.id)}
                  />
                  <button
                    className="remove-btn"
                    onClick={() => handleToggleWishlist(product)}
                    title="Удалить из избранного"
                  >
                    <FaTrash />
                  </button>
                  {product.isHit && <span className="tag hit-tag">ХИТ</span>}
                  {product.isNew && (
                    <span className="tag new-tag">НОВИНКА</span>
                  )}
                </div>

                <div className="card-content">
                  <h3
                    className="product-name"
                    onClick={() => handleGoToProduct(product.id)}
                  >
                    {product.name}
                  </h3>

                  <div className="card-actions">
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      <FaShoppingCart />В корзину
                    </button>
                    <button
                      className="details-btn"
                      onClick={() => handleGoToProduct(product.id)}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="wishlist-actions">
            <button
              className="continue-shopping-btn"
              onClick={() => navigate("/")}
            >
              Продолжить покупки
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
