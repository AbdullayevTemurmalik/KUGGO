import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectCartItems,
  selectCartTotal,
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../store/slices/cartSlice";

import {
  FaShoppingCart,
  FaTrash,
  FaPlus,
  FaMinus,
  FaHome,
  FaArrowRight,
  FaCreditCard,
} from "react-icons/fa";
import "./CartPage.css";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    dispatch(updateQuantity({ productId, newQuantity }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleGoToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const formatPrice = (price) => {
    return price.toLocaleString("ru-RU");
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="breadcrumb">
          <button className="breadcrumb-btn" onClick={() => navigate("/")}>
            <FaHome /> Главная
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Корзина</span>
        </div>
        <h1 className="cart-title">
          🛒 Корзина
          <span className="items-count">({cartItems.length})</span>
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">
            <FaShoppingCart />
          </div>
          <h2>Корзина пуста</h2>
          <p>Перейдите в каталог и добавьте товары в корзину!</p>
          <button className="browse-btn" onClick={() => navigate("/")}>
            Перейти в каталог
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-section">
            <div className="cart-header-info">
              <h2>Товары в корзине</h2>
              <button className="clear-cart-btn" onClick={handleClearCart}>
                Очистить корзину
              </button>
            </div>

            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div
                    className="item-image"
                    onClick={() => handleGoToProduct(item.id)}
                  >
                    <img src={item.imageUrl} alt={item.name} />
                  </div>

                  <div className="item-details">
                    <h3
                      className="item-name"
                      onClick={() => handleGoToProduct(item.id)}
                    >
                      {item.name}
                    </h3>
                    <div className="item-features">
                      <span>Батарея: {item.battery}</span>
                      <span>Мощность: {item.power}</span>
                    </div>

                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  <div className="item-price-section">
                    <div className="price-info">
                      <span className="current-price">
                        {item.currentPrice} ₽
                      </span>
                      <span className="item-total">
                        {formatPrice(
                          parseInt(item.currentPrice.replace(/\s/g, "")) *
                            item.quantity
                        )}{" "}
                        ₽
                      </span>
                    </div>
                    <button
                      className="remove-item-btn"
                      onClick={() => handleRemoveItem(item.id)}
                      title="Удалить из корзины"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Итого</h3>

              <div className="summary-row">
                <span>
                  Товары (
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)} шт.)
                </span>
                <span>{formatPrice(total)} ₽</span>
              </div>

              <div className="summary-row">
                <span>Доставка</span>
                <span className="free-shipping">Бесплатно</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Общая сумма</span>
                <span className="total-price">{formatPrice(total)} ₽</span>
              </div>

              <button className="checkout-btn">
                <FaCreditCard />
                Перейти к оформлению
              </button>

              <button
                className="continue-shopping-btn"
                onClick={() => navigate("/")}
              >
                <FaArrowRight />
                Продолжить покупки
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
