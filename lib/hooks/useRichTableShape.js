"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRichTableShape;
var _react = require("react");
var _TableDataContext = _interopRequireDefault(require("../context/TableDataContext"));
var _TableWorkLoopContext = _interopRequireDefault(require("../context/TableWorkLoopContext"));
var _shape = require("../constants/shape");
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 处理形状大小的hook
 * @returns
 */

var initWidthMoveRef = {
  startX: null,
  endX: null,
  updateWidth: null
};
function useRichTableShape() {
  var _useContext = (0, _react.useContext)(_TableDataContext.default),
    tableRenderData = _useContext.tableRenderData,
    setWidthData = _useContext.setWidthData;
  var _useContext2 = (0, _react.useContext)(_TableWorkLoopContext.default),
    dispatch = _useContext2.dispatch;
  var widthMoveRef = (0, _react.useRef)(initWidthMoveRef);
  var initWidthChangeEvent = function initWidthChangeEvent(barIndex) {
    var mousemove = _lodash.default.throttle(function (e) {
      if (typeof widthMoveRef.current.startX === 'number') {
        var _document$querySelect, _document$querySelect2, _document$querySelect3, _tableRenderData$widt, _tableRenderData$widt2;
        var currentCell = (_document$querySelect = document.querySelectorAll('#RICH_TABLE_COLGROUP_COl')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect[barIndex];
        var currentAction = (_document$querySelect2 = document.querySelectorAll('#RICH_TABLE_ROW_BUTTON')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2[barIndex];
        var currentAdd = (_document$querySelect3 = document.querySelectorAll('#RICH_TABLE_ROW_ADD')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3[barIndex];
        if (!currentCell) return;
        var currentX = e.clientX;
        var move = currentX - widthMoveRef.current.startX;
        var setWidth = ((_tableRenderData$widt = tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$widt2 = tableRenderData.width) === null || _tableRenderData$widt2 === void 0 ? void 0 : _tableRenderData$widt2[barIndex]) !== null && _tableRenderData$widt !== void 0 ? _tableRenderData$widt : 0) + move;
        if (setWidth < _shape.DEFAULT_WIDTH) return;
        widthMoveRef.current.endX = currentX;
        widthMoveRef.current.updateWidth = setWidth;
        currentCell.style.width = "".concat(setWidth, "px");
        currentAction.style.width = "".concat(setWidth, "px");
        currentAdd.style.width = "".concat(setWidth, "px");
      }
    }, 20);
    var mouseup = function mouseup() {
      if (typeof setWidthData === 'function' && typeof widthMoveRef.current.updateWidth === 'number') {
        dispatch === null || dispatch === void 0 ? void 0 : dispatch.action(function () {
          var _widthMoveRef$current;
          return setWidthData(barIndex, (_widthMoveRef$current = widthMoveRef.current.updateWidth) !== null && _widthMoveRef$current !== void 0 ? _widthMoveRef$current : _shape.DEFAULT_WIDTH);
        });
      }
      widthMoveRef.current = initWidthMoveRef;
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseup', mouseup);
    };
    if (typeof widthMoveRef.current.startX === 'number') {
      window.addEventListener('mousemove', mousemove);
      window.addEventListener('mouseup', mouseup);
    }
  };
  var setWidthMoveData = function setWidthMoveData(data) {
    widthMoveRef.current = data;
  };
  return {
    setWidthMoveData: setWidthMoveData,
    initWidthChangeEvent: initWidthChangeEvent
  };
}