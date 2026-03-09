import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { toggleWishlist, isWishlisted } from "../store/slices/wishlistSlice";
import { productsData } from "../data/products";
import {
  FaHeart,
  FaHeartBroken,
  FaShoppingCart,
  FaArrowLeft,
  FaCheck,
  FaBatteryFull,
  FaCog,
  FaTachometerAlt,
  FaClock,
} from "react-icons/fa";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = productsData.find((p) => p.id === parseInt(id));
  const wishlisted = useSelector((state) => isWishlisted(state, parseInt(id)));

  if (!product) return <p className="product-not-found">Product not found</p>;

  const handleAddToCart = () => dispatch(addToCart(product));
  const handleToggleWishlist = () => dispatch(toggleWishlist(product));

  return (
    <div className="product-details-container">
      <div className="details-navigation">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Назад
        </button>
        <div className="breadcrumbs">
          Главная / {product.category} / {product.name}
        </div>
      </div>
      <div className="details-content">
        <div className="images-section">
          <div className="main-image">
            <img src={product.imageUrl} alt={product.name} />
          </div>
          {product.thumbnails && (
            <div className="image-thumbnails">
              {product.thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === 0 ? "active" : ""}`}
                >
                  <img src={thumb} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="product-info-section">
          <h1 className="product-title">{product.name}</h1>

          <div className="price-section">
            {product.oldPrice && (
              <span className="old-price">{product.oldPrice} ₽</span>
            )}
            <span className="current-price">{product.currentPrice} ₽</span>
          </div>

          <p className="full-description">{product.description}</p>

          {product.features && product.features.length > 0 && (
            <div className="key-features">
              <h3>Ключевые особенности:</h3>
              <ul className="features-list">
                {product.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheck className="check-icon" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="specifications-table">
            <h3>Характеристики:</h3>
            <table>
              <tbody>
                {product.battery && (
                  <tr>
                    <td>Батарея</td>
                    <td>{product.battery}</td>
                  </tr>
                )}
                {product.power && (
                  <tr>
                    <td>Мощность</td>
                    <td>{product.power}</td>
                  </tr>
                )}
                {product.speed && (
                  <tr>
                    <td>Скорость</td>
                    <td>{product.speed}</td>
                  </tr>
                )}
                {product.chargeTime && (
                  <tr>
                    <td>Время зарядки</td>
                    <td>{product.chargeTime}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="details-actions">
            <button className="add-to-cart-btn large" onClick={handleAddToCart}>
              <FaShoppingCart /> В корзину
            </button>
            <div className="secondary-actions">
              <button
                className={`wishlist-btn ${wishlisted ? "active" : ""}`}
                onClick={handleToggleWishlist}
              >
                {wishlisted ? <FaHeart /> : <FaHeartBroken />}{" "}
                {wishlisted ? "В избранном" : "В избранное"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
