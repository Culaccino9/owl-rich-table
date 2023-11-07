import type { Dispatch, SetStateAction } from 'react';
import type { ActionType, TableDataType } from '../types/RichTableTypes';
export default class TableDispatch {
    private undoStack;
    private redoStack;
    private maxBackCount;
    private tableFiber;
    private changeTableData;
    constructor(initData: TableDataType, changeTableData: Dispatch<SetStateAction<TableDataType>>, maxBackCount?: number);
    /**
     * 更新stack & 更新表格的试图
     * @param result 最新表格试图数据
     * @param type 需要更新哪个stack栈
     */
    private stackUpdate;
    redo(): void;
    undo(): void;
    action(cb: ActionType): void;
}
