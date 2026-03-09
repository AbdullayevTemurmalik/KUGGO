import React from "react";
import {
  FaShoppingCart,
  FaCalendarAlt,
  FaCheck,
  FaTruck,
  FaPercent,
  FaArrowRight,
} from "react-icons/fa";
import "./PriceAdvantages.css";

const advantages = [
  {
    icon: FaShoppingCart,
    title: "Х товаров в каталоге",
    text: "Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении.",
  },
  {
    icon: FaCalendarAlt,
    title: "5 способов оплаты",
    text: "Наличными при получении, картой, оплатой на сайте, через интернет-банкинг или в кредит от «Сбербанка».",
  },
  {
    icon: FaCheck,
    title: "Полная документация и гарантия 1 год",
    text: "При покупке вам выдается кассовый чек, товарный чек и гарантийный талон — эти документы дают право на гарантийное обслуживание.",
  },
  {
    icon: FaTruck,
    title: "Отправка заказа день в день",
    text: "Отправляем заказы по всей России, день в день или забирайте товар самовывозом в магазинах в Москве, Санкт-Петербурге и Краснодаре.",
  },
  {
    icon: FaPercent,
    title: "Рассрочка без переплат",
    text: "В нашем магазине можно приобрести любой товар в рассрочку",
    link: "Подробнее про условия рассрочки",
  },
];

const CatalogCard = () => (
  <div className="catalog-card">
    <div className="catalog-info">
      <h4 className="catalog-title">Больше в каталоге</h4>
      <a href="#catalog" className="catalog-link">
        Перейти <FaArrowRight />
      </a>
    </div>
    <img
      src="src/assets/banner-img.png"
      alt="Самокат"
      className="catalog-image"
    />
  </div>
);

const PriceAdvantages = () => {
  return (
    <section className="price-section">
      <div className="content-wrapper">
        <h2 className="main-title">
          ПРЕДЛАГАЕМ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ <br />
          НА ПРОДУКТЫ KUGOO ЗА СЧЕТ ПРЯМЫХ ПОСТАВОК
        </h2>
        <p className="subtitle">и заботимся об удобстве покупателей</p>

        <div className="tabs">
          <button className="tab-button active">Интернет-магазин</button>
          <button className="tab-button">Сервисный центр</button>
        </div>

        <div className="advantages-grid">
          {advantages.map((item, index) => (
            <div key={index} className="advantage-card">
              {React.createElement(item.icon, { className: "icon" })}
              <h3 className="advantage-title">{item.title}</h3>
              <p className="advantage-text">{item.text}</p>
              {item.link && (
                <a href="#details" className="advantage-link">
                  {item.link}
                </a>
              )}
            </div>
          ))}
          <CatalogCard />
        </div>
      </div>
    </section>
  );
};

export default PriceAdvantages;
