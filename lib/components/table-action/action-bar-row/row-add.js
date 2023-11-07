"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RowAdd;
var _react = require("react");
var _TableDataContext = _interopRequireDefault(require("../../../context/TableDataContext"));
var _TableWorkLoopContext = _interopRequireDefault(require("../../../context/TableWorkLoopContext"));
var _actionAddButton = _interopRequireDefault(require("../action-add-button"));
var _actionMoveBar = _interopRequireDefault(require("../action-move-bar"));
require("./style.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /**
                                                                                                                                                                                     * @description 行头部操作栏 - 添加列
                                                                                                                                                                                     * @author Huang Wenjie
                                                                                                                                                                                     * @createDate 2023-11-02
                                                                                                                                                                                     */
function RowAdd() {
  var _ref;
  var _useContext = (0, _react.useContext)(_TableDataContext.default),
    tableRenderData = _useContext.tableRenderData,
    addColumn = _useContext.addColumn;
  var _useContext2 = (0, _react.useContext)(_TableWorkLoopContext.default),
    dispatch = _useContext2.dispatch;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "rich-table-row-bar-add",
    children: (_ref = [].concat(_toConsumableArray((tableRenderData === null || tableRenderData === void 0 ? void 0 : tableRenderData.width) || []), [16])) === null || _ref === void 0 ? void 0 : _ref.map(function (width, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_actionAddButton.default, {
        handleClick: function handleClick() {
          return dispatch === null || dispatch === void 0 ? void 0 : dispatch.action(function () {
            if (typeof addColumn === 'function') {
              return addColumn(index);
            }
          });
        },
        width: width,
        height: 16,
        childrenIsMoverBar: !!index,
        bindId: "RICH_TABLE_ROW_ADD",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "row-bar-add-tip-bar"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_actionMoveBar.default, {
          barIndex: index - 1
        })]
      }, index);
    })
  });
}