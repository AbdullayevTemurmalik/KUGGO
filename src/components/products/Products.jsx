import React from "react";
import { useProductContext } from "../ProductContext";
import { useNavigate } from "react-router-dom";
import "../product/Product.css";
import {
  FaBatteryFull,
  FaCog,
  FaTachometerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    imageUrl,
    currentPrice,
    oldPrice,
    description,
    battery,
    power,
    speed,
    chargeTime,
    isHit,
    isNew,
  } = product;

  const { isWishlisted } = useProductContext();
  const navigate = useNavigate();
  const wishlisted = isWishlisted(id);
  const heartStyle = { color: wishlisted ? "#e85050" : "#666" };

  const goToDetails = () => navigate(`/product/${id}`);

  return (
    <div className="product-card">
      {isHit && <span className="tag hit-tag">ХИТ</span>}
      {isNew && <span className="tag new-tag">Новинка</span>}

      <div className="product-image-wrapper" onClick={goToDetails}>
        <img src={imageUrl} alt={name} className="product-image" />
      </div>

      <div className="product-header">
        <h3 className="product-name">{name}</h3>
        <div className="price-info">
          <span className="old-price">{oldPrice} ₽</span>
          <span className="current-price">{currentPrice} ₽</span>
        </div>
      </div>

      <p className="product-description">{description}</p>

      <div className="product-features">
        <div className="feature-item">
          <FaBatteryFull /> <span>{battery}</span>
        </div>
        <div className="feature-item">
          <FaCog /> <span>{power}</span>
        </div>
        <div className="feature-item">
          <FaTachometerAlt /> <span>{speed}</span>
        </div>
        <div className="feature-item">
          <FaClock /> <span>{chargeTime}</span>
        </div>
      </div>

      <button className="details-btn" onClick={goToDetails}>
        Подробнее <FaArrowRight />
      </button>
    </div>
  );
};

export default ProductCard;
