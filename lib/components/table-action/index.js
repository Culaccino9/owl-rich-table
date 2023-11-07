"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableAction;
var _TableShapeContext = _interopRequireDefault(require("../../context/TableShapeContext"));
var _useRichTableShape2 = _interopRequireDefault(require("../../hooks/useRichTableShape"));
var _actionBarCol = _interopRequireDefault(require("./action-bar-col"));
var _actionBarRow = _interopRequireDefault(require("./action-bar-row"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @description row col 的操作部位
 * @author Huang Wenjie
 * @createDate 2023-11-03
 */function TableAction() {
  var _useRichTableShape = (0, _useRichTableShape2.default)(),
    setWidthMoveData = _useRichTableShape.setWidthMoveData,
    initWidthChangeEvent = _useRichTableShape.initWidthChangeEvent;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TableShapeContext.default.Provider, {
    value: {
      setWidthMoveData: setWidthMoveData,
      initWidthChangeEvent: initWidthChangeEvent
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_actionBarRow.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_actionBarCol.default, {})]
  });
}