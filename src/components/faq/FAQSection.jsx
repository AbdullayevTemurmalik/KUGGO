import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import "./FAQSection.css";

const faqData = [
  {
    id: 1,
    question:
      "Есть ли гарантия того, что придет именно то, что было заказано? А если я оплачу и товар не придет?",
    answer:
      'Мы гарантируем, что вы получите заказанный товар. Наш интернет-магазин работает в строгом соответствии с Законом РФ "О защите прав потребителей". Все транзакции защищены.',
  },
  {
    id: 2,
    question: "У меня в городе самокаты Kugoo дешевле. Почему?",
    answer:
      "Цена может варьироваться из-за разных дилеров, наличия сервисных центров и комплектации. Мы предлагаем оригинальную продукцию с полной гарантией и поддержкой.",
  },
  {
    id: 3,
    question:
      "Как осуществляется сервисное обслуживание в моем городе? Где гарантия, что меня обслужат?",
    answer: `
      При покупке электросамоката у нас, вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание на законодательном уровне.
      
      Наши сервисные центры находятся в Москве, Санкт-Петербурге и Краснодаре. В случае поломки вы можете обратиться туда.
      
      Если вы живете в городе, где нет нашего сервисного центра, то наш специалист поможет решить вопрос удаленно. Он сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист создаст трек номер и попросит вас отправить самокат транспортной компанией CDEK. Транспортировку товара (с ремонта/на ремонт) покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.
      
      В соответствии со ст. 20 ФЗ «О защите прав потребителей» ремонт по гарантии дается не более 45 дней. В городах, где есть наш сервисный центр ремонт проводится за 3-7 дней.
    `,
    hasOpenIcon: true,
  },
  {
    id: 4,
    question: "Где находятся пункты самовывоза в моем городе?",
    answer:
      'Пункты самовывоза расположены в Москве, Санкт-Петербурге и Краснодаре. Точные адреса можно посмотреть на странице "Контакты".',
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  const Icon = isOpen && item.hasOpenIcon ? FaTimes : FaPlus;

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button className="accordion-question" onClick={() => onClick(item.id)}>
        <p>{item.question}</p>
        <Icon
          size={18}
          className={`accordion-icon ${
            isOpen && item.hasOpenIcon ? "icon-times" : ""
          }`}
        />
      </button>

      <div className="accordion-divider"></div>

      {isOpen && (
        <div className="accordion-answer">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openItemId, setOpenItemId] = useState(3);

  const handleToggle = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="faq-section-container">
      <h2 className="faq-title">ОТВЕЧАЕМ НА ВОПРОСЫ ПОКУПАТЕЛЕЙ</h2>

      <div className="accordion-list">
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openItemId === item.id}
            onClick={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
