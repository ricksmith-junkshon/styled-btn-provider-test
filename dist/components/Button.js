"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  let {
    label,
    backgroundColor = 'red'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    style: {
      backgroundColor: backgroundColor
    }
  }, label);
}

var _default = Button;
exports.default = _default;