import React, { useState } from "react";
import { Link } from "react-router-dom";
import { selectCartItems } from "../store/slices/cartSlice";
import "./Header.css";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
  FaTelegramPlane,
  FaViber,
  FaWhatsapp,
  FaHeart,
  FaBalanceScale,
  FaShoppingCart,
  FaAngleDown,
  FaInfoCircle,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { wishlistCount, cartCount } = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="kugoo-header">
      <div className="header-top">
        <div className="top-left">
          <a href="#service">Сервис</a>
          <a href="#cooperation">Сотрудничество</a>
          <a href="#callback">Заказать звонок</a>
        </div>
        <div className="top-center">
          <div className="top-social-icons">
            <FaMapMarkerAlt />
            <FaTelegramPlane />
            <FaViber />
            <FaWhatsapp />
          </div>
        </div>
        <div className="top-right">
          <span className="phone-number">
            +7 (495) 365-44-61
            <FaInfoCircle className="info-icon" />
          </span>
        </div>
      </div>

      <div className="header-main">
        <div className="logo-section">
          <Link to="/" className="logo">
            KUGOO
          </Link>
        </div>

        <div className="search-section">
          <button className="catalog-button" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
            Каталог
          </button>

          <div className="search-bar">
            <div className="search-dropdown">
              <button>
                Выбрать <FaAngleDown />
              </button>
            </div>
            <input type="text" placeholder="Искать самокат KUGOO" />
            <button className="search-button">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="icons-section">
          <div className="main-icons">
            <Link to="/wishlist" className="main-icon-link">
              <FaHeart className="main-icon" />
              {wishlistCount > 0 && (
                <span className="icon-badge">{wishlistCount}</span>
              )}
            </Link>
            <FaBalanceScale className="main-icon" />
            <Link to="/cart" className="cart-icon-container">
              <FaShoppingCart className="main-icon cart-icon" />
              <span>Корзина</span>
              {cartCount > 0 && (
                <span className="icon-badge cart-badge">{cartCount}</span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="header-bottom-nav">
        <a href="#about-us">О магазине</a>
        <a href="#delivery-payment">Доставка и оплата</a>
        <a href="#rent" className="active-link">
          Прокат (аренда)
        </a>
        <a href="#test-drive">Тест драйв</a>
        <a href="#blog">Блог</a>
        <a href="#contacts">Контакты</a>
        <a href="#promotions" className="promotions-link">
          Акции <span>7</span>
        </a>
      </div>

      <nav className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <a href="#about-us">О магазине</a>
        <a href="#delivery-payment">Доставка и оплата</a>
        <a href="#rent">Прокат (аренда)</a>
        <a href="#test-drive">Тест драйв</a>
        <a href="#blog">Блог</a>
        <a href="#contacts">Контакты</a>
        <a href="#promotions">Акции (7)</a>
      </nav>
    </header>
  );
};

export default Header;
