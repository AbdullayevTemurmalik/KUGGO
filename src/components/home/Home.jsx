import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaBolt, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";
import PopularCategories from '../popularCategories/PopularCategories';
import ProductCard from '../product/ProductCard';
import CartPage from '../cartpage/CartPage';


const HeroBanner = () => {
  const bannerData = [
    {
      id: 1,
      title: "ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN",
      subtitle: "ОТ ОФИЦИАЛЬНОГО ДИЛЕРА",
      delivery: "с бесплатной доставкой по РФ от 1 дня",
      tag: "Новинка",
      buttonText: "Перейти в каталог",
      image: "src/assets/banner-img.png",
    },
    {
      id: 2,
      title: "ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN",
      subtitle: "ОТ ОФИЦИАЛЬНОГО ДИЛЕРА",
      delivery: "с бесплатной доставкой по РФ от 1 дня",
      tag: "Новинка",
      buttonText: "Перейти в каталог",
       image: "src/assets/banner-img.png",
    },
  ];

  const features = [
    { title: "ГАРАНТИЯ 1 ГОД", text: "на весь ассортимент" },
    { title: "РАССРОЧКА", text: "от 6 месяцев" },
    { title: "ПОДАРКИ", text: "и бонусам к покупкам" },
  ];

  return (
    <section className="hero-section">
      <div className="banner-container">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}">${index + 1}</span>`;
            },
          }}
          className="main-swiper"
        >
          {bannerData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-content">
                <div className="slide-text-content">
                  <span className="banner-tag">{slide.tag}</span>
                  <h1 className="main-title">{slide.title}</h1>
                  <h2 className="subtitle">{slide.subtitle}</h2>
                  <p className="delivery-info">{slide.delivery}</p>
                  <button className="catalog-link">{slide.buttonText}</button>
                  <div className="test-drive-block">
                    <div className="test-drive-icon-wrapper">
                      <FaBolt className="bolt-icon" />
                    </div>
                    <div className="test-drive-text">
                      <span>Тест-драйв и обучение</span>
                      <span className="free-text">БЕСПЛАТНО</span>
                    </div>
                  </div>
                </div>
                <div className="slide-image-wrapper">
                  <img
                    src={slide.image}
                    alt="Kugoo Kirin Scooter"
                    className="scooter-image"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-controls-wrapper">
            <div className="swiper-button-prev-custom">
              <FaAngleLeft />
            </div>
            <div className="swiper-pagination-custom"></div>
            <div className="swiper-button-next-custom">
              <FaAngleRight />
            </div>
          </div>
        </Swiper>
      </div>
      <div className="features-block">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default HeroBanner;
