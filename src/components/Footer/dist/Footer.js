"use strict";
exports.__esModule = true;
require("./footer.scss");
var Contacts_1 = require("../Contacts/Contacts");
var Footer = function () {
    return (React.createElement("div", { className: "footer" },
        React.createElement("div", { className: "footer--left" },
            React.createElement("div", { className: "about" },
                React.createElement("a", { className: "about--head" }, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
                React.createElement("ul", null,
                    React.createElement("li", null, "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0441\u043A\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"),
                    React.createElement("li", null, "\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438"))),
            React.createElement("div", { className: "menu" },
                React.createElement("a", { className: "menu--head" }, "\u041C\u0435\u043D\u044E"),
                React.createElement("div", null,
                    React.createElement("ul", { className: "menu--list" },
                        React.createElement("li", null, "\u0420\u0430\u0441\u0447\u0451\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438"),
                        React.createElement("li", null, "\u0423\u0441\u043B\u0443\u0433\u0438"),
                        React.createElement("li", null, "\u0412\u0438\u0434\u0436\u0435\u0442\u044B"),
                        React.createElement("li", null, "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438"),
                        React.createElement("li", null, "\u041D\u0430\u0448\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B")),
                    React.createElement("ul", null,
                        React.createElement("li", null, "\u041A\u0435\u0439\u0441\u044B"),
                        React.createElement("li", null, "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430"),
                        React.createElement("li", null, "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B"),
                        React.createElement("li", null, "\u0411\u043B\u043E\u0433 \u043D\u0430 Youtube"),
                        React.createElement("li", null, "\u0412\u043E\u043F\u0440\u043E\u0441 / \u041E\u0442\u0432\u0435\u0442"))))),
        React.createElement("div", { className: "footer--right" },
            React.createElement("a", { className: "contact-head" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
            React.createElement("ul", null,
                React.createElement("li", null, "+7 555 555-55-55"),
                React.createElement("li", { className: "icons" },
                    React.createElement(Contacts_1["default"], null)),
                React.createElement("li", null, "\u041C\u043E\u0441\u043A\u0432\u0430, \u041F\u0443\u0442\u0435\u0432\u043E\u0439 \u043F\u0440\u043E\u0435\u0437\u0434 3\u04411, \u043A 902")),
            React.createElement("div", { className: 'copyright' },
                React.createElement("a", null, "\u00A9WELBEX 2022. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."),
                React.createElement("a", { style: { "textDecoration": 'underline', cursor: "pointer" } }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")))));
};
exports["default"] = Footer;
