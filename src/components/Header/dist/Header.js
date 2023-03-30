"use strict";
exports.__esModule = true;
require("./header.scss");
var logo_png_1 = require("../assets/logo.png");
var welbex_png_1 = require("../assets/welbex.png");
var Contacts_1 = require("../Contacts/Contacts");
var Header = function () {
    return (React.createElement("div", { className: "header" },
        React.createElement("div", { className: "welbex" },
            React.createElement("div", { className: "logo" },
                React.createElement("img", { style: {
                        width: "35px",
                        height: "24px"
                    }, src: logo_png_1["default"], alt: "logo" }),
                React.createElement("img", { style: {
                        width: "95px",
                        height: "14px",
                        marginLeft: "8px"
                    }, src: welbex_png_1["default"], alt: "welbex" })),
            React.createElement("a", null,
                "\u043A\u0440\u0443\u043F\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0442\u043E\u0440 CRM ",
                React.createElement("br", null),
                "\u0432 \u0420\u043E\u0441c\u0438\u0438 \u0438 \u0435\u0449\u0451 8 \u0441\u0442\u0440\u0430\u043D\u0430\u0445")),
        React.createElement("div", { className: "navbar" },
            React.createElement("div", null, "\u0423\u0441\u043B\u0443\u0433\u0438"),
            React.createElement("div", null, "\u0412\u0438\u0434\u0436\u0435\u0442\u044B"),
            React.createElement("div", null, "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438"),
            React.createElement("div", null, "\u041A\u0435\u0439\u0441\u044B"),
            React.createElement("div", { className: "certificates" }, "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B")),
        React.createElement("div", { className: "contacts" },
            React.createElement("div", { className: "phone" }, "+7 555 555-55-55"),
            React.createElement("div", { className: "messengers" },
                React.createElement(Contacts_1["default"], null)))));
};
exports["default"] = Header;
