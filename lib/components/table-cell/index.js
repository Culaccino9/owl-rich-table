"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _TableDataContext = _interopRequireDefault(require("../../context/TableDataContext"));
var _TableWorkLoopContext = _interopRequireDefault(require("../../context/TableWorkLoopContext"));
var _lodash = _interopRequireDefault(require("lodash"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @description 单元格
 * @author Huang Wenjie
 * @createDate 2023-10-27
 */

function TableCell(props) {
  var _useContext = (0, _react.useContext)(_TableWorkLoopContext.default),
    dispatch = _useContext.dispatch;
  var _useContext2 = (0, _react.useContext)(_TableDataContext.default),
    setCellValue = _useContext2.setCellValue,
    paste = _useContext2.paste;
  var rowSpan = props.rowSpan,
    colSpan = props.colSpan,
    bindKey = props.bindKey,
    value = props.value,
    coord = props.coord;

  /**
   * 使用自控锁，防止光标前移
   */
  var htmlValueRef = (0, _react.useRef)({
    preValue: value,
    shouldRender: true
  });
  var tdRef = (0, _react.useRef)(undefined);
  (0, _react.useEffect)(function () {
    if (!tdRef.current) return;
    if (htmlValueRef.current.shouldRender) {
      var _value$toString;
      htmlValueRef.current.preValue = value;
      tdRef.current.innerHTML = "".concat(value === null || value === void 0 ? void 0 : (_value$toString = value.toString()) === null || _value$toString === void 0 ? void 0 : _value$toString.replace(/\n/g, '<br>'));

      // 设置光标在最后
      if (!(tdRef !== null && tdRef !== void 0 && tdRef.current)) return;
      var _doc = document;
      if (window.getSelection) {
        var _tdRef$current;
        //ie11 10 9 ff safari
        (_tdRef$current = tdRef.current) === null || _tdRef$current === void 0 ? void 0 : _tdRef$current.focus(); //解决ff不获取焦点无法定位问题
        var range = window.getSelection(); //创建range
        range.selectAllChildren(tdRef === null || tdRef === void 0 ? void 0 : tdRef.current); //range 选择obj下所有子内容
        range.collapseToEnd(); //光标移至最后
      } else if (_doc !== null && _doc !== void 0 && _doc.selection) {
        //ie10 9 8 7 6 5
        var _range = _doc === null || _doc === void 0 ? void 0 : _doc.selection.createRange(); //创建选择对象
        _range.moveToElementText(tdRef.current); //range定位到obj
        _range.collapse(false); //光标移至最后
        _range.select();
      }
    }
    htmlValueRef.current.shouldRender = true;
  }, [value]);

  /**
   * 改变值的事件
   * BUG: 在1000内执行了其他的action，会乱掉，要做打断
   */
  var handleChange = _lodash.default.debounce(function (e) {
    var _e$target;
    htmlValueRef.current.shouldRender = false;
    var value = (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.innerText;
    if (typeof setCellValue === 'function') {
      return dispatch === null || dispatch === void 0 ? void 0 : dispatch.action(function () {
        return setCellValue(coord, {
          value: value
        });
      });
    }
  }, 500);

  /**
   * 粘贴的函数
   */
  var handlePaste = function handlePaste(e) {
    if (typeof paste === 'function') {
      dispatch === null || dispatch === void 0 ? void 0 : dispatch.action(function () {
        return paste(e, coord);
      });
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
    ref: tdRef,
    rowSpan: rowSpan !== null && rowSpan !== void 0 ? rowSpan : 1,
    colSpan: colSpan !== null && colSpan !== void 0 ? colSpan : 1,
    onInput: handleChange,
    onPaste: handlePaste,
    "data-key": bindKey,
    style: {
      // maxWidth: (tableRenderData?.width?.[coord?.x] ?? 21) - 21,
      wordBreak: 'break-word'
    },
    contentEditable: true
    // dangerouslySetInnerHTML={{
    //   // __html: `${value?.toString()?.replace(/\n/g, '<br>')}`,
    // }}
  });
}
var _default = /*#__PURE__*/(0, _react.memo)(TableCell);
exports.default = _default;