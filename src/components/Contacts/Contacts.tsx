import { FC } from 'react';
import phone from "../assets/phone.png";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";

const Contacts: FC = (): JSX.Element => {
  return (
    <>
      <img style={{ cursor: "pointer" }} src={telegram} alt="telegram" />
      <img src={phone} alt="phone" />
      <img src={whatsapp} alt="whatsapp" />
    </>
  );
};

export default Contacts;