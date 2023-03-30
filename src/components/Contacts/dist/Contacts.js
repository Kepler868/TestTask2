"use strict";
exports.__esModule = true;
var phone_png_1 = require("../assets/phone.png");
var telegram_png_1 = require("../assets/telegram.png");
var whatsapp_png_1 = require("../assets/whatsapp.png");
var Contacts = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("img", { style: { cursor: "pointer" }, src: telegram_png_1["default"], alt: "telegram" }),
        React.createElement("img", { src: phone_png_1["default"], alt: "phone" }),
        React.createElement("img", { src: whatsapp_png_1["default"], alt: "whatsapp" })));
};
exports["default"] = Contacts;
