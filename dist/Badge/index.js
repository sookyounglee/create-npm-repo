"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadgeComp = function BadgeComp(props) {
  return /*#__PURE__*/_react.default.createElement(_antd.Badge.Ribbon, {
    text: "Hippies",
    color: "purple"
  }, /*#__PURE__*/_react.default.createElement(_antd.Card, {
    title: "Pushes open the window",
    size: "small"
  }, "and raises the spyglass. ", /*#__PURE__*/_react.default.createElement("b", null, "[ ", props.value, " ]")));
};

var _default = BadgeComp;
exports.default = _default;