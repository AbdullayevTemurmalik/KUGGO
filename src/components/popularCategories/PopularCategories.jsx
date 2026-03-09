import React from "react";
import "./PopularCategories.css";

const PopularCategories = () => {
  const categoriesData = [
    {
      name: "Робот-пылесосы",
      price: "от 29 900 ₽",
      image: "/src/assets/photo-section.png",
    },
    {
      name: "Электровелосипеды",
      price: "от 29 900 ₽",
      image: "src/assets/photo-section-img2.png",
    },
    {
      name: "Весы",
      price: "от 29 900 ₽",
      image: "src/assets/photo-section-img3.png",
    },
    {
      name: "Робот-пылесосы",
      price: "от 29 900 ₽",
      image: "/src/assets/photo-section.png",
    },
    {
      name: "Весы",
      price: "от 29 900 ₽",
      image: "src/assets/photo-section-img3.png",
    },
    {
      name: "Робот-пылесосы",
      price: "от 29 900 ₽",
      image: "src/assets/photo-section.png",
    },
    {
      name: "Электровелосипеды",
      price: "от 29 900 ₽",
      image: "src/assets/photo-section-img2.png",
    },
    {
      name: "Весы",
      price: "от 29 900 ₽",
      image: "src/assets/photo-section-img3.png",
    },
  ];

  const CategoryCard = ({ category }) => (
    <a href={`#${category.name.toLowerCase()}`} className="category-card">
      <div className="category-image-wrapper">
        <div className="overlay"></div>
        <img
          src={category.image}
          alt={category.name}
          className="category-image"
        />
      </div>
      <div className="category-info">
        <h4 className="category-name">{category.name}</h4>
        <span className="category-price">{category.price}</span>
      </div>
    </a>
  );
  return (
    <section className="popular-categories-section">
      <div className="section-header-manager">
        <h2 className="section-title">ПОПУЛЯРНЫЕ КАТЕГОРИИ</h2>

        <div className="manager-block">
          <img
            src="/src/assets/opani-rasmi.png"
            alt="Менеджер"
            className="manager-avatar"
          />
          <div className="manager-text">
            <p>
              Менеджер ответит на любой <br /> ваш вопрос о продуктах Kugoo
            </p>
            <button className="ask-question-btn">Задать вопрос</button>
          </div>
        </div>
      </div>

      <div className="categories-grid">
        {categoriesData.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>

      <div className="see-more-wrapper">
        <button className="see-more-btn">Смотреть все</button>
      </div>
    </section>
  );
};

export default PopularCategories;
