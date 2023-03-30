"use strict";
exports.__esModule = true;
var redLight_png_1 = require("../assets/redLight.png");
var purpleLight_png_1 = require("../assets/purpleLight.png");
var redBall_png_1 = require("../assets/redBall.png");
var redBallSmall_png_1 = require("../assets/redBallSmall.png");
var purpleBall_png_1 = require("../assets/purpleBall.png");
var DesktopMobile = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("img", { src: redLight_png_1["default"], className: "red-light", alt: "light" }),
        React.createElement("img", { src: purpleLight_png_1["default"], className: "purple-light", alt: "light" }),
        React.createElement("img", { src: redBall_png_1["default"], className: "red-ball", alt: "ball" }),
        React.createElement("img", { src: purpleBall_png_1["default"], className: "purple-ball", alt: "ball" }),
        React.createElement("img", { src: redBallSmall_png_1["default"], className: "red-ball-small", alt: "ball" })));
};
exports["default"] = DesktopMobile;
