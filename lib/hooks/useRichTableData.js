"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTableData;
var _react = require("react");
var _shape = require("../constants/shape");
var _lodash = _interopRequireDefault(require("lodash"));
var _cerateData = require("../utils/cerateData");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable @typescript-eslint/no-use-before-define */
/**
 * @description 能引起渲染的表格数据
 * @author Huang Wenjie
 * @createDate 2023-10-19
 */

function useTableData(defaultData) {
  var _useState = (0, _react.useState)(defaultData),
    _useState2 = _slicedToArray(_useState, 2),
    tableRenderData = _useState2[0],
    setTableRenderData = _useState2[1];

  // 自增key
  var incrementKey = (0, _react.useRef)(1);
  var getRowIncrementKey = function getRowIncrementKey() {
    return incrementKey.current;
  };
  var changeRowIncrementKey = function changeRowIncrementKey(isSub) {
    return incrementKey.current = isSub ? incrementKey.current - 1 : incrementKey.current + 1;
  };

  /**
   * 新增行
   * @rowIndex 添加的位置
   * @addNumber 添加数量，默认1
   */
  var addRow = function addRow(rowIndex) {
    var _result$value, _result$height;
    var addNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var incrementKey = getRowIncrementKey();

    // 添加的值
    var defaultAddRow = [];
    for (var i = 0; i < addNumber; i++) {
      var _tableRenderData$valu, _tableRenderData$valu2, _tableRenderData$valu3;
      var temp = (0, _cerateData.createDefaultRow)(tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$valu = tableRenderData.value) === null || _tableRenderData$valu === void 0 ? void 0 : (_tableRenderData$valu2 = _tableRenderData$valu[0]) === null || _tableRenderData$valu2 === void 0 ? void 0 : (_tableRenderData$valu3 = _tableRenderData$valu2.rowValue) === null || _tableRenderData$valu3 === void 0 ? void 0 : _tableRenderData$valu3.length, incrementKey, rowIndex);
      defaultAddRow.push(temp);
    }
    var result = _lodash.default.cloneDeep(tableRenderData);
    result === null || result === void 0 ? void 0 : (_result$value = result.value) === null || _result$value === void 0 ? void 0 : _result$value.splice.apply(_result$value, [rowIndex, 0].concat(defaultAddRow));
    result === null || result === void 0 ? void 0 : (_result$height = result.height) === null || _result$height === void 0 ? void 0 : _result$height.splice.apply(_result$height, [rowIndex, 0].concat(_toConsumableArray(defaultAddRow === null || defaultAddRow === void 0 ? void 0 : defaultAddRow.map(function () {
      return _shape.DEFAULT_HEIGHT;
    }))));
    changeRowIncrementKey(false);
    return result;
  };

  /**
   * 删除行
   */
  var removeRow = function removeRow(rowIndex) {
    var _tableRenderData$valu4, _result$value2, _result$height2;
    var deleteNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if ((tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$valu4 = tableRenderData.value) === null || _tableRenderData$valu4 === void 0 ? void 0 : _tableRenderData$valu4.length) - deleteNumber <= 0) return undefined;
    var result = _lodash.default.cloneDeep(tableRenderData);
    result === null || result === void 0 ? void 0 : (_result$value2 = result.value) === null || _result$value2 === void 0 ? void 0 : _result$value2.splice(rowIndex, deleteNumber);
    result === null || result === void 0 ? void 0 : (_result$height2 = result.height) === null || _result$height2 === void 0 ? void 0 : _result$height2.splice(rowIndex, deleteNumber);
    changeRowIncrementKey(false);

    // 返回一个撤回操作
    return result;
  };

  /**
   * 新增列
   */
  var addColumn = function addColumn(colIndex) {
    var _result$value3, _result$width, _Array$fill2;
    var addNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var result = _lodash.default.cloneDeep(tableRenderData);
    result === null || result === void 0 ? void 0 : (_result$value3 = result.value) === null || _result$value3 === void 0 ? void 0 : _result$value3.forEach(function (row, y) {
      var _Array$fill;
      var addData = (_Array$fill = new Array(addNumber).fill('')) === null || _Array$fill === void 0 ? void 0 : _Array$fill.map(function (_, index) {
        return (0, _cerateData.createCell)({
          value: ''
        }, {
          x: colIndex + index,
          y: y
        }, (row === null || row === void 0 ? void 0 : row.rowIncrementKey) + 1);
      });
      var rowValue = row === null || row === void 0 ? void 0 : row.rowValue;
      rowValue === null || rowValue === void 0 ? void 0 : rowValue.splice.apply(rowValue, [colIndex, 0].concat(_toConsumableArray(addData)));
      row.rowIncrementKey = (row === null || row === void 0 ? void 0 : row.rowIncrementKey) + 1;
    });
    (_result$width = result.width).splice.apply(_result$width, [colIndex, 0].concat(_toConsumableArray((_Array$fill2 = new Array(addNumber).fill('')) === null || _Array$fill2 === void 0 ? void 0 : _Array$fill2.map(function () {
      return _shape.DEFAULT_WIDTH;
    }))));
    return result;
  };

  /**
   * 删除一列
   */
  var removeColumn = function removeColumn(colIndex) {
    var _tableRenderData$valu5, _tableRenderData$valu6, _tableRenderData$valu7, _result$value4, _result$width2;
    var removeNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if ((tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$valu5 = tableRenderData.value) === null || _tableRenderData$valu5 === void 0 ? void 0 : (_tableRenderData$valu6 = _tableRenderData$valu5[0]) === null || _tableRenderData$valu6 === void 0 ? void 0 : (_tableRenderData$valu7 = _tableRenderData$valu6.rowValue) === null || _tableRenderData$valu7 === void 0 ? void 0 : _tableRenderData$valu7.length) - removeNumber <= 0) return undefined;
    var result = _lodash.default.cloneDeep(tableRenderData);
    result === null || result === void 0 ? void 0 : (_result$value4 = result.value) === null || _result$value4 === void 0 ? void 0 : _result$value4.forEach(function (row) {
      var rowValue = row === null || row === void 0 ? void 0 : row.rowValue;
      rowValue === null || rowValue === void 0 ? void 0 : rowValue.splice(colIndex, removeNumber);
      row.rowIncrementKey = (row === null || row === void 0 ? void 0 : row.rowIncrementKey) + 1;
    });
    (_result$width2 = result.width) === null || _result$width2 === void 0 ? void 0 : _result$width2.splice(colIndex, removeNumber);
    return result;
  };

  /**
   * 更新某一个值
   */

  var setCellValue = function setCellValue(coord, value) {
    var _result$value5, _result$value5$coord$, _result$value5$coord$2;
    // TODO: 优化
    var result = _lodash.default.cloneDeep(tableRenderData);
    var old = result === null || result === void 0 ? void 0 : (_result$value5 = result.value) === null || _result$value5 === void 0 ? void 0 : (_result$value5$coord$ = _result$value5[coord === null || coord === void 0 ? void 0 : coord.y]) === null || _result$value5$coord$ === void 0 ? void 0 : (_result$value5$coord$2 = _result$value5$coord$.rowValue) === null || _result$value5$coord$2 === void 0 ? void 0 : _result$value5$coord$2[coord === null || coord === void 0 ? void 0 : coord.x];
    old = _objectSpread({}, old);
    old = _objectSpread(_objectSpread({}, old), value);
    result.value[coord.y].rowValue[coord.x] = old;
    return result;
  };

  /**
   * 粘贴
   */
  var paste = function paste(e, coord) {
    var _e$clipboardData, _e$clipboardData$getD, _pasteValue$, _tableValue$, _tableValue$$rowValue;
    var value = e === null || e === void 0 ? void 0 : (_e$clipboardData = e.clipboardData) === null || _e$clipboardData === void 0 ? void 0 : (_e$clipboardData$getD = _e$clipboardData.getData) === null || _e$clipboardData$getD === void 0 ? void 0 : _e$clipboardData$getD.call(_e$clipboardData, 'text');
    var pasteValue = (0, _cerateData.getPasteValue)(value);
    if (!pasteValue) return undefined;

    // 如果是string代表没有单元格操作，直接默认事件即可（onInput会更新值派发action）
    if (typeof pasteValue === 'string') {
      return undefined;
    }
    e === null || e === void 0 ? void 0 : e.preventDefault();
    // TODO: 优化、合并的情况未处理
    var result = _lodash.default.cloneDeep(tableRenderData);
    var tableValue = result === null || result === void 0 ? void 0 : result.value;
    var height = result === null || result === void 0 ? void 0 : result.height;
    var width = result === null || result === void 0 ? void 0 : result.width;

    // x、y 粘贴开始、结束索引
    var yStartIndex = coord === null || coord === void 0 ? void 0 : coord.y;
    var ySEndIndex = yStartIndex + (pasteValue === null || pasteValue === void 0 ? void 0 : pasteValue.length) - 1;
    var xStartIndex = coord === null || coord === void 0 ? void 0 : coord.x;
    var xEndIndex = xStartIndex + (pasteValue === null || pasteValue === void 0 ? void 0 : (_pasteValue$ = pasteValue[0]) === null || _pasteValue$ === void 0 ? void 0 : _pasteValue$.length) - 1;
    // x | y 扩容的大小
    var dilatationY = ySEndIndex + 1 - (tableValue === null || tableValue === void 0 ? void 0 : tableValue.length);
    var dilatationX = xEndIndex + 1 - (tableValue === null || tableValue === void 0 ? void 0 : (_tableValue$ = tableValue[0]) === null || _tableValue$ === void 0 ? void 0 : (_tableValue$$rowValue = _tableValue$.rowValue) === null || _tableValue$$rowValue === void 0 ? void 0 : _tableValue$$rowValue.length);

    // 先扩容
    if (dilatationY > 0) {
      var dilatationRow = new Array(dilatationY).fill('').map(function (_, y) {
        var _tableValue$2, _tableValue$2$rowValu;
        return (0, _cerateData.createDefaultRow)(tableValue === null || tableValue === void 0 ? void 0 : (_tableValue$2 = tableValue[0]) === null || _tableValue$2 === void 0 ? void 0 : (_tableValue$2$rowValu = _tableValue$2.rowValue) === null || _tableValue$2$rowValu === void 0 ? void 0 : _tableValue$2$rowValu.length, incrementKey.current, (tableValue === null || tableValue === void 0 ? void 0 : tableValue.length) + y);
      });
      tableValue === null || tableValue === void 0 ? void 0 : tableValue.splice.apply(tableValue, [tableValue === null || tableValue === void 0 ? void 0 : tableValue.length, 0].concat(_toConsumableArray(dilatationRow)));
      // 为添加的格子设置默认高度
      height === null || height === void 0 ? void 0 : height.splice.apply(height, [tableValue === null || tableValue === void 0 ? void 0 : tableValue.length, 0].concat(_toConsumableArray(dilatationRow === null || dilatationRow === void 0 ? void 0 : dilatationRow.map(function () {
        return _shape.DEFAULT_HEIGHT;
      }))));
      // update key
      incrementKey.current = incrementKey.current + 1;
    }
    if (dilatationX > 0) {
      var _tableValue$3, _tableValue$3$rowValu;
      tableValue === null || tableValue === void 0 ? void 0 : tableValue.forEach(function (item, y) {
        var _item$rowValue2, _item$rowValue3;
        // update key
        item.rowIncrementKey = item.rowIncrementKey + 1;
        var dilatationCell = new Array(dilatationX).fill('').map(function (_, dilationCount) {
          var _item$rowValue;
          return (0, _cerateData.createCell)({
            value: ''
          }, {
            y: y,
            x: (item === null || item === void 0 ? void 0 : (_item$rowValue = item.rowValue) === null || _item$rowValue === void 0 ? void 0 : _item$rowValue.length) + dilationCount
          }, item.rowIncrementKey);
        });
        item === null || item === void 0 ? void 0 : (_item$rowValue2 = item.rowValue) === null || _item$rowValue2 === void 0 ? void 0 : _item$rowValue2.splice.apply(_item$rowValue2, [item === null || item === void 0 ? void 0 : (_item$rowValue3 = item.rowValue) === null || _item$rowValue3 === void 0 ? void 0 : _item$rowValue3.length, 0].concat(_toConsumableArray(dilatationCell)));
      });
      // 为添加的格子设置默认宽度
      width === null || width === void 0 ? void 0 : width.splice.apply(width, [tableValue === null || tableValue === void 0 ? void 0 : (_tableValue$3 = tableValue[0]) === null || _tableValue$3 === void 0 ? void 0 : (_tableValue$3$rowValu = _tableValue$3.rowValue) === null || _tableValue$3$rowValu === void 0 ? void 0 : _tableValue$3$rowValu.length, 0].concat(_toConsumableArray(new Array(dilatationX).fill('').map(function () {
        return _shape.DEFAULT_WIDTH;
      }))));
    }

    // 赋值
    tableValue === null || tableValue === void 0 ? void 0 : tableValue.forEach(function (row, y) {
      if (y >= yStartIndex && y <= ySEndIndex) {
        var _row$rowValue;
        row === null || row === void 0 ? void 0 : (_row$rowValue = row.rowValue) === null || _row$rowValue === void 0 ? void 0 : _row$rowValue.forEach(function (cell, x) {
          if (x >= xStartIndex && x <= xEndIndex) {
            var _pasteValue;
            cell.value = pasteValue === null || pasteValue === void 0 ? void 0 : (_pasteValue = pasteValue[y - yStartIndex]) === null || _pasteValue === void 0 ? void 0 : _pasteValue[x - xStartIndex];
          }
        });
      }
    });
    return result;
  };

  /**
   * 更新width的数据
   * @param x
   * @param width
   * @returns
   */
  var setWidthData = function setWidthData(x, width) {
    var _result$width3;
    var result = _lodash.default.cloneDeep(tableRenderData);
    (_result$width3 = result.width) === null || _result$width3 === void 0 ? void 0 : _result$width3.splice(x, 1, width);
    return result;
  };
  return {
    tableRenderData: tableRenderData,
    setTableRenderData: setTableRenderData,
    getRowIncrementKey: getRowIncrementKey,
    changeRowIncrementKey: changeRowIncrementKey,
    addRow: addRow,
    removeRow: removeRow,
    addColumn: addColumn,
    removeColumn: removeColumn,
    setCellValue: setCellValue,
    paste: paste,
    setWidthData: setWidthData
  };
}