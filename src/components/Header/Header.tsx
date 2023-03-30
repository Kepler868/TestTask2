import { FC } from "react";
import "./header.scss";
import logo from "../assets/logo.png";
import welbex from "../assets/welbex.png";
import Contacts from '../Contacts/Contacts';

const Header: FC = (): JSX.Element => {
  return (
    <div className="header">
      <div className="welbex">
        <div className="logo">
          <img
            style={{
              width: "35px",
              height: "24px",
            }}
            src={logo}
            alt="logo"
          />
          <img
            style={{
              width: "95px",
              height: "14px",
              marginLeft: "8px",
            }}
            src={welbex}
            alt="welbex"
          />
        </div>
        <a>
          крупный интегратор CRM <br />в Росcии и ещё 8 странах
        </a>
      </div>
      <div className="navbar">
        <div>Услуги</div>
        <div>Виджеты</div>
        <div>Интеграции</div>
        <div>Кейсы</div>
        <div className="certificates">Сертификаты</div>
      </div>

      <div className="contacts">
        <div className="phone">+7 555 555-55-55</div>
        <div className="messengers">
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Header;
