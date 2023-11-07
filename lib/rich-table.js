"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _TableDataContext = _interopRequireDefault(require("./context/TableDataContext"));
var _TableWorkLoopContext = _interopRequireDefault(require("./context/TableWorkLoopContext"));
var _useDo = _interopRequireDefault(require("./hooks/useDo"));
var _useRichTable = _interopRequireDefault(require("./hooks/useRichTable"));
var _useRichTableData = _interopRequireDefault(require("./hooks/useRichTableData"));
var _useRichTableInstance = _interopRequireDefault(require("./hooks/useRichTableInstance"));
var _lodash = _interopRequireDefault(require("lodash"));
var _cerateData = require("./utils/cerateData");
var _dispatch = _interopRequireDefault(require("./utils/dispatch"));
var _table = _interopRequireDefault(require("./components/table"));
var _tableAction = _interopRequireDefault(require("./components/table-action"));
require("./style.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @description 富文本编辑表格
 * @author Huang Wenjie
 * @createDate 2023-10-17
 */

function RichTable(props) {
  var defaultValue = props.defaultValue,
    table = props.table;
  var tableRef = (0, _react.useRef)(null);

  // 初始化一次值（外层的值会引起重新render导致bug，不能双向绑定，注意！后续考虑本身处理？）
  var initTableValue = (0, _react.useMemo)(function () {
    return (0, _cerateData.initData)(_lodash.default.cloneDeep(defaultValue));
  }, [defaultValue]);

  // table的值的处理
  var _useTableData = (0, _useRichTableData.default)(initTableValue),
    tableRenderData = _useTableData.tableRenderData,
    setTableRenderData = _useTableData.setTableRenderData,
    addRow = _useTableData.addRow,
    removeRow = _useTableData.removeRow,
    addColumn = _useTableData.addColumn,
    removeColumn = _useTableData.removeColumn,
    setCellValue = _useTableData.setCellValue,
    paste = _useTableData.paste,
    setWidthData = _useTableData.setWidthData;

  // 注册dispatch事件系统
  var dispatch = (0, _react.useMemo)(function () {
    return new _dispatch.default(initTableValue, setTableRenderData);
  }, [initTableValue, setTableRenderData]);

  // 注册 redo和undo
  (0, _useDo.default)(dispatch);

  // 注册实例
  (0, _useRichTableInstance.default)(table, tableRenderData);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableDataContext.default.Provider, {
    value: {
      tableRenderData: tableRenderData,
      setCellValue: setCellValue,
      paste: paste,
      addRow: addRow,
      removeRow: removeRow,
      addColumn: addColumn,
      removeColumn: removeColumn,
      setWidthData: setWidthData,
      tableRef: tableRef
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableWorkLoopContext.default.Provider, {
      value: {
        dispatch: dispatch
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "rich-table-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_tableAction.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_table.default, {})]
      })
    })
  });
}
RichTable.useRichTable = _useRichTable.default;
var _default = RichTable;
exports.default = _default;