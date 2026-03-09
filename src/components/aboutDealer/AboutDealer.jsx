import React from "react";
import { FaCheck } from "react-icons/fa";
import "./AboutDealer.css";

const AboutDealer = () => {
  const advantages = [
    "цены от завода-изготовителя Jilong;",
    "бесплатный тест-драйв самокатов;",
    "фирменную гарантию 1 год;",
    "ремонт и обслуживание от 1 дня в собственном сервисном центре;",
    "более 1 000 запчастей и аксессуаров в наличии.",
  ];

  return (
    <section className="about-dealer-section">
      <div className="dealer-content-wrapper">
        <div className="dealer-image-block">
          <img
            src="src/assets/big-img-section.png "
            alt="Люди на самокате"
            className="dealer-main-image"
          />
          <div className="test-drive-overlay">
            <div className="overlay-text">
              <h4 className="overlay-title">Тест-драйв в Москве</h4>
              <p className="overlay-subtitle">
                Оцени все преимущества самокатов лично
              </p>
            </div>
            <a href="#more" className="overlay-button">
              Подробнее
            </a>
          </div>
        </div>

        <div className="dealer-info-block">
          <h1 className="dealer-title">
            KUGOO-RUSSIA — ПЕРВЫЙ <br />
            ОФИЦИАЛЬНЫЙ ДИЛЕР <br />
            KUGOO KIRIN В РОССИИ
          </h1>

          <p className="dealer-text">
            Наша цель предоставить полный ассортимент современной продукции{" "}
            <br />
            Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить{" "}
            <br />
            комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся{" "}
            <br />к сервисному обслуживанию.
          </p>

          <div className="advantages-list">
            {advantages.map((item, index) => (
              <p key={index} className="advantage-item">
                <FaCheck className="advantage-icon" />
                {item}
              </p>
            ))}
          </div>

          <button className="certificate-button">Смотреть сертификат</button>
        </div>
      </div>
    </section>
  );
};

export default AboutDealer;
