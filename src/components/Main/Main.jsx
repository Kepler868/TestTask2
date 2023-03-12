import React from "react";
import "./main.scss";
import line from "../assets/line.png";
import MobileBackground from '../Background/MobileBackground';

const Main = () => {
  return (
    <div className="mainpage">
      <MobileBackground/>
      <div className="left-block">
        <div className="left-block--upper">Зарабатывайте больше</div>
        <div className="left-block--medium">с WELBEX</div>
        <div className="left-block--lower">Развиваем и контролируем продажи за вас</div>
      </div>

      <div className="right-block">
        <div className="right-block--upper">
          <span>Вместе</span> с бесплатной консультацией
          <span> мы дарим:</span>
        </div>
        <div className="right-block--medium">
          <div className="benefits-desktop">
            <div>
              ВИДЖЕТЫ
              <a>30 готовых решений</a>
            </div>
            <div>
              DASHBOARD
              <a>с показателями вашего бизнеса</a>
            </div>
          </div>
          <div className="benefits-desktop">
            <div>
              SKYPE АУДИТ
              <a>отдела продаж и CRM системы</a>
            </div>
            <div>
              35 ДНЕЙ
              <a>использования CRM</a>
            </div>
          </div>
          <div className="benefits-mobile">
            <div>
              <img style={{ width: "10px", height: "1px" }} src={line} alt="line" />
              skype аудит
            </div>
            <div>
              <img style={{ width: "10px", height: "1px" }} src={line} alt="line" />
              30 виджетов
            </div>
          </div>
          <div className="benefits-mobile">
            <div>
              <img style={{ width: "10px", height: "1px" }} src={line} alt="line" />
              dashboard
            </div>
            <div>
              <img style={{ width: "10px", height: "1px" }} src={line} alt="line" />
              месяц amocrm
            </div>
          </div>
        </div>
        <button className="right-block--button">Получить консультацию</button>
      </div>
    </div>
  );
};

export default Main;
