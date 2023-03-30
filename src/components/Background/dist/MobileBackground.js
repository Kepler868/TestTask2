"use strict";
exports.__esModule = true;
var mobileNoise_png_1 = require("../assets/mobileNoise.png");
var mobileGlass_png_1 = require("../assets/mobileGlass.png");
var mobilePurpleLight_png_1 = require("../assets/mobilePurpleLight.png");
var mobileRedLight_png_1 = require("../assets/mobileRedLight.png");
var MobileBackground = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("img", { className: "backdrop", src: mobileGlass_png_1["default"], alt: "glass" }),
        React.createElement("img", { className: "noise", src: mobileNoise_png_1["default"], alt: "noise" }),
        React.createElement("img", { className: "mobile-light", src: mobilePurpleLight_png_1["default"], alt: "light" }),
        React.createElement("img", { className: "mobile-light", src: mobileRedLight_png_1["default"], alt: "light" })));
};
exports["default"] = MobileBackground;
