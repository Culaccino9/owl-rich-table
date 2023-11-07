"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableColgroup;
var _react = require("react");
var _TableDataContext = _interopRequireDefault(require("../../context/TableDataContext"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @description
 * @author Huang Wenjie
 * @createDate 2023-11-01
 */

function TableColgroup() {
  var _tableRenderData$widt;
  var _useContext = (0, _react.useContext)(_TableDataContext.default),
    tableRenderData = _useContext.tableRenderData;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("colgroup", {
    children: tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$widt = tableRenderData.width) === null || _tableRenderData$widt === void 0 ? void 0 : _tableRenderData$widt.map(function (width, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("col", {
        style: {
          width: width
        },
        id: "RICH_TABLE_COLGROUP_COl"
      }, index);
    })
  });
}