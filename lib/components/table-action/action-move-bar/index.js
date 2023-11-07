"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionMoveBar;
var _react = require("react");
var _TableDataContext = _interopRequireDefault(require("../../../context/TableDataContext"));
var _TableShapeContext = _interopRequireDefault(require("../../../context/TableShapeContext"));
require("./style.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @description
 * @author Huang Wenjie
 * @createDate 2023-11-03
 */

function ActionMoveBar(props) {
  var _useContext = (0, _react.useContext)(_TableDataContext.default),
    tableRenderData = _useContext.tableRenderData,
    tableRef = _useContext.tableRef;
  var _useContext2 = (0, _react.useContext)(_TableShapeContext.default),
    setWidthMoveData = _useContext2.setWidthMoveData,
    initWidthChangeEvent = _useContext2.initWidthChangeEvent;
  var barIndex = props.barIndex;
  var handleMouseDown = function handleMouseDown(e) {
    if (typeof setWidthMoveData === 'function' && typeof initWidthChangeEvent === 'function') {
      setWidthMoveData({
        startX: e.clientX,
        endX: null,
        updateWidth: null
      });
      initWidthChangeEvent(barIndex);
    }
  };
  var height = (0, _react.useMemo)(function () {
    var _tableRenderData$heig, _tableRenderData$heig2, _tableRef$current;
    if (!(tableRef !== null && tableRef !== void 0 && tableRef.current)) return (_tableRenderData$heig = tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$heig2 = tableRenderData.height) === null || _tableRenderData$heig2 === void 0 ? void 0 : _tableRenderData$heig2.reduce(function (cur, next) {
      return cur + next;
    })) !== null && _tableRenderData$heig !== void 0 ? _tableRenderData$heig : 0 + 14;
    return tableRef === null || tableRef === void 0 ? void 0 : (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 ? void 0 : _tableRef$current.offsetHeight;
  }, [tableRef, tableRenderData]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "action-move-bar-hot",
    style: {
      height: height
    },
    onMouseDown: handleMouseDown,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "action-move-bar-color"
    })
  });
}