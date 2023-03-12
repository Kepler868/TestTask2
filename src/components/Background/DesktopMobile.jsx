import React from 'react';

import redLight from "../assets/redLight.png"
import purpleLight from "../assets/purpleLight.png";
import redBall from "../assets/redBall.png";
import redBallSmall from "../assets/redBallSmall.png";
import purpleBall from "../assets/purpleBall.png";


const DesktopMobile = () => {
    return (
      <>
        <img src={redLight} className="red-light" alt="light" />
        <img src={purpleLight} className="purple-light" alt="light" />
        <img src={redBall} className="red-ball" alt="ball" />
        <img src={purpleBall} className="purple-ball" alt="ball" />
        <img src={redBallSmall} className="red-ball-small" alt="ball" />
      </>
    );
};

export default DesktopMobile;