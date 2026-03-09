import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaCalendarAlt, FaEye } from "react-icons/fa";
import "./BlogSection.css";

const articleData = [
  {
    id: 1,
    title: "Kak pravilno zaryazhat elektrosamokat!",
    snippet:
      "Odin iz pervix voprosov, kotoriy volnuet posle pokupki elektrosamokata.",
    date: "01.09.2021",
    views: 90,
    imageUrl: "src/assets/comment-botton-section-img.png",
  },
  {
    id: 2,
    title: "Kak pravilno zaryazhat elektrosamokat!",
    snippet:
      "Odin iz pervix voprosov, kotoriy volnuet posle pokupki elektrosamokata.",
    date: "01.09.2021",
    views: 90,
    imageUrl: "src/assets/comment-botton-section-img2.png",
  },
  {
    id: 3,
    title: "Kak pravilno zaryazhat elektrosamokat!",
    snippet:
      "Odin iz pervix voprosov, kotoriy volnuet posle pokupki elektrosamokata.",
    date: "01.09.2021",
    views: 90,
    imageUrl: "src/assets/comment-botton-section-img.png",
  },
];

const ArticleCard = ({ title, snippet, date, views, imageUrl }) => (
  <div className="article-card">
    <div className="article-image">
      <img src={imageUrl} alt={title} />
    </div>
    <div className="article-content">
      <h3 className="article-title">{title}</h3>
      <p className="article-snippet">{snippet}</p>
      <div className="article-meta">
        <span>
          <FaCalendarAlt size={12} /> {date}
        </span>
        <span>
          <FaEye size={14} /> {views}
        </span>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  return (
    <div className="blog-section-container">
      <section className="new-articles-section">
        <h2 className="section-title">НОВЫЕ СТАТЬИ В БЛОГЕ</h2>

        <div className="articles-grid">
          {articleData.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
