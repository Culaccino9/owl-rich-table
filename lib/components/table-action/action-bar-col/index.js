"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionBarCol;
var _colAdd = _interopRequireDefault(require("./col-add"));
var _colButton = _interopRequireDefault(require("./col-button"));
require("./style.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @description 行头部的操作bar
 * @author Huang Wenjie
 * @createDate 2023-11-03
 */function ActionBarCol() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_colButton.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_colAdd.default, {})]
  });
}