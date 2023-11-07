import type { RefObject } from 'react';
import type { AddColumnType, AddRowType, PasteType, RemoveColumnType, RemoveRowType, SetCellValueType, SetWidthDataType } from '../types/RichTableDataHookType';
import type { TableDataType } from '../types/RichTableTypes';
export interface TableDataContextType {
    tableRenderData?: TableDataType;
    setCellValue?: SetCellValueType;
    paste?: PasteType;
    addRow?: AddRowType;
    removeRow?: RemoveRowType;
    addColumn?: AddColumnType;
    removeColumn?: RemoveColumnType;
    setWidthData?: SetWidthDataType;
    tableRef?: RefObject<HTMLTableElement>;
}
declare const TableDataContext: import("react").Context<TableDataContextType>;
export default TableDataContext;
