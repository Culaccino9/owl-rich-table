"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;
var _react = require("react");
var _TableDataContext = _interopRequireDefault(require("../../context/TableDataContext"));
var _tableColgroup = _interopRequireDefault(require("../table-colgroup"));
var _tableTr = _interopRequireDefault(require("../table-tr"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @description table表格view
 * @author Huang Wenjie
 * @createDate 2023-10-19
 */function Table() {
  var _tableRenderData$valu;
  var _useContext = (0, _react.useContext)(_TableDataContext.default),
    tableRenderData = _useContext.tableRenderData,
    tableRef = _useContext.tableRef;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
    ref: tableRef,
    className: "rich-table",
    border: 1
    // style={{
    //   maxWidth: tableRenderData?.width?.reduce((cur, next) => cur + next),
    // }}
    ,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_tableColgroup.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
      children: tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$valu = tableRenderData.value) === null || _tableRenderData$valu === void 0 ? void 0 : _tableRenderData$valu.map(function (row, rowIndex) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableTr.default, {
          rowDataSource: row,
          rowIndex: rowIndex
        }, row.key);
      })
    })]
  });
}