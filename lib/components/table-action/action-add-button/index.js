"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddButton;
require("./style.css");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * @description
 * @author Huang Wenjie
 * @createDate 2023-10-08
 */

function AddButton(props) {
  var children = props.children,
    handleClick = props.handleClick,
    width = props.width,
    childrenIsMoverBar = props.childrenIsMoverBar,
    height = props.height,
    bindId = props.bindId,
    _props$type = props.type,
    type = _props$type === void 0 ? 'row' : _props$type;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: bindId,
    style: {
      position: 'relative',
      width: width,
      height: height
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "bar-action-add-button bar-action-add-button-".concat(type),
      onClick: handleClick,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "bar-action-add-button-icon"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "bar-action-add-button-h"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "bar-action-add-button-s"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "bar-action-add-button-bar ".concat(childrenIsMoverBar ? 'bar-action-add-button-move-bar' : ''),
      children: children
    })]
  });
}