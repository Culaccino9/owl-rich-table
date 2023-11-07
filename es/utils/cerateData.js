function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { createCellKey, createRowKey } from "./common";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "../constants/shape";
/**
 * 初始化一条cell
 */
export function createCell(cell, coord, incrementKey) {
  return _objectSpread(_objectSpread({}, cell), {}, {
    incrementKey: incrementKey,
    key: createCellKey(coord, incrementKey)
  });
}

/**
 * 初始化一条row
 */
export function createRow(col, incrementKey, colIndex, rowIncrementKey) {
  return {
    key: createRowKey(colIndex, incrementKey),
    rowValue: col === null || col === void 0 ? void 0 : col.map(function (cell, x) {
      return createCell(cell, {
        x: x,
        y: colIndex
      }, rowIncrementKey);
    }),
    rowIncrementKey: rowIncrementKey
  };
}

/**
 * 初始化新增，默认无value的行
 */
export function createDefaultRow(length, incrementKey, colIndex) {
  var _Array$fill;
  var result = (_Array$fill = new Array(length).fill('')) === null || _Array$fill === void 0 ? void 0 : _Array$fill.map(function (value) {
    return {
      value: value
    };
  });
  return createRow(result, incrementKey, colIndex, 0);
}

/**
 * 初始化数据
 * @returns
 */
export function initData(data) {
  var _value$, _value$$rowValue;
  if (!Array.isArray(data)) {
    return {
      value: [{
        key: '1',
        rowValue: [],
        rowIncrementKey: 0
      }],
      width: [DEFAULT_WIDTH],
      height: [DEFAULT_HEIGHT]
    };
  }
  var value = data === null || data === void 0 ? void 0 : data.map(function (col, y) {
    return createRow(col, 0, y, 0);
  });
  var height = value === null || value === void 0 ? void 0 : value.map(function () {
    return DEFAULT_HEIGHT;
  });
  var width = value === null || value === void 0 ? void 0 : (_value$ = value[0]) === null || _value$ === void 0 ? void 0 : (_value$$rowValue = _value$.rowValue) === null || _value$$rowValue === void 0 ? void 0 : _value$$rowValue.map(function () {
    return DEFAULT_WIDTH;
  });
  return {
    value: value,
    height: height,
    width: width
  };
}

/**
 * 获取格式化的粘贴板的值
 */
function getRow(value) {
  if (value !== null && value !== void 0 && value.includes('\t')) {
    return value === null || value === void 0 ? void 0 : value.split('\t');
  }
  return value;
}
export function getPasteValue(value) {
  if (!value || typeof value !== 'string') return undefined;
  if (value !== null && value !== void 0 && value.includes('\r\n')) {
    var _value$split;
    return value === null || value === void 0 ? void 0 : (_value$split = value.split('\r\n')) === null || _value$split === void 0 ? void 0 : _value$split.map(function (item) {
      return getRow(item);
    });
  }
  var result = getRow(value);
  if (Array.isArray(result)) {
    return [result];
  }
  return result;
}