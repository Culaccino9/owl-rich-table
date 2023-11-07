"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ColButton;
var _react = require("react");
var _TableDataContext = _interopRequireDefault(require("../../../context/TableDataContext"));
var _TableWorkLoopContext = _interopRequireDefault(require("../../../context/TableWorkLoopContext"));
require("./style.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @description 行头部操作栏 - 扩展操作栏
 * @author Huang Wenjie
 * @createDate 2023-11-03
 */function ColButton() {
  var _tableRenderData$heig;
  var _useContext = (0, _react.useContext)(_TableDataContext.default),
    tableRenderData = _useContext.tableRenderData,
    removeRow = _useContext.removeRow;
  var _useContext2 = (0, _react.useContext)(_TableWorkLoopContext.default),
    dispatch = _useContext2.dispatch;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "rich-table-bar-col",
    children: tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$heig = tableRenderData.height) === null || _tableRenderData$heig === void 0 ? void 0 : _tableRenderData$heig.map(function (height, index) {
      var _tableRenderData$heig2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "bar-col-button",
        id: "RICH_TABLE_COL_BUTTON",
        style: {
          height: index === (tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$heig2 = tableRenderData.height) === null || _tableRenderData$heig2 === void 0 ? void 0 : _tableRenderData$heig2.length) - 1 ? height + 1 : height
        },
        tabIndex: 0,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "bar-col-button-delete",
          onClick: function onClick(e) {
            var _e$currentTarget, _e$currentTarget$pare;
            e === null || e === void 0 ? void 0 : (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : (_e$currentTarget$pare = _e$currentTarget.parentElement) === null || _e$currentTarget$pare === void 0 ? void 0 : _e$currentTarget$pare.blur();
            dispatch === null || dispatch === void 0 ? void 0 : dispatch.action(function () {
              return removeRow === null || removeRow === void 0 ? void 0 : removeRow(index);
            });
          }
        })
      }, index);
    })
  });
}