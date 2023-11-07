"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionBarRow;
var _rowAdd = _interopRequireDefault(require("./row-add"));
var _rowButton = _interopRequireDefault(require("./row-button"));
require("./style.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @description
 * @author Huang Wenjie
 * @createDate 2023-11-01
 */function ActionBarRow() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_rowButton.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_rowAdd.default, {})]
  });
}