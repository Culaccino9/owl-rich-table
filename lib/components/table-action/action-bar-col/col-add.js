"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ColAdd;
var _react = require("react");
var _TableDataContext = _interopRequireDefault(require("../../../context/TableDataContext"));
var _TableWorkLoopContext = _interopRequireDefault(require("../../../context/TableWorkLoopContext"));
var _actionAddButton = _interopRequireDefault(require("../action-add-button"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /**
                                                                                                                                                                                     * @description 行头部操作栏 - 添加行
                                                                                                                                                                                     * @author Huang Wenjie
                                                                                                                                                                                     * @createDate 2023-11-03
                                                                                                                                                                                     */
function ColAdd() {
  var _ref, _tableRenderData$heig;
  var _useContext = (0, _react.useContext)(_TableDataContext.default),
    tableRenderData = _useContext.tableRenderData,
    addRow = _useContext.addRow;
  var _useContext2 = (0, _react.useContext)(_TableWorkLoopContext.default),
    dispatch = _useContext2.dispatch;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "rich-table-col-bar-add",
    children: (_ref = [].concat(_toConsumableArray((_tableRenderData$heig = tableRenderData === null || tableRenderData === void 0 ? void 0 : tableRenderData.height) !== null && _tableRenderData$heig !== void 0 ? _tableRenderData$heig : []), [16])) === null || _ref === void 0 ? void 0 : _ref.map(function (height, index) {
      var _tableRenderData$widt, _tableRenderData$widt2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_actionAddButton.default, {
        handleClick: function handleClick() {
          if (typeof addRow === 'function') {
            dispatch === null || dispatch === void 0 ? void 0 : dispatch.action(function () {
              return addRow(index);
            });
          }
        },
        width: 16,
        height: height,
        bindId: "RICH_TABLE_COL_ADD",
        type: "col",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            position: 'relative',
            marginLeft: '30px',
            width: ((_tableRenderData$widt = tableRenderData === null || tableRenderData === void 0 ? void 0 : (_tableRenderData$widt2 = tableRenderData.width) === null || _tableRenderData$widt2 === void 0 ? void 0 : _tableRenderData$widt2.reduce(function (cur, next) {
              return cur + next;
            })) !== null && _tableRenderData$widt !== void 0 ? _tableRenderData$widt : 0) + 4,
            height: '2px',
            backgroundColor: '#006cf9'
          }
        })
      }, index);
    })
  });
}