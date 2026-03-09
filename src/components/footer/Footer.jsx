import React from "react";
import { FaVk, FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top-promo">
        <div className="footer-promo-content">
          <p className="promo-text">
            ОСТАВЬТЕ СВОЮ ПОЧТУ И СТАНЬТЕ ПЕРВЫМ, <br /> КТО ПОЛУЧИТ СКИДКУ НА
            НОВЫЕ САМОКАТЫ
          </p>
          <div className="promo-form">
            <input
              type="email"
              placeholder="Введите Ваш email"
              className="promo-input"
            />
            <button className="promo-button">Подписаться</button>
          </div>
        </div>
      </div>

      <div className="footer-main-nav">
        <div className="footer-content-wrapper">
          <div className="footer-column">
            <h4 className="column-title">Каталог товаров</h4>
            <ul className="column-list">
              <li>
                <a href="#">Электросамокаты</a>
              </li>
              <li>
                <a href="#">Электроскутеры</a>
              </li>
              <li>
                <a href="#">Электровелосипеды</a>
              </li>
              <li>
                <a href="#">Электровелосипеды</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="column-title">Покупателям</h4>
            <ul className="column-list">
              <li>
                <a href="#">Сервисный центр</a>
              </li>
              <li>
                <a href="#">Доставка и оплата</a>
              </li>
              <li>
                <a href="#">Рассрочка</a>
              </li>
              <li>
                <a href="#">Тест-драйв</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="column-title">Контакты</h4>
            <ul className="column-list">
              <li>
                <a href="#">Блог</a>
              </li>
              <li>
                <a href="#">Сотрудничество</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">Акции</a>
              </li>
            </ul>
          </div>

          <div className="footer-column contact-column-wrapper">
            <div className="contact-header">
              <h4 className="column-title">Контакты</h4>
              <a href="#" className="callback-link">
                Заказать звонок
              </a>
            </div>

            <div className="contact-column">
              <div className="contact-block">
                <p className="contact-block-title">Сервисный центр</p>
                <a href="tel:+78005055461">+7 (800) 505-54-61</a>
                <p className="schedule">Пн-Вс: 10:00 - 20:00</p>
              </div>

              <div className="contact-block">
                <p className="contact-block-title">Сервисный центр</p>
                <a href="tel:+74993507692">+7 (499) 350-76-92</a>
                <p className="schedule">Пн-Вс: 10:00 - 20:00</p>
              </div>

              <div className="store-address-block">
                <div className="store-address">
                  <p className="address-title">Магазин в Москве</p>
                  <p>
                    ул. Ткацкая, 5 стр. 16 <br />
                    +7 (499) 406 15 87
                  </p>
                </div>
                <div className="store-address">
                  <p className="address-title">Магазин в Санкт-Петербурге</p>
                  <p>
                    ул. Фрунзе, 2 <br />
                    +7 (499) 406 15 87
                  </p>
                </div>
                <div className="store-address">
                  <p className="address-title">Магазин в Краснодаре</p>
                  <p>
                    ул. Восточно-Кругликовская, 86 <br />
                    +7 (800) 505 54 61
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-content-wrapper footer-bottom-content">
          <div className="logo-section">
            <span className="footer-logo">KUGOO</span>
            <div className="app-badges">
              <img
                src="data:image/png;base64,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"
                alt="Google Play"
              />
              <img
                src="data:image/png;base64,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"
                alt="App Store"
              />
            </div>
          </div>

          <div className="social-section">
            <div className="social-item">
              <FaVk size={20} />
              <span>Vkontakte</span>
              <span className="social-count">3 300</span>
            </div>
            <div className="social-item">
              <FaInstagram size={20} />
              <span>Instagram</span>
              <span className="social-count">10 602</span>
            </div>
            <div className="social-item">
              <FaYoutube size={20} />
              <span>YouTube</span>
              <span className="social-count">6 603</span>
            </div>
            <div className="social-item">
              <FaTelegramPlane size={20} />
              <span>Telegram</span>
              <span className="social-count">432</span>
            </div>
          </div>

          <div className="legal-payment-section">
            <div className="legal-links">
              <a href="#">Реквизиты</a>
              <a href="#">Политика конфиденциальности</a>
            </div>
            <div className="payment-icons">
              <span className="payment-label">G Pay</span>
              <span className="payment-label">Pay</span>
              <span className="payment-label">VISA</span>
              <span className="payment-label">Mastercard</span>
            </div>
            <div className="online-chat">
              <span>Online чат:</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
