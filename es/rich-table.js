import { useMemo, useRef } from 'react';
import TableDataContext from "./context/TableDataContext";
import TableWorkLoopContext from "./context/TableWorkLoopContext";
import useDo from "./hooks/useDo";
import useRichTable from "./hooks/useRichTable";
import useTableData from "./hooks/useRichTableData";
import useRichTableInstance from "./hooks/useRichTableInstance";
import _ from 'lodash';
import { initData } from "./utils/cerateData";
import TableDispatch from "./utils/dispatch";
import Table from "./components/table";
import TableAction from "./components/table-action";
import "./style.css";

/**
 * @description 富文本编辑表格
 * @author Huang Wenjie
 * @createDate 2023-10-17
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function RichTable(props) {
  var defaultValue = props.defaultValue,
    table = props.table;
  var tableRef = useRef(null);

  // 初始化一次值（外层的值会引起重新render导致bug，不能双向绑定，注意！后续考虑本身处理？）
  var initTableValue = useMemo(function () {
    return initData(_.cloneDeep(defaultValue));
  }, [defaultValue]);

  // table的值的处理
  var _useTableData = useTableData(initTableValue),
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
  var dispatch = useMemo(function () {
    return new TableDispatch(initTableValue, setTableRenderData);
  }, [initTableValue, setTableRenderData]);

  // 注册 redo和undo
  useDo(dispatch);

  // 注册实例
  useRichTableInstance(table, tableRenderData);
  return /*#__PURE__*/_jsx(TableDataContext.Provider, {
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
    children: /*#__PURE__*/_jsx(TableWorkLoopContext.Provider, {
      value: {
        dispatch: dispatch
      },
      children: /*#__PURE__*/_jsxs("div", {
        className: "rich-table-container",
        children: [/*#__PURE__*/_jsx(TableAction, {}), /*#__PURE__*/_jsx(Table, {})]
      })
    })
  });
}
RichTable.useRichTable = useRichTable;
export default RichTable;