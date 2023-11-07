/// <reference types="react" />
import type { AddColumnType, AddRowType, PasteType, RemoveColumnType, RemoveRowType, SetCellValueType, SetWidthDataType } from '../types/RichTableDataHookType';
import type { TableDataType } from '../types/RichTableTypes';
/**
 * @description 能引起渲染的表格数据
 * @author Huang Wenjie
 * @createDate 2023-10-19
 */
export default function useTableData(defaultData: TableDataType): {
    tableRenderData: TableDataType;
    setTableRenderData: import("react").Dispatch<import("react").SetStateAction<TableDataType>>;
    getRowIncrementKey: () => number;
    changeRowIncrementKey: (isSub: boolean) => number;
    addRow: AddRowType;
    removeRow: RemoveRowType;
    addColumn: AddColumnType;
    removeColumn: RemoveColumnType;
    setCellValue: SetCellValueType;
    paste: PasteType;
    setWidthData: SetWidthDataType;
};
