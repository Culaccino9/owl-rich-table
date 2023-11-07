"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RowButton;
var _react = require("react");
var _TableDataContext = _interopRequireDefault(require("../../../context/TableDataContext"));
var _TableWorkLoopContext = _interopRequireDefault(require("../../../context/TableWorkLoopContext"));
require("./style.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @description 列头部操作栏 - 扩展操作栏
 * @author Huang Wenjie
 * @createDate 2023-11-01
 */function RowButton() {
  var _tableRenderData$widt;
  var _useContext = (0, _react.useContext)(_TableDataContext.default),
    tableRenderData = _useContext.tableRenderData,
    removeColumn = _useContext.removeColumn;
  var _useContext2 = (0, _react.useContext)(_TableWorkLoopContext.default),
    dispatch = _useContext2.dispatch;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "rich-table-bar-row",
    children: tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$widt = tableRenderData.width) === null || _tableRenderData$widt === void 0 ? void 0 : _tableRenderData$widt.map(function (width, index) {
      var _tableRenderData$widt2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "bar-row-button",
        id: "RICH_TABLE_ROW_BUTTON",
        style: {
          width: index === (tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$widt2 = tableRenderData.width) === null || _tableRenderData$widt2 === void 0 ? void 0 : _tableRenderData$widt2.length) - 1 ? width + 1 : width
        },
        tabIndex: 0,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "bar-row-button-delete",
          onClick: function onClick(e) {
            var _e$currentTarget, _e$currentTarget$pare;
            e === null || e === void 0 ? void 0 : (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : (_e$currentTarget$pare = _e$currentTarget.parentElement) === null || _e$currentTarget$pare === void 0 ? void 0 : _e$currentTarget$pare.blur();
            dispatch === null || dispatch === void 0 ? void 0 : dispatch.action(function () {
              return removeColumn === null || removeColumn === void 0 ? void 0 : removeColumn(index);
            });
          }
        })
      }, index);
    })
  });
}