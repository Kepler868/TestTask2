"use strict";
exports.__esModule = true;
require("./App.scss");
var Footer_1 = require("./components/Footer/Footer");
var Header_1 = require("./components/Header/Header");
var Main_1 = require("./components/Main/Main");
var DesktopMobile_1 = require("./components/Background/DesktopMobile");
var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement(DesktopMobile_1["default"], null),
        React.createElement("div", { className: "Layout" },
            React.createElement(Header_1["default"], null),
            React.createElement(Main_1["default"], null),
            React.createElement(Footer_1["default"], null))));
};
exports["default"] = App;
