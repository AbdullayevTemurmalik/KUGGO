import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./FeaturesPromo.css";

const TopFeatures = () => (
  <div className="top-features-container">
    <div className="feature-card model-selection-card">
      <div className="card-content">
        <h3 className="card-title">
          ПОДБОР МОДЕЛИ <br /> ЭЛЕКТРОСАМОКАТА
        </h3>
        <p className="card-description">
          Пройдите тест и выберите <br /> электросамокат по своим критериям
        </p>
        <a href="#test" className="card-link">
          Подобрать модель <FaArrowRight />
        </a>
      </div>
    </div>
    <div className="feature-card service-card">
      <div className="card-content">
        <h3 className="card-title">
          СЕРВИСНОЕ <br /> ОБСЛУЖИВАНИЕ
        </h3>
        <p className="card-description">
          Крупнейший сервисный центр <br /> в России для продуктов Kugoo
        </p>
        <a href="#service" className="card-link">
          Подобрать модель <FaArrowRight />
        </a>
      </div>
    </div>
  </div>
);


const DeliveryPromo = () => (
  <div className="delivery-promo-container">
    <div className="promo-content">
      <span className="promo-tag">Акция</span>
      <h2 className="promo-title">
        БЕСПЛАТНАЯ ДОСТАВКА <br /> ЭЛЕКТРОСАМОКАТОВ <br /> ПО РОССИИ ДО 01.09
      </h2>
      <button className="promo-button">Подобрать</button>
    </div>
  </div>
);

const FeaturesPromo = () => {
  return (
    <section className="features-promo-section">
      <TopFeatures />
      <DeliveryPromo />
    </section>
  );
};

export default FeaturesPromo;
