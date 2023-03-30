import  { FC } from 'react';
import mobileNoise from "../assets/mobileNoise.png";
import mobileGlass from "../assets/mobileGlass.png";
import mobilePurpleLight from "../assets/mobilePurpleLight.png";
import mobileRedLight from "../assets/mobileRedLight.png";


const MobileBackground: FC = (): JSX.Element => {
  return (
    <>
      <img className="backdrop" src={mobileGlass} alt="glass" />
      <img className="noise" src={mobileNoise} alt="noise" />
      <img className="mobile-light" src={mobilePurpleLight} alt="light" />
      <img className="mobile-light" src={mobileRedLight} alt="light" />
    </>
  );
};

export default MobileBackground;