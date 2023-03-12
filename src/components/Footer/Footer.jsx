import React from "react";
import "./footer.scss";
import Contacts from '../Contacts/Contacts';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--left">
        <div className="about">
          <a className="about--head">О компании</a>
          <ul>
            <li>Партнерская программа</li>
            <li>Вакансии</li>
          </ul>
        </div>
        <div className="menu">
          <a className="menu--head">Меню</a>
          <div>
            <ul className="menu--list">
              <li>Расчёт стоимости</li>
              <li>Услуги</li>
              <li>Виджеты</li>
              <li>Интеграции</li>
              <li>Наши клиенты</li>
            </ul>
            <ul>
              <li>Кейсы</li>
              <li>Благодарственные письма</li>
              <li>Сертификаты</li>
              <li>Блог на Youtube</li>
              <li>Вопрос / Ответ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer--right">
        <a className="contact-head">Контакты</a>
        <ul>
          <li>+7 555 555-55-55</li>
          <li className="icons">
            <Contacts/>
          </li>
          <li>Москва, Путевой проезд 3с1, к 902</li>
        </ul>
        <div className='copyright'>
          <a>©WELBEX 2022. Все права защищены.</a>
          <a style={{"textDecoration":'underline'}}>Политика конфиденциальности</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
