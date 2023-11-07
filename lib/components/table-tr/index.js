"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tr;
var _react = require("react");
var _useSize = _interopRequireDefault(require("../../hooks/useSize"));
var _tableCell = _interopRequireDefault(require("../table-cell"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["key"];
/**
 * @description
 * @author Huang Wenjie
 * @createDate 2023-10-19
 */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Tr(props) {
  var rowDataSource = props.rowDataSource,
    rowIndex = props.rowIndex;
  var elementRef = (0, _react.useRef)(null);
  var size = (0, _useSize.default)(elementRef);
  (0, _react.useEffect)(function () {
    var _document$querySelect, _document$querySelect2;
    var currentColButton = (_document$querySelect = document.querySelectorAll('#RICH_TABLE_COL_BUTTON')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect[rowIndex];
    var currentColAdd = (_document$querySelect2 = document.querySelectorAll('#RICH_TABLE_COL_ADD')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2[rowIndex];
    if (!currentColButton || !currentColAdd) return;
    currentColButton.style.height = "".concat(size === null || size === void 0 ? void 0 : size.height, "px");
    currentColAdd.style.height = "".concat(size === null || size === void 0 ? void 0 : size.height, "px");
  }, [rowIndex, size === null || size === void 0 ? void 0 : size.height]);

  // size会导致Tr render；MemoTr来解
  var memoTr = (0, _react.useMemo)(function () {
    var _rowDataSource$rowVal;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: rowDataSource === null || rowDataSource === void 0 ? void 0 : (_rowDataSource$rowVal = rowDataSource.rowValue) === null || _rowDataSource$rowVal === void 0 ? void 0 : _rowDataSource$rowVal.map(function (_ref, x) {
        var key = _ref.key,
          rest = _objectWithoutProperties(_ref, _excluded);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableCell.default, _objectSpread({
          bindKey: key,
          coord: {
            y: rowIndex,
            x: x
          }
        }, rest), key);
      })
    });
  }, [rowDataSource === null || rowDataSource === void 0 ? void 0 : rowDataSource.rowValue, rowIndex]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
    ref: elementRef,
    "data-key": rowDataSource === null || rowDataSource === void 0 ? void 0 : rowDataSource.key,
    "data-index": rowIndex,
    children: memoTr
  });
}